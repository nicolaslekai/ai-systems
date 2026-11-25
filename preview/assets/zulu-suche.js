/* Beispiel Footage-Suche "Zulu" (Nicky 25.11.2026). Tippt nacheinander Suchanfragen ins Feld, hebt die passenden
   Clips mit Trefferquote und gefundenen Merkmalen hervor, die anderen treten zurueck. Laeuft nur, solange der
   Abschnitt sichtbar ist; bei "weniger Bewegung" steht die erste Anfrage still mit ihren Treffern. */
(function () {
  var app = document.querySelector('.zs-app');
  if (!app) return;
  var fragen = JSON.parse(app.getAttribute('data-fragen'));
  var wortTreffer = app.getAttribute('data-treffer'), wortFertig = app.getAttribute('data-fertig');
  var feld = app.querySelector('.zs-eingabe'), zahl = app.querySelector('.zs-zahl');
  var clips = Array.prototype.slice.call(app.querySelectorAll('.zs-clip'));
  var ruhig = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var sichtbar = false, laeuft = false, nr = 0, uhr = null;

  function zeige(f) {
    var n = 0;
    clips.forEach(function (c) {
      var t = f.t[c.getAttribute('data-id')];
      var tags = c.querySelectorAll('.zs-tags span');
      for (var i = 0; i < tags.length; i++) tags[i].classList.toggle('an', !!t && t[1].indexOf(i) >= 0);
      c.classList.toggle('treffer', !!t);
      c.classList.toggle('aus', !t);
      c.querySelector('.zs-score').textContent = t ? t[0] + ' %' : '';
      if (t) n++;
    });
    zahl.textContent = n + ' ' + wortTreffer + ' · ' + wortFertig + ' 0' + (document.documentElement.lang === 'de' ? ',' : '.') + (3 + (nr % 4)) + ' s';
    zahl.classList.add('da');
  }
  function leeren() {
    clips.forEach(function (c) { c.classList.remove('treffer', 'aus'); });
    zahl.classList.remove('da');
  }
  function warte(ms, f) { uhr = setTimeout(function () { if (sichtbar) f(); else laeuft = false; }, ms); }
  function tippe(text, i) {
    feld.textContent = text.slice(0, i);
    if (i < text.length) return warte(28 + Math.random() * 45, function () { tippe(text, i + 1); });
    app.classList.add('sucht');
    warte(650, function () {
      app.classList.remove('sucht');
      zeige(fragen[nr]);
      warte(4200, function () {
        leeren();
        nr = (nr + 1) % fragen.length;
        warte(450, function () { tippe(fragen[nr].q, 0); });
      });
    });
  }
  function start() {
    if (laeuft || ruhig) return;
    laeuft = true;
    clearTimeout(uhr);
    leeren();
    tippe(fragen[nr].q, 0);
  }

  zeige(fragen[0]);   // Ausgangszustand (auch ohne Bewegung): erste Anfrage mit Treffern
  if (ruhig || !('IntersectionObserver' in window)) return;
  app.classList.add('lebt');
  new IntersectionObserver(function (e) {
    sichtbar = e[0].isIntersecting;
    if (sichtbar) start();
  }, { threshold: 0.35 }).observe(app);
})();
