# Portfolio Implementation Plan
### Kent Bryan Colina — Full-Stack Developer & AI Engineer

> **Goal:** A production-grade, Lighthouse-100 portfolio that is clean, minimalist, and unique — built incrementally in quality-controlled phases.

---

## Design Identity

Before writing a single line of code, every design decision flows from one question:
**Who is Kent, and what makes him different from every other developer?**

**The answer from the CV:**
- Rank **64 out of 1,920 teams** — Reply AI Agent Challenge 2026
- **Finalist** — USAII Global AI Hackathon 2026
- **Top 10 Finalist** — OLTEK Paper to Data Hackathon
- Builds **multi-agent systems**, **human-in-the-loop AI**, and **document intelligence** platforms
- Ships production software at **Symph** (Peaksy, CourtHub — real products with real users)
- Currently a **BS IT student at CTU** — upcoming graduate

**The design must say:** *This person builds serious AI systems. He doesn't just talk about AI — he ships it under competition pressure, against thousands of teams.*

---

### Visual Language

| Element | Decision | Rationale |
|---|---|---|
| **Personality** | Cold-precise, signal-forward, minimal | Mirrors AI/engineering aesthetic without being gimmicky |
| **Background** | Near-black dark default (`oklch(0.08 0 0)`), near-white light (`oklch(0.99 0 0)`) | Monochromatic base that makes the accent pop |
| **Accent color** | Electric cyan `oklch(0.78 0.15 195)` | Terminal/AI energy, not overused in dev portfolios |
| **Display font** | `Space Grotesk` — geometric, modern, technical feel | Distinctive without being trendy |
| **Body font** | `Inter` — legible, neutral, invisible | Keeps reading fast |
| **Mono font** | `JetBrains Mono` — for labels, stats, timestamps, tags | Reinforces AI/dev identity, already scaffolded |
| **Section labels** | Mono font, small, dimmed (`01 / about`, `02 / projects`) | Editorial structure borrowed from bryllim.com |
| **Motion** | Subtle fade-up on scroll, stagger on hero mount | Never distracting, always purposeful |
| **Signature element** | **Hackathon leaderboard block** — ranks displayed like a scoreboard | Nobody else does this; it's Kent's biggest differentiator |

---

### Unique Design Differentiators (What Makes It Kent's)

1. **Hackathon rank as a hero signal** — `#64 / 1,920` shown in mono font like a terminal output
2. **Projects categorized as "systems"** — not just "projects"; framed as *AI Systems*, *SaaS Products*, *Automation Tools*
3. **Skills displayed as "active stack"** — each category shows tech as `[running]` badge tags (mono font, subtle border)
4. **No images in hero** — pure typography; identity built through words and numbers, not a photo
5. **"Built under pressure"** micro-label on hackathon entries — conveys real-world stakes

---

## Tech Stack Summary (Already Scaffolded)

```
Framework:    Next.js 15.5 (App Router, Turbopack)
Language:     TypeScript (strict mode)
Styling:      Tailwind CSS v4 + shadcn/ui (base-nova style, OKLCH tokens)
Animation:    Motion (Framer Motion)
Fonts:        next/font — Space Grotesk + Inter + JetBrains Mono
Icons:        Lucide React
Content:      File-based MDX (gray-matter + next-mdx-remote)
Analytics:    Vercel Analytics + Speed Insights
Hosting:      Vercel (GitHub auto-deploy)
```

---

## Phase Overview

| Phase | What Gets Built | Model | Est. Sessions |
|---|---|---|---|
| **1** | Design system: tokens, fonts, motion, globals | `composer-2.5` | 1 |
| **2** | Layout shell: Navbar + Footer + theme toggle | `composer-2.5` | 1 |
| **3** | Hero + About sections | `composer-2.5` | 1–2 |
| **4** | Projects section + `/projects/[slug]` deep pages | `composer-2.5` | 1–2 |
| **5** | Hackathons section (the signature block) | `composer-2.5` | 1 |
| **6** | Experience + Skills sections | `composer-2.5` | 1 |
| **7** | Contact section + Footer polish | `composer-2.5-fast` | 1 |
| **8** | SEO: metadata, JSON-LD, sitemap, robots.txt | `composer-2.5` | 1 |
| **9** | Performance hardening (Lighthouse 100) | `composer-2.5` | 1 |
| **10** | Content population, CV data, launch | `composer-2.5-fast` | 1 |

---

## Phase 1 — Design System & Tokens

> **Goal:** Define every visual decision in one place. Nothing is hardcoded after this phase.
>
> **Model:** `composer-2.5`
> **Skills:** `shadcn` (for token awareness), `nextjs` (for font setup)

### Files to Create / Edit

```
src/lib/fonts.ts            ← Font definitions
src/lib/motion.ts           ← Shared animation variants
src/lib/site.ts             ← Site-wide config (name, URL, socials)
src/app/globals.css         ← Design tokens (OKLCH colors, typography scale)
```

