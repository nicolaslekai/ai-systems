/* Systembild consulting.nicolaslekai.com · V5 · 24.11.2026 — erzeugt von tools/system3d_film.py aus der Szene von
   otterstein.ai. Nicht von Hand aendern: Skript anpassen, neu erzeugen, bauen.sh.
   Das helle Studio-Diorama aus dem Bild davor als 3D: dieselben Gegenstaende, Plaetze und derselbe Blickwinkel,
   Bildschirme und Fotos mit den Bildern aus dem Standbild (tex/). Die Kamera passt sich in jedem Bild so ein,
   dass nichts angeschnitten wird (fit). */
/* Systembild in 3D · otterstein.ai · 2026-11-22 (V2, am selben Tag)
   Nicolas, 22.11.2026: „build a 3D graphic … that shows server and the computers connecting
   and it's all in one brain" und „put it underneath how we work for now".
   V2, Nicolas: „this is not detailed enough yet, we can do better … but it's the right direction".

   Was zu sehen ist: ein Server-Schrank und fünf Arbeitsgeräte (zwei Laptops, ein Arbeitsplatz mit
   Bildschirm, ein Tablet, ein Telefon) stehen im Kreis. Von jedem läuft eine Leitung über den Boden
   in einen Sockel in der Mitte; von dort steigt das Licht in den Kern. Der Kern ist derselbe
   Schichtstapel wie in assets/brain/brain.js: neun Lagen, deren Radien eine Kugel ergeben. Kein
   anatomisches Gehirn, kein Partikelnetz (DESIGN-ASTRA Punkt 8).

   V2 bringt die Einzelheiten: Tasten, Bildschirmränder, Einschübe mit Anschlüssen, Laufwerken und
   Patchkabeln, Stecker, Sockel, Glaskanten und Speichen im Kern, Bodenraster, Staub, echte Schatten
   und einen Lichtschein um alles, was leuchtet (Bloom). Dazu Beschriftungen als HTML über der Szene.

   V3, Nicolas am selben Abend: „I think we can increase the detail level one more time. So do one more
   run over it, make it really beautiful. And we can also start it a little bit earlier on the scroll,
   because it comes in a little bit late and leaves some gray space for too long before it."
   Feiner: echte Kantenglättung auch mit Lichtschein (die Nachbearbeitung zeichnet jetzt in eine
   vierfach abgetastete Fläche), Glas über den Bildschirmen, ein kühles Gegenlicht für helle Kanten.
   Mehr zu sehen: im Kern ein Kernpunkt, Meridiane, Skalenstriche an jeder Lage, Funken im Inneren und
   eine dritte Bahn; am Boden ein Feinraster, Kreuzmarken, ein Lichtsee unter dem Kern und eine Welle,
   die nach außen läuft, wenn ein Lichtpunkt ankommt; am Schrank Füße, Dachgitter und Lichtleisten; an
   den Geräten Lautsprecherschlitze, Schreibunterlage, Stift und der Schein der Bildschirme am Boden.
   Früher: der Aufbau beginnt, sobald der obere Rand der Bühne im Fenster steht, nicht erst bei einem
   guten Viertel; die Geräte kommen schneller nacheinander; Boden und Datenring stehen von Anfang an
   schwach da, die Bühne ist nie leer.

   Ablauf: Kommt das Band ins Bild, baut sich die Szene in vier Sekunden auf. Erst die Geräte, dann
   der Server, dann die Leitungen, zuletzt der Kern. Danach läuft sie ruhig weiter (Lichtpunkte,
   Drehung). Verlässt das Band das Fenster — nach oben oder nach unten —, wird sie zurückgesetzt und
   baut sich beim nächsten Mal neu auf (Nicolas, 22.11.2026: „either needs to loop or it needs to
   reset once we scroll past the top or bottom"). Die Seite scrollt dabei ganz normal.
   Bei „Bewegung reduzieren", ohne WebGL oder ohne JavaScript bleibt das Standbild stehen.

   V4, Nicolas am 23.11.2026 vom Handy: „this needs to preload sooner, otherwise it's impossible to scroll
   past it, also try reduce its loading time by optimizing the scene". Vorher baute sich die ganze Szene
   in einem Stück auf, genau dann, wenn das Band ins Fenster kam — am Handy stand die Seite so lange.
   Jetzt: laden.js holt die Datei gleich nach dem Laden der Seite und stößt den Bau mehrere Fenster vor
   dem Band an. Der Bau läuft in kleinen Schritten mit Pausen dazwischen (``init``), die Shader werden
   Stück für Stück vorab übersetzt (``warmUp``). Leichter: die festen Teile jedes Geräts sind je Werkstoff
   zu einem Körper verschmolzen (``compact``, rund 300 Zeichenaufrufe weniger), die Schatten werden nur
   noch gerechnet, solange sich der Aufbau bewegt, und am Handy sind Schattenkarte und Bildschirm-Texturen
   halb so groß.

   Diese Datei ist die lesbare Quelle. Ausgeliefert wird assets/system3d/system3d.js, das
   assets/system3d/bauen.sh daraus und aus three.js zusammenpackt (siehe README.md). */
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const ACCENT = 0xff7f61;               // Koralle, wie --akzent-hell in koralle-grau.css
// Texturen aus dem alten Standbild liegen neben dieser Datei in tex/ (Adresse aus dem eigenen <script>)
const TEX_BASE = (() => {
  try { return new URL('tex/', document.currentScript.src).href; } catch (err) { return 'assets/system3d/tex/'; }
})();
const GROUND = 0xcccad1;               // Boden: Lila-Grau des Standbilds, 25.11. eine Stufe dunkler (Nicky: "a little bit more grey, it's too bright"); wie .nl-system in koralle-grau.css
// Farben aus dem alten Standbild gemessen (24.11.2026, system-koralle_KJ_v001.png): Puck oben #e1dce5,
// Kabel #dcdbe3, Stecker im Mittel #f79b99 (Schatten #e66e73, Licht #feb7b0), Leuchtring #f4aba2.
// Die Grundfarben unten sind so gewaehlt, dass das beleuchtete Ergebnis diese Werte trifft.
const HUB_WHITE = 0xd2ced8, CABLE_WHITE = 0xc4c2cb, PLUG_CORAL = 0xe8817f;   // Weiss ~7 % dunkler, Koralle gleich hell
const RING_CORE = 0xf3837f, RING_GLOW = 0xf6aaa2, RING_HOT = 0xffc9bf;
const PLUG_W = 0.2, PLUG_H = 0.17, PLUG_LEN = 0.44;   // Stecker wie im Bild: kurze rechteckige Tuelle
const TUMBLE = [0.071, 0.13, 0.041];   // Raten des Kerns in rad/s, wie in brain.js (unrunde Verhältnisse)
const CORE_Y = 2.3;                    // Höhe der Kernmitte über dem Boden
const CORE_R = 1.25;                   // Radius der Kugel, die die Lagen ergeben
const LAYERS = 9;
const SEAMS = 8;                       // Nähte zwischen zwei benachbarten Lagen
const DOCK_R = 1.05;                   // Radius des Sockels, an dem die Leitungen enden
const BUILD_SECONDS = 4;                // Dauer des Aufbaus, sobald das Band im Bild ist
const DEG = Math.PI / 180;

/**
 * Begrenzt einen Wert auf den Bereich 0 bis 1.
 * @param {number} x Eingangswert.
 * @returns {number} Der Wert, mindestens 0 und höchstens 1.
 */
const clamp01 = (x) => Math.min(1, Math.max(0, x));

/**
 * Gibt den Hauptfaden frei. Zwischen zwei Bauschritten kann die Seite so scrollen und zeichnen.
 * @returns {Promise<void>} Erfüllt sich im nächsten Durchlauf der Ereignisschleife.
 */
const rest = () => new Promise((resolve) => { setTimeout(resolve, 0); });

/**
 * Weicher Übergang zwischen zwei Schwellen (Smoothstep).
 * @param {number} a Untere Schwelle, darunter ist das Ergebnis 0.
 * @param {number} b Obere Schwelle, darüber ist das Ergebnis 1.
 * @param {number} x Eingangswert.
 * @returns {number} Wert zwischen 0 und 1.
 */
function smooth(a, b, x) {
  const k = clamp01((x - a) / (b - a));
  return k * k * (3 - 2 * k);
}

/**
 * Lineare Mischung zweier Zahlen.
 * @param {number} a Startwert.
 * @param {number} b Zielwert.
 * @param {number} k Anteil des Zielwerts, 0 bis 1.
 * @returns {number} Der gemischte Wert.
 */
const mix = (a, b, k) => a + (b - a) * k;

/**
 * Liefert einen wiederholbaren Zufallsgenerator, damit jedes Gerät bei jedem Laden gleich aussieht.
 * @param {number} seed Startwert.
 * @returns {function(): number} Funktion, die Zahlen zwischen 0 und 1 liefert.
 */
function seeded(seed) {
  let s = seed * 9301 + 49297;
  return () => ((s = (s * 9301 + 49297) % 233280) / 233280);
}

/**
 * Legt eine Zeichenfläche an und gibt sie samt Zeichenkontext zurück.
 * @param {number} w Breite in Bildpunkten.
 * @param {number} h Höhe in Bildpunkten.
 * @returns {{c: HTMLCanvasElement, g: CanvasRenderingContext2D}} Fläche und Kontext.
 */
function canvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return { c, g: c.getContext('2d') };
}

/**
 * Macht aus einer Zeichenfläche eine Farbtextur.
 * @param {HTMLCanvasElement} c Die Zeichenfläche.
 * @returns {THREE.CanvasTexture} Die Textur im sRGB-Farbraum.
 */
function toTexture(c) {
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}

/**
 * Zeichnet einen weichen runden Lichtfleck als Textur — für Knoten, Lichtpunkte und Schatten.
 * @param {string} rgb Farbe als ``"r,g,b"``.
 * @param {number} strength Deckkraft in der Mitte, 0 bis 1.
 * @returns {THREE.CanvasTexture} Die fertige Textur.
 */
function makeSpotTexture(rgb, strength) {
  const { c, g } = canvas(128, 128);
  const grad = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grad.addColorStop(0, `rgba(${rgb},${strength})`);
  grad.addColorStop(0.3, `rgba(${rgb},${strength * 0.42})`);
  grad.addColorStop(0.65, `rgba(${rgb},${strength * 0.1})`);
  grad.addColorStop(1, `rgba(${rgb},0)`);
  g.fillStyle = grad;
  g.fillRect(0, 0, 128, 128);
  return toTexture(c);
}

/**
 * Zeichnet ein Lochblech: dunkle Punkte im Versatz. Für Lüftungsflächen an Server und Sockel.
 * @returns {THREE.CanvasTexture} Kachelbare Textur.
 */
function makeVentTexture() {
  const { c, g } = canvas(64, 64);
  g.fillStyle = '#5f5f5f';
  g.fillRect(0, 0, 64, 64);
  g.fillStyle = '#090909';
  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 4; x++) {
      g.beginPath();
      g.arc(x * 16 + (y % 2 ? 12 : 4), y * 16 + 8, 4.6, 0, Math.PI * 2);
      g.fill();
    }
  }
  const tex = toTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

/**
 * Füllt ein Rechteck mit runden Ecken.
 * @param {CanvasRenderingContext2D} g Zeichenkontext.
 * @param {number} x Linke Kante.
 * @param {number} y Obere Kante.
 * @param {number} w Breite.
 * @param {number} h Höhe.
 * @param {number} r Eckenradius.
 * @param {string} fill Füllfarbe.
 */
function rr(g, x, y, w, h, r, fill) {
  g.fillStyle = fill;
  g.beginPath();
  g.roundRect(x, y, w, h, Math.min(r, w / 2, h / 2));
  g.fill();
}

/**
 * Zeichnet eine Bildschirmoberfläche. Bewusst ohne lesbaren Text: Es soll nach laufender Software
 * aussehen, ohne ein bestimmtes Produkt vorzutäuschen. Fünf Arten:
 * ``dash`` (Übersicht mit Verlaufskurve), ``chat`` (Gespräch mit Assistent), ``doc`` (Dokument
 * mit Freigabe-Knopf — „ein Mensch gibt frei"), ``tablet`` (Kacheln), ``phone`` (Gespräch hochkant).
 * @param {number} w Breite der Textur in Bildpunkten.
 * @param {number} h Höhe der Textur in Bildpunkten.
 * @param {string} kind Art der Oberfläche.
 * @param {number} seed Startwert für die Längen der Zeilen.
 * @returns {THREE.CanvasTexture} Die fertige Textur.
 */
function makeScreenTexture(w, h, kind, seed) {
  const { c, g } = canvas(w, h);
  const rnd = seeded(seed);
  const A = '#ec755a', BG = '#0f0f0f', P1 = '#191919', P2 = '#222222', L1 = '#373737', L2 = '#4f4f4f';
  const u = w / 100;                                   // ein Hundertstel der Breite als Maß
  g.fillStyle = BG;
  g.fillRect(0, 0, w, h);
  const bars = (x, y, widths, bh, gap, col) => widths.forEach((bw, i) => rr(g, x, y + i * (bh + gap), bw, bh, bh / 2, col));

  if (kind === 'dash') {
    rr(g, 0, 0, w, 6 * u, 0, P1);
    for (let i = 0; i < 3; i++) rr(g, (2 + i * 2.2) * u, 2.2 * u, 1.4 * u, 1.4 * u, u, L2);
    rr(g, w - 14 * u, 1.8 * u, 11 * u, 2.4 * u, 1.2 * u, A);
    rr(g, 0, 6 * u, 6.5 * u, h, 0, '#151515');
    for (let i = 0; i < 6; i++) rr(g, 1.9 * u, (9 + i * 6) * u, 2.7 * u, 2.7 * u, 0.7 * u, i === 1 ? A : L1);
    for (let i = 0; i < 3; i++) {                      // drei Kennzahl-Karten
      const x = (9 + i * 30) * u;
      rr(g, x, 9 * u, 27.5 * u, 13 * u, 1.4 * u, P1);
      rr(g, x + 2 * u, 11.5 * u, (8 + rnd() * 8) * u, 1.2 * u, u, L1);
      rr(g, x + 2 * u, 15 * u, (10 + rnd() * 9) * u, 3.4 * u, u, i === 0 ? A : '#d4d4d4');
    }
    const cx = 9 * u, cy = 25 * u, cw = 57.5 * u, ch = h - 28 * u;   // Verlaufskurve
    rr(g, cx, cy, cw, ch, 1.4 * u, P1);
    g.strokeStyle = '#2a2a2a';
    g.lineWidth = Math.max(1, u * 0.15);
    for (let i = 1; i < 5; i++) { g.beginPath(); g.moveTo(cx + 2 * u, cy + (ch * i) / 5); g.lineTo(cx + cw - 2 * u, cy + (ch * i) / 5); g.stroke(); }
    const pts = [];
    for (let i = 0; i <= 12; i++) pts.push([cx + 3 * u + ((cw - 6 * u) * i) / 12, cy + ch * (0.78 - 0.5 * (i / 12) - 0.16 * rnd())]);
    const fillGrad = g.createLinearGradient(0, cy, 0, cy + ch);
    fillGrad.addColorStop(0, 'rgba(236,117,90,0.34)');
    fillGrad.addColorStop(1, 'rgba(236,117,90,0)');
    g.beginPath();
    pts.forEach(([x, y], i) => (i ? g.lineTo(x, y) : g.moveTo(x, y)));
    g.lineTo(pts[12][0], cy + ch - u); g.lineTo(pts[0][0], cy + ch - u); g.closePath();
    g.fillStyle = fillGrad; g.fill();
    g.beginPath();
    pts.forEach(([x, y], i) => (i ? g.lineTo(x, y) : g.moveTo(x, y)));
    g.strokeStyle = A; g.lineWidth = u * 0.55; g.lineJoin = 'round'; g.stroke();
    rr(g, 69 * u, cy, 28 * u, ch, 1.4 * u, P1);        // Liste rechts
    for (let i = 0; i < 7; i++) {
      const y = cy + 2.5 * u + i * ((ch - 4 * u) / 7);
      rr(g, 71 * u, y, 1.6 * u, 1.6 * u, u, i % 3 === 0 ? A : L2);
      rr(g, 74.5 * u, y + 0.2 * u, (9 + rnd() * 11) * u, 1.2 * u, u, L1);
    }
  } else if (kind === 'chat') {
    rr(g, 0, 0, 27 * u, h, 0, '#151515');
    rr(g, 3 * u, 3 * u, 21 * u, 3.4 * u, 1.7 * u, P2);
    for (let i = 0; i < 6; i++) {                      // Gesprächsliste
      const y = (10 + i * 8.4) * u;
      if (i === 1) rr(g, 1.5 * u, y - 1.5 * u, 24 * u, 7.4 * u, 1.4 * u, P2);
      g.fillStyle = i === 1 ? A : L2;
      g.beginPath(); g.arc(5.5 * u, y + 2.2 * u, 1.9 * u, 0, Math.PI * 2); g.fill();
      rr(g, 9.5 * u, y + 0.6 * u, (7 + rnd() * 7) * u, 1.2 * u, u, '#d4d4d4');
      rr(g, 9.5 * u, y + 3 * u, (9 + rnd() * 5) * u, u, u, L1);
    }
    let y = 5 * u;                                     // Sprechblasen
    for (let i = 0; i < 5; i++) {
      const mine = i % 2 === 1, bw = (24 + rnd() * 22) * u, lines = 1 + Math.floor(rnd() * 3), bh = (3.2 + lines * 2.4) * u;
      const x = mine ? w - bw - 4 * u : 31 * u;
      rr(g, x, y, bw, bh, 1.8 * u, mine ? A : P2);
      for (let l = 0; l < lines; l++) rr(g, x + 2 * u, y + 2 * u + l * 2.4 * u, (bw - 4 * u) * (l === lines - 1 ? 0.55 + rnd() * 0.3 : 1), u, u, mine ? '#393939' : L2);
      y += bh + 2.2 * u;
      if (y > h - 14 * u) break;
    }
    rr(g, 31 * u, h - 8 * u, w - 35 * u, 5 * u, 2.5 * u, P1);
    g.fillStyle = A; g.beginPath(); g.arc(w - 7 * u, h - 5.5 * u, 1.7 * u, 0, Math.PI * 2); g.fill();
  } else if (kind === 'doc') {
    rr(g, 0, 0, w, 6 * u, 0, P1);
    for (let i = 0; i < 4; i++) rr(g, (3 + i * 9) * u, 2.2 * u, 6.5 * u, 1.5 * u, u, i ? L1 : '#d4d4d4');
    rr(g, 5 * u, 10 * u, 56 * u, h, 0.8 * u, '#d7d7d7');   // helle Seite
    rr(g, 10 * u, 15 * u, 26 * u, 2.6 * u, u, '#282828');
    for (let i = 0; i < 14; i++) rr(g, 10 * u, (22 + i * 3.1) * u, (i % 5 === 4 ? 24 + rnd() * 12 : 46) * u, 1.15 * u, u, '#8a8a8a');
    rr(g, 66 * u, 10 * u, 30 * u, h - 14 * u, 1.4 * u, P1);   // Freigabe-Spalte
    rr(g, 69 * u, 13.5 * u, 14 * u, 1.6 * u, u, '#d4d4d4');
    for (let i = 0; i < 4; i++) {
      const yy = (19 + i * 6) * u;
      g.strokeStyle = A; g.lineWidth = u * 0.4;
      g.beginPath(); g.arc(70.6 * u, yy + 0.7 * u, 1.3 * u, 0, Math.PI * 2);
      if (i < 3) { g.fillStyle = A; g.fill(); } else g.stroke();
      rr(g, 74 * u, yy, (10 + rnd() * 9) * u, 1.3 * u, u, L2);
    }
    rr(g, 69 * u, h - 13 * u, 24 * u, 5.6 * u, 2.8 * u, A);   // der Freigabe-Knopf
    rr(g, 75 * u, h - 10.9 * u, 12 * u, 1.4 * u, u, '#2c2c2c');
  } else if (kind === 'tablet') {
    rr(g, 0, 0, w, 8 * u, 0, P1);
    rr(g, 5 * u, 3 * u, 22 * u, 2.2 * u, u, '#d4d4d4');
    rr(g, w - 14 * u, 2.4 * u, 9 * u, 3.4 * u, 1.7 * u, A);
    for (let i = 0; i < 4; i++) {                      // vier Kacheln mit kleinen Säulen
      const x = (5 + (i % 2) * 46) * u, y = (13 + Math.floor(i / 2) * 34) * u;
      rr(g, x, y, 43 * u, 30 * u, 2 * u, P1);
      rr(g, x + 3 * u, y + 3 * u, (12 + rnd() * 10) * u, 1.6 * u, u, L2);
      for (let b = 0; b < 7; b++) {
        const bh = (5 + rnd() * 14) * u;
        rr(g, x + (4 + b * 5.2) * u, y + 26 * u - bh, 3 * u, bh, 0.8 * u, b === 4 && i === 0 ? A : L1);
      }
    }
    bars(5 * u, 84 * u, [0, 1, 2, 3, 4, 5].map(() => (40 + rnd() * 48) * u), 1.6 * u, 4.6 * u, L1);
    rr(g, 5 * u, 84 * u + 2 * 6.2 * u, 62 * u, 1.6 * u, u, A);
  } else {                                             // phone
    rr(g, 0, 0, w, 16 * u, 0, P1);
    rr(g, 34 * u, 2.5 * u, 32 * u, 5 * u, 2.5 * u, '#000');   // Kameraaussparung
    g.fillStyle = A; g.beginPath(); g.arc(12 * u, 11 * u, 3.4 * u, 0, Math.PI * 2); g.fill();
    rr(g, 19 * u, 9.6 * u, 34 * u, 2.8 * u, 1.4 * u, '#d4d4d4');
    let y = 22 * u;
    for (let i = 0; i < 8; i++) {
      const mine = i % 2 === 1, bw = (38 + rnd() * 34) * u, lines = 1 + Math.floor(rnd() * 2.6), bh = (7 + lines * 4.6) * u;
      const x = mine ? w - bw - 6 * u : 6 * u;
      rr(g, x, y, bw, bh, 4 * u, mine ? A : P2);
      for (let l = 0; l < lines; l++) rr(g, x + 4 * u, y + 4.4 * u + l * 4.6 * u, (bw - 8 * u) * (l === lines - 1 ? 0.6 : 1), 1.8 * u, u, mine ? '#393939' : L2);
      y += bh + 4 * u;
      if (y > h - 34 * u) break;
    }
    rr(g, 6 * u, h - 18 * u, w - 12 * u, 11 * u, 5.5 * u, P1);
    g.fillStyle = A; g.beginPath(); g.arc(w - 13 * u, h - 12.5 * u, 3.6 * u, 0, Math.PI * 2); g.fill();
  }
  return toTexture(c);
}

