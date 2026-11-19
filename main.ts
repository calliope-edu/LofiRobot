/**
 * LOFI ROBOT Bluetooth / Serial Extension
 *
 * Payload layout of the Face-App (terminated by \n):
 *   00-01 X   02-03 Y   04-05 Z   06-07 Yaw   08-09 Pitch
 *   10-11 Mouth   12-13 LeftEye   14-15 RightEye
 *   16 Roll   17 Smile   18 FaceVisible
 *
 * Control-App sends single words ("up", "down", ...) or a slider message
 * with a leading "c" (Slider1) / "x" (Slider2) followed by three digits.
 */

enum ConnectionType {
    //% block="Bluetooth"
    //% block.loc.de="Bluetooth"
    //% block.loc.fr="Bluetooth"
    //% block.loc.es="Bluetooth"
    //% block.loc.it="Bluetooth"
    //% block.loc.el="Bluetooth"
    Bluetooth,
    //% block="Serial (USB)"
    //% block.loc.de="Seriell (USB)"
    //% block.loc.fr="Série (USB)"
    //% block.loc.es="Serie (USB)"
    //% block.loc.it="Seriale (USB)"
    //% block.loc.el="Σειριακή (USB)"
    Serial
}

enum FaceValues {
    //% block="X"
    //% block.loc.de="X"
    //% block.loc.fr="X"
    //% block.loc.es="X"
    //% block.loc.it="X"
    //% block.loc.el="X"
    X,
    //% block="Y"
    //% block.loc.de="Y"
    //% block.loc.fr="Y"
    //% block.loc.es="Y"
    //% block.loc.it="Y"
    //% block.loc.el="Y"
    Y,
    //% block="Z"
    //% block.loc.de="Z"
    //% block.loc.fr="Z"
    //% block.loc.es="Z"
    //% block.loc.it="Z"
    //% block.loc.el="Z"
    Z,
    //% block="Yaw"
    //% block.loc.de="Drehen"
    //% block.loc.fr="Rotation"
    //% block.loc.es="Giro"
    //% block.loc.it="Rotazione"
    //% block.loc.el="Περιστροφή"
    Yaw,
    //% block="Pitch"
    //% block.loc.de="Nicken"
    //% block.loc.fr="Tangage"
    //% block.loc.es="Cabeceo"
    //% block.loc.it="Beccheggio"
    //% block.loc.el="Κλίση"
    Pitch,
    //% block="Mouth"
    //% block.loc.de="Mund"
    //% block.loc.fr="Bouche"
    //% block.loc.es="Boca"
    //% block.loc.it="Bocca"
    //% block.loc.el="Στόμα"
    Mouth,
    //% block="Left Eye"
    //% block.loc.de="Linkes Auge"
    //% block.loc.fr="Œil gauche"
    //% block.loc.es="Ojo izquierdo"
    //% block.loc.it="Occhio sinistro"
    //% block.loc.el="Αριστερό μάτι"
    LeftEye,
    //% block="Right Eye"
    //% block.loc.de="Rechtes Auge"
    //% block.loc.fr="Œil droit"
    //% block.loc.es="Ojo derecho"
    //% block.loc.it="Occhio destro"
    //% block.loc.el="Δεξί μάτι"
    RightEye,
    //% block="Roll"
    //% block.loc.de="Rollen"
    //% block.loc.fr="Roulis"
    //% block.loc.es="Balanceo"
    //% block.loc.it="Rollio"
    //% block.loc.el="Κύλιση"
    Roll,
    //% block="Smile"
    //% block.loc.de="Lächeln"
    //% block.loc.fr="Sourire"
    //% block.loc.es="Sonrisa"
    //% block.loc.it="Sorriso"
    //% block.loc.el="Χαμόγελο"
    Smile
}

enum FaceDetection {
    //% block="detected"
    //% block.loc.de="erkannt"
    //% block.loc.fr="détecté"
    //% block.loc.es="detectada"
    //% block.loc.it="rilevato"
    //% block.loc.el="ανιχνεύθηκε"
    Detected,
    //% block="not detected"
    //% block.loc.de="nicht erkannt"
    //% block.loc.fr="non détecté"
    //% block.loc.es="no detectada"
    //% block.loc.it="non rilevato"
    //% block.loc.el="δεν ανιχνεύθηκε"
    NotDetected
}

