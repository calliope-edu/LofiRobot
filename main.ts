/**
 * LOFI ROBOT — Bluetooth + Serial Extension
 *
 * Receives face-tracking data from the FaceRobot web app over either
 * Bluetooth UART (mobile/desktop) or USB serial (desktop). The same
 * blocks expose the parsed values regardless of which transport was
 * used to deliver them.
 *
 * Payload layout (41 chars, ~10 Hz, terminated by \n):
 *   00-01  X            16     Roll (1)
 *   02-03  Y            17     Smile (1)
 *   04-05  Z (Distance) 18     FaceVisible (1)
 *   06-07  Yaw          19-20  BrowDownLeft
 *   08-09  Pitch        21-22  BrowDownRight
 *   10-11  Mouth        23-24  BrowInnerUp
 *   12-13  LeftEye      25-26  BrowOuterUpLeft
 *   14-15  RightEye     27-28  BrowOuterUpRight
 *                       29-30  GazeDownLeft
 *                       31-32  GazeDownRight
 *                       33-34  GazeUpLeft
 *                       35-36  GazeUpRight
 *                       37-38  GazeInLeft
 *                       39-40  GazeInRight
 */

enum RobotAppType {
    //% block="Face-App"
    //% block.loc.de="Face-App"
    FaceApp,
    //% block="Control"
    //% block.loc.de="Control"
    Control
}

enum FaceValues {
    //% block="X"
    X,
    //% block="Y"
    Y,
    //% block="Z"
    Z,
    //% block="Yaw"
    //% block.loc.de="Drehen"
    //% block.loc.fr="Lacet"
    //% block.loc.es="Guiñada"
    //% block.loc.it="Imbardata"
    //% block.loc.el="Εκτροπή"
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
    //% block="Brow Down Left"
    //% block.loc.de="Augenbraue Unten Links"
    BrowDownLeft,
    //% block="Brow Down Right"
    //% block.loc.de="Augenbraue Unten Rechts"
    BrowDownRight,
    //% block="Brow Inner Up"
    //% block.loc.de="Augenbraue Innen Oben"
    BrowInnerUp,
    //% block="Brow Outer Up Left"
    //% block.loc.de="Augenbraue Außen Oben Links"
    BrowOuterUpLeft,
    //% block="Brow Outer Up Right"
    //% block.loc.de="Augenbraue Außen Oben Rechts"
    BrowOuterUpRight,
    //% block="Gaze Down Left"
    //% block.loc.de="Blick Unten Links"
    GazeDownLeft,
    //% block="Gaze Down Right"
    //% block.loc.de="Blick Unten Rechts"
    GazeDownRight,
    //% block="Gaze Up Left"
    //% block.loc.de="Blick Oben Links"
    GazeUpLeft,
    //% block="Gaze Up Right"
    //% block.loc.de="Blick Oben Rechts"
    GazeUpRight,
    //% block="Gaze In Left"
    //% block.loc.de="Blick Innen Links"
    GazeInLeft,
    //% block="Gaze In Right"
    //% block.loc.de="Blick Innen Rechts"
    GazeInRight
}

enum ControlCommands {
    //% blockId="control_up" block="↑"
    Up,
    //% blockId="control_down" block="↓"
    Down,
    //% blockId="control_left" block="←"
    Left,
    //% blockId="control_right" block="→"
    Right,
    //% blockId="control_horn" block="🔊"
    Horn,
    //% blockId="control_stop" block="⏹"
    Stop,
    //% blockId="control_x" block="Slider1"
    XCommand,
    //% blockId="control_c" block="Slider2"
    CCommand
}

//% weight=20 color=#ff6900 icon=""
//% groups='["Bluetooth", "Face-App", "Control-App", "Erweitert"]'
namespace LofiRobot {
    // Robot-Head variables
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

