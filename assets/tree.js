/* The NL/OS data tree, live on the page (26.09.2026, Nicky: "the tree scroll isn't smooth enough … can we make it even
   nicer"). A 1:1 port of the film's tree generator (explainer-video/ae/scripts/nlos_build.jsx, tree(), seed 47: same
   random sequence, same branches, blossoms and links) drawn on a canvas from a virtual time T that the scroll drives.
   No video, no frames: every scroll position is a fresh, sharp drawing, so the growth is as smooth as the scroll itself.
   Film schedule (09 + 10b, compressed): trunk and main branches with "MODEL 2026", a pulse and the crown with 2027, a
   pulse and the twigs with 2028, the blossoms, the branch words make way, six files land on the crown, the links draw.
     NLTree.create(canvas, texts) -> { draw(T), setTexts(t), END, resize() } */
(function (global) {
  const RED = [240, 65, 63], LIGHT = [242, 107, 103], INK = [240, 239, 236], CHIP = '#232325', CHIPS = '#48484a';
  const W = [16, 9.5, 6.6, 4.6, 3.3, 2.4], MAXL = 5, FY = -250, R = 520;
  const MONO = '"SF Mono", "IBM Plex Mono", Menlo, Consolas, monospace';
  const rgba = (c, a) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;
  const cl = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
  const pr = (t, a, b) => cl((t - a) / (b - a));
  const eio = x => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
  const eo = x => 1 - Math.pow(1 - x, 3);
  const back = x => x <= 0 ? 0 : x >= 1 ? 1 : 1 + 2.70158 * Math.pow(x - 1, 3) + 1.70158 * Math.pow(x - 1, 2);

  // ---------- schedule (virtual seconds) ----------
  const T9 = 0.25, TM0 = T9 + 0.2, TY1 = 2.3, TY2 = 4.2;
  const LV = [[T9, T9 + 0.5], [T9 + 0.4, T9 + 0.95], [T9 + 0.85, T9 + 1.35], [TY1 + 0.05, TY1 + 0.55], [TY1 + 0.4, TY1 + 0.9], [TY2 + 0.05, TY2 + 0.5]];
  const BLOOM = [TY2 + 0.25, TY2 + 1.3], TBF = 5.9, TF0 = 6.3, LINKS = [7.0, 7.9], END = 8.9;

  // ---------- the generator (same calls, same order as nlos_build.jsx) ----------
  function lcg(seed) { let s = seed; return () => { s = (s * 1103515245 + 12345) % 2147483648; return s / 2147483648; }; }
  function build(seed) {
    const rnd = lcg(seed), segs = [], mids = [], tips = [], forks = [];
    function segment(p0, p1, lvl, par) {
      const dx = p1[0] - p0[0], dy = p1[1] - p0[1], len = Math.sqrt(dx * dx + dy * dy);
      const bend = (rnd() - 0.5) * (lvl === 0 ? 0.08 : 0.2) * len;
      const mid = [(p0[0] + p1[0]) / 2 - dy / len * bend, (p0[1] + p1[1]) / 2 + dx / len * bend];
      const c1 = [p0[0] + (mid[0] - p0[0]) * 0.6, p0[1] + (mid[1] - p0[1]) * 0.6], c2 = [p1[0] + (mid[0] - p1[0]) * 0.6, p1[1] + (mid[1] - p1[1]) * 0.6];
      const win = LV[lvl];
      let t0 = win[0] + rnd() * 0.12, t1 = win[1] + rnd() * 0.12;
      if (par !== null) t0 = Math.max(t0, segs[par].t1 - 0.06);
      t1 = Math.max(t1, t0 + 0.22);
      const pts = [];   // the cubic, sampled (for drawing partial lengths and tapers)
      for (let i = 0; i <= 20; i++) {
        const u = i / 20, v = 1 - u;
        pts.push([v * v * v * p0[0] + 3 * v * v * u * c1[0] + 3 * v * u * u * c2[0] + u * u * u * p1[0],
                  v * v * v * p0[1] + 3 * v * v * u * c1[1] + 3 * v * u * u * c2[1] + u * u * u * p1[1]]);
      }
      segs.push({ p0, p1, pts, lvl, t0, t1, parent: par, w0: W[lvl], w1: W[Math.min(lvl + 1, MAXL)] * (lvl === MAXL ? 0.55 : 1) });
      return segs.length - 1;
    }
    function grow(p0, ang, len, lvl, par) {
      ang = Math.max(-100, Math.min(100, ang));
      const a = ang * Math.PI / 180, ux = Math.sin(a), uy = -Math.cos(a);
      let p1 = [p0[0] + len * ux, p0[1] + len * uy], clamped = false;
      const lim = R * (0.88 + rnd() * 0.12), ex = p1[0], ey = p1[1] - FY;
      if (ex * ex + ey * ey > lim * lim) {
        const ox = p0[0], oy = p0[1] - FY, b = ox * ux + oy * uy, c = ox * ox + oy * oy - lim * lim, disc = b * b - c;
        if (disc < 0) return;
        const s = -b + Math.sqrt(disc);
        if (s < 18) return;
        len = s; p1 = [p0[0] + s * ux, p0[1] + s * uy]; clamped = true;
      }
      const idx = segment(p0, p1, lvl, par);
      if (lvl === 1) mids.push({ p: p1, a: ang, t: segs[idx].t1 });
      if (lvl >= MAXL || clamped || len < 22) { tips.push({ p: p1, t: segs[idx].t1, lvl, a: ang }); return; }
      forks.push({ p: p1, t: segs[idx].t1, lvl });
      const outw = ang === 0 ? (rnd() < 0.5 ? -1 : 1) : (ang > 0 ? 1 : -1);
      const side = rnd() < 0.68 ? outw : -outw;
      grow(p1, ang * 0.84 + (rnd() - 0.5) * 14, len * 0.72, lvl + 1, idx);
      const a2 = ang + side * (26 + rnd() * 16), l2 = len * (0.55 + rnd() * 0.11);
      grow(p1, a2, l2, lvl + 1, idx);
      if (lvl <= 2 && rnd() < 0.5) grow(p1, ang - side * (20 + rnd() * 14), len * 0.48, lvl + 1, idx);
    }
    const trunk = segment([0, 0], [0, FY], 0, null);
    [-64, -23, 21, 61].forEach(m => { const am = m + (rnd() - 0.5) * 8, lm = 205 + rnd() * 24; grow([0, FY], am, lm, 1, trunk); });

    const fr = [];
    const bloom = (p, t, d, col, op, main) => fr.push({ p, t, d, col, op: op / 100, main });
    const btime = t => Math.max(t + 0.05, BLOOM[0] + rnd() * (BLOOM[1] - BLOOM[0]));
    for (let i = 0; i < tips.length; i++) {
      const tb = btime(tips[i].t), cnt = 3 + Math.floor(rnd() * 3);
      bloom(tips[i].p, tb, 12 + rnd() * 8, rnd() < 0.2 ? LIGHT : RED, 80 + rnd() * 20, true);
      for (let j = 1; j < cnt; j++) {
        const an = rnd() * 6.283, rr = 8 + rnd() * 13;
        const t2 = tb + 0.06 + rnd() * 0.22, d2 = 6 + rnd() * 8, c2 = rnd() < 0.22 ? LIGHT : RED, o2 = 65 + rnd() * 35;
        bloom([tips[i].p[0] + Math.cos(an) * rr, tips[i].p[1] + Math.sin(an) * rr], t2, d2, c2, o2, false);
      }
      if (rnd() < 0.15) { const x3 = (rnd() - 0.5) * 16, y3 = (rnd() - 0.5) * 16, d3 = 26 + rnd() * 8; bloom([tips[i].p[0] + x3, tips[i].p[1] + y3], tb + 0.1, d3, LIGHT, 35, false); }
    }
    for (let f = 0; f < forks.length; f++) {
      if (forks[f].lvl >= 3 && rnd() < 0.35) { const t4 = forks[f].t + 0.1 + rnd() * 0.3, d4 = 6 + rnd() * 3; bloom(forks[f].p, t4, d4, RED, 85, false); }
    }
    for (let sg = 0; sg < segs.length; sg++) {
      const S0 = segs[sg];
      if (S0.lvl >= 3 && rnd() < 0.25) {
        const u = 0.4 + rnd() * 0.3, t5 = btime(S0.t1), d5 = 5 + rnd() * 4, c5 = rnd() < 0.3 ? LIGHT : RED;
        bloom([S0.p0[0] + (S0.p1[0] - S0.p0[0]) * u, S0.p0[1] + (S0.p1[1] - S0.p0[1]) * u], t5, d5, c5, 75, false);
      }
    }
    const mains = fr.filter(f => f.main), links = [], seen = {};
    for (let fa = 0; fa < mains.length && links.length < 110; fa++) {
      const cand = [];
      for (let fb = 0; fb < mains.length; fb++) {
        if (fb === fa) continue;
        const ddx = mains[fb].p[0] - mains[fa].p[0], ddy = mains[fb].p[1] - mains[fa].p[1], dd = Math.sqrt(ddx * ddx + ddy * ddy);
        if (dd > 90 && dd < 380) cand.push(fb);
      }
      const take = rnd() < 0.5 ? 2 : 1;
      for (let q = 0; q < take && cand.length; q++) {
        const pick = cand.splice(Math.floor(rnd() * cand.length), 1)[0];
        const key = Math.min(fa, pick) + '_' + Math.max(fa, pick);
        if (seen[key]) continue;
        seen[key] = true;
        const A = mains[fa], B = mains[pick], red = rnd() < 0.7;
        const tl0 = Math.max(Math.max(A.t, B.t) + 0.12, LINKS[0] + rnd() * (LINKS[1] - LINKS[0]));
        links.push({ a: A.p, b: B.p, red, t: tl0 });
      }
    }
    // the red pulses that run up trunk and main branches at every model change (treePulse, levels 0-2)
    const D = [0.34, 0.3, 0.26, 0.22], pulses = [];
    [TY1 - 0.05, TY2 - 0.05].forEach(tp => {
      const st = {};
      segs.forEach((s, i) => {
        if (s.lvl > 2) return;
        const t0 = s.parent === null ? tp : st[s.parent] + D[segs[s.parent].lvl];
        st[i] = t0; pulses.push({ i, t0, d: D[s.lvl] });
      });
    });
    const files = tips.slice().sort((u, v) => Math.atan2(u.p[1], u.p[0]) - Math.atan2(v.p[1], v.p[0]));
    const filePts = [0, 1, 2, 3, 4, 5].map(fi => files[Math.floor((fi + 0.5) * files.length / 6)].p);
    return { segs, mids: mids.slice(0, 4), fr, links, pulses, filePts };
  }

  // ---------- drawing ----------
  function create(canvas, texts) {
    const ctx = canvas.getContext('2d'), T = build(47);
    let TX = texts, scale = 1, ox = 0, oy = 0, dpr = 1;
    // world box: crown ±545 + file chips, from above the crown to below the model chip
    const WX0 = -640, WX1 = 640, WY0 = -820, WY1 = 96;
    const glow = document.createElement('canvas'); glow.width = glow.height = 64;
    (function () { const g = glow.getContext('2d'), gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
      gr.addColorStop(0, 'rgba(240,65,63,0.55)'); gr.addColorStop(0.4, 'rgba(240,65,63,0.18)'); gr.addColorStop(1, 'rgba(240,65,63,0)');
      g.fillStyle = gr; g.fillRect(0, 0, 64, 64); })();
    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const cw = canvas.clientWidth || 700, ch = canvas.clientHeight || 500;
      canvas.width = Math.round(cw * dpr); canvas.height = Math.round(ch * dpr);
      scale = Math.min(cw / (WX1 - WX0), ch / (WY1 - WY0)) * dpr;
      ox = canvas.width / 2; oy = canvas.height - WY1 * scale - (ch * dpr - (WY1 - WY0) * scale) / 2;
    }
    const X = x => ox + x * scale, Y = y => oy + y * scale;
    function branch(s, f, fromF) {   // the visible part [fromF, f] of a segment as a tapered shape
      if (f <= fromF) return;
      const P = s.pts, n = P.length - 1, a = fromF * n, b = f * n, pts = [];
      const at = u => { const i = Math.min(n - 1, Math.floor(u)), k = u - i; return [P[i][0] + (P[i + 1][0] - P[i][0]) * k, P[i][1] + (P[i + 1][1] - P[i][1]) * k]; };
      pts.push(at(a)); for (let i = Math.ceil(a); i < b; i++) if (i > a) pts.push(P[i]); pts.push(at(b));
      if (pts.length < 2) return;
      const L = [], Rr = [], m = pts.length - 1;
      for (let i = 0; i <= m; i++) {
        const p = pts[i], q = pts[Math.min(m, i + 1)], o = pts[Math.max(0, i - 1)];
        let nx = -(q[1] - o[1]), ny = q[0] - o[0]; const nl = Math.hypot(nx, ny) || 1; nx /= nl; ny /= nl;
        const w = (s.w0 + (s.w1 - s.w0) * (i / m)) * 0.5 * scale;
        L.push([X(p[0]) + nx * w, Y(p[1]) + ny * w]); Rr.push([X(p[0]) - nx * w, Y(p[1]) - ny * w]);
      }
      ctx.beginPath(); ctx.moveTo(L[0][0], L[0][1]);
      for (let i = 1; i <= m; i++) ctx.lineTo(L[i][0], L[i][1]);
      for (let i = m; i >= 0; i--) ctx.lineTo(Rr[i][0], Rr[i][1]);
      ctx.closePath(); ctx.fill();
      ctx.beginPath(); ctx.arc(X(pts[m][0]), Y(pts[m][1]), s.w1 * 0.5 * scale, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(X(pts[0][0]), Y(pts[0][1]), s.w0 * 0.5 * scale, 0, Math.PI * 2); ctx.fill();
    }
    function tracked(str, x, y, size, color, align) {   // mono caps with 0.14 em tracking, drawn letter by letter (Safari has no ctx.letterSpacing)
      ctx.font = `500 ${size}px ${MONO}`; ctx.fillStyle = color; ctx.textBaseline = 'middle';
      const sp = size * 0.14, ws = [...str].map(ch => ctx.measureText(ch).width), tw = ws.reduce((p, w) => p + w, 0) + sp * (ws.length - 1);
      let cx = align === 'left' ? x : x - tw / 2;
      [...str].forEach((ch, i) => { ctx.fillText(ch, cx, y); cx += ws[i] + sp; });
      return tw;
    }
    function chip(str, x, y, k, a, size, h) {   // the film's chip: dark pill, grey outline, mono caps
      if (k <= 0 || a <= 0) return;
      ctx.save(); ctx.globalAlpha = a; ctx.translate(X(x), Y(y)); ctx.scale(k, k);
      const fs = size * scale, hh = h * scale;
      ctx.font = `500 ${fs}px ${MONO}`;
      const tw = [...str].reduce((p, ch) => p + ctx.measureText(ch).width, 0) + fs * 0.14 * (str.length - 1), w = tw + 36 * scale;
      ctx.beginPath(); ctx.roundRect ? ctx.roundRect(-w / 2, -hh / 2, w, hh, hh / 2) : ctx.rect(-w / 2, -hh / 2, w, hh);
      ctx.fillStyle = CHIP; ctx.fill(); ctx.lineWidth = Math.max(1, scale); ctx.strokeStyle = CHIPS; ctx.stroke();
      tracked(str, 0, fs * 0.04, fs, rgba(INK, 1), 'center');
      ctx.restore();
    }
    function draw(t) {
      ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, canvas.width, canvas.height);
      // ground + seed
      const gq = eo(pr(t, 0, 0.8));
      ctx.fillStyle = CHIPS; ctx.fillRect(X(-560 * gq), Y(0) - scale, 1120 * gq * scale, Math.max(1, 2 * scale));
      // branches (INK), then the red pulses on top
      ctx.fillStyle = rgba(INK, 1);
      T.segs.forEach(s => { const f = eio(pr(t, s.t0, s.t1)); if (f > 0) branch(s, f, 0); });
      ctx.fillStyle = rgba(RED, 1);
      T.pulses.forEach(p => {
        const s = T.segs[p.i], e = pr(t, p.t0, p.t0 + p.d), b = pr(t, p.t0 + p.d * 0.45, p.t0 + p.d * 1.45);
        if (e > b) { const w0 = s.w0, w1 = s.w1; s.w0 += 1.6; s.w1 += 1.6; branch(s, e, b); s.w0 = w0; s.w1 = w1; }
      });
      const sd = back(pr(t, 0, 0.35));
      if (sd > 0) { ctx.beginPath(); ctx.arc(X(0), Y(0), 12 * sd * scale, 0, Math.PI * 2); ctx.fillStyle = rgba(RED, 1); ctx.fill(); }
      // links
      ctx.lineCap = 'round';
      T.links.forEach(l => {
        const q = eo(pr(t, l.t, l.t + 0.5)); if (q <= 0) return;
        ctx.strokeStyle = rgba(l.red ? RED : LIGHT, l.red ? 0.5 : 0.38); ctx.lineWidth = Math.max(0.8, 1.1 * scale);
        ctx.beginPath(); ctx.moveTo(X(l.a[0]), Y(l.a[1])); ctx.lineTo(X(l.a[0] + (l.b[0] - l.a[0]) * q), Y(l.a[1] + (l.b[1] - l.a[1]) * q)); ctx.stroke();
      });
      // blossoms with their glow
      ctx.globalCompositeOperation = 'lighter';
      T.fr.forEach(f => { const k = back(pr(t, f.t, f.t + 0.35)); if (k <= 0) return; const r = f.d * 1.9 * k * scale; ctx.globalAlpha = 0.9 * f.op; ctx.drawImage(glow, X(f.p[0]) - r, Y(f.p[1]) - r, 2 * r, 2 * r); });
      ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = 1;
      T.fr.forEach(f => { const k = back(pr(t, f.t, f.t + 0.35)); if (k <= 0) return; ctx.fillStyle = rgba(f.col, f.op); ctx.beginPath(); ctx.arc(X(f.p[0]), Y(f.p[1]), f.d * 0.5 * k * scale, 0, Math.PI * 2); ctx.fill(); });
      // the branch words pop on the main branches and make way for the files
      T.mids.forEach((m, i) => {
        const side = m.p[0] < 0 ? -1 : 1, k = back(pr(t, m.t - 0.1, m.t + 0.3)), a = 1 - pr(t, TBF + i * 0.08, TBF + i * 0.08 + 0.6);
        chip(TX.branches[i], m.p[0] + side * 74, m.p[1] + 32, k, a, 16, 36);
      });
      // the six files land on the crown
      T.filePts.forEach((p, i) => chip(TX.files[i], p[0], p[1] - 28, back(pr(t, TF0 + i * 0.09, TF0 + i * 0.09 + 0.35)), 1, 14, 32));
      // the model chip at the root; the year flips on every model change, with a small beat
      const mk = back(pr(t, TM0, TM0 + 0.4)) * (1 + 0.08 * Math.sin(Math.PI * pr(t, TY1 - 0.05, TY1 + 0.3)) + 0.08 * Math.sin(Math.PI * pr(t, TY2 - 0.05, TY2 + 0.3)));
      if (mk > 0) {
        ctx.save(); ctx.translate(X(0), Y(56)); ctx.scale(mk, mk);
        const hh = 40 * scale, fs = 16 * scale, year = TX.years[t < TY1 ? 0 : t < TY2 ? 1 : 2];
        ctx.font = `500 ${fs}px ${MONO}`;
        const label = TX.model + '  ' + year, tw = [...label].reduce((p, ch) => p + ctx.measureText(ch).width, 0) + fs * 0.14 * (label.length - 1), w = tw + 44 * scale;
        ctx.beginPath(); ctx.roundRect ? ctx.roundRect(-w / 2, -hh / 2, w, hh, hh / 2) : ctx.rect(-w / 2, -hh / 2, w, hh); ctx.fillStyle = rgba(RED, 1); ctx.fill();
        tracked(label, 0, fs * 0.04, fs, '#fff', 'center');
        ctx.restore();
      }
    }
    resize();
    return { draw, resize, END, setTexts: t => { TX = t; } };
  }
  global.NLTree = { create, END };
})(window);
