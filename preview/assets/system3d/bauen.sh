#!/bin/bash
# 2026-11-22 · Packt das Systembild (system3d.src.js) mit three.js zu EINER Datei zusammen:
# assets/system3d/system3d.js. Die Seite laedt nur diese eine Datei vom eigenen Server —
# kein CDN, kein Drittanbieter (Hausregel aus assets/style.css).
#
# Warum ein Packschritt: three.js liefert seit r172 keine fertig verkleinerte Einzeldatei mehr,
# und unverkleinert waeren es rund 2 MB. esbuild wirft alles weg, was die Szene nicht benutzt.
# Die Versionen sind festgenagelt, damit derselbe Aufruf dieselbe Datei ergibt.
#
# Aufruf:  assets/system3d/bauen.sh        (braucht node/npm; laedt three und esbuild in einen
#                                          Wegwerf-Ordner, nichts davon landet im Repository)
set -euo pipefail
cd "$(dirname "$0")"
THREE_VERSION="0.187.0"
ESBUILD_VERSION="0.28.2"
tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT
(cd "$tmp" && npm install --silent --no-audit --no-fund "three@$THREE_VERSION" "esbuild@$ESBUILD_VERSION" >/dev/null)
NODE_PATH="$tmp/node_modules" "$tmp/node_modules/.bin/esbuild" system3d.src.js \
  --bundle --minify --format=iife --target=es2020 --legal-comments=none \
  --banner:js="/* Systembild consulting.nicolaslekai.com — gepackt aus system3d.src.js und three.js $THREE_VERSION (MIT-Lizenz, https://threejs.org). Nicht von Hand aendern: assets/system3d/bauen.sh */" \
  --outfile=system3d.js
ls -l system3d.js | awk '{printf "system3d.js: %.0f KB\n", $5/1024}'
gzip -c system3d.js | wc -c | awk '{printf "gepackt (gzip): %.0f KB\n", $1/1024}'
