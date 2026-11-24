#!/usr/bin/env python3
"""Systembild V4 fuer consulting.nicolaslekai.com: die O&S-Szene als helles Filmstudio in Koralle.

Verlauf:
  V3 (24.11.2026, frueh): "make it more like a movie production suite in our case" -> Filmgeraete, Orange, dunkel.
  Danach ersetzt durch ein flaches Bild (Nicky: "brighter images", "apple design style vibes").
  V4 (24.11.2026, abends), Nicky zum Bild: "I don't like how it's cut off, can we attempt to build this as a 3D
  model that works in the browser like in the Otter und Stein website" — am Handy war die Kamera links
  abgeschnitten und das Bild endete hart.

Was dieses Skript tut: nimmt system3d.src.js von otterstein.ai (dort NIE etwas aendern) und schreibt
preview/assets/system3d/system3d.src.js:
  - Farbe: Akzent Koralle #ff7f61 (Farbton ~11 Grad). Kraeftige Blautoene -> Koralle, alle uebrigen Blau-
    und Graublautoene -> neutrales Grau gleicher Helligkeit. Kein Orange, kein Dunkelrot, kein Blau.
  - Hell: Grund #f5f5f7 (wie .nl-system in koralle-grau.css), Studiolicht, weiche Schatten, silberne Geraete,
    kein Lichtschein (Bloom) und keine Nachbearbeitung; leuchtende Teile mischen normal statt additiv.
  - Inhalt wie das Bild davor: Kinokamera auf Stativ, Schnittplatz mit Timeline, Render-Rechner, Grading-Pult,
    Tablet mit Storyboard, Telefon am Set; alle mit Leitungen am Kern (Projekt-Gedaechtnis), Signale laufen.
  - Kamera: fit() rechnet in jedem Bild den kleinsten Abstand aus, bei dem alle Geraete, der Kern und die
    Beschriftungen mit Rand im Bild stehen — bei jedem Seitenverhaeltnis, nichts wird angeschnitten.
Danach:
    python3 tools/system3d_film.py && preview/assets/system3d/bauen.sh
"""
import colorsys, re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = Path.home() / "Documents/Claude/Projects/Otter and Stein/assets/system3d/system3d.src.js"
DST = ROOT / "preview/assets/system3d/system3d.src.js"
CORAL_H = 11.4 / 360          # #ff7f61
KEEP_A, KEEP_B = "/*KEEP{*/", "/*}KEEP*/"   # eigene Bloecke: dort dreht die Farbumrechnung nichts

s = SRC.read_text()


def sub(old, new, count=1):
    """Ersetzt genau eine (oder count) Fundstelle; bricht ab, wenn die O&S-Quelle sich geaendert hat."""
    global s
    assert old in s, f"nicht gefunden: {old[:80]!r}"
    s = s.replace(old, new, count)


def keep(code):
    return KEEP_A + code + KEEP_B


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
s = keep("""/* Systembild consulting.nicolaslekai.com · V4 hell · 24.11.2026 — erzeugt von tools/system3d_film.py aus der
   Szene von otterstein.ai. Nicht von Hand aendern: Skript anpassen, neu erzeugen, bauen.sh.
   Helles Filmstudio in Koralle: Kinokamera, Schnittplatz, Render-Rechner, Grading-Pult, Storyboard-Tablet und
   Telefon am Set haengen mit Leitungen am Projekt-Gedaechtnis in der Mitte. Die Kamera passt sich in jedem Bild
   so ein, dass nichts angeschnitten wird (fit). */
""") + s
for imp in ["import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';\n",
            "import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';\n",
            "import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';\n",
            "import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';\n"]:
    sub(imp, "")
sub("const ACCENT = 0x8dd2ec;               // Bergwind-Hellblau, wie --akzent-hell in style.css",
    keep("const ACCENT = 0xff7f61;               // Koralle, wie --akzent-hell in koralle-grau.css"))
sub("const CORE_Y = 2.3;                    // Höhe der Kernmitte über dem Boden",
    keep("const CORE_Y = 1.85;                   // Hoehe der Kernmitte; tiefer als bei O&S, der Kern ist kleiner"))
sub("const GROUND = 0x1c1c1e;               // Seitengrund, wie --dark in style.css",
    keep("const GROUND = 0xf5f5f7;               // Grund des hellen Bandes, wie .nl-system in koralle-grau.css\n"
         "const CORE_SCALE = 0.62;              // Kern kleiner als bei O&S: im hellen Studio sollen die Geraete tragen"))
sub("const A = '#8dd2ec'", keep("const A = '#ff7f61'"))

# ───────────────────────── 2 · Werkstoffe, Schatten, Bildschirmschein ─────────────────────────
sub("""    alu: new THREE.MeshStandardMaterial({ color: 0x8b9097, metalness: 1, roughness: 0.34 }),
    dark: new THREE.MeshStandardMaterial({ color: 0x15171a, metalness: 0.5, roughness: 0.55 }),
    key: new THREE.MeshStandardMaterial({ color: 0x1b1d21, metalness: 0.2, roughness: 0.62 }),
    glass: new THREE.MeshStandardMaterial({ color: 0x050607, metalness: 0.2, roughness: 0.12 }),""",
    keep("""    alu: new THREE.MeshStandardMaterial({ color: 0xd3d5d9, metalness: 1, roughness: 0.3 }),       // Silber
    dark: new THREE.MeshStandardMaterial({ color: 0x2b2c30, metalness: 0.45, roughness: 0.5 }),
    key: new THREE.MeshStandardMaterial({ color: 0xf2f2f4, metalness: 0, roughness: 0.55 }),       // helle Tasten
    glass: new THREE.MeshStandardMaterial({ color: 0x0b0b0c, metalness: 0.2, roughness: 0.12 }),"""))
# Die Glasschicht ueber den Bildschirmen bleibt additiv (Spiegelung auf dunklem Bild); alles andere mischt normal.
sub("transparent: true, opacity: 0.5, depthWrite: false, blending: THREE.AdditiveBlending,",
    keep("transparent: true, opacity: 0.32, depthWrite: false, blending: THREE.AdditiveBlending,"))
sub("new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, opacity: 0.7 }),",
    keep("new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, opacity: 0.4 }),"))
swap_function("addScreenSpill", """function addScreenSpill() {
  // Hell: kein Schein der Bildschirme auf dem Boden — auf hellem Grund saehe er wie ein Fleck aus.
}""")
# Tablet und Telefon in Silber, Schreibunterlage am Schnittplatz hellgrau
sub("  m.alu.color.setHex(0x3a3d43);\n  m.alu.roughness = 0.42;", keep("  m.alu.color.setHex(0xc4c7cc);\n  m.alu.roughness = 0.34;"))
sub("const mat = add(g, new THREE.ShapeGeometry(roundedShape(1.7, 0.56, 0.05)), m.dark, 0.12, 0.004, 0.72);",
    keep("const mat = add(g, new THREE.ShapeGeometry(roundedShape(1.7, 0.56, 0.05)), new THREE.MeshStandardMaterial({ color: 0xdedfe2, roughness: 0.9 }), 0.12, 0.004, 0.72);"))