### 1.1 — Font Setup (`src/lib/fonts.ts`)

Replace current Geist fonts with:

```ts
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";

export const fontDisplay = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});
```

### 1.2 — Site Config (`src/lib/site.ts`)

```ts
export const siteConfig = {
  name: "Kent Colina",
  title: "Full-Stack Developer & AI Engineer",
  description:
    "Building practical AI-powered systems, agentic workflows, and full-stack applications that solve real problems.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "colinakb24@gmail.com",
  links: {
    github: "https://github.com/betaTrident",
    linkedin: "https://linkedin.com/in/kent-colina",
  },
} as const;
```

### 1.3 — Motion Variants (`src/lib/motion.ts`)

```ts
import type { Variants } from "motion/react";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.4 } },
};

export const staggerContainer: Variants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.08 } },
};
```

### 1.4 — Global CSS Tokens (`src/app/globals.css`)

Extend the existing shadcn tokens with:

```css
/* Typography scale */
@theme inline {
  --font-display: var(--font-display);
  --font-sans:    var(--font-sans);
  --font-mono:    var(--font-mono);
}

/* Accent color (electric cyan) */
:root {
  --accent-ai: oklch(0.78 0.15 195);
}

/* Custom utility classes */
.section-label {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted-foreground);
}
```

### 1.5 — Checklist Before Proceeding to Phase 2

- [ ] `npm run dev` starts without errors
- [ ] `npm run build` passes TypeScript and lint checks
- [ ] Space Grotesk renders in browser (check Network tab → fonts)
- [ ] OKLCH tokens visible in DevTools
- [ ] No layout shift from fonts (`display: swap` set)

---

## Phase 2 — Layout Shell

> **Goal:** A Navbar and Footer that work perfectly on all screen sizes and are accessible.
>
> **Model:** `composer-2.5`
> **Skills:** `shadcn` (Sheet for mobile nav), `react-best-practices`

### Files to Create / Edit

```
src/components/layout/navbar.tsx       ← Desktop + mobile navigation
src/components/layout/footer.tsx       ← Minimal footer
src/components/layout/theme-toggle.tsx ← Sun/moon icon button
src/app/layout.tsx                     ← Wire fonts + providers
```

### 2.1 — Install Dependencies

```bash
npm install next-themes
npx shadcn@latest add sheet
```

### 2.2 — Navbar Spec

**Desktop layout:**
```
Kent Colina    ·    About    Projects    Hackathons    Experience    Skills    ·    [theme toggle]
```

**Mobile layout:**
```
Kent Colina                                                                    [☰ menu icon]
↓ Sheet drawer (slides from right)
  About
  Projects
  Hackathons
  Experience
  Skills
  [theme toggle]
```

**Behavior:**
- Fixed top (`position: sticky top-0`), `backdrop-blur-sm` + `border-b border-border/50`
- Nav links: smooth scroll to `#section-id` on homepage; real `<Link>` on other pages
- Active link: accent color underline (1px, CSS only, no JS)
- Mobile: Sheet from shadcn — full-width, closes on link click
- Keyboard: Tab order correct, focus ring visible

### 2.3 — Theme Toggle

```tsx
"use client";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
```

- Icon switches based on resolved theme
- `aria-label="Toggle theme"` — required for accessibility
- `title` attribute for tooltip on hover

### 2.4 — Root Layout Update (`src/app/layout.tsx`)

```tsx
import { ThemeProvider } from "next-themes";
import { fontDisplay, fontSans, fontMono } from "@/lib/fonts";

// Wrap <body> with ThemeProvider attribute="class" defaultTheme="dark"
```

### 2.5 — Checklist

- [ ] Navbar renders on all pages
- [ ] Mobile sheet opens and closes correctly
- [ ] Theme toggle switches dark/light, persists on reload
- [ ] No horizontal scroll on mobile at any width
- [ ] Tab through nav — focus rings visible on all links

---

## Phase 3 — Hero & About Sections

> **Goal:** The above-the-fold that makes Kent's identity and competitive record immediately clear.
>
> **Model:** `composer-2.5`
> **Skills:** `react-best-practices`, `nextjs`

### Files to Create / Edit

```
src/components/sections/hero.tsx       ← Hero section
src/components/sections/about.tsx      ← About section
src/data/stats.ts                      ← Key numbers (typed)
src/app/page.tsx                       ← Compose all sections
```

### 3.1 — Hero Layout

