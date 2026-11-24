#!/usr/bin/env python3
"""Systembild V3 fuer consulting.nicolaslekai.com: die O&S-Szene als Filmproduktions-Suite, in Orange.

Nicky 24.11.2026: "the one system graphic with the ball in the middle … make it more like a movie
production suite in our case". Nimmt system3d.src.js von otterstein.ai (unveraendert lassen!) und schreibt
preview/assets/system3d/system3d.src.js:
  - Akzent Hellblau -> Orange #f4933b, alle anderen Blautoene auf den Orange-Farbton gedreht
  - linker Laptop -> Kinokamera auf Stativ (buildCamera), Arbeitsplatz zeigt eine Schnitt-Timeline,
    zweiter Laptop das Grading (Farbraeder + Waveform), Tablet ein Storyboard
Danach: preview/assets/system3d/bauen.sh
    python3 tools/system3d_film.py
"""
import colorsys, re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = Path.home() / "Documents/Claude/Projects/Otter and Stein/assets/system3d/system3d.src.js"
DST = ROOT / "preview/assets/system3d/system3d.src.js"
ORANGE_H = 28.6 / 360

s = SRC.read_text()

# 1 · Akzent exakt, dann die uebrigen Blautoene auf den Orange-Farbton
s = s.replace("0x8dd2ec;               // Bergwind-Hellblau, wie --akzent-hell in style.css",
              "0xf4933b;               // Orange (Nicolas, AI-Architect-Haelfte), wie --akzent-hell in style.css")
s = s.replace("'#8dd2ec'", "'#f4933b'").replace("141,210,236", "244,147,59")


def shift(r, g, b):
    h, sat, v = colorsys.rgb_to_hsv(r / 255, g / 255, b / 255)
    if 165 / 360 <= h <= 265 / 360 and sat * v >= 0.10:
        return tuple(round(x * 255) for x in colorsys.hsv_to_rgb(ORANGE_H, min(1, sat * 1.5), v)), True
    return (r, g, b), False


def hx(m):
    v = int(m.group(1), 16); c, ch = shift(v >> 16, (v >> 8) & 255, v & 255)
    return "0x%02x%02x%02x" % c if ch else m.group(0)


def trip(m):
    c, ch = shift(*map(int, m.group(2, 3, 4)))
    return f"{m.group(1)}{c[0]},{c[1]},{c[2]}" if ch else m.group(0)


def hs(m):
    h = m.group(1); c, ch = shift(int(h[:2], 16), int(h[2:4], 16), int(h[4:], 16))
    return "#%02x%02x%02x" % c if ch else m.group(0)


s = re.sub(r"0x([0-9a-fA-F]{6})\b", hx, s)
s = re.sub(r"(rgba?\(\s*|')(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})", trip, s)
s = re.sub(r"#([0-9a-fA-F]{6})\b", hs, s)

