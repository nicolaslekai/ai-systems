/* Hero: Luefter als Film, gedreht vom Scrollen · consulting.nicolaslekai.com · 24.11.2026
   Nicky 18:17: "we dont want to scale the image towards us, we only want the fans to spin with the scrolling".
   Nicky 21:23: "This cutout rotation looks weird. Please run a film on Seedance 2.5 for both the mobile and the desktop
   version" — "And then animate those frames via the scroll." Ersetzt hero-luefter.js (gedrehter Blattkranz im Canvas).
   Zwei Filme, 5 s, Kamera steht, nur die Luefter drehen; erstes = letztes Bild = Originalstandbild, also eine nahtlose
   Schleife (tools/rendern_herofilm.py, steht-breit / steht-handy). tools/hero_frames.py legt die Einzelbilder nach
   assets/bilder/hero-film/<breit|handy>/. Scrollen nach unten dreht vorwaerts, nach oben zurueck, mit weichem Auslauf;
   ohne Scrollen stehen sie (Nicky 25.11.: "we only want the blades to move when i scroll"). Das Bild selbst bewegt sich nicht (kein Zoom, kein Versatz, kein Abdunkeln).
   "Bewegung reduzieren", Datensparmodus, kein Canvas oder kein JavaScript: das Standbild bleibt. */
(function () {
  'use strict';
  const sec = document.querySelector('.hero-bild');
  const img = sec && sec.querySelector('img.hg');
  if (!img || !window.HTMLCanvasElement) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (navigator.connection && navigator.connection.saveData) return;

  const FILME = { breit: { n: 72, w: 1600, h: 900 }, handy: { n: 72, w: 900, h: 900 } };
  const LEERLAUF = 0;        // Nicky 25.11. 10:37: "we only want the blades to move when i scroll" -> kein Grunddrehen mehr
  const PRO_PX = 0.22;       // Bilder pro gescrolltem Pixel
  const handy = window.matchMedia('(max-width: 900px)');
  const basis = (img.getAttribute('src') || '').replace(/[?#].*$/, '').replace(/[^/]*$/, '') + 'hero-film/';
  const STAND = '?v=2';   // 25.11.: Karte neu beschriftet (LOCAL GPU), alte Bilder nicht aus dem Cache
  const schleier = sec.querySelector('.schleier');

  const cv = document.createElement('canvas');
  cv.className = 'hero-film';
  cv.setAttribute('aria-hidden', 'true');
  sec.insertBefore(cv, schleier || img.closest('picture').nextSibling);
  const ctx = cv.getContext('2d');

  let art = null, bilder = [], gezeigt = -1, aktiv = false;
  let pos = 0, tempo = 0, letzt = 0, scrollAlt = window.scrollY;

  function laden(a) {
    art = a; bilder = new Array(FILME[a].n).fill(null); gezeigt = -1;
    const f = FILME[a], reihe = [];
    for (let schritt = 8; schritt >= 1; schritt = schritt >> 1)
      for (let i = 0; i < f.n; i += schritt) if (!reihe.includes(i)) reihe.push(i);
    let lauf = 0;
    const meins = a;
    function weiter() {
      if (art !== meins || lauf >= reihe.length) return;
      const i = reihe[lauf++], b = new Image();
      b.decoding = 'async';
      b.onload = () => { if (art === meins) { bilder[i] = b; if (gezeigt < 0) zeichnen(true); } weiter(); };
      b.onerror = weiter;
      b.src = `${basis}${a}/f${String(i).padStart(3, '0')}.webp${STAND}`;
    }
    for (let k = 0; k < 4; k++) weiter();
  }

  function legen() {
    const bw = img.offsetWidth, bh = img.offsetHeight;
    if (!bw || !bh) return;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    Object.assign(cv.style, { left: img.offsetLeft + 'px', top: img.offsetTop + 'px', width: bw + 'px', height: bh + 'px' });
    cv.width = Math.round(bw * dpr); cv.height = Math.round(bh * dpr);
    zeichnen(true);
  }

  // naechstes geladenes Bild, im Kreis gesucht (Schleife)
  function naechstes(i) {
    const n = bilder.length;
    for (let d = 0; d < n; d++) {
      const a = (i - d + n) % n, b = (i + d) % n;
      if (bilder[a]) return a;
      if (bilder[b]) return b;
    }
    return -1;
  }

  function zeichnen(neu) {
    if (!art) return;
    const f = FILME[art], n = f.n;
    const i = naechstes(((Math.floor(pos) % n) + n) % n);
    if (i < 0 || (i === gezeigt && !neu)) return;
    const b = bilder[i], W = cv.width, H = cv.height;
    const op = getComputedStyle(img).objectPosition.split(' ');
    const pc = v => (v && v.endsWith('%')) ? parseFloat(v) / 100 : 0.5;
    const s = Math.max(W / f.w, H / f.h), dw = f.w * s, dh = f.h * s;
    ctx.drawImage(b, (W - dw) * pc(op[0]), (H - dh) * pc(op[1]), dw, dh);
    if (gezeigt < 0) cv.classList.add('da');
    gezeigt = i;
  }

  function bild(jetzt) {
    if (!aktiv) return;
    const dt = Math.min(0.05, (jetzt - letzt) / 1000 || 0); letzt = jetzt;
    const sy = window.scrollY, dy = sy - scrollAlt; scrollAlt = sy;
    // Scrollen schiebt (auch rueckwaerts), der Schub klingt in rund einer Sekunde aus
    tempo = tempo * Math.pow(0.08, dt) + (dt > 0 ? (dy * PRO_PX) / dt : 0) * (1 - Math.pow(0.08, dt));
    pos += (LEERLAUF + tempo) * dt;
    zeichnen(false);
    requestAnimationFrame(bild);
  }

  function wahl() {
    const a = handy.matches ? 'handy' : 'breit';
    if (a !== art) laden(a);
    legen();
  }

  function los() {
    wahl();
    new IntersectionObserver(es => {
      const war = aktiv; aktiv = es[0].isIntersecting;
      if (aktiv && !war) { letzt = performance.now(); scrollAlt = window.scrollY; requestAnimationFrame(bild); }
    }).observe(sec);
    let neu = 0;
    window.addEventListener('resize', () => { clearTimeout(neu); neu = setTimeout(wahl, 120); });
    img.addEventListener('load', legen);
    document.addEventListener('visibilitychange', () => { letzt = performance.now(); scrollAlt = window.scrollY; });
  }
  if (img.complete && img.naturalWidth) los(); else img.addEventListener('load', los, { once: true });
})();