```
[Section — full viewport height on desktop, auto on mobile]

  01 / kent colina                          ← mono label, dimmed
  
  Full-Stack Developer                      ← Space Grotesk, 4xl–6xl
  & AI Engineer.                            ← line break for rhythm

  Building agentic systems, AI-powered      ← Inter, lg, muted
  workflows, and full-stack software
  that solves real problems.

  ──────────────────────────────────────

  #64 / 1,920   USAII Finalist   Top 10     ← mono font, stats row
  Reply AI 2026  Global AI 2026  OLTEK 2025

  ──────────────────────────────────────

  [GitHub ↗]  [LinkedIn ↗]  [Email]  [Resume ↓]   ← icon + label buttons
```

**Animation sequence (staggered on mount):**
1. Label fades in (0ms)
2. Name slides up (100ms)
3. Subtitle fades in (200ms)
4. Divider draws left-to-right (300ms) — CSS `scaleX` animation
5. Stats row stagger (400ms, 80ms per stat)
6. Buttons fade in (600ms)

**Stats data (`src/data/stats.ts`):**

```ts
export type Stat = {
  value: string;
  label: string;
  href?: string;
};

export const heroStats: Stat[] = [
  { value: "#64 / 1,920", label: "Reply AI Agent Challenge", href: undefined },
  { value: "Finalist",    label: "USAII Global AI Hackathon", href: undefined },
  { value: "Top 10",      label: "OLTEK Paper to Data", href: undefined },
];
```

**Resume link:** Direct `<a href="/resume.pdf" download>` — place `Colina_Kent-CV.pdf` in `/public/resume.pdf`.

### 3.2 — About Section (`#about`)

```
[01 / about]

  Short bio paragraph — 3–4 sentences, first person, present tense.
  Content draft:

  "I'm Kent — a full-stack developer and AI engineer based in Cebu,
   Philippines. I focus on building agentic systems, multi-agent pipelines,
   and AI-powered applications that turn messy workflows into structured
   software. Currently finishing my BS in Information Technology at CTU
   while shipping production code at Symph."

  [Currently open to opportunities →]   ← subtle accent-colored link
```

**Scroll-reveal:** `whileInView` with `fadeUp`, `once: true`, `margin: "-80px"`.

### 3.3 — Checklist

- [ ] Hero visible immediately on load — no flash of unstyled content
- [ ] Stats row wraps gracefully on mobile (grid or flex-wrap)
- [ ] Resume download works (`/public/resume.pdf` exists)
- [ ] `useReducedMotion()` check — all animations skip if true
- [ ] LCP element (the heading) has no animation delay > 200ms

---

## Phase 4 — Projects Section & Deep Pages

> **Goal:** Show Kent's best work with enough detail that a recruiter knows exactly what he built.
>
> **Model:** `composer-2.5`
> **Skills:** `nextjs` (static generation), `shadcn` (Card, Badge)

### Files to Create / Edit

```
src/components/sections/projects.tsx          ← Homepage project grid
src/components/projects/project-card.tsx      ← Reusable card component
src/app/projects/page.tsx                     ← All projects page
src/app/projects/[slug]/page.tsx              ← Case study page (already scaffolded)
content/projects/                             ← MDX files (one per project)
src/data/projects-featured.ts                 ← Featured project IDs for homepage
```

### 4.1 — Project Categories

Organize projects into three types (shown as a label on each card):

| Type label | Projects |
|---|---|
| `AI System` | Orca (human-in-the-loop), OLTEK OCR, Reply AI risk classifier, IBM ICU monitor |
| `SaaS Product` | CourtHub, Peaksy, Peaksy Mobile |
| `Client Build` | Rayn Motorparts POS, Coffito POS, Barangay Health System |

### 4.2 — Project Card Spec

```
┌─────────────────────────────────────────────┐
│ [AI System]                          [2025] │   ← category tag + year (mono)
│                                             │
│ Orca                                        │   ← Space Grotesk, xl
│ Human-in-the-loop AI planning workspace     │   ← description, muted
│                                             │
│ [Python] [Astro] [React] [Redis]            │   ← tech badges
│                                             │
│ case study →                                │   ← link to /projects/slug
└─────────────────────────────────────────────┘
```

- Card hover: `y: -2`, subtle shadow increase — Motion `whileHover`
- No images on cards (pure text) — images live inside the case study
- Featured projects (Orca, Reply AI, USAII, OLTEK): shown on homepage (max 4)

### 4.3 — MDX Front Matter Structure

```yaml
---
title: Orca
category: AI System
description: Human-in-the-loop AI planning workspace using multi-stage agents and context retrieval.
date: 2026-01-01
tags: [Python, Astro, React, Redis, Supabase, Docker]
featured: true
github: https://github.com/betaTrident/orca   # if public
demo: null
---
```

### 4.4 — Case Study Page Layout (`/projects/[slug]`)

```
← Back to projects

[Category label]  [Date]
[Title — display font, 4xl]
[Description — lg, muted]
[Tech tags]  [GitHub ↗]  [Demo ↗]

─────────────

[MDX content]
  ## The Problem
  ## What I Built
  ## How It Works
  ## Outcome / Results
```

