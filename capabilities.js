/* "What it automates": six tiles, one switch each, MANUAL → AUTOMATED.
   The timeline tile then opens into a year planner, zooms into next month and
   folds back into its tile.

   Ported one to one from the TOS film (v11, 25.09.2026, section 0:55–1:12,
   spec in WEBSITE/TOS_Capabilities_Animation_Package). The motion is unchanged;
   colours, fonts and texts are this page's. Everything is a pure function of
   the clock `t`, and the clock only runs while the canvas is on screen, so
   nothing plays to an empty room.

   Layout follows the container: 3×2 tiles on desktop, 2×3 on tablets, one
   column on phones. On phones each tile waits until it is actually in view. */
(function () {
  const cv = document.getElementById('caps-cv');
  if (!cv) return;
  const ctx = cv.getContext('2d');
  const fig = cv.parentElement;
  const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------- tokens (style.css :root) ----------
  const RED = [240, 65, 63], RED_L = [255, 138, 128], INK = [240, 239, 236], INK2 = [163, 163, 171];
  const TILE = '#202022', TILE_LINE = [80, 80, 85], SW_OFF = [80, 80, 85], KNOB = [250, 250, 250];
  const CLIP = '#4a4a4f', CLIP_SEL = '#6c6c72', WAVE = '#6e6e73', WAVE_OFF = '#55555b', WORD_OFF = '#66666b';
  const BAR = '#3c3c40', BAR_IN = '#5c5c62', LANE_TX = [199, 199, 204];
  const SANS = '"Helvetica Neue", Helvetica, Inter, Arial, sans-serif';
  const MONO = '"SF Mono", "IBM Plex Mono", Menlo, "Courier New", monospace';

  const STR = {
    en: {
      caps: ['editing', 'design', 'motion graphics', 'transcripts', 'social media', 'timeline'],
      off: 'MANUAL', on: 'AUTOMATED', poster: 'Useful.', motion: 'Safe.',
      transcript: [['“Every', 'meeting,', 'every'], ['word,', 'searchable.”']],
      slots: ['Mon 09:00', 'Wed 12:30', 'Fri 18:00'],
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      monthsLong: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      lanes: ['Content', 'Campaigns', 'Social', 'Video'],
      bars: ['Podcast', 'Series', 'Launch campaign', 'Munich', 'London', 'Berlin', 'Interview', 'Short doc'],
      barsShort: ['Podcast', 'Series', 'Launch', 'MUC', 'LON', 'BER', 'Talk', 'Doc'],
      aria: 'Animation: six tiles (editing, design, motion graphics, transcripts, social media, timeline), each switch flips from manual to automated. The timeline then opens into a year planner and zooms into next month.'
    },
    de: {
      caps: ['schneiden', 'gestalten', 'motion graphics', 'transkripte', 'social media', 'timeline'],
      off: 'MANUELL', on: 'AUTOMATISIERT', poster: 'Nützlich.', motion: 'Sicher.',
      transcript: [['„Jedes', 'Meeting,', 'jedes'], ['Wort', 'durchsuchbar.“']],
      slots: ['Mo 09:00', 'Mi 12:30', 'Fr 18:00'],
      months: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
      monthsLong: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
      lanes: ['Redaktion', 'Kampagnen', 'Social', 'Video'],
      bars: ['Podcast', 'Serie', 'Launch-Kampagne', 'München', 'London', 'Berlin', 'Interview', 'Kurzdoku'],
      barsShort: ['Podcast', 'Serie', 'Launch', 'MUC', 'LON', 'BER', 'Talk', 'Doku'],
      aria: 'Animation: sechs Kacheln (Schneiden, Gestalten, Motion Graphics, Transkripte, Social Media, Timeline), jeder Schalter springt von manuell auf automatisiert. Danach öffnet sich die Timeline zum Jahresplaner und zoomt in den nächsten Monat.'
    }
  };
  const lang = () => (window.__lang === 'de' ? STR.de : STR.en);

  // ---------- calendar: this year, today, and next month as the zoom target ----------
  const NOW = new Date(), YEAR = NOW.getFullYear();
  const LEAP = (YEAR % 4 === 0 && YEAR % 100 !== 0) || YEAR % 400 === 0;
  const MS = [0];
  [31, LEAP ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31].forEach((l, i) => MS.push(MS[i] + l));
  const YL = MS[12];
  const TODAY = Math.round((Date.UTC(YEAR, NOW.getMonth(), NOW.getDate()) - Date.UTC(YEAR, 0, 1)) / 864e5);
  const TM = Math.min(11, NOW.getMonth() + 1);           // December zooms into itself
  const M0 = MS[TM], M1 = MS[TM + 1];
  const DOW0 = (new Date(YEAR, 0, 1).getDay() + 6) % 7;   // weekday of 1 January, 0 = Monday

  // the film's planner (built around October = day 273), rotated so the same
  // arrangement always lands on the target month; [lane, from, to, label index]
  const SHIFT = M0 - 273;
  const BARS = [[0, 15, 70], [0, 130, 185], [0, 215, 250], [0, 275, 283, 0], [0, 290, 301, 1], [0, 320, 355],
    [1, 30, 80], [1, 110, 160], [1, 190, 230], [1, 284, 305, 2], [1, 320, 350],
    [2, 5, 40], [2, 60, 100], [2, 150, 200], [2, 225, 265], [2, 284, 288, 3], [2, 291, 295, 4], [2, 298, 302, 5], [2, 310, 360],
    [3, 40, 75], [3, 100, 135], [3, 170, 215], [3, 240, 268], [3, 277, 283, 6], [3, 293, 300, 7], [3, 325, 358]]
    .map(([l, s, e, lb]) => {
      const s2 = lb === undefined ? (((s + SHIFT) % YL) + YL) % YL : s + SHIFT;
      let e2 = s2 + (e - s);
      if (e2 > YL) { if (lb === undefined) return null; e2 = YL; }
      return [l, s2, e2, lb];
    })
    .filter(Boolean);

  // ---------- images (small crops of this page's plates) ----------
  const IMG = {};
  ['design', 'social_1', 'social_2', 'social_3'].forEach(n => {
    const im = new Image();
    im.onload = () => { IMG[n] = im; if (still) draw(); };
    im.src = 'assets/caps/' + n + '.jpg';
  });

  // ---------- maths (the film's helpers, exact) ----------
  const cl = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
  const pr = (t, a, b) => cl((t - a) / (b - a));
  const eo = x => 1 - Math.pow(1 - x, 3);
  const eio = x => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
  const spring = (x, k) => x <= 0 ? 0 : x >= 1 ? 1 : 1 + (k + 1) * Math.pow(x - 1, 3) + k * Math.pow(x - 1, 2);
  const mix = (a, b, p) => a + (b - a) * p;
  const mixC = (a, b, p) => a.map((v, i) => Math.round(mix(v, b[i], p)));
  const rgba = (c, a) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;

  // ---------- drawing helpers ----------
  function rrect(x, y, w, h, r) {
    r = Math.min(r, w / 2, h / 2);
    ctx.beginPath(); ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
  }
  function ftext(s, x, y, font, col, a = 1, align = 'left') {
    if (a <= 0) return;
    ctx.font = font; ctx.textAlign = align; ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = rgba(col, a); ctx.fillText(s, x, y);
  }
  function disc(x, y, r, c, a) { ctx.fillStyle = rgba(c, a); ctx.beginPath(); ctx.arc(x, y, Math.max(0.1, r), 0, Math.PI * 2); ctx.fill(); }
  function ring(x, y, r, a, w) { if (a <= 0) return; ctx.strokeStyle = rgba(RED, a); ctx.lineWidth = w; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.stroke(); }
  function cover(im, x, y, w, h) {
    if (!im) { ctx.fillStyle = '#2c2c2e'; ctx.fillRect(x, y, w, h); return; }
    const sw = im.naturalWidth, sh = im.naturalHeight, r = Math.max(w / sw, h / sh), cw = w / r, ch = h / r;
    ctx.drawImage(im, (sw - cw) / 2, (sh - ch) / 2, cw, ch, x, y, w, h);
  }
  // label box: white box, dark type, the full stop in red; wipe 0..1 uncovers from the left
  function boxW(s, size) { ctx.font = `700 ${size}px ${SANS}`; return ctx.measureText(s).width + size * 0.8; }
  function cBox(s, x, y, size, wipe = 1) {
    if (wipe <= 0) return;
    const dot = s.endsWith('.'), body = dot ? s.slice(0, -1) : s;
    ctx.font = `700 ${size}px ${SANS}`;
    const bw = ctx.measureText(body).width, tw = bw + (dot ? ctx.measureText('.').width : 0);
    const px = size * 0.4, h = size * 1.24, w = tw + 2 * px, sl = (1 - wipe) * size * 0.5;
    ctx.save(); ctx.beginPath(); ctx.rect(x, y - 2, w * wipe, h + 4); ctx.clip();
    ctx.fillStyle = '#fafafa'; ctx.fillRect(x, y, w, h);
    ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = '#121214'; ctx.fillText(body, x + px - sl, y + size * 0.97);
    if (dot) { ctx.fillStyle = rgba(RED, 1); ctx.fillText('.', x + px - sl + bw, y + size * 0.97); }
    ctx.restore();
  }

  // ---------- layout ----------
  const TW = 530, TH = 290, GX = 37, GY = 36, PAD = 12, RAD = 26;
  let cols = 3, LW = 0, LH = 0, S = 1, K = 1, PLAN = null;
  const capRect = k => ({ x: (k % cols) * (TW + GX), y: Math.floor(k / cols) * (TH + GY), w: TW, h: TH });

  function layout() {
    const cw = fig.clientWidth;
    if (!cw) return;
    cols = cw >= 900 ? 3 : cw >= 560 ? 2 : 1;
    const rows = 6 / cols;
    LW = cols * TW + (cols - 1) * GX;
    LH = rows * TH + (rows - 1) * GY;
    S = cw / LW;                                      // CSS px per logical unit
    // the canvas bleeds PAD into the gutter (room for the glow), so the tiles line up with the text
    cv.style.width = (LW + 2 * PAD) * S + 'px';
    cv.style.marginLeft = -PAD * S + 'px';
    // the planner covers the last two rows: the whole grid on desktop,
    // tiles 3–6 on tablets, Social + Timeline on phones
    PLAN = { x: 0, y: (rows - 2) * (TH + GY), w: LW, h: 2 * TH + GY };
    const hCss = (LH + 2 * PAD) * S, dpr = Math.min(2, window.devicePixelRatio || 1);
    const pw = Math.round((LW + 2 * PAD) * S * dpr), ph = Math.round(hCss * dpr);
    cv.style.height = hCss + 'px';
    if (cv.width !== pw) cv.width = pw;
    if (cv.height !== ph) cv.height = ph;
    K = S * dpr;
  }

  // ---------- the six mini-animations (inside B; u = time since the tile's cue) ----------
  function capCut(t, u, B) {
    const lh = 30, gap = 12, y0 = B.y + 22, e = eio(pr(u, 0.55, 1.05));
    rrect(B.x + 60, y0, 170, lh, 7); ctx.fillStyle = rgba(RED, 0.95); ctx.fill();
    let x = B.x;
    [96, 140 - 60 * e, 110, 100].forEach((w, i) => {   // 96+140+110+100+18 = 464, fits in 466
      rrect(x, y0 + lh + gap, w, lh, 7); ctx.fillStyle = i === 1 ? CLIP_SEL : CLIP; ctx.fill(); x += w + 6;
    });
    ctx.fillStyle = WAVE;
    for (let i = 0; i < 64; i++) {
      const h = 4 + 22 * Math.abs(Math.sin(i * 0.9) * Math.cos(i * 0.37));
      ctx.fillRect(B.x + i * (B.w / 64), y0 + 2 * (lh + gap) + lh / 2 - h / 2, 3, h);
    }
    const bl = Math.sin(Math.PI * pr(u, 0.35, 0.65));
    if (bl > 0) { ctx.fillStyle = rgba(RED_L, bl); ctx.fillRect(B.x + 182 - 1.5, y0 - 8, 3, 3 * lh + 2 * gap + 16); }
    const ph = B.x + ((t * 0.3 + 0.1) % 1) * B.w;
    ctx.fillStyle = rgba(INK, 1); ctx.fillRect(ph - 1, y0 - 10, 2, 3 * lh + 2 * gap + 20);
    ctx.beginPath(); ctx.moveTo(ph - 8, y0 - 16); ctx.lineTo(ph + 8, y0 - 16); ctx.lineTo(ph, y0 - 6); ctx.fill();
  }

  function capDesign(t, u, B, L) {
    const ph = B.h, pw = ph * 0.8, x0 = B.x, y0 = B.y;
    rrect(x0, y0, pw, ph, 8); ctx.fillStyle = '#0e0e10'; ctx.fill();
    ctx.save(); rrect(x0, y0, pw, ph, 8); ctx.clip(); cover(IMG.design, x0, y0, pw, ph * 0.55); ctx.restore();
    ctx.strokeStyle = '#4a4a4f'; ctx.lineWidth = 1.5; rrect(x0, y0, pw, ph, 8); ctx.stroke();
    cBox(L.poster, x0 + 9, y0 + ph * 0.47, 17, eo(pr(u, 0.2, 0.55)));
    const la = pr(u, 0.4, 0.6);
    if (la > 0) {
      ctx.font = `700 13px ${SANS}`;
      const w1 = ctx.measureText('NL/OS').width;
      ftext('NL/OS', x0 + pw - 9 - w1 - 4, y0 + ph - 10, ctx.font, INK, la);
      disc(x0 + pw - 11, y0 + ph - 12.5, 2.2, RED, la);
    }
    const g = Math.sin(Math.PI * pr(u, 0.1, 1.0));
    if (g > 0) {
      ctx.save(); ctx.setLineDash([5, 5]); ctx.strokeStyle = rgba(RED, 0.9 * g); ctx.lineWidth = 1.5; ctx.beginPath();
      ctx.moveTo(x0 + 9, y0 - 10); ctx.lineTo(x0 + 9, y0 + ph + 10);
      ctx.moveTo(x0 - 10, y0 + ph * 0.47); ctx.lineTo(x0 + pw + 10, y0 + ph * 0.47); ctx.stroke(); ctx.restore();
    }
    let fx = x0 + pw + 24;
    [[80, 80], [50, 90], [140, 79]].forEach(([w, h], i) => {
      const q = spring(pr(u, 0.55 + i * 0.15, 0.95 + i * 0.15), 1.5);
      if (q > 0) {
        ctx.save(); ctx.translate(fx + w / 2, y0 + ph - h / 2); ctx.scale(q, q); ctx.translate(-w / 2, -h / 2);
        rrect(0, 0, w, h, 6); ctx.fillStyle = '#0e0e10'; ctx.fill();
        ctx.save(); rrect(0, 0, w, h, 6); ctx.clip(); cover(IMG.design, 0, 0, w, h * 0.55); ctx.restore();
        ctx.strokeStyle = '#4a4a4f'; ctx.lineWidth = 1.5; rrect(0, 0, w, h, 6); ctx.stroke();
        ctx.fillStyle = '#fafafa'; ctx.fillRect(5, h * 0.5, w * 0.5, 8); disc(5 + w * 0.5 + 5, h * 0.5 + 4, 2.6, RED, 1);
        ctx.restore();
      }
      fx += w + 12;
    });
  }

  function capMotion(t, u, B, L) {
    const P0 = [B.x + 30, B.y + B.h - 20], P1 = [B.x + B.w * 0.3, B.y - 40], P2 = [B.x + B.w * 0.6, B.y + B.h + 20], P3 = [B.x + B.w - 60, B.y + 20];
    const bz = p => { const q = 1 - p; return [0, 1].map(i => q * q * q * P0[i] + 3 * q * q * p * P1[i] + 3 * q * p * p * P2[i] + p * p * p * P3[i]); };
    const d = eo(pr(u, 0.05, 0.6));
    ctx.save(); ctx.setLineDash([6, 7]); ctx.strokeStyle = 'rgba(163,163,171,0.9)'; ctx.lineWidth = 2; ctx.beginPath();
    for (let i = 0; i <= 48; i++) { const [x, y] = bz(i / 48 * d); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }
    ctx.stroke(); ctx.restore();
    [[0, INK], [0.5, RED], [1, INK]].forEach(([p, c]) => {
      if (p > d + 0.01) return;
      const [x, y] = bz(p);
      ctx.save(); ctx.translate(x, y); ctx.rotate(Math.PI / 4); ctx.fillStyle = rgba(c, 1); ctx.fillRect(-7, -7, 14, 14); ctx.restore();
    });
    const on = pr(u, 0.3, 0.5);
    if (on <= 0) return;
    const cyc = (u * 0.5) % 1, bw = boxW(L.motion, 22), bh = 22 * 1.24;
    for (let j = 3; j >= 0; j--) {
      const [x, y] = bz(eio(cl(cyc * 1.3 - j * 0.035)));
      ctx.save(); ctx.globalAlpha *= on * (j ? 0.16 : 1); cBox(L.motion, x - bw / 2, y - bh / 2 - 2, 22); ctx.restore();
    }
  }

  function capTrans(t, u, B, L) {
    const n = 52, bw = B.w / n, prog = pr(u, 0.2, 2.6);
    for (let i = 0; i < n; i++) {
      const h = 6 + 34 * Math.abs(Math.sin(i * 0.55 + Math.sin(i * 0.21) * 2)) * (0.65 + 0.35 * Math.sin(t * 5 + i));
      ctx.fillStyle = i / n < prog ? rgba(RED, 1) : WAVE_OFF;
      ctx.fillRect(B.x + i * bw, B.y + 26 - h / 2, Math.max(2, bw - 3), h);
    }
    const words = L.transcript, nW = words.flat().length;
    let idx = 0;
    ctx.font = `600 26px ${SANS}`; ctx.textBaseline = 'alphabetic'; ctx.textAlign = 'left';
    const sp = ctx.measureText(' ').width;
    words.forEach((line, li) => {
      let x = B.x;
      const y = B.y + 86 + li * 40;
      line.forEach(w => {
        const on = idx / nW < prog, cur = on && (idx + 1) / nW >= prog && prog < 1, tw = ctx.measureText(w).width;
        if (cur) { rrect(x - 5, y - 26, tw + 10, 35, 7); ctx.fillStyle = rgba(RED, 1); ctx.fill(); }
        ctx.fillStyle = on ? rgba(INK, 1) : WORD_OFF; ctx.fillText(w, x, y);
        x += tw + sp; idx++;
      });
    });
  }

  function capSocial(t, u, B, L) {
    const ims = [IMG.social_1, IMG.social_2, IMG.social_3], h = B.h - 36, w = h * 9 / 16;
    L.slots.forEach((sl, i) => {
      const x = B.x + i * (w + 30), y = B.y;
      const q = spring(pr(u, 0.05 + i * 0.12, 0.5 + i * 0.12), 1.4);
      if (q > 0) {
        ctx.save(); ctx.translate(x + w / 2, y + h / 2); ctx.scale(0.8 + 0.2 * q, 0.8 + 0.2 * q); ctx.translate(-w / 2, -h / 2);
        ctx.save(); rrect(0, 0, w, h, 12); ctx.clip(); cover(ims[i], 0, 0, w, h); ctx.restore();
        ctx.strokeStyle = '#4a4a4f'; ctx.lineWidth = 2; rrect(0, 0, w, h, 12); ctx.stroke();
        const ck = spring(pr(u, 0.75 + i * 0.3, 1.05 + i * 0.3), 1.8);
        if (ck > 0) {
          disc(w - 2, 2, 15 * ck, RED, 1);
          ctx.strokeStyle = rgba([255, 255, 255], ck); ctx.lineWidth = 3; ctx.lineCap = 'round';
          ctx.beginPath(); ctx.moveTo(w - 9, 2); ctx.lineTo(w - 4, 7); ctx.lineTo(w + 5, -3); ctx.stroke(); ctx.lineCap = 'butt';
        }
        ctx.restore();
      }
      ftext(sl, x + w / 2, y + h + 30, `600 18px ${SANS}`, INK2, pr(u, 0.3 + i * 0.12, 0.6 + i * 0.12), 'center');
    });
  }

  function capTimeMini(t, u, B, L) {
    const lh = 26, top = B.y + 34;
    for (let m = 0; m < 12; m++) ftext(L.months[m][0], B.x + (m + 0.5) * B.w / 12, B.y + 14, `600 17px ${SANS}`, INK2, 1, 'center');
    [[0, 0.05, 0.3], [0, 0.45, 0.7], [1, 0.2, 0.42], [1, 0.76, 0.84], [2, 0.1, 0.22], [2, 0.5, 0.66], [2, 0.8, 0.95]].forEach(([l, a, b], i) => {
      const q = eo(pr(u, 0.05 + i * 0.04, 0.4 + i * 0.04));
      if (q <= 0) return;
      rrect(B.x + a * B.w, top + l * (lh + 12), Math.max(3, (b - a) * B.w * q), lh, 7);
      ctx.fillStyle = l === 1 ? rgba(RED, 1) : CLIP; ctx.fill();
    });
    ctx.fillStyle = rgba(RED, 1); ctx.fillRect(B.x + (TODAY + 0.5) / YL * B.w - 1, B.y + 22, 2, 3 * (lh + 12));
  }

  const CAP_FN = [capCut, capDesign, capMotion, capTrans, capSocial, capTimeMini];

  // ---------- state: every cue is a clock time ----------
  let clock = 0, T0 = null, FO = null, PK = null, G = 1, gate = true;   // gate: wait for each tile to be in view
  const cue = [null, null, null, null, null, null];   // tile entrance + switch
  const cc = [null, null, null, null, null, null];    // mini-animation + highlight (replayed on click)
  // film spacing between the spoken words; the timeline gap is shortened from 3.3 s
  const OFF = [0, 1.13, 2.25, 3.38, 4.68, 6.1];
  // planner beats relative to its cue (film: year +1.27, month +2.93)
  const P_YEAR = 1.15, P_MONTH = 3.3, P_FOLD = 7.4;

  function tile(k, t, R, a, L) {
    if (a <= 0) return;
    const u = t - cue[k], uc = t - cc[k];
    ctx.save(); ctx.globalAlpha = G * a;
    rrect(R.x, R.y, R.w, R.h, RAD); ctx.fillStyle = TILE; ctx.fill();
    const hl = Math.sin(Math.PI * pr(uc, 0, 0.9));
    ctx.lineWidth = 1.5 + 1.5 * hl; ctx.strokeStyle = rgba(mixC(TILE_LINE, RED, hl), 1); ctx.stroke();
    ftext(L.caps[k], R.x + 32, R.y + R.h - 52, `700 36px ${SANS}`, INK);
    // the switch flips half a second after the tile lands (timeline: sooner, it expands)
    const on = k === 5 ? eo(pr(u, 0.12, 0.32)) : eo(pr(u, 0.45, 0.7));
    ctx.save(); ctx.beginPath(); ctx.rect(R.x + 30, R.y + R.h - 44, 320, 28); ctx.clip();
    if ('letterSpacing' in ctx) ctx.letterSpacing = '2px';
    ftext(L.off, R.x + 32, R.y + R.h - 22 - 26 * on, `600 15px ${MONO}`, INK2, 1 - on);
    ftext(L.on, R.x + 32, R.y + R.h - 22 + 26 * (1 - on), `600 15px ${MONO}`, RED, on);
    if ('letterSpacing' in ctx) ctx.letterSpacing = '0px';
    ctx.restore();
    const tx = R.x + R.w - 92, ty = R.y + R.h - 70, glow = on > 0 && on < 1;
    if (glow) { ctx.save(); ctx.shadowColor = rgba(RED, 0.9); ctx.shadowBlur = 24 * Math.sin(Math.PI * on) * K; }
    rrect(tx, ty, 60, 34, 17); ctx.fillStyle = rgba(mixC(SW_OFF, RED, on), 1); ctx.fill();
    if (glow) ctx.restore();
    disc(tx + 17 + 26 * on, ty + 17, 13, KNOB, 1);
    const fk = pr(u, k === 5 ? 0.3 : 0.68, k === 5 ? 0.8 : 1.2);
    if (fk > 0 && fk < 1) ring(tx + 43, ty + 17, 20 + 34 * eo(fk), 0.7 * (1 - fk), 2);
    CAP_FN[k](t, uc, { x: R.x + 32, y: R.y + 32, w: R.w - 64, h: R.h - 138 }, L);
    ctx.restore();
  }

  function planner(t, R, a, ca, L) {
    if (a <= 0) return;
    const narrow = R.w < 800;
    ctx.save(); ctx.globalAlpha = G * a;
    rrect(R.x, R.y, R.w, R.h, RAD); ctx.fillStyle = TILE; ctx.fill();
    ctx.strokeStyle = rgba(TILE_LINE, 1); ctx.lineWidth = 1.5; ctx.stroke();
    if (ca <= 0) { ctx.restore(); return; }
    ctx.globalAlpha = G * ca;
    ctx.save(); rrect(R.x, R.y, R.w, R.h, RAD); ctx.clip();

    const e = eio(pr(t, PK + P_MONTH - 0.15, PK + P_MONTH + 0.85));
    const F = narrow
      ? { title: 36, ty: 60, lx: 30, month: 17, day: 15, bar: 16, lane: 20, pad: 10 }
      : { title: 46, ty: 74, lx: 44, month: 24, day: 20, bar: R.w > 1300 ? 24 : 21, lane: 26, pad: R.w > 1300 ? 18 : 14 };
    ftext(String(YEAR), R.x + F.lx, R.y + F.ty, `700 ${F.title}px ${SANS}`, INK, 1 - pr(e, 0.2, 0.5));
    ftext(L.monthsLong[TM] + ' ' + YEAR, R.x + F.lx, R.y + F.ty, `700 ${F.title}px ${SANS}`, INK, pr(e, 0.5, 0.8));

    // wide: lane names on the left; narrow (phones): lane names above each lane
    let X0, W, HY, laneY, labelY, BH, gTop, gh;
    if (!narrow) {
      X0 = R.x + 260; W = R.w - 300; HY = R.y + 140;
      const LY = R.y + 182, LP = Math.min(116, (R.h - 182 - 22) / 4);
      BH = Math.min(66, LP - 38);
      laneY = i => LY + i * LP; labelY = i => LY + i * LP + BH * 0.64;
      gTop = HY + 18; gh = 4 * LP;
    } else {
      X0 = R.x + 30; W = R.w - 60; HY = R.y + 112;
      const LY = R.y + 146, LP = (R.h - 146 - 18) / 4;
      BH = Math.min(58, LP - 42);
      laneY = i => LY + i * LP + 32; labelY = i => LY + i * LP + 22;
      gTop = HY + 14; gh = R.y + R.h - 16 - gTop;
    }
    const a0 = mix(0, M0, e), b0 = mix(YL, M1, e), X = d => X0 + (d - a0) / (b0 - a0) * W;
    if (!narrow) L.lanes.forEach((l, i) => ftext(l, R.x + F.lx, labelY(i), `600 ${F.lane}px ${SANS}`, LANE_TX));

    ctx.save(); ctx.beginPath(); ctx.rect(X0 - 2, R.y, W + 4, R.h); ctx.clip();
    const ma = 1 - pr(e, 0.35, 0.65);
    for (let m = 0; m < 12; m++) {
      ctx.fillStyle = 'rgba(110,110,116,0.45)'; ctx.fillRect(X(MS[m]), gTop, 1.5, gh);
      ftext(L.months[m], (X(MS[m]) + X(MS[m + 1])) / 2, HY, `600 ${F.month}px ${SANS}`, m === TM ? INK : INK2, ma, 'center');
    }
    const da = pr(e, 0.55, 0.9);
    if (da > 0) {
      const sparse = W / (M1 - M0) < F.day * 1.6;   // phones and tablets: every fifth day
      for (let d = M0; d < M1; d++) {
        const x = X(d), dow = (d + DOW0) % 7, n = d - M0 + 1;
        if (dow >= 5) { ctx.fillStyle = `rgba(255,255,255,${(0.04 * da).toFixed(3)})`; ctx.fillRect(x, gTop, X(d + 1) - x, gh); }
        if (!sparse || n === 1 || n % 5 === 0) ftext(String(n), X(d + 0.5), HY, `600 ${F.day}px ${SANS}`, dow >= 5 ? [110, 110, 116] : [180, 180, 186], da, 'center');
      }
    }
    if (narrow) {
      // phones: the lane names sit inside the grid, so they get a knockout behind them
      ctx.font = `600 ${F.lane}px ${SANS}`;
      L.lanes.forEach((l, i) => {
        ctx.fillStyle = TILE; ctx.fillRect(R.x + F.lx - 4, labelY(i) - F.lane, ctx.measureText(l).width + 10, F.lane * 1.35);
        ftext(l, R.x + F.lx, labelY(i), ctx.font, LANE_TX);
      });
    }
    const PY = PK + P_YEAR;
    ctx.font = `600 ${F.bar}px ${SANS}`;
    // a lane whose names don't all fit its bars in the month view uses the short ones (MUC, LON, BER)
    const short = [false, false, false, false];
    BARS.forEach(([l, s, en, lb]) => {
      if (lb !== undefined && ctx.measureText(L.bars[lb]).width + 2 * F.pad + 10 > (en - s) / (M1 - M0) * W - 4) short[l] = true;
    });
    BARS.forEach(([l, s, en, lb], i) => {
      const q = eo(pr(t, PY - 0.3 + i * 0.03, PY + 0.3 + i * 0.03));
      if (q <= 0) return;
      const x1 = X(s) + 2, x2 = X(s + (en - s) * q) - 2, y = laneY(l);
      if (x2 < X0 - 80 || x1 > X0 + W + 80) return;
      rrect(x1, y, Math.max(4, x2 - x1), BH, narrow ? 12 : 14);
      ctx.fillStyle = l === 1 ? rgba(RED, 1) : (s >= M0 && s < M1 ? BAR_IN : BAR); ctx.fill();
      if (lb !== undefined) {
        const tx = (short[l] ? L.barsShort : L.bars)[lb], tw = ctx.measureText(tx).width;
        ftext(tx, x1 + F.pad, y + BH * 0.5 + F.bar * 0.36, ctx.font, INK, pr(x2 - x1, tw + 2 * F.pad - 14, tw + 2 * F.pad + 4));
      }
    });
    const tdx = X(TODAY + 0.5);
    ctx.fillStyle = rgba(RED, 1); ctx.fillRect(tdx - 1.5, gTop + 4, 3, gh - 4); disc(tdx, gTop + 4, 7, RED, 1);
    ctx.restore(); ctx.restore(); ctx.restore();
  }

  // how far the timeline tile is opened into the planner, 0..1
  function opened(t) {
    if (PK === null) return 0;
    return eio(pr(t, PK + 0.35, PK + 1.05)) * (1 - eio(pr(t, PK + P_FOLD, PK + P_FOLD + 0.7)));
  }

  function draw() {
    if (!PLAN) return;
    const L = lang(), t = clock;
    if (cv.getAttribute('aria-label') !== L.aria) cv.setAttribute('aria-label', L.aria);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, cv.width, cv.height);
    ctx.setTransform(K, 0, 0, K, PAD * K, PAD * K);
    G = FO === null ? 1 : 1 - pr(t, FO, FO + 0.3);
    if (T0 === null) return;
    const ex = opened(t);
    for (let k = 0; k < 6; k++) {
      const tk = cue[k];
      if (tk === null || t < tk - 0.05) continue;
      const q = spring(pr(t, tk - 0.05, tk + 0.45), 1.3), R = capRect(k), a = pr(t, tk - 0.05, tk + 0.15);
      ctx.save();
      if (k < 5) {
        const s = (0.86 + 0.14 * q) * (1 - 0.04 * ex);
        ctx.translate(R.x + R.w / 2, R.y + R.h / 2); ctx.scale(s, s); ctx.translate(-R.x - R.w / 2, -R.y - R.h / 2);
        tile(k, t, R, a * (1 - pr(ex, 0, 0.35)), L);
      } else {
        // first an empty card grows out of the tile, then the planner content appears
        const P = { x: mix(R.x, PLAN.x, ex), y: mix(R.y, PLAN.y, ex), w: mix(R.w, PLAN.w, ex), h: mix(R.h, PLAN.h, ex) };
        const s = 0.86 + 0.14 * q;
        ctx.translate(P.x + P.w / 2, P.y + P.h / 2); ctx.scale(s, s); ctx.translate(-P.x - P.w / 2, -P.y - P.h / 2);
        tile(k, t, R, a * (1 - pr(ex, 0, 0.2)), L);
        if (ex > 0) planner(t, P, pr(ex, 0, 0.2), pr(ex, 0.7, 1), L);
      }
      ctx.restore();
    }
  }

  // ---------- when does each tile get its cue ----------
  function inView(R) {
    const r = cv.getBoundingClientRect(), vh = window.innerHeight;
    const top = r.top + (PAD + R.y) * S, bot = top + R.h * S;
    if (bot - top > vh * 0.8) { const c = (top + bot) / 2; return c > vh * 0.15 && c < vh * 0.85; }
    return top >= vh * 0.06 && bot <= vh * 0.97;
  }
  const seen = k => inView(k === 5 && cols < 3 ? PLAN : capRect(k));

  function schedule() {
    if (FO !== null) {
      if (clock < FO + 0.35) return;
      FO = null; T0 = null; PK = null; cue.fill(null); cc.fill(null);
      gate = false;   // a replay is asked for, so it plays even where tiles sit off screen
    }
    if (T0 === null) { if (gate && !seen(0)) return; T0 = clock; }
    for (let k = 0; k < 6; k++) {
      if (cue[k] !== null) continue;
      if (k && clock < cue[k - 1] + 0.6) return;
      if (clock < T0 + 0.35 + OFF[k] || (gate && !seen(k))) return;
      cue[k] = cc[k] = clock;
      if (k === 5) PK = clock;
      return;
    }
  }

  // ---------- clock: runs only while on screen ----------
  let visible = false, raf = 0, last = 0;
  function frame(now) {
    raf = 0;
    if (!visible) return;
    clock += last ? Math.min(0.1, (now - last) / 1000) : 0;
    last = now;
    schedule();
    draw();
    raf = requestAnimationFrame(frame);
  }
  function wake() { if (!raf && visible) { last = 0; raf = requestAnimationFrame(frame); } }

  layout();
  if (still) {
    // reduced motion: the end state, drawn once
    T0 = 0; clock = 60;
    for (let k = 0; k < 6; k++) cue[k] = cc[k] = 0;
    cc[2] = 60 - 1.8;   // the motion-graphics label resting at the end of its path
    draw();
    document.addEventListener('click', e => { if (e.target.closest && e.target.closest('.lang-btn')) requestAnimationFrame(draw); });
  } else {
    new IntersectionObserver(es => {
      visible = es[0].isIntersecting;
      if (visible) wake();
    }, { rootMargin: '120px 0px' }).observe(cv);
  }
  new ResizeObserver(() => { layout(); draw(); }).observe(fig);

  // ---------- interaction: a tile replays itself, the timeline reopens the planner ----------
  function hit(ev) {
    const r = cv.getBoundingClientRect();
    const x = (ev.clientX - r.left) / S - PAD, y = (ev.clientY - r.top) / S - PAD;
    if (opened(clock) > 0.5) return (x >= PLAN.x && x <= PLAN.x + PLAN.w && y >= PLAN.y && y <= PLAN.y + PLAN.h) ? 5 : -1;
    for (let k = 0; k < 6; k++) {
      const R = capRect(k);
      if (cue[k] !== null && x >= R.x && x <= R.x + R.w && y >= R.y && y <= R.y + R.h) return k;
    }
    return -1;
  }
  if (!still) {
    cv.addEventListener('pointermove', ev => { cv.style.cursor = hit(ev) >= 0 ? 'pointer' : ''; });
    cv.addEventListener('click', ev => {
      const k = hit(ev);
      if (k < 0 || FO !== null) return;
      if (k === 5) {
        const ex = opened(clock);
        if (ex === 0) { PK = clock - 0.3; cc[5] = clock; }                 // open it again
        else if (clock < PK + P_FOLD) PK = clock - P_FOLD;                 // open: fold it now
      } else {
        cc[k] = clock;
      }
      wake();
    });
    const again = document.querySelector('.caps-replay');
    if (again) again.addEventListener('click', () => { if (T0 !== null && FO === null) { FO = clock; wake(); } });
  }
})();
