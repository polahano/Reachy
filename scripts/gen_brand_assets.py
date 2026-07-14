from PIL import Image, ImageDraw, ImageFilter, ImageFont
import math, os

PUB = "/home/claude/reachy/public"
os.makedirs(PUB, exist_ok=True)

NAVY_950 = (3, 5, 15)
NAVY_900 = (5, 12, 41)
BLUE = (5, 147, 250)
INDIGO = (91, 62, 245)
PURPLE = (201, 44, 244)
ORANGE = (251, 122, 60)

def lerp(a, b, t):
    return tuple(int(a[i] + (b[i]-a[i])*t) for i in range(3))

# ---------- FAVICON (SVG, crisp at any size) ----------
favicon_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs>
    <linearGradient id="g" x1="4" y1="52" x2="58" y2="10" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#0593FA"/>
      <stop offset="0.45" stop-color="#5B3EF5"/>
      <stop offset="0.75" stop-color="#C92CF4"/>
      <stop offset="1" stop-color="#FB7A3C"/>
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="16" fill="#03050F"/>
  <path d="M14 46 L38 22" stroke="url(#g)" stroke-width="7" stroke-linecap="round"/>
  <path d="M38 22 L50 22 L50 34" stroke="url(#g)" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>"""
with open(f"{PUB}/favicon.svg", "w") as f:
    f.write(favicon_svg)
print("wrote favicon.svg")

# Rasterize a PNG apple-touch-icon version manually (simple diagonal arrow mark)
def make_icon_png(size):
    img = Image.new("RGB", (size, size), NAVY_950)
    draw = ImageDraw.Draw(img)
    # rounded rect background w/ subtle radial glow behind the mark
    glow = Image.new("RGBA", (size, size), (0,0,0,0))
    gd = ImageDraw.Draw(glow)
    gd.ellipse([size*0.15,size*0.15,size*0.95,size*0.95], fill=INDIGO+(90,))
    glow = glow.filter(ImageFilter.GaussianBlur(size*0.12))
    img = Image.alpha_composite(img.convert("RGBA"), glow).convert("RGB")
    draw = ImageDraw.Draw(img)
    w = max(3, int(size*0.11))
    p1 = (size*0.22, size*0.72)
    p2 = (size*0.60, size*0.34)
    p3 = (size*0.80, size*0.34)
    p4 = (size*0.80, size*0.54)
    # draw gradient-ish line by segments
    steps = 24
    for i in range(steps):
        t0, t1 = i/steps, (i+1)/steps
        x0 = p1[0] + (p2[0]-p1[0])*t0; y0 = p1[1] + (p2[1]-p1[1])*t0
        x1 = p1[0] + (p2[0]-p1[0])*t1; y1 = p1[1] + (p2[1]-p1[1])*t1
        col = lerp(BLUE, PURPLE, t0)
        draw.line([x0,y0,x1,y1], fill=col, width=w)
    for i in range(steps):
        t0, t1 = i/steps, (i+1)/steps
        x0 = p2[0] + (p3[0]-p2[0])*t0; y0 = p2[1] + (p3[1]-p2[1])*t0
        x1 = p2[0] + (p3[0]-p2[0])*t1; y1 = p2[1] + (p3[1]-p2[1])*t1
        col = lerp(PURPLE, ORANGE, t0)
        draw.line([x0,y0,x1,y1], fill=col, width=w)
    for i in range(steps):
        t0, t1 = i/steps, (i+1)/steps
        x0 = p3[0] + (p4[0]-p3[0])*t0; y0 = p3[1] + (p4[1]-p3[1])*t0
        x1 = p3[0] + (p4[0]-p3[0])*t1; y1 = p3[1] + (p4[1]-p3[1])*t1
        col = lerp(ORANGE, ORANGE, t0)
        draw.line([x0,y0,x1,y1], fill=col, width=w)
    # round the joints
    for pt in (p2,p3):
        draw.ellipse([pt[0]-w/2,pt[1]-w/2,pt[0]+w/2,pt[1]+w/2], fill=PURPLE)
    draw.ellipse([p1[0]-w/2,p1[1]-w/2,p1[0]+w/2,p1[1]+w/2], fill=BLUE)
    draw.ellipse([p4[0]-w/2,p4[1]-w/2,p4[0]+w/2,p4[1]+w/2], fill=ORANGE)
    return img

for size, name in [(180,"apple-touch-icon.png"), (32,"favicon-32x32.png"), (16,"favicon-16x16.png"), (512,"icon-512.png"), (192,"icon-192.png")]:
    make_icon_png(size).save(f"{PUB}/{name}")
    print("wrote", name)

# ---------- OG IMAGE (1200x630) ----------
def fast_diagonal_gradient(size, c1, c2, angle_deg=115):
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
    left = (sw - w)//2; top = (sh - h)//2
    return strip.crop((left, top, left+w, top+h))

def add_glow(img, center, radius, color, alpha=130):
    overlay = Image.new("RGBA", img.size, (0,0,0,0))
    d = ImageDraw.Draw(overlay)
    cx, cy = center
    d.ellipse([cx-radius,cy-radius,cx+radius,cy+radius], fill=color+(alpha,))
    overlay = overlay.filter(ImageFilter.GaussianBlur(radius*0.55))
    return Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")

W, H = 1200, 630
og = fast_diagonal_gradient((W,H), NAVY_950, lerp(NAVY_950, INDIGO, 0.35), angle_deg=115)
og = add_glow(og, (int(W*0.82), int(H*0.25)), 420, PURPLE, 140)
og = add_glow(og, (int(W*0.15), int(H*0.85)), 380, BLUE, 110)
og = add_glow(og, (int(W*0.9), int(H*0.9)), 300, ORANGE, 90)

draw = ImageDraw.Draw(og)
try:
    font_big = ImageFont.truetype("/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf", 108)
    font_small = ImageFont.truetype("/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf", 34)
except Exception:
    font_big = ImageFont.load_default()
    font_small = ImageFont.load_default()

# wordmark text with manual per-letter gradient coloring
text = "REACHY"
x = 96
y = 210
total_w = draw.textlength(text, font=font_big)
cur_x = x
for i, ch in enumerate(text):
    t = i / max(1, len(text)-1)
    col = lerp(BLUE, ORANGE, t) if t < 0.5 else lerp(PURPLE, ORANGE, (t-0.5)*2)
    col = lerp(lerp(BLUE,PURPLE,min(1,t*1.4)), ORANGE, max(0,(t-0.6)*2.5)) if t>0.6 else lerp(BLUE,PURPLE,t*1.6)
    draw.text((cur_x, y), ch, font=font_big, fill=col)
    cur_x += draw.textlength(ch, font=font_big)

draw.text((x, y+140), "DIGITAL MARKETING & BRANDING AGENCY", font=font_small, fill=(174,180,206))
draw.text((x, y+195), "Reach  ·  Engage  ·  Grow", font=font_small, fill=(255,255,255))

# signature arrow accent
draw.line([x, H-90, x+340, H-230], fill=(255,255,255,255), width=6, joint="curve")

og.save(f"{PUB}/og-image.png", quality=90)
print("wrote og-image.png", og.size)

# twitter card (same content, Twitter recommends similar 1200x630 or 1200x600 — reuse)
og.save(f"{PUB}/twitter-image.png", quality=90)
print("wrote twitter-image.png")
