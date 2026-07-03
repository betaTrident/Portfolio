# Portfolio Improvement Plan — v3
### From "built" to "impressive": sidebar shell, craft-first copy, and the bryllim.com teardown applied to Kent's live site

> **Context:** `PORTFOLIO_PLAN.md` (v1) has already been executed — Hero, About, Projects (+ `/projects/[slug]` deep pages), Hackathons, Experience, Skills, Contact, SEO, and Lighthouse hardening all exist in the codebase today. This plan does **not** rebuild the site. It's a targeted upgrade pass that applies the findings from `portfolio_analysis.md` and a fresh Jul 3, 2026 re-scrape of bryllim.com (raw assets in `.firecrawl/bryllim-layout.json`, `bryllim-layout.html`, `bryllim-screenshot.png`) — layout shell, copy, structure, credibility signals, and one signature interaction.
>
> **What changed from v2:** (1) A new **Phase 2 — Sidebar Shell**, based on a structural teardown of bryllim's actual sidebar markup, redesigned to be Kent's own rather than a clone. (2) Hero sub-line and About copy re-polished around **craft** — informed by what's actually in Kent's GitHub (`github.com/betaTrident`: agentic ADK work, document-intelligence systems, POS products shipped for real businesses). (3) All implementation phases standardized on **`gpt-5.5-medium`** per Kent's request (requested `gpt-5.4 medium` is not an available Cursor model slug; `gpt-5.5-medium` is the closest match). (4) Every phase now carries explicit Lighthouse-100 guardrails, since the sidebar is a layout-shell change — the highest CLS/LCP risk in the whole plan.
>
> **Design constraint (non-negotiable):** Keep the current minimalist, editorial, mono-label aesthetic. Nothing here adds visual clutter or gimmicks. Where bryllim.com does something loud (live viewer counts, AI chat bar, typing game), this plan does the *quiet, credible* equivalent.
>
> **Structure:** 7 phases, each independently shippable and reviewable. Do not start a phase until the previous one's checklist is fully checked off.

---

## 0. What's Already Built (Baseline Audit)

Confirmed in the current codebase:

```
✅ src/app/page.tsx                     → Hero, About, Projects, Hackathons, Experience, Skills, Contact
✅ src/app/projects/page.tsx            → full projects list + filter
✅ src/app/projects/[slug]/page.tsx     → MDX case study pages (11 projects written)
✅ src/app/sitemap.ts, robots.ts, opengraph-image.tsx
✅ src/lib/structured-data.ts           → Person JSON-LD
✅ src/data/{stats,hackathons,experience,skills,projects-featured}.ts
✅ src/components/layout/navbar.tsx     → sticky top navbar, mobile sheet, theme toggle
✅ Motion: fadeUp/fadeIn/stagger variants, useReducedMotion everywhere
✅ layout.tsx skip-link, DeferredVitals, ThemeProvider
```

**Gap analysis against bryllim.com (Jul 3 re-scrape + `portfolio_analysis.md`):**

| Bryllim technique | Status on Kent's site today |
|---|---|
| **Fixed left sidebar shell** (persistent identity + grouped nav + utility footer, content offset right) | ❌ Kent uses a sticky top navbar. The sidebar is bryllim's single most recognizable layout decision — it makes the site read as a "tool/dashboard," not a template. Phase 2 adds Kent's own differentiated version. |
| Progressive disclosure (homepage digest → deep pages) | ✅ Done for **Projects** only. ❌ Missing for Experience, Skills/Stack, Hackathons. |
| One-line framing sentence per section | ❌ None of the content sections have an intro sentence. |
| Metrics in every claim | ⚠️ Partial — hackathons have hard numbers; Experience bullets are mostly task descriptions. |
| Verify links for credentials | ❌ Not present. |
| Category tags framed as "systems" not "projects" | ✅ Already implemented (`project.category` badge). |
| Recommendations section | ❌ Doesn't exist. |
| Hero/About copy specificity + voice | ❌ Hero sub-line is generic corporate phrasing ("scalable solutions that drive real business impact"); About has a missing-space typo and repeats "practical value" filler. Neither says anything about *how* Kent builds — the craft angle is absent. |
| One unique, memorable interactive element | ❌ Nothing yet. |