/**
 * Baut eine flache Platte mit runden Ecken und leicht gebrochenen Kanten — der Grundkörper
 * aller Geräte. Die Platte steht aufrecht in der XY-Ebene, ihre Mitte liegt im Ursprung.
 * @param {number} w Breite.
 * @param {number} h Höhe.
 * @param {number} d Dicke.
 * @param {number} r Eckenradius.
 * @returns {THREE.ExtrudeGeometry} Die Geometrie der Platte.
 */
function slab(w, h, d, r) {
  const bevel = Math.min(0.04, d * 0.24, Math.min(w, h) * 0.08);   // V5.2: rundere Kanten, dort sitzt das Glanzlicht
  const geo = new THREE.ExtrudeGeometry(roundedShape(w, h, r), {
    depth: d - bevel * 2, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 4, curveSegments: 10,
  });
  geo.translate(0, 0, -(d - bevel * 2) / 2);
  return geo;
}

/**
 * Umriss eines Rechtecks mit runden Ecken, Mitte im Ursprung.
 * @param {number} w Breite.
 * @param {number} h Höhe.
 * @param {number} r Eckenradius.
 * @returns {THREE.Shape} Der Umriss.
 */
function roundedShape(w, h, r) {
  const x = -w / 2, y = -h / 2;
  const sh = new THREE.Shape();
  sh.moveTo(x + r, y);
  sh.lineTo(x + w - r, y);
  sh.quadraticCurveTo(x + w, y, x + w, y + r);
  sh.lineTo(x + w, y + h - r);
  sh.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  sh.lineTo(x + r, y + h);
  sh.quadraticCurveTo(x, y + h, x, y + h - r);
  sh.lineTo(x, y + r);
  sh.quadraticCurveTo(x, y, x + r, y);
  return sh;
}

/**
 * Bildschirmfläche mit runden Ecken; die Textur liegt formatfüllend darauf.
 * @param {number} w Breite.
 * @param {number} h Höhe.
 * @param {number} r Eckenradius.
 * @returns {THREE.ShapeGeometry} Die Fläche mit passenden Texturkoordinaten.
 */
function screenGeometry(w, h, r) {
  const geo = new THREE.ShapeGeometry(roundedShape(w, h, r), 6);
  const pos = geo.attributes.position, uv = geo.attributes.uv;
  for (let i = 0; i < pos.count; i++) uv.setXY(i, pos.getX(i) / w + 0.5, pos.getY(i) / h + 0.5);
  return geo;
}

/**
 * Legt einen Körper an, hängt ihn in eine Gruppe und lässt ihn Schatten werfen.
 * @param {THREE.Object3D} parent Gruppe, in die der Körper kommt.
 * @param {THREE.BufferGeometry} geo Geometrie.
 * @param {THREE.Material} mat Werkstoff.
 * @param {number} [x] Lage in x.
 * @param {number} [y] Lage in y.
 * @param {number} [z] Lage in z.
 * @returns {THREE.Mesh} Der Körper.
 */
function add(parent, geo, mat, x = 0, y = 0, z = 0) {
  const m = geo.isMesh ? geo : new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.castShadow = true;
  parent.add(m);
  return m;
}

/**
 * Legt die Werkstoffe eines Geräts an. Jedes Gerät bekommt eigene Exemplare, damit es
 * unabhängig von den anderen ein- und ausgeblendet werden kann.
 * @param {THREE.Texture} screenMap Textur für die Bildschirmfläche.
 * @returns {{alu: THREE.Material, dark: THREE.Material, key: THREE.Material, glass: THREE.Material,
 *     screen: THREE.Material, sheen: THREE.Material}} Gehäuse, dunkle Einsätze, Tasten, Bildschirmrand,
 *     Bildschirm und die spiegelnde Glasschicht darüber.
 */
function deviceMaterials(screenMap) {
  return {
    alu: new THREE.MeshStandardMaterial({ color: 0x8f8f8f, metalness: 1, roughness: 0.34 }),
    dark: new THREE.MeshStandardMaterial({ color: 0x171717, metalness: 0.5, roughness: 0.55 }),
    key: new THREE.MeshStandardMaterial({ color: 0x1d1d1d, metalness: 0.2, roughness: 0.62 }),
    glass: new THREE.MeshStandardMaterial({ color: 0x060606, metalness: 0.2, roughness: 0.12 }),
    screen: new THREE.MeshBasicMaterial({ map: screenMap }),
    // Glas: schwarz und spiegelnd, additiv über dem Bild — es bleiben nur die Spiegelungen des Raums stehen.
    sheen: new THREE.MeshStandardMaterial({
      color: 0x000000, metalness: 1, roughness: 0.07, envMapIntensity: 1.5,
      transparent: true, opacity: 0.5, depthWrite: false, blending: THREE.NormalBlending,
    }),
  };
}

/**
 * Setzt einen dunklen weichen Fleck unter ein Gerät — zusätzlich zum echten Schatten, damit die
 * Auflage auch dort dunkel ist, wo das Licht flach einfällt.
 * @param {THREE.Group} group Gruppe des Geräts.
 * @param {THREE.Texture} tex Schattentextur.
 * @param {number} w Breite des Flecks.
 * @param {number} d Tiefe des Flecks.
 */
function addContactShadow(group, tex, w, d) {
  const m = new THREE.Mesh(
    new THREE.PlaneGeometry(w, d),
    new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, opacity: 0.45 }),
  );
  m.rotation.x = -Math.PI / 2;
  m.position.y = 0.007;
  m.renderOrder = -1;
  group.add(m);
}

/**
 * Legt den Schein eines Bildschirms als weichen blauen Fleck auf den Boden vor das Gerät.
 * @param {THREE.Group} group Gruppe des Geräts.
 * @param {THREE.Texture} tex Lichtfleck-Textur.
 * @param {number} w Breite des Flecks.
 * @param {number} d Tiefe des Flecks.
 * @param {number} z Lage der Fleckmitte in z (vor dem Gerät ist positiv).
 * @param {number} strength Deckkraft, 0 bis 1.
 */
function addScreenSpill(group, tex, w, d, z, strength) {
  const m = new THREE.Mesh(
    new THREE.PlaneGeometry(w, d),
    new THREE.MeshBasicMaterial({ map: tex, color: ACCENT, transparent: true, opacity: strength, depthWrite: false, blending: THREE.NormalBlending }),
  );
  m.rotation.x = -Math.PI / 2;
  m.position.set(0, 0.009, z);
  group.add(m);
}

/**
 * Setzt ein Tastenfeld aus einzelnen Tasten auf eine waagerechte Fläche.
 * @param {THREE.Object3D} parent Gruppe, in die das Tastenfeld kommt.
 * @param {THREE.Material} mat Werkstoff der Tasten.
 * @param {number} w Breite des Felds.
 * @param {number} d Tiefe des Felds.
 * @param {number} cols Tasten je Reihe.
 * @param {number} rows Reihen.
 * @param {number} y Höhe der Tastenoberseite.
 * @param {number} z Lage der Feldmitte in z.
 */
function addKeys(parent, mat, w, d, cols, rows, y, z) {
  const kw = (w / cols) * 0.84, kd = (d / rows) * 0.8;
  const keys = new THREE.InstancedMesh(new THREE.BoxGeometry(kw, 0.012, kd), mat, cols * rows);
  const dummy = new THREE.Object3D();
  let i = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // In der untersten Reihe bleibt die Mitte frei: dort liegt die Leertaste als eigene Taste.
      const spaceRow = r === rows - 1 && c > cols * 0.28 && c < cols * 0.68;
      dummy.position.set(-w / 2 + (c + 0.5) * (w / cols), y, z - d / 2 + (r + 0.5) * (d / rows));
      dummy.scale.setScalar(spaceRow ? 0 : 1);
      dummy.updateMatrix();
      keys.setMatrixAt(i++, dummy.matrix);
    }
  }
  parent.add(keys);
  add(parent, new THREE.BoxGeometry(w * 0.38, 0.012, kd), mat, -w * 0.02, y, z + d / 2 - d / rows / 2).castShadow = false;
}

/**
 * Baut einen aufgeklappten Laptop mit Tasten, Tastfeld, Scharnier und Bildschirmrand.
 * @param {THREE.Texture} screenMap Bildschirminhalt.
 * @param {THREE.Texture} shadowTex Schattentextur.
 * @param {THREE.Texture} glowTex Textur für den Schein des Bildschirms auf den Tasten.
 * @returns {THREE.Group} Der Laptop; ``userData.plug`` nennt den Punkt, an dem die Leitung ansetzt,
 *     ``userData.label`` den Punkt für die Beschriftung.
 */
function buildLaptop(screenMap, shadowTex, glowTex) {
  const g = new THREE.Group();
  const m = deviceMaterials(screenMap);
  add(g, slab(1.5, 1.0, 0.05, 0.09), m.alu, 0, 0.03, 0).rotation.x = -Math.PI / 2;
  const well = add(g, new THREE.ShapeGeometry(roundedShape(1.3, 0.5, 0.03)), m.dark, 0, 0.0562, -0.15);   // Mulde unter den Tasten
  well.rotation.x = -Math.PI / 2;
  well.castShadow = false;
  addKeys(g, m.key, 1.26, 0.46, 14, 5, 0.061, -0.15);
  const pad = add(g, new THREE.ShapeGeometry(roundedShape(0.5, 0.3, 0.03)), m.dark, 0, 0.0562, 0.3);
  pad.rotation.x = -Math.PI / 2;
  pad.castShadow = false;
  const hinge = add(g, new THREE.CylinderGeometry(0.026, 0.026, 1.18, 16), m.dark, 0, 0.06, -0.485);
  hinge.rotation.z = Math.PI / 2;
  for (const [x, z] of [[-0.62, -0.4], [0.62, -0.4], [-0.62, 0.4], [0.62, 0.4]]) {       // Gummifüße
    add(g, new THREE.CylinderGeometry(0.03, 0.03, 0.01, 12), m.dark, x, 0.004, z).castShadow = false;
  }
  for (let i = 0; i < 3; i++) add(g, new THREE.BoxGeometry(0.004, 0.014, 0.05 + i * 0.012), m.dark, -0.752, 0.03, -0.25 + i * 0.12).castShadow = false;   // Buchsen links
  const lid = new THREE.Group();          // Drehpunkt an der hinteren Kante
  lid.position.set(0, 0.058, -0.5);
  lid.rotation.x = -14 * DEG;
  add(lid, slab(1.5, 0.98, 0.032, 0.09), m.alu, 0, 0.49, 0);
  add(lid, new THREE.ShapeGeometry(roundedShape(1.46, 0.94, 0.075)), m.glass, 0, 0.49, 0.0168).castShadow = false;   // schwarzer Rand
  add(lid, screenGeometry(1.38, 0.86, 0.03), m.screen, 0, 0.5, 0.0176).castShadow = false;
  add(lid, new THREE.CircleGeometry(0.009, 12), m.dark, 0, 0.948, 0.0178).castShadow = false;     // Kamera
  add(lid, screenGeometry(1.38, 0.86, 0.03), m.sheen, 0, 0.5, 0.0184).castShadow = false;         // Glas
  g.add(lid);
  // Lautsprecherschlitze links und rechts der Tasten, Betriebsleuchte an der Vorderkante
  for (const x of [-0.69, 0.69]) {
    const grille = add(g, new THREE.ShapeGeometry(roundedShape(0.035, 0.44, 0.012)), m.dark, x, 0.0563, -0.15);
    grille.rotation.x = -Math.PI / 2;
    grille.castShadow = false;
  }
  add(g, new THREE.BoxGeometry(0.05, 0.006, 0.004), new THREE.MeshBasicMaterial({ color: ACCENT }), 0, 0.03, 0.502).castShadow = false;
  // Schein des Bildschirms auf den Tasten
  const glow = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 0.9), new THREE.MeshBasicMaterial({
    map: glowTex, color: ACCENT, transparent: true, opacity: 0.2, depthWrite: false, blending: THREE.NormalBlending,
  }));
  glow.rotation.x = -Math.PI / 2;
  glow.position.set(0, 0.072, -0.2);
  g.add(glow);
  addContactShadow(g, shadowTex, 2.3, 1.9);
  addScreenSpill(g, glowTex, 2.6, 1.7, 0.75, 0.1);
  g.userData.plug = new THREE.Vector3(-0.76, 0.03, -0.36);
  g.userData.label = new THREE.Vector3(0, 1.22, -0.6);
  return g;
}

/**
 * Baut einen Arbeitsplatz: Bildschirm auf Standfuß, davor Tastatur und Maus, daneben ein kleiner Rechner.
 * @param {THREE.Texture} screenMap Bildschirminhalt.
 * @param {THREE.Texture} shadowTex Schattentextur.
 * @param {THREE.Texture} glowTex Textur für den Schein des Bildschirms am Boden.
 * @returns {THREE.Group} Der Arbeitsplatz; ``userData.plug`` nennt den Ansatzpunkt der Leitung,
 *     ``userData.label`` den Punkt für die Beschriftung.
 */
