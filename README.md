You will find the English ReadMe at the end of the document.

## Calliope x LOFI Robot MakeCode Erweiterung

Diese Erweiterung kann benutzt werden, um die LOFI Robot Modelle mit weniger Blöcken zu erstellen und gleichzeitig die benötigten Bluetooth-Einstellungen direkt im Projekt integriert zu haben. Es müssen also nicht unbedingt die vorgegebenen Blöcke genutzt werden, man sollte aber trotzdem diese Erweiterung hinzufügen.

## Blöcke

Die Blöcke liegen in einer einzigen Kategorie, gegliedert durch vier Überschriften.

**Verbindung**

| Block (deutsch) | Funktion |
| --- | --- |
| Verbindung initialisieren ⟨Bluetooth / Seriell (USB)⟩ | startet die Verbindung und den Datenempfang |
| Calliope mini BLE-Anzeigename | zeigt den Kopplungsnamen auf der LED-Matrix |
| wenn Bluetooth verbunden | Ereignis bei aufgebauter Verbindung |
| wenn Bluetooth getrennt | Ereignis bei getrennter Verbindung |

**Facerobot-App**

| Block (deutsch) | Funktion |
| --- | --- |
| wenn Bewegungsdaten empfangen | Ereignis für Daten der Face-App |
| Facerobot-App Wert … | X, Y, Z, Drehen, Nicken, Mund, Linkes Auge, Rechtes Auge, Rollen, Lächeln |
| zeige Säulendiagramm für Bewegungsdaten vom Wert … | Balkenanzeige eines Bewegungswertes |
| Gesicht ⟨erkannt / nicht erkannt⟩ | Wahrheitsblock der Gesichtserkennung |

**Control-App**

| Block (deutsch) | Funktion |
| --- | --- |
| Wenn Steuerbefehl … empfangen wird | Ereignis für ↑ ↓ ← → 🔊 ⏹ Slider1 Slider2 |
| Wert von ⟨Slider1 / Slider2⟩ | Zahlenwert eines Schiebereglers |

**Fortgeschritten**

| Block (deutsch) | Funktion |
| --- | --- |
| Steuerbefehl empfangen … | Wahrheitswert, ob der Befehl gerade anliegt |
| empfangener Text | roher Text von Bluetooth bzw. Serial |

Verfügbare Sprachen: Deutsch, Englisch, Französisch, Spanisch, Italienisch, Griechisch.

### Ältere Programme

Programme aus 0.1.x und 0.2.x laufen unverändert weiter. Die abgelösten Blöcke
(`Initialisiere Face-App`, `Face-App Wert`, `Control Wert`, `Slider1 Wert`, `Slider2 Wert`,
`Bluetooth initialisieren`, `Serial initialisieren`) sind weiterhin vorhanden, erscheinen
aber nicht mehr in der Palette. Einzige Ausnahme: `FaceValues.FaceVisible` aus 0.1.x wurde
durch den Block `Gesicht ⟨erkannt / nicht erkannt⟩` ersetzt.

## Als Erweiterung verwenden

Dieses Repository kann als **Erweiterung** in MakeCode hinzugefügt werden.

* öffne [https://makecode.calliope.cc/](https://makecode.calliope.cc/)
* klicke auf **Neues Projekt**
* klicke auf **Erweiterungen** unter dem Zahnrad-Menü
* nach **https://github.com/calliope-edu/robots** suchen und importieren

## Dieses Projekt bearbeiten

Um dieses Repository in MakeCode zu bearbeiten.

* öffne [https://makecode.calliope.cc/](https://makecode.calliope.cc/)
* klicke auf **Importieren** und dann auf **Importiere URL**
* füge **https://github.com/calliope-edu/robots** ein und klicke auf Importieren

#### Metadaten (verwendet für Suche, Rendering)

* for PXT/calliopemini
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>

## Calliope x LOFI Robot MakeCode Extension

This extension can be used to build LOFI Robot models with fewer blocks while also integrating the necessary Bluetooth settings directly into the project.  
Although you are not required to use the predefined blocks, it is still recommended to add this extension.

## Blocks

The blocks live in a single category, separated by four group headings.

**Connection**

| Block (English) | Purpose |
| --- | --- |
| Initialize connection ⟨Bluetooth / Serial (USB)⟩ | starts the connection and data reception |
| Calliope mini BLE-device-name | shows the pairing name on the LED matrix |
| on Bluetooth connected | event when a connection is established |
| on Bluetooth disconnected | event when a connection is closed |

**Facerobot-App**

| Block (English) | Purpose |
| --- | --- |
| on movement data received | event for Face-App data |
| Facerobot-App value … | X, Y, Z, Yaw, Pitch, Mouth, Left Eye, Right Eye, Roll, Smile |
| show bar graph for movement data value … | bar graph of one movement value |
| face ⟨detected / not detected⟩ | boolean block of the face detection |

**Control-App**

| Block (English) | Purpose |
| --- | --- |
| When control command … is received | event for ↑ ↓ ← → 🔊 ⏹ Slider1 Slider2 |
| value of ⟨Slider1 / Slider2⟩ | numeric value of one slider |

**Advanced**

| Block (English) | Purpose |
| --- | --- |
| Control command received … | boolean check for the current command |
| received string | raw text from Bluetooth or Serial |

Available languages: German, English, French, Spanish, Italian, Greek.

### Older programs

Programs written for 0.1.x and 0.2.x keep working unchanged. The superseded blocks
(`Initialize Face-App`, `Face-App value`, `Control value`, `Slider1 value`, `Slider2 value`,
`Initialize Bluetooth`, `Initialize Serial`) are still present but no longer shown in the
toolbox. One exception: `FaceValues.FaceVisible` from 0.1.x has been replaced by the
`face ⟨detected / not detected⟩` block.

## Use as Extension

This repository can be added as a **MakeCode extension**.

* Open [https://makecode.calliope.cc/](https://makecode.calliope.cc/)
* Click **New Project**
* Click **Extensions** from the gear menu
* Search for **https://github.com/calliope-edu/robots** and import it

## Edit this Project

To edit this repository in MakeCode:

* Open [https://makecode.calliope.cc/](https://makecode.calliope.cc/)
* Click **Import** and then **Import URL**
* Paste **https://github.com/calliope-edu/robots** and click Import

#### Metadata (used for search, rendering)

* for PXT/calliopemini  
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
