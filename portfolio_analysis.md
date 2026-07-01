# bryllim.com — Teardown & Inspiration Notes for Kent's Portfolio

> Source: [bryllim.com](https://bryllim.com/) — scraped and analyzed via Firecrawl on Jul 2, 2026.
> Raw scrapes saved in `.firecrawl/` (`bryllim.com.md`, `bryllim.com-projects.md`, `bryllim.com-experience.md`, `bryllim.com-stack.md`).
>
> Goal of this doc: extract what makes Bryl Lim's site impressive, decide what's worth borrowing (and what to skip), and rewrite Kent's hero/about copy so the whole site reads sharper.

---

## 1. Site Overview

**Owner:** Bryl Lim — Full-stack + AI engineer, Philippines-based, currently **Lead AI Engineer at Standard Chartered**.

**Site structure (from sitemap):**

```
/                    → home (condensed preview of every section)
/blog                → long-form posts (10 posts, monthly cadence)
/projects            → full project list (3 flagship apps + 12 client/agency projects)
/experience          → full job history (7 roles, LinkedIn-style timeline)
/stack               → full tech stack grouped by category
/certifications       → 3 certs w/ verify links
/recommendations      → LinkedIn-style testimonials
/affiliations         → orgs/communities
/consulting, /collabs → hire-me / partner-with-me pages
/shop, /gear          → resume template product, desk gear list
/resources            → curated links/tools
```

The homepage is a **single-page digest** that teases every one of those sections with a "view all →" link. This is the single biggest structural idea worth stealing: **one scrollable homepage that previews deep content, backed by dedicated full pages for anyone who wants more.**

---

## 2. Section-by-Section Breakdown

### Hero
- **Name-first, then a two-line personal statement**, written in plain first person, not corporate-speak:
  > "I'm a full-stack engineer. I build modern web & mobile apps, and these days I'm focused on generative AI."
  > "Right now I'm building cool new stuff every day. I love turning rough ideas into things people actually use."
- Notice: **two short paragraphs, not one dense sentence.** First = who he is + what he builds. Second = current focus + personal motivation/voice. This makes it feel human, not like a LinkedIn headline.
- Social links (GitHub, LinkedIn, Instagram, email) directly under the statement — low friction to reach out.
- **Immediate proof-of-scale row** right under the intro: `200K+ community`, `6+ yrs shipping`, `10x hackathons`, plus a badge-style link (`PH100 · StellarPH`). This is the hero's real power move — it turns claims into numbers within the first screen.
- A **live "people viewing now" counter** + mini community avatars — social proof / FOMO device, playful but works because he actually has an audience (YouTube/TikTok).
- A **command-K "ask anything" AI search bar** and a **typing-speed mini-game** embedded right in the hero. This is a novelty/personality flex — high effort, high risk, but it's memorable and on-brand for an AI engineer. Not something to copy directly, but the *lesson* is: one unexpected interactive element can make a portfolio unforgettable.

### About (folded into hero + "01 — blog" area, no dedicated About section on homepage)
- Bryl doesn't have a separate "about" wall of text — his identity is delivered through the hero + stats + timeline + recommendations working together. The story is shown, not told.
- Personality comes through in the blog post titles ("What Small Mobile Apps Taught Me About Taste", "Boring Guardrails Make AI Features Better") — these function as an implicit "about" by demonstrating how he thinks.

### Projects
- Opens with a **positioning line**: "Products and platforms I've designed and shipped — spanning developer education, generative AI, and consumer apps." One sentence of context before the grid.
- **Flagship section**: 3 personal consumer apps (Tarsi, Kabi, Mayi) each with:
  - A superlative badge (`#1 Finance App`, `#1 Paid Fitness App`, `#1 Paid Travel App`)
  - Press badges ("App Store Hidden Gems", "Apps Made in the Philippines")
  - App icon, one-line description
  - Real App Store / Google Play download badges (not just a GitHub link)
  - "Featured in" press links (Tap & Swipe case study, Fintech News PH, NextGen Tools) — third-party validation
- **Secondary grid**: 12 more projects (agency/enterprise work) shown as compact cards: name, category tag (Generative AI / Platform / EdTech · AI / Enterprise / Government), one-line description, external link. No screenshots needed here — just credibility via variety and named clients (Cambridge, DICT, Standard Chartered-adjacent work).
- Categorization by **type of work** (Generative AI, Platform, EdTech · AI, Enterprise, Government, Web App) rather than tech stack — makes scanning easy and shows breadth.

### Experience
- Full LinkedIn-style timeline with **company logos, employment type, duration, location, and detailed bullet points with metrics**:
  - "cutting lesson preparation time by over 70%"
  - "reducing monthly cloud costs by 25%"
  - "<200ms API latency and 99.9% uptime"
  - "reduced manual validation time by 70%"
- Every role has 1–3 tagged skills at the end (e.g., "n8n, Retrieval-Augmented Generation (RAG), +3 skills") — quick scan of tech per job.
- Opening line frames the whole timeline: "Six years building across AI engineering and full-stack development — from internal GenAI platforms at global enterprises to 60+ products shipped for startups." One sentence = the entire pitch of the page.

### Stack
- Grouped into meaningful categories, not a flat tag cloud: **Frontend, Backend, DevOps & Cloud, AI & Machine Learning, Security & Identity, CMS & No-Code, Developer Tools.**
- Having a "Security & Identity" and "DevOps & Cloud" category (not just "backend") signals seniority — most junior portfolios only show Frontend/Backend/Tools.

### Certifications
- Only 3, but each has a **verify link** (Credly, Oracle, Neo4j GraphAcademy) — makes claims checkable, which builds trust instantly.

### Recommendations
- Pulled straight from LinkedIn, with **name, title, and initials avatar**. One is from a government secretary — a huge credibility signal placed prominently.

### Affiliations / Community
- Org memberships + "Founder of AppBuildersPH" + live GitHub contribution graph (embedded, not just a link) + YouTube/TikTok follower counts. This section answers "is this person known/trusted beyond their resume?"

### Footer / closing
- Simple, direct: "say hello" + email + "Open mail app" button. No form, no friction.

---

## 3. What Makes This Portfolio "Impressive" (Root Causes, Not Surface Style)

Ranked by leverage — highest impact first:

1. **Numbers everywhere, always tied to specific claims.** Not "improved performance" but "<200ms API latency," "reduced cloud costs by 25%," "70% faster lesson prep." Nearly every sentence on the site ends in a metric or a named entity (client, publication, cert issuer).
2. **Third-party validation over self-description.** App Store badges, press mentions, verifiable certs, recommendations from named people with titles, live GitHub stats. The site is engineered to let *other sources* confirm the claims rather than asking the reader to trust Bryl's word.
3. **Specificity of scope.** "60+ products shipped," "500,000+ users," "12+ developers managed" — precise numbers read as more credible than vague "many projects" or "a team."
4. **Voice that's confident but casual, first-person, short sentences.** No corporate jargon ("synergize," "leverage," "drive value") except when quoting literal job descriptions. The personal copy (hero, blog intros) sounds like a person talking, not a resume.
5. **Progressive disclosure.** Homepage = highlight reel; every section has a "view all / full history →" link to a dedicated deep page. Visitors aren't forced to read everything, but power users (recruiters, collaborators) can go deep.
6. **One genuinely novel interactive element** (AI command-bar + typing game) that has nothing to do with "proving skill" directly but makes the site memorable and shareable — a differentiation tactic once the credibility fundamentals are already covered.
7. **Consistent categorization language** — "systems," "platforms," "products shipped" instead of generic "projects" — subtly reframes the work as more substantial than a portfolio of toy apps.

---

## 4. What NOT to Copy (and Why)

- **The AI chat command bar + typing-speed game**: cool, but expensive to build well and off-brand risk if it feels gimmicky rather than polished. Kent's plan already differentiates via the **hackathon leaderboard block** — that's a stronger, more authentic signature element for a student/early-career profile than trying to out-gimmick an established engineer's site.
- **"200K+ community" / "live viewer count" / YouTube-TikTok follower stats**: this only works because Bryl has an actual built audience. Copying vanity-metric UI without the underlying numbers would look hollow. Skip until/unless Kent builds a real audience.
- **7-role LinkedIn-style job history**: Kent's professional history is shorter (Symph + hackathons + BS IT). Don't force a long timeline — a **tight 1–2 role + hackathon-and-projects-forward story** is more honest and, per the existing plan, is already the right call.
- **Recommendation from a government secretary**: not fabricable — only include recommendations Kent can genuinely source (professors, Symph teammates/manager, hackathon collaborators).

---

## 5. Direct Takeaways to Apply to Kent's Site

| Bryllim technique | How to adapt for Kent |
|---|---|
| Metrics in every bullet | Rewrite every project/experience bullet to end in a number (latency, users, rank, % improvement, team size) |
| "View all →" pattern per section | Add this to Projects, Experience, and (new) Hackathons sections once deep pages exist |
| Category tags on projects, not just tech stack | Tag Kent's projects as "AI System," "SaaS Product," "Automation Tool," "Hackathon Build" (matches the plan's "systems" framing) |
| Verify links on certs | If Kent has any certs (Google/Oracle GenAI, AWS, etc.), add "Verify →" links; if none yet, treat as a backlog item worth pursuing before launch |
| Recommendations section | Ask 1–2 Symph teammates/manager or a CTU professor for a short LinkedIn recommendation — even one strong quote adds outsized trust |
| Stack grouped by category | Kent's plan already does "active stack" tags — group into Frontend / Backend / AI-ML / DevOps at minimum, matching bryllim's granularity |
| One-sentence framing per section | Every section should open with a single line of context (like "Six years building across..." on Experience) — currently Kent's About does this but Projects/Experience sections should too once built |
| Progressive disclosure homepage | Confirms the plan's `/projects/[slug]` approach is right — keep homepage condensed, push detail to subpages |

