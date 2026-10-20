# AGENTS.md

Personal portfolio — Next.js 16 App Router, React 19, Tailwind v4. `README.md` is stale create-next-app boilerplate; real source is `src/`.

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
- Section components are `"use client"`; `layout.tsx` mounts `Navbar`, `Cursor`, and `Footer`, and `template.tsx` wraps every route in the shared enter transition.
- Home has two responsive heroes: the split hero in `HomePage.tsx` is `xl:hidden`, while `LegacyHero.tsx` is the `xl` collage. Edit both when changing hero content. `LegacyHero` opens the nav menu by dispatching the window event `portfolio:open-menu`; `Navbar` listens for it.
- `PixelImage` draws the portrait on `<canvas>` and shatters it into tiles on scroll. It takes a raw image URL (`img.src`), not a `next/image` import.
- Content is hard-coded in module-scope arrays at the top of each page (`projects`, `education`, `technology`, `railStats`, nav/social links). No CMS, API routes, database, or env vars.
- The contact form is `mailto:` only (`handleSubmit` builds a mailto link). Don't add a backend.
- Images are statically imported from `src/assets/image/` with relative paths (not `@/`); prefer `hero-img.webp` over the ~1 MB PNG. `public/` is for non-imported files.
- `src/components/footer/FooterPage.tsx` is empty and unused.

## Styling

- Tailwind v4 is loaded by the Turbopack CSS rule (`@tailwindcss/turbopack`) in `next.config.ts`. There is no `tailwind.config.*` or `postcss.config.*`; don't create them and ignore docs' `tailwind.config.js` snippets. Theme values go in `src/app/globals.css`.
- Design tokens are plain `:root` CSS variables plus hand-written utilities (`.bg-primary`, `.bg-panel`, `.border-heavy`, `.text-muted`, `.text-inverse`, `.theme-media-filter`, …). These are **unlayered**, so they override Tailwind utilities: don't stack conflicting classes (e.g. `text-primary` + `text-white`).
- `.border-light|medium|dark|heavy` set the full `border` shorthand, not just a color (`.border-heavy` is 2px black).
- `font-sans` = Space Grotesk, `font-mono` = JetBrains Mono, `font-dancing` = Dancing Script (mapped in `@theme inline`).
- Imagery should use `.theme-media-filter` per the theme spec; note it currently un-grayscales on hover.
- Icon libraries are **not installed** — inline SVG is the established pattern. Framer Motion is installed and used throughout.
- Use `next/link` for internal routes; `Footer.tsx` still uses plain `<a>` (full page reloads) — don't copy that.

## Conventions

- Every animated component calls `useReducedMotion()` and skips motion when set; shared easing is `const EASE = [0.22, 1, 0.36, 1]`. Match this when adding motion.
- React Compiler is enabled (`reactCompiler: true`) and depends on `babel-plugin-react-compiler`; keep both and don't add manual memoization just for it.
- Route props are globally generated types (e.g. `LayoutProps<"/">`). Don't hand-write or edit them, `next-env.d.ts`, or anything in `.next/`.