# ───────────────────────── 3 · Bildschirm-Inhalte: Timeline, Grading, Storyboard ─────────────────────────
NEU_SCREENS = r"""  } else if (kind === 'timeline') {
    // Schnitt: oben Quelle und Programm (Abendhimmel in Koralle-Grau), darunter Spuren mit Clips, Abspielkopf Koralle
    rr(g, 0, 0, w, 5 * u, 0, '#1b1b1d');
    for (let i = 0; i < 3; i++) rr(g, (2 + i * 2.2) * u, 1.8 * u, 1.4 * u, 1.4 * u, u, '#4a4b4f');
    const vh = h * 0.42;
    [[2, 47], [51, 47]].forEach(([x, vw], i) => {
      rr(g, x * u, 7 * u, vw * u, vh, 0.8 * u, '#050505');
      const sky = g.createLinearGradient(0, 7 * u, 0, 7 * u + vh);
      sky.addColorStop(0, '#2c2c30'); sky.addColorStop(0.62, i ? '#c9897b' : '#9a7a74'); sky.addColorStop(1, '#3a3638');
      rr(g, (x + 1) * u, 8 * u, (vw - 2) * u, vh - 2 * u, 0.6 * u, sky);
      g.fillStyle = 'rgba(12,12,14,0.85)';
      g.fillRect((x + 1) * u, 8 * u + vh * 0.7, (vw - 2) * u, vh * 0.3 - 2 * u);
      g.beginPath(); g.ellipse((x + vw * (i ? 0.6 : 0.42)) * u, 8 * u + vh * 0.62, vh * 0.09, vh * 0.3, 0, 0, Math.PI * 2); g.fill();
    });
    const ty = 9 * u + vh, th = h - ty - 2 * u;
    rr(g, 2 * u, ty, 96 * u, th, 0.8 * u, '#161618');
    const tracks = 5, tH = th / (tracks + 0.6);
    for (let t = 0; t < tracks; t++) {
      const y = ty + 0.6 * tH + t * tH;
      rr(g, 2.5 * u, y + tH * 0.15, 6 * u, tH * 0.7, 0.5 * u, '#26272a');
      let x = 9.5 * u;
      while (x < 96 * u) {
        const cw = (6 + rnd() * 16) * u;
        if (rnd() > 0.18) rr(g, x, y + tH * 0.15, Math.min(cw, 97 * u - x), tH * 0.7, 0.6 * u, t < 3 ? (rnd() > 0.72 ? A : '#5d5f64') : '#3a3b3f');
        x += cw + 0.6 * u;
      }
    }
    g.fillStyle = A; g.fillRect(58 * u, ty, 0.35 * u, th);
    g.beginPath(); g.moveTo(56.8 * u, ty); g.lineTo(59.5 * u, ty); g.lineTo(58.15 * u, ty + 1.6 * u); g.fill();
  } else if (kind === 'grade') {
    // Grading: Bild oben links, Waveform rechts, drei Farbraeder unten (grau mit Punkt in Koralle)
    rr(g, 0, 0, w, h, 0, '#141416');
    const vh = h * 0.5;
    const sky = g.createLinearGradient(0, 3 * u, 0, 3 * u + vh);
    sky.addColorStop(0, '#2c2c30'); sky.addColorStop(0.65, '#c9897b'); sky.addColorStop(1, '#3a3638');
    rr(g, 3 * u, 3 * u, 56 * u, vh, 0.8 * u, sky);
    g.fillStyle = 'rgba(12,12,14,0.85)'; g.fillRect(3 * u, 3 * u + vh * 0.72, 56 * u, vh * 0.28);
    g.beginPath(); g.ellipse(26 * u, 3 * u + vh * 0.62, vh * 0.1, vh * 0.32, 0, 0, Math.PI * 2); g.fill();
    rr(g, 62 * u, 3 * u, 35 * u, vh, 0.8 * u, '#050505');
    for (let i = 0; i < 320; i++) {
      const x = 63 * u + rnd() * 33 * u, base = 3 * u + vh * (0.2 + 0.25 * Math.sin((x / w) * 9) + 0.4 * rnd());
      g.fillStyle = i % 3 ? 'rgba(220,220,222,0.55)' : A; g.fillRect(x, base, 0.4 * u, 0.4 * u);
    }
    const wy = 6 * u + vh, wr = Math.min(12 * u, (h - wy - 3 * u) / 2.2);
    for (let i = 0; i < 3; i++) {
      const cx = (18 + i * 32) * u, cy = wy + wr * 1.1;
      g.fillStyle = '#5b5d62'; g.beginPath(); g.arc(cx, cy, wr, 0, Math.PI * 2); g.fill();
      g.fillStyle = '#1e1f22'; g.beginPath(); g.arc(cx, cy, wr * 0.8, 0, Math.PI * 2); g.fill();
      g.strokeStyle = '#3a3b3f'; g.lineWidth = 0.3 * u;
      g.beginPath(); g.moveTo(cx - wr * 0.8, cy); g.lineTo(cx + wr * 0.8, cy); g.moveTo(cx, cy - wr * 0.8); g.lineTo(cx, cy + wr * 0.8); g.stroke();
      g.fillStyle = i === 1 ? A : '#d6d7da'; g.beginPath(); g.arc(cx + wr * 0.28 * (i - 1 || 0.6), cy - wr * 0.22, wr * 0.13, 0, Math.PI * 2); g.fill();
    }
  } else if (kind === 'scopes') {
    // Breiter Streifen am Grading-Pult: Farbrad, Waveform, Farbrad
    rr(g, 0, 0, w, h, 0, '#111113');
    const ph = h - 4 * u, pw = 31 * u;
    for (let i = 0; i < 3; i++) {
      const x = (1.5 + i * 32.5) * u, y = 2 * u;
      rr(g, x, y, pw, ph, u, '#1c1d20');
      if (i === 1) {
        for (let k = 0; k < 260; k++) {
          const px = x + 1.5 * u + rnd() * (pw - 3 * u), py = y + ph * (0.25 + 0.22 * Math.sin(px / w * 14) + 0.38 * rnd());
          g.fillStyle = k % 3 ? 'rgba(220,220,222,0.6)' : A; g.fillRect(px, py, 0.35 * u, 0.35 * u);
        }
      } else {
        for (const f of [0.27, 0.73]) {
          const cx = x + pw * f, cy = y + ph / 2, r = ph * 0.36;
          g.fillStyle = '#5b5d62'; g.beginPath(); g.arc(cx, cy, r, 0, Math.PI * 2); g.fill();
          g.fillStyle = '#1e1f22'; g.beginPath(); g.arc(cx, cy, r * 0.8, 0, Math.PI * 2); g.fill();
          g.fillStyle = f < 0.5 && i === 0 ? A : '#d6d7da'; g.beginPath(); g.arc(cx + r * 0.2, cy - r * 0.2, r * 0.16, 0, Math.PI * 2); g.fill();
        }
      }
    }
  } else if (kind === 'board') {
    // Storyboard auf hellem Papier: sechs Bildfelder mit Bleistiftlinien, eines in Koralle markiert
    rr(g, 0, 0, w, h, 0, '#f7f7f5');
    rr(g, 0, 0, w, 8 * u, 0, '#ececee');
    rr(g, 5 * u, 3 * u, 22 * u, 2.2 * u, u, '#9a9ca1');
    rr(g, w - 14 * u, 2.4 * u, 9 * u, 3.4 * u, 1.7 * u, A);
    for (let i = 0; i < 6; i++) {
      const x = (5 + (i % 2) * 46) * u, y = (12 + Math.floor(i / 2) * 29) * u;
      rr(g, x, y, 43 * u, 21 * u, 1.2 * u, '#ffffff');
      g.strokeStyle = '#c9cbcf'; g.lineWidth = 0.35 * u; g.strokeRect(x, y, 43 * u, 21 * u);
      g.strokeStyle = '#55585d'; g.lineWidth = 0.45 * u;
      g.beginPath(); g.moveTo(x + 4 * u, y + 17 * u); g.lineTo(x + (14 + rnd() * 10) * u, y + (6 + rnd() * 6) * u); g.lineTo(x + 39 * u, y + 15 * u); g.stroke();
      g.beginPath(); g.ellipse(x + (24 + rnd() * 8) * u, y + 11 * u, 2.2 * u, 5 * u, 0, 0, Math.PI * 2); g.stroke();
      if (i === 3) { g.strokeStyle = A; g.lineWidth = 0.9 * u; g.strokeRect(x - 0.6 * u, y - 0.6 * u, 44.2 * u, 22.2 * u); }
      rr(g, x, y + 23 * u, (14 + rnd() * 18) * u, 1.4 * u, u, '#c4c6ca');
    }
  } else {                                             // phone"""