function buildWorkstation(screenMap, shadowTex, glowTex) {
  const g = new THREE.Group();
  const m = deviceMaterials(screenMap);
  add(g, slab(2.0, 1.16, 0.05, 0.05), m.alu, 0, 1.04, 0);
  add(g, new THREE.ShapeGeometry(roundedShape(1.96, 1.12, 0.04)), m.glass, 0, 1.04, 0.0262).castShadow = false;
  add(g, screenGeometry(1.9, 1.06, 0.02), m.screen, 0, 1.04, 0.027).castShadow = false;
  add(g, screenGeometry(1.9, 1.06, 0.02), m.sheen, 0, 1.04, 0.0278).castShadow = false;           // Glas
  add(g, new THREE.BoxGeometry(0.03, 0.005, 0.004), new THREE.MeshBasicMaterial({ color: ACCENT }), 0.9, 0.475, 0.027).castShadow = false;   // Betriebsleuchte
  const neck = add(g, new THREE.BoxGeometry(0.17, 0.66, 0.035), m.alu, 0, 0.36, -0.07);
  neck.rotation.x = 7 * DEG;
  add(g, new THREE.CylinderGeometry(0.035, 0.035, 0.05, 16), m.dark, 0, 0.72, -0.045).rotation.x = Math.PI / 2;   // Gelenk
  add(g, slab(0.7, 0.46, 0.022, 0.07), m.alu, 0, 0.014, -0.03).rotation.x = -Math.PI / 2;
  // Schreibunterlage, darauf Tastatur und Maus
  const mat = add(g, new THREE.ShapeGeometry(roundedShape(1.7, 0.56, 0.05)), m.dark, 0.12, 0.004, 0.72);
  mat.rotation.x = -Math.PI / 2;
  mat.castShadow = false;
  const board = new THREE.Group();
  board.position.set(-0.08, 0, 0.72);
  add(board, slab(0.96, 0.34, 0.03, 0.04), m.alu, 0, 0.018, 0).rotation.x = -Math.PI / 2;
  addKeys(board, m.key, 0.9, 0.28, 15, 5, 0.039, 0);
  g.add(board);
  const mouse = add(g, new THREE.SphereGeometry(0.09, 20, 12), m.alu, 0.62, 0.012, 0.74);
  mouse.scale.set(0.72, 0.3, 1.15);
  // kleiner Rechner
  const mini = new THREE.Group();
  mini.position.set(0.72, 0, 0.02);
  add(mini, slab(0.46, 0.46, 0.11, 0.07), m.alu, 0, 0.058, 0).rotation.x = -Math.PI / 2;
  add(mini, new THREE.BoxGeometry(0.012, 0.012, 0.004), new THREE.MeshBasicMaterial({ color: ACCENT }), -0.17, 0.05, 0.232).castShadow = false;
  g.add(mini);
  // Leitung vom Bildschirm hinunter zum kleinen Rechner
  const lead = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.1, 0.62, -0.06), new THREE.Vector3(0.22, 0.2, -0.16), new THREE.Vector3(0.5, 0.03, -0.2), new THREE.Vector3(0.7, 0.05, -0.2),
  ]);
  add(g, new THREE.TubeGeometry(lead, 24, 0.009, 5), m.dark);
  addContactShadow(g, shadowTex, 2.7, 2.6);
  addScreenSpill(g, glowTex, 3.0, 1.9, 1.0, 0.1);
  g.userData.plug = new THREE.Vector3(0.72, 0.05, -0.24);
  g.userData.label = new THREE.Vector3(0, 1.84, 0);
  return g;
}

/**
 * Baut ein Telefon oder ein Tablet: eine nach hinten geneigte Platte in einem flachen Sockel.
 * @param {number} w Breite des Geräts.
 * @param {number} h Höhe des Geräts.
 * @param {number} lean Neigung nach hinten in Grad.
 * @param {THREE.Texture} screenMap Bildschirminhalt.
 * @param {THREE.Texture} shadowTex Schattentextur.
 * @param {THREE.Texture} glowTex Textur für den Schein des Bildschirms am Boden.
 * @returns {THREE.Group} Das Gerät; ``userData.plug`` nennt den Ansatzpunkt der Leitung,
 *     ``userData.label`` den Punkt für die Beschriftung.
 */
function buildHandheld(w, h, lean, screenMap, shadowTex, glowTex) {
  const g = new THREE.Group();
  const m = deviceMaterials(screenMap);
  m.alu.color.setHex(0x3d3d3d);
  m.alu.roughness = 0.42;
  const r = Math.min(w, h) * 0.13;
  const tilt = new THREE.Group();
  tilt.rotation.x = -lean * DEG;
  add(tilt, slab(w, h, 0.036, r), m.alu, 0, h / 2 + 0.02, 0);
  add(tilt, new THREE.ShapeGeometry(roundedShape(w * 0.975, h * 0.985, r * 0.92)), m.glass, 0, h / 2 + 0.02, 0.0188).castShadow = false;
  add(tilt, screenGeometry(w * 0.93, h * 0.955, r * 0.72), m.screen, 0, h / 2 + 0.02, 0.0196).castShadow = false;
  add(tilt, new THREE.BoxGeometry(0.012, h * 0.11, 0.008), m.dark, w / 2 + 0.002, h * 0.72, 0).castShadow = false;   // Seitentaste
  add(tilt, screenGeometry(w * 0.93, h * 0.955, r * 0.72), m.sheen, 0, h / 2 + 0.02, 0.0204).castShadow = false;   // Glas
  g.add(tilt);
  // Beim Tablet liegt ein Stift daneben; beim Telefon leuchtet der Sockel als Ladering.
  if (w > 0.6) {
    const pen = add(g, new THREE.CylinderGeometry(0.011, 0.011, 0.62, 10), m.alu, w / 2 + 0.16, 0.012, 0.16);
    pen.rotation.set(Math.PI / 2, 0, 0.12);
    add(g, new THREE.ConeGeometry(0.011, 0.04, 10), m.dark, w / 2 + 0.123, 0.012, -0.176).rotation.set(-Math.PI / 2, 0, 0.12);
  } else {
    const ring = add(g, new THREE.TorusGeometry(0.13, 0.004, 6, 48), new THREE.MeshBasicMaterial({ color: ACCENT }), 0, 0.037, -0.07);
    ring.rotation.x = Math.PI / 2;
    ring.castShadow = false;
  }
  add(g, slab(w * 0.7, 0.34, 0.034, 0.06), m.dark, 0, 0.018, -0.07).rotation.x = -Math.PI / 2;   // flacher Sockel
  add(g, new THREE.BoxGeometry(w * 0.5, 0.05, 0.03), m.dark, 0, 0.05, -0.115);                    // Rückenstütze
  addContactShadow(g, shadowTex, w * 2.2, h * 1.35);
  addScreenSpill(g, glowTex, w * 2.4, h * 1.5, h * 0.55, 0.09);
  g.userData.plug = new THREE.Vector3(0, 0.03, -0.26);
  g.userData.label = new THREE.Vector3(0, h + 0.3, -h * 0.25);
  return g;
}

/**
 * Werkstoffe des Studios: Silber, Weiss, Grau, Graphit, Schwarz, Glas, Koralle. Jedes Geraet bekommt eigene
 * Exemplare, damit es unabhaengig ein- und ausgeblendet werden kann.
 */
function studio() {
  return {
    silver: new THREE.MeshPhysicalMaterial({ color: 0xc7c4cd, metalness: 0.9, roughness: 0.3, clearcoat: 0.2, clearcoatRoughness: 0.3 }),   // Aluminium
    white: new THREE.MeshPhysicalMaterial({ color: 0xbfbcc6, roughness: 0.48, clearcoat: 0.35, clearcoatRoughness: 0.25, sheen: 0.15, sheenColor: 0xffffff }),   // satinierter Kunststoff
    pale: new THREE.MeshPhysicalMaterial({ color: 0xc9c8ce, roughness: 0.8, sheen: 0.5, sheenColor: 0xffffff }),   // Polster
    grey: new THREE.MeshStandardMaterial({ color: 0x5c5e63, metalness: 0.3, roughness: 0.5 }),
    graphite: new THREE.MeshStandardMaterial({ color: 0x46444b, metalness: 0.35, roughness: 0.4 }),
    black: new THREE.MeshStandardMaterial({ color: 0x151517, metalness: 0.3, roughness: 0.38 }),
    gloss: new THREE.MeshPhysicalMaterial({ color: 0x0c0c0d, roughness: 0.1, clearcoat: 1, clearcoatRoughness: 0.06 }),
    coral: new THREE.MeshBasicMaterial({ color: ACCENT }),
  };
}

/** Bildflaeche mit einem Bild aus tex/ (deckend); ohne Bild eine dunkle Flaeche. */
function picture(tex, w, h, dark = 0x111113) {
  const mat = new THREE.MeshBasicMaterial({ map: tex || null, color: tex ? 0xffffff : dark });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
  return m;
}

/** Spiegelnde Glasschicht ueber einem Bildschirm (nur Spiegelungen, additiv ueber dem dunklen Bild). */
function glassSheen(w, h) {
  return new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({
    color: 0x000000, metalness: 1, roughness: 0.08, envMapIntensity: 1.2,
    transparent: true, opacity: 0.22, depthWrite: false, blending: THREE.AdditiveBlending,
  }));
}

/** Rohr zwischen zwei Punkten. */
function rod(parent, a, b, r, mat, seg = 12) {
  const m = add(parent, new THREE.CylinderGeometry(r, r, a.distanceTo(b), seg), mat, (a.x + b.x) / 2, (a.y + b.y) / 2, (a.z + b.z) / 2);
  m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), b.clone().sub(a).normalize());
  return m;
}

/**
 * Kinokamera auf Stativ wie im Bild: silbernes Gehaeuse mit Kaefig und Tragegriff, schwarzes Objektiv mit
 * Ringen, Kompendium in Dunkelgrau mit Klappen, Schaerfezieher mit grossem Rad, silbernes Stativ mit Kopf,
 * Schwenkarm und Doppelrohr-Beinen.
 */
function buildCamera(shadowTex) {
  const root = new THREE.Group();
  const SC = 2.7;
  const g = new THREE.Group();
  g.scale.setScalar(SC);
  root.add(g);
  const m = studio();
  const turn = (mesh) => { mesh.rotation.x = Math.PI / 2; return mesh; };
  const H = 1.42;
  const cam = new THREE.Group();
  cam.position.set(0, H, -0.04);
  add(cam, slab(0.3, 0.3, 0.5, 0.04), m.silver, 0, 0, -0.06);                               // Gehaeuse
  add(cam, slab(0.22, 0.2, 0.12, 0.02), m.graphite, 0, -0.01, -0.37);                      // Akku
  for (const x of [-0.162, 0.162]) add(cam, new THREE.BoxGeometry(0.014, 0.25, 0.4), m.silver, x, 0, -0.06);   // Seitenplatten
  add(cam, new THREE.BoxGeometry(0.32, 0.022, 0.44), m.silver, 0, 0.162, -0.06);            // Kaefig oben
  turn(add(cam, new THREE.CylinderGeometry(0.024, 0.024, 0.4, 16), m.silver, 0, 0.29, -0.03));   // Tragegriff
  for (const z of [0.13, -0.19]) add(cam, new THREE.BoxGeometry(0.04, 0.12, 0.04), m.silver, 0, 0.22, z);
  turn(add(cam, new THREE.CylinderGeometry(0.1, 0.1, 0.05, 40), m.silver, 0, 0, 0.215));   // Bajonett
  turn(add(cam, new THREE.CylinderGeometry(0.1, 0.094, 0.42, 40), m.black, 0, 0, 0.45));   // Objektiv
  for (const z of [0.33, 0.44, 0.56]) turn(add(cam, new THREE.CylinderGeometry(0.108, 0.108, 0.035, 40), m.graphite, 0, 0, z));
  turn(add(cam, new THREE.CylinderGeometry(0.12, 0.11, 0.05, 40), m.black, 0, 0, 0.665));
  add(cam, new THREE.CircleGeometry(0.095, 40), m.gloss, 0, 0, 0.692).castShadow = false;
  const mb = new THREE.Group();                                                               // Kompendium
  mb.position.set(0, 0, 0.82);
  for (const y of [0.15, -0.15]) add(mb, new THREE.BoxGeometry(0.4, 0.024, 0.2), m.graphite, 0, y, 0);
  for (const x of [-0.19, 0.19]) add(mb, new THREE.BoxGeometry(0.024, 0.32, 0.2), m.graphite, x, 0, 0);
  add(mb, new THREE.BoxGeometry(0.46, 0.008, 0.24), m.graphite, 0, 0.2, 0.13).rotation.x = -0.45;   // Klappe oben
  add(mb, new THREE.BoxGeometry(0.008, 0.36, 0.2), m.graphite, 0.25, 0, 0.12).rotation.y = 0.5;     // Klappe seitlich
  cam.add(mb);
  for (const x of [-0.06, 0.06]) turn(add(cam, new THREE.CylinderGeometry(0.012, 0.012, 0.9, 10), m.silver, x, -0.2, 0.3));
  const ff = add(cam, new THREE.CylinderGeometry(0.075, 0.075, 0.04, 32), m.graphite, -0.17, -0.13, 0.42);   // Schaerferad
  ff.rotation.z = Math.PI / 2;
  add(cam, new THREE.CylinderGeometry(0.035, 0.035, 0.05, 20), m.silver, -0.2, -0.13, 0.42).rotation.z = Math.PI / 2;
  add(cam, new THREE.BoxGeometry(0.03, 0.016, 0.01), m.coral, 0.09, 0.1, 0.196).castShadow = false;     // Tally
  g.add(cam);
  add(g, new THREE.BoxGeometry(0.22, 0.04, 0.3), m.graphite, 0, H - 0.175, -0.04);                     // Platte
  add(g, new THREE.CylinderGeometry(0.11, 0.13, 0.14, 28), m.silver, 0, H - 0.26, -0.04);              // Videokopf
  rod(g, new THREE.Vector3(-0.05, H - 0.27, -0.1), new THREE.Vector3(-0.32, H - 0.42, -0.62), 0.016, m.silver);   // Schwenkarm
  const top = new THREE.Vector3(0, H - 0.34, -0.04);
  add(g, new THREE.CylinderGeometry(0.1, 0.08, 0.08, 24), m.silver, top.x, top.y, top.z);
  rod(g, top, new THREE.Vector3(0, 0.55, -0.04), 0.022, m.silver);
  const spider = new THREE.Vector3(0, 0.22, -0.04);
  [0.55, 2.65, 4.75].forEach((a) => {
    const foot = new THREE.Vector3(Math.sin(a) * 0.66, 0.02, -0.04 + Math.cos(a) * 0.66);
    const side = new THREE.Vector3(Math.cos(a), 0, -Math.sin(a)).multiplyScalar(0.024);
    rod(g, top.clone().add(side), foot.clone().add(side), 0.014, m.silver);
    rod(g, top.clone().sub(side), foot.clone().sub(side), 0.014, m.silver);
    rod(g, top.clone().lerp(foot, 0.42), top.clone().lerp(foot, 0.49), 0.04, m.silver);
    rod(g, top.clone().lerp(foot, 0.03), top.clone().lerp(foot, 0.1), 0.042, m.silver);
    add(g, new THREE.CylinderGeometry(0.035, 0.04, 0.05, 16), m.silver, foot.x, 0.025, foot.z);
    rod(g, spider, top.clone().lerp(foot, 0.8), 0.009, m.silver);
  });
  const drop = new THREE.CatmullRomCurve3([                                                   // Kabel vom Gehaeuse zum Boden
    new THREE.Vector3(0.1, H - 0.08, -0.33), new THREE.Vector3(0.2, H - 0.3, -0.38), new THREE.Vector3(0.18, 0.4, -0.22),
    new THREE.Vector3(0.12, 0.05, -0.08), new THREE.Vector3(0.08, 0.02, 0.0),
  ]);
  add(g, new THREE.TubeGeometry(drop, 40, 0.011, 6), m.white);
  addContactShadow(g, shadowTex, 1.8, 1.8);
  root.userData.plug = new THREE.Vector3(0.08 * SC, 0.05, 0);
  root.userData.label = new THREE.Vector3(0, (H + 0.5) * SC, 0);
  return root;
}

/** Studio-Bildschirm auf silbernem Fuss, Schnitt-Timeline aus dem Standbild auf der schwarzen Glasfront. */
function buildDisplay(tex, shadowTex) {
  const g = new THREE.Group();
  const m = studio();
  const W = 4.6, H = 2.59, Y = 2.75, T = 0.09;
  add(g, slab(W + 0.1, H + 0.1, T, 0.09), m.silver, 0, Y, 0);
  const front = add(g, picture(tex, W, H), null, 0, Y, T / 2 + 0.004);
  front.castShadow = false;
  add(g, glassSheen(W, H), null, 0, Y, T / 2 + 0.006).castShadow = false;
  const arm = add(g, slab(0.95, 2.2, 0.07, 0.04), m.silver, 0, 1.1, -0.45);                // Standfuss-Arm
  arm.rotation.x = 0.33;
  add(g, slab(1.35, 1.3, 0.06, 0.14), m.silver, 0, 0.03, -0.38).rotation.x = -Math.PI / 2;  // Fussplatte
  addContactShadow(g, shadowTex, 3.0, 2.2);
  g.userData.plug = new THREE.Vector3(0.75, 0.05, -0.35);
  g.userData.label = new THREE.Vector3(0, Y + H / 2 + 0.3, 0);
  return g;
}

