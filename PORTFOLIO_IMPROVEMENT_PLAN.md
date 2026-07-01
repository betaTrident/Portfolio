# Portfolio Improvement Plan — v2
### From "built" to "impressive": applying the bryllim.com teardown to Kent's live site

> **Context:** `PORTFOLIO_PLAN.md` (v1) has already been executed — Hero, About, Projects (+ `/projects/[slug]` deep pages), Hackathons, Experience, Skills, Contact, SEO, and Lighthouse hardening all exist in the codebase today. This plan does **not** rebuild the site. It's a targeted upgrade pass that applies the findings from `portfolio_analysis.md` (the bryllim.com teardown) to what's already live — copy, structure, credibility signals, and one genuinely unique signature touch.
>
> **Design constraint (non-negotiable):** Keep the current minimalist, editorial, mono-label aesthetic. Nothing in this plan adds visual clutter, gimmicks, or anything that contradicts the "cold-precise, signal-forward, minimal" identity defined in `PORTFOLIO_PLAN.md`. Where bryllim.com does something loud (live viewer counts, AI chat bar, typing game), this plan deliberately does the *quiet, credible* equivalent instead — because that's what's authentic to Kent's stage and story.
>
> **Structure:** 6 phases, each independently shippable and reviewable. Do not start a phase until the previous one's checklist is fully checked off. Each phase lists a **primary model recommendation** (with a fallback/alternative) and the **specific Cursor skills** to invoke — chosen per the actual nature of the work, not defaulted to one model for everything.

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
✅ Navbar with mobile sheet, theme toggle, scroll-linked nav
✅ Motion: fadeUp/fadeIn/stagger variants, useReducedMotion everywhere
```

**Gap analysis against `portfolio_analysis.md`:**

| Bryllim technique | Status on Kent's site today |
|---|---|
| Progressive disclosure (homepage digest → deep pages) | ✅ Done for **Projects** only. ❌ Missing for Experience, Skills/Stack, Hackathons — these sections dump full content directly on the homepage with no condensed/full split. |
| One-line framing sentence per section | ❌ None of the 5 content sections (Projects, Hackathons, Experience, Skills, Contact) have an intro sentence — they jump straight from the section label into content. |
| Metrics in every claim | ⚠️ Partial — hackathons have hard numbers; Experience bullets are mostly still task descriptions, not outcome metrics. |
| Verify links for credentials | ❌ Not present — hackathon results and any certs are unverifiable claims right now. |
| Category tags framed as "systems" not "projects" | ✅ Already implemented (`project.category` badge: AI System, SaaS Product, etc.) |
| Recommendations section | ❌ Doesn't exist. |
| Hero/About copy specificity | ❌ Generic corporate phrasing, no named proof points (flagged in `portfolio_analysis.md` §6–7). |
| One unique, memorable interactive element | ❌ Nothing yet — the site is competent but has no single "wow, that's clever" moment the way bryllim's AI-bar/typing-game does. |

These seven gaps map directly onto the six phases below.

---

## Phase Overview

| Phase | Focus | Primary Model | Alt. Model | Key Skills |
|---|---|---|---|---|
| **1** | Copy & messaging rewrite | `claude-4.5-sonnet-thinking` | `composer-2.5` | — (pure writing/judgment task) |
| **2** | Progressive disclosure structure (deep pages + condensed homepage) | `composer-2.5` | `gpt-5.3-codex` | `nextjs`, `shadcn`, `react-best-practices` |
| **3** | Credibility & proof layer | `composer-2.5` | `claude-4.5-sonnet-thinking` | `shadcn`, `react-best-practices` |
| **4** | Signature interaction (unique differentiator) | `claude-4.5-sonnet-thinking` | `composer-2.5` | `shadcn` (Command), `react-best-practices` |
| **5** | Content completion & asset polish | `composer-2.5-fast` | `composer-2.5` | `verification-before-completion` |
| **6** | QA, accessibility & performance hardening | `composer-2.5` | `gpt-5.3-codex` | `nextjs`, `react-best-practices`, `verification-before-completion` |

**Why not composer-2.5 for every phase:** Phase 1 is 90% judgment/taste (word choice, tone, what to emphasize) with almost no code — a strong reasoning/writing model earns its keep there. Phase 4 involves a genuinely novel interaction design decision (not a templated CRUD task), so a stronger reasoning model reduces the chance of building something gimmicky. Phases 2, 3, 5, 6 are structural/mechanical — exactly where `composer-2.5` is fast and reliable. Use the "Alt. Model" if the primary is unavailable or if a phase turns out more complex than expected once you're in it.

---

## Phase 1 — Copy & Messaging Rewrite

> **Goal:** Every sentence on the homepage either names a specific thing (a number, a product, a company) or earns its place. No generic filler survives this phase.
>
> **Model:** `claude-4.5-sonnet-thinking` (primary) — copywriting quality benefits from a model optimized for nuanced language judgment over raw code throughput. `composer-2.5` as fallback if you want to stay in one model for the whole project.
> **Skills:** None required — this is a direct editing task, not a framework-specific one.
> **Risk:** Very low. Text-only changes, no new components, nothing that can break the build.

### 1.1 — Hero sub-headline (`src/components/sections/hero.tsx`)

Replace:
```
I build scalable solutions that drive real business impact.
```
With (per `portfolio_analysis.md` §6, Option A):
```
I build full-stack apps and agentic AI systems — the kind that turn
messy, manual workflows into software people actually rely on.
```
Optionally split into a second line if the layout allows a two-line hero paragraph (mirrors bryllim's two-sentence hero formula: what you build → current focus + proof point):
```
Right now I'm deep in multi-agent pipelines and document-intelligence
systems — and I like being tested on it.
```

### 1.2 — About section (`src/components/sections/about.tsx`)

Replace the current generic three-sentence paragraph with the rewrite from `portfolio_analysis.md` §7 (short alternative recommended, to preserve the `max-w-2xl` layout):

```
I'm a full-stack developer and AI engineer building agentic systems and
multi-agent pipelines that turn messy workflows into structured
software. I've ranked top-64 out of 1,920+ teams in the Reply AI Agent
Challenge and reached the finals of two other global AI hackathons —
and I ship production software with real users at Symph (Peaksy,
CourtHub).

