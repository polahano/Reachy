"""
Generates abstract, brand-consistent placeholder cover art for the Reachy
portfolio grid. No real client work exists yet, so rather than using stock
photography (which would misrepresent "our work"), we generate original
abstract compositions using the extracted brand palette + the logo's
signature diagonal "arrow" motif. Output: public/images/portfolio/*.webp
"""
import math
import random
from PIL import Image, ImageDraw, ImageFilter, ImageChops
import os

OUT_DIR = "/home/claude/reachy/public/images/portfolio"
os.makedirs(OUT_DIR, exist_ok=True)

NAVY_950 = (3, 5, 15)
NAVY_900 = (5, 12, 41)
NAVY_800 = (8, 18, 63)
BLUE = (5, 147, 250)
INDIGO = (91, 62, 245)
PURPLE = (201, 44, 244)
ORANGE = (251, 122, 60)

def lerp(a, b, t):
    return tuple(int(a[i] + (b[i]-a[i])*t) for i in range(3))

def diagonal_gradient(size, c1, c2, angle_deg=115):
    w, h = size
    base = Image.new("RGB", (w, h))
    px = base.load()
    rad = math.radians(angle_deg)
    dx, dy = math.cos(rad), math.sin(rad)
    # project each corner to find t range
    corners = [(0,0),(w,0),(0,h),(w,h)]
    projections = [x*dx + y*dy for x,y in corners]
    pmin, pmax = min(projections), max(projections)
    for y in range(h):
        for x in range(0, w, 1):
            t = ((x*dx + y*dy) - pmin) / (pmax - pmin + 1e-6)
            px[x, y] = lerp(c1, c2, t)
    return base

def fast_diagonal_gradient(size, c1, c2, angle_deg=115):
    # faster version: build a 1D gradient strip then rotate/scale
    w, h = size
    diag = int(math.hypot(w, h)) + 4
    strip = Image.new("RGB", (diag, 1))
    spx = strip.load()
    for x in range(diag):
        t = x / diag
        spx[x, 0] = lerp(c1, c2, t)
    strip = strip.resize((diag, diag))
    strip = strip.rotate(angle_deg, expand=True)
    sw, sh = strip.size
    left = (sw - w) // 2
    top = (sh - h) // 2
    return strip.crop((left, top, left + w, top + h))

def add_glow_blob(img, center, radius, color, alpha=140):
    overlay = Image.new("RGBA", img.size, (0,0,0,0))
    draw = ImageDraw.Draw(overlay)
    cx, cy = center
    draw.ellipse([cx-radius, cy-radius, cx+radius, cy+radius], fill=color + (alpha,))
    overlay = overlay.filter(ImageFilter.GaussianBlur(radius * 0.6))
    img.paste(Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB"), (0,0))
    return img

def add_arrow_motif(img, alpha=70, color=(255,255,255)):
    """The Reachy logo's signature ascending diagonal arrow, echoed subtly."""
    w, h = img.size
    overlay = Image.new("RGBA", img.size, (0,0,0,0))
    draw = ImageDraw.Draw(overlay)
    x1, y1 = int(w*0.12), int(h*0.82)
    x2, y2 = int(w*0.82), int(h*0.15)
    line_w = max(3, int(min(w,h) * 0.012))
    draw.line([x1,y1,x2,y2], fill=color + (alpha,), width=line_w)
    # arrowhead
    ang = math.atan2(y2-y1, x2-x1)
    head_len = min(w,h) * 0.09
    for a_off in (0.5, -0.5):
        hx = x2 - head_len * math.cos(ang + a_off*0.6)
        hy = y2 - head_len * math.sin(ang + a_off*0.6)
        draw.line([x2,y2,hx,hy], fill=color + (alpha,), width=line_w)
    overlay = overlay.filter(ImageFilter.GaussianBlur(1))
    return Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")

def add_grain(img, intensity=10):
    import numpy as np
    arr = np.array(img).astype("int16")
    noise = np.random.randint(-intensity, intensity, arr.shape, dtype="int16")
    arr = np.clip(arr + noise, 0, 255).astype("uint8")
    return Image.fromarray(arr)

def add_vignette(img, strength=0.55):
    w, h = img.size
    overlay = Image.new("L", (w, h), 0)
    draw = ImageDraw.Draw(overlay)
    draw.ellipse([-w*0.3, -h*0.3, w*1.3, h*1.3], fill=255)
    overlay = overlay.filter(ImageFilter.GaussianBlur(min(w,h)*0.25))
    dark = Image.new("RGB", (w,h), (0,0,0))
    mask = ImageChops.invert(overlay).point(lambda p: int(p*strength))
    return Image.composite(dark, img, mask.point(lambda p: 255-p)) if False else Image.composite(img, dark, overlay)

PALETTES = [
    [NAVY_950, BLUE, INDIGO],
    [NAVY_900, INDIGO, PURPLE],
    [NAVY_950, PURPLE, ORANGE],
    [NAVY_900, BLUE, PURPLE],
    [NAVY_800, ORANGE, PURPLE],
    [NAVY_950, BLUE, ORANGE],
]

def make_cover(filename, w, h, palette_idx, blob_seed=0, angle=115):
    random.seed(blob_seed)
    base_c, c1, c2 = PALETTES[palette_idx % len(PALETTES)]
    grad = fast_diagonal_gradient((w, h), base_c, lerp(base_c, c1, 0.55), angle_deg=angle)
    img = grad.convert("RGB")
    img = add_glow_blob(img, (int(w*random.uniform(0.15,0.4)), int(h*random.uniform(0.15,0.4))), int(min(w,h)*0.55), c1, alpha=120)
    img = add_glow_blob(img, (int(w*random.uniform(0.6,0.9)), int(h*random.uniform(0.6,0.9))), int(min(w,h)*0.6), c2, alpha=110)
    img = add_arrow_motif(img, alpha=55)
    # subtle dark base overlay for text-safety at bottom
    overlay = Image.new("RGBA", (w,h), (0,0,0,0))
    draw = ImageDraw.Draw(overlay)
    draw.rectangle([0, int(h*0.72), w, h], fill=(3,5,15,110))
    img = Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")
    img = add_grain(img, intensity=6)
    img = img.filter(ImageFilter.SMOOTH)
    path = os.path.join(OUT_DIR, filename)
    img.save(path, "WEBP", quality=82, method=6)
    print("saved", path, (w,h))

# (filename, width, height, palette_idx, seed, angle)
jobs = [
    ("restaurant-branding.webp", 900, 1200, 0, 1, 110),
    ("fintech-logo.webp", 1000, 1000, 1, 2, 130),
    ("clinic-social.webp", 1200, 900, 2, 3, 100),
    ("fashion-social.webp", 1000, 1000, 3, 4, 120),
    ("realestate-google-ads.webp", 1200, 900, 4, 5, 105),
    ("beauty-facebook-ads.webp", 1000, 1000, 5, 6, 115),
    ("furniture-photography.webp", 900, 1200, 1, 7, 125),
    ("gym-tiktok.webp", 900, 1300, 2, 8, 95),
    ("coffee-rebrand.webp", 1200, 900, 0, 9, 118),
    ("ecommerce-web.webp", 1200, 900, 3, 10, 108),
    ("edu-video.webp", 1200, 900, 4, 11, 122),
    ("jewelry-photography.webp", 1000, 1000, 5, 12, 132),
    ("law-firm-branding.webp", 900, 1200, 1, 13, 102),
    ("dealership-print.webp", 1200, 900, 2, 14, 128),
]

for j in jobs:
    make_cover(*j)

print("done, total files:", len(os.listdir(OUT_DIR)))