sub("  } else {                                             // phone", keep(NEU_SCREENS))

# ───────────────────────── 4 · Neue Geraete: Kamera, Render-Rechner, Grading-Pult ─────────────────────────
GERAETE = r"""/**
 * Kinokamera auf Stativ, wie im Bild davor: Gehaeuse in Graphit mit silbernem Kaefig und Griff, Objektiv mit
 * Ringen, Kompendium mit Klappe, Stangen mit Schaerfezieher, Kontrollmonitor, Tally in Koralle. Darunter ein
 * Videokopf und drei silberne Doppelrohr-Beine mit Bodenspinne. Eine Leitung laeuft vom Gehaeuse zum Boden.
 * @returns {THREE.Group} Die Kamera; ``userData.plug`` und ``userData.label`` wie bei den anderen Geraeten.
 */
function buildCamera(screenMap, shadowTex) {
  const root = new THREE.Group();
  const SC = 1.55;                                      // groesser als echt, sonst verschwindet sie neben dem Schnittplatz
  const g = new THREE.Group();
  g.scale.setScalar(SC);
  root.add(g);
  const m = deviceMaterials(screenMap);
  const body = new THREE.MeshStandardMaterial({ color: 0x3d3f44, metalness: 0.5, roughness: 0.4 });
  const black = new THREE.MeshStandardMaterial({ color: 0x17181a, metalness: 0.3, roughness: 0.48 });
  const rubber = new THREE.MeshStandardMaterial({ color: 0x2a2b2e, metalness: 0, roughness: 0.85 });
  const coral = new THREE.MeshBasicMaterial({ color: ACCENT });   // Koralle ungeschattet: so bleibt sie Koralle
  const turn = (mesh) => { mesh.rotation.x = Math.PI / 2; return mesh; };
  const H = 1.16;                                       // Hoehe der Objektivachse
  const cam = new THREE.Group();
  cam.position.set(0, H, -0.04);
  add(cam, slab(0.3, 0.3, 0.52, 0.05), body, 0, 0, -0.06);                                   // Gehaeuse
  add(cam, slab(0.24, 0.19, 0.1, 0.02), black, 0, -0.01, -0.37);                            // Akku
  add(cam, new THREE.BoxGeometry(0.32, 0.02, 0.46), m.alu, 0, 0.162, -0.06);               // Kaefig oben
  for (const x of [-0.161, 0.161]) add(cam, new THREE.BoxGeometry(0.012, 0.24, 0.4), m.alu, x, 0, -0.06);
  turn(add(cam, new THREE.CylinderGeometry(0.022, 0.022, 0.42, 16), m.alu, 0, 0.27, -0.04)); // Griff
  for (const z of [0.12, -0.2]) add(cam, new THREE.BoxGeometry(0.035, 0.1, 0.035), m.alu, 0, 0.215, z);
  // Objektiv
  turn(add(cam, new THREE.CylinderGeometry(0.1, 0.1, 0.05, 40), m.alu, 0, 0, 0.225));
  turn(add(cam, new THREE.CylinderGeometry(0.098, 0.09, 0.4, 40), black, 0, 0, 0.45));
  for (const [z, r, mat] of [[0.33, 0.106, rubber], [0.46, 0.108, m.alu], [0.58, 0.112, rubber]]) turn(add(cam, new THREE.CylinderGeometry(r, r, 0.045, 40), mat, 0, 0, z));
  turn(add(cam, new THREE.CylinderGeometry(0.118, 0.11, 0.04, 40), black, 0, 0, 0.66));
  add(cam, new THREE.CircleGeometry(0.095, 40), m.glass, 0, 0, 0.681).castShadow = false;
  // Kompendium mit oberer Klappe
  const mb = new THREE.Group();
  mb.position.set(0, 0, 0.8);
  add(mb, new THREE.BoxGeometry(0.44, 0.03, 0.2), black, 0, 0.165, 0);
  add(mb, new THREE.BoxGeometry(0.44, 0.03, 0.2), black, 0, -0.165, 0);
  for (const x of [-0.205, 0.205]) add(mb, new THREE.BoxGeometry(0.03, 0.36, 0.2), black, x, 0, 0);
  add(mb, new THREE.BoxGeometry(0.44, 0.008, 0.2), black, 0, 0.2, 0.1).rotation.x = -0.35;
  cam.add(mb);
  // Stangen unter dem Objektiv, Schaerfezieher
  for (const x of [-0.06, 0.06]) turn(add(cam, new THREE.CylinderGeometry(0.011, 0.011, 0.8, 10), m.alu, x, -0.19, 0.28));
  add(cam, new THREE.BoxGeometry(0.06, 0.12, 0.07), black, 0.13, -0.14, 0.46);
  add(cam, new THREE.CylinderGeometry(0.045, 0.045, 0.03, 24), m.alu, 0.175, -0.14, 0.46).rotation.z = Math.PI / 2;
  // Kontrollmonitor links am Kaefig, zum Betrachter gedreht
  const mon = new THREE.Group();
  mon.position.set(-0.32, 0.3, 0.04);
  mon.rotation.set(-0.1, -1.15, 0);
  add(mon, slab(0.36, 0.24, 0.035, 0.025), black, 0, 0, 0);
  add(mon, screenGeometry(0.33, 0.21, 0.012), m.screen, 0, 0, 0.0182).castShadow = false;
  add(mon, screenGeometry(0.33, 0.21, 0.012), m.sheen, 0, 0, 0.0192).castShadow = false;
  cam.add(mon);
  add(cam, new THREE.CylinderGeometry(0.012, 0.012, 0.22, 8), m.alu, -0.22, 0.22, 0.04).rotation.z = 0.95;
  add(cam, new THREE.BoxGeometry(0.03, 0.018, 0.01), new THREE.MeshBasicMaterial({ color: ACCENT }), 0.09, 0.1, 0.205).castShadow = false;   // Tally
  g.add(cam);
  // Videokopf, Schwenkarm, Mittelsaeule
  add(g, new THREE.BoxGeometry(0.2, 0.04, 0.3), black, 0, H - 0.175, -0.04);
  add(g, new THREE.CylinderGeometry(0.1, 0.12, 0.13, 28), black, 0, H - 0.255, -0.04);
  const pan = add(g, new THREE.CylinderGeometry(0.014, 0.014, 0.55, 10), m.alu, -0.1, H - 0.3, -0.36);
  pan.rotation.set(1.15, 0, 0.3);
  const top = new THREE.Vector3(0, H - 0.33, -0.04);
  add(g, new THREE.CylinderGeometry(0.09, 0.07, 0.07, 24), black, top.x, top.y, top.z);
  const up = new THREE.Vector3(0, 1, 0);
  const tube = (a, b, r, mat) => {
    const mesh = add(g, new THREE.CylinderGeometry(r, r, a.distanceTo(b), 10), mat, (a.x + b.x) / 2, (a.y + b.y) / 2, (a.z + b.z) / 2);
    mesh.quaternion.setFromUnitVectors(up, b.clone().sub(a).normalize());
    return mesh;
  };
  tube(top, new THREE.Vector3(0, 0.5, -0.04), 0.022, black);
  const spider = new THREE.Vector3(0, 0.2, -0.04);
  // Drei Beine aus je zwei Rohren, Klemme auf halber Hoehe, Gummifuss, Bodenspinne
  [0.35, 2.44, 4.53].forEach((a) => {
    const foot = new THREE.Vector3(Math.sin(a) * 0.64, 0.02, -0.04 + Math.cos(a) * 0.64);
    const side = new THREE.Vector3(Math.cos(a), 0, -Math.sin(a)).multiplyScalar(0.022);
    tube(top.clone().add(side), foot.clone().add(side), 0.013, m.alu);
    tube(top.clone().sub(side), foot.clone().sub(side), 0.013, m.alu);
    tube(top.clone().lerp(foot, 0.4), top.clone().lerp(foot, 0.47), 0.042, black);
    tube(top.clone().lerp(foot, 0.04), top.clone().lerp(foot, 0.1), 0.042, black);
    add(g, new THREE.SphereGeometry(0.03, 12, 8), rubber, foot.x, 0.02, foot.z);
    tube(spider, top.clone().lerp(foot, 0.78), 0.008, m.alu);
  });
  // Leitung vom Gehaeuse hinunter zum Boden, dort sitzt der Stecker
  const drop = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.1, H - 0.08, -0.33), new THREE.Vector3(0.2, H - 0.3, -0.36), new THREE.Vector3(0.2, 0.4, -0.2),
    new THREE.Vector3(0.14, 0.05, -0.08), new THREE.Vector3(0.1, 0.02, 0.0),
  ]);
  add(g, new THREE.TubeGeometry(drop, 40, 0.011, 6), coral);
  addContactShadow(g, shadowTex, 1.8, 1.8);
  root.userData.plug = new THREE.Vector3(0.1 * SC, 0.03, 0);
  root.userData.label = new THREE.Vector3(0, (H + 0.52) * SC, 0);
  return root;
}

/**
 * Render-Rechner: ein silberner Kasten mit runder Grundflaeche, vorn zwei Buchsen, ein Kartenschlitz und eine
 * Reihe kleiner Leuchten (sie flackern, siehe pose). Steht fuer den Render-Server.
 * @returns {THREE.Group} ``userData.plugs`` (zwei Ansatzpunkte), ``userData.leds``, ``userData.blink``, ``userData.label``.
 */
function buildRenderBox(shadowTex) {
  const g = new THREE.Group();
  const m = deviceMaterials(null);
  const W = 1.5, D = 1.5, H = 0.72, R = 0.22;
  add(g, slab(W, D, H, R), m.alu, 0, H / 2 + 0.03, 0).rotation.x = -Math.PI / 2;
  add(g, new THREE.CylinderGeometry(W * 0.36, W * 0.36, 0.03, 64), m.dark, 0, 0.015, 0).castShadow = false;
  const F = D / 2 + 0.002;
  for (const x of [-0.5, -0.38]) add(g, slab(0.07, 0.03, 0.01, 0.012), m.dark, x, 0.18, F).castShadow = false;
  add(g, slab(0.2, 0.02, 0.01, 0.008), m.dark, -0.12, 0.18, F).castShadow = false;
  // Luftschlitze unten am Rand, rundum angedeutet durch eine dunkle Fuge
  add(g, new THREE.BoxGeometry(W - 0.5, 0.012, 0.004), m.dark, 0, 0.07, F).castShadow = false;
  const leds = new THREE.InstancedMesh(new THREE.BoxGeometry(0.035, 0.012, 0.006), new THREE.MeshBasicMaterial(), 6);
  const dummy = new THREE.Object3D(), col = new THREE.Color();
  for (let i = 0; i < 6; i++) {
    dummy.position.set(0.3 + i * 0.065, 0.18, F + 0.003);
    dummy.updateMatrix();
    leds.setMatrixAt(i, dummy.matrix);
    leds.setColorAt(i, col.setHex(i % 3 ? 0x9a9ca1 : ACCENT));
  }
  g.add(leds);
  addContactShadow(g, shadowTex, 2.3, 2.3);
  g.userData.leds = leds;
  g.userData.blink = [0, 1, 2, 3, 4, 5];
  g.userData.plugs = [new THREE.Vector3(-W / 2 - 0.01, 0.1, 0.36), new THREE.Vector3(-W / 2 - 0.01, 0.1, 0.12)];
  g.userData.label = new THREE.Vector3(0, H + 0.42, 0);
  return g;
}

/**
 * Grading-Pult: flaches Unterteil in Graphit, drei glaenzende Rollkugeln in silbernen Ringen, Drehregler und
 * Tasten, hinten ein schraeger Bildschirmstreifen mit Farbraedern und Waveform.
 * @returns {THREE.Group} ``userData.plug`` und ``userData.label``.
 */
function buildGradePanel(screenMap, shadowTex) {
  const g = new THREE.Group();
  const m = deviceMaterials(screenMap);
  const shell = new THREE.MeshStandardMaterial({ color: 0x3a3c41, metalness: 0.4, roughness: 0.42 });
  const deck = new THREE.MeshStandardMaterial({ color: 0x232427, metalness: 0.2, roughness: 0.6 });
  const ball = new THREE.MeshPhysicalMaterial({ color: 0x0d0d0e, roughness: 0.12, clearcoat: 1, clearcoatRoughness: 0.08 });
  const W = 2.0, D = 1.1;
  add(g, slab(W, D, 0.12, 0.08), shell, 0, 0.06, 0).rotation.x = -Math.PI / 2;
  add(g, slab(W, 0.42, 0.14, 0.06), shell, 0, 0.19, -D / 2 + 0.21).rotation.x = -Math.PI / 2;
  const plate = add(g, new THREE.ShapeGeometry(roundedShape(W - 0.08, 0.62, 0.05)), deck, 0, 0.1206, 0.2);
  plate.rotation.x = -Math.PI / 2;
  plate.castShadow = false;
  for (const x of [-0.6, 0, 0.6]) {
    add(g, new THREE.TorusGeometry(0.2, 0.034, 14, 48), m.alu, x, 0.128, 0.2).rotation.x = Math.PI / 2;
    add(g, new THREE.SphereGeometry(0.155, 32, 20), ball, x, 0.14, 0.2);
  }
  const dummy = new THREE.Object3D();
  const knobs = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.034, 0.038, 0.05, 20), m.alu, 12);
  for (let i = 0; i < 12; i++) { dummy.position.set(-0.88 + i * 0.16, 0.285, -0.22); dummy.updateMatrix(); knobs.setMatrixAt(i, dummy.matrix); }
  knobs.castShadow = true;
  g.add(knobs);
  const keyMat = new THREE.MeshStandardMaterial({ color: 0x4a4c51, roughness: 0.6 });
  const keys = new THREE.InstancedMesh(new THREE.BoxGeometry(0.1, 0.02, 0.06), keyMat, 14);
  for (let i = 0; i < 14; i++) { dummy.position.set(-0.84 + i * 0.13, 0.128, 0.47); dummy.updateMatrix(); keys.setMatrixAt(i, dummy.matrix); }
  g.add(keys);
  add(g, new THREE.BoxGeometry(0.1, 0.022, 0.06), new THREE.MeshBasicMaterial({ color: ACCENT }), 0.98 - 0.14, 0.13, 0.47).castShadow = false;
  const scr = new THREE.Group();
  scr.position.set(0, 0.25, -0.45);
  scr.rotation.x = -0.5;
  add(scr, slab(1.24, 0.32, 0.04, 0.03), shell, 0, 0.16, 0);
  add(scr, screenGeometry(1.16, 0.26, 0.015), m.screen, 0, 0.16, 0.021).castShadow = false;
  add(scr, screenGeometry(1.16, 0.26, 0.015), m.sheen, 0, 0.16, 0.022).castShadow = false;
  g.add(scr);
  addContactShadow(g, shadowTex, 2.8, 1.8);
  g.userData.plug = new THREE.Vector3(-W / 2 - 0.01, 0.06, -0.15);
  g.userData.label = new THREE.Vector3(0, 0.85, -0.25);
  return g;
}

"""
sub("/**\n * Baut den Server-Schrank", keep(GERAETE) + "/**\n * Baut den Server-Schrank")