/** Render-Rechner: silberweisser Kasten mit runden Ecken, vorn Buchsen und Kartenschlitz. */
function buildRenderBox(shadowTex) {
  const g = new THREE.Group();
  const m = studio();
  const body = new THREE.MeshPhysicalMaterial({ color: 0xbfbec6, metalness: 0.9, roughness: 0.3, clearcoat: 0.15 });   // gestrahltes Aluminium
  const W = 2.5, D = 2.5, H = 1.15, R = 0.36;
  add(g, slab(W, D, H, R), body, 0, H / 2 + 0.04, 0).rotation.x = -Math.PI / 2;
  add(g, new THREE.CylinderGeometry(W * 0.36, W * 0.36, 0.045, 64), m.pale, 0, 0.022, 0).castShadow = false;
  const F = D / 2 + 0.003;
  for (const x of [-0.72, -0.56]) add(g, slab(0.1, 0.045, 0.012, 0.02), m.black, x, 0.26, F).castShadow = false;
  add(g, slab(0.32, 0.03, 0.012, 0.012), m.black, -0.22, 0.26, F).castShadow = false;
  add(g, new THREE.CircleGeometry(0.018, 16), m.coral, 0.85, 0.26, F).castShadow = false;
  addContactShadow(g, shadowTex, 3.2, 3.2);
  // Anschluesse vorn rechts, dort gehen die Kabel ab (im Bild vier Stecker in Koralle)
  g.userData.plugs = [0.2, 0.44, 0.68, 0.92].map((x) => new THREE.Vector3(x, 0.12, D / 2 + 0.02));
  g.userData.label = new THREE.Vector3(0, H + 0.5, 0);
  return g;
}

/** Tablet flach auf dem Tisch, leicht angestellt, Storyboard aus dem Standbild; daneben der Stift. */
function buildTablet(tex, shadowTex) {
  const g = new THREE.Group();
  const m = studio();
  const W = 3.4, D = 2.5, T = 0.07;
  const tilt = new THREE.Group();
  tilt.position.set(0, 0.06, 0);
  tilt.rotation.x = -Math.PI / 2 + 0.07;
  add(tilt, slab(W, D, T, 0.17), m.silver, 0, 0, 0);
  add(tilt, new THREE.ShapeGeometry(roundedShape(W - 0.05, D - 0.05, 0.15)), m.black, 0, 0, T / 2 + 0.002).castShadow = false;
  const scr = add(tilt, picture(tex, W - 0.26, D - 0.26, 0xf4f4f2), null, 0, 0, T / 2 + 0.004);
  scr.castShadow = false;
  g.add(tilt);
  const pen = new THREE.Group();                                                              // Stift
  pen.position.set(W / 2 - 0.1, 0.05, D / 2 + 0.4);
  pen.rotation.y = 0.12;
  add(pen, new THREE.CylinderGeometry(0.045, 0.045, 1.6, 20), m.white, 0, 0, 0).rotation.z = Math.PI / 2;
  add(pen, new THREE.ConeGeometry(0.045, 0.14, 20), m.white, -0.87, 0, 0).rotation.z = Math.PI / 2;
  g.add(pen);
  addContactShadow(g, shadowTex, 3.6, 2.8);
  g.userData.plug = new THREE.Vector3(-W / 2 - 0.06, 0.06, 0.35);
  g.userData.label = new THREE.Vector3(0, 0.6, 0);
  return g;
}

/** Grading-Pult: graphitgrauer Keil mit silbernen Seiten, drei Rollkugeln, Reglern und der Glasleiste aus dem Bild. */
function buildGradePanel(tex, shadowTex) {
  const g = new THREE.Group();
  const m = studio();
  const W = 3.6, D = 2.3;
  // Seitenprofil (x = -z der Welt, y = Hoehe), entlang der Breite ausgezogen
  const prof = new THREE.Shape();
  const P = [[-D / 2, 0], [-D / 2, 0.2], [-D / 2 + 0.08, 0.27], [0.1, 0.29], [D / 2 - 0.12, 0.66], [D / 2, 0.64], [D / 2, 0]];
  prof.moveTo(P[0][0], P[0][1]);
  P.slice(1).forEach(([x, y]) => prof.lineTo(x, y));
  const body = new THREE.ExtrudeGeometry(prof, { depth: W - 0.12, bevelEnabled: true, bevelThickness: 0.02, bevelSize: 0.02, bevelSegments: 2 });
  body.translate(0, 0, -(W - 0.12) / 2);
  add(g, body, m.graphite, 0, 0, 0).rotation.y = Math.PI / 2;
  for (const x of [-W / 2 + 0.03, W / 2 - 0.03]) {                                             // silberne Seiten
    const side = new THREE.ExtrudeGeometry(prof, { depth: 0.06, bevelEnabled: false });
    side.translate(0, 0, -0.03);
    const s_ = add(g, side, m.silver, x, 0, 0);
    s_.rotation.y = Math.PI / 2;
    s_.scale.set(1.01, 1.02, 1);
  }
  // Glasleiste auf der Schraege
  const len = Math.hypot(D / 2 - 0.12 - 0.1, 0.66 - 0.29), ang = Math.atan2(0.66 - 0.29, D / 2 - 0.12 - 0.1);
  const strip = add(g, picture(tex, W - 0.3, len - 0.08), null, 0, (0.29 + 0.66) / 2 + 0.035, -((0.1 + D / 2 - 0.12) / 2) + 0.012);
  strip.rotation.x = -(Math.PI / 2 - ang);
  strip.castShadow = false;
  // drei Rollkugeln vorn
  for (const x of [-1.1, 0, 1.1]) {
    const ring = add(g, new THREE.TorusGeometry(0.36, 0.06, 16, 48), m.black, x, 0.3, 0.6);
    ring.rotation.x = Math.PI / 2;
    add(g, new THREE.CylinderGeometry(0.33, 0.33, 0.03, 40), m.black, x, 0.29, 0.6).castShadow = false;
    add(g, new THREE.SphereGeometry(0.25, 32, 20), m.gloss, x, 0.34, 0.6);
  }
  // Regler zwischen Kugeln und Schraege, Tasten rechts
  const dummy = new THREE.Object3D();
  const knobs = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.06, 0.068, 0.12, 20), m.black, 9);
  for (let i = 0; i < 9; i++) { dummy.position.set(-1.45 + i * 0.36, 0.34, 0.02); dummy.updateMatrix(); knobs.setMatrixAt(i, dummy.matrix); }
  knobs.castShadow = true;
  g.add(knobs);
  const keys = new THREE.InstancedMesh(new THREE.BoxGeometry(0.13, 0.03, 0.09), m.grey, 8);
  for (let i = 0; i < 8; i++) { dummy.position.set(-1.5 + i * 0.42, 0.3, 1.0); dummy.updateMatrix(); keys.setMatrixAt(i, dummy.matrix); }
  g.add(keys);
  addContactShadow(g, shadowTex, 4.4, 3.0);
  g.userData.plug = new THREE.Vector3(-W / 2 - 0.06, 0.08, -0.35);
  g.userData.label = new THREE.Vector3(0, 1.0, -0.4);
  return g;
}

/** Filmklappe flach auf dem Tisch: weisse Tafel mit Feldern, schwarz-weisse Klappe, leicht geoeffnet. */
function buildClapper(shadowTex) {
  const g = new THREE.Group();
  const m = studio();
  const W = 1.75, D = 1.25;
  const { c, g: cg } = canvas(512, 360);                    // Tafel: deckend weiss mit grauen Feldlinien
  cg.fillStyle = '#fbfbfb'; cg.fillRect(0, 0, 512, 360);
  cg.strokeStyle = '#4a4b4f'; cg.lineWidth = 3;
  [[0, 120, 512, 120], [0, 240, 512, 240], [170, 0, 170, 120], [340, 0, 340, 120], [256, 120, 256, 240], [256, 240, 256, 360], [0, 300, 512, 300]]
    .forEach(([a, b, x, y]) => { cg.beginPath(); cg.moveTo(a, b); cg.lineTo(x, y); cg.stroke(); });
  cg.fillStyle = '#8e9095';
  [[20, 20], [190, 20], [360, 20], [20, 140], [276, 140], [20, 255], [276, 255]].forEach(([x, y]) => cg.fillRect(x, y, 70, 12));
  const board = toTexture(c);
  add(g, slab(W, D, 0.05, 0.04), m.white, 0, 0.025, 0).rotation.x = -Math.PI / 2;
  const face = add(g, new THREE.PlaneGeometry(W - 0.08, D - 0.08), new THREE.MeshStandardMaterial({ map: board, roughness: 0.6 }), 0, 0.052, 0);
  face.rotation.x = -Math.PI / 2;
  face.castShadow = false;
  const { c: sc, g: sg } = canvas(512, 64);                  // Streifen der Klappe
  sg.fillStyle = '#f4f4f4'; sg.fillRect(0, 0, 512, 64);
  sg.fillStyle = '#4a4b4f';
  for (let x = -64; x < 512; x += 96) { sg.beginPath(); sg.moveTo(x, 64); sg.lineTo(x + 48, 0); sg.lineTo(x + 96, 0); sg.lineTo(x + 48, 64); sg.fill(); }
  const stripe = new THREE.MeshStandardMaterial({ map: toTexture(sc), roughness: 0.5 });
  add(g, new THREE.BoxGeometry(W, 0.07, 0.22), stripe, 0, 0.04, -D / 2 - 0.11);
  const hinge = new THREE.Group();
  hinge.position.set(-W / 2, 0.11, -D / 2 - 0.11);
  hinge.rotation.y = 0.2;
  add(hinge, new THREE.BoxGeometry(W, 0.07, 0.22), stripe, W / 2, 0, -0.03);
  g.add(hinge);
  addContactShadow(g, shadowTex, 2.6, 2.2);
  g.userData.plug = new THREE.Vector3(-W / 2 + 0.25, 0.05, -D / 2 - 0.3);
  g.userData.label = new THREE.Vector3(0, 0.5, 0);
  return g;
}

/** Weisse Over-Ear-Kopfhoerer, auf den Muscheln stehend, der Buegel nach oben. */
function buildHeadphones(shadowTex) {
  const g = new THREE.Group();
  const m = studio();
  const R = 0.62;
  const band = add(g, new THREE.TorusGeometry(R, 0.07, 16, 48, Math.PI), m.white, 0, 0.44, 0);
  band.scale.set(1, 1.06, 1.9);
  for (const s_ of [-1, 1]) {
    add(g, new THREE.CylinderGeometry(0.03, 0.03, 0.18, 12), m.silver, s_ * R, 0.5, 0);
    const cup = add(g, new THREE.CylinderGeometry(0.36, 0.36, 0.26, 40), m.white, s_ * (R + 0.03), 0.36, 0);
    cup.rotation.z = Math.PI / 2;
    const pad = add(g, new THREE.TorusGeometry(0.25, 0.1, 14, 40), m.pale, s_ * (R - 0.14), 0.36, 0);
    pad.rotation.y = Math.PI / 2;
  }
  addContactShadow(g, shadowTex, 2.0, 1.3);
  g.userData.plug = new THREE.Vector3(R + 0.32, 0.1, -0.12);   // neben der rechten Muschel
  g.userData.label = new THREE.Vector3(0, 1.3, 0);
  return g;
}

/** Acrylstaender in drei Stufen mit Fotoabzuegen (Bilder aus dem Standbild). */
function buildPrintStand(texWide, texTall, shadowTex) {
  const g = new THREE.Group();
  const m = studio();
  const acryl = new THREE.MeshPhysicalMaterial({
    color: 0xffffff, roughness: 0.05, metalness: 0, transparent: true, opacity: 0.08, depthWrite: false, side: THREE.DoubleSide,
  });
  const W = 3.1;
  const edgeMat = new THREE.LineBasicMaterial({ color: 0xbfc0c4, transparent: true, opacity: 0.8 });
  const plate = (w, h, x, y, z, rx) => {
    const p = add(g, new THREE.BoxGeometry(w, h, 0.035), acryl, x, y, z);
    p.rotation.x = rx;
    p.castShadow = false;
    const e = new THREE.LineSegments(new THREE.EdgesGeometry(p.geometry), edgeMat);   // Kanten des Acryls, wie im Bild
    e.position.copy(p.position);
    e.rotation.copy(p.rotation);
    g.add(e);
    return p;
  };
  add(g, new THREE.BoxGeometry(W, 0.035, 1.9), acryl, 0, 0.018, -0.05).castShadow = false;       // Boden
  plate(W, 2.1, 0, 1.02, -0.9, -0.2);                                                         // Rueckwand
  plate(W, 0.55, 0, 0.3, -0.2, -0.08);                                                        // mittlere Lippe
  plate(W, 0.45, 0, 0.24, 0.62, -0.05);                                                       // vordere Lippe
  for (const x of [-W / 2, W / 2]) {                                                          // Seitenkanten
    const sh = new THREE.Shape();
    sh.moveTo(-0.95, 0); sh.lineTo(0.85, 0); sh.lineTo(0.85, 0.45); sh.lineTo(-0.05, 0.55); sh.lineTo(-0.7, 2.0); sh.lineTo(-1.0, 2.0); sh.lineTo(-0.95, 0);
    const side = add(g, new THREE.ShapeGeometry(sh), acryl, x, 0, 0);
    side.rotation.y = -Math.PI / 2;
    side.castShadow = false;
  }
  const print = (tex, w, h, x, y, z, rx, flip) => {                                           // Abzug: weisser Karton + Bild
    const p = new THREE.Group();
    p.position.set(x, y, z);
    p.rotation.x = rx;
    add(p, new THREE.BoxGeometry(w, h, 0.03), m.white, 0, 0, 0);
    const img = add(p, picture(tex, w - 0.1, h - 0.1, 0x4a4b50), null, 0, 0, 0.017);
    img.castShadow = false;
    if (flip) img.scale.x = -1;
    g.add(p);
  };
  print(texWide, 2.15, 1.35, -0.35, 1.05, -0.78, -0.2, false);
  print(texTall, 0.95, 1.2, 1.05, 0.98, -0.62, -0.2, false);
  print(texTall, 1.0, 1.3, 1.1, 0.72, -0.05, -0.14, true);
  print(texTall, 1.0, 1.25, 0.05, 0.68, 0.5, -0.1, false);
  print(texTall, 0.85, 1.05, -0.95, 0.58, 0.55, -0.1, true);
  addContactShadow(g, shadowTex, 3.8, 2.6);
  g.userData.plug = new THREE.Vector3(W / 2 + 0.06, 0.05, 0.3);
  g.userData.label = new THREE.Vector3(0, 2.3, 0);
  return g;
}

/**
 * Stecker wie im Bild: rechteckige Tuelle mit runden Kanten (vorn, +z), dahinter ein kurzer Knickschutz.
 * @param {THREE.Material} mat Glaenzender Kunststoff in Koralle.
 * @returns {THREE.Group} Der Stecker; +z zeigt in die Buchse.
 */
function makePlug(mat) {
  const g = new THREE.Group();
  add(g, slab(PLUG_W, PLUG_H, PLUG_LEN, 0.05), mat, 0, 0, 0);
  const neck = add(g, new THREE.CylinderGeometry(0.06, 0.08, 0.16, 20), mat, 0, 0, -(PLUG_LEN / 2 + 0.06));
  neck.rotation.x = Math.PI / 2;
  return g;
}

/**
 * Baut den Server-Schrank mit elf Höheneinheiten: Stromversorgung, Speicher mit Laufwerken, zwei
 * Rechner, Patchfeld, Switch, Bürstenleiste und ein großer Rechner mit Lichtleiste. Zwischen
 * Patchfeld und Switch hängen kurze Patchkabel — dieselbe Welt wie das Bild im Hero.
 * @param {THREE.Texture} shadowTex Schattentextur.
 * @param {THREE.Texture} ventTex Lochblech-Textur.
 * @returns {THREE.Group} Der Schrank; ``userData.plugs`` nennt drei Ansatzpunkte für Leitungen,
 *     ``userData.leds`` die Leuchten als ``THREE.InstancedMesh``, ``userData.blink`` die Nummern
 *     derer, die flackern, ``userData.label`` den Punkt für die Beschriftung.
 */
