#!/usr/bin/env python3
"""Systembild V5 fuer consulting.nicolaslekai.com: das helle Studio-Diorama als 3D-Szene.

Verlauf:
  V3 (24.11.2026 frueh): O&S-Szene als Filmproduktion, Orange, dunkel. Danach ersetzt durch ein flaches Bild
     (preview/assets/bilder/system-film.webp; Nicky: "brighter images", "apple design style vibes").
  V4 (24.11.2026 abends): Nicky zum Bild: "I don't like how it's cut off, can we attempt to build this as a 3D
     model … like in the Otter und Stein website" -> helle O&S-Szene mit Kugel, Raster, Datenring.
  V5 (24.11.2026 nachts), Nicky am iPhone: "it's pretty ugly", "too many bunte spots", "make it look much cleaner
     and model the image we had before", "model this exactly", "make sure have the image content inside".
     -> Dieselben Gegenstaende an denselben Plaetzen und aus demselben Blickwinkel wie das Bild: Kinokamera auf
     Stativ, Studio-Bildschirm mit Schnitt, Render-Rechner, Tablet mit Storyboard und Stift, Grading-Pult,
     Filmklappe, Kopfhoerer, Acrylstaender mit Fotoabzuegen; weisse Kabel mit Steckern in Koralle zu einem weissen
     Knoten mit Koralle-Ring. Keine Kugel, kein Raster, kein Datenring, keine Beschriftungen. Bildschirme und
     Fotos tragen die Bilder aus dem alten Standbild (tools/system3d_texturen.py -> preview/assets/system3d/tex/).

Bunte Punkte am iPhone: iOS Safari laedt Canvas-Texturen entmultipliziert hoch; fast durchsichtige Texel mit
farbigem RGB (Raster in Grau, Lichtsee in Koralle) wurden dabei zu gesaettigten Farbpunkten. Jetzt gibt es keine
solche Textur mehr: Masken sind nur noch reines Weiss oder Schwarz (exakt bei jedem Alpha), alle Bilder deckend.

Dieses Skript nimmt system3d.src.js von otterstein.ai (dort NIE etwas aendern) und schreibt
preview/assets/system3d/system3d.src.js. Danach:
    python3 tools/system3d_texturen.py   # nur wenn sich die Texturen aendern sollen
    python3 tools/system3d_film.py && preview/assets/system3d/bauen.sh
"""
import colorsys, re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = Path.home() / "Documents/Claude/Projects/Otter and Stein/assets/system3d/system3d.src.js"
DST = ROOT / "preview/assets/system3d/system3d.src.js"
CORAL_H = 11.4 / 360          # #ff7f61
KEEP_A, KEEP_B = "/*KEEP{*/", "/*}KEEP*/"   # eigene Bloecke: dort mischt die Umrechnung nichts um

s = SRC.read_text()


def sub(old, new, count=1):
    """Ersetzt eine (oder count) Fundstelle; bricht ab, wenn die O&S-Quelle sich geaendert hat."""
    global s
    assert old in s, f"nicht gefunden: {old[:80]!r}"
    s = s.replace(old, new, count)


def keep(code):
    return KEEP_A + code + KEEP_B


def cut(start, end, new, include_end=False):
    """Ersetzt den Abschnitt ab ``start`` bis vor (oder mit) ``end``."""
    global s
    i0 = s.index(start)
    i1 = s.index(end, i0) + (len(end) if include_end else 0)
    s = s[:i0] + keep(new) + s[i1:]


def swap_function(name, code):
    """Ersetzt eine ganze Funktion (ab 'function name(' bis zur passenden schliessenden Klammer)."""
    global s
    i = s.index(f"function {name}(")
    j = s.index("{", s.index(")", i))
    depth = 0
    for k in range(j, len(s)):
        if s[k] == "{":
            depth += 1
        elif s[k] == "}":
            depth -= 1
            if depth == 0:
                break
    s = s[:i] + keep(code.strip()) + s[k + 1:]


