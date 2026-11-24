/* ╔══════════════════════════════════╗
   ║      ᚺ  ᚢ  ᚷ  ᛁ  ᚾ  ᛋ  ᛟ  ᚾ      ║
   ║         H  U  G  I  N  S  O  N    ║
   ╚══════════════════════════════════╝
   Datenring mit SyBrain-Kugel · otterstein.ai · 2026-11-01
   Nachbau des Brain-Reiters aus Sturmbrecher (brain3d.src.js, „Kern (Kugel)“ 25.09.2026) für die Webseite, ohne three.js:
   - außen Nickis segmentierter Ring (Datenring C2), dreht langsam;
   - innen gebündelte Fäden zwischen Ankerpunkten auf dem Ring, ein Lichtpunkt läuft jeweils einen Faden entlang;
   - Mitte (V2 22.11.2026, Nicki: „speicher and the ball are ugly, lets come up with a cool concept,
     the rest of the sphere and circle and connections are cool“): der Kern ist kein Partikelball mehr,
     sondern ein SCHICHTSTAPEL — neun waagerechte Lagen, deren Radien die Kugelsilhouette ergeben.
     Jede Lage trägt Knoten auf ihrem Rand, Nähte verbinden Lage zu Lage, benachbarte Lagen laufen
     minimal verschieden schnell, sodass sich das Geflecht langsam verwindet. Das ist dieselbe
     Materialsprache wie assets/bilder/schichten-system.webp und vermeidet das „Partikelnetz“,
     vor dem DESIGN-ASTRA Punkt 8 warnt. Der Schriftzug sitzt nicht mehr im Bild, sondern in der
     figcaption darunter — der schwarze Kasten quer über dem Kern ist damit weg.
   - V3 22.11.2026 (Nicki: „the sphere needs to rotate on all axis“): der Stapel steht nicht mehr
     auf einer festen Kippung und dreht sich nur um die Senkrechte. Eine volle Drehmatrix aus drei
     Winkeln mit unrunden Verhältnissen lässt ihn taumeln — er wiederholt seine Lage praktisch nie.
     Die Lagen sind deshalb keine ctx.ellipse mehr (die setzt eine feste Kippung voraus), sondern
     fein abgetastete Linienzüge; Vorder- und Rückseite trennt das Vorzeichen von z, Segment für
     Segment. Ring, Fäden und Segmentbögen bleiben flach, wie sie waren.
   - V4 24.11.2026 (Nicky: „remove the ball", „make signals on the thin lines go from one to the other side",
     „and when they arrive light up the little segments that go around the circle"): der Kern ist ganz weg.
     Ueber die Faeden laufen Signale von Anker zu Anker (weisser Kopf, korallener Schweif, der Faden selbst
     glimmt kurz mit). Kommt ein Signal an, leuchten der Ringbogen und die feinen Balken an dieser Stelle auf
     und klingen in rund einer Sekunde ab. Zeitplan ohne Zustand: jede Signalspur rechnet ihre Laeufe aus t,
     dadurch gleiches Bild bei jedem Laden und kein Aufholen nach dem Pausieren. Farben nur Koralle und Grau.
   Ruhebild bei „Bewegung reduzieren“, Pause außerhalb des Bildschirms. Ohne JavaScript bleibt das Standbild stehen. */
