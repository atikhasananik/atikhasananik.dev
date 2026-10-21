# AGENTS.md

Personal portfolio — Next.js 16 App Router, React 19, Tailwind v4, Framer Motion. `README.md` is maintained and user-facing; this file covers the wiring it omits.

Design specs live **outside this repo** in `C:\Users\ASUS\Desktop\protfolion\mdFile\` (`theme_specification.md`, `portfolio_system_specification.md`, `folder_structure_blueprint.md`). Style is strict monochrome/brutalist — no accent colors. Where docs conflict, the built code wins: section order is 01 Home, 02 Projects, 03 Education, 04 Technology, 05 Contact, 06 Footer (`folder_structure_blueprint.md` swaps 03/04).

## Commands

- `npm install` — npm only (`package-lock.json`); don't switch package managers.
- `npm run dev` — Next 16 + Turbopack on http://localhost:3000. Next 16 holds a dev lock: if a server is already running, reuse it; a second `next dev` exits with "Another next dev server is already running".
- `npm run build` / `npm start` — production build and serve.
- `npm run lint` — bare `eslint` against the flat config; use `npx eslint <path>` to lint a subset.
- `npx tsc --noEmit` — standalone typecheck (no npm script; `build` also typechecks). Run `dev` or `build` once first: route prop types are generated into `.next/` and imported by `next-env.d.ts`.

No test runner, test script, or CI workflow exists. Don't invent test commands.

## Architecture

- `src/app/page.tsx` composes all five sections, so editing a section component changes both `/` and its own route: `src/components/{home,projects,education,technology,contact}/<Name>Page.tsx`, each re-exported by `src/app/<section>/page.tsx`.
- SEO is centralized: `src/lib/site.ts` holds `SITE_URL`/`SITE_NAME`/`SITE_EMAIL`/`SOCIAL_LINKS`, and `src/lib/seo.ts` exports `pageMetadata(title, description, path)` (canonical + OpenGraph + Twitter). `layout.tsx` adds the title template (`%s — Atik Hasan Anik`) and JSON-LD; `opengraph-image.tsx` renders the share image at `/opengraph-image`. A new route needs both a `pageMetadata` export and an entry in `src/app/sitemap.ts`.
- Gotcha: `Navbar`, `ContactPage`, and `Footer` still hard-code their own `EMAIL` constant and `socials` arrays instead of importing `SITE_EMAIL`/`SOCIAL_LINKS`. Changing contact details means editing `src/lib/site.ts` **and** those three components.
- Section components are `"use client"`; `layout.tsx` mounts `Navbar`, `Cursor`, `Ant` (a walking-ant easter egg), `Footer`, and the JSON-LD script. `template.tsx` wraps every route in the shared enter transition.
- Home has two responsive heroes: the split hero in `HomePage.tsx` is `xl:hidden`, while `LegacyHero.tsx` is the `xl` collage. Edit both when changing hero content. `LegacyHero` dispatches the window event `portfolio:open-menu`; `Navbar` listens for it.
- `PixelImage` draws the portrait on `<canvas>` and shatters it into tiles on scroll. It takes a raw image URL (`img.src`), not a `next/image` import.
- Content is hard-coded in module-scope arrays at the top of each page (`projects`, `education`, `technology`, and a `railStats` array duplicated per section). No CMS, API routes, database, or env vars (nothing reads `process.env`).
- The contact form is `mailto:` only (`handleSubmit` builds a mailto link); `ContactToast` renders its feedback. Don't add a backend.
- Images are statically imported from `src/assets/image/` with relative paths (not `@/`); both heroes use `hero-img.webp` — prefer it over the ~1 MB PNG. `public/` only holds unused create-next-app SVGs.
- `error.tsx` / `loading.tsx` / `not-found.tsx` are thin wrappers over `src/components/system/{StatusPage,LoadingPage}.tsx`; change the shared component, not each route.

## Styling

- Tailwind v4 is loaded by the Turbopack CSS rule (`@tailwindcss/turbopack`) in `next.config.ts`. There is no `tailwind.config.*` or `postcss.config.*`; don't create them and ignore docs' `tailwind.config.js` snippets. Theme values go in `src/app/globals.css`.
- Design tokens are plain `:root` CSS variables plus hand-written utilities (`.bg-primary`, `.bg-panel`, `.border-heavy`, `.text-muted`, `.text-inverse`, `.text-words`, `.text-blend-invert`, `.theme-media-filter`, …). These are **unlayered**, so they override Tailwind utilities: don't stack conflicting classes (e.g. `text-primary` + `text-white`).
- `.border-light|medium|dark|heavy` set the full `border` shorthand, not just a color (`.border-heavy` is 2px black).
- `font-sans` = Space Grotesk, `font-mono` = JetBrains Mono, `font-dancing` = Dancing Script (mapped in `@theme inline`).
- Imagery should use `.theme-media-filter` per the theme spec; note it currently un-grayscales on hover.
- Icon libraries are **not installed** — inline SVG is the established pattern.
- Use `next/link` for internal routes; `Footer.tsx` still uses plain `<a>` (full page reloads) — don't copy that.

## Conventions

- Animated components call `useReducedMotion()` and skip motion when set. `const EASE = [0.22, 1, 0.36, 1] as const` is **copied into each component**, not imported from a shared module — follow that pattern rather than refactoring to a common constant.
- `Ant.tsx` subscribes to `matchMedia("(prefers-reduced-motion: reduce)")` directly because Framer's hook samples the query only once; reuse that pattern only where live OS changes must be observed.
- React Compiler is enabled (`reactCompiler: true`) and depends on `babel-plugin-react-compiler`; keep both and don't add manual memoization just for it.
- Route props are globally generated types (e.g. `LayoutProps<"/">`). Don't hand-write or edit them, `next-env.d.ts`, or anything in `.next/`.
