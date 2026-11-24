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
  const FADEN = '255,127,97', KNOTEN = '245,246,248', BODY = '#151415';

  // deterministischer Zufall (gleiches Bild bei jedem Laden)
  let seed = 7;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);

  const ANKER = 180, FAEDEN = 150, QUER = 30;
  const anker = Array.from({ length: ANKER }, (_, i) => (i / ANKER) * TAU);
  // Balken am Ring wie im Brain-Reiter (eine Erinnerung = ein radialer Balken), Länge zufällig
  const balken = Array.from({ length: ANKER }, () => 0.02 + rnd() * 0.05);
  const faeden = Array.from({ length: FAEDEN }, () => {
    const a = Math.floor(rnd() * ANKER);
    const b = (a + 25 + Math.floor(rnd() * (ANKER - 50))) % ANKER;   // nie zu nah beieinander
    return { a, b, alpha: 0.10 + rnd() * 0.20, phase: rnd(), zug: 0.35 + rnd() * 0.45, quer: (rnd() - 0.5) * 0.5 };
  });

  // Kern als Schichtstapel: neun Lagen, Radius nach der Kugelsilhouette (breit in der Mitte).
  // Knoten sitzen auf dem Rand der Lage, nicht frei im Raum — dadurch Ordnung statt Rauschen.
  const SCHICHTEN = 9, PRO_SCHICHT = 15;
  const lagen = Array.from({ length: SCHICHTEN }, (_, i) => {
    const h = -1 + (2 * (i + 0.5)) / SCHICHTEN;
    const r = Math.sqrt(Math.max(0, 1 - h * h)) * 0.97;
    return {
      h, r,
      n: Math.max(5, Math.round(PRO_SCHICHT * r)),
      phase: rnd() * TAU,
      // leicht verschiedene Drehzahl je Lage: das Geflecht verwindet sich, ohne zu zerfallen
      tempo: 0.88 + (i / (SCHICHTEN - 1)) * 0.24,
    };
  });
  // Naehte zwischen benachbarten Lagen, Knoten dem Winkel nach gepaart
  const naehte = [];
  for (let i = 0; i < SCHICHTEN - 1; i++) {
    const a = lagen[i], b = lagen[i + 1];
    for (let j = 0; j < a.n; j++) naehte.push([i, j, Math.round((j * b.n) / a.n) % b.n]);
  }
  // Querfaeden vom Kern zum Ring: nur von den breiten Lagen der Mitte
  const quer = Array.from({ length: QUER }, () => {
    const li = 2 + Math.floor(rnd() * (SCHICHTEN - 4));
    return [li, Math.floor(rnd() * lagen[li].n), Math.floor(rnd() * ANKER)];
  });

  // Volle Drehung um alle drei Achsen. Die drei Geschwindigkeiten stehen in keinem
  // ganzzahligen Verhaeltnis zueinander, deshalb laeuft die Lage nie in eine Schleife.
  // m ist zeilenweise: [m0 m1 m2 / m3 m4 m5 / m6 m7 m8], z > 0 = Vorderseite.
  const DREH_X = 0.071, DREH_Y = 0.130, DREH_Z = 0.041;
  function matrix(t) {
    const ax = t * DREH_X, ay = t * DREH_Y, az = t * DREH_Z;
    const cx1 = Math.cos(ax), sx1 = Math.sin(ax);
    const cy1 = Math.cos(ay), sy1 = Math.sin(ay);
    const cz1 = Math.cos(az), sz1 = Math.sin(az);
    // R = Rz * Ry * Rx, ausmultipliziert
    return [
      cz1 * cy1, cz1 * sy1 * sx1 - sz1 * cx1, cz1 * sy1 * cx1 + sz1 * sx1,
      sz1 * cy1, sz1 * sy1 * sx1 + cz1 * cx1, sz1 * sy1 * cx1 - cz1 * sx1,
      -sy1, cy1 * sx1, cy1 * cx1,
    ];
  }
  const dreh = (p, m) => [
    m[0] * p[0] + m[1] * p[1] + m[2] * p[2],
    m[3] * p[0] + m[4] * p[1] + m[5] * p[2],
    m[6] * p[0] + m[7] * p[1] + m[8] * p[2],
  ];

  let W = 0, H = 0, dpr = 1;
  function groesse() {
    const r = fig.getBoundingClientRect();
    dpr = Math.min(2, window.devicePixelRatio || 1);
    W = Math.max(200, Math.round(r.width)); H = W;
    cv.width = W * dpr; cv.height = H * dpr;
    cv.style.width = W + 'px'; cv.style.height = H + 'px';
  }

  function zeichne(t) {
    const cx = W / 2, cy = H / 2, R = W * 0.44, KR = W * 0.185;   // V2: der Stapel darf etwas groesser stehen als der alte Ball
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    const ringRot = t * 0.035, kugelRot = t * 0.13;   // V3: langsamer, das Taumeln traegt jetzt die Bewegung
    const ankerPt = (i, rr) => { const a = anker[i] + ringRot; return [cx + Math.cos(a) * rr, cy + Math.sin(a) * rr]; };

    // Glimmen hinter dem Ring
    const g = ctx.createRadialGradient(cx, cy, KR * 0.6, cx, cy, R * 1.05);
    g.addColorStop(0, 'rgba(170,33,0,0.10)'); g.addColorStop(1, 'rgba(170,33,0,0)');
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, R * 1.05, 0, TAU); ctx.fill();

    // gebündelte Fäden: Bezier über einen Kontrollpunkt Richtung Mitte (Bündelung wie Holten, vereinfacht)
    ctx.lineWidth = 0.8;
    const kontroll = (f, x1, y1, x2, y2) => {
      const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
      return [cx + (mx - cx) * f.zug + (y2 - y1) * f.quer, cy + (my - cy) * f.zug - (x2 - x1) * f.quer];
    };
    for (const f of faeden) {
      const [x1, y1] = ankerPt(f.a, R * 0.9), [x2, y2] = ankerPt(f.b, R * 0.9);
      const [kx, ky] = kontroll(f, x1, y1, x2, y2);
      ctx.strokeStyle = `rgba(${FADEN},${f.alpha})`;
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.quadraticCurveTo(kx, ky, x2, y2); ctx.stroke();
    }
    // Lichtpunkte, die Fäden entlanglaufen
    if (!reduziert) for (let i = 0; i < faeden.length; i += 7) {
      const f = faeden[i], u = (t * 0.18 + f.phase) % 1;
      const [x1, y1] = ankerPt(f.a, R * 0.9), [x2, y2] = ankerPt(f.b, R * 0.9);
      const [kx, ky] = kontroll(f, x1, y1, x2, y2);
      const px = (1 - u) * (1 - u) * x1 + 2 * (1 - u) * u * kx + u * u * x2;
      const py = (1 - u) * (1 - u) * y1 + 2 * (1 - u) * u * ky + u * u * y2;
      ctx.fillStyle = 'rgba(232,244,250,0.85)';
      ctx.beginPath(); ctx.arc(px, py, 1.6, 0, TAU); ctx.fill();
    }

    // feine Balken innen am Ring
    ctx.lineWidth = 1;
    for (let i = 0; i < ANKER; i++) {
      const a = anker[i] + ringRot, r1 = R * 0.915, r2 = R * (0.915 + balken[i]);
      ctx.strokeStyle = 'rgba(255,127,97,0.28)';
      ctx.beginPath(); ctx.moveTo(cx + Math.cos(a) * r1, cy + Math.sin(a) * r1); ctx.lineTo(cx + Math.cos(a) * r2, cy + Math.sin(a) * r2); ctx.stroke();
    }
    // segmentierter Ring (12 Bögen mit Lücken, Farben aus Nickis Datenring)
    ctx.lineCap = 'round';
    ctx.lineWidth = Math.max(3, W * 0.012);
    const SEG = RING.length, luecke = 0.055;
    for (let i = 0; i < SEG; i++) {
      const a0 = (i / SEG) * TAU + ringRot + luecke / 2, a1 = ((i + 1) / SEG) * TAU + ringRot - luecke / 2;
      ctx.strokeStyle = RING[i];
      ctx.beginPath(); ctx.arc(cx, cy, R, a0, a1); ctx.stroke();
    }

    // ── Kern: Schichtstapel, taumelnd ─────────────────────────────────────
    // Ein Punkt der Lage entsteht im Koerpersystem (Lage waagerecht, Eigendrehung um
    // die Polachse) und geht danach durch die volle Drehmatrix. Dadurch kippt der
    // ganze Stapel um alle drei Achsen, ohne dass die Lagen ihre Ordnung verlieren.
    const m = matrix(t);
    const roh = (l, u) => {   // u ist der Winkel auf der Lage, 0..1 = ein Umlauf
      const th = l.phase + kugelRot * l.tempo + u * TAU;
      return [Math.cos(th) * l.r, l.h, Math.sin(th) * l.r];
    };
    const schirm = (l, j2) => dreh(roh(l, j2 / l.n), m);
    const px = (p) => cx + p[0] * KR, py = (p) => cy - p[1] * KR;

    // Koerper: weicher Schatten, damit der Stapel als Kugel sitzt
    const kb = ctx.createRadialGradient(cx - KR * 0.4, cy - KR * 0.45, KR * 0.1, cx, cy, KR * 1.08);
    kb.addColorStop(0, 'rgba(27,36,51,0.99)'); kb.addColorStop(0.80, 'rgba(16,19,26,0.97)'); kb.addColorStop(1, 'rgba(16,19,26,0)');
    ctx.fillStyle = kb; ctx.beginPath(); ctx.arc(cx, cy, KR * 1.08, 0, TAU); ctx.fill();

    // Lagen als fein abgetastete Linienzuege: ganze Lage blass in einem Zug,
    // darueber nur die vorn liegenden Stuecke als hellere Haarlinie.
    const ABTAST = 72;
    ctx.lineWidth = 1;
    for (const l of lagen) {
      const bahn = [];
      for (let k = 0; k <= ABTAST; k++) bahn.push(dreh(roh(l, k / ABTAST), m));
      ctx.strokeStyle = `rgba(${FADEN},0.10)`;
      ctx.beginPath();
      for (let k = 0; k < bahn.length; k++) {
        const q = bahn[k];
        if (k === 0) ctx.moveTo(px(q), py(q)); else ctx.lineTo(px(q), py(q));
      }
      ctx.stroke();
      ctx.strokeStyle = `rgba(${FADEN},0.42)`;
      ctx.beginPath();
      let offen = false;
      for (let k = 0; k < bahn.length - 1; k++) {
        if ((bahn[k][2] + bahn[k + 1][2]) / 2 > 0) {
          if (!offen) { ctx.moveTo(px(bahn[k]), py(bahn[k])); offen = true; }
          ctx.lineTo(px(bahn[k + 1]), py(bahn[k + 1]));
        } else offen = false;
      }
      ctx.stroke();
    }

    // Naehte zwischen den Lagen
    ctx.lineWidth = 0.8;
    for (const [li, j1, j2] of naehte) {
      const a = schirm(lagen[li], j1), b = schirm(lagen[li + 1], j2);
      const z = (a[2] + b[2]) / 2;
      ctx.strokeStyle = `rgba(${FADEN},${z > 0 ? 0.14 + 0.34 * z : 0.05})`;
      ctx.beginPath(); ctx.moveTo(px(a), py(a)); ctx.lineTo(px(b), py(b)); ctx.stroke();
    }

    // Knoten, von hinten nach vorn
    const punkte = [];
    for (const l of lagen) for (let k = 0; k < l.n; k++) punkte.push(schirm(l, k));
    punkte.sort((a, b) => a[2] - b[2]);
    for (const p of punkte) {
      const vorn = p[2] > 0;
      ctx.fillStyle = `rgba(${KNOTEN},${vorn ? 0.38 + 0.58 * p[2] : 0.09})`;
      ctx.beginPath(); ctx.arc(px(p), py(p), vorn ? 1.2 + 1.3 * p[2] : 0.8, 0, TAU); ctx.fill();
    }

    // Querfaeden vom Kern zum Ring, nur von vorn liegenden Knoten
    ctx.lineWidth = 0.7;
    for (const [li, k, ai] of quer) {
      const p = schirm(lagen[li], k); if (p[2] < 0.15) continue;
      const sx = px(p), sy = py(p), [ax, ay] = ankerPt(ai, R * 0.9);
      ctx.strokeStyle = `rgba(${FADEN},${0.06 + 0.12 * p[2]})`;
      ctx.beginPath(); ctx.moveTo(sx, sy);
      ctx.quadraticCurveTo((sx + ax) / 2 + (cy - sy) * 0.2, (sy + ay) / 2 + (sx - cx) * 0.2, ax, ay);
      ctx.stroke();
    }
  }

  let sichtbar = true, t0 = performance.now(), lauf = 0;
  function tick(now) {
    zeichne((now - t0) / 1000);
    if (sichtbar && !reduziert) lauf = requestAnimationFrame(tick);
  }
  groesse();
  zeichne(4);
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
  window.addEventListener('resize', () => { groesse(); if (reduziert) zeichne(4); });
})();
