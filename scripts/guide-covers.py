"""Draws a 1200x630 share image for every Markdown guide in src/content/guides.

Run after adding or retitling guides:  python scripts/guide-covers.py
Writes public/og/guides/<slug>.png. Uses the site's colours and Archivo (scripts/fonts, SIL OFL).
"""

import glob
import os
import re

import yaml
from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FONT = os.path.join(ROOT, "scripts", "fonts", "Archivo.ttf")
OUT = os.path.join(ROOT, "public", "og", "guides")
W, H = 1200, 630
RUBBER = (20, 21, 24)
CHALK = (236, 233, 225)
STEEL = (141, 147, 161)
VIOLET = (139, 92, 246)
VIOLET_2 = (196, 181, 253)


def font(size: int, weight: int, width: int = 100) -> ImageFont.FreeTypeFont:
    f = ImageFont.truetype(FONT, size)
    f.set_variation_by_axes([weight, width])
    return f


def wrap(draw: ImageDraw.ImageDraw, text: str, f: ImageFont.FreeTypeFont, max_w: int) -> list[str]:
    lines, line = [], ""
    for word in text.split():
        trial = f"{line} {word}".strip()
        if draw.textlength(trial, font=f) <= max_w:
            line = trial
        else:
            lines.append(line)
            line = word
    lines.append(line)
    return lines


def cover(title: str, audience: str, path: str) -> None:
    img = Image.new("RGB", (W, H), RUBBER)
    glow = Image.new("RGB", (W, H), (0, 0, 0))
    ImageDraw.Draw(glow).ellipse((760, 300, 1400, 900), fill=(70, 40, 140))
    img = Image.blend(img, glow.filter(ImageFilter.GaussianBlur(140)), 0.55)
    d = ImageDraw.Draw(img)

    d.rectangle((72, 72, 120, 78), fill=VIOLET)
    label = "GUIDE · FOR GYM OWNERS" if audience == "owner" else "GUIDE · FOR MEMBERS"
    d.text((72, 96), label, font=font(24, 700, 110), fill=VIOLET_2)

    size = 76
    while True:
        f = font(size, 800, 105)
        lines = wrap(d, title, f, W - 144)
        if len(lines) <= 3 or size <= 52:
            break
        size -= 4
    y = 150 + (3 - len(lines)) * size * 0.5
    for line in lines:
        d.text((72, y), line, font=f, fill=CHALK)
        y += size * 1.12

    d.rounded_rectangle((72, 530, 112, 570), radius=10, fill=VIOLET)
    d.text((80, 534), "S", font=font(30, 900), fill=CHALK)
    d.text((126, 532), "SpotAI", font=font(32, 800, 110), fill=CHALK)
    site = "spotai.streamerosai.com"
    sf = font(24, 500)
    d.text((W - 72 - d.textlength(site, font=sf), 540), site, font=sf, fill=STEEL)
    img.save(path, "PNG", optimize=True)


def main() -> None:
    os.makedirs(OUT, exist_ok=True)
    for md in sorted(glob.glob(os.path.join(ROOT, "src", "content", "guides", "*.md"))):
        text = open(md, encoding="utf-8").read()
        front = yaml.safe_load(re.match(r"^---\n(.*?)\n---", text, re.S).group(1))
        slug = os.path.basename(md)[:-3]
        cover(front["h1"], front["audience"], os.path.join(OUT, f"{slug}.png"))
        print(slug)


main()