---

## 6. Copy Rewrite — Hero Section

### Current
```
01 / Kent Bryan Colina

Full-Stack Developer
& AI Engineer.

I build scalable solutions that drive real business impact.
```

### Problems with the current sub-headline
- "I build scalable solutions that drive real business impact" is **generic corporate filler** — it could describe literally any developer on LinkedIn. It contains no proof, no specificity, no personality, and no differentiation. Compare to bryllim's hero line, which names the *actual kinds* of things he builds (modern web & mobile apps, generative AI) and adds a second, more personal sentence.
- It doesn't mention AI, agentic systems, or the hackathon angle — which is Kent's stated differentiator in `PORTFOLIO_PLAN.md`.
- One sentence, no room for personality or momentum ("right now I'm...").

### Recommended rewrite (pick one, or mix)

**Option A — closest to bryllim's two-line structure, keeps it personal:**
```
I build full-stack apps and agentic AI systems — the kind that turn
messy, manual workflows into software people actually rely on.

Right now I'm deep in multi-agent pipelines and document-intelligence
systems, and I like being tested on it: I've placed top-64 out of
1,920+ teams in global AI hackathons.
```

**Option B — shorter, punchier, leads with the hackathon proof point (matches the plan's "signal-forward" design):**
```
I build agentic AI systems and full-stack apps that solve real
problems — then I stress-test them by competing against 1,000+ teams
in global AI hackathons. And winning seats at the table.
```

**Option C — safest, most universally readable, still specific:**
```
I design and ship full-stack products and AI-powered systems —
from multi-agent pipelines to production apps used by real people.
```

**Recommendation:** Use **Option A**. It mirrors bryllim's proven two-sentence formula (what you build → what you're doing right now + a proof point), it's specific about *agentic AI / document intelligence* (matches the plan's stated differentiator), and it naturally sets up the hero stats row (`heroStats`) that already shows hackathon ranks — the copy and the data below it now reinforce each other instead of repeating "hackathon" twice.

