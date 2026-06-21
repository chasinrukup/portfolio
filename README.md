# Sachin Kurup — Personal Website

Editorial-dark, single-page narrative site for **Sachin Kurup** — a Computer Science researcher working at the intersection of multi-agent AI, retrieval-augmented generation, and multilingual NLP. Designed to communicate research seriousness to MS / PhD admissions committees while also reading clearly to AI / ML recruiters.

Built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

---

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Build for production

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx              Fonts, metadata, JSON-LD Person schema
  page.tsx                Composes all sections in scroll order
  globals.css             Design tokens, grain, motion-reduction
  opengraph-image.tsx     Dynamic OG image (1200×630)
  sitemap.ts              Sitemap
  robots.ts               Robots
  icon.svg                Favicon
components/
  motion/SmoothScroll.tsx Lenis provider
  nav/SideIndex.tsx       Sticky left-side TOC with active section
  sections/               One file per page section
  ui/                     Reusable primitives (SectionHeader, StatusChip, ProjectCard, RevealOnScroll, CursorGlow, Hairline)
content/
  site.ts                 Identity, contact, tagline, URLs
  about.ts                About-section prose + pull quote
  currents.ts             Research interest areas
  projects.ts             Case studies (10 projects)
  publications.ts         Grouped by Accepted / Published / Under Review / In Prep
  timeline.ts             Journey milestones
  toolkit.ts              Skills as capability matrix grouped by domain
  now.ts                  Currently in-flight work
public/
  resume/Sachin-Kurup-CV.pdf
```

## Editing content

All copy lives under `content/` as typed TypeScript modules. To update any text or add a new project, edit the relevant file — no other code changes required. The `now.ts` file is intended for frequent updates (what's in-flight this month).

## Design tokens

Defined in two places — Tailwind theme (`tailwind.config.ts`) and CSS variables (`app/globals.css`):

| Token            | Value     | Use                                  |
|------------------|-----------|--------------------------------------|
| `bg-ink-base`    | `#0A0A0B` | Page background (near-black ink)     |
| `bg-ink-elevated`| `#131316` | Hover / elevated surface             |
| `border-ink-hairline` | `#1F1F23` | 1px section dividers           |
| `text-paper`     | `#F5F2EB` | Primary text (warm paper-white)      |
| `text-paper-muted` | `#8A8A93` | Secondary text                     |
| `text-paper-dim` | `#5A5A63` | Tertiary text                        |
| `bg-accent`      | `#E5654F` | Warm terracotta accent               |

Typography pairing: **Instrument Serif** (display) · **Inter** (body) · **JetBrains Mono** (mono).

## Accessibility

- WCAG AA contrast on all body text.
- Semantic HTML (`<section>`, `<article>`, `<nav>`, h1–h3 hierarchy).
- Visible focus states in accent colour.
- Skip-to-content link.
- All transform animations respect `prefers-reduced-motion`.

## Performance

- Static site (SSG), no client data fetching.
- Fonts via `next/font` with `display: swap`.
- Lighthouse target: 95+ on Performance, Accessibility, Best Practices, SEO.

## Deploy

Recommended target: **Vercel** (Next.js native).

```bash
npm i -g vercel
vercel
```

Set the production domain in Vercel project settings, then update `site.url` in `content/site.ts` so canonical URLs, OG metadata, and the sitemap point to the right place.

## Pre-launch checklist

1. Confirm GitHub handle in `content/site.ts` (currently `github.com/sachinkurup` — placeholder).
2. Update `site.url` to the production domain.
3. Regenerate OG image (visit `/opengraph-image` to verify).
4. Run `npm run build` — must succeed with zero warnings.
5. Lighthouse audit on the production build.