# ───────────────────────── 1 · Kopf, Konstanten, keine Nachbearbeitung ─────────────────────────
s = keep("""/* Systembild consulting.nicolaslekai.com · V5 · 24.11.2026 — erzeugt von tools/system3d_film.py aus der Szene von
   otterstein.ai. Nicht von Hand aendern: Skript anpassen, neu erzeugen, bauen.sh.
   Das helle Studio-Diorama aus dem Bild davor als 3D: dieselben Gegenstaende, Plaetze und derselbe Blickwinkel,
   Bildschirme und Fotos mit den Bildern aus dem Standbild (tex/). Die Kamera passt sich in jedem Bild so ein,
   dass nichts angeschnitten wird (fit). */
""") + s
for imp in ["import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';\n",
            "import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';\n",
            "import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';\n",
            "import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';\n"]:
    sub(imp, "")
sub("const ACCENT = 0x8dd2ec;               // Bergwind-Hellblau, wie --akzent-hell in style.css",
    keep("""const ACCENT = 0xff7f61;               // Koralle, wie --akzent-hell in koralle-grau.css
// Texturen aus dem alten Standbild liegen neben dieser Datei in tex/ (Adresse aus dem eigenen <script>)
const TEX_BASE = (() => {
  try { return new URL('tex/', document.currentScript.src).href; } catch (err) { return 'assets/system3d/tex/'; }
})();"""))
sub("const GROUND = 0x1c1c1e;               // Seitengrund, wie --dark in style.css",
    keep("const GROUND = 0xececee;               // Grund des Bandes, wie .nl-system in koralle-grau.css (hellgrau wie im Bild)"))
sub("const DOCK_R = 0.86;", keep("const DOCK_R = 0.9; "))
sub("THREE.PCFSoftShadowMap", "THREE.PCFShadowMap")   # three 0.187: PCFSoft gibt es nicht mehr (Warnung in der Konsole)
sub("    this.scene.fog = new THREE.Fog(GROUND, 16, 34);\n", "")
sub("this.camera = new THREE.PerspectiveCamera(30, 2, 0.1, 80);",
    keep("this.camera = new THREE.PerspectiveCamera(24, 2, 0.1, 160);   // laengere Brennweite: ruhig wie das Bild"))
sub("this.narrow = figure.clientWidth / Math.max(1, figure.clientHeight) < 1.25;",
    keep("this.narrow = figure.clientWidth / Math.max(1, figure.clientHeight) < 1.6;"))
cut("    // Vierfach abgetastete Zeichenfläche für die Nachbearbeitung", "    this.warmTarget.dispose();", """    // Hell: kein Lichtschein, keine Nachbearbeitung (auf hellem Grund wuerde alles milchig). Die Kantenglaettung
    // macht der Renderer selbst (antialias). Spart am Handy eine volle Zwischenflaeche.
    this.composer = null;
    this.bloom = { enabled: false };
    this.resize();
""")
sub("    this.renderer.setRenderTarget(this.warmTarget);\n    await this.renderer.compileAsync(",
    keep("    this.renderer.setRenderTarget(null);\n") + "    await this.renderer.compileAsync(")
sub("    this.composer.setPixelRatio(this.ratio);\n    this.composer.setSize(w, h);\n", "")
sub("this.scene.environmentIntensity = 0.42;", keep("this.scene.environmentIntensity = 0.6;"))

# ───────────────────────── 2 · Schatten, Bildschirmschein ─────────────────────────
sub("new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, opacity: 0.7 }),",
    keep("new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, opacity: 0.32 }),"))