# 2 · drei neue Bildschirm-Inhalte: Timeline, Grading, Storyboard (vor dem Telefon-Zweig eingehaengt)
NEU_SCREENS = r"""  } else if (kind === 'timeline') {
    // Schnitt: oben Quelle und Programm, darunter Spuren mit Clips, ein Abspielkopf in Orange
    rr(g, 0, 0, w, 5 * u, 0, P1);
    for (let i = 0; i < 3; i++) rr(g, (2 + i * 2.2) * u, 1.8 * u, 1.4 * u, 1.4 * u, u, L2);
    const vh = h * 0.42;
    [[2, 47], [51, 47]].forEach(([x, vw], i) => {
      rr(g, x * u, 7 * u, vw * u, vh, 0.8 * u, '#050505');
      const grad = g.createLinearGradient(0, 7 * u, 0, 7 * u + vh);
      grad.addColorStop(0, i ? '#3a2a20' : '#22201e'); grad.addColorStop(1, i ? '#9a5a2c' : '#4a3a30');
      rr(g, (x + 1) * u, 7 * u + u, (vw - 2) * u, vh - 2 * u, 0.6 * u, grad);
      g.fillStyle = 'rgba(0,0,0,0.35)'; g.beginPath(); g.arc((x + vw * 0.55) * u, 7 * u + vh * 0.55, vh * 0.22, 0, Math.PI * 2); g.fill();
    });
    const ty = 9 * u + vh, th = h - ty - 2 * u;
    rr(g, 2 * u, ty, 96 * u, th, 0.8 * u, P1);
    const tracks = 5, tH = th / (tracks + 0.6);
    for (let t = 0; t < tracks; t++) {
      const y = ty + 0.6 * tH + t * tH;
      rr(g, 2.5 * u, y + tH * 0.15, 6 * u, tH * 0.7, 0.5 * u, P2);
      let x = 9.5 * u;
      while (x < 96 * u) {
        const cw = (6 + rnd() * 16) * u;
        if (rnd() > 0.18) rr(g, x, y + tH * 0.15, Math.min(cw, 97 * u - x), tH * 0.7, 0.6 * u, t < 3 ? (rnd() > 0.7 ? A : L2) : L1);
        x += cw + 0.6 * u;
      }
    }
    g.fillStyle = A; g.fillRect(58 * u, ty, 0.35 * u, th);
    g.beginPath(); g.moveTo(56.8 * u, ty); g.lineTo(59.5 * u, ty); g.lineTo(58.15 * u, ty + 1.6 * u); g.fill();
  } else if (kind === 'grade') {
    // Grading: Bild oben links, Waveform rechts, drei Farbraeder unten
    const vh = h * 0.5;
    const grad = g.createLinearGradient(0, 3 * u, 0, 3 * u + vh);
    grad.addColorStop(0, '#2a2420'); grad.addColorStop(1, '#b06a32');
    rr(g, 3 * u, 3 * u, 56 * u, vh, 0.8 * u, grad);
    g.fillStyle = 'rgba(0,0,0,0.4)'; g.beginPath(); g.arc(30 * u, 3 * u + vh * 0.62, vh * 0.25, 0, Math.PI * 2); g.fill();
    rr(g, 62 * u, 3 * u, 35 * u, vh, 0.8 * u, '#050505');
    for (let i = 0; i < 260; i++) {
      const x = 63 * u + rnd() * 33 * u, base = 3 * u + vh * (0.25 + 0.5 * Math.sin((x / w) * 7) * 0.5 + 0.35 * rnd());
      g.fillStyle = i % 3 ? 'rgba(210,210,200,0.5)' : A; g.fillRect(x, base, 0.35 * u, 0.35 * u);
    }
    const wy = 6 * u + vh, wr = Math.min(12 * u, (h - wy - 3 * u) / 2.2);
    for (let i = 0; i < 3; i++) {
      const cx = (18 + i * 32) * u, cy = wy + wr * 1.1;
      const ring = g.createConicGradient ? g.createConicGradient(0, cx, cy) : null;
      if (ring) { ['#7a3b3b', '#7a6a3b', '#3b7a4a', '#3b6a7a', '#4a3b7a', '#7a3b6a', '#7a3b3b'].forEach((c, k) => ring.addColorStop(k / 6, c)); g.fillStyle = ring; }
      else g.fillStyle = L2;
      g.beginPath(); g.arc(cx, cy, wr, 0, Math.PI * 2); g.fill();
      g.fillStyle = P1; g.beginPath(); g.arc(cx, cy, wr * 0.72, 0, Math.PI * 2); g.fill();
      g.fillStyle = i === 1 ? A : '#c9c9c4'; g.beginPath(); g.arc(cx + wr * 0.25 * (i - 1), cy - wr * 0.2, wr * 0.12, 0, Math.PI * 2); g.fill();
    }
  } else if (kind === 'board') {
    // Storyboard: sechs Bildfelder mit Bleistiftlinien, eines orange markiert
    rr(g, 0, 0, w, 8 * u, 0, P1);
    rr(g, 5 * u, 3 * u, 22 * u, 2.2 * u, u, '#c9c9c4');
    for (let i = 0; i < 6; i++) {
      const x = (5 + (i % 2) * 46) * u, y = (12 + Math.floor(i / 2) * 29) * u;
      rr(g, x, y, 43 * u, 21 * u, 1.2 * u, '#d8d4cc');
      g.strokeStyle = '#6a625a'; g.lineWidth = 0.5 * u;
      g.beginPath(); g.moveTo(x + 4 * u, y + 17 * u); g.lineTo(x + (14 + rnd() * 10) * u, y + (6 + rnd() * 6) * u); g.lineTo(x + 39 * u, y + 15 * u); g.stroke();
      g.beginPath(); g.arc(x + (28 + rnd() * 6) * u, y + 8 * u, 3 * u, 0, Math.PI * 2); g.stroke();
      if (i === 3) { g.strokeStyle = A; g.lineWidth = 0.9 * u; g.strokeRect(x - 0.6 * u, y - 0.6 * u, 44.2 * u, 22.2 * u); }
      rr(g, x, y + 23 * u, (14 + rnd() * 18) * u, 1.4 * u, u, L1);
    }
  } else {                                             // phone"""