# ───────────────────────── 5 · Sockel und Boden, hell ─────────────────────────
swap_function("buildDock", r"""function buildDock(spotTex) {
  // Hell: ein weisser Knoten mit Klarlack und leuchtendem Ring in Koralle, wie im Bild davor; daraus steigt
  // eine schmale Lichtsaeule in den Kern.
  const group = new THREE.Group();
  const shell = new THREE.MeshPhysicalMaterial({ color: 0xfbfbfb, roughness: 0.3, clearcoat: 0.7, clearcoatRoughness: 0.2 });
  const inner = new THREE.MeshStandardMaterial({ color: 0xe9eaec, roughness: 0.5 });
  add(group, new THREE.CylinderGeometry(DOCK_R - 0.05, DOCK_R, 0.16, 96), shell, 0, 0.08, 0);
  add(group, new THREE.TorusGeometry(DOCK_R - 0.06, 0.028, 12, 96), shell, 0, 0.158, 0).rotation.x = Math.PI / 2;
  add(group, new THREE.CylinderGeometry(DOCK_R - 0.1, DOCK_R - 0.1, 0.01, 96), inner, 0, 0.165, 0).castShadow = false;
  const glowMat = new THREE.MeshBasicMaterial({ color: ACCENT, transparent: true });
  const ring = add(group, new THREE.TorusGeometry(DOCK_R - 0.34, 0.024, 10, 96), glowMat, 0, 0.172, 0);
  ring.rotation.x = Math.PI / 2;
  ring.castShadow = false;
  const haloMat = new THREE.MeshBasicMaterial({ map: spotTex, color: ACCENT, transparent: true, opacity: 0.16, depthWrite: false });
  const halo = add(group, new THREE.PlaneGeometry(1.9, 1.9), haloMat, 0, 0.176, 0);
  halo.rotation.x = -Math.PI / 2;
  halo.castShadow = false;
  const top = CORE_Y - CORE_R * CORE_SCALE * 0.9, bottom = 0.17;
  const spineMat = new THREE.MeshBasicMaterial({ color: ACCENT, transparent: true });
  const spine = add(group, new THREE.CylinderGeometry(0.012, 0.018, top - bottom, 12), spineMat, 0, (top + bottom) / 2, 0);
  spine.castShadow = false;
  return { group, glow: [glowMat, spineMat, haloMat], spine };
}""")