# ───────────────────────── 3 · Gegenstaende wie im Bild ─────────────────────────
GERAETE = r"""/**
 * Werkstoffe des Studios: Silber, Weiss, Grau, Graphit, Schwarz, Glas, Koralle. Jedes Geraet bekommt eigene
 * Exemplare, damit es unabhaengig ein- und ausgeblendet werden kann.
 */
function studio() {
  return {
    silver: new THREE.MeshStandardMaterial({ color: 0xd9dadd, metalness: 0.7, roughness: 0.28 }),
    white: new THREE.MeshStandardMaterial({ color: 0xd9d9dc, roughness: 0.5 }),
    pale: new THREE.MeshStandardMaterial({ color: 0xe6e7e9, roughness: 0.75 }),
    grey: new THREE.MeshStandardMaterial({ color: 0x5c5e63, metalness: 0.3, roughness: 0.5 }),
    graphite: new THREE.MeshStandardMaterial({ color: 0x3d3f44, metalness: 0.35, roughness: 0.42 }),
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
  const body = new THREE.MeshStandardMaterial({ color: 0xdcdcde, metalness: 0.6, roughness: 0.3 });
  const W = 2.5, D = 2.5, H = 1.15, R = 0.36;
  add(g, slab(W, D, H, R), body, 0, H / 2 + 0.04, 0).rotation.x = -Math.PI / 2;
  add(g, new THREE.CylinderGeometry(W * 0.36, W * 0.36, 0.045, 64), m.pale, 0, 0.022, 0).castShadow = false;
  const F = D / 2 + 0.003;
  for (const x of [-0.72, -0.56]) add(g, slab(0.1, 0.045, 0.012, 0.02), m.black, x, 0.26, F).castShadow = false;
  add(g, slab(0.32, 0.03, 0.012, 0.012), m.black, -0.22, 0.26, F).castShadow = false;
  add(g, new THREE.CircleGeometry(0.018, 16), m.coral, 0.85, 0.26, F).castShadow = false;
  addContactShadow(g, shadowTex, 3.2, 3.2);
  // Anschluesse vorn rechts, dort gehen die Kabel ab (im Bild vier Stecker in Koralle)
  g.userData.plugs = [0.35, 0.55, 0.75].map((x) => new THREE.Vector3(x, 0.12, D / 2 + 0.05));
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

"""
sub("/**\n * Baut den Server-Schrank", keep(GERAETE) + "/**\n * Baut den Server-Schrank")
# add() mit Werkstoff null: den Werkstoff der uebergebenen Flaeche behalten
sub("""function add(parent, geo, mat, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(geo, mat);""", keep("""function add(parent, geo, mat, x = 0, y = 0, z = 0) {
  const m = geo.isMesh ? geo : new THREE.Mesh(geo, mat);"""))

# ───────────────────────── 4 · Knoten und Boden ─────────────────────────
swap_function("buildDock", r"""function buildDock(spotTex) {
  // Weisser Knoten mit Klarlack und leuchtendem Ring in Koralle, wie im Bild.
  const group = new THREE.Group();
  const shell = new THREE.MeshPhysicalMaterial({ color: 0xfbfbfb, roughness: 0.3, clearcoat: 0.7, clearcoatRoughness: 0.2 });
  const inner = new THREE.MeshStandardMaterial({ color: 0xf0f0f1, roughness: 0.45 });
  add(group, new THREE.CylinderGeometry(DOCK_R - 0.05, DOCK_R, 0.2, 96), shell, 0, 0.1, 0);
  add(group, new THREE.TorusGeometry(DOCK_R - 0.06, 0.05, 14, 96), shell, 0, 0.2, 0).rotation.x = Math.PI / 2;
  add(group, new THREE.CylinderGeometry(DOCK_R - 0.1, DOCK_R - 0.1, 0.012, 96), inner, 0, 0.22, 0).castShadow = false;
  const glowMat = new THREE.MeshBasicMaterial({ color: ACCENT, transparent: true });
  const ring = add(group, new THREE.TorusGeometry(DOCK_R * 0.5, 0.035, 12, 96), glowMat, 0, 0.23, 0);
  ring.rotation.x = Math.PI / 2;
  ring.castShadow = false;
  const haloMat = new THREE.MeshBasicMaterial({ map: spotTex, color: ACCENT, transparent: true, opacity: 0.16, depthWrite: false });
  const halo = add(group, new THREE.PlaneGeometry(DOCK_R * 1.7, DOCK_R * 1.7), haloMat, 0, 0.234, 0);
  halo.rotation.x = -Math.PI / 2;
  halo.castShadow = false;
  return { group, glow: [glowMat, haloMat], spine: null };
}""")

