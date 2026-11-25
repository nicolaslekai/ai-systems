/* Beispiel Footage-Suche "Zulu" (Nicky 25.11.2026, v2 abends: "the many more thumbnails thing" wie im Film).
   Ausgangslage ist die Archiv-Wand mit 18 Clips, sortiert nach Datum. Jede Suche tippt sich ins Feld, die Wand raeumt
   sich weg und die Treffer sortieren sich nach Trefferquote neu ein; danach leert sich das Feld, die Wand kommt
   zurueck, die naechste Suche beginnt. Laeuft nur, solange der Abschnitt sichtbar ist; bei "weniger Bewegung" stehen
   die Treffer der ersten Suche still. */
(function () {
  var app = document.querySelector('.zs-app');
  if (!app) return;
  var fragen = JSON.parse(app.getAttribute('data-fragen'));
  var wortTreffer = app.getAttribute('data-treffer'), wortFertig = app.getAttribute('data-fertig');
  var feld = app.querySelector('.zs-eingabe'), zahl = app.querySelector('.zs-zahl');
  var buehne = app.querySelector('.zs-buehne');
  var saetze = Array.prototype.slice.call(app.querySelectorAll('.zs-satz'));
  var de = document.documentElement.lang === 'de';
  var ruhig = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var sichtbar = false, laeuft = false, nr = 0, uhr = null;

  function treffer(n) {
    saetze.forEach(function (s, i) { s.classList.toggle('an', i === n); });
    buehne.classList.add('suche');
    zahl.textContent = fragen[n].n + ' ' + wortTreffer + ' · ' + wortFertig + ' 0' + (de ? ',' : '.') + (3 + (n % 3)) + ' s';
    zahl.classList.add('da');
  }
  function wand() {
    saetze.forEach(function (s) { s.classList.remove('an'); });
    buehne.classList.remove('suche');
    zahl.classList.remove('da');
  }
  function warte(ms, f) { uhr = setTimeout(function () { if (sichtbar) f(); else laeuft = false; }, ms); }
  function tippe(text, i) {
    feld.textContent = text.slice(0, i);
    if (i < text.length) return warte(30 + Math.random() * 45, function () { tippe(text, i + 1); });
    app.classList.add('sucht');
    warte(600, function () {
      app.classList.remove('sucht');
      treffer(nr);
      warte(4800, runde);
    });
  }
  function runde() {
    nr = (nr + 1) % fragen.length;
    feld.textContent = '';
    wand();
    warte(1600, function () { tippe(fragen[nr].q, 0); });
  }
  function start() {
    if (laeuft || ruhig) return;
    laeuft = true;
    clearTimeout(uhr);
    nr = -1;
    runde();
  }

  treffer(0);   // Ausgangszustand ohne Skript-Bewegung: erste Suche mit ihren Treffern
  if (ruhig || !('IntersectionObserver' in window)) return;
  app.classList.add('lebt');
  new IntersectionObserver(function (e) {
    sichtbar = e[0].isIntersecting;
    if (sichtbar) start();
  }, { threshold: 0.3 }).observe(app);
})();