    // Brow + gaze blendshapes (new)
    let brow_down_l = 0
    let brow_down_r = 0
    let brow_inner_up = 0
    let brow_outer_up_l = 0
    let brow_outer_up_r = 0
    let gaze_down_l = 0
    let gaze_down_r = 0
    let gaze_up_l = 0
    let gaze_up_r = 0
    let gaze_in_l = 0
    let gaze_in_r = 0

    let receivedString = ""
    let bluetoothStarted = false
    let serialStarted = false
    let userHandler: () => void = null
    let controlHandlers: (() => void)[] = []

    // ---- shared parser ---------------------------------------------------

    function processIncoming(data: string): void {
        if (!data || data.length < 19) return
        receivedString = data

        x = parseFloat(data.substr(0, 2))
        y = parseFloat(data.substr(2, 2))
        z = parseFloat(data.substr(4, 2))
        yaw = parseFloat(data.substr(6, 2))
        pitch = parseFloat(data.substr(8, 2))
        mouth = parseFloat(data.substr(10, 2))
        left_eye = parseFloat(data.substr(12, 2))
        right_eye = parseFloat(data.substr(14, 2))
        roll = parseFloat(data.substr(16, 1))
        smile = parseFloat(data.substr(17, 1))
        face_visible = parseFloat(data.substr(18, 1))

        if (data.length >= 41) {
            brow_down_l      = parseFloat(data.substr(19, 2))
            brow_down_r      = parseFloat(data.substr(21, 2))
            brow_inner_up    = parseFloat(data.substr(23, 2))
            brow_outer_up_l  = parseFloat(data.substr(25, 2))
            brow_outer_up_r  = parseFloat(data.substr(27, 2))
            gaze_down_l      = parseFloat(data.substr(29, 2))
            gaze_down_r      = parseFloat(data.substr(31, 2))
            gaze_up_l        = parseFloat(data.substr(33, 2))
            gaze_up_r        = parseFloat(data.substr(35, 2))
            gaze_in_l        = parseFloat(data.substr(37, 2))
            gaze_in_r        = parseFloat(data.substr(39, 2))
        }

        if (userHandler) userHandler()
        for (let i = 0; i < controlHandlers.length; i++) {
            if (controlHandlers[i]) controlHandlers[i]()
        }
    }

