# Reachy — Digital Marketing & Branding Agency Website

A production-ready, bilingual (Arabic/English) marketing website for **Reachy**, built with Next.js 14 (App Router, static export), TypeScript, and Tailwind CSS. Arabic is the default language and is fully RTL-aware; English is available at `/en`.

---

## 1. Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router, `output: 'export'` — fully static) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS 3 + `tailwindcss-rtl` |
| Motion | Framer Motion (component reveals, parallax, carousels), GSAP + ScrollTrigger (the "How We Work" scroll timeline), Lenis (global smooth scroll) |
| Icons | lucide-react |
| Fonts | IBM Plex Sans Arabic (Arabic) + Inter (English), loaded via `next/font/google` |

No backend, database, or server runtime is required — the entire site pre-renders to static HTML/CSS/JS in `out/`, ready for GitHub Pages, Netlify, Vercel static hosting, S3, or any static file host.

---

## 2. Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build       # outputs static site to /out
npm run lint         # ESLint
```

> **Note:** `npm run build` fetches Arabic/English fonts from Google Fonts at build time (via `next/font/google`). This requires normal internet access — it will work on your machine, CI, or any standard build host. It will **not** work in fully network-isolated sandboxes.

---

## 3. Project structure

```
app/
  (ar)/                 → Arabic routes, served at the site root "/" (default language)
    layout.tsx           → Arabic <html lang="ar" dir="rtl"> root layout
    page.tsx              → Home
    about/ services/ portfolio/ pricing/ team/ testimonials/ faq/ contact/
  en/                    → English routes, served at "/en"
    layout.tsx            → English <html lang="en" dir="ltr"> root layout
    (same page structure as above)
  globals.css            → design tokens, glass/gradient utilities, accessibility base styles
  sitemap.ts / robots.ts → generated at build time, cover both locales

components/
  layout/    → Navbar, Footer, WhatsAppButton, LoadingScreen, SmoothScrollProvider, locale helpers
  ui/        → Button, GlassCard, GradientText, Reveal, Container, AnimatedCounter, Marquee...
  sections/  → Hero, ServiceCard, PortfolioGrid, Lightbox, PricingSection, TestimonialsCarousel,
               FAQAccordion, ContactForm, ContactInfo, ProcessSteps, CTASection...
  pages/     → One component per site page (HomePage, AboutPage, ServicesPage, ...), each takes
               a single `locale` prop. The thin files under app/(ar) and app/en just render these.

content/     → All copy & structured data lives here — services, portfolio, pricing, team,
               testimonials, FAQ, stats, nav. Every entry holds both `ar` and `en` text side by
               side, so adding/editing content never touches component code.

lib/i18n/    → Dictionary type + ar.ts / en.ts (UI chrome strings: nav, buttons, section titles).

scripts/     → Python scripts used to generate the placeholder brand assets in /public (see §6).
               Not part of the Next.js build — reference only.
```

### Why this i18n approach?
Static export has no middleware, so locale routing is done with plain Next.js route groups: `app/(ar)` renders at the root (Arabic, default) and `app/en` renders under `/en`. Every page component lives once under `components/pages/` and simply takes a `locale` prop — the route files are one-line wrappers. The language switcher preserves your current page when toggling, and the chosen language is remembered via `localStorage` so returning visitors land back on their preferred language.

---

## 4. Design system

The full palette was **extracted programmatically from the Reachy logo you provided** (see `scripts/gen_brand_assets.py` for the exact pixel-sampling script):

| Token | Hex | Source |
|---|---|---|
| `brand.blue.500` | `#0593FA` | Sampled from the "RE" of the wordmark |
| `brand.purple.500` | `#C92CF4` | Sampled from the "ACH" gradient core |
| `brand.orange.500` | `#FB7A3C` | Sampled from the "Y" + arrow tip |
| `brand.indigo.500` | `#3217F0` | Sampled from Reachy's existing ad creative CTA panels |
| `navy.950 / 900 / 800` | `#03050F / #050C29 / #08123F` | Sampled from the dark backgrounds in Reachy's existing social creatives |

Full 50–900 tint/shade ramps for each color live in `tailwind.config.ts`.

**Signature motif:** the logo's diagonal ascending arrow (Reach → Engage → Grow) is echoed throughout the site — in the loading screen, the generated portfolio placeholder art, and as the animated scroll-progress line in the "How We Work" section on the About page.