If a shorter version is preferred for layout reasons, use:
```
I build agentic AI systems and full-stack apps that turn messy
workflows into software people actually rely on.
```

---

## 7. Copy Rewrite — About Section

### Current
```
I'm a full-stack engineer and AI engineer. I focus on building agentic systems, multi-agent pipelines,
and AI-powered applications that turn messy workflows into structured
software. My work focuses on turning complex ideas into practical systems,
from planning and architecture to implementation. I enjoy building solutions
that improve workflows, support real users, and create practical value for businesses.

Currently open to opportunities →
```

### Problems
- **Repetition**: "full-stack engineer and AI engineer" then later "turning complex ideas into practical systems" then "building solutions that improve workflows" — three sentences that all restate the same idea ("I build practical software") without adding new information each time.
- Missing a typo fix: `structured\nsoftware.My work` — no space after the period (also visible in the raw file; will need a source fix regardless of final copy).
- No proof points, no numbers, no names (Symph, CTU, specific products) — entirely generic. Bryllim's site earns trust by naming Standard Chartered, Cambridge, specific metrics; Kent's About currently names nothing.
- Doesn't mention the hackathon rankings or that Kent ships production software with real users (Peaksy, CourtHub per the plan) — these are the exact differentiators the design plan says should carry the site.
- "Currently open to opportunities" is fine but could sit better as a distinct, confident CTA rather than trailing off the same paragraph block.

