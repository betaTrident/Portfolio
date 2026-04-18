# Dev Portfolio

A multi-app portfolio workspace built with Next.js, React, and TypeScript.

## Tech Stack

- Next.js 16.1.6
- React 19.2.3
- TypeScript 5
- Tailwind CSS 4
- Framer Motion
- Three.js + React Three Fiber

## Workspace Layout

The workspace currently contains:

- apps/frontend: main portfolio app (active Next.js app)
- apps/admin: admin area folder (structure present, app setup appears incomplete)

Frontend source is inside:

- apps/frontend/src/app
- apps/frontend/src/components
- apps/frontend/src/styles

## Prerequisites

- Node.js 20.9+ recommended
- npm (package-lock.json is present)

## Install Dependencies

From the workspace root:

```bash
npm install
```

## Run the Project (Current Working Command)

Because the Next.js app is under apps/frontend and there is no root-level app or pages directory, use:

```bash
npx next dev apps/frontend
```

Then open:

- http://localhost:3000

## Build and Start (Current Working Commands)

```bash
npx next build apps/frontend
npx next start apps/frontend
```

## Lint

From the root:

```bash
npm run lint
```

## Important Note About package.json Scripts

Current scripts in package.json are:

- npm run dev -> next dev
- npm run build -> next build
- npm run start -> next start

These commands target the workspace root and currently fail with:

"Couldn't find any pages or app directory"

because the active Next.js app is nested under apps/frontend.

If you want root npm scripts to work directly, update scripts to include apps/frontend.

Example:

```json
{
	"scripts": {
		"dev": "next dev apps/frontend",
		"build": "next build apps/frontend",
		"start": "next start apps/frontend",
		"lint": "eslint"
	}
}
```

## API Route

Contact API route:

- POST /api/contact

Implemented at:

- apps/frontend/src/app/api/contact/route.ts

## Additional Docs

- STRUCTURE.md: project structure reference
- DESIGN.md: design system notes

## Status

README has been aligned with the current project configuration and verified runtime behavior.