swap_function("buildFloor", r"""function buildFloor() {
  // Hell: Studioboden in der Farbe des Bandes. In der Mitte ein Hauch heller, ein feines graues Raster, das
  // weit vor dem Bildrand ausläuft, weiche Schatten, der Datenring in Koralle und Grau.
  const group = new THREE.Group();
  const marks = [];
  const { c, g } = canvas(256, 256);
  const grad = g.createRadialGradient(128, 128, 0, 128, 128, 128);
  grad.addColorStop(0, 'rgba(255,255,255,0.9)');
  grad.addColorStop(0.5, 'rgba(255,255,255,0.4)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 256, 256);
  const plane = new THREE.Mesh(new THREE.CircleGeometry(8, 72), new THREE.MeshBasicMaterial({ map: toTexture(c), transparent: true, depthWrite: false }));
  plane.rotation.x = -Math.PI / 2;
  plane.renderOrder = -4;
  group.add(plane);
  const { c: gc, g: gg } = canvas(1024, 1024);
  gg.strokeStyle = 'rgba(40,42,46,0.55)';
  gg.lineWidth = 1.4;
  for (let i = 0; i <= 16; i++) {
    gg.beginPath(); gg.moveTo(i * 64, 0); gg.lineTo(i * 64, 1024); gg.stroke();
    gg.beginPath(); gg.moveTo(0, i * 64); gg.lineTo(1024, i * 64); gg.stroke();
  }
  gg.strokeStyle = 'rgba(40,42,46,0.9)';
  gg.lineWidth = 2;
  for (let i = 0; i <= 16; i += 2) {
    for (let j = 0; j <= 16; j += 2) {
      gg.beginPath(); gg.moveTo(i * 64 - 7, j * 64); gg.lineTo(i * 64 + 7, j * 64); gg.moveTo(i * 64, j * 64 - 7); gg.lineTo(i * 64, j * 64 + 7); gg.stroke();
    }
  }
  gg.globalCompositeOperation = 'destination-in';
  const fadeGrad = gg.createRadialGradient(512, 512, 40, 512, 512, 330);
  fadeGrad.addColorStop(0, 'rgba(0,0,0,0.5)');
  fadeGrad.addColorStop(0.6, 'rgba(0,0,0,0.2)');
  fadeGrad.addColorStop(1, 'rgba(0,0,0,0)');
  gg.fillStyle = fadeGrad;
  gg.fillRect(0, 0, 1024, 1024);
  const gridMat = new THREE.MeshBasicMaterial({ map: toTexture(gc), transparent: true, depthWrite: false, opacity: 0.16 });
  gridMat.userData.strength = 0.16;
  marks.push(gridMat);
  const grid = new THREE.Mesh(new THREE.PlaneGeometry(17, 17), gridMat);
  grid.rotation.x = -Math.PI / 2;
  grid.position.y = 0.002;
  grid.renderOrder = -3;
  group.add(grid);
  const catcher = new THREE.Mesh(new THREE.PlaneGeometry(22, 22), new THREE.ShadowMaterial({ opacity: 0.16 }));
  catcher.rotation.x = -Math.PI / 2;
  catcher.position.y = 0.004;
  catcher.receiveShadow = true;
  catcher.renderOrder = -2;
  group.add(catcher);
  const ring = new THREE.Group();
  ring.position.y = 0.012;
  const flat = (geo, color, strength) => {
    const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: strength, side: THREE.DoubleSide, depthWrite: false });
    mat.userData.strength = strength;
    marks.push(mat);
    const m = new THREE.Mesh(geo, mat);
    m.rotation.x = -Math.PI / 2;
    return m;
  };
  for (const [start, len, strength] of [[0, 70, 1], [84, 34, 0.5], [130, 96, 1], [240, 22, 0.5], [272, 64, 0.8]]) {
    ring.add(flat(new THREE.RingGeometry(1.86, 1.9, 96, 1, start * DEG, len * DEG), strength === 1 ? 0xb9bbc0 : ACCENT, 0.85 * strength));
  }
  ring.add(flat(new THREE.RingGeometry(1.62, 1.628, 128), ACCENT, 0.35));
  group.add(ring);
  const tickMat = new THREE.MeshBasicMaterial({ color: 0x9fa2a7, transparent: true, opacity: 0.5, depthWrite: false });
  tickMat.userData.strength = 0.5;
  marks.push(tickMat);
  const ticks = new THREE.InstancedMesh(new THREE.BoxGeometry(0.008, 0.001, 0.09), tickMat, 120);
  const dummy = new THREE.Object3D();
  for (let i = 0; i < 120; i++) {
    const a = (i / 120) * Math.PI * 2, long = i % 10 === 0;
    dummy.position.set(Math.cos(a) * (2.1 + (long ? 0.04 : 0)), 0.012, Math.sin(a) * (2.1 + (long ? 0.04 : 0)));
    dummy.rotation.y = -a + Math.PI / 2;
    dummy.scale.z = long ? 1.9 : 1;
    dummy.updateMatrix();
    ticks.setMatrixAt(i, dummy.matrix);
  }
  group.add(ticks);
  const { c: pc, g: pg2 } = canvas(256, 256);
  const pool = pg2.createRadialGradient(128, 128, 0, 128, 128, 128);
  pool.addColorStop(0, 'rgba(255,127,97,0.32)');
  pool.addColorStop(0.4, 'rgba(255,127,97,0.1)');
  pool.addColorStop(1, 'rgba(255,127,97,0)');
  pg2.fillStyle = pool;
  pg2.fillRect(0, 0, 256, 256);
  const poolMat = new THREE.MeshBasicMaterial({ map: toTexture(pc), transparent: true, depthWrite: false, opacity: 0 });
  const poolMesh = new THREE.Mesh(new THREE.CircleGeometry(2.6, 64), poolMat);
  poolMesh.rotation.x = -Math.PI / 2;
  poolMesh.position.y = 0.003;
  poolMesh.renderOrder = -3;
  group.add(poolMesh);
  const pulseMat = new THREE.MeshBasicMaterial({ color: ACCENT, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false });
  const pulse = new THREE.Mesh(new THREE.RingGeometry(0.985, 1, 128), pulseMat);
  pulse.rotation.x = -Math.PI / 2;
  pulse.position.y = 0.013;
  pulse.visible = false;
  group.add(pulse);
  return { group, ring, marks, pool: poolMat, pulse };
}""")