Install typography plugin for MDX prose:

```bash
npm install -D @tailwindcss/typography
```

### 4.5 — Homepage Section Layout

```
[02 / projects]                              [all projects →]

  [Card]  [Card]
  [Card]  [Card]
```

- `grid-cols-1 sm:grid-cols-2` — 2 columns on tablet+
- Stagger animation: `staggerContainer` + `fadeUp` on each card

### 4.6 — Checklist

- [ ] All 4 featured projects render on homepage
- [ ] `/projects` page shows all projects (sortable by category client-side)
- [ ] `/projects/[slug]` renders MDX content
- [ ] `generateStaticParams` pre-renders all slug routes
- [ ] No orphaned links (all slugs have matching MDX files)

---

## Phase 5 — Hackathons Section (The Signature Block)

> **Goal:** The most unique section in the portfolio — Kent's competitive track record displayed like a leaderboard.
>
> **Model:** `composer-2.5`
> **Skills:** `react-best-practices`

This section is what separates Kent's portfolio from 95% of other developer portfolios. **Rank 64 out of 1,920 teams is objectively impressive** and must be the loudest thing on the page after the name.

### Files to Create / Edit

```
src/components/sections/hackathons.tsx    ← The signature block
src/data/hackathons.ts                    ← Typed data array
```

### 5.1 — Hackathon Data (`src/data/hackathons.ts`)

```ts
export type Hackathon = {
  name: string;
  year: number;
  result: string;        // "#64 / 1,920" | "Finalist" | "Top 10" | "Participant"
  resultLabel: string;   // "Reply AI Agent Challenge" etc.
  description: string;
  tags: string[];
  highlight: boolean;    // true = top achievements (different visual weight)
  href?: string;
};

export const hackathons: Hackathon[] = [
  {
    name: "Reply AI Agent Challenge 2026",
    year: 2026,
    result: "#64 / 1,920",
    resultLabel: "Teams",
    description:
      "Multi-agent AI risk-classification system using a hybrid ML + LLM pipeline to flag high-risk cases with traceable agent runs.",
    tags: ["Python", "LangChain", "OpenRouter", "Langfuse"],
    highlight: true,
  },
  {
    name: "USAII Global AI Hackathon 2026",
    year: 2026,
    result: "Finalist",
    resultLabel: "",
    description:
      "Human-in-the-loop AI planning workspace with multi-stage agents, context retrieval, and proposal validation.",
    tags: ["FastAPI", "Astro", "React", "Supabase", "Redis"],
    highlight: true,
  },
  {
    name: "OLTEK Paper to Data Hackathon",
    year: 2025,
    result: "Top 10",
    resultLabel: "Finalist",
    description:
      "Document intelligence platform — contracts and scanned logistics papers into structured datasets via OCR + LLM extraction.",
    tags: ["FastAPI", "PaddleOCR", "Ollama", "Next.js", "Docker"],
    highlight: true,
  },
  {
    name: "IBM Dev Day: Bob Edition 2026",
    year: 2026,
    result: "Participant",
    resultLabel: "",
    description:
      "Multi-agent ICU deterioration monitoring system — patient vitals analysis, risk scoring, and SBAR briefs for clinicians.",
    tags: ["FastAPI", "React", "TypeScript", "watsonx.ai"],
    highlight: false,
  },
  {
    name: "ASEAN AI Hackathon 2026",
    year: 2026,
    result: "Participant",
    resultLabel: "",
    description:
      "Multi-role AI public transport platform with live telemetry, demand signals, and confidence scoring.",
    tags: [],
    highlight: false,
  },
  {
    name: "SEA-CICSIC Innovation Competition",
    year: 2026,
    result: "Participant",
    resultLabel: "",
    description:
      "Wellness workspace planning platform using AI simulation, clutter detection, and localized inventory tracking.",
    tags: [],
    highlight: false,
  },
];
```

### 5.2 — Visual Layout

**Highlighted entries** (top 3, `highlight: true`) — full-width, distinct:

```
┌─────────────────────────────────────────────────────────────┐
│  Built under pressure                            [2026]     │  ← mono label
│                                                             │
│  Reply AI Agent Challenge 2026                              │  ← Space Grotesk
│                                                             │
│  #64 / 1,920 Teams                                          │  ← LARGE mono, accent color
│                                                             │
│  Multi-agent risk-classification system using a hybrid      │  ← description
│  ML + LLM pipeline...                                       │
│                                                             │
│  [Python]  [LangChain]  [OpenRouter]  [Langfuse]            │  ← tags
└─────────────────────────────────────────────────────────────┘
```

**Participant entries** — compact horizontal list:
```
  IBM Dev Day: Bob Edition 2026          Participant    2026
  ASEAN AI Hackathon 2026                Participant    2026
  SEA-CICSIC Innovation Competition      Participant    2026
```

