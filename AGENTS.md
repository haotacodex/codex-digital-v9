# Codex Digital - Developer Handoff Documentation

## Quick Summary

**Project**: Codex Digital Agency Website (v8.2)  
**Type**: portfolio/marketing site for a digital agency based in North Sydney  
**Status**: **Live and running** - Next.js 15.1.6 with App Router, fully functional with dynamic pages for services, case studies, industries, and insights

---

## Tech Stack Summary

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 15.1.6 (App Router, Server Components, Static Generation) |
| **Styling** | Tailwind CSS v4 (with custom CSS variables and @theme directive) |
| **UI Framework** | React 19.0.0 + React DOM 19.0.0 |
| **Animation** | Framer Motion 12.38.0 |
| **Icons** | Lucide React 0.460.0 |
| **Language** | TypeScript 5.x (strict mode) |
| **Build System** | Next.js built-in (Webpack/Rspack bundler) |
| **Fonts** | Inter (body), Epilogue (headings) - loaded from next/font/google |
| **Hosting** | Platform-agnostic (Vercel recommended for Next.js deployments) |

---

## Key Build/Dev Commands

```bash
# Development server (running on http://localhost:3000)
npm run dev

# Production build
npm run build

# Production server
npm run start

# Linting
npm run lint
```

**Current Status**: Development server is **running** on http://localhost:3000 (background process)

---

## Coding Conventions

### Project Structure
```
V8.2/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with Navbar + Footer
│   ├── page.tsx           # Homepage
│   ├── [dynamic-routes]/  # Dynamic segments for services, industries, insights
│   └── [static-routes]/   # Static pages (about, contact, process, legal)
├── components/            # React components
│   ├── layout/           # Navbar, Footer, PageWrapper, MegaMenu
│   ├── sections/         # HeroSection, WorkGrid, CtaBand, etc.
│   ├── ui/               # Reusable UI: Button, Badge, Tag, etc.
│   └── forms/            # ContactForm, ProjectBriefForm
├── lib/                  # Business logic & data
│   ├── config.ts         # Site config, nav links, footer data
│   ├── content.ts        # All content data (services, case studies, team, etc.)
│   ├── types.ts          # TypeScript interfaces
│   └── utils.ts          # Helper functions (cn, slugify, formatDate, etc.)
├── public/               # Static assets (images, icons, favicon)
└── scripts/              # Utility scripts
```

### Naming Conventions
- **Components**: PascalCase (e.g., `HeroSection`, `WorkGrid`)
- **Files**: PascalCase for components, lowercase for utilities (e.g., `ContactForm.tsx`, `utils.ts`)
- **CSS Variables**: Prefixed with `--color-`, `--text-`, `--space-`, etc. in `globals.css`
- **CSS Classes**: Use Tailwind utility classes directly in `style` props (no CSS modules)
- **Data**: camelCase for TypeScript interfaces and content data
- **Slugs**: hyphen-lowercase (e.g., `website-development`, `qantas-super`)

### Design Patterns
- **Server Components by default** (Next.js 15 best practice)
- **Inline styles** with CSS variables (no external CSS files or CSS Modules)
- **Static generation** for all pages (no client-side data fetching)
- **No external styling libraries** - pure Tailwind CSS with custom theme

---

## Documentation Links

| Document | Purpose |
|----------|---------|
| **[PROJECT.md](./_agent-docs/PROJECT.md)** | Business context, goals, and target audience |
| **[BRAND.md](./_agent-docs/BRAND.md)** | Brand identity, colors, typography |
| **[STRUCTURE.md](./_agent-docs/STRUCTURE.md)** | Site architecture, pages, navigation |
| **[STACK.md](./_agent-docs/STACK.md)** | Technology stack and setup instructions |
| **[PROGRESS.md](./_agent-docs/PROGRESS.md)** | Task status: completed, in progress, todo |
| **[DECISIONS.md](./_agent-docs/DECISIONS.md)** | Design and code decisions log |

---

## Important Notes for New Agents

1. **Data Location**: All content is in `lib/content.ts`. No CMS integration yet (planned for phase 2).

2. **Images**: Static assets are in `public/` subdirectories (`images/clients/`, `images/work/`, `images/team/`, etc.)

3. **Icons**: SVG icons are in `public/icons/` and imported as React components in `lib/config.ts`

4. **No External APIs**: Current implementation is entirely static. Contact forms show success message but don't actually send emails.

5. **Framer Motion**: Available but sparingly used - the site relies more on CSS transitions and Tailwind animations.

6. **Accessibility**: Site includes proper semantic HTML, focus states, and responsive design.

7. **Type Safety**: TypeScript interfaces in `lib/types.ts` define all data structures.

---

## Quick Start for Development

1. Ensure you're in `V8.2/` directory
2. Run `npm install` (if dependencies missing)
3. Run `npm run dev` to start development server
4. Open http://localhost:3000 in browser
5. Make changes to files - hot reload will update automatically

---

**Last Updated**: May 2026  
**Current Version**: 8.2  
**Primary Developer**: [Previous team - codexdigital.com.au]