# ───────────────────────── 6 · Kern: Koralle auf Hell ─────────────────────────
sub("  group.position.y = CORE_Y;\n  const spin = new THREE.Group();",
    "  group.position.y = CORE_Y;\n" + keep("  group.scale.setScalar(CORE_SCALE);\n") + "  const spin = new THREE.Group();")
sub("const bright = new THREE.Color(ACCENT).multiplyScalar(1.55);", keep("const bright = new THREE.Color(ACCENT);"))
sub("new THREE.MeshPhysicalMaterial({ color: 0x1b3d4c, roughness: 0.1, transparent: true, opacity: 0.12,",
    keep("new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.55,"))   # Milchglas, heller als der Grund
sub("L.disc.material.opacity = 0.12 * a;", keep("L.disc.material.opacity = 0.55 * a;"))
sub("L.band.material.opacity = a * (0.3 + energy * 0.25);", keep("L.band.material.opacity = a * (0.14 + energy * 0.12);"))
sub("map: spotTex, color: 0xe4f6fd, size: 0.17,", keep("map: spotTex, color: ACCENT, size: 0.1,"))
sub("map: spotTex, color: 0xdff5ff,", keep("map: spotTex, color: ACCENT,"), 2)
sub("map: spotTex, color: 0xcdeffc, size: 0.055,", keep("map: spotTex, color: ACCENT, size: 0.04,"))
sub("new THREE.BoxGeometry(0.11, 0.02, 0.028), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true })",
    keep("new THREE.BoxGeometry(0.11, 0.02, 0.028), new THREE.MeshBasicMaterial({ color: 0x4a4c51, transparent: true })"))
sub("new THREE.SphereGeometry(0.03, 12, 8), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true })",
    keep("new THREE.SphereGeometry(0.03, 12, 8), new THREE.MeshBasicMaterial({ color: 0x4a4c51, transparent: true })"))
sub("new THREE.SphereGeometry(0.07, 20, 14), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true })",
    keep("new THREE.SphereGeometry(0.07, 20, 14), new THREE.MeshBasicMaterial({ color: ACCENT, transparent: true })"))
sub("sparks.material.opacity = 0.6 * reveal;", keep("sparks.material.opacity = 0.35 * reveal;"))
sub("halo.material.opacity = reveal * (0.22 + energy * 0.2);", keep("halo.material.opacity = reveal * (0.08 + energy * 0.08);"))
sub("ob.glint.material.opacity = reveal * 0.9;", keep("ob.glint.material.opacity = reveal * 0.5;"))
sub("nucleusGlow.material.opacity = reveal * Math.min(1, 0.6 + energy * 0.4);",
    keep("nucleusGlow.material.opacity = reveal * Math.min(1, 0.3 + energy * 0.3);"))

# ───────────────────────── 7 · Leitungen: weiss und Koralle, Stecker Koralle ─────────────────────────
sub("""    ? new THREE.MeshBasicMaterial({ color: new THREE.Color(ACCENT).multiplyScalar(1.35) })
    : new THREE.MeshStandardMaterial({ color: kind === 'thin' ? 0x23262a : 0x4b5159, roughness: 0.5, metalness: 0.2 });""",
    keep("""    ? new THREE.MeshBasicMaterial({ color: ACCENT })
    : new THREE.MeshStandardMaterial({ color: kind === 'thin' ? 0xd2d3d6 : 0xf0f0f2, roughness: 0.55, metalness: 0 });"""))
sub("const plugMat = new THREE.MeshStandardMaterial({ color: 0x1b1d20, metalness: 0.4, roughness: 0.5 });",
    keep("const plugMat = new THREE.MeshBasicMaterial({ color: ACCENT });"))