s = s.replace("  } else {                                             // phone", NEU_SCREENS, 1)

# 3 · Kinokamera auf Stativ, im Stil der uebrigen Geraete (vor buildRack eingehaengt)
KAMERA = r"""/**
 * Baut eine Kinokamera auf einem Stativ: Gehaeuse, Objektiv mit Ringen, Griff oben, kleiner
 * Kontrollmonitor an der Seite, Tally-Licht in Orange, drei gespreizte Beine.
 * @returns {THREE.Group} Die Kamera; ``userData.plug`` und ``userData.label`` wie bei den anderen.
 */
function buildCamera(screenMap, shadowTex, glowTex) {
  const root = new THREE.Group();
  const SC = 1.6;                                       // groesser als echt, sonst verschwindet sie neben dem Schnittplatz
  const g = new THREE.Group();
  g.scale.setScalar(SC);
  root.add(g);
  const m = deviceMaterials(screenMap);
  m.alu.color.setHex(0x2a2c30);
  m.alu.roughness = 0.5;
  const H = 1.12;                                       // Hoehe der Kameraachse
  const cam = new THREE.Group();
  cam.position.y = H;
  add(cam, new THREE.BoxGeometry(0.42, 0.36, 0.62), m.alu, 0, 0, -0.05);               // Gehaeuse
  add(cam, new THREE.BoxGeometry(0.44, 0.03, 0.66), m.dark, 0, -0.195, -0.05);         // Grundplatte
  const lens = add(cam, new THREE.CylinderGeometry(0.13, 0.12, 0.42, 32), m.dark, 0, 0, 0.45);
  lens.rotation.x = Math.PI / 2;
  [0.33, 0.45, 0.57].forEach((z) => { const r = add(cam, new THREE.CylinderGeometry(0.138, 0.138, 0.035, 32), m.key, 0, 0, z); r.rotation.x = Math.PI / 2; });
  const hood = add(cam, new THREE.BoxGeometry(0.34, 0.27, 0.06), m.dark, 0, 0, 0.7);      // Kompendium
  hood.castShadow = true;
  const glas = add(cam, new THREE.CircleGeometry(0.1, 32), m.glass, 0, 0, 0.665);
  glas.castShadow = false;
  add(cam, new THREE.BoxGeometry(0.05, 0.05, 0.4), m.dark, 0, 0.26, -0.02);              // Griff
  add(cam, new THREE.BoxGeometry(0.04, 0.09, 0.04), m.dark, 0, 0.21, 0.15);
  add(cam, new THREE.BoxGeometry(0.04, 0.09, 0.04), m.dark, 0, 0.21, -0.19);
  add(cam, new THREE.BoxGeometry(0.02, 0.02, 0.01), new THREE.MeshBasicMaterial({ color: ACCENT }), 0.15, 0.13, 0.26).castShadow = false;   // Tally
  // Kontrollmonitor links am Gehaeuse, zum Betrachter gedreht
  const mon = new THREE.Group();
  mon.position.set(-0.36, 0.14, 0.05);
  mon.rotation.y = 0.5;
  add(mon, slab(0.34, 0.22, 0.03, 0.02), m.dark, 0, 0, 0);
  add(mon, screenGeometry(0.31, 0.19, 0.012), m.screen, 0, 0, 0.0155).castShadow = false;
  add(mon, screenGeometry(0.31, 0.19, 0.012), m.sheen, 0, 0, 0.0165).castShadow = false;
  cam.add(mon);
  add(cam, new THREE.BoxGeometry(0.16, 0.025, 0.025), m.dark, -0.22, 0.14, 0.02);
  g.add(cam);
  // Stativkopf und drei Beine
  add(g, new THREE.CylinderGeometry(0.11, 0.13, 0.12, 24), m.dark, 0, H - 0.27, -0.05);
  const pan = add(g, new THREE.CylinderGeometry(0.012, 0.012, 0.5, 8), m.dark, -0.12, H - 0.3, -0.42);
  pan.rotation.set(1.1, 0, 0.25);
  const top = new THREE.Vector3(0, H - 0.33, -0.05);
  [0, 2.094, 4.189].forEach((a) => {
    const foot = new THREE.Vector3(Math.sin(a) * 0.62, 0, -0.05 + Math.cos(a) * 0.62);
    const len = top.distanceTo(foot);
    const leg = add(g, new THREE.CylinderGeometry(0.018, 0.024, len, 10), m.alu, (top.x + foot.x) / 2, (top.y + foot.y) / 2, (top.z + foot.z) / 2);
    leg.lookAt(foot.x, foot.y, foot.z);
    leg.rotateX(Math.PI / 2);
  });
  addContactShadow(g, shadowTex, 1.9, 1.9);
  addScreenSpill(g, glowTex, 1.6, 1.4, 0.7, 0.06);
  root.userData.plug = new THREE.Vector3(0, 0.03, -0.3 * SC);
  root.userData.label = new THREE.Vector3(0, (H + 0.55) * SC, 0);
  return root;
}

"""
s = s.replace("/**\n * Baut den Server-Schrank", KAMERA + "/**\n * Baut den Server-Schrank", 1)

