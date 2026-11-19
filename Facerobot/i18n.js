/**
 * Calliope Facerobot – Mehrsprachigkeit
 *
 * Die Begriffe der Messwerte sind identisch mit den Blöcken der
 * MakeCode-Erweiterung "LOFI Robot" (LofiRobot/_locales/<lang>/lofirobot-strings.json).
 * Wer hier etwas ändert, sollte es dort ebenfalls ändern.
 */

const LANGUAGES = [
  { code: "de", label: "Deutsch (DE)" },
  { code: "en", label: "English (EN)" },
  { code: "fr", label: "Français (FR)" },
  { code: "es", label: "Español (ES)" },
  { code: "it", label: "Italiano (IT)" },
  { code: "el", label: "Ελληνικά (EL)" }
];

const TRANSLATIONS = {
  de: {
    "app.name": "Calliope Facerobot",
    "loading": "Daten werden geladen.",
    "connect": "Mit Calliope mini verbinden",
    "conn.disconnected": "Nicht verbunden",
    "conn.connecting": "Verbinde …",
    "conn.connected": "Verbunden",
    "conn.error": "Verbindung fehlgeschlagen",
    "conn.lost": "Verbindung getrennt",
    "menu.settings": "Einstellungen",
    "menu.languages": "Sprachen",
    "lang.title": "Sprache auswählen",
    "lang.close": "Schließen",
    "welcome.title": 'Robotersteuerung durch <span>Gesichtserkennung</span>',
    "welcome.subtitle": "Der Roboterkopf, der sich so wie du bewegt!",
    "welcome.start": "Verbinden",
    "camera.error": "Fehler beim Zugriff auf die Kamera: ",
    "value.x": "X",
    "value.y": "Y",
    "value.z": "Z",
    "value.yaw": "Drehen",
    "value.pitch": "Nicken",
    "value.mouth": "Mund",
    "value.leftEye": "Linkes Auge",
    "value.rightEye": "Rechtes Auge",
    "value.roll": "Rollen",
    "value.smile": "Lächeln",
    "value.face": "Gesicht"
  },
  en: {
    "app.name": "Calliope Facerobot",
    "loading": "Loading data.",
    "connect": "Connect to Calliope mini",
    "conn.disconnected": "Not connected",
    "conn.connecting": "Connecting …",
    "conn.connected": "Connected",
    "conn.error": "Connection failed",
    "conn.lost": "Connection lost",
    "menu.settings": "Settings",
    "menu.languages": "Languages",
    "lang.title": "Choose language",
    "lang.close": "Close",
    "welcome.title": 'Robot control through <span>face recognition</span>',
    "welcome.subtitle": "The robot head that moves just like you!",
    "welcome.start": "Connect",
    "camera.error": "Error accessing the camera: ",
    "value.x": "X",
    "value.y": "Y",
    "value.z": "Z",
    "value.yaw": "Yaw",
    "value.pitch": "Pitch",
    "value.mouth": "Mouth",
    "value.leftEye": "Left Eye",
    "value.rightEye": "Right Eye",
    "value.roll": "Roll",
    "value.smile": "Smile",
    "value.face": "Face"
  },
  fr: {
    "app.name": "Calliope Facerobot",
    "loading": "Chargement des données.",
    "connect": "Connecter au Calliope mini",
    "conn.disconnected": "Non connecté",
    "conn.connecting": "Connexion …",
    "conn.connected": "Connecté",
    "conn.error": "Échec de la connexion",
    "conn.lost": "Connexion perdue",
    "menu.settings": "Paramètres",
    "menu.languages": "Langues",
    "lang.title": "Choisir la langue",
    "lang.close": "Fermer",
    "welcome.title": 'Commande du robot par <span>reconnaissance faciale</span>',
    "welcome.subtitle": "La tête de robot qui bouge comme toi !",
    "welcome.start": "Connecter",
    "camera.error": "Erreur d'accès à la caméra : ",
    "value.x": "X",
    "value.y": "Y",
    "value.z": "Z",
    "value.yaw": "Rotation",
    "value.pitch": "Tangage",
    "value.mouth": "Bouche",
    "value.leftEye": "Œil gauche",
    "value.rightEye": "Œil droit",
    "value.roll": "Roulis",
    "value.smile": "Sourire",
    "value.face": "Visage"
  },
  es: {
    "app.name": "Calliope Facerobot",
    "loading": "Cargando datos.",
    "connect": "Conectar con Calliope mini",
    "conn.disconnected": "No conectado",
    "conn.connecting": "Conectando …",
    "conn.connected": "Conectado",
    "conn.error": "Conexión fallida",
    "conn.lost": "Conexión perdida",
    "menu.settings": "Ajustes",
    "menu.languages": "Idiomas",
    "lang.title": "Seleccionar idioma",
    "lang.close": "Cerrar",
    "welcome.title": 'Control del robot mediante <span>reconocimiento facial</span>',
    "welcome.subtitle": "¡La cabeza de robot que se mueve como tú!",
    "welcome.start": "Conectar",
    "camera.error": "Error al acceder a la cámara: ",
    "value.x": "X",
    "value.y": "Y",
    "value.z": "Z",
    "value.yaw": "Giro",
    "value.pitch": "Cabeceo",
    "value.mouth": "Boca",
    "value.leftEye": "Ojo izquierdo",
    "value.rightEye": "Ojo derecho",
    "value.roll": "Balanceo",
    "value.smile": "Sonrisa",
    "value.face": "Cara"
  },
  it: {
    "app.name": "Calliope Facerobot",
    "loading": "Caricamento dati.",
    "connect": "Collega al Calliope mini",
    "conn.disconnected": "Non connesso",
    "conn.connecting": "Connessione …",
    "conn.connected": "Connesso",
    "conn.error": "Connessione non riuscita",
    "conn.lost": "Connessione persa",
    "menu.settings": "Impostazioni",
    "menu.languages": "Lingue",
    "lang.title": "Seleziona lingua",
    "lang.close": "Chiudi",
    "welcome.title": 'Controllo del robot tramite <span>riconoscimento facciale</span>',
    "welcome.subtitle": "La testa robot che si muove come te!",
    "welcome.start": "Collega",
    "camera.error": "Errore di accesso alla fotocamera: ",
    "value.x": "X",
    "value.y": "Y",
    "value.z": "Z",
    "value.yaw": "Rotazione",
    "value.pitch": "Beccheggio",
    "value.mouth": "Bocca",
    "value.leftEye": "Occhio sinistro",
    "value.rightEye": "Occhio destro",
    "value.roll": "Rollio",
    "value.smile": "Sorriso",
    "value.face": "Viso"
  },
  el: {
    "app.name": "Calliope Facerobot",
    "loading": "Φόρτωση δεδομένων.",
    "connect": "Σύνδεση με το Calliope mini",
    "conn.disconnected": "Μη συνδεδεμένο",
    "conn.connecting": "Σύνδεση …",
    "conn.connected": "Συνδεδεμένο",
    "conn.error": "Η σύνδεση απέτυχε",
    "conn.lost": "Η σύνδεση χάθηκε",
    "menu.settings": "Ρυθμίσεις",
    "menu.languages": "Γλώσσες",
    "lang.title": "Επιλογή γλώσσας",
    "lang.close": "Κλείσιμο",
    "welcome.title": 'Έλεγχος ρομπότ με <span>αναγνώριση προσώπου</span>',
    "welcome.subtitle": "Το κεφάλι ρομπότ που κινείται όπως εσύ!",
    "welcome.start": "Σύνδεση",
    "camera.error": "Σφάλμα πρόσβασης στην κάμερα: ",
    "value.x": "X",
    "value.y": "Y",
    "value.z": "Z",
    "value.yaw": "Περιστροφή",
    "value.pitch": "Κλίση",
    "value.mouth": "Στόμα",
    "value.leftEye": "Αριστερό μάτι",
    "value.rightEye": "Δεξί μάτι",
    "value.roll": "Κύλιση",
    "value.smile": "Χαμόγελο",
    "value.face": "Πρόσωπο"
  }
};