enum SliderNumber {
    //% block="Slider1"
    //% block.loc.de="Slider1"
    //% block.loc.fr="Slider1"
    //% block.loc.es="Slider1"
    //% block.loc.it="Slider1"
    //% block.loc.el="Slider1"
    Slider1,
    //% block="Slider2"
    //% block.loc.de="Slider2"
    //% block.loc.fr="Slider2"
    //% block.loc.es="Slider2"
    //% block.loc.it="Slider2"
    //% block.loc.el="Slider2"
    Slider2,
    //% block="↑"
    //% block.loc.de="↑"
    //% block.loc.fr="↑"
    //% block.loc.es="↑"
    //% block.loc.it="↑"
    //% block.loc.el="↑"
    Up,
    //% block="↓"
    //% block.loc.de="↓"
    //% block.loc.fr="↓"
    //% block.loc.es="↓"
    //% block.loc.it="↓"
    //% block.loc.el="↓"
    Down,
    //% block="←"
    //% block.loc.de="←"
    //% block.loc.fr="←"
    //% block.loc.es="←"
    //% block.loc.it="←"
    //% block.loc.el="←"
    Left,
    //% block="→"
    //% block.loc.de="→"
    //% block.loc.fr="→"
    //% block.loc.es="→"
    //% block.loc.it="→"
    //% block.loc.el="→"
    Right,
    //% block="🔊"
    //% block.loc.de="🔊"
    //% block.loc.fr="🔊"
    //% block.loc.es="🔊"
    //% block.loc.it="🔊"
    //% block.loc.el="🔊"
    Horn,
    //% block="A"
    //% block.loc.de="A"
    //% block.loc.fr="A"
    //% block.loc.es="A"
    //% block.loc.it="A"
    //% block.loc.el="A"
    ButtonA,
    //% block="B"
    //% block.loc.de="B"
    //% block.loc.fr="B"
    //% block.loc.es="B"
    //% block.loc.it="B"
    //% block.loc.el="B"
    ButtonB,
    //% block="Joystick X"
    //% block.loc.de="Joystick X"
    //% block.loc.fr="Joystick X"
    //% block.loc.es="Joystick X"
    //% block.loc.it="Joystick X"
    //% block.loc.el="Joystick X"
    JoystickX,
    //% block="Joystick Y"
    //% block.loc.de="Joystick Y"
    //% block.loc.fr="Joystick Y"
    //% block.loc.es="Joystick Y"
    //% block.loc.it="Joystick Y"
    //% block.loc.el="Joystick Y"
    JoystickY
}

enum JoystickAxis {
    //% block="X"
    //% block.loc.de="X"
    //% block.loc.fr="X"
    //% block.loc.es="X"
    //% block.loc.it="X"
    //% block.loc.el="X"
    X,
    //% block="Y"
    //% block.loc.de="Y"
    //% block.loc.fr="Y"
    //% block.loc.es="Y"
    //% block.loc.it="Y"
    //% block.loc.el="Y"
    Y
}

enum ControlMode {
    //% block="D-Pad"
    //% block.loc.de="D-Pad"
    //% block.loc.fr="D-Pad"
    //% block.loc.es="D-Pad"
    //% block.loc.it="D-Pad"
    //% block.loc.el="D-Pad"
    DPad,
    //% block="Joystick"
    //% block.loc.de="Joystick"
    //% block.loc.fr="Joystick"
    //% block.loc.es="Joystick"
    //% block.loc.it="Joystick"
    //% block.loc.el="Joystick"
    Analog,
    //% block="Tilt"
    //% block.loc.de="Neigung"
    //% block.loc.fr="Inclinaison"
    //% block.loc.es="Inclinación"
    //% block.loc.it="Inclinazione"
    //% block.loc.el="Κλίση"
    Tilt
}

