# Project Structure Documentation

This portfolio follows an industry-standard Next.js file structure for maintainability and scalability.

## Directory Structure

```
dev-portfolio/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── api/                  # API routes
│   │   │   └── contact/          # Contact form endpoint
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Home page
│   │
│   ├── components/               # React components
│   │   ├── layout/               # Layout components
│   │   │   ├── Navbar.tsx        # Navigation bar
│   │   │   ├── Footer.tsx        # Footer
│   │   │   └── index.ts          # Barrel export
│   │   │
│   │   ├── sections/             # Page sections
│   │   │   ├── Hero.tsx          # Hero section
│   │   │   ├── About.tsx         # About section
│   │   │   ├── TechStack.tsx     # Tech stack display
│   │   │   ├── Projects.tsx      # Projects showcase
│   │   │   ├── Contact.tsx       # Contact form
│   │   │   ├── Skills.tsx        # Skills section
│   │   │   ├── FAQ.tsx           # FAQ section
│   │   │   └── index.ts          # Barrel export
│   │   │
│   │   ├── common/               # Shared/utility components
│   │   │   ├── ScrollAnimation.tsx    # Scroll animations
│   │   │   ├── ScrollToTop.tsx        # Scroll to top button
│   │   │   ├── ThemeProvider.tsx      # Theme context provider
│   │   │   └── index.ts               # Barrel export
│   │   │
│   │   └── ui/                   # Reusable UI components
│   │       ├── Breadcrumb.tsx    # Breadcrumb navigation
│   │       ├── UnderConstruction.tsx  # Placeholder component
│   │       └── index.ts          # Barrel export
│   │
│   ├── lib/                      # Utilities and helpers
│   │   └── utils.ts              # Utility functions
│   │
│   ├── types/                    # TypeScript type definitions
│   │   └── index.ts              # Global type definitions
│   │
│   ├── constants/                # Application constants
│   │   └── index.ts              # Site config, nav links, etc.
│   │
│   ├── hooks/                    # Custom React hooks
│   │   └── (add custom hooks here)
│   │
│   └── styles/                   # Global styles
│       └── globals.css           # Global CSS styles
│
├── public/                       # Static assets
│
└── config files                  # Next.js, TypeScript, ESLint, etc.
```

## Key Principles

### 1. Component Organization
- **Layout Components** (`layout/`): Components that define the structure (Navbar, Footer)
- **Section Components** (`sections/`): Self-contained page sections (Hero, About, Projects)
- **Common Components** (`common/`): Shared utilities (ScrollAnimation, ThemeProvider)
- **UI Components** (`ui/`): Reusable interface elements (Breadcrumb, UnderConstruction)

### 2. Barrel Exports
Each component directory includes an `index.ts` file for cleaner imports:

```typescript
// Instead of:
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// You can use:
import { Navbar, Footer } from '@/components/layout';
```

### 3. TypeScript Types
Central type definitions in `src/types/` for:
- Form data structures
- Project interfaces
- Skill interfaces
- Social link types

### 4. Constants
Centralized configuration in `src/constants/` for:
- Site metadata
- Navigation links
- Social media links
- Other app-wide constants

### 5. Import Aliases
Uses `@/` alias for clean absolute imports:
```typescript
import { Hero } from '@/components/sections';
import { SITE_CONFIG } from '@/constants';
import type { Project } from '@/types';
```

## Benefits of This Structure

1. **Scalability**: Easy to add new components in appropriate directories
2. **Maintainability**: Clear separation of concerns
3. **Discoverability**: Intuitive file locations
4. **Reusability**: Shared components and utilities are easy to find
5. **Type Safety**: Centralized type definitions prevent duplication
6. **Clean Imports**: Barrel exports and aliases reduce boilerplate

## Adding New Components

### Layout Component
```bash
# Create in src/components/layout/
# Add export to src/components/layout/index.ts
```

### Section Component
```bash
# Create in src/components/sections/
# Add export to src/components/sections/index.ts
```

### UI Component
```bash
# Create in src/components/ui/
# Add export to src/components/ui/index.ts
```

### Custom Hook
```bash
# Create in src/hooks/
# Example: useMediaQuery.ts, useLocalStorage.ts
```

## Next Steps

1. Add custom hooks to `src/hooks/`
2. Extract magic numbers/strings to `src/constants/`
3. Define shared interfaces in `src/types/`
4. Add utilities to `src/lib/`
5. Consider adding `src/contexts/` for React contexts
6. Add `src/middleware.ts` for Next.js middleware if needed
