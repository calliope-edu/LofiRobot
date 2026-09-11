You will find the English ReadMe at the end of the document.

## Calliope x LOFI Robot MakeCode Erweiterung

Diese Erweiterung kann benutzt werden, um die LOFI Robot Modelle mit weniger Blöcken zu erstellen und gleichzeitig die benötigten Bluetooth-Einstellungen direkt im Projekt integriert zu haben. Es müssen also nicht unbedingt die vorgegebenen Blöcke genutzt werden, man sollte aber trotzdem diese Erweiterung hinzufügen.

## Blöcke

| Block (deutsch) | Funktion |
| --- | --- |
| Bluetooth initialisieren | startet den UART-Dienst und den Datenempfang |
| Calliope mini BLE-Anzeigename | zeigt den Kopplungsnamen auf der LED-Matrix |
| wenn Bluetooth verbunden | Ereignis bei aufgebauter Verbindung |
| wenn Bluetooth getrennt | Ereignis bei getrennter Verbindung |
| wenn Bewegungsdaten empfangen | Ereignis für Daten der Face-App |
| zeige Säulendiagramm für Bewegungsdaten vom Wert … | Balkenanzeige eines Bewegungswertes |
| Bewegungsdaten vom Wert … | X, Y, Z, Drehen, Nicken, Mund, Linkes Auge, Rechtes Auge, Rollen, Lächeln, Gesicht sichtbar |
| Wenn Steuerbefehl … empfangen wird | Ereignis für ↑ ↓ ← → 🔊 ⏹ Slider1 Slider2 |
| Steuerbefehl empfangen … | Wahrheitswert, ob der Befehl anliegt (Fortgeschritten) |
| Slider1 Wert / Slider2 Wert | Zahlenwerte der beiden Schieberegler |
| empfangener Text | roher Bluetooth-Text (Fortgeschritten) |

Verfügbare Sprachen: Deutsch, Englisch, Französisch, Spanisch, Italienisch, Griechisch.


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

| Block (English) | Purpose |
| --- | --- |
| Initialize Bluetooth | starts the UART service and data reception |
| Calliope mini BLE-device-name | shows the pairing name on the LED matrix |
| on Bluetooth connected | event when a connection is established |
| on Bluetooth disconnected | event when a connection is closed |
| on movement data received | event for Face-App data |
| show bar graph for movement data value … | bar graph of one movement value |
| movement data from value … | X, Y, Z, Yaw, Pitch, Mouth, Left Eye, Right Eye, Roll, Smile, Face Visible |
| When control command … is received | event for ↑ ↓ ← → 🔊 ⏹ Slider1 Slider2 |
| Control command received … | boolean check for the current command (advanced) |
| Slider1 value / Slider2 value | numeric values of the two sliders |
| received string | raw Bluetooth string (advanced) |

Available languages: German, English, French, Spanish, Italian, Greek.


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