const STORAGE_KEY = "facerobot.lang";
let currentLang = "de";

function detectLanguage() {
  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  if (fromUrl && TRANSLATIONS[fromUrl]) return fromUrl;

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && TRANSLATIONS[stored]) return stored;
  } catch (e) {
    /* localStorage kann blockiert sein – dann eben der Browser */
  }

  const nav = (navigator.language || "de").slice(0, 2).toLowerCase();
  return TRANSLATIONS[nav] ? nav : "de";
}

function t(key) {
  const table = TRANSLATIONS[currentLang] || TRANSLATIONS.de;
  return table[key] !== undefined ? table[key] : (TRANSLATIONS.de[key] || key);
}

function applyTranslations() {
  document.documentElement.lang = currentLang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    el.innerHTML = t(el.getAttribute("data-i18n-html"));
  });
  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    const v = t(el.getAttribute("data-i18n-title"));
    el.setAttribute("title", v);
    el.setAttribute("aria-label", v);
  });

  // Der Verbindungsknopf trägt den Text seines aktuellen Zustands
  const conn = document.getElementById("robotShow");
  if (conn) {
    const label = t("conn." + (conn.dataset.connState || "disconnected"));
    conn.setAttribute("title", label);
    conn.setAttribute("aria-label", label);
  }

  document.title = t("app.name");
}