function buildRack(shadowTex, ventTex) {
  const g = new THREE.Group();
  const W = 1.34, H = 3.2, D = 1.15, U = 0.262, Y0 = 0.17, FW = W - 0.2, FZ = D / 2 - 0.02;
  const body = new THREE.MeshStandardMaterial({ color: 0x191919, metalness: 0.75, roughness: 0.4 });
  const post = new THREE.MeshStandardMaterial({ color: 0x4f4f4f, metalness: 0.95, roughness: 0.32 });
  const plate = new THREE.MeshStandardMaterial({ color: 0x373737, metalness: 0.9, roughness: 0.36 });
  const bay = new THREE.MeshStandardMaterial({ color: 0x4c4c4c, metalness: 0.9, roughness: 0.3 });
  const black = new THREE.MeshStandardMaterial({ color: 0x090909, metalness: 0.3, roughness: 0.7 });
  const vent = (rx, ry) => {
    const t = ventTex.clone();
    t.needsUpdate = true;
    t.repeat.set(rx, ry);
    return new THREE.MeshStandardMaterial({ map: t, metalness: 0.8, roughness: 0.45 });
  };
  add(g, new THREE.BoxGeometry(W, H, D - 0.08), body, 0, H / 2, -0.04);
  add(g, new THREE.BoxGeometry(W + 0.03, 0.05, D + 0.01), body, 0, H - 0.025, 0);      // Deckel
  add(g, new THREE.BoxGeometry(W + 0.03, 0.09, D + 0.01), body, 0, 0.045, 0);          // Sockelleiste
  for (const x of [-W / 2 + 0.035, W / 2 - 0.035]) add(g, new THREE.BoxGeometry(0.07, H - 0.14, 0.06), post, x, H / 2, D / 2 - 0.03);   // Holme
  // Lochreihen in den Holmen
  const holes = new THREE.InstancedMesh(new THREE.BoxGeometry(0.022, 0.022, 0.004), black, 66);
  const dummy = new THREE.Object3D();
  for (let i = 0; i < 66; i++) {
    dummy.position.set((i % 2 ? 1 : -1) * (W / 2 - 0.035), Y0 + 0.05 + Math.floor(i / 2) * ((U * 11 - 0.1) / 32), D / 2 + 0.001);
    dummy.updateMatrix();
    holes.setMatrixAt(i, dummy.matrix);
  }
  g.add(holes);
  // Lüftungsfelder an beiden Seitenwänden
  for (const s of [-1, 1]) {
    const side = add(g, new THREE.PlaneGeometry(D - 0.4, H - 0.9), vent(8, 26), s * (W / 2 + 0.002), H / 2, -0.04);
    side.rotation.y = s * Math.PI / 2;
    side.castShadow = false;
  }
  const leds = [], ports = [], blink = [];
  const led = (x, y, color, flicker) => { if (flicker) blink.push(leds.length); leds.push([x, y, color]); };
  const face = (unit, units) => {                       // Frontplatte einer Einheit; liefert ihre Mitte in y
    const y = Y0 + U * (unit + units / 2);
    add(g, new THREE.BoxGeometry(FW, U * units - 0.018, 0.03), plate, 0, y, FZ);
    for (const s of [-1, 1]) add(g, new THREE.CylinderGeometry(0.012, 0.012, 0.008, 8), post, s * (FW / 2 - 0.03), y, FZ + 0.018).rotation.x = Math.PI / 2;   // Schrauben
    return y;
  };
  const panel = (w, h, x, y, mat) => { add(g, new THREE.PlaneGeometry(w, h), mat, x, y, FZ + 0.0162).castShadow = false; };
  const portRow = (y, n, x0, x1) => { for (let i = 0; i < n; i++) ports.push([mix(x0, x1, i / (n - 1)), y]); };

  // 0–1: Stromversorgung mit kleiner Anzeige
  let y = face(0, 2);
  panel(FW * 0.5, U * 1.3, -FW * 0.2, y, vent(9, 5));
  panel(0.24, 0.13, FW * 0.26, y + 0.04, new THREE.MeshBasicMaterial({ color: 0x3b3b3b }));
  panel(0.16, 0.022, FW * 0.26 - 0.03, y + 0.06, new THREE.MeshBasicMaterial({ color: ACCENT }));
  panel(0.1, 0.016, FW * 0.26 - 0.06, y + 0.02, new THREE.MeshBasicMaterial({ color: 0xd96c52 }));
  led(FW * 0.26 - 0.1, y - 0.1, ACCENT, false);
  led(FW * 0.26 - 0.04, y - 0.1, 0x444444, true);
  // 2–3: Speicher, zwei Reihen mit je sechs Laufwerken
  y = face(2, 2);
  for (let r = 0; r < 2; r++) {
    for (let c = 0; c < 6; c++) {
      const bx = -FW / 2 + 0.11 + c * ((FW - 0.22) / 5), by = y + (r ? 0.115 : -0.115);
      add(g, new THREE.BoxGeometry((FW - 0.22) / 5 - 0.022, 0.2, 0.016), bay, bx, by, FZ + 0.022).castShadow = false;
      add(g, new THREE.BoxGeometry((FW - 0.22) / 5 - 0.06, 0.016, 0.01), black, bx, by - 0.07, FZ + 0.034).castShadow = false;   // Griff
      led(bx + 0.05, by + 0.075, (r + c) % 4 === 0 ? 0x444444 : ACCENT, (r * 6 + c) % 3 !== 1);
    }
  }
  // 4 und 5: zwei flache Rechner
  for (const unit of [4, 5]) {
    y = face(unit, 1);
    panel(FW * 0.56, U * 0.56, -FW * 0.16, y, vent(12, 2));
    for (let i = 0; i < 4; i++) add(g, new THREE.BoxGeometry(0.075, U * 0.5, 0.012), bay, FW * 0.2 + i * 0.086, y, FZ + 0.02).castShadow = false;
    led(-FW / 2 + 0.1, y, ACCENT, false);
    led(-FW / 2 + 0.14, y, 0x444444, true);
  }
  // 6: Patchfeld, 7: Switch — dazwischen die Patchkabel
  const yPatch = face(6, 1);
  portRow(yPatch, 16, -FW / 2 + 0.12, FW / 2 - 0.12);
  panel(FW - 0.2, 0.014, 0, yPatch + 0.075, new THREE.MeshBasicMaterial({ color: 0xa2a2a2 }));   // Beschriftungsstreifen
  const ySwitch = face(7, 1);
  portRow(ySwitch + 0.045, 12, -FW / 2 + 0.12, FW / 2 - 0.36);
  portRow(ySwitch - 0.045, 12, -FW / 2 + 0.12, FW / 2 - 0.36);
  for (let i = 0; i < 12; i++) led(mix(-FW / 2 + 0.12, FW / 2 - 0.36, i / 11), ySwitch + 0.098, i % 5 === 3 ? 0x444444 : ACCENT, true);
  panel(0.18, U * 0.5, FW / 2 - 0.16, ySwitch, black);
  // 8: Bürstenleiste
  y = face(8, 1);
  panel(FW - 0.18, U * 0.36, 0, y, black);
  // 9–10: großer Rechner mit Griffen und Lichtleiste
  y = face(9, 2);
  panel(FW - 0.3, U * 1.36, 0, y + 0.02, vent(16, 7));
  for (const s of [-1, 1]) add(g, new THREE.BoxGeometry(0.026, U * 1.3, 0.05), post, s * (FW / 2 - 0.085), y, FZ + 0.04);
  panel(FW - 0.34, 0.016, 0, y - U * 0.82, new THREE.MeshBasicMaterial({ color: new THREE.Color(ACCENT) }));
  led(FW / 2 - 0.2, y + U * 0.78, ACCENT, false);

  // Anschlüsse und Leuchten als je ein Körper
  const portMesh = new THREE.InstancedMesh(new THREE.BoxGeometry(0.05, 0.045, 0.006), black, ports.length);
  ports.forEach(([x, py], i) => { dummy.position.set(x, py, FZ + 0.017); dummy.updateMatrix(); portMesh.setMatrixAt(i, dummy.matrix); });
  g.add(portMesh);
  const ledMesh = new THREE.InstancedMesh(new THREE.BoxGeometry(0.02, 0.02, 0.008), new THREE.MeshBasicMaterial(), leds.length);
  const col = new THREE.Color();
  leds.forEach(([x, ly, color], i) => {
    dummy.position.set(x, ly, FZ + 0.02); dummy.updateMatrix();
    ledMesh.setMatrixAt(i, dummy.matrix);
    ledMesh.setColorAt(i, col.setHex(color).multiplyScalar(color === ACCENT ? 1.6 : 1));
  });
  g.add(ledMesh);
  // Patchkabel: kurze Bögen vom Patchfeld hinauf zum Switch, einer davon blau
  const grey = new THREE.MeshStandardMaterial({ color: 0x949494, roughness: 0.5 });
  const blue = new THREE.MeshBasicMaterial({ color: ACCENT });
  [[1, 0], [3, 2], [4, 5], [7, 4], [9, 8], [11, 7], [13, 10], [15, 11]].forEach(([a, b], i) => {
    const pa = ports[a], pb = ports[16 + b];
    const curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(pa[0], pa[1], FZ + 0.02),
      new THREE.Vector3((pa[0] + pb[0]) / 2, (pa[1] + pb[1]) / 2 - 0.02, FZ + 0.15 + (i % 3) * 0.03),
      new THREE.Vector3(pb[0], pb[1], FZ + 0.02),
    );
    add(g, new THREE.TubeGeometry(curve, 14, 0.011, 5), i === 4 ? blue : grey);
  });
  // V3: Stellfüße, Lüftungsgitter im Dach, Griffleiste und zwei schmale Lichtleisten an den Holmen
  for (const [x, z] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
    add(g, new THREE.CylinderGeometry(0.05, 0.06, 0.03, 16), post, x * (W / 2 - 0.1), 0.004, z * (D / 2 - 0.12)).castShadow = false;
  }
  const roof = add(g, new THREE.PlaneGeometry(W - 0.3, D - 0.36), vent(10, 8), 0, H + 0.001, -0.02);
  roof.rotation.x = -Math.PI / 2;
  roof.castShadow = false;
  add(g, new THREE.BoxGeometry(W - 0.24, 0.016, 0.03), post, 0, H - 0.07, D / 2 + 0.012);
  const strip = new THREE.MeshBasicMaterial({ color: new THREE.Color(ACCENT).multiplyScalar(0.9) });
  for (const x of [-W / 2 + 0.006, W / 2 - 0.006]) add(g, new THREE.BoxGeometry(0.006, H - 0.5, 0.006), strip, x, H / 2, D / 2 + 0.003).castShadow = false;
  addContactShadow(g, shadowTex, 2.7, 2.5);
  g.userData.leds = ledMesh;
  g.userData.blink = blink;
  g.userData.plugs = [new THREE.Vector3(-W / 2 - 0.01, 0.12, 0.3), new THREE.Vector3(-W / 2 - 0.01, 0.12, 0.08), new THREE.Vector3(-W / 2 - 0.01, 0.12, -0.14)];
  g.userData.label = new THREE.Vector3(0, H + 0.34, 0);
  return g;
}

/**
 * Baut den Sockel in der Mitte: ein gedrehter Metallring mit Lichtkranz, an dem die Leitungen
 * enden, und die Lichtsäule, die von dort in den Kern steigt.
 * @param {THREE.Texture} spotTex Textur für den Lichtkegel.
 * @param {THREE.Texture} ventTex Lochblech-Textur für die Sockelmitte.
 * @returns {{group: THREE.Group, glow: THREE.Material[], spine: THREE.Mesh}} Der Sockel, die
 *     Werkstoffe, die mit dem Kern aufleuchten, und die Lichtsäule.
 */
function buildDock(spotTex) {
  const group = new THREE.Group();
  const R = DOCK_R, H = 0.5, E = 0.18;                 // Radius, Hoehe, Rundung der Oberkante
  // Profil der Drehform: Fuss leicht eingezogen, gerade Seite, runde Oberkante, flache Oberseite
  const pts = [new THREE.Vector2(0, 0), new THREE.Vector2(R - 0.1, 0), new THREE.Vector2(R - 0.03, 0.025), new THREE.Vector2(R, 0.08), new THREE.Vector2(R, H - E)];
  for (let i = 1; i <= 10; i++) { const a = (i / 10) * Math.PI / 2; pts.push(new THREE.Vector2(R - E + Math.cos(a) * E, H - E + Math.sin(a) * E)); }
  pts.push(new THREE.Vector2(0, H));
  const shell = new THREE.MeshPhysicalMaterial({ color: HUB_WHITE, roughness: 0.42, clearcoat: 1, clearcoatRoughness: 0.16, sheen: 0.4, sheenColor: 0xffffff });
  add(group, new THREE.LatheGeometry(pts, 128), shell, 0, 0, 0);
  // Weiche Lichtbaender mit Vertex-Alpha: Farbe fest, Deckkraft je Punkt (keine Textur, daher iOS-sicher)
  const band = (geo, alphaAt) => {
    const pos = geo.attributes.position, col = new Float32Array(pos.count * 4), c = new THREE.Color(RING_GLOW);
    for (let i = 0; i < pos.count; i++) col.set([c.r, c.g, c.b, alphaAt(pos.getX(i), pos.getY(i), pos.getZ(i))], i * 4);
    geo.setAttribute('color', new THREE.BufferAttribute(col, 4));
    return geo;
  };
  const glowMat = new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, depthWrite: false, side: THREE.DoubleSide });
  const r0 = R * 0.58, w = R * 0.085;
  const soft = (t) => t * t * (3 - 2 * t);
  const flat = (geo) => { const m = add(group, geo, glowMat, 0, H + 0.003, 0); m.rotation.x = -Math.PI / 2; m.castShadow = false; m.renderOrder = 2; return m; };
  flat(band(new THREE.RingGeometry(r0 + w / 2, R - E * 0.4, 128, 6), (x, y) => 0.5 * (1 - soft(Math.min(1, (Math.hypot(x, y) - r0 - w / 2) / (R * 0.24))))));
  flat(band(new THREE.RingGeometry(r0 - w / 2 - R * 0.2, r0 - w / 2, 128, 6), (x, y) => 0.38 * soft(Math.max(0, 1 - (r0 - w / 2 - Math.hypot(x, y)) / (R * 0.2)))));
  // Ringkern unbeleuchtet, dazu zwei hellere Kanten (Milchglas)
  const core = new THREE.MeshBasicMaterial({ color: RING_CORE });
  const ring = add(group, new THREE.RingGeometry(r0 - w / 2, r0 + w / 2, 128), core, 0, H + 0.004, 0);
  ring.rotation.x = -Math.PI / 2;
  ring.castShadow = false;
  const edge = new THREE.MeshBasicMaterial({ color: RING_GLOW });
  for (const [a, b] of [[r0 - w / 2 - 0.012, r0 - w / 2 + 0.008], [r0 + w / 2 - 0.008, r0 + w / 2 + 0.012]]) {
    const e = add(group, new THREE.RingGeometry(a, b, 128), edge, 0, H + 0.005, 0);
    e.rotation.x = -Math.PI / 2;
    e.castShadow = false;
  }
  // Klarlack-Deckel: glaenzende Spiegelung quer ueber Ring und Oberseite
  const lid = add(group, new THREE.CircleGeometry(R - E * 0.6, 96), new THREE.MeshPhysicalMaterial({
    color: 0xffffff, roughness: 0.12, clearcoat: 1, clearcoatRoughness: 0.05, transparent: true, opacity: 0.18, depthWrite: false,
  }), 0, H + 0.008, 0);
  lid.rotation.x = -Math.PI / 2;
  lid.castShadow = false;
  lid.renderOrder = 3;
  // Licht, das unten seitlich durch den Kunststoff scheint
  const sideGeo = band(new THREE.CylinderGeometry(R + 0.006, R + 0.006, H * 0.62, 128, 6, true), (x, y) => 0.85 * (1 - soft(Math.min(1, (y + H * 0.31) / (H * 0.62)))));
  const side = add(group, sideGeo, glowMat, 0, H * 0.31 + 0.004, 0);
  side.castShadow = false;
  side.renderOrder = 2;
  // Schein auf dem Boden um den Puck (weisse Maske, Farbe ueber das Material)
  const floorMat = new THREE.MeshBasicMaterial({ map: spotTex, color: RING_GLOW, transparent: true, opacity: 0.55, depthWrite: false });
  const floorGlow = add(group, new THREE.PlaneGeometry(R * 3.8, R * 3.8), floorMat, 0, 0.006, 0);
  floorGlow.rotation.x = -Math.PI / 2;
  floorGlow.castShadow = false;
  floorGlow.renderOrder = -1;
  const calm = new THREE.Color(RING_CORE), hot = new THREE.Color(RING_HOT);
  /** Aufbau und Puls: Kommt ein Signal an, leuchtet der Ring kurz heller. */
  function update(reveal, energy) {
    const e = Math.min(1, energy);
    core.color.copy(calm).lerp(hot, e * 0.8);
    glowMat.opacity = reveal * Math.min(1, 0.8 + e * 0.35);
    floorMat.opacity = reveal * (0.7 + e * 0.3);
  }
  return { group, glow: [], spine: null, update };
}

/**
 * Baut das Schloss, das auf der Lichtsäule zwischen Sockel und Kern sitzt (Nicolas, 22.11.2026:
 * „add a little security thing before the sphere on the bottom, like a little lock graphic").
 * Ein Vorhängeschloss aus hellem Metall mit leuchtendem Schlüsselloch, darum ein schmaler Ring:
 * Alles, was in den Kern steigt, kommt hier durch.
 * @returns {{group: THREE.Group, face: THREE.Group, glow: THREE.Material[]}} Die Gruppe, der
 *     Teil, der sich zur Kamera dreht, und die Werkstoffe, die aufleuchten, wenn etwas durchgeht.
 */
function buildLock() {
  const group = new THREE.Group();
  group.position.y = 0.7;
  group.scale.setScalar(1.3);
  const face = new THREE.Group();
  group.add(face);
  const steel = new THREE.MeshStandardMaterial({ color: 0xc9c9c9, metalness: 0.9, roughness: 0.28 });
  const keyMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(ACCENT), transparent: true });
  const ringMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(ACCENT), transparent: true });
  add(face, slab(0.3, 0.23, 0.1, 0.045), steel, 0, -0.035, 0);                       // Körper
  const shackle = add(face, new THREE.TorusGeometry(0.085, 0.024, 10, 28, Math.PI), steel, 0, 0.1, 0);   // Bügel
  shackle.castShadow = true;
  for (const x of [-0.085, 0.085]) add(face, new THREE.CylinderGeometry(0.024, 0.024, 0.05, 10), steel, x, 0.085, 0);
  add(face, new THREE.CircleGeometry(0.034, 20), keyMat, 0, -0.015, 0.0515).castShadow = false;      // Schlüsselloch
  add(face, new THREE.PlaneGeometry(0.026, 0.07), keyMat, 0, -0.062, 0.0515).castShadow = false;
  const ring = add(group, new THREE.TorusGeometry(0.33, 0.007, 6, 96), ringMat, 0, -0.03, 0);
  ring.rotation.x = Math.PI / 2;
  ring.castShadow = false;
  const outer = add(group, new THREE.TorusGeometry(0.4, 0.003, 4, 96), ringMat, 0, -0.03, 0);
  outer.rotation.x = Math.PI / 2;
  outer.castShadow = false;
  return { group, face, glow: [keyMat, ringMat] };
}

