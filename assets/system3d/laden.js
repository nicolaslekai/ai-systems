/* Systembild · Lader · otterstein.ai · 2026-11-23 (V2)
   Holt assets/system3d/system3d.js (three.js samt Szene, rund 150 KB gepackt) in zwei Schritten:
   1. Herunterladen, sobald die Seite fertig geladen ist und der Browser Luft hat — ohne die Datei
      auszufuehren. Sie liegt dann bereit.
   2. Ausfuehren, sobald das Systembild noch vier Fensterhoehen entfernt ist. Die Szene baut sich in
      kleinen Schritten auf (system3d.src.js, init) und steht, bevor man ankommt.
   Vorher (V1) geschah beides erst 900 px vor dem Band: Am Handy kam der Bau genau dann, wenn man
   daran vorbeiscrollte (Nicolas, 23.11.2026: „this needs to preload sooner, otherwise it's
   impossible to scroll past it").
   Das Standbild genuegt und bleibt stehen:
   - bei „Bewegung reduzieren",
   - im Datensparmodus des Browsers,
   - ohne IntersectionObserver (sehr alte Browser) und ohne JavaScript. */
(function () {
  'use strict';
  var stages = document.querySelectorAll('[data-system3d][data-src]');
  if (!stages.length || !('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (navigator.connection && navigator.connection.saveData) return;
  var src = stages[0].getAttribute('data-src');

  function fetchAhead() {
    var link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'script';
    link.href = src;
    document.head.appendChild(link);
  }
  function whenIdle() {
    if ('requestIdleCallback' in window) window.requestIdleCallback(fetchAhead, { timeout: 2500 });
    else window.setTimeout(fetchAhead, 600);
  }
  if (document.readyState === 'complete') whenIdle();
  else window.addEventListener('load', whenIdle, { once: true });

  var observer = new IntersectionObserver(function (entries) {
    var near = entries.some(function (entry) { return entry.isIntersecting; });
    if (!near) return;
    observer.disconnect();
    var script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.head.appendChild(script);
  }, { rootMargin: '400% 0px' });
  stages.forEach(function (stage) { observer.observe(stage); });
})();