enum ControlCommands {
    //% blockId="control_left" block="←"
    //% block.loc.de="←"
    //% block.loc.fr="←"
    //% block.loc.es="←"
    //% block.loc.it="←"
    //% block.loc.el="←"
    Left,
    //% blockId="control_up" block="↑"
    //% block.loc.de="↑"
    //% block.loc.fr="↑"
    //% block.loc.es="↑"
    //% block.loc.it="↑"
    //% block.loc.el="↑"
    Up,
    //% blockId="control_right" block="→"
    //% block.loc.de="→"
    //% block.loc.fr="→"
    //% block.loc.es="→"
    //% block.loc.it="→"
    //% block.loc.el="→"
    Right,
    //% blockId="control_down" block="↓"
    //% block.loc.de="↓"
    //% block.loc.fr="↓"
    //% block.loc.es="↓"
    //% block.loc.it="↓"
    //% block.loc.el="↓"
    Down,
    //% blockId="control_horn" block="🔊"
    //% block.loc.de="🔊"
    //% block.loc.fr="🔊"
    //% block.loc.es="🔊"
    //% block.loc.it="🔊"
    //% block.loc.el="🔊"
    Horn,
    //% blockId="control_x" block="Slider1"
    //% block.loc.de="Slider1"
    //% block.loc.fr="Slider1"
    //% block.loc.es="Slider1"
    //% block.loc.it="Slider1"
    //% block.loc.el="Slider1"
    XCommand,
    //% blockId="control_stop" block="⏹"
    //% block.loc.de="⏹"
    //% block.loc.fr="⏹"
    //% block.loc.es="⏹"
    //% block.loc.it="⏹"
    //% block.loc.el="⏹"
    Stop,
    //% blockId="control_c" block="Slider2"
    //% block.loc.de="Slider2"
    //% block.loc.fr="Slider2"
    //% block.loc.es="Slider2"
    //% block.loc.it="Slider2"
    //% block.loc.el="Slider2"
    CCommand
}

/**
 * Only kept so that programs written for version 0.1.x still compile.
 * Not offered in the toolbox any more.
 */
enum RobotAppType {
    //% block="Face-App"
    //% block.loc.de="Face-App"
    //% block.loc.fr="Face-App"
    //% block.loc.es="Face-App"
    //% block.loc.it="Face-App"
    //% block.loc.el="Face-App"
    FaceApp,
    //% block="Control"
    //% block.loc.de="Control"
    //% block.loc.fr="Control"
    //% block.loc.es="Control"
    //% block.loc.it="Control"
    //% block.loc.el="Control"
    Control
}

/**
 * Only kept so that programs written for version 0.1.x still compile.
 * Not offered in the toolbox any more.
 */
enum ControlValues {
    //% block="Joystick X"
    //% block.loc.de="Joystick X"
    //% block.loc.fr="Joystick X"
    //% block.loc.es="Joystick X"
    //% block.loc.it="Joystick X"
    //% block.loc.el="Joystick X"
    XValue,
    //% block="Slider"
    //% block.loc.de="Slider"
    //% block.loc.fr="Slider"
    //% block.loc.es="Slider"
    //% block.loc.it="Slider"
    //% block.loc.el="Slider"
    Control
}

//% weight=20 color=#ff6900 icon="\uf118"
//% groups='["Verbindung", "Facerobot-App", "Control-App", "Fortgeschritten"]'
namespace LofiRobot {
    // Face-App values
    let x = 0
    let y = 0
    let z = 0
    let yaw = 0
    let pitch = 0
    let mouth = 0
    let left_eye = 0
    let right_eye = 0
    let roll = 0
    let smile = 0
    let face_visible = 0

    // Control-App values
    let slider1 = 0
    let slider2 = 0
    let legacy_control_value = 0

    // Button states (1 = pressed). The app sends "UP" on press and "up" on release.
    let upPressed = 0
    let downPressed = 0
    let leftPressed = 0
    let rightPressed = 0
    let hornPressed = 0
    let aPressed = 0
    let bPressed = 0

    // Joystick / Tilt values (-90..90), shared by "analog" and "tilt" modes
    let joystickX = 0
    let joystickY = 0

    // Current control mode as reported by the Control-App
    // 0 = D-Pad, 1 = Joystick (analog), 2 = Tilt (accelerometer)
    let currentMode = 0

    let receivedString = ""
    let listenerStarted = false
    let legacyControlIcons = false
    let dataHandlers: (() => void)[] = []
    let controlHandlers: (() => void)[] = []
    let joystickHandlers: (() => void)[] = []
    let modeHandlers: (() => void)[] = []