# 4 · Belegung: Kamera statt Laptop A, Timeline/Grading/Storyboard
alt = """      [() => buildLaptop(screen(1024, 640, 'chat', 3), shadow, spot), -3.5, 2.3, 38, 0.0, ''],
      [() => buildHandheld(0.82, 1.1, 20, screen(900, 1208, 'tablet', 5), shadow, spot), -1.15, 3.55, 12, 0.03, 'tablet'],
      [() => buildHandheld(0.36, 0.74, 14, screen(450, 930, 'phone', 9), shadow, spot), 0.9, 3.7, -8, 0.06, 'phone'],
      [() => buildLaptop(screen(1024, 640, 'doc', 11), shadow, spot), 3.05, 2.75, -32, 0.09, 'laptop'],
      [() => buildWorkstation(screen(1280, 716, 'dash', 7), shadow, spot), -4.1, -0.7, 54, 0.12, 'desk'],"""
neu = """      [() => buildCamera(screen(512, 320, 'grade', 3), shadow, spot), -4.2, 2.9, 30, 0.0, 'camera'],
      [() => buildHandheld(0.82, 1.1, 20, screen(900, 1208, 'board', 5), shadow, spot), -1.15, 3.55, 12, 0.03, 'tablet'],
      [() => buildHandheld(0.36, 0.74, 14, screen(450, 930, 'phone', 9), shadow, spot), 0.9, 3.7, -8, 0.06, 'phone'],
      [() => buildLaptop(screen(1024, 640, 'grade', 11), shadow, spot), 3.05, 2.75, -32, 0.09, 'laptop'],
      [() => buildWorkstation(screen(1280, 716, 'timeline', 7), shadow, spot), -4.1, -0.7, 54, 0.12, 'desk'],"""
assert alt in s, "Belegung nicht gefunden"
s = s.replace(alt, neu)

DST.write_text(s)
left = sorted(set(re.findall(r"0x(?:8dd2ec|1b3d4c|1d4253|6fa9bf|9fdcf5|bfe7f6)|141,210,236", s, re.I)))
print("geschrieben:", DST.name, "| Blau uebrig:", left or "keins")
