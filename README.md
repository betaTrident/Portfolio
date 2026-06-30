# Portfolio

Modern portfolio starter built for Vercel deployment with a file-based MDX content layer.

## Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + shadcn/ui |
| Animation | Motion |
| Fonts | `next/font` (Inter + JetBrains Mono) |
| Icons | Lucide React |
| Content | MDX files in `content/` |
| Analytics | Vercel Analytics + Speed Insights |
| Hosting | Vercel (primary) |

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
content/
  projects/          # MDX case studies (one file = one route)
src/
  app/               # App Router pages
  components/        # UI, layout, sections
  lib/               # Content helpers, fonts, site config
  types/             # Shared TypeScript types
```

## Content (MDX)

Add a file to `content/projects/my-project.mdx`:

```mdx
---
title: My Project
description: Short summary for cards and SEO.
date: 2026-06-30
tags:
  - Next.js
  - Design
---

## Overview

Your case study content here.
```

It will appear at `/projects/my-project`.

## shadcn/ui

Add components as needed:

```bash
npx shadcn@latest add dialog tabs
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the repo in [Vercel](https://vercel.com/new).
3. Vercel auto-detects Next.js and deploys on every push to `main`.
4. Set `NEXT_PUBLIC_SITE_URL` to your production URL.

Analytics and Speed Insights work automatically once deployed on Vercel.

## Optional: Sanity CMS

This repo uses file-based MDX by default. To switch to Sanity:

1. Create a project at [sanity.io](https://www.sanity.io).
2. Add credentials to `.env.local` (see `.env.example`).
3. Run `npm create sanity@latest` in a `sanity/` folder or integrate `@sanity/client` in `src/lib/content.ts`.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