/**
 * Baut den Kern: den Schichtstapel. Jede Lage hat eine Glasscheibe, eine leuchtende Kante mit
 * Glasdicke, einen Innenring, Speichen, Knoten auf dem Rand und zwei Datenpakete, die umlaufen.
 * Außen zwei geneigte Bahnen mit je einem Trabanten.
 * @param {THREE.Texture} spotTex Textur für Knoten und Lichthof.
 * @returns {{group: THREE.Group, update: function(number, number, number): void}} Die Gruppe
 *     und eine Funktion ``update(t, reveal, energy)``: Zeit in Sekunden, Aufbaustand 0 bis 1,
 *     Helligkeitszuschlag durch ankommende Lichtpunkte.
 */
function buildCore(spotTex) {
  const group = new THREE.Group();
  group.position.y = CORE_Y;
  const spin = new THREE.Group();       // trägt die Lagen und taumelt als Ganzes
  group.add(spin);
  const bright = new THREE.Color(ACCENT);
  const { c: bandCanvas, g: bg } = canvas(4, 32);       // senkrechter Verlauf für die Glaskante
  const bandGrad = bg.createLinearGradient(0, 0, 0, 32);
  bandGrad.addColorStop(0, 'rgba(255,255,255,0)');
  bandGrad.addColorStop(0.5, 'rgba(255,255,255,0.9)');
  bandGrad.addColorStop(1, 'rgba(255,255,255,0)');
  bg.fillStyle = bandGrad;
  bg.fillRect(0, 0, 4, 32);
  const bandTex = toTexture(bandCanvas);
  const layers = [];
  for (let i = 0; i < LAYERS; i++) {
    const lat = (-68 + (136 / (LAYERS - 1)) * i) * DEG;
    const y = CORE_R * Math.sin(lat), r = CORE_R * Math.cos(lat);
    const layer = new THREE.Group();
    layer.position.y = y;
    const disc = new THREE.Mesh(
      new THREE.CylinderGeometry(r, r, 0.012, 96, 1),
      new THREE.MeshPhysicalMaterial({ color: 0x373737, roughness: 0.1, transparent: true, opacity: 0.12, side: THREE.DoubleSide, depthWrite: false }),
    );
    const rim = new THREE.Mesh(new THREE.TorusGeometry(r, 0.0105, 6, 160), new THREE.MeshBasicMaterial({ color: bright, transparent: true }));
    rim.rotation.x = Math.PI / 2;
    const band = new THREE.Mesh(new THREE.CylinderGeometry(r, r, 0.07, 96, 1, true), new THREE.MeshBasicMaterial({
      map: bandTex, color: ACCENT, transparent: true, opacity: 0.3, depthWrite: false, blending: THREE.NormalBlending, side: THREE.DoubleSide,
    }));
    const inner = new THREE.Mesh(new THREE.TorusGeometry(r * 0.6, 0.004, 4, 96), new THREE.MeshBasicMaterial({ color: ACCENT, transparent: true, opacity: 0.4 }));
    inner.rotation.x = Math.PI / 2;
    // Speichen zwischen Innenring und Rand
    const spokes = Math.round(8 + r * 12), sp = new Float32Array(spokes * 6);
    for (let k = 0; k < spokes; k++) {
      const a = (k / spokes) * Math.PI * 2, r0 = r * (k % 3 === 0 ? 0.6 : 0.82);
      sp.set([r0 * Math.cos(a), 0, r0 * Math.sin(a), r * Math.cos(a), 0, r * Math.sin(a)], k * 6);
    }
    const spGeo = new THREE.BufferGeometry();
    spGeo.setAttribute('position', new THREE.BufferAttribute(sp, 3));
    const spokeLines = new THREE.LineSegments(spGeo, new THREE.LineBasicMaterial({ color: ACCENT, transparent: true, opacity: 0.2 }));
    // Knoten auf dem Rand
    const count = Math.round(6 + r * 12), pos = new Float32Array(count * 3);
    for (let k = 0; k < count; k++) {
      const a = (k / count) * Math.PI * 2;
      pos[k * 3] = r * Math.cos(a);
      pos[k * 3 + 2] = r * Math.sin(a);
    }
    const pg = new THREE.BufferGeometry();
    pg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const nodes = new THREE.Points(pg, new THREE.PointsMaterial({
      map: spotTex, color: 0xf3f3f3, size: 0.17, transparent: true, depthWrite: false, blending: THREE.NormalBlending,
    }));
    // Zwei Datenpakete, die auf dem Rand umlaufen
    const packets = new THREE.Group();
    for (let k = 0; k < 2; k++) {
      const p = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.02, 0.028), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true }));
      const a = k * Math.PI + i;
      p.position.set(r * Math.cos(a), 0, r * Math.sin(a));
      p.rotation.y = -a + Math.PI / 2;
      packets.add(p);
    }
    // Skalenstriche außen am Rand, jeder vierte länger — wie an einem Messgerät
    const ticks = Math.round(20 + r * 44), tk = new Float32Array(ticks * 6);
    for (let k = 0; k < ticks; k++) {
      const a = (k / ticks) * Math.PI * 2, r1 = r * 1.022, r2 = r * (k % 4 === 0 ? 1.075 : 1.045);
      tk.set([r1 * Math.cos(a), 0, r1 * Math.sin(a), r2 * Math.cos(a), 0, r2 * Math.sin(a)], k * 6);
    }
    const tkGeo = new THREE.BufferGeometry();
    tkGeo.setAttribute('position', new THREE.BufferAttribute(tk, 3));
    const scale = new THREE.LineSegments(tkGeo, new THREE.LineBasicMaterial({ color: ACCENT, transparent: true, opacity: 0.34 }));
    layer.add(disc, band, rim, inner, spokeLines, scale, nodes, packets);
    spin.add(layer);
    layers.push({ layer, disc, rim, band, inner, spokeLines, scale, nodes, packets, y, r });
  }
  // Nähte: eine Linienschar, deren Endpunkte jede Runde neu gesetzt werden, weil die Lagen
  // gegeneinander wandern.
  const seamPos = new Float32Array((LAYERS - 1) * SEAMS * 6);
  const seamGeo = new THREE.BufferGeometry();
  seamGeo.setAttribute('position', new THREE.BufferAttribute(seamPos, 3));
  const seams = new THREE.LineSegments(seamGeo, new THREE.LineBasicMaterial({ color: ACCENT, transparent: true, opacity: 0.42 }));
  spin.add(seams);
  // Achse durch alle Lagen
  const axis = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, CORE_R * 1.9, 8), new THREE.MeshBasicMaterial({ color: bright, transparent: true }));
  spin.add(axis);
  // Zwei Bahnen außen, je mit einem Trabanten
  const orbits = [[1.5, 62, 0.21], [1.68, -48, -0.15], [1.84, 14, 0.09]].map(([r, tilt, speed]) => {
    const o = new THREE.Group();
    o.rotation.set(tilt * DEG, 0, 18 * DEG);
    const turn = new THREE.Group();
    const line = new THREE.Mesh(new THREE.TorusGeometry(r, 0.003, 4, 160), new THREE.MeshBasicMaterial({ color: ACCENT, transparent: true, opacity: 0.32 }));
    line.rotation.x = Math.PI / 2;
    const moon = new THREE.Mesh(new THREE.SphereGeometry(0.03, 12, 8), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true }));
    moon.position.x = r;
    const glint = new THREE.Sprite(new THREE.SpriteMaterial({
      map: spotTex, color: 0xf1f1f1, transparent: true, opacity: 0, depthWrite: false, blending: THREE.NormalBlending,
    }));
    glint.position.x = r;
    glint.scale.setScalar(0.3);
    turn.add(line, moon, glint);
    o.add(turn);
    group.add(o);
    return { turn, line, moon, glint, speed };
  });
  // V3: Kernpunkt in der Mitte, drei Meridiane um die Kugel, Funken im Inneren
  const nucleus = new THREE.Mesh(new THREE.SphereGeometry(0.07, 20, 14), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true }));
  const nucleusGlow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: spotTex, color: 0xf1f1f1, transparent: true, opacity: 0, depthWrite: false, blending: THREE.NormalBlending,
  }));
  group.add(nucleus, nucleusGlow);
  const meridians = [0, 60, 120].map((deg) => {
    const m = new THREE.Mesh(new THREE.TorusGeometry(CORE_R * 1.012, 0.0022, 4, 160), new THREE.MeshBasicMaterial({ color: ACCENT, transparent: true, opacity: 0 }));
    m.rotation.y = deg * DEG;
    spin.add(m);
    return m;
  });
  const SPARKS = 150, sparkPos = new Float32Array(SPARKS * 3), sparkRnd = seeded(5);
  for (let i = 0; i < SPARKS; i++) {
    const u = sparkRnd() * 2 - 1, a = sparkRnd() * Math.PI * 2, rad = CORE_R * 0.9 * Math.cbrt(sparkRnd()), q = Math.sqrt(1 - u * u);
    sparkPos.set([rad * q * Math.cos(a), rad * u, rad * q * Math.sin(a)], i * 3);
  }
  const sparkGeo = new THREE.BufferGeometry();
  sparkGeo.setAttribute('position', new THREE.BufferAttribute(sparkPos, 3));
  const sparks = new THREE.Points(sparkGeo, new THREE.PointsMaterial({
    map: spotTex, color: 0xe9e9e9, size: 0.055, transparent: true, opacity: 0, depthWrite: false, blending: THREE.NormalBlending,
  }));
  spin.add(sparks);
  // Lichthof hinter dem Kern
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({
    map: spotTex, color: ACCENT, transparent: true, opacity: 0, depthWrite: false, blending: THREE.NormalBlending,
  }));
  halo.scale.setScalar(5.2);
  group.add(halo);

  /**
   * Bringt den Kern auf den Stand eines Bildes.
   * @param {number} t Zeit in Sekunden.
   * @param {number} reveal Aufbaustand, 0 (unsichtbar) bis 1 (vollständig).
   * @param {number} energy Helligkeitszuschlag, 0 bis etwa 1.
   */
  function update(t, reveal, energy) {
    group.visible = reveal > 0.001;
    // Dreht um die Senkrechte und kippt dabei um die beiden anderen Achsen. Anders als in
    // brain.js kein voller Überschlag: von oben gesehen wären die Lagen nur noch Kreise,
    // und dass es ein Stapel ist, ginge verloren.
    spin.rotation.set(0.38 * Math.sin(t * TUMBLE[0] * 3), t * TUMBLE[1], 0.3 * Math.sin(t * TUMBLE[2] * 3 + 1));
    const phi = [];
    for (let i = 0; i < LAYERS; i++) {
      const L = layers[i];
      const a = smooth(0, 1, reveal * (LAYERS + 1.5) - i);   // Lagen erscheinen von unten nach oben
      phi[i] = t * 0.06 + 0.5 * Math.sin(t * 0.11 + i * 1.3);
      L.layer.rotation.y = -phi[i];
      L.layer.scale.setScalar(mix(0.94, 1, a));
      L.layer.visible = a > 0.001;
      L.disc.material.opacity = 0.12 * a;
      L.rim.material.opacity = a * Math.min(1, (0.6 + 0.4 * ((i % 2) ? 0.6 : 1)) * (1 + energy * 0.5));
      L.band.material.opacity = a * (0.3 + energy * 0.25);
      L.inner.material.opacity = 0.4 * a;
      L.spokeLines.material.opacity = 0.2 * a;
      L.scale.material.opacity = 0.34 * a;
      L.nodes.material.opacity = a * Math.min(1, 0.85 + energy * 0.4);
      L.packets.rotation.y = t * (0.5 + 0.13 * (i % 4)) * (i % 2 ? -1 : 1);
      for (const p of L.packets.children) p.material.opacity = a;
      L.vis = a;
    }
    let o = 0;
    for (let i = 0; i < LAYERS - 1; i++) {
      const A = layers[i], B = layers[i + 1];
      const show = Math.min(A.vis, B.vis) > 0.5;
      for (let k = 0; k < SEAMS; k++) {
        const a1 = phi[i] + (k / SEAMS) * Math.PI * 2;
        const a2 = phi[i + 1] + ((k + 0.5) / SEAMS) * Math.PI * 2;
        seamPos[o++] = A.r * Math.cos(a1); seamPos[o++] = A.y; seamPos[o++] = A.r * Math.sin(a1);
        if (show) { seamPos[o++] = B.r * Math.cos(a2); seamPos[o++] = B.y; seamPos[o++] = B.r * Math.sin(a2); }
        else { seamPos[o++] = A.r * Math.cos(a1); seamPos[o++] = A.y; seamPos[o++] = A.r * Math.sin(a1); }
      }
    }
    seamGeo.attributes.position.needsUpdate = true;
    seams.material.opacity = 0.42 * reveal;
    axis.material.opacity = reveal * 0.5;
    for (const ob of orbits) {
      ob.turn.rotation.y = t * ob.speed;
      ob.line.material.opacity = 0.32 * reveal;
      ob.moon.material.opacity = reveal;
      ob.glint.material.opacity = reveal * 0.9;
    }
    nucleus.material.opacity = reveal;
    nucleus.scale.setScalar(1 + 0.1 * Math.sin(t * 2.1) + energy * 0.5);
    nucleusGlow.material.opacity = reveal * Math.min(1, 0.6 + energy * 0.4);
    nucleusGlow.scale.setScalar(1.05 + 0.12 * Math.sin(t * 2.1) + energy * 0.6);
    for (const m of meridians) m.material.opacity = 0.17 * reveal;
    sparks.material.opacity = 0.6 * reveal;
    sparks.rotation.y = -t * 0.09;
    halo.material.opacity = reveal * (0.22 + energy * 0.2);
  }
  return { group, update };
}

/**
 * Baut den Boden: Lichtfläche, Bodenraster, Schattenfänger, Strichkranz und der Datenring um den Sockel.
 * @returns {{group: THREE.Group, ring: THREE.Group, marks: THREE.Material[], pool: THREE.Material,
 *     pulse: THREE.Mesh}} Der Boden, der drehbare Datenring, die Werkstoffe, die mit dem Aufbau
 *     eingeblendet werden, der Lichtsee unter dem Kern und die Welle, die nach außen läuft.
 */
function buildFloor() {
  // Nahtloser Studiogrund wie im Bild: nur weiche Schatten, kein Raster, kein Ring.
  const group = new THREE.Group();
  const catcher = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), new THREE.ShadowMaterial({ opacity: 0.1 }));
  catcher.rotation.x = -Math.PI / 2;
  catcher.position.y = 0.004;
  catcher.receiveShadow = true;
  catcher.renderOrder = -2;
  group.add(catcher);
  // Platzhalter fuer den Ablauf (Datenring, Lichtsee und Welle von O&S gibt es hier nicht)
  const pulse = new THREE.Mesh(new THREE.RingGeometry(0.98, 1, 8), new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 }));
  return { group, ring: new THREE.Group(), marks: [], pool: new THREE.MeshBasicMaterial(), pulse };
}

/**
 * Legt eine Leitung vom Gerät über den Boden zum Sockel. Am Geräteende sitzt ein Stecker, am
 * Sockel eine Buchse.
 * @param {THREE.Object3D} parent Gruppe, in die Rohr und Stecker kommen.
 * @param {THREE.Vector3} from Ansatzpunkt am Gerät, in Weltkoordinaten.
 * @param {number} bend Seitliche Auslenkung auf halbem Weg; das Vorzeichen bestimmt die Seite.
 * @param {string} kind ``lit`` für eine leuchtend blaue Leitung, ``grey`` für eine graue,
 *     ``thin`` für die dünne dunkle Begleitleitung.
 * @returns {{mesh: THREE.Mesh, curve: THREE.CatmullRomCurve3, lit: boolean, count: number,
 *     perSegment: number, ends: THREE.Mesh[]}} Das Rohr, seine Mittellinie, ob es leuchtet, die
 *     Zahl der Indizes für das Aufziehen und die beiden Endstücke.
 */
function buildCable(parent, from, bend, kind, dockA) {
  // Leitung vom Geraet ueber den Boden zum Knoten, an beiden Enden eine glaenzende Tuelle in Koralle.
  // dockA: Winkel des Steckplatzes am Knoten (gleichmaessig verteilt, siehe build).
  const a = Math.atan2(from.z, from.x);
  const dir = new THREE.Vector3(Math.cos(a), 0, Math.sin(a));       // vom Knoten nach aussen
  const perp = new THREE.Vector3(-dir.z, 0, dir.x);
  const dist = Math.hypot(from.x, from.z);
  const ad = dockA === undefined ? a : dockA;
  const dd = new THREE.Vector3(Math.cos(ad), 0, Math.sin(ad));
  const y = 0.05, py = PLUG_H / 2 + 0.01;
  const toHub = dir.clone().negate();
  const plugY = Math.max(py, from.y);
  const start = from.clone().addScaledVector(toHub, PLUG_LEN + 0.12).setY(plugY);
  const end = dd.clone().multiplyScalar(DOCK_R - 0.03 + PLUG_LEN + 0.12).setY(py);
  const pts = [
    start,
    from.clone().addScaledVector(toHub, PLUG_LEN + 0.5).setY(y),
    dir.clone().multiplyScalar(0.6).addScaledVector(dd, 0.4).normalize().multiplyScalar(dist * 0.55).addScaledVector(perp, bend).setY(y),
    dd.clone().multiplyScalar(DOCK_R + 1.4).addScaledVector(perp, bend * 0.25).setY(y),
    dd.clone().multiplyScalar(DOCK_R + PLUG_LEN + 0.5).setY(py * 0.8),
    end,
  ];
  const curve = new THREE.CatmullRomCurve3(pts, false, 'catmullrom', 0.5);
  const TUBULAR = 140, RADIAL = 8;
  const geo = new THREE.TubeGeometry(curve, TUBULAR, 0.045, RADIAL, false);
  const mesh = new THREE.Mesh(geo, new THREE.MeshPhysicalMaterial({ color: CABLE_WHITE, roughness: 0.38, clearcoat: 0.6, clearcoatRoughness: 0.3 }));
  mesh.castShadow = true;
  geo.setDrawRange(0, 0);
  parent.add(mesh);
  const plugMat = new THREE.MeshPhysicalMaterial({ color: PLUG_CORAL, roughness: 0.3, clearcoat: 1, clearcoatRoughness: 0.12 });
  const devPlug = makePlug(plugMat);
  devPlug.position.copy(from).addScaledVector(toHub, PLUG_LEN / 2).setY(plugY);
  devPlug.lookAt(devPlug.position.clone().add(dir));
  parent.add(devPlug);
  const hubPlug = makePlug(plugMat);
  hubPlug.position.copy(dd).multiplyScalar(DOCK_R - 0.03 + PLUG_LEN / 2).setY(py);
  hubPlug.lookAt(new THREE.Vector3(0, py, 0));
  parent.add(hubPlug);
  return { mesh, curve, lit: false, count: TUBULAR * RADIAL * 6, perSegment: RADIAL * 6, ends: [devPlug, hubPlug] };
}