**GitHub audit (`api.github.com/users/betaTrident`, 30 public repos)** — real proof points available for copy and content phases:

- **Agentic AI:** `ai-agent-challenge` (the #64/1,920 Reply entry), `build-with-ai-adk`, `adk-skills-lab` (Google ADK), `Mock-AI` (Gemini-powered mock interviews)
- **Document intelligence:** `aixtraxt`, `E-Xtract`, `Open-PLAI`
- **Shipped for real businesses:** `Rayn-Motoparts-POS`, `Coffito-Coffee-Shop-POS-Web` + `Coffito-POS-Desktop-Application` (same product, two form factors), `ByteZone`
- **Breadth signals:** `Solar-Simp-IoT` (C++ hardware), `MoodTunes` (CV + audio ML), `icu-patient-monitor`
- Languages: predominantly TypeScript and Python — matches the "full-stack + AI" positioning exactly.

---

## Phase Overview

| Phase | Focus | Model | Key Skills |
|---|---|---|---|
| **1** | Copy & messaging rewrite (craft-first hero + about) | `gpt-5.5-medium` | — (pure writing/judgment) |
| **2** | **Sidebar shell layout** (new) | `gpt-5.5-medium` | `nextjs`, `shadcn`, `react-best-practices` |
| **3** | Progressive disclosure (deep pages + condensed homepage) | `gpt-5.5-medium` | `nextjs`, `shadcn`, `react-best-practices` |
| **4** | Credibility & proof layer | `gpt-5.5-medium` | `shadcn`, `react-best-practices` |
| **5** | Signature interaction: ⌘K command palette | `gpt-5.5-medium` | `shadcn` (Command), `react-best-practices` |
| **6** | Content completion & asset polish | `gpt-5.5-medium` | `verification-before-completion` |
| **7** | QA, accessibility & Lighthouse-100 hardening | `gpt-5.5-medium` | `nextjs`, `react-best-practices`, `verification-before-completion` |

All phases use `gpt-5.5-medium` per Kent's direction (single model for the whole implementation keeps context/style consistent across phases). If any phase stalls on a genuinely hard design judgment, `claude-4.6-opus-high-thinking` is the escalation option — but the specs below are written tightly enough that this shouldn't be needed.

**Phase ordering rationale:** Copy first (Phase 1) because it's zero-risk and everything downstream (sidebar labels, framing lines, OG images) references the final copy. Sidebar second (Phase 2) because Phases 3–5 all touch navigation — building them against the final shell avoids doing nav work twice.

---

## Phase 1 — Copy & Messaging Rewrite (Craft-First)

> **Goal:** Every sentence on the homepage either names a specific thing (a number, a product, a repo, a company) or earns its place. The hero and about now lead with **craft** — how Kent builds, not just what — backed by things that are verifiably true on his GitHub.
>
> **Model:** `gpt-5.5-medium`. **Skills:** none required. **Risk:** Very low — text-only.

### 1.1 — Hero sub-headline (`src/components/sections/hero.tsx`)

Replace:

```
I build scalable solutions that drive real business impact.
```

With a two-line craft-forward statement (mirrors bryllim's two-paragraph hero formula — *what/how you build* → *current focus + proof* — but the content is Kent's own):

```
Line 1:  I build full-stack products and agentic AI systems — and I care
         how they're built: typed end to end, measured before shipped,
         fast enough that nobody thinks about it.

Line 2:  Right now I'm deep in multi-agent pipelines and document
         intelligence, and I like being tested on it.
```

Implementation notes:
- Render as two `<p>` elements (or one `<p>` with a `<br className="hidden sm:block" />` split) inside the existing `motion.p` slot — keep the existing `max-w-2xl text-lg text-muted-foreground` classes and the 200ms motion delay. Line 2 can use `text-base text-muted-foreground/80` for hierarchy if two identical-weight paragraphs feel heavy.
- "Typed end to end / measured before shipped / fast" are all *checkable* claims: the repo is strict TypeScript, the site targets Lighthouse 100, and the projects page shows perf notes. That's the difference between craft-talk and craft-proof.
- Do **not** put the hackathon rank in the hero sub-line — the stats row directly below already carries `#64 / 1,920`. Repeating it in prose one viewport-line above would read as padding.

### 1.2 — About section (`src/components/sections/about.tsx`)

Replace the current paragraph (which has the `software.My work` missing-space bug and two sentences of "practical value" filler) with a craft + proof rewrite. Keep it inside the existing `max-w-2xl` layout:

```
I'm a full-stack developer and AI engineer. Most of my work lives in two
worlds: production software with real users — Peaksy and CourtHub at
Symph, point-of-sale systems running in actual shops — and agentic AI,
where I've ranked top-64 of 1,920+ teams in the Reply AI Agent Challenge
and reached the finals of two other global hackathons.

What ties it together is how I build: small, legible systems; strict
types; interfaces that respond instantly. I'd rather ship one thing
that holds up under inspection than five that don't.

Currently open to opportunities →
```

Notes:
- Two short paragraphs, not one dense block — matches bryllim's rhythm and the site's editorial feel.
- "Point-of-sale systems running in actual shops" is backed by `Rayn-Motoparts-POS` and the two Coffito repos — real, differentiated proof most student portfolios can't claim. Confirm with Kent these are genuinely deployed for real businesses before shipping the line; if not, soften to "point-of-sale systems built for local businesses."
- The second paragraph is the About section's job now: the hero says *what*, the stats say *how well*, About says *how* — no overlap, no repetition.
- Keep the existing "Currently open to opportunities →" mailto link exactly as-is.

### 1.3 — Mono micro-label above the hero stats row

In `hero.tsx`, immediately above the `heroStats.map(...)` grid, add:

```tsx
<p className="section-label mb-0">Proven under pressure</p>
```

Reuses the existing `.section-label` utility for consistency; tells first-time visitors what the numbers mean before they read them.

### 1.4 — One-line framing sentence per section

Add a single intro sentence under each section label (`text-sm text-muted-foreground`, between the `section-label` and the content):

| Section | Framing line |
|---|---|
| Projects | "AI systems, SaaS products, and client builds — ranked and shipped, not just prototyped." |
| Hackathons | "Competing against thousands of teams to stress-test what I build." |
| Experience | "Shipping production software at Symph while competing in global AI hackathons on the side." |
| Skills | "The tools I reach for across AI engineering, full-stack development, and infrastructure." |
| Contact | *(keep as-is — "Let's build something." already serves this purpose)* |

### 1.5 — `src/lib/site.ts` description

Update `siteConfig.description` to match the new positioning (this feeds `<meta description>`, OG, and Twitter cards):

```
Full-stack developer and AI engineer building agentic systems and
production software — typed end to end, measured before shipped.
Top-64 of 1,920+ teams, Reply AI Agent Challenge.
```

(Trim to ≤160 chars for the meta description if needed.)

### 1.6 — Checklist

- [ ] Hero sub-line replaced with the two-line craft statement; no generic phrasing remains
- [ ] About replaced: names Symph/Peaksy/CourtHub, POS work, hackathon rank; POS claim verified with Kent
- [ ] `software.My work` missing-space typo confirmed gone
- [ ] Mono label added above hero stats
- [ ] Framing sentences added to Projects, Hackathons, Experience, Skills
- [ ] `siteConfig.description` updated and ≤160 chars
- [ ] Proofread pass — zero corporate jargon ("drive value," "leverage," "scalable solutions," "synergize")
- [ ] `npm run build` passes

---

## Phase 2 — Sidebar Shell Layout (New)

> **Goal:** Replace the sticky top navbar with a fixed left sidebar shell — bryllim's most recognizable structural move — but built as **Kent's own version**, not a clone. The differentiators are spelled out in 2.2.
>
> **Model:** `gpt-5.5-medium`. **Skills:** `nextjs` (layout composition, server/client boundary), `shadcn` (Sheet reuse for mobile), `react-best-practices`.
> **Risk:** **Highest in the plan** — this is a layout-shell change touching every page. CLS, LCP, and keyboard-order regressions are all possible if done carelessly. The Lighthouse guardrails in 2.6 are mandatory, not optional.

### 2.1 — What bryllim actually does (from the Jul 3 scrape of the live HTML)

For reference — this is the pattern being adapted, so the differences in 2.2 are deliberate rather than accidental:

```
<nav class="fixed inset-y-0 left-0 z-50 hidden w-56 flex-col
            border-r border-gray-200 bg-white px-7 py-8 lg:flex">
  ├─ Name (pixel font, links home)
  ├─ Nav groups in font-mono text-[13px], separated by h-px dividers:
  │    group 1: Shop / Blog / Gear / Resources        (with inline SVG icons)
  │    group 2: Collabs / Consulting                  (with icons)
  │    group 3: Projects / Experience / Stack /
  │             Certifications / Recommendations /
  │             Affiliations                          (no icons)
  └─ Pinned bottom: "Ask anything  Alt+K" button + email link
Content: offset via lg:pl-56, inner column max-w-3xl
Mobile (<lg): sticky top bar (name + hamburger) → full-screen overlay menu
```

### 2.2 — Kent's version: same skeleton, four deliberate differences

| Bryllim | Kent (why it's different) |
|---|---|
| Static link list — no indication of where you are on the page | **Scroll-spy rail**: on the homepage, sidebar items are the numbered section labels (`01 / about`, `02 / projects`, …) with a live active state (accent-ai text + a small horizontal tick that slides between items via IntersectionObserver). The sidebar becomes an *instrument that tracks reading position* — bryllim's doesn't do this, and it's perfectly on-brand for the "signal-forward, technical" identity. |
| Icons on half the links | **No icons.** Kent's numbered mono labels (`01 /`, `02 /`) *are* the visual system — adding icons would dilute the editorial identity and read as bryllim-derivative. |
| Light-only, gray palette | Full **dark/light theming** via existing tokens (`bg-background`, `border-border`), with the ThemeToggle relocated into the sidebar footer. |
| "Ask anything" AI bar hint at bottom | **`⌘K` command palette hint** at bottom (wired in Phase 5) — navigation tool, not chatbot (see Phase 5 scope). |
| Sidebar footer: email only | Sidebar footer: **availability status line** (`● open to opportunities` with a small pulsing accent dot honoring `prefers-reduced-motion`), then ⌘K hint, ThemeToggle, and mono social links (github / linkedin / email — mirroring bryllim's lowercase mono style but with Kent's links). |

### 2.3 — Implementation

```
src/components/layout/sidebar.tsx        ← new: the fixed rail (server component wrapper)
src/components/layout/sidebar-nav.tsx    ← new: client component — scroll-spy + active state only
src/components/layout/mobile-topbar.tsx  ← new: <lg sticky top bar (adapts existing navbar)
src/components/layout/navbar.tsx         ← retired after migration (delete once sidebar ships)
src/app/layout.tsx                       ← shell change (see below)
```

**Layout shell (`layout.tsx`):**

```tsx
<div className="flex min-h-screen flex-col">
  <Sidebar />        {/* hidden lg:flex — fixed inset-y-0 left-0 w-56 */}
  <MobileTopbar />   {/* lg:hidden — reuses existing Sheet menu */}
  <main id="main" className="flex-1 lg:pl-56">
    {children}
  </main>
  <Footer className="lg:pl-56" />
</div>
```

**Sidebar contents (top → bottom):**

1. **Identity block:** `Kent Colina` in `font-display` (links `/`), with `Full-Stack · AI Engineer` beneath in `font-mono text-xs text-muted-foreground`.
2. **Section rail (homepage):** the numbered labels as anchor links. On non-home routes this group renders the same labels as links back to `/#about` etc. — one component, `usePathname()` decides link targets (same pattern the current navbar already uses).
3. **`h-px bg-border` divider** (bryllim's grouping device — keep this, it's generic).
4. **Pages group:** `projects`, `experience`, `stack`, `hackathons` → the deep pages from Phase 3. Lowercase mono, `text-[13px]`, muted → foreground on hover, accent-ai when the route is active.
5. **Pinned footer:** availability line, ⌘K hint (placeholder `<kbd>` until Phase 5), ThemeToggle, social links.

**Behavioral requirements:**

- Sidebar is a **server component**; only `sidebar-nav.tsx` (scroll-spy) is a client component. Keeps the shell in the static HTML payload — no hydration flash, no CLS.
- Scroll-spy via a single `IntersectionObserver` watching the seven `<section>` elements; no scroll-event listeners (main-thread cost, TBT risk).
- `<nav aria-label="Main navigation">`, active item gets `aria-current="true"` / `aria-current="page"`.
- Content column: keep the existing `max-w-5xl` inner container; verify hero/section paddings still breathe with the effective viewport narrowed by 224px at `lg`. If `lg` (1024px) feels cramped with only ~800px of content, move the sidebar breakpoint to `xl` — decide by looking, not by guessing.
- Mobile topbar reuses the existing Sheet component and nav-item logic — don't rebuild what works; restyle to match (name left, theme toggle + hamburger right).
- The skip-link (`#main`) must remain the first focusable element; sidebar nav comes after it in DOM/tab order.

### 2.4 — Footer reconciliation

The existing bottom `Footer` overlaps with the new sidebar footer (socials, email). Slim the page footer to a single mono line (`© 2026 Kent Colina — built with Next.js`, plus a source-repo link if desired) and let the sidebar own the persistent contact/social surface. Don't show the same four links twice on every viewport.

### 2.5 — Checklist

- [ ] Sidebar renders fixed-left at `lg`+ on every route; content offset correct; no horizontal scroll at any width
- [ ] Scroll-spy active state tracks all homepage sections correctly (including near-bottom sections that never reach viewport top — tune observer thresholds/rootMargin)
- [ ] Mobile topbar + sheet menu works; old navbar deleted; no dead imports
- [ ] Theme toggle works from sidebar (desktop) and topbar (mobile)
- [ ] Keyboard order: skip-link → sidebar nav → main content; `aria-current` set; focus rings visible on all sidebar links
- [ ] Sidebar identical between server HTML and hydrated client (no flash/CLS — verify with DevTools "Layout Shift Regions")
- [ ] Side-by-side screenshot comparison vs `.firecrawl/bryllim-screenshot.png` — reads as "same genre, clearly different site" (numbered rail, theming, no icons, availability line)
- [ ] `npm run build` passes; Lighthouse spot-check: CLS = 0, LCP unchanged (hero heading is still LCP element and must not be delayed by the shell)

---

## Phase 3 — Progressive Disclosure Structure

> **Goal:** Apply "homepage previews deep content, backed by dedicated full pages" to the three sections that don't have it yet: **Experience, Skills/Stack, Hackathons**. Projects already does this — use it as the reference implementation. The Phase 2 sidebar's "pages group" links directly to these routes.
>
> **Model:** `gpt-5.5-medium`. **Skills:** `nextjs`, `shadcn`, `react-best-practices`. **Risk:** Medium — routing + careful component extraction.

### 3.1 — New routes

```
src/app/experience/page.tsx     ← full experience timeline
src/app/stack/page.tsx          ← full skills grouped by category ("stack" naming matches sidebar; keep "Skills" label on homepage section)
src/app/hackathons/page.tsx     ← full hackathon history incl. "participant" entries
```

Each follows the shell pattern of `src/app/projects/page.tsx`: page heading, the Phase 1 framing sentence, full content. All fully static, each with its own `metadata` (`title`, `description`).

### 3.2 — Extract shared components (no duplication)

```
src/components/experience/experience-timeline.tsx   ← rendering logic, accepts data + optional `limit`
src/components/skills/skills-grid.tsx               ← same pattern
src/components/hackathons/hackathons-list.tsx       ← same pattern
```

Homepage sections then become thin wrappers:
- `sections/experience.tsx` → `<ExperienceTimeline data={experience} limit={2} />` + "full history →" link
- `sections/skills.tsx` → `<SkillsGrid data={skills.slice(0, 4)} />` + "view all →" link
- `sections/hackathons.tsx` → keep the 3 highlighted cards in full (they're the differentiator), move the "participant" list to `/hackathons` behind a "full track record →" link

### 3.3 — "View all" link pattern

Reuse the exact header pattern from `projects.tsx` (label left, arrow-link right). Vary the link text per section — `full history` / `full track record` / `view all` — so the site doesn't read as templated.

### 3.4 — Sidebar + sitemap updates

- Confirm the Phase 2 sidebar "pages group" routes now all resolve (`/projects`, `/experience`, `/stack`, `/hackathons`) with correct active-route highlighting.
- Add the three new routes to `src/app/sitemap.ts`.

### 3.5 — Checklist

- [ ] `/experience`, `/stack`, `/hackathons` render full content with correct metadata
- [ ] Homepage sections visibly condensed; no logic duplicated between homepage and full-page versions
- [ ] Sidebar links resolve and highlight correctly from every page
- [ ] Sitemap includes new routes
- [ ] `npm run build` passes; new routes confirmed static (check build output — `○` not `ƒ`)

---

## Phase 4 — Credibility & Proof Layer

> **Goal:** Convert claims into checkable facts ("numbers everywhere" + "third-party validation over self-description" — the two highest-leverage findings in the teardown).
>
> **Model:** `gpt-5.5-medium`. **Skills:** `shadcn`, `react-best-practices`. **Risk:** Low-medium — mostly additive, plus a content-gathering step outside the codebase.

### 4.1 — "Verify" links on hackathon results

The `Hackathon` type already has an unused optional `href`. Wire it into the UI:

```tsx
{entry.href ? (
  <a href={entry.href} target="_blank" rel="noopener noreferrer">
    Verify ↗
  </a>
) : null}
```

Populate `href` in `src/data/hackathons.ts` with public leaderboards, result-announcement LinkedIn posts, or certificates. **If no public proof exists for an entry, leave `href` undefined** — an absent Verify link is honest; a broken one is worse than none.

### 4.2 — Experience bullets end in a metric

Audit every bullet in `src/data/experience.ts`. Each should end in a number, scope, or named outcome **where one honestly exists** (team size, user counts, request volume, % improvements). Do not invent numbers — this phase is about surfacing real metrics that aren't stated yet, not manufacturing precision.

### 4.3 — Recommendations section (optional, high-leverage)

Content-gathering first, code second:

1. Ask 1–2 people for a short quote (Symph teammate/manager, CTU professor, hackathon teammate).
2. Once real text exists: `src/data/recommendations.ts` (`{ name, title, quote }[]`) + `src/components/sections/recommendations.tsx` (simple card list matching existing Card usage). Placement: between Experience and Skills, or before Contact — test both.

**If no quotes arrive in time, skip entirely** — never ship placeholder testimonials. Backlog it.

### 4.4 — GitHub proof-of-work strip (optional, small)

Since the GitHub audit (Section 0) surfaced real breadth, consider a one-line mono strip in About or the sidebar footer: `30 public repos · TypeScript & Python · github.com/betaTrident ↗`. Static text + link — no live API calls, no embeds, zero performance cost. Skip if it crowds the layout.

### 4.5 — Category tag audit

Audit `content/projects/*.mdx` frontmatter for consistent category values (`AI System`, `SaaS Product`, `Client Build`, `Hackathon Build`) — no ad-hoc labels.

### 4.6 — Checklist

- [ ] Verify links render only where real public proof exists
- [ ] Experience bullets audited for missing-but-true metrics
- [ ] Recommendations shipped with real quotes, or explicitly deferred
- [ ] Category tags consistent across all 11 MDX files

---

## Phase 5 — Signature Interaction: ⌘K Command Palette

> **Goal:** One genuinely memorable interactive moment that fits an AI-engineer identity without copying bryllim's AI chat bar. The sidebar's pinned `⌘K` hint (Phase 2) becomes live here.
>
> **Model:** `gpt-5.5-medium`. **Skills:** `shadcn` (`Command` — already installed at `src/components/ui/command.tsx`, zero new dependencies), `react-best-practices`.
> **Risk:** Medium — creative scope; keep it tight.

### 5.1 — Scope for v1

```
src/components/command-menu.tsx
```

- Opens on `⌘K` / `Ctrl+K` (single global listener, client component mounted once in `layout.tsx`)
- Lists: homepage sections (jump-scroll on home, route + hash elsewhere), top-level pages (`/projects`, `/experience`, `/stack`, `/hackathons`), and all 11 individual projects (deep-link to `/projects/[slug]`)
- Triggered from the sidebar footer `⌘K` hint (desktop) and a small button in the mobile topbar (touch devices have no ⌘K)
- **Lazy-load the dialog contents** (`next/dynamic`, load on first open or on `requestIdleCallback`) so it adds nothing to initial JS execution — this is what keeps Lighthouse TBT at zero cost
- Design tokens only: mono font for the `<kbd>` hint, existing border/background treatments

**Explicitly out of scope:** AI-powered Q&A, chat interface, "ask anything" free-text field. Pure fast navigation. (Why this beats copying bryllim's AI bar: it's *useful* rather than a novelty, needs no backend/LLM cost, and reinforces the Linear/Raycast/Vercel power-user aesthetic that matches the site's identity.)

### 5.2 — Rejected alternatives (for the record)

| Option | Verdict |
|---|---|
| Live GitHub contribution graph embed | Decorative, third-party request cost — the static strip in 4.4 covers this cheaper. |
| Custom cursor / trail effect | Contradicts "signal-forward, minimal." Rejected. |
| Terminal-style typing intro on hero | Delays LCP — direct conflict with Lighthouse 100. Rejected. |
| AI chat bar (bryllim's feature) | Needs a real backend to not feel fake; reads as a direct copy. Deferred indefinitely. |

### 5.3 — Checklist

- [ ] `⌘K`/`Ctrl+K` opens the palette from any page; sidebar hint and mobile button both trigger it
- [ ] All sections/pages/projects reachable; navigation + scroll behavior correct from home and non-home routes
- [ ] Fully keyboard-accessible (arrows, enter, escape); focus returns to trigger on close
- [ ] Respects `prefers-reduced-motion` for open/close transitions
- [ ] Bundle check: palette code is not in the initial chunk (verify in build output / network tab)
- [ ] Lighthouse re-check after this phase — no TBT/LCP regression

---

## Phase 6 — Content Completion & Asset Polish

> **Goal:** Everything data-driven is filled in, consistent, and free of scaffolding cruft.
>
> **Model:** `gpt-5.5-medium`. **Skills:** `verification-before-completion`. **Risk:** Low.

### 6.1 — Remove scaffolding cruft

Grep for references first, then delete unused starter assets:

```
public/file.svg  public/globe.svg  public/next.svg  public/vercel.svg  public/window.svg
```

### 6.2 — Asset audit

- [ ] `public/colinaPortrait.jpg` — either use intentionally (About/Contact accent) or delete; no dead files
- [ ] `public/resume.pdf` is the current CV — and its content matches the new site copy (same positioning, same metrics)
- [ ] Real favicon (Kent's initials or a simple mark), not the framework default
- [ ] `opengraph-image.tsx` output reflects the Phase 1 copy (check it reads `siteConfig` values, not stale literals)

### 6.3 — Data completeness pass

- [ ] `src/data/hackathons.ts` — accurate `year`, `result`, and Phase 4 `href`s
- [ ] `src/data/experience.ts` — bullets per Phase 4 metric audit
- [ ] `src/data/skills.ts` — categories match technologies actually used in the 11 case studies (internal consistency = credibility)
- [ ] All 11 `content/projects/*.mdx` reviewed for tone consistency with the new About voice + at least one real metric each

### 6.4 — Checklist

- [ ] No unused framework assets in `public/`
- [ ] Favicon, OG image, and meta description all reflect the v3 positioning
- [ ] Every data file audited and internally consistent

---

## Phase 7 — QA, Accessibility & Lighthouse-100 Hardening

> **Goal:** Confirm Phases 1–6 haven't regressed the Lighthouse-100 baseline, with special attention to the two structural changes (sidebar shell, command palette).
>
> **Model:** `gpt-5.5-medium`. **Skills:** `nextjs`, `react-best-practices`, `verification-before-completion`. **Risk:** Low if prior checklists were honored.

### 7.1 — Lighthouse (run against production build: `npm run build && npm run start`, incognito, desktop + mobile presets)

Target: **100 / 100 / 100 / 100** on every route (`/`, `/projects`, `/projects/[slug]` sample, `/experience`, `/stack`, `/hackathons`).

- [ ] **Performance:** CLS = 0 on all routes (sidebar is the prime suspect — server-rendered shell, no hydration shift); LCP element is still the hero heading and unaffected by the shell; command palette absent from initial bundle; no scroll listeners (scroll-spy is IntersectionObserver-only)
- [ ] **Accessibility:** skip-link first in tab order; `aria-current` on active sidebar items; all new interactive elements (Verify links, palette, sidebar links) keyboard-operable with visible focus; color contrast holds for framing sentences and muted sidebar text in **both** themes (muted-on-background at `text-[13px]` is exactly where contrast failures hide)
- [ ] **Best Practices:** all external links `rel="noopener noreferrer"`; no console errors/warnings on any route
- [ ] **SEO:** every route has unique title + description; sitemap complete; JSON-LD still valid

### 7.2 — Cross-device pass

- [ ] Every route at 360px, 768px, 1024px (sidebar breakpoint — the risky one), 1440px
- [ ] Sidebar↔topbar breakpoint transition clean, no layout jump or double-nav flash
- [ ] Palette usable on touch (button trigger); no horizontal scroll anywhere

### 7.3 — Final holistic review

- [ ] Read the homepage top-to-bottom as a first-time visitor: one coherent story (name → craft → proof → work → competitive record → career → skills → contact)?
- [ ] Side-by-side with `.firecrawl/bryllim-screenshot.png`: same genre, unmistakably different site (numbered scroll-spy rail, dark theme, availability line, no icons, ⌘K-not-AI-bar)
- [ ] `npm run build` clean — zero TS errors, zero lint warnings
- [ ] Optional: `code-reviewer` subagent pass before merging

### 7.4 — Ship

```bash
npm run build
git add -A
git commit -m "feat: v3 — sidebar shell, craft-first copy, progressive disclosure, credibility layer, command palette"
git push origin main
```

---

## Summary: What Makes This "Kent's Own" and Not a Bryllim Clone

| Bryllim has | Kent's site does instead |
|---|---|
| Fixed left sidebar, static links + icons, light-only | Fixed left sidebar with a **numbered scroll-spy rail** (live reading-position indicator), no icons, full dark/light theming, availability status line |
| "Ask anything" AI chat bar (Alt+K) | ⌘K command **palette** — pure fast navigation, no backend, no fake AI |
| Live viewer count / 200K+ community stats | Hackathon rank (`#64 / 1,920`) as the scroll-stopping number — real, verifiable, Kent's own |
| 7-role LinkedIn timeline | Tight 2-role + hackathon-forward story — honest to actual career stage |
| App Store badges + press mentions | Verify links on hackathon results + POS systems running in real shops — proof appropriate to Kent's stage |
| Recommendation from a government secretary | Real quotes from actual collaborators, or none at all |
| Hero: "I build modern web & mobile apps…" | Hero: craft-first statement (typed end to end, measured before shipped) backed by a repo anyone can read |

The throughline: borrow the **structural techniques** (sidebar shell, progressive disclosure, metrics-first writing, verify links, framing lines) because those are universal good-portfolio practices — but every piece of *content*, the *copy voice*, and the *signature interaction* is derived from what's actually true and distinctive about Kent.