(function () {
  'use strict';
  const fig = document.querySelector('[data-brain]');
  if (!fig || !window.HTMLCanvasElement) return;
  const still = fig.querySelector('img');
  const cv = document.createElement('canvas');
  cv.setAttribute('role', 'img');
  cv.setAttribute('aria-label', still ? still.alt : 'Datenring mit Team-Speicher');
  const ctx = cv.getContext('2d');
  if (!ctx) return;
  fig.insertBefore(cv, still || null);
  if (still) still.hidden = true;

  const TAU = Math.PI * 2;
  const reduziert = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // Farben wie Nickis Datenring + Seite (Tiefblau, Hellblau, Weiß); Kugelkörper wie im Brain-Reiter
  const RING = ['#c9ccd1', '#ff7f61', '#e6e8eb', '#ffc4b5', '#8f9399', '#ff7f61', '#f5f6f8', '#ffd9cf', '#a9acb1', '#ff9a82', '#6e7378', '#dfe1e4'];
  const FADEN = '255,127,97';

  // deterministischer Zufall (gleiches Bild bei jedem Laden)
  let seed = 7;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);

  const ANKER = 180, FAEDEN = 150;
  const anker = Array.from({ length: ANKER }, (_, i) => (i / ANKER) * TAU);
  // Balken am Ring wie im Brain-Reiter (eine Erinnerung = ein radialer Balken), Länge zufällig
  const balken = Array.from({ length: ANKER }, () => 0.02 + rnd() * 0.05);
  const faeden = Array.from({ length: FAEDEN }, () => {
    const a = Math.floor(rnd() * ANKER);
    const b = (a + 25 + Math.floor(rnd() * (ANKER - 50))) % ANKER;   // nie zu nah beieinander
    return { a, b, alpha: 0.10 + rnd() * 0.20, zug: 0.35 + rnd() * 0.45, quer: (rnd() - 0.5) * 0.5 };
  });

  // ── Signale ──────────────────────────────────────────────────────────
  // SPUREN Signalspuren laufen versetzt. Spur s startet alle PERIODE[s] Sekunden einen Lauf;
  // welcher Faden, welche Richtung und wie lange, ergibt sich aus (s, Laufnummer) — ohne Zustand.
  const SPUREN = 9, NACHGLUEHEN = 1.0, SCHWEIF = 0.14;
  const hash = (x, y) => { const v = Math.sin(x * 127.1 + y * 311.7) * 43758.5453; return v - Math.floor(v); };
  const spur = Array.from({ length: SPUREN }, (_, s) => ({ periode: 3.6 + hash(s, 1) * 2.2, versatz: hash(s, 2) * 6 }));
  function laufVon(s, k) {
    const sp = spur[s];
    const f = Math.floor(hash(s + 0.5, k) * FAEDEN);
    const rueck = hash(s + 0.25, k + 0.5) < 0.5;
    const dauer = 2.2 + hash(s + 0.75, k + 0.25) * 1.2;             // 2,2–3,4 s quer über den Ring
    return { f, von: rueck ? faeden[f].b : faeden[f].a, nach: rueck ? faeden[f].a : faeden[f].b, start: k * sp.periode - sp.versatz, dauer };
  }
  // alle Läufe, die gerade unterwegs sind oder vor weniger als NACHGLUEHEN angekommen
  function aktuelleLaeufe(t) {
    const r = [];
    for (let s = 0; s < SPUREN; s++) {
      const sp = spur[s], k = Math.floor((t + sp.versatz) / sp.periode);
      for (let j = k - 1; j <= k; j++) {
        if (j < 0) continue;
        const l = laufVon(s, j), u = (t - l.start) / l.dauer;
        if (u >= 0 && t - (l.start + l.dauer) < NACHGLUEHEN) r.push(Object.assign(l, { u }));
      }
    }
    return r;
  }

  let W = 0, H = 0, dpr = 1;
  function groesse() {
    const r = fig.getBoundingClientRect();
    dpr = Math.min(2, window.devicePixelRatio || 1);
    W = Math.max(200, Math.round(r.width)); H = W;
    cv.width = W * dpr; cv.height = H * dpr;
    cv.style.width = W + 'px'; cv.style.height = H + 'px';
  }

  function zeichne(t, mitSignalen) {
    const cx = W / 2, cy = H / 2, R = W * 0.44;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    const ringRot = t * 0.035;
    const ankerPt = (i, rr) => { const a = anker[i] + ringRot; return [cx + Math.cos(a) * rr, cy + Math.sin(a) * rr]; };
    const kontroll = (f, x1, y1, x2, y2) => {
      const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
      return [cx + (mx - cx) * f.zug + (y2 - y1) * f.quer, cy + (my - cy) * f.zug - (x2 - x1) * f.quer];
    };
    const bahn = (f) => {
      const [x1, y1] = ankerPt(f.a, R * 0.9), [x2, y2] = ankerPt(f.b, R * 0.9);
      const [kx, ky] = kontroll(f, x1, y1, x2, y2);
      return (u) => [(1 - u) * (1 - u) * x1 + 2 * (1 - u) * u * kx + u * u * x2, (1 - u) * (1 - u) * y1 + 2 * (1 - u) * u * ky + u * u * y2];
    };

    // Ankunfts-Leuchten je Anker: 1 im Moment der Ankunft, klingt über NACHGLUEHEN ab
    const laeufe = mitSignalen ? aktuelleLaeufe(t) : [];
    const glut = new Float32Array(ANKER), segGlut = new Float32Array(RING.length);
    const aktivFaden = new Map();
    for (const l of laeufe) {
      if (l.u < 1) { aktivFaden.set(l.f, Math.max(aktivFaden.get(l.f) || 0, Math.sin(Math.PI * l.u))); continue; }
      const g = 1 - (t - (l.start + l.dauer)) / NACHGLUEHEN;
      if (g <= 0) continue;
      const e = g * g;
      const sg = Math.floor((l.nach / ANKER) * RING.length) % RING.length;   // nur der Bogen genau über dem Ankunftspunkt
      segGlut[sg] = Math.max(segGlut[sg], e);
      for (let d = -4; d <= 4; d++) {   // die Nachbarbalken leuchten schwächer mit
        const i = (l.nach + d + ANKER) % ANKER;
        glut[i] = Math.max(glut[i], e * (1 - Math.abs(d) / 5));
      }
    }

    // Glimmen hinter dem Ring
    const g = ctx.createRadialGradient(cx, cy, R * 0.1, cx, cy, R * 1.05);
    g.addColorStop(0, 'rgba(255,127,97,0.06)'); g.addColorStop(1, 'rgba(255,127,97,0)');
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, R * 1.05, 0, TAU); ctx.fill();

    // gebündelte Fäden: Bezier über einen Kontrollpunkt Richtung Mitte; ein Faden mit Signal glimmt mit
    ctx.lineWidth = 0.8;
    faeden.forEach((f, i) => {
      const [x1, y1] = ankerPt(f.a, R * 0.9), [x2, y2] = ankerPt(f.b, R * 0.9);
      const [kx, ky] = kontroll(f, x1, y1, x2, y2);
      const an = aktivFaden.get(i) || 0;
      ctx.strokeStyle = `rgba(${FADEN},${f.alpha + an * 0.22})`;
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.quadraticCurveTo(kx, ky, x2, y2); ctx.stroke();
    });

    // Signale: korallener Schweif, weisser Kopf
    ctx.lineCap = 'round';
    for (const l of laeufe) {
      if (l.u >= 1) continue;
      const p = bahn(faeden[l.f]);
      const at = (u) => p(l.von === faeden[l.f].a ? u : 1 - u);   // Richtung
      const N = 12;
      for (let k = 0; k < N; k++) {
        const u0 = l.u - SCHWEIF * (1 - k / N), u1 = l.u - SCHWEIF * (1 - (k + 1) / N);
        if (u1 <= 0) continue;
        const [xa, ya] = at(Math.max(0, u0)), [xb, yb] = at(u1);
        ctx.strokeStyle = `rgba(255,127,97,${0.85 * ((k + 1) / N) ** 1.6})`;
        ctx.lineWidth = 0.8 + 1.4 * ((k + 1) / N);
        ctx.beginPath(); ctx.moveTo(xa, ya); ctx.lineTo(xb, yb); ctx.stroke();
      }
      const [hx, hy] = at(l.u);
      ctx.save();
      ctx.shadowColor = 'rgba(255,127,97,0.9)'; ctx.shadowBlur = 8;
      ctx.fillStyle = 'rgba(255,255,255,0.95)';
      ctx.beginPath(); ctx.arc(hx, hy, 1.9, 0, TAU); ctx.fill();
      ctx.restore();
    }
    // Ankunft: kurzer Lichtkranz am Ankerpunkt
    for (const l of laeufe) {
      if (l.u < 1) continue;
      const e = 1 - (t - (l.start + l.dauer)) / NACHGLUEHEN;
      if (e <= 0) continue;
      const [ax, ay] = ankerPt(l.nach, R * 0.9);
      ctx.strokeStyle = `rgba(255,127,97,${0.7 * e})`; ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.arc(ax, ay, 2 + (1 - e) * 6, 0, TAU); ctx.stroke();
    }

    // feine Balken innen am Ring — leuchten auf, wo ein Signal ankommt
    ctx.lineCap = 'butt';
    for (let i = 0; i < ANKER; i++) {
      const a = anker[i] + ringRot, e = glut[i];
      const r1 = R * 0.915, r2 = R * (0.915 + balken[i] + 0.03 * e);
      ctx.lineWidth = 1 + 1.2 * e;
      ctx.strokeStyle = e > 0.01 ? `rgba(${Math.round(255)},${Math.round(127 + 128 * e * 0.6)},${Math.round(97 + 158 * e * 0.6)},${0.28 + 0.72 * e})` : 'rgba(255,127,97,0.28)';
      ctx.beginPath(); ctx.moveTo(cx + Math.cos(a) * r1, cy + Math.sin(a) * r1); ctx.lineTo(cx + Math.cos(a) * r2, cy + Math.sin(a) * r2); ctx.stroke();
    }
    // segmentierter Ring (12 Bögen mit Lücken); der Bogen über einem Ankunftspunkt leuchtet auf
    ctx.lineCap = 'round';
    const SEG = RING.length, luecke = 0.055, lw = Math.max(3, W * 0.012);
    for (let i = 0; i < SEG; i++) {
      const a0 = (i / SEG) * TAU + ringRot + luecke / 2, a1 = ((i + 1) / SEG) * TAU + ringRot - luecke / 2;
      ctx.lineWidth = lw;
      ctx.strokeStyle = RING[i];
      ctx.beginPath(); ctx.arc(cx, cy, R, a0, a1); ctx.stroke();
      const e = segGlut[i];
      if (e > 0.01) {
        ctx.save();
        ctx.shadowColor = `rgba(255,127,97,${0.9 * e})`; ctx.shadowBlur = 26 * e;
        ctx.strokeStyle = `rgba(255,255,255,${0.85 * e})`;
        ctx.lineWidth = lw * (1 + 0.35 * e);
        ctx.beginPath(); ctx.arc(cx, cy, R, a0, a1); ctx.stroke();
        ctx.restore();
      }
    }
  }

  let sichtbar = true, t0 = performance.now(), lauf = 0;
  function tick(now) {
    zeichne((now - t0) / 1000 + 4, true);
    if (sichtbar && !reduziert) lauf = requestAnimationFrame(tick);
  }
  groesse();
  zeichne(4, false);
  if (!reduziert) {
    if ('IntersectionObserver' in window) {
      new IntersectionObserver((e) => {
        sichtbar = e[0].isIntersecting;
        cancelAnimationFrame(lauf);
        if (sichtbar) lauf = requestAnimationFrame(tick);
      }).observe(cv);
    } else lauf = requestAnimationFrame(tick);
    document.addEventListener('visibilitychange', () => {
      cancelAnimationFrame(lauf);
      if (!document.hidden && sichtbar) lauf = requestAnimationFrame(tick);
    });
  }
  window.addEventListener('resize', () => { groesse(); if (reduziert) zeichne(4, false); });
})();