swap_function("buildFloor", r"""function buildFloor() {
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
}""")

# ───────────────────────── 5 · Leitungen: weiss, Stecker Koralle ─────────────────────────
sub("  const y = kind === 'thin' ? 0.016 : 0.024;", keep("  const y = 0.045;"))
sub("dir.clone().multiplyScalar(DOCK_R + 0.02).setY(0.06),", keep("dir.clone().multiplyScalar(DOCK_R + 0.04).setY(0.09),"))
sub("const geo = new THREE.TubeGeometry(curve, TUBULAR, lit ? 0.021 : kind === 'thin' ? 0.011 : 0.018, RADIAL, false);",
    keep("const geo = new THREE.TubeGeometry(curve, TUBULAR, 0.04, RADIAL, false);"))
sub("""    ? new THREE.MeshBasicMaterial({ color: new THREE.Color(ACCENT).multiplyScalar(1.35) })
    : new THREE.MeshStandardMaterial({ color: kind === 'thin' ? 0x23262a : 0x4b5159, roughness: 0.5, metalness: 0.2 });""",
    keep("""    ? new THREE.MeshStandardMaterial({ color: 0xf6f6f7, roughness: 0.5 })
    : new THREE.MeshStandardMaterial({ color: 0xf6f6f7, roughness: 0.5 });   // weiss wie im Bild"""))
sub("const plugMat = new THREE.MeshStandardMaterial({ color: 0x1b1d20, metalness: 0.4, roughness: 0.5 });",
    keep("const plugMat = new THREE.MeshBasicMaterial({ color: ACCENT });"))
sub("const plug = add(parent, new THREE.BoxGeometry(0.07, 0.05, 0.1), plugMat, from.x, Math.max(0.03, from.y), from.z);",
    keep("const plug = add(parent, new THREE.BoxGeometry(0.11, 0.09, 0.22), plugMat, from.x, Math.max(0.05, from.y), from.z);"))
sub("const jack = add(parent, new THREE.BoxGeometry(0.1, 0.06, 0.08), plugMat, dir.x * (DOCK_R + 0.01), 0.05, dir.z * (DOCK_R + 0.01));",
    keep("const jack = add(parent, new THREE.BoxGeometry(0.2, 0.1, 0.12), plugMat, dir.x * (DOCK_R + 0.04), 0.09, dir.z * (DOCK_R + 0.04));"))

# ───────────────────────── 6 · Aufbau: Licht, Belegung, Leitungsplan, Umriss ─────────────────────────
sub("""    const key = new THREE.DirectionalLight(0xffffff, 1.25);
    key.position.set(-6, 10, 7);""", keep("""    // Weiches Studiolicht: Himmel-Boden-Licht als Grundhelligkeit, ein weisses Fuehrungslicht fuer die Schatten.
    this.scene.add(new THREE.HemisphereLight(0xffffff, 0xb9babd, 0.5));
    const key = new THREE.DirectionalLight(0xffffff, 0.8);
    key.position.set(-2.5, 14, 4.5);"""))
sub("Object.assign(key.shadow.camera, { left: -8, right: 8, top: 8, bottom: -8, near: 1, far: 30 });",
    keep("Object.assign(key.shadow.camera, { left: -12, right: 12, top: 12, bottom: -12, near: 1, far: 40 });"))