/**
 * Blendet eine Gruppe ein oder aus, indem alle ihre Werkstoffe durchsichtig gestellt werden.
 * @param {THREE.Object3D} group Die Gruppe.
 * @param {number} alpha Deckkraft von 0 (weg) bis 1 (voll).
 */
function fade(group, alpha) {
  group.visible = alpha > 0.001;
  if (!group.visible) return;
  group.traverse((o) => {
    if (!o.material) return;
    // Ausgangswerte am Werkstoff merken, nicht am Körper: Gehäuseteile teilen sich einen
    // Werkstoff, und der zweite Körper würde sonst den schon abgedunkelten Wert als Ausgang nehmen.
    const u = o.material.userData;
    if (u.base === undefined) { u.base = o.material.opacity; u.glassy = o.material.transparent; }
    o.material.transparent = u.glassy || alpha < 0.999;
    o.material.opacity = u.base * alpha;
  });
}

/**
 * Verschmilzt die festen Körper einer Gruppe: Alle, die denselben Werkstoff tragen und gleich mit
 * Schatten umgehen, werden ein Körper. Ein Gerät besteht danach aus einer Handvoll statt aus Dutzenden
 * Zeichenaufrufen; es sieht gleich aus, weil sich innerhalb eines Geräts nichts gegeneinander bewegt.
 * Vervielfältigte Körper (Tasten, Anschlüsse, Leuchten) bleiben, wie sie sind.
 * @param {THREE.Group} root Die Gruppe eines Geräts; sie muss noch im Ursprung stehen.
 */
function compact(root) {
  root.updateMatrixWorld(true);
  const sets = new Map();
  root.traverse((o) => {
    if (!o.isMesh || o.isInstancedMesh) return;
    const key = `${o.material.uuid}|${o.castShadow}|${o.receiveShadow}|${o.renderOrder}`;
    if (!sets.has(key)) sets.set(key, []);
    sets.get(key).push(o);
  });
  for (const list of sets.values()) {
    if (list.length < 2) continue;
    const parts = list.map((o) => {
      const geo = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
      for (const name of Object.keys(geo.attributes)) if (!['position', 'normal', 'uv'].includes(name)) geo.deleteAttribute(name);
      geo.clearGroups();
      return geo.applyMatrix4(o.matrixWorld);
    });
    const merged = new THREE.Mesh(mergeGeometries(parts), list[0].material);
    merged.castShadow = list[0].castShadow;
    merged.receiveShadow = list[0].receiveShadow;
    merged.renderOrder = list[0].renderOrder;
    for (const o of list) o.removeFromParent();
    root.add(merged);
  }
}

/**
 * Ein Systembild: Szene, Kamera, Renderer und der Ablauf für eine Bühne ``[data-system3d]``.
 */
class System3D {
  /**
   * Legt Renderer, Szene und Kamera an und stößt den Bau an. Fehlt WebGL, wirft schon der Renderer;
   * das fängt die Schleife am Ende der Datei, das Standbild bleibt stehen.
   * @param {HTMLElement} figure Das Element mit dem Standbild; die Zeichenfläche kommt hinein.
   */
  constructor(figure) {
    this.figure = figure;
    this.reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // data-standbild="p,t" friert Aufbaustand und Zeit ein — damit wird das Standbild fotografiert.
    this.fixed = figure.dataset.standbild ? figure.dataset.standbild.split(',').map(Number) : null;
    this.progress = this.fixed ? this.fixed[0] : (this.reduced ? 1 : 0);
    this.time = this.fixed ? this.fixed[1] : 14;
    this.energy = 0;
    this.pointer = { x: 0, y: 0, sx: 0, sy: 0 };
    this.visible = false;
    this.playing = false;                // true, solange der Aufbau läuft oder fertig ist
    this.raf = 0;
    this.span = 11.2;
    this.frames = 0;
    this.slow = 0;
    this.labels = [];
    this.wave = 2;                       // Stand der Bodenwelle: 0 beginnt, ab 1 ist sie verschwunden
    this.shadowAt = -1;                  // Aufbaustand, für den die Schatten zuletzt gerechnet wurden
    // Hochkant (Telefon) rückt die Runde enger zusammen, damit die Körper nicht winzig werden.
    this.narrow = figure.clientWidth / Math.max(1, figure.clientHeight) < 1.6;
    this.handheld = window.matchMedia('(pointer: coarse)').matches;   // Telefon oder Tablet: leichtere Einstellungen

    const cv = document.createElement('canvas');
    cv.setAttribute('aria-hidden', 'true');   // die Beschreibung trägt das Standbild darunter
    this.canvas = cv;
    // Deckender Grund in der Farbe der Seite: Der Lichtschein (Bloom) braucht einen festen Grund.
    // Die Ränder oben und unten blendet style.css weich aus.
    this.renderer = new THREE.WebGLRenderer({ canvas: cv, antialias: true, alpha: false, powerPreference: 'high-performance' });
    this.ratio = Math.min(window.devicePixelRatio || 1, 2);
    this.renderer.setPixelRatio(this.ratio);
    // Keine Tonwertkurve: Jede Kurve verschiebt gerade die dunklen Töne, und der Grund muss den
    // Seitengrund genau treffen. Helle Stellen laufen dafür hart ins Weiß — den weichen Übergang
    // liefert der Lichtschein.
    this.renderer.toneMapping = THREE.NoToneMapping;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;
    // V4: Die Schatten hängen nur am Aufbaustand. Steht die Szene, werden sie nicht mehr neu gerechnet
    // (siehe draw) — das spart in jedem Bild einen ganzen Durchgang über alle Körper.
    this.renderer.shadowMap.autoUpdate = false;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(GROUND);
    this.camera = new THREE.PerspectiveCamera(24, 2, 0.1, 160);   // laengere Brennweite: ruhig wie das Bild

    this.ready = this.init().catch((err) => {
      // Grafikfehler mitten im Bau: Das Standbild bleibt stehen, die Seite ist vollständig.
      console.warn('Systembild: 3D nicht verfügbar, Standbild bleibt.', err);
      this.stop();
      cv.remove();
      figure.classList.remove('s3d-live');
    });
  }