### 5.3 — Checklist

- [ ] `#64 / 1,920` renders in mono font, accent color — unmissable on both themes
- [ ] Highlighted cards have clear visual separation from participant rows
- [ ] "Built under pressure" micro-label present on highlighted cards
- [ ] Mobile: cards stack full-width, rank number remains large

---

## Phase 6 — Experience & Skills Sections

> **Goal:** Structured credentials in the least amount of space, maximum clarity.
>
> **Model:** `composer-2.5`
> **Skills:** `shadcn` (Badge), `react-best-practices`

### Files to Create / Edit

```
src/components/sections/experience.tsx    ← Timeline component
src/components/sections/skills.tsx        ← Category cards
src/data/experience.ts                    ← Typed experience array
src/data/skills.ts                        ← Typed skills categories
```

### 6.1 — Experience Data (`src/data/experience.ts`)

```ts
export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  location: string;
  type: "work" | "education";
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Full Stack Software Developer Intern",
    company: "Symph",
    period: "Feb 2026 – Jun 2026",
    location: "Cebu City, Philippines",
    type: "work",
    bullets: [
      "Contributed to Peaksy, Peaksy Mobile, and CourtHub in a Git-based monorepo.",
      "Built and improved full-stack features across auth, profiles, search, bookings, payments, and chat.",
    ],
  },
  {
    role: "Freelance Full Stack Software Developer",
    company: "Self-Employed",
    period: "Aug 2024 – Jan 2026",
    location: "Philippines",
    type: "work",
    bullets: [
      "Delivered custom POS, inventory, and community management systems for clients.",
      "Managed end-to-end development: planning, implementation, deployment, and client support.",
    ],
  },
  {
    role: "BS Information Technology",
    company: "Cebu Technological University",
    period: "2022 – Expected Jul 2026",
    location: "Cebu City, Philippines",
    type: "education",
    bullets: [],
  },
];
```

### 6.2 — Experience Layout

Desktop: left column = year label (mono, dimmed) | thin vertical rule | right column = content  
Mobile: year above content, no rule

```
  2026 │  Full Stack Developer Intern          Symph
       │  Cebu City, Philippines · Feb–Jun 2026
       │  · Contributed to Peaksy, Peaksy Mobile, CourtHub...
       │
  2024 │  Freelance Full Stack Developer       Self-Employed
       │
  2022 │  BS Information Technology            CTU             ← education badge
```

### 6.3 — Skills Data (`src/data/skills.ts`)

```ts
export type SkillCategory = {
  name: string;
  description: string;
  tags: string[];
};

export const skills: SkillCategory[] = [
  {
    name: "AI & Agentic Engineering",
    description: "Building multi-agent systems, RAG pipelines, and human-in-the-loop AI workflows.",
    tags: ["LangChain", "OpenRouter", "Langfuse", "Ollama", "Claude", "Codex", "RAG"],
  },
  {
    name: "Full-Stack Development",
    description: "End-to-end web and API development across frontend, backend, and database layers.",
    tags: ["React", "Next.js", "Astro", "NestJS", "Django", "FastAPI", "Flask"],
  },
  {
    name: "Languages",
    description: "Primary languages used across AI, backend, and frontend projects.",
    tags: ["TypeScript", "Python", "JavaScript", "SQL", "Java"],
  },
  {
    name: "Data & Databases",
    description: "Designing and operating relational, document, and in-memory data stores.",
    tags: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "Firebase", "Redis"],
  },
  {
    name: "Cloud & DevOps",
    description: "Deploying and operating containerized applications on cloud infrastructure.",
    tags: ["Docker", "Vercel", "Google Cloud Run", "CI/CD", "GitHub Actions"],
  },
  {
    name: "Document Intelligence",
    description: "Transforming unstructured documents into structured data using OCR and LLMs.",
    tags: ["PaddleOCR", "watsonx.ai", "FastAPI", "Pandas", "Polars"],
  },
];
```

### 6.4 — Skills Layout

2-column grid on desktop, 1 on mobile. Each card:

```
┌───────────────────────────────────┐
│ AI & Agentic Engineering          │  ← category name
│ Building multi-agent systems...   │  ← description, muted
│                                   │
│ [LangChain] [OpenRouter] [RAG]... │  ← Badge tags
└───────────────────────────────────┘
```

### 6.5 — Checklist

- [ ] Timeline renders correctly at all breakpoints
- [ ] Education entry is visually different from work entries
- [ ] Skills grid collapses to 1 column on mobile
- [ ] No tag truncation — all tags visible

---

## Phase 7 — Contact Section & Footer Polish

> **Goal:** A clear call-to-action that makes reaching Kent effortless.
>
> **Model:** `composer-2.5-fast`
> **Skills:** none required

### Files to Create / Edit