sub("key.shadow.radius = 5;", keep("key.shadow.radius = 14;"))
sub("const fill = new THREE.DirectionalLight(0xbfd6e6, 0.5);", keep("const fill = new THREE.DirectionalLight(0xffffff, 0.22);"))
sub("const rim = new THREE.DirectionalLight(0x9fdcf5, 0.9);", keep("const rim = new THREE.DirectionalLight(0xffffff, 0.45);"))
cut("    this.lock = buildLock();", "    // Am Handy sind die Bildschirme", """    // Kein Schloss und kein Kern (das Bild hat nur den Knoten); Platzhalter fuer den Ablauf
    this.lock = { group: new THREE.Group(), face: new THREE.Group(), glow: [] };
    this.gate = 0;
    this.core = { update() {} };
""")
cut("    const placed = [", "    this.rack = rack;\n", r"""    // Bilder aus dem alten Standbild (tex/, deckende JPG). Fehlt eines, bleibt die Flaeche dunkel.
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
    const [camera, display, box, tablet, grade, clapper, , prints] = this.devices.map((d) => d.obj);
""", include_end=True)
cut("    const plan = [", "    this.cables = [];", """    const plan = [
      [world(camera, camera.userData.plug), 0.6, 'grey', 0.0],
      [world(display, display.userData.plug), 0.5, 'grey', 0.06],
      [world(box, box.userData.plugs[0]), -0.25, 'grey', 0.12],
      [world(box, box.userData.plugs[1]), -0.1, 'grey', 0.15],
      [world(box, box.userData.plugs[2]), 0.05, 'grey', 0.18],
      [world(tablet, tablet.userData.plug), -0.3, 'grey', 0.24],
      [world(grade, grade.userData.plug), -0.4, 'grey', 0.3],
      [world(clapper, clapper.userData.plug), 0.35, 'grey', 0.36],
      [world(prints, prints.userData.plug), 0.4, 'grey', 0.42],
    ];
""")
cut("      const mate = buildCable(", "      this.cables.push(mate);\n", "", include_end=True)
sub("s.scale.setScalar((cable.lit ? 0.4 : 0.28) * (0.55 + 0.45 * k));", keep("s.scale.setScalar(0.32 * (0.55 + 0.45 * k));"))
sub("map: spot, color: cable.lit ? 0xeafaff : ACCENT,", keep("map: spot, color: ACCENT,"))
sub("new THREE.SpriteMaterial({ map: spot, color: 0xeafaff,", keep("new THREE.SpriteMaterial({ map: spot, color: ACCENT,"))
sub("this.coreAnchor = new THREE.Vector3(1.12, CORE_Y + CORE_R * 0.72, 0);", keep("this.coreAnchor = new THREE.Vector3(0, 1, 0);"))

sub("    lights.add(this.dust);\n    await this.prime(lights);\n  }",
    "    lights.add(this.dust);\n    await this.prime(lights);\n" + keep(r"""
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
      this.bounds.push({ p: new THREE.Vector3(Math.cos(a) * DOCK_R, 0.25, Math.sin(a) * DOCK_R), label: false });
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
    return { d: hi, target, dir };""") + "\n  }")

# Keine Beschriftungen (das Bild hat keine)
sub("    for (const d of this.devices) make(texts[d.key], d.anchor, d.at + 0.16);\n    make(texts.core, this.coreAnchor, 0.86);\n",
    keep("    // V5: keine Beschriftungen — das Bild davor hat keine, und Nicky wollte es ruhiger.\n    void make; void texts;\n"))