# ───────────────────────── 8 · Ablauf: ohne Nachbearbeitung, Licht, Belegung, Leitungsplan ─────────────────────────
sub("""    // Vierfach abgetastete Zeichenfläche für die Nachbearbeitung: Ohne sie fällt die Kantenglättung weg,
    // sobald der Lichtschein läuft, und alle Kanten treppen.
    this.composer = new EffectComposer(this.renderer, new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, samples: 4 }));
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    this.bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.4, 0.55, 0.9);
    this.composer.addPass(this.bloom);
    this.composer.addPass(new OutputPass());
    this.resize();
    await rest();
    // Die Nachbearbeitung einmal über eine leere Bühne laufen lassen: übersetzt ihre Shader vorab.
    this.solo(null, () => this.composer.render());
""", keep("""    // Hell (consulting): kein Lichtschein, keine Nachbearbeitung. Auf hellem Grund wuerde er alles milchig machen;
    // die Kantenglaettung macht der Renderer selbst (antialias). Spart am Handy eine volle Zwischenflaeche.
    this.composer = null;
    this.bloom = { enabled: false };
    this.resize();
"""))
# Shader fuer das Zeichnen direkt auf den Bildschirm vorab uebersetzen (ohne Nachbearbeitung gibt es keine Zwischenflaeche)
sub("    this.renderer.setRenderTarget(this.warmTarget);\n    await this.renderer.compileAsync(",
    keep("    this.renderer.setRenderTarget(null);\n") + "    await this.renderer.compileAsync(")
sub("    this.composer.setPixelRatio(this.ratio);\n    this.composer.setSize(w, h);\n", "")
sub("this.narrow = figure.clientWidth / Math.max(1, figure.clientHeight) < 1.25;",
    keep("this.narrow = figure.clientWidth / Math.max(1, figure.clientHeight) < 1.6;   // Handy: Buehne kaum breiter als hoch"))
sub("THREE.PCFSoftShadowMap", "THREE.PCFShadowMap")   # three 0.187: PCFSoft gibt es nicht mehr (Warnung in der Konsole)
sub("this.scene.environmentIntensity = 0.42;", keep("this.scene.environmentIntensity = 0.95;"))

sub("""    const key = new THREE.DirectionalLight(0xffffff, 1.25);
    key.position.set(-6, 10, 7);""", keep("""    // Hell: Himmel-Boden-Licht als weiche Grundhelligkeit, dazu ein weisses Fuehrungslicht fuer die Schatten.
    this.scene.add(new THREE.HemisphereLight(0xffffff, 0xd9dadd, 1.15));
    const key = new THREE.DirectionalLight(0xffffff, 1.55);
    key.position.set(-5, 11, 7);"""))
sub("key.shadow.radius = 5;", keep("key.shadow.radius = 9;"))
sub("const fill = new THREE.DirectionalLight(0xbfd6e6, 0.5);", keep("const fill = new THREE.DirectionalLight(0xffffff, 0.45);"))
sub("const rim = new THREE.DirectionalLight(0x9fdcf5, 0.9);", keep("const rim = new THREE.DirectionalLight(0xffffff, 0.55);"))

i0 = s.index("    const placed = [")
i1 = s.index("    this.rack = rack;\n") + len("    this.rack = rack;\n")
s = s[:i0] + keep(r"""    // Geraete: [Bau, x, z, Drehung um die Senkrechte in Grad, Beginn im Ablauf, Schluessel der Beschriftung]
    // Wie im Bild davor: Kamera links, Schnittplatz hinten links, Render-Rechner hinten rechts, Tablet rechts,
    // Grading-Pult vorn rechts, Telefon vorn links. Der Kern steht in der Mitte.
    const placed = [
      [() => buildCamera(screen(512, 320, 'grade', 3), shadow), -4.5, 0.7, 72, 0.0, 'camera'],
      [() => buildWorkstation(screen(1280, 716, 'timeline', 7), shadow, spot), -2.4, -2.7, 18, 0.04, 'desk'],
      [() => buildRenderBox(shadow), 2.35, -2.6, -22, 0.08, 'server'],
      [() => { const o = buildHandheld(1.0, 1.34, 20, screen(900, 1208, 'board', 5), shadow, spot); o.userData.plug.set(-0.66, 0.03, -0.06); return o; }, 4.45, 0.45, -36, 0.11, 'tablet'],
      [() => buildGradePanel(screen(1024, 230, 'scopes', 11), shadow), 2.55, 2.95, -18, 0.14, 'laptop'],
      [() => buildHandheld(0.36, 0.74, 14, screen(450, 930, 'phone', 9), shadow, spot), -1.7, 3.35, 14, 0.17, 'phone'],
    ];
    // Hochkant (Handy): die Runde in der Breite enger, damit die Geraete groesser werden
    const sx = this.narrow ? 0.66 : 1, sz = this.narrow ? 0.95 : 1;
    this.devices = [];
    for (const [make, x, z, rot, at, key_] of placed) {
      const obj = make();
      compact(obj);
      obj.position.set(x * sx, 0, z * sz);
      obj.rotation.y = rot * DEG;
      obj.updateMatrixWorld(true);
      this.devices.push({ obj, at, key: key_, anchor: obj.localToWorld(obj.userData.label.clone()) });
      await this.prime(obj, true);
    }
    const [camera, desk, box, tablet, grade, phone] = this.devices.map((d) => d.obj);
    this.rack = box;
""") + s[i1:]
sub("this.coreAnchor = new THREE.Vector3(1.12, CORE_Y + CORE_R * 0.72, 0);",
    keep("this.coreAnchor = new THREE.Vector3(1.12 * CORE_SCALE, CORE_Y + CORE_R * CORE_SCALE * 0.72, 0);"))
i0 = s.index("    const plan = [")
i1 = s.index("    this.cables = [];")
s = s[:i0] + keep("""    const plan = [
      [world(camera, camera.userData.plug), 0.45, 'lit', 0.0],
      [world(desk, desk.userData.plug), 0.5, 'grey', 0.07],
      [world(box, box.userData.plugs[0]), -0.45, 'lit', 0.14],
      [world(box, box.userData.plugs[1]), -0.15, 'grey', 0.2],
      [world(tablet, tablet.userData.plug), -0.3, 'grey', 0.27],
      [world(grade, grade.userData.plug), -0.4, 'lit', 0.34],
      [world(phone, phone.userData.plug), 0.3, 'grey', 0.4],
    ];
""") + s[i1:]
sub("map: spot, color: cable.lit ? 0xeafaff : ACCENT,", keep("map: spot, color: cable.lit ? 0xffffff : ACCENT,"))
sub("new THREE.SpriteMaterial({ map: spot, color: 0xeafaff,", keep("new THREE.SpriteMaterial({ map: spot, color: ACCENT,"))