/**
 * Zustand des Verbindungsknopfes setzen.
 * disconnected = neutral, connecting = grau, connected = grün,
 * error / lost = rot (wie im Connection-Widget der Teachable Machine)
 */
function setConnectionState(state) {
  const btn = document.getElementById("robotShow");
  if (!btn) return;
  const states = ["disconnected", "connecting", "connected", "error", "lost"];
  if (states.indexOf(state) === -1) state = "disconnected";

  states.forEach((s) => btn.classList.remove("status-" + s));
  btn.classList.add("status-" + state);
  btn.dataset.connState = state;

  const label = t("conn." + state);
  btn.setAttribute("title", label);
  btn.setAttribute("aria-label", label);
}

function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (e) {
    /* ohne Speicher gilt die Wahl nur für diese Sitzung */
  }
  applyTranslations();
  renderLanguageOptions();
}

function renderLanguageOptions() {
  const list = document.getElementById("lang-options");
  if (!list) return;
  list.innerHTML = "";
  LANGUAGES.forEach((l) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "lang-option" + (l.code === currentLang ? " active" : "");
    btn.textContent = l.label;
    btn.lang = l.code;
    btn.addEventListener("click", () => {
      setLanguage(l.code);
      closeLanguageDialog();
    });
    list.appendChild(btn);
  });
}

/* ---------- Zahnrad-Menü und Sprachdialog ---------- */

function toggleSettingsMenu(force) {
  const menu = document.getElementById("settings-menu");
  const btn = document.getElementById("settings-button");
  if (!menu) return;
  const open = force !== undefined ? force : menu.hidden;
  menu.hidden = !open;
  if (btn) btn.setAttribute("aria-expanded", String(open));
}

function openLanguageDialog() {
  toggleSettingsMenu(false);
  const dlg = document.getElementById("lang-dialog");
  if (dlg) dlg.hidden = false;
}

function closeLanguageDialog() {
  const dlg = document.getElementById("lang-dialog");
  if (dlg) dlg.hidden = true;
}

function initI18n() {
  currentLang = detectLanguage();
  applyTranslations();
  renderLanguageOptions();

  const settingsBtn = document.getElementById("settings-button");
  if (settingsBtn) {
    settingsBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleSettingsMenu();
    });
  }

  const langEntry = document.getElementById("menu-languages");
  if (langEntry) langEntry.addEventListener("click", openLanguageDialog);

  const closeBtn = document.getElementById("lang-close");
  if (closeBtn) closeBtn.addEventListener("click", closeLanguageDialog);

  const dlg = document.getElementById("lang-dialog");
  if (dlg) {
    dlg.addEventListener("click", (e) => {
      if (e.target === dlg) closeLanguageDialog();
    });
  }

  document.addEventListener("click", () => toggleSettingsMenu(false));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      toggleSettingsMenu(false);
      closeLanguageDialog();
    }
  });
}

window.t = t;
window.setLanguage = setLanguage;
window.setConnectionState = setConnectionState;
window.getLanguage = () => currentLang;

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initI18n);
} else {
  initI18n();
}