```
src/components/sections/contact.tsx    ← Contact CTA
src/components/layout/footer.tsx       ← Final footer (already scaffolded, refine)
```

### 7.1 — Contact Layout

```
[08 / contact]

  Let's build something.

  Whether you're working on an AI product, need a full-stack engineer,
  or want to talk about agentic systems — I'm available.

  [colinakb24@gmail.com]  ← click to copy, shows "Copied!" tooltip

  [GitHub ↗]  [LinkedIn ↗]
```

Implement copy-to-clipboard with a `useClipboard` hook + a `useState` "Copied!" tooltip (auto-resets after 2s).

### 7.2 — Footer

```
© 2026 Kent Colina   ·   Built with Next.js, Tailwind, and MDX
```

Single line, `text-xs`, `text-muted-foreground`. No repeated nav. No bloat.

### 7.3 — Checklist

- [ ] Email copy works on touch devices
- [ ] "Copied!" tooltip appears and disappears after 2s
- [ ] Footer has no layout overflow on any width

---

## Phase 8 — SEO, Metadata & Structured Data

> **Goal:** Lighthouse SEO 100. Every page is indexable, social-shareable, and machine-readable.
>
> **Model:** `composer-2.5`
> **Skills:** `nextjs` (metadata API, generateStaticParams)

### Files to Create / Edit

```
src/app/layout.tsx              ← Root metadata, viewport, robots
src/app/opengraph-image.tsx     ← Auto-generated OG image (Next.js ImageResponse)
src/app/sitemap.ts              ← Dynamic sitemap
src/app/robots.ts               ← robots.txt
src/lib/structured-data.ts      ← JSON-LD helpers
```

### 8.1 — Root Metadata (`src/app/layout.tsx`)

```ts
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["AI Engineer", "Full-Stack Developer", "Agentic Systems", "Next.js", "TypeScript", "Cebu"],
  authors: [{ name: "Kent Bryan Colina", url: siteConfig.url }],
  creator: "Kent Bryan Colina",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};
```

### 8.2 — OG Image (`src/app/opengraph-image.tsx`)

Generated at build time using Next.js `ImageResponse`. Shows name, title, and key stat in the design system's typography. No external image service needed.

### 8.3 — Dynamic Sitemap (`src/app/sitemap.ts`)