# Umriss der Szene fuer fit(): Ecken aller Koerper (ohne Schattenflecken), Kugel um den Kern, Sockel, Beschriftungen
sub("    lights.add(this.dust);\n    await this.prime(lights);\n  }",
    "    lights.add(this.dust);\n    await this.prime(lights);\n" + keep(r"""
    // Umriss fuer fit(): alle Koerper der Geraete (ohne die flachen Schattenflecken), eine Kugel um den Kern
    // mit seinen Bahnen, der Sockel und die Punkte der Beschriftungen.
    this.center = new THREE.Vector3(0, 1.2, 0);
    this.bounds = [];
    const box3 = new THREE.Box3(), corner = new THREE.Vector3();
    for (const d of this.devices) {
      d.obj.updateMatrixWorld(true);
      d.obj.traverse((o) => {
        if (!o.isMesh || o.isInstancedMesh || o.renderOrder === -1 || !o.geometry) return;
        if (!o.geometry.boundingBox) o.geometry.computeBoundingBox();
        box3.copy(o.geometry.boundingBox).applyMatrix4(o.matrixWorld);
        for (let i = 0; i < 8; i++) {
          corner.set(i & 1 ? box3.max.x : box3.min.x, i & 2 ? box3.max.y : box3.min.y, i & 4 ? box3.max.z : box3.min.z);
          this.bounds.push({ p: corner.clone(), label: false });
        }
      });
      if (d.key) this.bounds.push({ p: d.anchor.clone(), label: true });
    }
    const R = 1.9 * CORE_SCALE;
    for (let i = 0; i < 48; i++) {                       // Punkte auf einer Kugel (Fibonacci)
      const y = 1 - (2 * (i + 0.5)) / 48, r = Math.sqrt(1 - y * y), a = i * 2.39996;
      this.bounds.push({ p: new THREE.Vector3(Math.cos(a) * r * R, CORE_Y + y * R, Math.sin(a) * r * R), label: false });
    }
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * Math.PI * 2;
      this.bounds.push({ p: new THREE.Vector3(Math.cos(a) * 2.2, 0, Math.sin(a) * 2.2), label: false });   // Datenring
    }
    this.bounds.push({ p: this.coreAnchor.clone(), label: true });
  }

  /**
   * Rechnet fuer eine Blickrichtung den kleinsten Kameraabstand und die Verschiebung aus, bei denen jeder Punkt
   * des Umrisses mit Rand im Bild steht (Halbierungssuche ueber den Abstand; fuer einen festen Abstand ist die
   * erlaubte Verschiebung je Achse ein Intervall, genommen wird seine Mitte). Beschriftungen brauchen oben und
   * seitlich mehr Platz; am Handy sind sie ausgeblendet und zaehlen nicht.
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
    const labels = this.labels.length > 0 && this.w > 760;
    const w = Math.max(1, this.w), h = Math.max(1, this.h);
    const edge = Math.max(14, Math.min(w, h) * 0.035);   // Rand in Bildpunkten
    const P = [], v = new THREE.Vector3();
    for (const b of this.bounds) {
      if (b.label && !labels) continue;
      v.copy(b.p).sub(this.center);
      P.push([v.dot(right), v.dot(up), v.dot(fwd),
        2 * (b.label ? 84 : edge) / w, 2 * (b.label ? 52 : edge) / h, 2 * (b.label ? 0 : edge) / h]);
    }
    const solve = (d) => {
      let xl = -Infinity, xh = Infinity, yl = -Infinity, yh = Infinity;
      for (const [x, y, z, px, pt, pb] of P) {
        const sx = (d + z) * th, sy = (d + z) * tv;
        xl = Math.max(xl, x - (1 - px) * sx); xh = Math.min(xh, x + (1 - px) * sx);
        yl = Math.max(yl, y - (1 - pt) * sy); yh = Math.min(yh, y + (1 - pb) * sy);
      }
      return [xl, xh, yl, yh];
    };
    let lo = 2, hi = 120;
    for (let i = 0; i < 30; i++) {
      const mid = (lo + hi) / 2, [xl, xh, yl, yh] = solve(mid);
      if (xl <= xh && yl <= yh) hi = mid; else lo = mid;
    }
    const [xl, xh, yl, yh] = solve(hi);
    const target = this.center.clone().addScaledVector(right, (xl + xh) / 2).addScaledVector(up, (yl + yh) / 2);
    return { d: hi, target, dir };""") + "\n  }")

# Kamera im Ablauf: Fahrt heran, ruhiges Pendeln, Abstand aus fit()
i0 = s.index("    // Kamera: fährt beim Aufbau heran und um die Szene")
i1 = s.index("    this.lock.face.rotation.y = az;")
s = s[:i0] + keep("""    // Kamera: faehrt beim Aufbau heran und um die Szene, danach ein ruhiges Pendeln. Der Abstand kommt in jedem
    // Bild aus fit(): so nah wie moeglich, ohne dass etwas angeschnitten wird — am Handy wie am breiten Schirm.
    const k = smooth(0, 1, p);
    const az = (mix(-18, 3, k) + 3 * Math.sin(t * 0.12) * k + this.pointer.sx * 3) * DEG;
    const el = (mix(40, this.narrow ? 46 : 25, k) - this.pointer.sy * 1.4) * DEG;
    const view = this.fit(az, el);
    this.camera.position.copy(view.target).addScaledVector(view.dir, view.d * mix(1.12, 1, k));
    this.camera.lookAt(view.target);
    this.camera.updateMatrixWorld();
""") + s[i1:]
sub("this.coreLight.intensity = coreReveal * (30 + this.energy * 18);", keep("this.coreLight.intensity = coreReveal * (3 + this.energy * 4);"))
sub("fade(this.lock.group, smooth(0.5, 0.7, p));", keep("fade(this.lock.group, 0);                 // hell: ohne Schloss, wie im Bild davor"))
sub("this.dust.material.opacity = 0.32 * smooth(0.2, 0.8, p);", keep("this.dust.visible = false;                // hell: kein Staub"))
sub("this.pool.opacity = coreReveal * (0.36 + this.energy * 0.3);", keep("this.pool.opacity = coreReveal * (0.7 + this.energy * 0.3);"))

# ───────────────────────── 9 · Farben: Koralle statt Blau, Grau statt Graublau ─────────────────────────
def shift(r, g, b):
    h, sat, v = colorsys.rgb_to_hsv(r / 255, g / 255, b / 255)
    if not (150 / 360 <= h <= 270 / 360) or sat < 0.04:
        return (r, g, b), False
    if sat >= 0.3 and v >= 0.55:                         # kraeftiges Blau -> Koralle, nie dunkler als 85 %
        return tuple(round(x * 255) for x in colorsys.hsv_to_rgb(CORAL_H, 0.62, max(v, 0.85))), True
    lum = round(0.2126 * r + 0.7152 * g + 0.0722 * b)    # Graublau -> neutrales Grau gleicher Helligkeit
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
        part = part[len(KEEP_A):-len(KEEP_B)]            # eigene Bloecke: Mischung bleibt, nur Grau wird neutral
    else:
        part = part.replace("blending: THREE.AdditiveBlending", "blending: THREE.NormalBlending")
        part = re.sub(r"new THREE\.Color\(ACCENT\)\.multiplyScalar\(\s*1(?:\.\d+)?\s*\)", "new THREE.Color(ACCENT)", part)
    part = re.sub(r"0x([0-9a-fA-F]{6})\b", hx, part)
    part = re.sub(r"(rgba?\(\s*|')(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})", trip, part)
    part = re.sub(r"#([0-9a-fA-F]{6})\b", hs, part)
    parts[n] = part
s = "".join(parts)

DST.write_text(s)
blau = [c for c in re.findall(r"0x([0-9a-f]{6})\b|#([0-9a-f]{6})\b", s, re.I)]
left = []
for a, b in blau:
    hexv = a or b; r, g, bb = int(hexv[:2], 16), int(hexv[2:4], 16), int(hexv[4:], 16)
    h, sat, v = colorsys.rgb_to_hsv(r / 255, g / 255, bb / 255)
    if sat >= 0.04 and (150 / 360 <= h <= 270 / 360 or 18 / 360 <= h <= 45 / 360):
        left.append(hexv)
print("geschrieben:", DST.relative_to(ROOT), "| Blau/Orange uebrig:", sorted(set(left)) or "keins")