# ───────────────────────── 7 · Ablauf ─────────────────────────
cut("    // Kamera: fährt beim Aufbau heran und um die Szene", "    this.lock.face.rotation.y = az;", """    // Kamera: Blick von vorn oben wie im Bild (gut 35 Grad), beim Aufbau ein wenig hoeher und seitlich, danach
    // ein kaum merkliches Pendeln. Der Abstand kommt in jedem Bild aus fit(): nichts wird angeschnitten.
    const k = smooth(0, 1, p);
    const az = (mix(-7, 0, k) + 1.5 * Math.sin(t * 0.12) * k + this.pointer.sx * 2) * DEG;
    const el = (mix(42, 35, k) - this.pointer.sy * 1.2) * DEG;
    const view = this.fit(az, el);
    this.camera.position.copy(view.target).addScaledVector(view.dir, view.d * mix(1.08, 1, k));
    this.camera.lookAt(view.target);
    this.camera.updateMatrixWorld();
""")
sub("this.coreLight.intensity = coreReveal * (30 + this.energy * 18);", keep("this.coreLight.intensity = 0;"))
sub("d.obj.scale.setScalar(mix(0.96, 1, a));", keep("d.obj.scale.setScalar(mix(0.96, 1, a) * d.size);"))
sub("fade(this.lock.group, smooth(0.5, 0.7, p));", keep("fade(this.lock.group, 0);"))
sub("this.dust.material.opacity = 0.32 * smooth(0.2, 0.8, p);", keep("this.dust.visible = false;"))
sub("r.visible = k < 1 && coreReveal > 0.5;", keep("r.visible = false;                         // ohne Kern keine steigenden Lichtpunkte"))
cut("    // Leuchten am Server: ein paar wechseln je Runde die Farbe", "\n\n", "")
sub("for (const m of this.dock.glow) m.opacity = (m.map ? 0.16 : 1) * smooth(0.5, 0.75, p) * (m.map ? 1 + this.energy : 1);",
    keep("for (const m of this.dock.glow) m.opacity = (m.map ? 0.32 : 1) * smooth(0.3, 0.5, p) * (m.map ? 1 + this.energy * 1.5 : 1);"))

# ───────────────────────── 8 · Farben: Koralle statt Blau, Grau statt Graublau ─────────────────────────
def shift(r, g, b):
    h, sat, v = colorsys.rgb_to_hsv(r / 255, g / 255, b / 255)
    if not (150 / 360 <= h <= 270 / 360) or sat < 0.04:
        return (r, g, b), False
    if sat >= 0.3 and v >= 0.55:
        return tuple(round(x * 255) for x in colorsys.hsv_to_rgb(CORAL_H, 0.62, max(v, 0.85))), True
    lum = round(0.2126 * r + 0.7152 * g + 0.0722 * b)
    return (lum, lum, lum), True


def hx(m):
    v = int(m.group(1), 16); c, ch = shift(v >> 16, (v >> 8) & 255, v & 255)
    return "0x%02x%02x%02x" % c if ch else m.group(0)


def trip(m):
    c, ch = shift(*map(int, m.group(2, 3, 4)))
    return f"{m.group(1)}{c[0]},{c[1]},{c[2]}" if ch else m.group(0)


def hs(m):
    h = m.group(1); c, ch = shift(int(h[:2], 16), int(h[2:4], 16), int(h[4:], 16))
    return "#%02x%02x%02x" % c if ch else m.group(0)


parts = re.split(r"(/\*KEEP\{\*/.*?/\*\}KEEP\*/)", s, flags=re.S)
for n, part in enumerate(parts):
    if part.startswith(KEEP_A):
        part = part[len(KEEP_A):-len(KEEP_B)]
    else:
        part = part.replace("blending: THREE.AdditiveBlending", "blending: THREE.NormalBlending")
        part = re.sub(r"new THREE\.Color\(ACCENT\)\.multiplyScalar\(\s*1(?:\.\d+)?\s*\)", "new THREE.Color(ACCENT)", part)
    part = re.sub(r"0x([0-9a-fA-F]{6})\b", hx, part)
    part = re.sub(r"(rgba?\(\s*|')(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})", trip, part)
    part = re.sub(r"#([0-9a-fA-F]{6})\b", hs, part)
    parts[n] = part
s = "".join(parts)

DST.write_text(s)
left = []
for a, b in re.findall(r"0x([0-9a-f]{6})\b|#([0-9a-f]{6})\b", s, re.I):
    hexv = a or b; r, g, bb = int(hexv[:2], 16), int(hexv[2:4], 16), int(hexv[4:], 16)
    h, sat, v = colorsys.rgb_to_hsv(r / 255, g / 255, bb / 255)
    if sat >= 0.04 and (150 / 360 <= h <= 270 / 360 or 18 / 360 <= h <= 45 / 360):
        left.append(hexv)
print("geschrieben:", DST.relative_to(ROOT), "| Blau/Orange uebrig:", sorted(set(left)) or "keins")