**Typography:** Arabic uses IBM Plex Sans Arabic (a geometric, modern Arabic sans that pairs cleanly with Reachy's geometric wordmark); English uses Inter. Both are variable-weight and loaded with `next/font/google` (self-hosted at build time, no runtime request to Google).

---

## 5. Deploying to GitHub Pages

A ready-to-use workflow is included at `.github/workflows/deploy.yml`. To use it:

1. Push this project to a GitHub repository.
2. In the repo settings, go to **Settings → Pages** and set **Source** to "GitHub Actions".
3. Push to `main` — the workflow builds the static site and deploys it automatically.

**Project site vs. user site path handling:**
- If your repo is `github.com/you/reachy` and the site will live at `https://you.github.io/reachy/`, the workflow already sets `NEXT_PUBLIC_BASE_PATH` to `/reachy` automatically (via `${{ github.event.repository.name }}`) — `next.config.mjs` picks this up and configures `basePath`/`assetPrefix` for you.
- If instead you're deploying to a **user/org page** (`https://you.github.io/`) or a **custom domain**, delete the `NEXT_PUBLIC_BASE_PATH` line from the workflow (or leave it empty) so the site is built for the root path.

**Manual deployment** (any static host — Netlify, S3, Vercel static, etc.):
```bash
npm run build
# upload the contents of /out
```

---

## 6. Placeholder content — what to replace before launch

Per the brief, **everything below is a placeholder** and clearly marked in code with `// Placeholder` or `// TODO` comments:

| What | Where | Notes |
|---|---|---|
| WhatsApp number | `lib/i18n/index.ts` → `WHATSAPP_NUMBER` | Currently a placeholder Egyptian-format number |
| Contact email / phone | `lib/i18n/index.ts` | `CONTACT_EMAIL`, `CONTACT_PHONE_DISPLAY` |
| Social links | `lib/i18n/index.ts` → `SOCIAL_LINKS` | Facebook/Instagram/LinkedIn/TikTok/Behance |
| Production domain | `lib/i18n/index.ts` → `SITE_URL` | Used for canonical URLs, sitemap, OG tags |
| Contact form backend | `components/sections/ContactForm.tsx` → `CONTACT_FORM_ENDPOINT` | Static export has no backend. Point this at Formspree/Getform/Web3Forms (or any POST endpoint) to receive submissions directly. Until set, the form falls back to opening a pre-filled email draft, so it's still usable out of the box. |
| Portfolio images | `public/images/portfolio/*.webp` + `content/portfolio.ts` | Currently original abstract cover art generated in the brand palette (see below) — **not real client photography**, since no real project images exist yet. Swap in real case-study photography as it becomes available. |
| Team photos | `components/sections/TeamSection.tsx` | Currently gradient initials avatars. Add real headshots when available. |
| Pricing figures | `content/pricing.ts` | Indicative EGP placeholders — replace with your real rate card. |
| Testimonials, FAQ, team bios | `content/*.ts` | Realistic placeholder copy — replace with real client quotes and bios as you collect them. |
| Google Maps embed | `components/sections/ContactInfo.tsx` | Currently a styled placeholder panel — swap in a real embed once you have a confirmed office address. |

### About the portfolio images
Since no real client work exists to showcase yet, the portfolio section uses **original generative art** (gradient compositions in the exact Reachy brand palette, echoing the logo's arrow motif) rather than stock photography — using real estate/product/beauty stock photos and presenting them as "our work" would misrepresent the agency's actual output. The generation script is included at `scripts/gen_portfolio_art.py` if you want to regenerate variations.

### Real logo files
Your uploaded logo is preserved at `public/images/brand/reachy-logo-source.png` (original) and a background-removed crop at `reachy-wordmark.png`. The site's navbar/footer logo is implemented as **styled gradient text** ("REACHY" in the exact extracted gradient) rather than the raster file, since that renders crisp at any size and on the dark theme. If you have (or commission) an official transparent/vector export of the logo, drop it into that folder and swap it into `components/layout/Navbar.tsx` and `Footer.tsx`.

---

## 7. Accessibility

- WCAG AA color contrast targeted throughout (light text on navy backgrounds, verified against the design tokens above).
- Full keyboard navigation: skip-to-content link, visible focus rings (`:focus-visible`) site-wide, the portfolio Lightbox and mobile nav are keyboard-operable (Escape to close, Arrow keys to navigate the Lightbox).
- All decorative elements (icons, background glows) are `aria-hidden`; interactive icons have `aria-label`s.
- Every animation (Framer Motion, GSAP, CSS) respects `prefers-reduced-motion` and is disabled/instant for users who request it.
- Images use descriptive `alt` text; purely decorative images use empty alt.

## 8. Performance & SEO

- Fully static export — no server render cost, cacheable at the CDN edge.
- `next/font` self-hosts fonts at build time (no runtime Google Fonts request, no layout shift — `display: swap`).
- Images are served via `next/image` with `unoptimized: true` (required for static export) — pre-sized and lazy-loaded by default.
- Per-page metadata, Open Graph + Twitter Card images (`public/og-image.png`), JSON-LD Organization schema, `sitemap.xml` and `robots.txt` generated at build time, and `hreflang` alternates linking the Arabic/English versions of every page.

---

## 9. A note on `npm audit`

`npm audit` will report a handful of advisories against `next`. Nearly all of them concern **server runtime features this project doesn't use in production** — Middleware, the Image Optimization API, Server Components streaming, rewrites/WebSocket proxying — none of which execute in a static export (there is no Node server in production; GitHub Pages serves pre-built HTML files). We pinned to the latest patched `14.2.x` release rather than jumping to a new major version blind, to keep the exact App Router behavior this project was built and tested against. Upgrading to a newer major Next.js version later is a reasonable improvement — just re-test the build and static export afterward.