    function ensureBluetooth(): void {
        if (bluetoothStarted) return
        bluetooth.startUartService()
        bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
            processIncoming(bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine)))
        })
        bluetoothStarted = true
    }

    function ensureSerial(): void {
        if (serialStarted) return
        serial.setRxBufferSize(128)
        serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
            processIncoming(serial.readUntil(serial.delimiters(Delimiters.NewLine)))
        })
        serialStarted = true
    }

    // ---- Bluetooth subcategory -------------------------------------------

    /**
     * Initialize the connection. Starts both Bluetooth UART and USB serial
     * listeners so the same downstream blocks work regardless of which
     * transport the FaceRobot app used.
     */
    //% block="Initialize connection (BLE + Serial)"
    //% block.loc.de="Verbindung initialisieren (BLE + Serial)"
    //% weight=100
    //% subcategory="Bluetooth"
    export function initializeConnection(): void {
        ensureBluetooth()
        ensureSerial()
        basic.showIcon(IconNames.Square)
        for (let i = 0; i < 3; i++) {
            led.plot(2, 2)
            basic.pause(200)
            led.unplot(2, 2)
            basic.pause(200)
        }
    }

    /**
     * Backwards-compatible alias for older programs. Internally starts both
     * BLE and Serial.
     */
    //% block="Initialize Bluetooth"
    //% block.loc.de="Bluetooth initialisieren"
    //% block.loc.fr="Initialiser Bluetooth"
    //% block.loc.es="Inicializar Bluetooth"
    //% block.loc.it="Inizializza Bluetooth"
    //% block.loc.el="Αρχικοποίηση Bluetooth"
    //% weight=91
    //% subcategory="Bluetooth"
    export function initializeBluetooth(): void {
        initializeConnection()
    }

    /**
     * Scroll the friendly Calliope mini name on the LED matrix.
     */
    //% block="Calliope mini BLE-device-name"
    //% block.loc.de="Calliope mini BLE-Anzeigename"
    //% block.loc.fr="Nom d'affichage Calliope mini BLE"
    //% block.loc.es="Nombre de dispositivo Calliope mini BLE"
    //% block.loc.it="Nome visualizzato Calliope mini BLE"
    //% block.loc.el="Όνομα εμφάνισης Calliope mini BLE"
    //% weight=85
    //% subcategory="Bluetooth"
    export function showDeviceName(): void {
        basic.showString(control.deviceName().toUpperCase())
    }

    // ---- Face-App subcategory --------------------------------------------

    /**
     * Run code each time a complete movement-data packet is received.
     */
    //% block="on movement data received"
    //% block.loc.de="wenn Bewegungsdaten empfangen"
    //% block.loc.fr="quand les données de mouvement sont reçues"
    //% block.loc.es="cuando se reciben datos de movimiento"
    //% block.loc.it="quando vengono ricevuti dati di movimento"
    //% block.loc.el="όταν λαμβάνονται δεδομένα κίνησης"
    //% weight=90
    //% subcategory="Face-App"
    export function onDataReceived(handler: () => void): void {
        ensureBluetooth()
        ensureSerial()
        userHandler = handler
    }

    /**
     * Show a bar graph of the selected value on the LED matrix.
     */
    //% block="show bar graph for movement data value %valueType"
    //% block.loc.de="zeige Säulendiagramm für Bewegungsdaten vom Wert %valueType"
    //% block.loc.fr="afficher graphique en barres pour les données de mouvement de la valeur %valueType"
    //% block.loc.es="mostrar gráfico de barras para datos de movimiento del valor %valueType"
    //% block.loc.it="mostra grafico a barre per dati di movimento del valore %valueType"
    //% block.loc.el="εμφάνιση γραφήματος στηλών για δεδομένα κίνησης της αξίας %valueType"
    //% weight=70
    //% subcategory="Face-App"
    export function showRobotHeadBarGraph(valueType: FaceValues): void {
        led.plotBarGraph(getRobotHeadValue(valueType), 100)
    }

    /**
     * Returns the selected face-tracking value (0–99 in most cases).
     */
    //% block="movement data from value %value"
    //% block.loc.de="Bewegungsdaten vom Wert %value"
    //% block.loc.fr="données de mouvement de la valeur %value"
    //% block.loc.es="datos de movimiento del valor %value"
    //% block.loc.it="dati di movimento del valore %value"
    //% block.loc.el="δεδομένα κίνησης από την αξία %value"
    //% weight=60
    //% subcategory="Face-App"
    export function getRobotHeadValue(value: FaceValues): number {
        switch (value) {
            case FaceValues.X:                return x
            case FaceValues.Y:                return y
            case FaceValues.Z:                return z
            case FaceValues.Yaw:              return yaw
            case FaceValues.Pitch:            return pitch
            case FaceValues.Mouth:            return mouth
            case FaceValues.LeftEye:          return left_eye
            case FaceValues.RightEye:         return right_eye
            case FaceValues.BrowDownLeft:     return brow_down_l
            case FaceValues.BrowDownRight:    return brow_down_r
            case FaceValues.BrowInnerUp:      return brow_inner_up
            case FaceValues.BrowOuterUpLeft:  return brow_outer_up_l
            case FaceValues.BrowOuterUpRight: return brow_outer_up_r
            case FaceValues.GazeDownLeft:     return gaze_down_l
            case FaceValues.GazeDownRight:    return gaze_down_r
            case FaceValues.GazeUpLeft:       return gaze_up_l
            case FaceValues.GazeUpRight:      return gaze_up_r
            case FaceValues.GazeInLeft:       return gaze_in_l
            case FaceValues.GazeInRight:      return gaze_in_r
            default:                          return 0
        }
    }

    // ---- Control-App subcategory -----------------------------------------

    /**
     * Check if a specific control command was received.
     */
    //% block="Control command received %command"
    //% block.loc.de="Steuerbefehl empfangen %command"
    //% block.loc.fr="Commande de contrôle reçue %command"
    //% block.loc.es="Comando de control recibido %command"
    //% block.loc.it="Comando di controllo ricevuto %command"
    //% block.loc.el="Εντολή ελέγχου ελήφθη %command"
    //% command.fieldEditor="gridpicker"
    //% command.fieldOptions.columns=4
    //% command.fieldOptions.width="300"
    //% command.fieldOptions.maxRows=2
    //% weight=65
    //% subcategory="Control-App"
    export function isControlCommand(command: ControlCommands): boolean {
        switch (command) {
            case ControlCommands.Up:       return receivedString == "up"
            case ControlCommands.Down:     return receivedString == "down"
            case ControlCommands.Left:     return receivedString == "left"
            case ControlCommands.Right:    return receivedString == "right"
            case ControlCommands.Horn:     return receivedString == "horn"
            case ControlCommands.Stop:     return receivedString == "stop"
            case ControlCommands.XCommand: return receivedString.charAt(0) == "c"
            case ControlCommands.CCommand: return receivedString.charAt(0) == "x"
            default:                       return false
        }
    }

    /**
     * Run code when a specific control command is received.
     */
    //% block="When control command %command is received"
    //% block.loc.de="Wenn Steuerbefehl %command empfangen wird"
    //% block.loc.fr="Quand la commande de contrôle %command est reçue"
    //% block.loc.es="Cuando se recibe el comando de control %command"
    //% block.loc.it="Quando viene ricevuto il comando di controllo %command"
    //% block.loc.el="Όταν λαμβάνεται εντολή ελέγχου %command"
    //% command.fieldEditor="gridpicker"
    //% command.fieldOptions.columns=4
    //% command.fieldOptions.width="300"
    //% command.fieldOptions.maxRows=2
    //% weight=64
    //% subcategory="Control-App"
    export function onControlCommand(command: ControlCommands, handler: () => void): void {
        ensureBluetooth()
        ensureSerial()
        controlHandlers.push(function () {
            if (isControlCommand(command)) handler()
        })
    }

    /**
     * Get the Slider1 value (commands starting with 'c').
     */
    //% block="Slider1 value"
    //% block.loc.de="Slider1 Wert"
    //% block.loc.fr="valeur Slider1"
    //% block.loc.es="valor Slider1"
    //% block.loc.it="valore Slider1"
    //% block.loc.el="αξία Slider1"
    //% weight=57
    //% subcategory="Control-App"
    export function getXCommandValue(): number {
        if (receivedString.charAt(0) == "c") return parseFloat(receivedString.substr(1, 3))
        return 0
    }

    /**
     * Get the Slider2 value (commands starting with 'x').
     */
    //% block="Slider2 value"
    //% block.loc.de="Slider2 Wert"
    //% block.loc.fr="valeur Slider2"
    //% block.loc.es="valor Slider2"
    //% block.loc.it="valore Slider2"
    //% block.loc.el="αξία Slider2"
    //% weight=56
    //% subcategory="Control-App"
    export function getCCommandValue(): number {
        if (receivedString.charAt(0) == "x") return parseFloat(receivedString.substr(1, 3))
        return 0
    }

    // ---- Erweitert (Advanced) subcategory --------------------------------

    /**
     * Returns the most recently received raw string.
     */
    //% block="received string"
    //% block.loc.de="empfangener Text"
    //% block.loc.fr="chaîne reçue"
    //% block.loc.es="cadena recibida"
    //% block.loc.it="stringa ricevuta"
    //% block.loc.el="ληφθείσα συμβολοσειρά"
    //% weight=50
    //% subcategory="Erweitert"
    export function getReceivedString(): string {
        return receivedString
    }
}
