import vision from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3";
const { FaceLandmarker, FilesetResolver, DrawingUtils } = vision;
const demosSection = document.getElementById("demos");
const imageBlendShapes = document.getElementById("image-blend-shapes");
const videoBlendShapes = document.getElementById("video-blend-shapes");

// Global face variables for access in drawBlendShapes and elsewhere
let faceVisible = 0;
let faceX = 0, faceY = 0, facePitch = 0, faceYaw = 0, faceRoll = 0, faceDistance = 0;
let mouthOpenness = 0, smile = 0;
let leftEyeOpenness = 0, rightEyeOpenness = 0;

let faceLandmarker;
let runningMode = "IMAGE";
let webcamRunning = false;
const videoWidth = 640;

// Before we can use HandLandmarker class we must wait for it to finish
// loading. Machine Learning models can be large and take a moment to
// get everything needed to run.
async function createFaceLandmarker() {
  const filesetResolver = await FilesetResolver.forVisionTasks( 
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm"
  );
  faceLandmarker = await FaceLandmarker.createFromOptions(filesetResolver, {
    baseOptions: {
      modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task`,
      delegate: "GPU"
    },
    outputFaceBlendshapes: true,
    runningMode,
    numFaces: 1
  });
  demosSection.classList.remove("invisible");

  // Check if we should wait for welcome overlay before enabling camera
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('mobile') !== 'true') {
    // No mobile mode - start camera immediately
    enableCam();
  }
  // If mobile=true, camera will be started after user clicks "Verbinden"
}
createFaceLandmarker();


const video = document.getElementById("webcam");
const canvasElement = document.getElementById(
  "output_canvas"
);

const canvasCtx = canvasElement.getContext("2d");

// Check if webcam access is supported.
function hasGetUserMedia() {
  return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}

// Enable the live webcam view and start detection.
// Make it globally available for the welcome overlay button
window.enableCam = enableCam;
function enableCam(event) {
  if (!faceLandmarker) {
    console.log("Wait! faceLandmarker not loaded yet.");
    return;
  }

  webcamRunning = true;

  // getUsermedia parameters.
  const constraints = {
    video: {
     // deviceId: { exact: "46b2e1ce273c32c9b9315d528a498af30589a00753901961ec047db4562ce573" }
    }
  };

  // Activate the webcam stream.
  navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
      video.srcObject = stream;
      video.addEventListener("loadeddata", predictWebcam);
      
      // Hide loading screen once the camera is ready
      const loadingScreen = document.getElementById("loading-screen");
      if (loadingScreen) {
        loadingScreen.style.display = "none";
      }
    })
    .catch((err) => {
      console.error("Camera access error: ", err);
      const errorMessage = document.createElement("div");
      errorMessage.textContent =
        (typeof t === "function" ? t("camera.error") : "Error accessing the camera: ") +
        err.message;
      errorMessage.style.color = "#e9521e";
      errorMessage.style.textAlign = "center";
      errorMessage.style.marginTop = "20px";
      document.body.appendChild(errorMessage);
    });
}

let lastVideoTime = -1;
let results = undefined;
const drawingUtils = new DrawingUtils(canvasCtx);

// Custom drawing function for pixel coordinates with sharp lines
function drawConnectorsPixels(landmarks, connections, color, lineWidth) {
  canvasCtx.strokeStyle = color;
  canvasCtx.lineWidth = lineWidth;
  canvasCtx.lineCap = "round";
  canvasCtx.lineJoin = "round";

  for (const connection of connections) {
    const start = landmarks[connection.start];
    const end = landmarks[connection.end];
    if (start && end) {
      canvasCtx.beginPath();
      canvasCtx.moveTo(start.x, start.y);
      canvasCtx.lineTo(end.x, end.y);
      canvasCtx.stroke();
    }
  }
}
async function predictWebcam() {
  // Set canvas internal resolution to match viewport for sharp rendering
  const dpr = window.devicePixelRatio || 1;
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  // Only resize if dimensions changed to avoid performance hit
  if (canvasElement.width !== viewportWidth * dpr || canvasElement.height !== viewportHeight * dpr) {
    canvasElement.width = viewportWidth * dpr;
    canvasElement.height = viewportHeight * dpr;
    canvasCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  // Clear canvas
  canvasCtx.clearRect(0, 0, viewportWidth, viewportHeight);

  // Now let's start detecting the stream.
  if (runningMode === "IMAGE") {
    runningMode = "VIDEO";
    await faceLandmarker.setOptions({ runningMode: runningMode });
  }
  let startTimeMs = performance.now();
  if (lastVideoTime !== video.currentTime) {
    lastVideoTime = video.currentTime;
    results = faceLandmarker.detectForVideo(video, startTimeMs);
  }

  // Calculate object-fit: cover transformation
  // This matches how the video is displayed in the viewport
  const videoAspect = video.videoWidth / video.videoHeight;
  const viewportAspect = viewportWidth / viewportHeight;

  let scale, offsetX, offsetY;
  if (videoAspect > viewportAspect) {
    // Video is wider - crop sides
    scale = viewportHeight / video.videoHeight;
    offsetX = (viewportWidth - video.videoWidth * scale) / 2;
    offsetY = 0;
  } else {
    // Video is taller - crop top/bottom
    scale = viewportWidth / video.videoWidth;
    offsetX = 0;
    offsetY = (viewportHeight - video.videoHeight * scale) / 2;
  }

  if (results.faceLandmarks) {
    for (const landmarks of results.faceLandmarks) {
      // Transform landmarks to match object-fit: cover positioning
      // Note: Video is already mirrored via CSS, so we don't mirror X here
      const transformedLandmarks = landmarks.map(lm => ({
        x: lm.x * video.videoWidth * scale + offsetX,
        y: lm.y * video.videoHeight * scale + offsetY,
        z: lm.z
      }));

      // Draw using pixel coordinates
      drawConnectorsPixels(transformedLandmarks, FaceLandmarker.FACE_LANDMARKS_TESSELATION, "#C0C0C070", 1);
      drawConnectorsPixels(transformedLandmarks, FaceLandmarker.FACE_LANDMARKS_RIGHT_EYE, "#f8c528", 2);
      drawConnectorsPixels(transformedLandmarks, FaceLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW, "#f8c528", 2);
      drawConnectorsPixels(transformedLandmarks, FaceLandmarker.FACE_LANDMARKS_LEFT_EYE, "#66c2c6", 2);
      drawConnectorsPixels(transformedLandmarks, FaceLandmarker.FACE_LANDMARKS_LEFT_EYEBROW, "#66c2c6", 2);
      drawConnectorsPixels(transformedLandmarks, FaceLandmarker.FACE_LANDMARKS_FACE_OVAL, "#E0E0E0", 2);
      drawConnectorsPixels(transformedLandmarks, FaceLandmarker.FACE_LANDMARKS_LIPS, "#e9521e", 2);
      drawConnectorsPixels(transformedLandmarks, FaceLandmarker.FACE_LANDMARKS_RIGHT_IRIS, "#7a2a18", 2);
      drawConnectorsPixels(transformedLandmarks, FaceLandmarker.FACE_LANDMARKS_LEFT_IRIS, "#1d4f53", 2);
    }
  }
  if (results.faceLandmarks.length > 0) {
    faceVisible = 1;
    const nose = results.faceLandmarks[0][1]; // landmark 1 = tip of nose
    faceX = Math.round(nose.x * 100);
    faceY = Math.round(nose.y * 100);
    let distanceRaw = -nose.z;
    faceDistance = Math.min(180, Math.max(0, Math.round(100-(distanceRaw)*500))) ;
    // Compute simple face orientation approximation from eye landmarks
    const rightEye = results.faceLandmarks[0][33];  // approx left eye outer
    const leftEye = results.faceLandmarks[0][263]; // approx right eye outer
    const chin = results.faceLandmarks[0][152];
    const forehead = results.faceLandmarks[0][10];

    // Yaw: 0 = looking 90° left, 99 = looking 90° right
    let yawRaw = (rightEye.z - leftEye.z); // positive if looking right
    // Pitch: 0 = looking down, 99 = looking up
    let pitchRaw = (forehead.z - chin.z); // positive if looking up
    // Scale and clamp values to 0-99
    faceYaw = Math.min(99, Math.max(0, Math.round((yawRaw + 0.12) * 440)));
    facePitch = Math.min(99, Math.max(0, Math.round((pitchRaw + 0.2) * 275)));
    faceRoll = Math.min(9, Math.max(0, Math.round((rightEye.y - leftEye.y + 0.2) * 27)));

    const upperLip = results.faceLandmarks[0][13];
    const lowerLip = results.faceLandmarks[0][14];
    const mouthOpennessRaw = Math.abs(lowerLip.y - upperLip.y);
    mouthOpenness = Math.min(99, Math.max(0, Math.round(mouthOpennessRaw * 1500)));

    const rightEyeTop = results.faceLandmarks[0][159];
    const rightEyeBottom = results.faceLandmarks[0][145];
    const rightEyeInner = results.faceLandmarks[0][133];
    const rightEyeOuter = results.faceLandmarks[0][33];
    const rightEyeHeight = Math.abs(rightEyeTop.y - rightEyeBottom.y);
    const rightEyeWidth = Math.abs(rightEyeInner.x - rightEyeOuter.x);
    const rightEyeRatio = rightEyeHeight / rightEyeWidth;
    rightEyeOpenness = Math.min(99, Math.max(0, Math.round(rightEyeRatio * 100)));

    const leftEyeTop = results.faceLandmarks[0][386];
    const leftEyeBottom = results.faceLandmarks[0][374];
    const leftEyeInner = results.faceLandmarks[0][362];
    const leftEyeOuter = results.faceLandmarks[0][263];
    const leftEyeHeight = Math.abs(leftEyeTop.y - leftEyeBottom.y);
    const leftEyeWidth = Math.abs(leftEyeInner.x - leftEyeOuter.x);
    const leftEyeRatio = leftEyeHeight / leftEyeWidth;
    leftEyeOpenness = Math.min(99, Math.max(0, Math.round(leftEyeRatio * 100)));

    const mouthLeft = results.faceLandmarks[0][61];
    const mouthRight = results.faceLandmarks[0][291];
    const smileRaw = Math.abs(mouthRight.x - mouthLeft.x);
    //smile = Math.min(99, Math.max(0, Math.round((smileRaw - 0.02) * 1000)));

    const eyeLeft = results.faceLandmarks[0][33];
const eyeRight = results.faceLandmarks[0][263];
const faceWidth = Math.abs(eyeRight.x - eyeLeft.x); // a proxy for face scale
const smileRatio = smileRaw / faceWidth;
smile = Math.min(9, Math.max(0, Math.round((smileRatio - 0.35) * 30)));

  } else {
    faceVisible = 0;
  }

  drawBlendShapes(videoBlendShapes, results.faceBlendshapes ?? []);

 

  // Call this function again to keep predicting when the browser is ready.
  if (webcamRunning === true) {
    window.requestAnimationFrame(predictWebcam);
  }
}

function drawBlendShapes(el, blendShapes) {
  // Allow drawing even when blendShapes is empty so faceVisible can still update

  //console.log(blendShapes[0]);
  
  // Die Bezeichnungen sind identisch mit den Blöcken der MakeCode-Erweiterung.
  const label = (key) => (typeof t === "function" ? t(key) : key);
  const row = (key, value, width) =>
    `<li class="blend-shapes-item"><span class="blend-shapes-label">${label(key)}</span>` +
    `<span class="blend-shapes-value" style="width: ${width}px">${value}</span></li>`;

  let htmlMaker = "";
  htmlMaker +=
    row("value.x", faceX, faceX * 3) +
    row("value.y", faceY, faceY * 3) +
    row("value.z", faceDistance, faceDistance * 3) +
    row("value.yaw", faceYaw, faceYaw * 3) +
    row("value.pitch", facePitch, facePitch * 3) +
    row("value.mouth", mouthOpenness, mouthOpenness * 3) +
    row("value.leftEye", leftEyeOpenness, leftEyeOpenness * 3) +
    row("value.rightEye", rightEyeOpenness, rightEyeOpenness * 3) +
    row("value.roll", faceRoll, faceRoll * 30) +
    row("value.smile", smile, smile * 30) +
    row("value.face", faceVisible, faceVisible * 100);

  /*
  if (blendShapes[0] && blendShapes[0].categories) {
    blendShapes[0].categories.map((shape) => {
      htmlMaker += `
        <li class="blend-shapes-item">
          <span class="blend-shapes-label">${
            shape.displayName || shape.categoryName
          }</span>
          <span class="blend-shapes-value" style="width: calc(${
            +shape.score * 100
          }% - 120px)">${(+shape.score).toFixed(4)}</span>
        </li>
      `;
    });
  }
*/

  el.innerHTML = htmlMaker;
}



function formatAndTrim(value) {
  let trimmedValue = Math.max(0, Math.min(99, value));
  return trimmedValue.toString().padStart(2, '0');
}

setInterval(() => {
  if (typeof sendUART === 'function') {
    const data =
      formatAndTrim(faceX) +
      formatAndTrim(faceY) +
      formatAndTrim(faceDistance) +
      formatAndTrim(faceYaw) +
      formatAndTrim(facePitch) +
      formatAndTrim(mouthOpenness) +
      formatAndTrim(leftEyeOpenness) +
      formatAndTrim(rightEyeOpenness)+
      faceRoll+
      smile+
      faceVisible;

    sendUART(data);
   
  }
}, 100); // every 100ms = 10 times per second
