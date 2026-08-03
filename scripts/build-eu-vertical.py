#!/usr/bin/env python3
"""
Generates public/eu-vertical.png — the stacked (portrait) variant of the EU
funding bar used in the footer on phones.

The funding package only ships the horizontal strip (public/eu.png, ~6.3:1),
whose lettering shrinks to a few pixels on a phone. This script rebuilds it as
three stacked rows:

  1. locate the three logo groups by scanning for fully transparent column gaps
     (the two widest gaps are the separators the artwork itself uses),
  2. crop each group to its content bounds at 1:1 scale — no resizing, so every
     emblem, its proportions and its wording stay exactly as supplied,
  3. paste them left-aligned onto one transparent canvas.

Re-run after replacing public/eu.png:  python3 scripts/build-eu-vertical.py

Requires Pillow.
"""

from PIL import Image

SRC = "public/eu.png"
DST = "public/eu-vertical.png"

ALPHA_MIN = 12   # treat anything above this alpha as visible ink
GAP = 150        # vertical space between rows, in source pixels


def visible_columns(px, w, h):
    """True for every column holding at least one visible pixel."""
    return [
        any(px[x, y][3] > ALPHA_MIN for y in range(0, h, 3))
        for x in range(w)
    ]


def group_spans(occupied, w, count=3):
    """Split the columns into `count` groups at the widest transparent gaps."""
    runs, x = [], 0
    while x < w:
        if occupied[x]:
            start = x
            while x < w and occupied[x]:
                x += 1
            runs.append((start, x - 1))
        else:
            x += 1

    gaps = [
        (runs[i][1] + 1, runs[i + 1][0] - 1, runs[i + 1][0] - runs[i][1] - 1)
        for i in range(len(runs) - 1)
    ]
    # the separators between logo groups are the widest gaps in the strip
    splits = sorted(g[0] for g in sorted(gaps, key=lambda g: -g[2])[: count - 1])

    spans, start = [], runs[0][0]
    for s in splits:
        inner = [r for r in runs if r[0] < s]
        spans.append((start, inner[-1][1]))
        start = next(r[0] for r in runs if r[0] > s)
    spans.append((start, runs[-1][1]))
    return spans


def row_bounds(px, h, x0, x1):
    """Top and bottom of the visible ink between columns x0..x1."""
    rows = [
        y for y in range(h)
        if any(px[x, y][3] > ALPHA_MIN for x in range(x0, x1 + 1, 3))
    ]
    return rows[0], rows[-1]


def main():
    src = Image.open(SRC).convert("RGBA")
    w, h = src.size
    px = src.load()

    spans = group_spans(visible_columns(px, w, h), w)
    crops = []
    for x0, x1 in spans:
        top, bottom = row_bounds(px, h, x0, x1)
        crops.append(src.crop((x0, top, x1 + 1, bottom + 1)))
        print(f"  group: x {x0}-{x1}  y {top}-{bottom}")

    out_w = max(c.width for c in crops)
    out_h = sum(c.height for c in crops) + GAP * (len(crops) - 1)
    out = Image.new("RGBA", (out_w, out_h), (0, 0, 0, 0))

    y = 0
    for c in crops:
        out.paste(c, (0, y), c)     # left-aligned keeps the emblems on one axis
        y += c.height + GAP

    out.save(DST, optimize=True)
    print(f"wrote {DST}  {out_w}x{out_h}")


if __name__ == "__main__":
    main()