### Recommended rewrite

```
I'm a full-stack developer and AI engineer studying BS Information
Technology at CTU. I build agentic systems and multi-agent pipelines
that turn messy, manual workflows into structured software — and I like
proving it under pressure: I've ranked top-64 out of 1,920+ teams in the
Reply AI Agent Challenge, and reached the finals of the USAII Global AI
Hackathon and OLTEK Paper to Data.

Outside of competitions, I ship production software at Symph, where I
work on real products used by real people — Peaksy and CourtHub. I care
about the full lifecycle: architecture, implementation, and the details
that make software actually usable, not just technically correct.

Currently open to opportunities →
```

**Why this works better:**
- Paragraph 1 = identity + proof (what you build + hackathon credentials, mirroring the "metrics everywhere" lesson from bryllim.com).
- Paragraph 2 = real-world application (names Symph, Peaksy, CourtHub — specific and checkable, mirrors bryllim naming Standard Chartered/Cambridge).
- Keeps "Currently open to opportunities" as its own clean closing CTA line, unchanged in function.
- Removes all three redundant "I build practical things" sentences down to one clear statement per paragraph.

**Shorter alternative** (if two paragraphs feels long for the About section's `max-w-2xl` layout):
```
I'm a full-stack developer and AI engineer building agentic systems and
multi-agent pipelines that turn messy workflows into structured
software. I've ranked top-64 out of 1,920+ teams in the Reply AI Agent
Challenge and reached the finals of two other global AI hackathons —
and I ship production software with real users at Symph (Peaksy,
CourtHub).

Currently open to opportunities →
```

---

## 8. Other Wording/Content Opportunities Found During This Pass

1. **Fix the missing space** in the current About copy: `structured\nsoftware.My work` → needs `software. My work` (moot if the rewrite above is used, but flag it regardless in case any old copy persists elsewhere).
2. **Hero stats row** (`src/data/stats.ts`) currently only shows 3 hackathon entries with no framing label above them (bryllim's equivalent row has implicit labels like "community," "shipping," "hackathons"). Consider a small `mono` label above the stats row, e.g. `RECENT COMPETITIVE RESULTS` or `PROVEN UNDER PRESSURE`, so first-time visitors immediately understand what the numbers mean before reading each one.
3. **Add a one-line framing sentence at the top of the Projects and Experience sections** once built (per bryllim's pattern) — e.g. Projects: *"AI systems, SaaS tools, and hackathon builds — ranked and shipped, not just prototyped."* Experience: *"Shipping production software while competing in global AI hackathons on the side."*
4. **Consider a lightweight "Verify" affordance** for hackathon results if public leaderboards/certificates exist (links out to the competition page or LinkedIn post) — directly borrows bryllim's certification "Verify" pattern and converts a claim into a checkable fact.
5. **Category tags on future project cards**: use "AI System" / "SaaS Product" / "Hackathon Build" / "Automation Tool" consistently (this is already in the plan — just confirming it's the right call based on what makes bryllim's project grid scannable).
6. **Recommendations section (future)**: even a single quote from a Symph teammate/manager or CTU professor, styled like bryllim's testimonial cards (name, title, short quote), would add outsized credibility relative to effort.
7. **Typo/formatting audit**: run a full copy pass across the codebase once all sections are drafted — the missing-space bug suggests other sections may have similar small issues worth catching before launch.

---

## 9. Summary Checklist

- [ ] Replace hero sub-headline with Option A (or B/C) from Section 6
- [ ] Replace About paragraph with rewrite from Section 7 (long or short version)
- [ ] Fix `software.My work` spacing bug in source (resolved automatically if About is rewritten)
- [ ] Add a small mono label above the hero stats row
- [ ] When building Projects/Experience sections, add a one-line context sentence at the top of each (bryllim pattern)
- [ ] Keep the hackathon leaderboard block as the signature differentiator (per existing plan) rather than trying to copy bryllim's AI-chat/typing-game novelty
- [ ] Backlog: pursue 1–2 short recommendations (Symph manager/teammate, CTU professor) for a future Recommendations section
- [ ] Backlog: add "Verify" links for any certs or public hackathon results once available
