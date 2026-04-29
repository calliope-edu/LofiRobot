/**
 * LOFI ROBOT — Bluetooth / Serial Extension
 *
 * Receives face-tracking data from the FaceRobot web app over EITHER
 * Bluetooth UART (mobile/desktop) OR USB serial (desktop) — the user
 * picks one transport in the web app's connect menu; only one is
 * active at a time. This extension starts listeners on both so the
 * same blocks expose the parsed values regardless of which transport
 * the web app chose.
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
    //% block.loc.fr="Sourcil Bas Gauche"
    //% block.loc.es="Ceja Abajo Izquierda"
    //% block.loc.it="Sopracciglio Giù Sinistra"
    //% block.loc.el="Φρύδι Κάτω Αριστερά"
    BrowDownLeft,
    //% block="Brow Down Right"
    //% block.loc.de="Augenbraue Unten Rechts"
    //% block.loc.fr="Sourcil Bas Droit"
    //% block.loc.es="Ceja Abajo Derecha"
    //% block.loc.it="Sopracciglio Giù Destra"
    //% block.loc.el="Φρύδι Κάτω Δεξιά"
    BrowDownRight,
    //% block="Brow Inner Up"
    //% block.loc.de="Augenbraue Innen Oben"
    //% block.loc.fr="Sourcil Intérieur Haut"
    //% block.loc.es="Ceja Interior Arriba"
    //% block.loc.it="Sopracciglio Interno Su"
    //% block.loc.el="Φρύδι Εσωτερικό Πάνω"
    BrowInnerUp,
    //% block="Brow Outer Up Left"
    //% block.loc.de="Augenbraue Außen Oben Links"
    //% block.loc.fr="Sourcil Extérieur Haut Gauche"
    //% block.loc.es="Ceja Exterior Arriba Izquierda"
    //% block.loc.it="Sopracciglio Esterno Su Sinistra"
    //% block.loc.el="Φρύδι Εξωτερικό Πάνω Αριστερά"
    BrowOuterUpLeft,
    //% block="Brow Outer Up Right"
    //% block.loc.de="Augenbraue Außen Oben Rechts"
    //% block.loc.fr="Sourcil Extérieur Haut Droit"
    //% block.loc.es="Ceja Exterior Arriba Derecha"
    //% block.loc.it="Sopracciglio Esterno Su Destra"
    //% block.loc.el="Φρύδι Εξωτερικό Πάνω Δεξιά"
    BrowOuterUpRight,
    //% block="Gaze Down Left"
    //% block.loc.de="Blick Unten Links"
    //% block.loc.fr="Regard Bas Gauche"
    //% block.loc.es="Mirada Abajo Izquierda"
    //% block.loc.it="Sguardo Giù Sinistra"
    //% block.loc.el="Βλέμμα Κάτω Αριστερά"
    GazeDownLeft,
    //% block="Gaze Down Right"
    //% block.loc.de="Blick Unten Rechts"
    //% block.loc.fr="Regard Bas Droit"
    //% block.loc.es="Mirada Abajo Derecha"
    //% block.loc.it="Sguardo Giù Destra"
    //% block.loc.el="Βλέμμα Κάτω Δεξιά"
    GazeDownRight,
    //% block="Gaze Up Left"
    //% block.loc.de="Blick Oben Links"
    //% block.loc.fr="Regard Haut Gauche"
    //% block.loc.es="Mirada Arriba Izquierda"
    //% block.loc.it="Sguardo Su Sinistra"
    //% block.loc.el="Βλέμμα Πάνω Αριστερά"
    GazeUpLeft,
    //% block="Gaze Up Right"
    //% block.loc.de="Blick Oben Rechts"
    //% block.loc.fr="Regard Haut Droit"
    //% block.loc.es="Mirada Arriba Derecha"
    //% block.loc.it="Sguardo Su Destra"
    //% block.loc.el="Βλέμμα Πάνω Δεξιά"
    GazeUpRight,
    //% block="Gaze In Left"
    //% block.loc.de="Blick Innen Links"
    //% block.loc.fr="Regard Intérieur Gauche"
    //% block.loc.es="Mirada Interior Izquierda"
    //% block.loc.it="Sguardo Interno Sinistra"
    //% block.loc.el="Βλέμμα Εσωτερικό Αριστερά"
    GazeInLeft,
    //% block="Gaze In Right"
    //% block.loc.de="Blick Innen Rechts"
    //% block.loc.fr="Regard Intérieur Droit"
    //% block.loc.es="Mirada Interior Derecha"
    //% block.loc.it="Sguardo Interno Destra"
    //% block.loc.el="Βλέμμα Εσωτερικό Δεξιά"
    GazeInRight
}

enum ControlCommands {
    //% blockId="control_up" block="↑"
    //% block.loc.de="↑"
    //% block.loc.fr="↑"
    //% block.loc.es="↑"
    //% block.loc.it="↑"
    //% block.loc.el="↑"
    Up,
    //% blockId="control_down" block="↓"
    //% block.loc.de="↓"
    //% block.loc.fr="↓"
    //% block.loc.es="↓"
    //% block.loc.it="↓"
    //% block.loc.el="↓"
    Down,
    //% blockId="control_left" block="←"
    //% block.loc.de="←"
    //% block.loc.fr="←"
    //% block.loc.es="←"
    //% block.loc.it="←"
    //% block.loc.el="←"
    Left,
    //% blockId="control_right" block="→"
    //% block.loc.de="→"
    //% block.loc.fr="→"
    //% block.loc.es="→"
    //% block.loc.it="→"
    //% block.loc.el="→"
    Right,
    //% blockId="control_horn" block="🔊"
    //% block.loc.de="🔊"
    //% block.loc.fr="🔊"
    //% block.loc.es="🔊"
    //% block.loc.it="🔊"
    //% block.loc.el="🔊"
    Horn,
    //% blockId="control_stop" block="⏹"
    //% block.loc.de="⏹"
    //% block.loc.fr="⏹"
    //% block.loc.es="⏹"
    //% block.loc.it="⏹"
    //% block.loc.el="⏹"
    Stop,
    //% blockId="control_x" block="Slider1"
    //% block.loc.de="Slider1"
    //% block.loc.fr="Slider1"
    //% block.loc.es="Slider1"
    //% block.loc.it="Slider1"
    //% block.loc.el="Slider1"
    XCommand,
    //% blockId="control_c" block="Slider2"
    //% block.loc.de="Slider2"
    //% block.loc.fr="Slider2"
    //% block.loc.es="Slider2"
    //% block.loc.it="Slider2"
    //% block.loc.el="Slider2"
    CCommand
}

//% weight=20 color=#ff6900 icon="\uf118"
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
    let bleStarted = false
    let serialStarted = false
    let dataHandlers: (() => void)[] = []
    let controlHandlers: (() => void)[] = []

    // ---- shared parser ---------------------------------------------------

    function parseData(data: string): void {
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
    }

    function dispatchHandlers(): void {
        for (let i = 0; i < dataHandlers.length; i++) {
            if (dataHandlers[i]) dataHandlers[i]()
        }
        for (let i = 0; i < controlHandlers.length; i++) {
            if (controlHandlers[i]) controlHandlers[i]()
        }
    }

    function startBluetoothListener(): void {
        if (bleStarted) return
        bluetooth.startUartService()
        bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
            parseData(bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine)))
            dispatchHandlers()
        })
        bleStarted = true
    }

    function startSerialListener(): void {
        if (serialStarted) return
        serial.setRxBufferSize(128)
        serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
            parseData(serial.readUntil(serial.delimiters(Delimiters.NewLine)))
            dispatchHandlers()
        })
        serialStarted = true
    }

    // ---- Bluetooth subcategory -------------------------------------------

    function showInitAnimation(): void {
        basic.showIcon(IconNames.Square)
        for (let i = 0; i < 3; i++) {
            led.plot(2, 2)
            basic.pause(200)
            led.unplot(2, 2)
            basic.pause(200)
        }
    }

    /**
     * Initialize the Bluetooth connection only. Use this if the FaceRobot
     * app connects via BLE (mobile or desktop). Don't combine with the
     * Serial init — registering both has been observed to break BLE UART
     * receive on some Calliope firmware revisions.
     */
    //% block="Initialize Bluetooth"
    //% block.loc.de="Bluetooth initialisieren"
    //% block.loc.fr="Initialiser Bluetooth"
    //% block.loc.es="Inicializar Bluetooth"
    //% block.loc.it="Inizializza Bluetooth"
    //% block.loc.el="Αρχικοποίηση Bluetooth"
    //% weight=100
    //% subcategory="Connection"
    //% subcategory.loc.de="Verbindung"
    //% subcategory.loc.fr="Connexion"
    //% subcategory.loc.es="Conexión"
    //% subcategory.loc.it="Connessione"
    //% subcategory.loc.el="Σύνδεση"
    export function initializeBluetooth(): void {
        startBluetoothListener()
        showInitAnimation()
    }

    /**
     * Initialize the USB Serial connection only. Use this if the FaceRobot
     * app connects via Web Serial (desktop only).
     */
    //% block="Initialize Serial"
    //% block.loc.de="Serial initialisieren"
    //% block.loc.fr="Initialiser Serial"
    //% block.loc.es="Inicializar Serial"
    //% block.loc.it="Inizializza Serial"
    //% block.loc.el="Αρχικοποίηση Serial"
    //% weight=98
    //% subcategory="Connection"
    //% subcategory.loc.de="Verbindung"
    //% subcategory.loc.fr="Connexion"
    //% subcategory.loc.es="Conexión"
    //% subcategory.loc.it="Connessione"
    //% subcategory.loc.el="Σύνδεση"
    export function initializeSerial(): void {
        startSerialListener()
        showInitAnimation()
    }

    /**
     * Initialize BOTH Bluetooth UART and USB serial. Convenient if you don't
     * yet know which transport will be used, but note that on some Calliope
     * firmware revisions starting both can break BLE receive. If BLE doesn't
     * deliver data, switch to "Initialize Bluetooth" alone.
     */
    //% block="Initialize connection (BLE or Serial)"
    //% block.loc.de="Verbindung initialisieren (BLE oder Serial)"
    //% block.loc.fr="Initialiser la connexion (BLE ou Serial)"
    //% block.loc.es="Inicializar conexión (BLE o Serial)"
    //% block.loc.it="Inizializza connessione (BLE o Serial)"
    //% block.loc.el="Αρχικοποίηση σύνδεσης (BLE ή Serial)"
    //% weight=95
    //% subcategory="Connection"
    //% subcategory.loc.de="Verbindung"
    //% subcategory.loc.fr="Connexion"
    //% subcategory.loc.es="Conexión"
    //% subcategory.loc.it="Connessione"
    //% subcategory.loc.el="Σύνδεση"
    //% advanced=true
    export function initializeConnection(): void {
        startBluetoothListener()
        startSerialListener()
        showInitAnimation()
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
    //% subcategory="Connection"
    //% subcategory.loc.de="Verbindung"
    //% subcategory.loc.fr="Connexion"
    //% subcategory.loc.es="Conexión"
    //% subcategory.loc.it="Connessione"
    //% subcategory.loc.el="Σύνδεση"
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
        dataHandlers.push(handler)
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
