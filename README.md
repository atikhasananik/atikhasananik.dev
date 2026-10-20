# Atik Hasan Anik — Portfolio

A monochrome, brutalist portfolio for a full-stack web developer. Built with the Next.js App Router and animated with Framer Motion, it pairs oversized typography and hard grid lines with a custom cursor, a scroll-driven image effect, and a terminal-style contact form.

**Repository:** [github.com/atikhasananik/atikhasananik.dev](https://github.com/atikhasananik/atikhasananik.dev)

## Highlights

- **Strict monochrome design** — no accent colors, only whites, blacks, and grays.
- **Two responsive heroes** — a split hero below `xl`, and an editorial collage layout at `xl` and up.
- **Canvas portrait** — the hero photo is drawn to `<canvas>` and shatters into tiles as you scroll (`PixelImage`).
- **Decoding type** — headings and readouts scramble into place on hover (`ScrambleText`).
- **Custom cursor** — a dot-and-ring cursor with hover states, only on fine-pointer devices.
- **Motion with care** — page transitions, staggered reveals, and scroll-triggered cards all respect `prefers-reduced-motion`.
- **Terminal contact form** — composes a `mailto:` message; no data is stored or sent to a server.
- **Accessible navigation** — a full-screen menu dialog with focus handling, `Escape` to close, and scroll locking.

## Sections

| # | Section | Route | Description |
|---|---------|-------|-------------|
| 01 | Home | `/` | Hero, stats rail, portrait, and calls to action |
| 02 | Projects | `/projects` | Project log cards with live/source links and generated SVG artwork |
| 03 | Education | `/education` | Degrees, academic history, and certifications |
| 04 | Technology | `/technology` | Frontend, backend, and tooling stacks |
| 05 | Contact | `/contact` | Channels, local Dhaka time, and message terminal |
| 06 | Footer | — | Sitemap, social links, and back-to-top |

The home page renders sections 01–05 in sequence; each section is also available on its own route.

## Featured Projects

| Project | What it is | Stack | Links |
|---------|------------|-------|-------|
| **Bazardor** | Price tracking and market comparison platform with authentication | Next.js 16, React 19, Tailwind 4, MongoDB | [Live](https://a07-bazardor.vercel.app/) · [Source](https://github.com/atikhasananik/a07-bazardor) |
| **Bangla News 7** | Bengali-first live news feed powered by News API v2 | Next.js 16, React 19, Tailwind 4 | [Live](https://banglanews7.vercel.app/) · [Source](https://github.com/atikhasananik/banglanews7) |
| **FitLog** | Workout planner with an exercise library and saved plans | Next.js 16, React 19, Tailwind 4 | [Live](https://a06-fitlog.vercel.app/) · [Source](https://github.com/atikhasananik/a06-fitlog) |

Project data lives in `src/components/projects/ProjectPage.tsx`; each card renders its `live` and `repo` links when present.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| UI | [React 19](https://react.dev) |
| Language | TypeScript 5 |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) with custom CSS variables |
| Animation | [Framer Motion 14](https://motion.dev) |
| Fonts | Space Grotesk, JetBrains Mono, Dancing Script via `next/font` |

## Getting Started

**Prerequisites:** Node.js 20.9 or newer and npm.

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Edit files under `src/` and the page reloads automatically.

> Next.js 16 keeps a lock on the project directory while `next dev` runs. If a server is already running, reuse it instead of starting a second one.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the dev server with Turbopack |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint (flat config) |
| `npx tsc --noEmit` | Type-check without emitting files |

Run `npm run dev` or `npm run build` at least once before `tsc`, since Next generates route types into `.next/`.

## Project Structure

```text
src/
├── app/
│   ├── layout.tsx          # Root layout: fonts, Navbar, Cursor, Footer
│   ├── template.tsx        # Shared route enter transition
│   ├── globals.css         # Tailwind import, design tokens, utilities
│   ├── page.tsx            # Home page composing all sections
│   ├── projects/page.tsx
│   ├── education/page.tsx
│   ├── technology/page.tsx
│   └── contact/page.tsx
├── assets/image/           # Statically imported imagery
└── components/
    ├── home/               # HomePage, LegacyHero, PixelImage, ScrambleText
    ├── projects/           # ProjectPage, ProjectCard
    ├── education/          # EducationPage, EducationCard
    ├── technology/         # TechnologyPage, TechnologyCard
    ├── contact/            # ContactPage
    ├── nav/                # Navbar with full-screen menu
    ├── footer/             # Footer
    └── cursor/             # Custom cursor
```

## Design System

Design tokens and hand-written utilities live in `src/app/globals.css`:

- **Backgrounds** — `.bg-primary`, `.bg-secondary`, `.bg-dark`, `.bg-panel`
- **Borders** — `.border-light`, `.border-medium`, `.border-dark`, `.border-heavy`
- **Text** — `.text-primary`, `.text-secondary`, `.text-muted`, `.text-inverse`
- **Media** — `.theme-media-filter` applies the grayscale/contrast treatment used across imagery
- **Typography** — `font-sans` (Space Grotesk), `font-mono` (JetBrains Mono), `font-dancing` (Dancing Script)

The tokens are plain CSS variables rather than Tailwind theme colors, so they intentionally override Tailwind utilities when composed.

## Deployment

The project builds to a standard Next.js app and can be deployed to any Node.js host or platform such as Vercel:

```bash
npm run build
npm start
```

There are no environment variables, databases, or external services to configure.

## Contact

- **Email:** [itsatikhasananik@gmail.com](mailto:itsatikhasananik@gmail.com)
- **GitHub:** [@atikhasananik](https://github.com/atikhasananik)
- **LinkedIn:** [in/atikhasananik](https://www.linkedin.com/in/atikhasananik/)
- **X:** [@atikhasananik06](https://x.com/atikhasananik06)

---

Designed and built by Atik Hasan Anik.
