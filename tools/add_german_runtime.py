#!/usr/bin/env python3
"""Part 2: the language switch runtime + its styles.

Runs after add_german.py has planted the data-de attributes.
English is the default; a choice is remembered per browser.
"""
import sys

SRC = "index.html"
html = open(SRC, encoding="utf-8").read()


def sub(old, new, count=1):
    global html
    n = html.count(old)
    if n != count:
        print(f"ABORT: expected {count}, found {n} for:\n  {old[:110]}")
        sys.exit(1)
    html = html.replace(old, new)


I18N = r"""
<script>
  /* DE/EN switch. English is the default and lives in the markup; German rides
     along in data-de attributes and is swapped in here. The choice is kept per
     browser, so a returning German reader stays in German.
     Images are deliberately untouched — the English words baked into them stay. */
  (function () {
    var STRINGS = {
      en: {
        next: 'next', send: 'send the brief',
        bFix: 'First thing to fix: ', bSize: 'Team size: ', bCo: 'Company: ',
        bReply: 'Reply to: ', bNone: 'not answered', bNotGiven: 'not given',
        bFrom: 'Sent from the brief form on consulting.nicolaslekai.com',
        bSubj: 'Brief — ',
        bDone: 'Your mail app should be opening with the brief filled in. If it does not, write to nicolaslekai@gmail.com.',
        title: 'Nicolas Lekai — AI Systems Architect',
        desc: 'Nicolas Lekai builds custom AI operating systems for companies: one piece of software that runs every AI tool for you, with live cost metering and hard budget caps. Independent, vendor-neutral. Munich and London.'
      },
      de: {
        next: 'weiter', send: 'briefing senden',
        bFix: 'Zuerst zu lösen: ', bSize: 'Teamgröße: ', bCo: 'Firma: ',
        bReply: 'Antwort an: ', bNone: 'nicht beantwortet', bNotGiven: 'nicht angegeben',
        bFrom: 'Gesendet über das Briefing-Formular auf consulting.nicolaslekai.com',
        bSubj: 'Briefing — ',
        bDone: 'Ihr Mailprogramm sollte sich mit dem ausgefüllten Briefing öffnen. Falls nicht, schreiben Sie an nicolaslekai@gmail.com.',
        title: 'Nicolas Lekai — AI Systems Architect',
        desc: 'Nicolas Lekai baut maßgeschneiderte KI-Betriebssysteme für Unternehmen: eine Software, die jedes KI-Werkzeug für Sie bedient, mit Live-Kostenmessung und harten Budgetlimits. Unabhängig und herstellerneutral. München und London.'
      }
    };

    var STORE = 'nl-lang';
    var lang = 'en';
    try { if (localStorage.getItem(STORE) === 'de') lang = 'de'; } catch (e) {}

    window.__lang = lang;
    window.__t = function (key) {
      return (STRINGS[window.__lang] || STRINGS.en)[key];
    };

    function apply(next) {
      window.__lang = next;
      document.documentElement.lang = next;

      document.querySelectorAll('[data-de]').forEach(function (el) {
        if (el.dataset.en === undefined) el.dataset.en = el.innerHTML;
        el.innerHTML = next === 'de' ? el.dataset.de : el.dataset.en;
      });
      document.querySelectorAll('[data-de-placeholder]').forEach(function (el) {
        if (el.dataset.enPlaceholder === undefined) el.dataset.enPlaceholder = el.placeholder;
        el.placeholder = next === 'de' ? el.dataset.dePlaceholder : el.dataset.enPlaceholder;
      });

      document.title = window.__t('title');
      var d = document.querySelector('meta[name="description"]');
      if (d) d.setAttribute('content', window.__t('desc'));

      // the hero flip word belongs to the other script block
      if (window.__flipApply) window.__flipApply();
      // the onboarding buttons are written by JS, not markup
      if (window.__onbRefresh) window.__onbRefresh();

      document.querySelectorAll('.lang-btn').forEach(function (b) {
        var on = b.dataset.lang === next;
        b.classList.toggle('is-on', on);
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
      });

      try { localStorage.setItem(STORE, next); } catch (e) {}
    }

    window.__setLang = apply;

    document.addEventListener('click', function (e) {
      var btn = e.target.closest && e.target.closest('.lang-btn');
      if (btn) apply(btn.dataset.lang);
    });

    // only touch the DOM once it exists; English needs no swap on a first visit
    document.addEventListener('DOMContentLoaded', function () {
      if (window.__lang === 'de') apply('de');
      else apply('en');
    });
  })();
</script>
"""

# the runtime has to be parsed before the page script calls window.__t
sub('<script>\n  // hero word flip', I18N + '<script>\n  // hero word flip')

# the flip picks its word list from the active language, and can be re-applied
sub("      setTimeout(() => { slot.textContent = words[i]; slot.style.opacity = 1; }, 220);",
    "      setTimeout(() => { slot.textContent = WORDS[window.__lang || 'en'][i]; "
    "slot.style.opacity = 1; }, 220);")
sub("    slot.style.transition = 'opacity 0.22s ease';",
    "    slot.style.transition = 'opacity 0.22s ease';\n"
    "    window.__flipApply = () => { slot.textContent = WORDS[window.__lang || 'en'][i]; };\n"
    "  } else {\n"
    "    window.__flipApply = () => { slot.textContent = WORDS[window.__lang || 'en'][0]; };")

open(SRC, "w", encoding="utf-8").write(html)
print("runtime inserted")

# ------------------------------------------------------------------ styles
CSS = """

/* ---------- language switch (EN / DE) ---------- */
.lang { display: flex; align-items: center; gap: .35rem; margin-left: 1rem; }
.lang-btn {
  background: none; border: 0; padding: .2rem .1rem; cursor: pointer;
  font: inherit; font-size: .68rem; letter-spacing: .18em; text-transform: uppercase;
  color: #8a8a92; transition: color .2s;
}
.lang-btn:hover { color: #f2f1ee; }
.lang-btn.is-on { color: #f0413f; }
.lang-btn:focus-visible { outline: 1px solid #f0413f; outline-offset: 3px; }
.lang-sep { color: #4a4a50; font-size: .68rem; }
@media (max-width: 700px) { .lang { margin-left: .5rem; } }
"""
css_path = "style.css"
css = open(css_path, encoding="utf-8").read()
if "language switch (EN / DE)" not in css:
    open(css_path, "a", encoding="utf-8").write(CSS)
    print("styles appended")
else:
    print("styles already present")