    /**
     * Starts the connection to the app and the reception of data.
     * @param connection Bluetooth for the mobile apps, Serial for a USB connection
     */
    //% block="Initialize connection %connection"
    //% block.loc.de="Verbindung initialisieren %connection"
    //% block.loc.fr="Initialiser la connexion %connection"
    //% block.loc.es="Inicializar conexión %connection"
    //% block.loc.it="Inizializza connessione %connection"
    //% block.loc.el="Αρχικοποίηση σύνδεσης %connection"
    //% weight=100
    //% group="Verbindung"
    export function initializeConnection(connection: ConnectionType): void {
        if (listenerStarted) {
            return
        }
        listenerStarted = true

        if (connection == ConnectionType.Serial) {
            serial.redirectToUSB()
            serial.setRxBufferSize(128)
            serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
                handleMessage(serial.readUntil(serial.delimiters(Delimiters.NewLine)))
            })
        } else {
            bluetooth.startUartService()
            bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
                handleMessage(bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine)))
            })
        }

        basic.showIcon(IconNames.Square)
        for (let i = 0; i < 3; i++) {
            led.plot(2, 2)
            basic.pause(200)
            led.unplot(2, 2)
            basic.pause(200)
        }
    }

    /**
     * Scroll the friendly name (e.g. "VIZIP") on the LED matrix.
     * This is the name shown when connecting via Bluetooth.
     */
    //% block="Calliope mini BLE-device-name"
    //% block.loc.de="Calliope mini BLE-Anzeigename"
    //% block.loc.fr="Nom d'affichage Calliope mini BLE"
    //% block.loc.es="Nombre de dispositivo Calliope mini BLE"
    //% block.loc.it="Nome visualizzato Calliope mini BLE"
    //% block.loc.el="Όνομα εμφάνισης Calliope mini BLE"
    //% weight=96
    //% group="Verbindung"
    export function showDeviceName(): void {
        basic.showString(control.deviceName().toUpperCase())
    }

    /**
     * Executed when a Bluetooth connection is established
     * @param handler Code to be executed
     */
    //% block="on Bluetooth connected"
    //% block.loc.de="wenn Bluetooth verbunden"
    //% block.loc.fr="quand Bluetooth connecté"
    //% block.loc.es="cuando Bluetooth conectado"
    //% block.loc.it="quando Bluetooth connesso"
    //% block.loc.el="όταν συνδέεται Bluetooth"
    //% weight=94
    //% group="Verbindung"
    export function onBluetoothConnected(handler: () => void): void {
        bluetooth.onBluetoothConnected(handler)
    }

    /**
     * Executed when a Bluetooth connection is closed
     * @param handler Code to be executed
     */
    //% block="on Bluetooth disconnected"
    //% block.loc.de="wenn Bluetooth getrennt"
    //% block.loc.fr="quand Bluetooth déconnecté"
    //% block.loc.es="cuando Bluetooth desconectado"
    //% block.loc.it="quando Bluetooth disconnesso"
    //% block.loc.el="όταν αποσυνδέεται Bluetooth"
    //% weight=92
    //% group="Verbindung"
    export function onBluetoothDisconnected(handler: () => void): void {
        bluetooth.onBluetoothDisconnected(handler)
    }

    /**
     * Executed every time a new set of movement data arrives
     * @param handler Code to be executed
     */
    //% block="on movement data received"
    //% block.loc.de="wenn Bewegungsdaten empfangen"
    //% block.loc.fr="quand les données de mouvement sont reçues"
    //% block.loc.es="cuando se reciben datos de movimiento"
    //% block.loc.it="quando vengono ricevuti dati di movimento"
    //% block.loc.el="όταν λαμβάνονται δεδομένα κίνησης"
    //% weight=90
    //% group="Facerobot-App"
    export function onDataReceived(handler: () => void): void {
        dataHandlers.push(handler)
    }

    /**
     * Returns the selected movement value
     * @param value Choose the value to return
     */
    //% block="Facerobot-App value %value"
    //% block.loc.de="Facerobot-App Wert %value"
    //% block.loc.fr="valeur Facerobot-App %value"
    //% block.loc.es="valor Facerobot-App %value"
    //% block.loc.it="valore Facerobot-App %value"
    //% block.loc.el="τιμή Facerobot-App %value"
    //% weight=88
    //% group="Facerobot-App"
    export function getRobotHeadValue(value: FaceValues): number {
        switch (value) {
            case FaceValues.X:
                return x
            case FaceValues.Y:
                return y
            case FaceValues.Z:
                return z
            case FaceValues.Yaw:
                return yaw
            case FaceValues.Pitch:
                return pitch
            case FaceValues.Mouth:
                return mouth
            case FaceValues.LeftEye:
                return left_eye
            case FaceValues.RightEye:
                return right_eye
            case FaceValues.Roll:
                return roll
            case FaceValues.Smile:
                return smile
            default:
                return 0
        }
    }

    /**
     * Shows a bar graph with the selected movement value
     * @param valueType Choose the movement value to display
     */
    //% block="show bar graph for movement data value %valueType"
    //% block.loc.de="zeige Säulendiagramm für Bewegungsdaten vom Wert %valueType"
    //% block.loc.fr="afficher graphique en barres pour les données de mouvement de la valeur %valueType"
    //% block.loc.es="mostrar gráfico de barras para datos de movimiento del valor %valueType"
    //% block.loc.it="mostra grafico a barre per dati di movimento del valore %valueType"
    //% block.loc.el="εμφάνιση γραφήματος στηλών για δεδομένα κίνησης της τιμής %valueType"
    //% weight=84
    //% group="Facerobot-App"
    //% blockHidden=true
    export function showRobotHeadBarGraph(valueType: FaceValues): void {
        let maxValue = 100
        // Roll and Smile are transmitted as a single digit
        if (valueType == FaceValues.Roll || valueType == FaceValues.Smile) {
            maxValue = 9
        }
        led.plotBarGraph(getRobotHeadValue(valueType), maxValue)
    }

    /**
     * True while the app reports a face in front of the camera
     * @param state detected or not detected
     */
    //% block="face %state"
    //% block.loc.de="Gesicht %state"
    //% block.loc.fr="visage %state"
    //% block.loc.es="cara %state"
    //% block.loc.it="viso %state"
    //% block.loc.el="πρόσωπο %state"
    //% weight=86
    //% group="Facerobot-App"
    export function isFace(state: FaceDetection): boolean {
        if (state == FaceDetection.Detected) {
            return face_visible > 0
        }
        return face_visible <= 0
    }

    /**
     * Execute code when a specific control command is received
     * @param command Choose the control command to listen for
     * @param handler Code to execute when the command is received
     */
    //% block="When control command %command is received"
    //% block.loc.de="Wenn Steuerbefehl %command empfangen wird"
    //% block.loc.fr="Quand la commande de contrôle %command est reçue"
    //% block.loc.es="Cuando se recibe el comando de control %command"
    //% block.loc.it="Quando viene ricevuto il comando di controllo %command"
    //% block.loc.el="Όταν λαμβάνεται εντολή ελέγχου %command"
    //% command.fieldEditor="gridpicker"
    //% command.fieldOptions.columns=2
    //% command.fieldOptions.width="200"
    //% command.fieldOptions.maxRows=4
    //% weight=80
    //% group="Control-App"
    export function onControlCommand(command: ControlCommands, handler: () => void): void {
        controlHandlers.push(function () {
            if (isControlCommand(command)) {
                handler()
            }
        })
    }

    /**
     * Returns a value of the Control-App: sliders (0..180), buttons
     * (1 = pressed, 0 = released) or joystick / tilt (-90..90)
     * @param slider the value to read
     */
    //% block="value of %slider"
    //% block.loc.de="Wert von %slider"
    //% block.loc.fr="valeur de %slider"
    //% block.loc.es="valor de %slider"
    //% block.loc.it="valore di %slider"
    //% block.loc.el="τιμή του %slider"
    //% weight=78
    //% group="Control-App"
    export function getSliderValue(slider: SliderNumber): number {
        switch (slider) {
            case SliderNumber.Slider1:
                return slider1
            case SliderNumber.Slider2:
                return slider2
            case SliderNumber.Up:
                return upPressed
            case SliderNumber.Down:
                return downPressed
            case SliderNumber.Left:
                return leftPressed
            case SliderNumber.Right:
                return rightPressed
            case SliderNumber.Horn:
                return hornPressed
            case SliderNumber.ButtonA:
                return aPressed
            case SliderNumber.ButtonB:
                return bPressed
            case SliderNumber.JoystickX:
                return joystickX
            case SliderNumber.JoystickY:
                return joystickY
            default:
                return 0
        }
    }

    /**
     * Executed every time new joystick or tilt data arrives from
     * the Control-App (Joystick or Tilt mode).
     * @param handler Code to be executed
     */
    //% block="on joystick data received"
    //% block.loc.de="wenn Joystick-Daten empfangen"
    //% block.loc.fr="quand les données du joystick sont reçues"
    //% block.loc.es="cuando se reciben datos del joystick"
    //% block.loc.it="quando vengono ricevuti dati del joystick"
    //% block.loc.el="όταν λαμβάνονται δεδομένα joystick"
    //% weight=76
    //% group="Control-App"
    export function onJoystickDataReceived(handler: () => void): void {
        joystickHandlers.push(handler)
    }

    /**
     * Returns the joystick / tilt value for the selected axis.
     * Range: -90 to +90. Works in both Joystick and Tilt mode.
     * @param axis X or Y axis
     */
    //% block="joystick value %axis"
    //% block.loc.de="Joystick Wert %axis"
    //% block.loc.fr="valeur du joystick %axis"
    //% block.loc.es="valor del joystick %axis"
    //% block.loc.it="valore del joystick %axis"
    //% block.loc.el="τιμή joystick %axis"
    //% weight=74
    //% group="Control-App"
    export function getJoystickValue(axis: JoystickAxis): number {
        if (axis == JoystickAxis.X) {
            return joystickX
        }
        return joystickY
    }

    /**
     * True while the Control-App is in the selected mode.
     * @param mode D-Pad, Joystick or Tilt
     */
    //% block="control mode is %mode"
    //% block.loc.de="Steuerungsmodus ist %mode"
    //% block.loc.fr="le mode de contrôle est %mode"
    //% block.loc.es="el modo de control es %mode"
    //% block.loc.it="la modalità di controllo è %mode"
    //% block.loc.el="η λειτουργία ελέγχου είναι %mode"
    //% weight=72
    //% group="Control-App"
    export function isControlMode(mode: ControlMode): boolean {
        return currentMode == (mode as number)
    }

    /**
     * Executed whenever the Control-App switches to the selected mode.
     * @param mode D-Pad, Joystick or Tilt
     * @param handler Code to be executed
     */
    //% block="on control mode changed to %mode"
    //% block.loc.de="wenn Steuerungsmodus wechselt zu %mode"
    //% block.loc.fr="quand le mode de contrôle change pour %mode"
    //% block.loc.es="cuando el modo de control cambia a %mode"
    //% block.loc.it="quando la modalità di controllo cambia in %mode"
    //% block.loc.el="όταν η λειτουργία ελέγχου αλλάζει σε %mode"
    //% weight=56
    //% group="Fortgeschritten"
    export function onControlModeChanged(mode: ControlMode, handler: () => void): void {
        modeHandlers.push(function () {
            if (currentMode == (mode as number)) {
                handler()
            }
        })
    }

    /**
     * Check if a specific control command is currently present.
     * @param command Choose the control command to check for
     */
    //% block="Control command received %command"
    //% block.loc.de="Steuerbefehl empfangen %command"
    //% block.loc.fr="Commande de contrôle reçue %command"
    //% block.loc.es="Comando de control recibido %command"
    //% block.loc.it="Comando di controllo ricevuto %command"
    //% block.loc.el="Εντολή ελέγχου ελήφθη %command"
    //% command.fieldEditor="gridpicker"
    //% command.fieldOptions.columns=2
    //% command.fieldOptions.width="200"
    //% command.fieldOptions.maxRows=4
    //% weight=60
    //% group="Fortgeschritten"
    export function isControlCommand(command: ControlCommands): boolean {
        switch (command) {
            case ControlCommands.Up:
                return receivedString == "up"
            case ControlCommands.Down:
                return receivedString == "down"
            case ControlCommands.Left:
                return receivedString == "left"
            case ControlCommands.Right:
                return receivedString == "right"
            case ControlCommands.Horn:
                return receivedString == "horn"
            case ControlCommands.Stop:
                return receivedString == "stop"
            case ControlCommands.XCommand:
                return receivedString.charAt(0) == "c"
            case ControlCommands.CCommand:
                return receivedString.charAt(0) == "x"
            default:
                return false
        }
    }

    /**
     * Returns the raw text received from the app
     */
    //% block="received string"
    //% block.loc.de="empfangener Text"
    //% block.loc.fr="chaîne reçue"
    //% block.loc.es="cadena recibida"
    //% block.loc.it="stringa ricevuta"
    //% block.loc.el="ληφθείσα συμβολοσειρά"
    //% weight=58
    //% group="Fortgeschritten"
    export function getReceivedString(): string {
        return receivedString
    }

    // ---------------------------------------------------------------
    // Message handling
    // ---------------------------------------------------------------

    function handleMessage(message: string): void {
        receivedString = message

        // Movement packet: at least 19 characters and starting with digits
        if (receivedString.length >= 19 && parseFloat(receivedString.substr(0, 2)) >= 0) {
            x = parseFloat(receivedString.substr(0, 2))
            y = parseFloat(receivedString.substr(2, 2))
            z = parseFloat(receivedString.substr(4, 2))
            yaw = parseFloat(receivedString.substr(6, 2))
            pitch = parseFloat(receivedString.substr(8, 2))
            mouth = parseFloat(receivedString.substr(10, 2))
            left_eye = parseFloat(receivedString.substr(12, 2))
            right_eye = parseFloat(receivedString.substr(14, 2))
            roll = parseFloat(receivedString.substr(16, 1))
            smile = parseFloat(receivedString.substr(17, 1))
            face_visible = parseFloat(receivedString.substr(18, 1))

            for (let i = 0; i < dataHandlers.length; i++) {
                dataHandlers[i]()
            }
            return
        }

        // Joystick / Tilt packet: "X+45,Y-30" (9 chars, uppercase X)
        if (receivedString.length >= 9 && receivedString.charAt(0) == "X"
            && receivedString.charAt(4) == "," && receivedString.charAt(5) == "Y") {
            let sx = receivedString.charAt(1) == "-" ? -1 : 1
            let sy = receivedString.charAt(6) == "-" ? -1 : 1
            joystickX = sx * parseFloat(receivedString.substr(2, 2))
            joystickY = sy * parseFloat(receivedString.substr(7, 2))
            for (let k = 0; k < joystickHandlers.length; k++) {
                joystickHandlers[k]()
            }
            return
        }

        // Mode switch messages from the Control-App
        if (receivedString == "mode_dpad") {
            currentMode = ControlMode.DPad
            for (let m = 0; m < modeHandlers.length; m++) {
                modeHandlers[m]()
            }
            return
        }
        if (receivedString == "mode_analog") {
            currentMode = ControlMode.Analog
            for (let m = 0; m < modeHandlers.length; m++) {
                modeHandlers[m]()
            }
            return
        }
        if (receivedString == "mode_accelerometer") {
            currentMode = ControlMode.Tilt
            for (let m = 0; m < modeHandlers.length; m++) {
                modeHandlers[m]()
            }
            return
        }

        // Control message
        updateControlValues()
        for (let j = 0; j < controlHandlers.length; j++) {
            controlHandlers[j]()
        }
    }

    function updateButtonStates(): void {
        switch (receivedString) {
            case "UP": upPressed = 1; break
            case "up": upPressed = 0; break
            case "DOWN": downPressed = 1; break
            case "down": downPressed = 0; break
            case "LEFT": leftPressed = 1; break
            case "left": leftPressed = 0; break
            case "RIGHT": rightPressed = 1; break
            case "right": rightPressed = 0; break
            case "HORN": hornPressed = 1; break
            case "horn": hornPressed = 0; break
            case "A": aPressed = 1; break
            case "a": aPressed = 0; break
            case "B": bPressed = 1; break
            case "b": bPressed = 0; break
        }
    }

    function updateControlValues(): void {
        updateButtonStates()
        if (receivedString.charAt(0) == "c") {
            slider1 = parseFloat(receivedString.substr(1, 3))
            return
        }
        if (receivedString.charAt(0) == "x") {
            slider2 = parseFloat(receivedString.substr(1, 3))
            return
        }

        if (receivedString == "up") {
            legacy_control_value = 100
            if (legacyControlIcons) basic.showIcon(IconNames.ArrowNorth)
        } else if (receivedString == "down") {
            legacy_control_value = 50
            if (legacyControlIcons) basic.showIcon(IconNames.ArrowSouth)
        } else if (receivedString == "left") {
            legacy_control_value = 25
            if (legacyControlIcons) basic.showIcon(IconNames.ArrowWest)
        } else if (receivedString == "right") {
            legacy_control_value = 75
            if (legacyControlIcons) basic.showIcon(IconNames.ArrowEast)
        } else if (receivedString == "horn") {
            legacy_control_value = 90
            if (legacyControlIcons) basic.showIcon(IconNames.EighthNote)
        } else if (receivedString == "stop") {
            legacy_control_value = 0
            if (legacyControlIcons) basic.showIcon(IconNames.SmallSquare)
        }
    }

    // ---------------------------------------------------------------
    // Compatibility with older programs.
    // These blocks are hidden in the toolbox but keep existing
    // projects working without any change.
    // ---------------------------------------------------------------

    /**
     * Version 0.1.x: Initialize Bluetooth for the selected app.
     */
    //% block="Initialize %appType"
    //% block.loc.de="Initialisiere %appType"
    //% block.loc.fr="Initialiser %appType"
    //% block.loc.es="Inicializar %appType"
    //% block.loc.it="Inizializza %appType"
    //% block.loc.el="Αρχικοποίηση %appType"
    //% deprecated=true
    //% blockHidden=true
    export function initializeApp(appType: RobotAppType): void {
        if (appType == RobotAppType.Control) {
            legacyControlIcons = true
        }
        initializeConnection(ConnectionType.Bluetooth)
    }

    /**
     * Version 0.2.x: Initialize Bluetooth.
     */
    //% block="Initialize Bluetooth"
    //% block.loc.de="Bluetooth initialisieren"
    //% block.loc.fr="Initialiser Bluetooth"
    //% block.loc.es="Inicializar Bluetooth"
    //% block.loc.it="Inizializza Bluetooth"
    //% block.loc.el="Αρχικοποίηση Bluetooth"
    //% deprecated=true
    //% blockHidden=true
    export function initializeBluetooth(): void {
        initializeConnection(ConnectionType.Bluetooth)
    }

    /**
     * Version 0.2.x: Initialize USB Serial.
     */
    //% block="Initialize Serial"
    //% block.loc.de="Serial initialisieren"
    //% block.loc.fr="Initialiser Serial"
    //% block.loc.es="Inicializar Serial"
    //% block.loc.it="Inizializza Seriale"
    //% block.loc.el="Αρχικοποίηση Σειριακής"
    //% deprecated=true
    //% blockHidden=true
    export function initializeSerial(): void {
        initializeConnection(ConnectionType.Serial)
    }

    /**
     * Version 0.1.x: Face-App value.
     */
    //% block="Face-App value %value"
    //% block.loc.de="Face-App Wert %value"
    //% block.loc.fr="valeur Face-App %value"
    //% block.loc.es="valor Face-App %value"
    //% block.loc.it="valore Face-App %value"
    //% block.loc.el="αξία Face-App %value"
    //% deprecated=true
    //% blockHidden=true
    export function getFaceValue(value: FaceValues): number {
        return getRobotHeadValue(value)
    }

    /**
     * Version 0.1.x: bar graph for a Face-App value.
     */
    //% block="show bar graph for Face-App value %valueType"
    //% block.loc.de="zeige Säulendiagramm für Face-App Wert %valueType"
    //% block.loc.fr="afficher graphique en barres pour valeur Face-App %valueType"
    //% block.loc.es="mostrar gráfico de barras para valor Face-App %valueType"
    //% block.loc.it="mostra grafico a barre per valore Face-App %valueType"
    //% block.loc.el="εμφάνιση γραφήματος στηλών για αξία Face-App %valueType"
    //% deprecated=true
    //% blockHidden=true
    export function showFaceBarGraph(valueType: FaceValues): void {
        showRobotHeadBarGraph(valueType)
    }

    /**
     * Version 0.1.x: Control value.
     */
    //% block="Control value %value"
    //% block.loc.de="Control Wert %value"
    //% block.loc.fr="valeur Control %value"
    //% block.loc.es="valor Control %value"
    //% block.loc.it="valore Control %value"
    //% block.loc.el="αξία Control %value"
    //% deprecated=true
    //% blockHidden=true
    export function getControlValue(value: ControlValues): number {
        if (value == ControlValues.XValue) {
            // 0.1.x wrote both slider messages into the same variable
            if (receivedString.charAt(0) == "c") {
                return slider1
            }
            return slider2
        }
        return legacy_control_value
    }

    /**
     * Version 0.1.x: the raw control command.
     */
    export function getControlCommand(): string {
        return receivedString
    }

    /**
     * Version 0.2.x: Slider1 value.
     */
    //% block="Slider1 value"
    //% block.loc.de="Slider1 Wert"
    //% block.loc.fr="valeur Slider1"
    //% block.loc.es="valor Slider1"
    //% block.loc.it="valore Slider1"
    //% block.loc.el="τιμή Slider1"
    //% deprecated=true
    //% blockHidden=true
    export function getXCommandValue(): number {
        return slider1
    }

    /**
     * Version 0.2.x: Slider2 value.
     */
    //% block="Slider2 value"
    //% block.loc.de="Slider2 Wert"
    //% block.loc.fr="valeur Slider2"
    //% block.loc.es="valor Slider2"
    //% block.loc.it="valore Slider2"
    //% block.loc.el="τιμή Slider2"
    //% deprecated=true
    //% blockHidden=true
    export function getCCommandValue(): number {
        return slider2
    }
}
