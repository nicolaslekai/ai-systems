#!/bin/sh
# Poster for the hero film: one exact frame of the film, 1600x900 JPEG.
#   tools/film_poster.sh <film.mp4> <frame number> <out.jpg>
# DE v030 poster = frame 2065 (82.6 s): the six "was es automatisiert." tiles, all settled, just before the timeline opens.
# For another cut, pick a frame between the sixth tile's arrival (07b cue k[5] + ~0.8 s) and the timeline opening (cue "open").
set -e
[ $# -eq 3 ] || { echo "usage: $0 <film.mp4> <frame> <out.jpg>" >&2; exit 1; }
ffmpeg -v error -y -i "$1" -vf "select='eq(n\,$2)',scale=1600:900:flags=lanczos" -frames:v 1 -fps_mode vfr -q:v 3 "$3"
echo "$3 <- frame $2 of $1 ($(wc -c < "$3" | tr -d ' ') bytes)"