```ts
import type { MetadataRoute } from "next";
import { getProjects } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getProjects().map((p) => ({
    url: `${siteConfig.url}/projects/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: siteConfig.url, lastModified: new Date(), priority: 1 },
    { url: `${siteConfig.url}/projects`, priority: 0.8 },
    ...projects,
  ];
}
```

### 8.4 — JSON-LD Structured Data

Add `Person` schema to the homepage:

```ts
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kent Bryan Colina",
  jobTitle: "Full-Stack Developer & AI Engineer",
  email: "colinakb24@gmail.com",
  url: siteConfig.url,
  sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
};
```

Inject as `<script type="application/ld+json">` in the homepage `<head>`.

### 8.5 — Security Headers (`next.config.ts`)

```ts
const securityHeaders = [
  { key: "X-Frame-Options",           value: "DENY" },
  { key: "X-Content-Type-Options",    value: "nosniff" },
  { key: "Referrer-Policy",           value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy",        value: "camera=(), microphone=(), geolocation=()" },
  { key: "X-XSS-Protection",          value: "1; mode=block" },
];
```

### 8.6 — Checklist

- [ ] `/sitemap.xml` returns valid XML in browser
- [ ] `/robots.txt` returns correct content
- [ ] OG image renders at 1200×630 (check with [opengraph.xyz](https://www.opengraph.xyz))
- [ ] JSON-LD validates at [schema.org/validator](https://validator.schema.org)
- [ ] No pages return 404 in sitemap

---

## Phase 9 — Performance Hardening (Lighthouse 100)

> **Goal:** All four Lighthouse scores at 100 (Performance, Accessibility, Best Practices, SEO).
>
> **Model:** `composer-2.5`
> **Skills:** `nextjs`, `react-best-practices`, `verification`

### 9.1 — Performance Score 100

| Metric | Target | Implementation |
|---|---|---|
| **LCP** | < 2.5s | Profile photo (if added) uses `priority`, no animation delay on heading |
| **FCP** | < 1.8s | Static generation, minimal JS, no render-blocking resources |
| **TBT** | < 200ms | Server Components by default; `"use client"` only where required |
| **CLS** | 0 | All images have explicit `width` + `height`; `font-display: swap` |
| **INP** | < 200ms | No heavy client-side event handlers |

**Rules:**
- Every page is fully statically generated (`getStaticParams`) — no SSR
- Client components (`"use client"`) limited to: Navbar (mobile sheet), ThemeToggle, HeroAnimations, CopyEmail
- No `useEffect` for data fetching — all data resolved at build time
- Images: always `next/image` with explicit dimensions
- Fonts: already using `next/font` — zero external font requests
- No third-party scripts except Vercel Analytics (async, non-blocking)

### 9.2 — Accessibility Score 100

| Rule | Implementation |
|---|---|
| Heading hierarchy | Only one `<h1>` per page; sections use `<h2>` → `<h3>` |
| Color contrast | shadcn's OKLCH tokens are calibrated to WCAG AA by default; verify accent color |
| Interactive elements | All buttons and links have accessible text or `aria-label` |
| Images | All `<Image>` have meaningful `alt` attributes; decorative images use `alt=""` |
| Focus management | `focus-visible` rings on all interactive elements (shadcn default) |
| Skip link | `<a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>` in layout |
| Reduced motion | `useReducedMotion()` disables all animations when preference is set |
| Landmark regions | `<header>`, `<main>`, `<footer>`, `<nav>` used correctly |
| Form labels | No forms on first version; email is a plain `<a>` link |

### 9.3 — Best Practices Score 100

- HTTPS: Vercel provides this by default
- No console errors: `eslint` + TypeScript strict mode catches these at build
- No deprecated APIs: no `getStaticProps`, no `next/router` (use `next/navigation`)
- CSP headers via `next.config.ts` (phase 8)
- No mixed content

### 9.4 — SEO Score 100

- Meta description: present on all pages (phase 8)
- Canonical URLs: `metadataBase` in root layout handles this
- Mobile viewport: `<meta name="viewport">` — Next.js adds this automatically
- Crawlable links: all `<Link>` components render as `<a>` tags
- Robots: `robots.ts` (phase 8)
- Valid HTML structure

### 9.5 — Verification Process

Run Lighthouse CI in two ways:

**Local:**
```bash
npm run build
npx serve@latest out     # or: npm run start
# Open Chrome DevTools → Lighthouse → Mobile → Analyze
```

**Automated (optional):**
Add to GitHub Actions workflow:
```yaml
- uses: treosh/lighthouse-ci-action@v11
  with:
    urls: |
      https://your-domain.com
    budgetPath: .lighthouserc.json
    uploadArtifacts: true
```

### 9.6 — Lighthouse Hardening Checklist

- [ ] Performance 100 on mobile (stricter than desktop)
- [ ] Accessibility 100 — run axe DevTools extension, zero violations
- [ ] Best Practices 100 — zero console errors in production build
- [ ] SEO 100 — verify with Google Search Console after deploy
- [ ] Core Web Vitals: LCP < 2.5s, CLS = 0, INP < 200ms
- [ ] Vercel Speed Insights active — monitor real-user metrics post-launch

---

## Phase 10 — Content Population & Launch

> **Goal:** Fill all data files and MDX content, then ship.
>
> **Model:** `composer-2.5-fast`
> **Skills:** none required

### 10.1 — Content Checklist

**Data files to complete:**
- [ ] `src/data/experience.ts` — all 3 entries from CV
- [ ] `src/data/skills.ts` — all 6 categories
- [ ] `src/data/hackathons.ts` — all 6 hackathons
- [ ] `src/data/stats.ts` — hero stats
- [ ] `src/lib/site.ts` — real URL, email, social links

**MDX files to write:**

| File | Priority |
|---|---|
| `content/projects/orca.mdx` | High — flagship AI project |
| `content/projects/reply-ai-agent.mdx` | High — highest-ranking hackathon |
| `content/projects/usaii-global.mdx` | High — finalist |
| `content/projects/courthub.mdx` | Medium — production SaaS |
| `content/projects/peaksy.mdx` | Medium — production product |
| `content/projects/oltek-hackathon.mdx` | Medium — Top 10 finalist |

**Public assets:**
- [ ] `public/resume.pdf` — place CV here
- [ ] `public/favicon.ico` — generate from initials "KC" or a simple mark

### 10.2 — Launch Steps

```bash
# 1. Final build check
npm run build

# 2. Commit everything
git add -A
git commit -m "feat: initial portfolio launch"
git push origin main

# 3. Vercel auto-deploys on push
# Monitor at: vercel.com/dashboard

# 4. Set production env vars in Vercel
NEXT_PUBLIC_SITE_URL = https://your-domain.com

# 5. Run Lighthouse on live URL (not localhost)
# Live URL has CDN caching + HTTP/2 — scores will be higher

# 6. Submit to Google Search Console
# Add sitemap: https://your-domain.com/sitemap.xml
```

### 10.3 — Post-Launch

- [ ] Verify Vercel Analytics is collecting data
- [ ] Check Speed Insights for real-user Web Vitals
- [ ] Add canonical URL to LinkedIn profile
- [ ] Share on developer communities

---

## File Tree (Final State)

```
K:\Portfolio\
├── content/
│   └── projects/
│       ├── orca.mdx
│       ├── reply-ai-agent.mdx
│       ├── usaii-global.mdx
│       ├── courthub.mdx
│       ├── peaksy.mdx
│       └── oltek-hackathon.mdx
├── public/
│   └── resume.pdf
├── src/
│   ├── app/
│   │   ├── layout.tsx               ← fonts, metadata, ThemeProvider
│   │   ├── page.tsx                 ← homepage (all sections)
│   │   ├── globals.css              ← OKLCH tokens, typography
│   │   ├── opengraph-image.tsx      ← auto-generated OG image
│   │   ├── sitemap.ts               ← dynamic sitemap
│   │   ├── robots.ts                ← robots.txt
│   │   └── projects/
│   │       ├── page.tsx             ← all projects
│   │       └── [slug]/
│   │           └── page.tsx         ← case study
│   ├── components/
│   │   ├── layout/
│   │   │   ├── navbar.tsx
│   │   │   ├── footer.tsx
│   │   │   └── theme-toggle.tsx
│   │   ├── sections/
│   │   │   ├── hero.tsx
│   │   │   ├── about.tsx
│   │   │   ├── projects.tsx
│   │   │   ├── hackathons.tsx       ← signature section
│   │   │   ├── experience.tsx
│   │   │   ├── skills.tsx
│   │   │   └── contact.tsx
│   │   ├── projects/
│   │   │   └── project-card.tsx
│   │   ├── content/
│   │   │   └── mdx-content.tsx
│   │   └── ui/                      ← shadcn components
│   ├── data/
│   │   ├── stats.ts
│   │   ├── hackathons.ts
│   │   ├── experience.ts
│   │   └── skills.ts
│   ├── lib/
│   │   ├── fonts.ts
│   │   ├── motion.ts
│   │   ├── site.ts
│   │   ├── content.ts               ← MDX helpers
│   │   ├── structured-data.ts       ← JSON-LD
│   │   └── utils.ts                 ← cn()
│   ├── hooks/
│   │   └── use-clipboard.ts
│   └── types/
│       └── content.ts
├── next.config.ts                   ← security headers, config
├── components.json                  ← shadcn config
├── .env.example
└── PORTFOLIO_PLAN.md                ← this file
```

---

## Model & Skill Reference per Phase

| Phase | Recommended Model | Cursor Skills to Invoke |
|---|---|---|
| 1 — Design Tokens | `composer-2.5` | `shadcn`, `nextjs` |
| 2 — Layout Shell | `composer-2.5` | `shadcn` (Sheet), `react-best-practices` |
| 3 — Hero & About | `composer-2.5` | `react-best-practices`, `nextjs` |
| 4 — Projects | `composer-2.5` | `nextjs` (static gen), `shadcn` |
| 5 — Hackathons | `composer-2.5` | `react-best-practices` |
| 6 — Experience & Skills | `composer-2.5` | `shadcn`, `react-best-practices` |
| 7 — Contact & Footer | `composer-2.5-fast` | — |
| 8 — SEO & Structured Data | `composer-2.5` | `nextjs` |
| 9 — Lighthouse 100 | `composer-2.5` | `nextjs`, `react-best-practices`, `verification-before-completion` |
| 10 — Content & Launch | `composer-2.5-fast` | `verification-before-completion` |

> **Tip:** At the start of each phase session, paste the relevant phase section of this document as context. This keeps each session focused, avoids scope creep, and ensures the model knows exactly what the end state should be.

---

## Lighthouse 100 — Quick Reference Checklist

Copy this into each implementation session for reference.

**Performance**
- [ ] All pages static (`generateStaticParams` on dynamic routes)
- [ ] Only Client Components where interaction is required
- [ ] All images use `next/image` with explicit `width` + `height`
- [ ] Hero heading has no animation delay > 200ms (LCP)
- [ ] Fonts loaded via `next/font` only — no `<link rel="stylesheet">` to Google Fonts
- [ ] No unused JavaScript — verify with Vercel build output

**Accessibility**
- [ ] Skip-to-content link in layout
- [ ] Single `<h1>` per page
- [ ] All images have `alt` text
- [ ] All icon-only buttons have `aria-label`
- [ ] Color contrast ≥ 4.5:1 on all text (use browser DevTools color picker)
- [ ] `useReducedMotion()` respected in all animated components
- [ ] Focus rings visible on keyboard navigation

**Best Practices**
- [ ] Zero console errors/warnings in production
- [ ] Security headers set in `next.config.ts`
- [ ] No deprecated Next.js APIs used
- [ ] TypeScript strict mode passes

**SEO**
- [ ] `<title>` and `<meta name="description">` on every page
- [ ] OG image generated for every page
- [ ] `/sitemap.xml` valid and submitted to Search Console
- [ ] `/robots.txt` allows all crawlers
- [ ] Canonical URL set via `metadataBase`
- [ ] JSON-LD Person schema on homepage
