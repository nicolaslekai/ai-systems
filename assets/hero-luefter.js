/* Hero: Luefter drehen sich langsam + kleine Kamerafahrt beim Scrollen · consulting.nicolaslekai.com · 24.11.2026
   Nicky: "I think we could slowly turn the graphic card blades" — "do a little render of it and a little cinematic scroll".
   Kein Video, kein Modell: das Standbild bleibt die Quelle. Pro Luefter wird der Blattkranz (zwischen Nabe und Ring)
   in Polarkoordinaten um die Nabe abgetastet und Bild fuer Bild um den Drehwinkel versetzt wieder hingezeichnet.
   Radius wird relativ zum Ring gemessen (rho 0..1), deshalb bleibt der Ring fest und nichts Silbernes wandert ein.
   Wo der Luefter am Bildrand abgeschnitten ist, fuellt die Blattteilung (7 Blaetter) die Luecke.
   Scrollen: Bild faehrt langsam heran und sinkt etwas ab, Text hebt sich und blendet aus, Luefter drehen kurz schneller.
   "Bewegung reduzieren": nichts davon. Ohne JavaScript bleibt das Standbild. */
(function () {
  'use strict';
  const sec = document.querySelector('.hero-bild');
  const img = sec && sec.querySelector('img.hg');
  if (!img || !window.HTMLCanvasElement) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Masse in Bildpixeln: c = Mitte des Rings (Innenkante), r = Halbachsen, h = Nabe (Drehpunkt), hr = Nabe aussparen.
  // tex = gebackener Blattkranz (tools/luefter_textur.py): der Desktop-Luefter ist voll im Bild und dient beiden Fassungen,
  // fuer das Hochkant-Bild farblich angeglichen — dessen Luefter ist am linken Rand abgeschnitten.
  const BILDER = {
    'team-gpu.webp':      [{ c: [1230, 639], r: [168, 257], h: [1215, 642], hr: [70, 108], tex: 'luefter-polar.webp' }],
    'team-gpu-hoch.webp': [{ c: [115, 651],  r: [170, 262], h: [100, 649],  hr: [71, 108], tex: 'luefter-polar-hoch.webp' }]
  };
  const N = 1400, M = 200, TAU = Math.PI * 2;
  const GRUND = TAU / 7;          // rad/s: eine Umdrehung in 7 s
  const text = sec.querySelector('.wrap');

  const buehne = document.createElement('div');
  buehne.className = 'hero-luefter';
  buehne.setAttribute('aria-hidden', 'true');
  const schleier = sec.querySelector('.schleier');
  sec.insertBefore(buehne, schleier || img.closest('picture').nextSibling);

  let luefter = [], aktiv = false, winkel = 0, schub = 0, letzt = 0, scrollAlt = window.scrollY, start = 0, lauf = 0;

  function laden(url) {
    return new Promise((ok, nein) => { const t = new Image(); t.decoding = 'async'; t.onload = () => ok(t); t.onerror = nein; t.src = url; });
  }

  async function aufbauen() {
    const src = img.currentSrc || img.src, name = src.split('/').pop().split('?')[0];
    const cfg = BILDER[name], meinLauf = ++lauf;
    buehne.textContent = ''; luefter = [];
    if (!cfg || !img.naturalWidth) return;
    const nw = img.naturalWidth, nh = img.naturalHeight, ordner = src.slice(0, src.lastIndexOf('/') + 1);

    for (const f of cfg) {
      let t; try { t = await laden(ordner + f.tex); } catch (e) { continue; }
      if (meinLauf !== lauf) return;
      if (t.naturalWidth !== M || t.naturalHeight !== N) continue;
      const tc = document.createElement('canvas'); tc.width = M; tc.height = N;
      const tctx = tc.getContext('2d', { willReadFrequently: true }); tctx.drawImage(t, 0, 0);
      let tex; try { tex = tctx.getImageData(0, 0, M, N).data; } catch (e) { continue; }
      const [cx, cy] = f.c, [rx, ry] = f.r, px = (f.h[0] - cx) / rx, py = (f.h[1] - cy) / ry;
      const rand = new Float32Array(N);
      for (let i = 0; i < N; i++) { const a = TAU * i / N, dx = Math.cos(a), dy = Math.sin(a), b = px * dx + py * dy, c = px * px + py * py - 1; rand[i] = -b + Math.sqrt(b * b - c); }
      // Ausgabefeld: Ring-Huelle, auf das Bild beschnitten
      const x0 = Math.max(0, Math.floor(cx - rx)), y0 = Math.max(0, Math.floor(cy - ry));
      const x1 = Math.min(nw, Math.ceil(cx + rx)), y1 = Math.min(nh, Math.ceil(cy + ry));
      const w = x1 - x0, h = y1 - y0;
      const phi = new Int16Array(w * h).fill(-1), rhoI = new Uint8Array(w * h), alpha = new Uint8Array(w * h);
      for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
        const X = x0 + x + 0.5, Y = y0 + y + 0.5;
        const hu = (X - f.h[0]) / f.hr[0], hv = (Y - f.h[1]) / f.hr[1];
        const q = Math.sqrt(hu * hu + hv * hv);
        if (q < 1) continue;                                         // Nabe samt dunklem Rand bleibt das Standbild (24.11.: Kerbe am Nabenrand)
        const du = (X - cx) / rx - px, dv = (Y - cy) / ry - py;
        let a = Math.atan2(dv, du); if (a < 0) a += TAU;
        const i = Math.min(N - 1, Math.floor(a / TAU * N)), rho = Math.hypot(du, dv) / rand[i];
        if (rho >= 0.995) continue;                                  // Ring bleibt das Standbild
        phi[y * w + x] = i; rhoI[y * w + x] = Math.min(M - 1, Math.floor(rho * M));
        // weiche Kanten: an der Nabe ueber 14 %, am Ring ueber die letzten 4 %
        alpha[y * w + x] = Math.round(255 * Math.min(1, (q - 1) / 0.14, (0.995 - rho) / 0.04));
      }
      const cv = document.createElement('canvas'); cv.width = w; cv.height = h;
      buehne.appendChild(cv);
      const ctx = cv.getContext('2d');
      luefter.push({ cv, ctx, bild: ctx.createImageData(w, h), tex, phi, rhoI, alpha, x0, y0, w, h });
    }
    legen();
  }

  // Leinwaende ueber das Bild legen, mit derselben object-fit:cover-Rechnung wie der Browser
  function legen() {
    const bw = img.offsetWidth, bh = img.offsetHeight, nw = img.naturalWidth, nh = img.naturalHeight;
    if (!bw || !nw) return;
    Object.assign(buehne.style, { left: img.offsetLeft + 'px', top: img.offsetTop + 'px', width: bw + 'px', height: bh + 'px' });
    const s = Math.max(bw / nw, bh / nh), pos = getComputedStyle(img).objectPosition.split(' ');
    const pc = v => (v && v.endsWith('%')) ? parseFloat(v) / 100 : 0.5;
    const ox = (bw - nw * s) * pc(pos[0]), oy = (bh - nh * s) * pc(pos[1]);
    for (const l of luefter) Object.assign(l.cv.style, { left: (ox + l.x0 * s) + 'px', top: (oy + l.y0 * s) + 'px', width: (l.w * s) + 'px', height: (l.h * s) + 'px' });
  }

  function malen() {
    const shift = Math.floor((winkel / TAU) * N) % N;
    for (const l of luefter) {
      const out = l.bild.data, { tex, phi, rhoI } = l;
      for (let p = 0, n = phi.length; p < n; p++) {
        const i = phi[p], o = p * 4;
        if (i < 0) { out[o + 3] = 0; continue; }
        let k = i - shift; if (k < 0) k += N;
        const s = (k * M + rhoI[p]) * 4;
        out[o] = tex[s]; out[o + 1] = tex[s + 1]; out[o + 2] = tex[s + 2]; out[o + 3] = l.alpha[p];
      }
      l.ctx.putImageData(l.bild, 0, 0);
    }
  }

  // Kamerafahrt: Ankommen (leichter Rueckzug) + Scrollen (heranfahren, absinken), Text hebt sich und blendet aus
  function kamera(jetzt) {
    const hoehe = sec.offsetHeight || 1;
    const p = Math.min(1, Math.max(0, window.scrollY / hoehe));
    const e = p * p * (3 - 2 * p);
    const an = Math.min(1, (jetzt - start) / 2600), ankunft = 1 - Math.pow(1 - an, 3);
    const z = 1.06 - 0.06 * ankunft + 0.12 * e;
    const t = `translate3d(0,${(e * 5).toFixed(3)}%,0) scale(${z.toFixed(4)})`;
    img.style.transform = t; buehne.style.transform = t;
    if (text) { text.style.transform = `translate3d(0,${(-e * 48).toFixed(1)}px,0)`; text.style.opacity = (1 - e * 0.85).toFixed(3); }
  }

  function bild(jetzt) {
    if (!aktiv) return;
    const dt = Math.min(0.05, (jetzt - letzt) / 1000 || 0); letzt = jetzt;
    const sy = window.scrollY, v = Math.abs(sy - scrollAlt); scrollAlt = sy;
    schub = Math.min(3, schub * Math.pow(0.12, dt) + v * 0.004);  // Scrollen gibt Schub, klingt in ~1 s ab
    winkel = (winkel + GRUND * (1 + schub) * dt) % TAU;
    if (luefter.length) malen();
    kamera(jetzt);
    requestAnimationFrame(bild);
  }

  function los() {
    aufbauen();
    start = performance.now(); letzt = start;
    new IntersectionObserver(es => { const war = aktiv; aktiv = es[0].isIntersecting; if (aktiv && !war) { letzt = performance.now(); requestAnimationFrame(bild); } }).observe(sec);
    let neu = 0;
    window.addEventListener('resize', () => { clearTimeout(neu); neu = setTimeout(legen, 120); });
    // Bildwechsel Handy/Desktop (picture/source) -> neu aufbauen
    img.addEventListener('load', () => { aufbauen(); });
    document.addEventListener('visibilitychange', () => { letzt = performance.now(); });
  }
  if (img.complete && img.naturalWidth) los(); else img.addEventListener('load', los, { once: true });
})();