Currently open to opportunities →
```

Also fixes the pre-existing `structured\nsoftware.My work` missing-space bug by replacing the whole paragraph.

### 1.3 — Add a mono micro-label above the hero stats row

In `hero.tsx`, above the `heroStats.map(...)` grid, add a small dimmed label so first-time visitors know what the numbers mean before reading them:

```tsx
<p className="section-label !mb-0">Proven under pressure</p>
```//placed just before the stats grid, reusing the existing `.section-label` utility class for consistency.

### 1.4 — One-line framing sentence per section

Add a single intro sentence under each section label, matching the bryllim pattern ("Six years building across...", "Products and platforms I've designed and shipped..."). Keep these in `text-sm text-muted-foreground`, positioned between the `section-label` and the section content:

| Section | Suggested framing line |
|---|---|
| Projects | "AI systems, SaaS products, and client builds — ranked and shipped, not just prototyped." |
| Hackathons | "Competing against thousands of teams to stress-test what I build." |
| Experience | "Shipping production software at Symph while competing in global AI hackathons on the side." |
| Skills | "The tools I reach for across AI engineering, full-stack development, and infrastructure." |
| Contact | *(keep as-is — the existing "Let's build something." headline already serves this purpose)* |

### 1.5 — Checklist

- [ ] Hero sub-headline replaced, no orphaned generic phrasing remains
- [ ] About paragraph replaced, names Symph/Peaksy/CourtHub/hackathon rank explicitly
- [ ] Missing-space typo confirmed fixed
- [ ] Mono label added above hero stats row
- [ ] One-line framing sentence added to Projects, Hackathons, Experience, Skills sections
- [ ] Full proofread pass — no leftover corporate jargon ("drive value," "leverage," "synergize," "scalable solutions")
- [ ] `npm run build` still passes (text-only change, should be a formality)

---

## Phase 2 — Progressive Disclosure Structure

> **Goal:** Apply the single biggest structural idea from `portfolio_analysis.md` §1 — *"one scrollable homepage that previews deep content, backed by dedicated full pages"* — to the three sections that don't have it yet: **Experience, Skills/Stack, and Hackathons**. Projects already does this correctly; use it as the reference implementation.
>
> **Model:** `composer-2.5` (primary) — this is repeatable structural work (new routes + condensing existing components) that composer excels at. `gpt-5.3-codex` as an alternative if you want extra rigor on the routing/type-safety details.
> **Skills:** `nextjs` (static routes, metadata per page), `shadcn` (reusing Card/Badge), `react-best-practices` (component extraction without duplication)
> **Risk:** Medium — touches routing and requires careful component extraction to avoid duplicating markup between homepage-condensed and full-page versions.

### 2.1 — New routes to create

```
src/app/experience/page.tsx     ← full experience timeline (currently the only place it lives is the homepage)
src/app/stack/page.tsx          ← full skills/stack grouped by category (renamed "stack" to match bryllim's clearer naming, but keep the "Skills" label on homepage nav if preferred)
src/app/hackathons/page.tsx     ← full hackathon history, including non-highlighted "participant" entries with fuller descriptions
```

Each new page follows the same shell pattern as `src/app/projects/page.tsx`: a page-level heading, the framing sentence from Phase 1, then the full content — no homepage-specific truncation.

### 2.2 — Extract shared components (avoid duplication)

Right now `Experience`, `Skills`, and `Hackathons` are single monolithic homepage-only components. Split each into:

```
src/components/experience/experience-timeline.tsx   ← the actual rendering logic (accepts a data array + optional `limit` prop)
src/components/skills/skills-grid.tsx                ← same pattern
src/components/hackathons/hackathons-list.tsx        ← same pattern
```

Then:
- `src/components/sections/experience.tsx` (homepage) → renders `<ExperienceTimeline data={experience} limit={2} />` + a "full history →" link to `/experience`
- `src/components/sections/skills.tsx` (homepage) → renders `<SkillsGrid data={skills.slice(0, 4)} />` + "view all →" link to `/stack` (bryllim shows a condensed tag row on homepage, full categories on `/stack`)
- `src/components/sections/hackathons.tsx` (homepage) → keeps the 3 highlighted cards in full (these are the differentiator, don't truncate them), but moves the "participant" list to a "full track record →" link to `/hackathons` instead of rendering inline

### 2.3 — "View all" link pattern (consistent across sections)

Reuse the exact pattern already established in `projects.tsx`:

```tsx
<div className="mb-10 flex items-end justify-between gap-4">
  <h2 className="section-label">04 / experience</h2>
  <Link href="/experience" className="group inline-flex shrink-0 items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-accent-ai">
    full history
    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
  </Link>
</div>
```

Label text per section (matches bryllim's varied phrasing rather than repeating "view all" everywhere): `full history` (Experience), `full track record` (Hackathons), `view all` (Skills/Stack) — small detail but avoids the site reading as templated.

### 2.4 — Navbar update

Update `navItems` in `navbar.tsx` so each entry's `page` property points to the new dedicated route (currently only `Projects` has a `page` fallback for non-home routes):

```ts
const navItems = [
  { label: "About", hash: "#about" },
  { label: "Projects", hash: "#projects", page: "/projects" },
  { label: "Hackathons", hash: "#hackathons", page: "/hackathons" },
  { label: "Experience", hash: "#experience", page: "/experience" },
  { label: "Skills", hash: "#skills", page: "/stack" },
] as const;
```

### 2.5 — Sitemap update (`src/app/sitemap.ts`)

Add the three new static routes alongside the existing project routes.

### 2.6 — Checklist

- [ ] `/experience`, `/stack`, `/hackathons` all render full content with correct metadata (`<title>`, `<meta description>`)
- [ ] Homepage sections are visibly condensed compared to before (Experience shows 2 most recent roles + link; Skills shows a subset + link; Hackathons keeps highlighted cards, moves participant list off-homepage)
- [ ] No component logic duplicated between homepage and full-page versions — both consume the same extracted component
- [ ] Navbar links resolve correctly from every page (not just home)
- [ ] Sitemap includes new routes
- [ ] `npm run build` passes, `generateStaticParams`/static rendering confirmed for new routes

---

## Phase 3 — Credibility & Proof Layer

> **Goal:** Convert claims into checkable facts, per the #1 and #2 highest-leverage findings in `portfolio_analysis.md` §3 ("numbers everywhere" and "third-party validation over self-description").
>
> **Model:** `composer-2.5` (primary) for the component/data work. `claude-4.5-sonnet-thinking` as an alternative if you want help drafting the actual recommendation-request messages or wordsmithing new bullet copy.
> **Skills:** `shadcn` (Card/Avatar for testimonials), `react-best-practices`
> **Risk:** Low-medium — mostly additive (new section + data), plus a content-gathering step that depends on things outside the codebase (asking people for quotes, finding verify links).

### 3.1 — Add "Verify" links to hackathon results

Extend the `Hackathon` type (already has an optional `href` field, currently unused) and wire it into the UI:

```tsx
{entry.href ? (
  <a href={entry.href} target="_blank" rel="noopener noreferrer" className="...">
    Verify ↗
  </a>
) : null}
```

Populate `href` in `src/data/hackathons.ts` with links to public leaderboards, LinkedIn posts announcing results, or certificates — whatever is publicly checkable for each entry. If a given hackathon has no public proof, leave `href` undefined rather than fabricating a link — an absent "Verify" link is honest; a broken one is worse than none.

### 3.2 — Rewrite Experience bullets to end in a metric

Audit every bullet in `src/data/experience.ts` against the bryllim pattern (`portfolio_analysis.md` §2, "Experience"). Every bullet should end in a number, scope, or named outcome where one honestly exists — e.g.:

- Before: *"Built and improved full-stack features across auth, profiles, search, bookings, payments, and chat."*
- After (only if true, adjust to Kent's actual scope): *"Built and shipped full-stack features across 6 core product areas (auth, profiles, search, bookings, payments, chat) in a monorepo used by [X] active users."*

Do not invent numbers — if a metric isn't known/true, keep the qualitative bullet as-is rather than fabricating precision. This phase is about *finding* real metrics that already exist but aren't stated yet (team size, request volume, latency, user counts, % improvements), not manufacturing false ones.

### 3.3 — New: Recommendations section (optional but high-leverage)

Per `portfolio_analysis.md` §4–5: even one real quote adds outsized trust. This is a **content-gathering task first, code task second**:

1. Ask 1–2 people for a short quote: a Symph teammate/manager, or a CTU professor/hackathon teammate.
2. Once text exists, build:

```
src/data/recommendations.ts        ← { name, title, quote }[]
src/components/sections/recommendations.tsx   ← simple card list, styled like existing Card usage
```

Placement: between Experience and Skills, or as its own homepage section before Contact — test both and pick whichever doesn't feel like it interrupts the "systems → skills → contact" flow.

**If no quotes are available in time:** skip this sub-phase entirely rather than shipping placeholder/fake testimonials. Move it to a post-launch backlog item.

### 3.4 — Category tag audit on project cards

Already implemented (`project.category`), but audit the actual values in `content/projects/*.mdx` frontmatter to confirm consistent, meaningful categories (`AI System`, `SaaS Product`, `Client Build`, `Hackathon Build`) rather than a mix of ad-hoc labels — this was the plan's intent but worth a quick pass to verify against what's actually in the 11 MDX files.

### 3.5 — Checklist

- [ ] `Verify` links render for hackathons that have real public proof; absent for those that don't (no fabricated links)
- [ ] At least a pass has been made over Experience bullets checking for missing-but-true metrics
- [ ] Recommendations section either shipped with 1+ real quotes, or explicitly deferred to backlog (not shipped with fake content)
- [ ] Project category tags audited for consistency across all 11 MDX files

---

## Phase 4 — Signature Interaction (The Unique Differentiator)

> **Goal:** Per `portfolio_analysis.md` §3.6 and §4 — bryllim's site has one genuinely memorable interactive moment (AI command bar + typing game). Kent's site needs its **own** equivalent: something that fits an AI/agentic-engineer identity, costs little in complexity/performance, and doesn't feel like a copy.
>
> **Model:** `claude-4.5-sonnet-thinking` (primary) — this is the one phase where the *design decision itself* (not just the code) matters most; a stronger reasoning model helps avoid building something gimmicky or off-brand. `composer-2.5` as fallback once the interaction spec below is locked in — at that point it's mostly mechanical implementation.
> **Skills:** `shadcn` (the `command.tsx` component is already installed in this codebase — confirmed in `src/components/ui/command.tsx`), `react-best-practices`
> **Risk:** Medium — this is the most "creative" phase; scope it tightly so it doesn't become a rabbit hole.

### 4.1 — Recommended signature element: **⌘K Command Palette Navigation**

This is the single best fit because:
- The `Command` shadcn component is **already installed** in this project (`src/components/ui/command.tsx`) — zero new dependencies.
- It's the single most "AI-engineer-coded" interaction pattern (mirrors tools like Linear, Raycast, Vercel dashboard) — reinforces the "signal-forward, technical" personality from `PORTFOLIO_PLAN.md` without being a gimmick.
- It's genuinely *useful*, not just decorative — visitors can jump to any section/project/page instantly. Bryllim's AI chat bar is a novelty; this is a novelty that's also more functional.
- It's cheap to build well (a `<CommandDialog>` wired to `next/navigation`, triggered by `⌘K` / `Ctrl+K` and a small visible hint button) and has near-zero performance cost (client component, lazy-mounted).

**Scope for v1 (keep tight):**
```
src/components/command-menu.tsx
```
- Opens on `⌘K` / `Ctrl+K` keyboard shortcut (global listener in a client component, mounted once in `layout.tsx`)
- Lists: all homepage sections (jump-scroll on home), all top-level pages (`/projects`, `/experience`, `/stack`, `/hackathons`), and optionally all individual projects (deep-link to `/projects/[slug]`)
- Small persistent trigger hint in the navbar (e.g., a `⌘K` kbd badge next to the theme toggle) so visitors discover it without needing to already know the shortcut
- Respects the existing design tokens — mono font for the `⌘K` hint, same border/background treatment as other shadcn components already in use

**Explicitly out of scope for v1** (avoid scope creep into bryllim's exact feature): no AI-powered natural-language answering, no chat interface, no "ask anything" text field. This is pure fast-navigation, not a chatbot. If Kent wants an actual AI Q&A feature later, that's a separate, much larger project-worthy phase on its own.

### 4.2 — Alternative options considered (documented for reference, not chosen)

| Option | Verdict |
|---|---|
| Live GitHub contribution graph embed | Good, low-effort, but purely decorative — no interaction. Could be a nice *addition* to Phase 3's credibility layer instead (embed under Skills/Stack or About), not a phase-4 "signature" moment on its own. |
| Custom cursor / cyan trail effect | Purely cosmetic, adds JS overhead, contradicts "signal-forward, minimal" personality (`PORTFOLIO_PLAN.md` explicitly says no gimmicks). Rejected. |
| Terminal-style boot/typing intro on hero load | Fun, but delays LCP/first paint of the hero heading — directly conflicts with the Lighthouse-100 performance requirement already achieved in Phase 9 of v1. Rejected. |
| AI chat / "ask anything" bar (bryllim's actual feature) | Would require a real backend (LLM API calls, cost, latency) to not feel fake — too large in scope for this plan, and risks feeling like a direct copy rather than an authentic differentiator. Deferred to a future, dedicated project if desired. |

### 4.3 — Checklist

- [ ] `⌘K`/`Ctrl+K` opens the command palette from any page
- [ ] All sections/pages/projects are reachable and correctly navigate/scroll
- [ ] Visible hint badge exists so the feature is discoverable without prior knowledge
- [ ] Fully keyboard-accessible (arrow keys, enter, escape) — shadcn's `Command` gives this for free, verify it wasn't broken by customization
- [ ] No layout shift or performance regression (`Lighthouse` re-check after this phase, since it's the highest-risk phase for scope creep)
- [ ] Works correctly with `useReducedMotion` / respects `prefers-reduced-motion` for any transition animation on open/close

---

## Phase 5 — Content Completion & Asset Polish

> **Goal:** Everything data-driven is actually filled in correctly, consistent, and free of leftover scaffolding cruft.
>
> **Model:** `composer-2.5-fast` (primary) — this is population/cleanup work, not architecture, so the faster/cheaper model is the right call. `composer-2.5` if any of the audits below surface something that needs real fixing rather than filling in.
> **Skills:** `verification-before-completion` (confirm every claim added in this phase is real before shipping)
> **Risk:** Low.

### 5.1 — Remove scaffolding cruft

Default Next.js/shadcn starter assets still present in `public/` are dead weight and slightly undercut the "polished, custom" feel:

```
public/file.svg
public/globe.svg
public/next.svg
public/vercel.svg
public/window.svg
```
Delete any that aren't actually referenced anywhere (grep for each filename first to confirm).

### 5.2 — Asset audit

- [ ] Confirm `public/colinaPortrait.jpg` is used somewhere intentional (currently the Hero has "no images" per the design plan — decide: either use the portrait somewhere appropriate like an About/Contact accent, or remove it if it's unused, to avoid dead files)
- [ ] Confirm `public/resume.pdf` is the latest version of the CV
- [ ] Generate/confirm a real favicon reflecting Kent's initials or a simple mark (not the default Next.js icon)
- [ ] Verify `opengraph-image.tsx` output actually reflects the current hero copy after Phase 1's rewrite (OG images are often auto-generated from title/description constants — check `siteConfig.description` still matches the new positioning)

### 5.3 — Data completeness pass

- [ ] `src/data/hackathons.ts` — all entries have accurate `year`, `result`, and (per Phase 3) `href` where verifiable
- [ ] `src/data/experience.ts` — bullets updated per Phase 3's metric audit
- [ ] `src/data/skills.ts` — categories match what's genuinely used across the 11 shipped projects (don't list a technology that appears nowhere in the actual project case studies — internal consistency matters for credibility)
- [ ] `src/lib/site.ts` — `description` field updated to match the new hero/about positioning from Phase 1
- [ ] All 11 `content/projects/*.mdx` files reviewed for consistent tone (matches the new About voice) and at least one metric/outcome per project where one is real

### 5.4 — Checklist

- [ ] No unused default framework assets remain in `public/`
- [ ] Favicon reflects Kent's actual identity, not a framework default
- [ ] `siteConfig.description` and OG image output match Phase 1's rewritten positioning
- [ ] Every data file audited and internally consistent with the shipped case studies

---

## Phase 6 — QA, Accessibility & Performance Hardening

> **Goal:** Confirm the cumulative changes from Phases 1–5 haven't regressed the Lighthouse-100 baseline already achieved in v1, and do a final holistic review pass.
>
> **Model:** `composer-2.5` (primary) for fixing anything found. `gpt-5.3-codex` as an alternative for the audit pass itself if you want a second, more meticulous set of eyes before merging.
> **Skills:** `nextjs`, `react-best-practices`, `verification-before-completion`
> **Risk:** Low if Phases 1–5 followed their checklists; this phase exists specifically to catch anything that slipped through.

### 6.1 — Re-run the full Lighthouse checklist from `PORTFOLIO_PLAN.md` §9

Specifically re-verify what Phase 2 (new routes) and Phase 4 (command palette) are most likely to have affected:
- [ ] New routes (`/experience`, `/stack`, `/hackathons`) are fully static (`generateStaticParams` / default static rendering, no unintended SSR)
- [ ] Command palette client component doesn't block LCP or add meaningful TBT (test with it removed vs. present)
- [ ] No new console errors/warnings introduced by any of Phases 1–5
- [ ] All new interactive elements (Verify links, command palette, recommendations cards) have correct `aria-label`s and keyboard focus states
- [ ] Color contrast holds for any new text (framing sentences, Verify links) against both light and dark theme tokens

### 6.2 — Cross-device / responsive pass

- [ ] All 3 new full pages (`/experience`, `/stack`, `/hackathons`) tested at mobile, tablet, and desktop widths
- [ ] Command palette usable on touch devices (trigger button, not just keyboard shortcut)
- [ ] No horizontal scroll introduced anywhere

### 6.3 — Final holistic review

- [ ] Read the entire homepage top-to-bottom as a first-time visitor would — does it read as one coherent story now (name → proof → work → competitive record → career → skills → contact), or does anything feel disjointed after all the incremental changes?
- [ ] Confirm nothing from bryllim.com was copied in a way that would look derivative if the two sites were compared side-by-side (the goal was inspiration, not imitation — spot-check against `portfolio_analysis.md` §4, "What NOT to Copy")
- [ ] `npm run build` clean, zero TypeScript errors, zero lint warnings
- [ ] Optional: run the `code-reviewer` subagent or `security-review` skill for a final pass if any new external links/data fetching was introduced (e.g., GitHub contribution embed, if added)

### 6.4 — Ship

```bash
npm run build
git add -A
git commit -m "feat: apply bryllim.com-inspired improvements — copy, progressive disclosure, credibility layer, command palette"
git push origin main
```

---

## Summary: What Makes This "Kent's Own" and Not a Bryllim Clone

Per the user's requirement to stay "the same minimalistic theme/UI/design... but unique" — here's the explicit differentiation logic baked into this plan:

| Bryllim has | Kent's site does instead |
|---|---|
| AI chat command bar (content Q&A) | ⌘K command **palette** (fast navigation) — same keyboard-power-user energy, functionally different, fits an early-career engineer's authentic scope better than faking an AI feature |
| Live viewer count / community size | Nothing — Kent doesn't have that audience yet; faking it would read as hollow |
| 7-role LinkedIn timeline | Tight 2-role + hackathon-forward story — honest to actual career stage |
| Typing-speed mini-game | Nothing — pure novelty with no connection to Kent's differentiator (hackathon performance already *is* the "prove it under pressure" moment) |
| Recommendation from a government secretary | Real quotes from actual collaborators only, or none at all |
| "200K+ community" stat | Hackathon rank (`#64 / 1,920`) as the equivalent proof-of-scale stat — different but structurally the same technique (a number that stops the scroll) |

The throughline across every phase: borrow the **structural techniques** (progressive disclosure, metrics-first writing, verify links, one-line framing) because those are universal good-portfolio practices — but every piece of *content* and the *one signature interaction* is derived from what's actually true and distinctive about Kent, not ported over from Bryl's site.