  /**
   * Baut die Szene in kleinen Schritten und schaltet sie erst frei, wenn alles übersetzt und auf der
   * Grafikkarte ist (V4). Zwischen den Schritten bekommt die Seite den Hauptfaden zurück; vorher lief
   * alles in einem Stück, und am Handy stand die Seite so lange.
   * @returns {Promise<void>} Erfüllt sich, wenn die Szene läuft.
   */
  async init() {
    const figure = this.figure, cv = this.canvas;
    await rest();
    // Raumlicht für die Spiegelungen auf Metall und Glas
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    this.scene.environmentIntensity = 0.65;
    pmrem.dispose();
    await rest();

    this.warmTarget = new THREE.WebGLRenderTarget(32, 32);
    await this.build();

    // Hell: kein Lichtschein, keine Nachbearbeitung (auf hellem Grund wuerde alles milchig). Die Kantenglaettung
    // macht der Renderer selbst (antialias). Spart am Handy eine volle Zwischenflaeche.
    this.composer = null;
    this.bloom = { enabled: false };
    this.resize();
    this.warmTarget.dispose();
    await rest();

    figure.appendChild(cv);
    this.buildLabels();
    this.render();                       // erstes Bild, bevor das Standbild weicht
    figure.classList.add('s3d-live');

    new ResizeObserver(() => { this.resize(); this.render(); }).observe(figure);
    if (!this.fixed && !this.reduced) {
      // V3: Der Aufbau beginnt, sobald der obere Rand der Bühne im Fenster steht (sechs Hundertstel
      // ihrer Höhe). Vorher (ab einem guten Viertel) stand zu lange eine leere graue Fläche da. Noch
      // früher wäre zu früh: Dann ist der Aufbau vorbei, bevor man ihn sieht. Ist die Bühne ganz aus
      // dem Fenster (oben oder unten), wird zurückgesetzt — beim nächsten Mal baut sie sich neu auf.
      new IntersectionObserver((entries) => {
        const entry = entries[entries.length - 1];
        this.visible = entry.isIntersecting;
        if (!this.visible) { this.stop(); this.reset(); return; }
        if (entry.intersectionRatio >= 0.06) this.playing = true;
        this.start();
      }, { threshold: [0, 0.06] }).observe(figure);
      document.addEventListener('visibilitychange', () => (document.hidden ? this.stop() : this.visible && this.start()));
      if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        figure.addEventListener('pointermove', (ev) => {
          const r = figure.getBoundingClientRect();
          this.pointer.x = ((ev.clientX - r.left) / r.width) * 2 - 1;
          this.pointer.y = ((ev.clientY - r.top) / r.height) * 2 - 1;
        });
        figure.addEventListener('pointerleave', () => { this.pointer.x = 0; this.pointer.y = 0; });
      }
    }
    // Geht der Grafikkontext verloren (Treiber, Energiesparen), kommt das Standbild zurück.
    cv.addEventListener('webglcontextlost', (ev) => { ev.preventDefault(); this.stop(); figure.classList.remove('s3d-live'); });
  }

  /**
   * Zeichnet mit nur einem sichtbaren Teil der Szene und stellt danach alles wieder her.
   * @param {THREE.Object3D|null} piece Der Teil, der sichtbar bleibt; ``null`` blendet alle Körper aus.
   * @param {function(): void} paint Der Zeichenaufruf.
   */
  solo(piece, paint) {
    const others = this.scene.children.filter((o) => o !== piece && !o.isLight);
    const was = others.map((o) => o.visible);
    for (const o of others) o.visible = false;
    paint();
    others.forEach((o, i) => { o.visible = was[i]; });
  }

  /**
   * Stellt einen Teil in die Szene und bereitet ihn vor: Shader übersetzen (wo der Browser es kann,
   * nebenher), dann einmal in eine winzige Fläche zeichnen — das lädt Geometrie und Texturen auf die
   * Grafikkarte. So verteilt sich die Arbeit auf viele kurze Schritte statt auf das erste Bild.
   * @param {THREE.Object3D} piece Der Teil.
   * @param {boolean} [fades] Wird der Teil später ein- und ausgeblendet? Dann muss sein Shader von
   *     Anfang an mit Durchsicht übersetzt sein, sonst bliebe er deckend.
   * @returns {Promise<void>} Erfüllt sich, wenn der Teil bereit ist.
   */
  async prime(piece, fades = false) {
    this.scene.add(piece);
    if (fades) fade(piece, 0.5);
    // Die Zielfläche steht schon beim Übersetzen: Ein Shader für eine Zwischenfläche (so zeichnet die
    // Nachbearbeitung) ist ein anderer als einer, der direkt auf den Bildschirm zeichnet.
    this.renderer.setRenderTarget(null);
    await this.renderer.compileAsync(piece, this.camera, this.scene);
    this.renderer.shadowMap.needsUpdate = true;
    this.solo(piece, () => this.renderer.render(this.scene, this.camera));
    this.renderer.setRenderTarget(null);
    await rest();
  }

  /**
   * Stellt alle Körper in die Szene — Teil für Teil, mit Pausen dazwischen.
   * @returns {Promise<void>} Erfüllt sich, wenn alles steht.
   */
  async build() {
    // Licht zuerst: Die Shader der Körper hängen an Zahl und Art der Lichter.
    // Weißes Führungslicht von vorn links oben (wirft die Schatten), blaues Licht aus dem Kern.
    // Weiches Studiolicht: Himmel-Boden-Licht als Grundhelligkeit, ein weisses Fuehrungslicht fuer die Schatten.
    // V5.2 (Nicky: whites "look too much like a solid shader"): klare Lichtrichtung von vorn links oben, dunklere
    // Unterseiten ueber ein dunkleres Bodenlicht -> Oberseiten hell, Fronten mittel, Seiten dunkler, wie im Standbild.
    this.scene.add(new THREE.HemisphereLight(0xffffff, 0x8e8d95, 0.34));
    const key = new THREE.DirectionalLight(0xffffff, 1.25);
    key.position.set(-6, 11, 7);
    key.castShadow = true;
    key.shadow.mapSize.setScalar(this.handheld ? 1024 : 2048);
    Object.assign(key.shadow.camera, { left: -12, right: 12, top: 12, bottom: -12, near: 1, far: 40 });
    key.shadow.bias = -0.0004;
    key.shadow.radius = 14;
    this.scene.add(key);
    const fill = new THREE.DirectionalLight(0xffffff, 0.12);   // hellt die Fronten auf, solange der Kern noch dunkel ist
    fill.position.set(3, 2.5, 9);
    this.scene.add(fill);
    const rim = new THREE.DirectionalLight(0xffffff, 0.4);    // V3: kühles Gegenlicht von hinten rechts — helle Kanten an Gehäusen
    rim.position.set(7, 5, -8);
    this.scene.add(rim);
    this.coreLight = new THREE.PointLight(ACCENT, 0, 12, 1.4);
    this.coreLight.position.set(0, CORE_Y, 0);
    this.scene.add(this.coreLight);
    // Kamera schon jetzt an ihren Platz: prime zeichnet mit ihr.
    this.camera.position.set(0, 6, 15);
    this.camera.lookAt(0, 1.2, 0);
    this.camera.updateMatrixWorld();

    const spot = makeSpotTexture('255,255,255', 1);
    const shadow = makeSpotTexture('0,0,0', 0.9);
    const vent = makeVentTexture();
    const floor = buildFloor();
    this.ring = floor.ring;
    this.marks = floor.marks;
    this.pool = floor.pool;
    this.pulse = floor.pulse;
    await this.prime(floor.group);

    this.dock = buildDock(spot, vent);
    await this.prime(this.dock.group, true);
    // Kein Schloss und kein Kern (das Bild hat nur den Knoten); Platzhalter fuer den Ablauf
    this.lock = { group: new THREE.Group(), face: new THREE.Group(), glow: [] };
    this.gate = 0;
    this.core = { update() {} };
    // Am Handy sind die Bildschirme daumennagelgroß: halbe Texturgröße genügt und lädt schneller.
    const px = (n) => Math.round(n * (this.handheld ? 0.5 : 1));
    const screen = (w, h, kind, seed) => makeScreenTexture(px(w), px(h), kind, seed);
    // Geräte: [Bau, x, z, Drehung um die Senkrechte in Grad, Beginn im Ablauf, Schlüssel der Beschriftung]
    // Der Server steht hinten rechts: oben links bleibt Luft für Überschrift und Vorspann.
    // Bilder aus dem alten Standbild (tex/, deckende JPG). Fehlt eines, bleibt die Flaeche dunkel.
    const loader = new THREE.TextureLoader();
    const tex = {};
    await Promise.all(['schnitt', 'storyboard', 'grading', 'foto-quer', 'foto-hoch'].map((n) => loader.loadAsync(`${TEX_BASE}${n}_KJ_v001.jpg`)
      .then((t) => { t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; tex[n] = t; }).catch(() => { tex[n] = null; })));
    // Plaetze wie im Bild (Blick von vorn oben; alle Gegenstaende um gut 25 Grad nach rechts gedreht):
    // [Bau, x, z, Drehung in Grad, Beginn im Ablauf]
    const Y0 = 27;
    const placed = [
      [() => buildCamera(shadow), -8.8, -1.6, Y0 + 92, 0.0, 1.15],
      [() => buildDisplay(tex.schnitt, shadow), -3.3, -3.2, Y0, 0.04, 1.1],
      [() => buildRenderBox(shadow), 3.1, -4.8, Y0, 0.08, 1.15],
      [() => buildTablet(tex.storyboard, shadow), 6.3, -1.5, Y0, 0.11, 1.1],
      [() => buildGradePanel(tex.grading, shadow), 4.3, 3.1, Y0, 0.14, 1.15],
      [() => buildClapper(shadow), 1.6, 5.8, Y0 - 8, 0.17, 1.05],
      [() => buildHeadphones(shadow), -1.0, 6.2, Y0 - 12, 0.19, 1.35],
      [() => buildPrintStand(tex['foto-quer'], tex['foto-hoch'], shadow), -4.6, 4.7, Y0, 0.21, 1.2],
    ];
    this.devices = [];
    for (const [make, x, z, rot, at, size] of placed) {
      const obj = make();
      compact(obj);
      obj.position.set(x, 0, z);
      obj.rotation.y = rot * DEG;
      obj.scale.setScalar(size);
      obj.updateMatrixWorld(true);
      this.devices.push({ obj, at, size, key: '', anchor: obj.localToWorld(obj.userData.label.clone()) });
      await this.prime(obj, true);
    }
    const [camera, display, box, tablet, grade, clapper, phones, prints] = this.devices.map((d) => d.obj);
    // Die Beschriftung des Kerns sitzt rechts oben an der Kugel, nicht über ihr: dort steht der Vorspann.
    this.coreAnchor = new THREE.Vector3(0, 1, 0);

    // Leitungen: jedes Gerät eine, der Server drei. Zwei leuchten blau, die übrigen sind grau;
    // jede hat eine dünne dunkle Begleitleitung.
    const world = (obj, v) => obj.localToWorld(v.clone());
    this.cableGroup = new THREE.Group();
    const plan = [
      [world(camera, camera.userData.plug), 0.6, 'grey', 0.0],
      [world(display, display.userData.plug), 0.5, 'grey', 0.06],
      [world(box, box.userData.plugs[0]), 0, 'grey', 0.12],
      [world(box, box.userData.plugs[1]), 0, 'grey', 0.15],
      [world(box, box.userData.plugs[2]), 0, 'grey', 0.18],
      [world(box, box.userData.plugs[3]), 0, 'grey', 0.21],
      [world(tablet, tablet.userData.plug), -0.3, 'grey', 0.24],
      [world(grade, grade.userData.plug), -0.4, 'grey', 0.3],
      [world(clapper, clapper.userData.plug), 0.35, 'grey', 0.36],
      [world(prints, prints.userData.plug), 0.4, 'grey', 0.42],
      [world(phones, phones.userData.plug), -0.2, 'grey', 0.45],
    ];
    // Steckplaetze am Knoten: jede Leitung dockt in ihrer eigenen Richtung an, mit Mindestabstand zur
    // naechsten (wie im Bild: rechts liegen die vier Stecker vom Render-Rechner dicht nebeneinander)
    const order = plan.map(([from], i) => [Math.atan2(from.z, from.x), i]).sort((u, v) => u[0] - v[0]);
    const ang = order.map(([a]) => a), minGap = (Math.PI * 2) / 14;
    for (let it = 0; it < 80; it++) {
      for (let j = 0; j < ang.length; j++) {
        const k = (j + 1) % ang.length;
        const gap = ang[k] - ang[j] + (k === 0 ? Math.PI * 2 : 0);
        if (gap < minGap) { const push = (minGap - gap) / 2; ang[j] -= push; ang[k] += push; }
      }
    }
    const dockA = [];
    order.forEach(([, i], j) => { dockA[i] = ang[j]; });
    this.cables = [];
    const lights = new THREE.Group();    // alle Lichtpunkte: Sprites auf den Leitungen und in der Säule
    plan.forEach(([from, bend, kind, at], i) => {
      const cable = buildCable(this.cableGroup, from, bend, kind, dockA[i]);
      cable.at = at;
      cable.phase = (i * 0.37) % 1;
      cable.speed = 0.11 + (i % 3) * 0.018;
      cable.last = cable.phase;
      // Lichtpunkt mit zwei Nachläufern
      cable.dots = [1, 0.5, 0.25].map((k) => {
        const s = new THREE.Sprite(new THREE.SpriteMaterial({
          map: spot, color: RING_CORE, transparent: true, opacity: 0, depthWrite: false, blending: THREE.NormalBlending,
        }));
        s.scale.setScalar(0.32 * (0.55 + 0.45 * k));
        s.userData.k = k;
        lights.add(s);
        return s;
      });
      this.cables.push(cable);
    });
    await this.prime(this.cableGroup);
    // Lichtpunkte, die in der Säule vom Sockel in den Kern steigen
    this.risers = [0, 1, 2].map(() => {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: spot, color: ACCENT, transparent: true, opacity: 0, depthWrite: false, blending: THREE.NormalBlending }));
      s.scale.setScalar(0.34);
      s.userData.t = 2;
      lights.add(s);
      return s;
    });

    // Staub: ein paar hundert Punkte, die langsam steigen
    const N = 220, dp = new Float32Array(N * 3), rnd = seeded(21);
    for (let i = 0; i < N; i++) dp.set([(rnd() - 0.5) * 13, rnd() * 5.5, (rnd() - 0.5) * 11], i * 3);
    const dg = new THREE.BufferGeometry();
    dg.setAttribute('position', new THREE.BufferAttribute(dp, 3));
    this.dust = new THREE.Points(dg, new THREE.PointsMaterial({
      map: spot, color: 0xe0e0e0, size: 0.04, transparent: true, opacity: 0, depthWrite: false, blending: THREE.NormalBlending,
    }));
    lights.add(this.dust);
    await this.prime(lights);

    // Umriss fuer fit(): alle Koerper der Gegenstaende (ohne die flachen Schattenflecken) und der Knoten.
    this.center = new THREE.Vector3(0, 0.8, 0.8);
    this.bounds = [];
    const box3 = new THREE.Box3(), corner = new THREE.Vector3();
    for (const d of this.devices) {
      d.obj.updateMatrixWorld(true);
      d.obj.traverse((o) => {
        if (!o.isMesh || o.renderOrder === -1 || !o.geometry) return;
        if (o.isInstancedMesh) { o.computeBoundingBox(); box3.copy(o.boundingBox).applyMatrix4(o.matrixWorld); }
        else { if (!o.geometry.boundingBox) o.geometry.computeBoundingBox(); box3.copy(o.geometry.boundingBox).applyMatrix4(o.matrixWorld); }
        for (let i = 0; i < 8; i++) {
          corner.set(i & 1 ? box3.max.x : box3.min.x, i & 2 ? box3.max.y : box3.min.y, i & 4 ? box3.max.z : box3.min.z);
          this.bounds.push({ p: corner.clone(), label: false });
        }
      });
    }
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      for (const y of [0, 0.55]) this.bounds.push({ p: new THREE.Vector3(Math.cos(a) * (DOCK_R + PLUG_LEN + 0.15), y, Math.sin(a) * (DOCK_R + PLUG_LEN + 0.15)), label: false });
    }
  }

  /**
   * Rechnet fuer eine Blickrichtung den kleinsten Kameraabstand und die Verschiebung aus, bei denen jeder Punkt
   * des Umrisses mit Rand im Bild steht (Halbierungssuche ueber den Abstand; fuer einen festen Abstand ist die
   * erlaubte Verschiebung je Achse ein Intervall, genommen wird seine Mitte).
   * @param {number} az Drehung um die Senkrechte (rad).
   * @param {number} el Hoehenwinkel (rad).
   * @returns {{d: number, target: THREE.Vector3, dir: THREE.Vector3}} Abstand, Blickpunkt, Richtung zur Kamera.
   */
  fit(az, el) {
    const dir = new THREE.Vector3(Math.sin(az) * Math.cos(el), Math.sin(el), Math.cos(az) * Math.cos(el));
    const fwd = dir.clone().negate();
    const right = new THREE.Vector3().crossVectors(fwd, new THREE.Vector3(0, 1, 0)).normalize();
    const up = new THREE.Vector3().crossVectors(right, fwd);
    const tv = Math.tan((this.camera.fov * DEG) / 2), th = tv * this.camera.aspect;
    const w = Math.max(1, this.w), h = Math.max(1, this.h);
    const edge = Math.max(12, Math.min(w, h) * 0.04);     // Rand in Bildpunkten
    const px = (2 * edge) / w, py = (2 * edge) / h;
    const P = [], v = new THREE.Vector3();
    for (const b of this.bounds) {
      v.copy(b.p).sub(this.center);
      P.push([v.dot(right), v.dot(up), v.dot(fwd)]);
    }
    const solve = (d) => {
      let xl = -Infinity, xh = Infinity, yl = -Infinity, yh = Infinity;
      for (const [x, y, z] of P) {
        const sx = (d + z) * th, sy = (d + z) * tv;
        xl = Math.max(xl, x - (1 - px) * sx); xh = Math.min(xh, x + (1 - px) * sx);
        yl = Math.max(yl, y - (1 - py) * sy); yh = Math.min(yh, y + (1 - py) * sy);
      }
      return [xl, xh, yl, yh];
    };
    let lo = 2, hi = 200;
    for (let i = 0; i < 32; i++) {
      const mid = (lo + hi) / 2, [xl, xh, yl, yh] = solve(mid);
      if (xl <= xh && yl <= yh) hi = mid; else lo = mid;
    }
    const [xl, xh, yl, yh] = solve(hi);
    const target = this.center.clone().addScaledVector(right, (xl + xh) / 2).addScaledVector(up, (yl + yh) / 2);
    return { d: hi, target, dir };
  }

  /**
   * Legt die Beschriftungen als HTML über die Szene. Die Texte stehen in ``data-marken`` am
   * Bühnenelement (JSON, von bauen.py in der Sprache der Seite gesetzt).
   */
  buildLabels() {
    let texts = {};
    try { texts = JSON.parse(this.figure.dataset.marken || '{}'); } catch (err) { texts = {}; }
    const make = (text, anchor, at) => {
      if (!text) return;
      const el = document.createElement('span');
      el.className = 's3d-marke';
      el.textContent = text;
      el.setAttribute('aria-hidden', 'true');     // steht sinngemäß schon im Alternativtext
      this.figure.appendChild(el);
      this.labels.push({ el, anchor, at });
    };
    // V5: keine Beschriftungen — das Bild davor hat keine, und Nicky wollte es ruhiger.
    void make; void texts;
  }

  /** Passt Zeichenfläche und Kamera an die Größe der Bühne an. */
  resize() {
    const w = Math.max(1, this.figure.clientWidth), h = Math.max(1, this.figure.clientHeight);
    this.w = w;
    this.h = h;
    this.renderer.setPixelRatio(this.ratio);
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  /** Setzt den Aufbau auf Anfang: leere Bühne, bis das Band wieder ins Bild kommt. */
  reset() {
    this.playing = false;
    this.progress = 0;
    this.energy = 0;
    this.gate = 0;
    this.wave = 2;
    for (const r of this.risers) r.userData.t = 2;
    this.render();
  }

  /** Startet die Bildfolge. */
  start() {
    if (this.raf) return;
    let last = performance.now();
    const tick = (now) => {
      const raw = (now - last) / 1000;
      const dt = Math.min(0.05, raw);
      last = now;
      this.time += dt;
      if (this.playing) this.progress = Math.min(1, this.progress + dt / BUILD_SECONDS);
      this.pointer.sx += (this.pointer.x - this.pointer.sx) * (1 - Math.exp(-dt * 3));
      this.pointer.sy += (this.pointer.y - this.pointer.sy) * (1 - Math.exp(-dt * 3));
      this.energy *= Math.exp(-dt * 2.2);
      this.watch(raw);
      this.render(dt);
      this.raf = requestAnimationFrame(tick);
    };
    this.raf = requestAnimationFrame(tick);
  }

  /**
   * Beobachtet die ersten Bilder. Läuft die Szene auf einem Gerät zu langsam, fallen erst der
   * Lichtschein und die feine Auflösung weg, dann die Schatten — die Bewegung bleibt flüssig.
   * @param {number} raw Zeit seit dem letzten Bild in Sekunden.
   */
  watch(raw) {
    if (this.frames > 90) return;
    this.frames += 1;
    if (this.frames < 12) return;          // die ersten Bilder übersetzen noch Shader
    if (raw > 0.034) this.slow += 1;
    if (this.frames === 90 && this.slow > 30) {
      this.bloom.enabled = false;
      this.ratio = Math.min(this.ratio, 1.25);
      this.renderer.shadowMap.enabled = this.slow < 60;
      this.resize();
    }
  }

  /** Hält die Bildfolge an, solange die Bühne nicht zu sehen ist. */
  stop() {
    cancelAnimationFrame(this.raf);
    this.raf = 0;
  }

  /**
   * Zeichnet ein Bild zum aktuellen Stand.
   * @param {number} [dt] Zeit seit dem letzten Bild in Sekunden; 0 für ein Standbild.
   */
  render(dt = 0) {
    this.pose(dt);
    this.draw();
  }

  /**
   * Stellt alle Körper, Lichter, die Kamera und die Beschriftungen auf den aktuellen Stand.
   * @param {number} dt Zeit seit dem letzten Bild in Sekunden; 0 für ein Standbild.
   */
  pose(dt) {
    const p = this.progress, t = this.time;

    // 1. Geräte und Server: nacheinander, leicht von unten kommend
    for (const d of this.devices) {
      const a = smooth(d.at, d.at + 0.16, p);
      fade(d.obj, a);
      d.obj.position.y = mix(-0.22, 0, a);
      d.obj.scale.setScalar(mix(0.96, 1, a) * d.size);
    }
    // 2. Sockel, dann ziehen sich die Leitungen vom Gerät dorthin auf
    fade(this.dock.group, smooth(0.26, 0.42, p));
    const flow = smooth(0.84, 0.96, p);
    for (const c of this.cables) {
      const a = smooth(0.34 + c.at * 0.5, 0.62 + c.at * 0.5, p);
      c.mesh.visible = a > 0;
      c.mesh.geometry.setDrawRange(0, Math.floor((a * c.count) / c.perSegment) * c.perSegment);
      if (c.ends.length) { c.ends[0].visible = a > 0; c.ends[1].visible = a > 0.98; }
      if (!c.dots.length) continue;
      const head = (t * c.speed + c.phase) % 1;
      if (flow > 0.5 && head < c.last && dt > 0) {       // Lichtpunkt ist am Sockel angekommen
        this.energy = Math.min(1, this.energy + (c.lit ? 0.45 : 0.28));
        const free = this.risers.find((r) => r.userData.t >= 1);
        if (free) { free.userData.t = 0; this.gate = 1; }
        if (this.wave >= 1) this.wave = 0;
      }
      c.last = head;
      for (const s of c.dots) {
        const u = head - (1 - s.userData.k) * 0.035;
        s.visible = flow > 0 && u > 0.02;
        if (!s.visible) continue;
        s.position.copy(c.curve.getPointAt(clamp01(u)));
        s.material.opacity = flow * s.userData.k * Math.sin(Math.PI * clamp01(u)) ** 0.5;
      }
    }
    // 3. Kern, Lichtsäule, Datenring
    const coreReveal = smooth(0.58, 0.92, p);
    this.core.update(t, coreReveal, this.energy);
    this.coreLight.intensity = 0;
    this.dock.update(smooth(0.3, 0.5, p), this.energy);   // Ring pulst, wenn ein Signal ankommt
    for (const r of this.risers) {
      if (dt > 0 && r.userData.t < 1) r.userData.t += dt * 1.6;
      const k = r.userData.t;
      r.visible = false;                         // ohne Kern keine steigenden Lichtpunkte
      r.position.set(0, mix(0.2, CORE_Y - CORE_R * 0.6, k), 0);
      r.material.opacity = Math.sin(Math.PI * clamp01(k));
    }
    // Schloss: dreht sich zur Kamera, sein Schlüsselloch und sein Ring leuchten beim Durchgang auf
    fade(this.lock.group, 0);
    this.gate *= Math.exp(-dt * 3);
    for (const m of this.lock.glow) m.color.setHex(ACCENT).multiplyScalar(1.15 + this.gate * 1.1);
    this.ring.rotation.y = t * 0.05;
    // Boden und Datenring stehen von Anfang an schwach da (V3): die Bühne ist nie leer.
    const marks = mix(0.4, 1, smooth(0.1, 0.6, p));
    for (const m of this.marks) m.opacity = m.userData.strength * marks;
    this.pool.opacity = coreReveal * (0.36 + this.energy * 0.3);
    if (dt > 0 && this.wave < 1) this.wave += dt * 0.5;
    this.pulse.visible = this.wave < 1 && coreReveal > 0.5;
    this.pulse.scale.setScalar(mix(0.9, 5.2, this.wave));
    this.pulse.material.opacity = 0.55 * (1 - clamp01(this.wave)) ** 2;
    // Staub steigt langsam und beginnt unten wieder
    this.dust.visible = false;
    if (dt > 0) {
      const dp = this.dust.geometry.attributes.position;
      for (let i = 0; i < dp.count; i++) dp.setY(i, (dp.getY(i) + dt * (0.05 + (i % 7) * 0.012)) % 5.5);
      dp.needsUpdate = true;
    }


    // Kamera: Blick von vorn oben wie im Bild (gut 35 Grad), beim Aufbau ein wenig hoeher und seitlich, danach
    // ein kaum merkliches Pendeln. Der Abstand kommt in jedem Bild aus fit(): nichts wird angeschnitten.
    const k = smooth(0, 1, p);
    const az = (mix(-7, 0, k) + 1.5 * Math.sin(t * 0.12) * k + this.pointer.sx * 2) * DEG;
    const el = (mix(42, 35, k) - this.pointer.sy * 1.2) * DEG;
    const view = this.fit(az, el);
    this.camera.position.copy(view.target).addScaledVector(view.dir, view.d * mix(1.08, 1, k));
    this.camera.lookAt(view.target);
    this.camera.updateMatrixWorld();
    this.lock.face.rotation.y = az;

    // Beschriftungen an ihre Punkte setzen
    const v = new THREE.Vector3();
    for (const L of this.labels) {
      v.copy(L.anchor).project(this.camera);
      const a = smooth(L.at, L.at + 0.12, p);
      L.el.style.opacity = a.toFixed(3);
      L.el.style.transform = `translate3d(${((v.x * 0.5 + 0.5) * this.w).toFixed(1)}px,${((-v.y * 0.5 + 0.5) * this.h).toFixed(1)}px,0) translate(-50%,-100%)`;
    }
  }

  /** Zeichnet die Szene, mit Lichtschein oder — auf langsamen Geräten — ohne. */
  draw() {
    // Schatten nur neu rechnen, wenn sich der Aufbaustand geändert hat: Danach steht alles, was Schatten wirft.
    if (this.progress !== this.shadowAt) {
      this.renderer.shadowMap.needsUpdate = true;
      this.shadowAt = this.progress;
    }
    if (this.bloom.enabled) this.composer.render();
    else this.renderer.render(this.scene, this.camera);
  }
}

for (const figure of document.querySelectorAll('[data-system3d]')) {
  if (figure.dataset.s3dReady) continue;
  figure.dataset.s3dReady = '1';
  try {
    figure.s3d = new System3D(figure);
  } catch (err) {
    // Kein WebGL oder Grafikfehler: Das Standbild bleibt stehen, die Seite ist vollständig.
    console.warn('Systembild: 3D nicht verfügbar, Standbild bleibt.', err);
  }
}
