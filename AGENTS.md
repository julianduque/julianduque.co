# Repository Guidelines

## Project Structure & Module Organization

- `content/` holds Eleventy page sources, collections, and templates (`_includes/`, `utils/`, section folders).
- `assets/` stores the design-system CSS (`assets/css/site.css`), favicons, images, and generated builds (`*-build.css`, `js/min.js`). Fonts are copied from `@fontsource/ibm-plex-mono` at build time into `assets/fonts/`.
- `src/` contains browser JavaScript modules bundled via Rollup and exposed globally through `src/index.js`.
- `_11ty/` provides Eleventy helpers (RSS, HTML minify, responsive images). `_site/` is the generated output—never edit directly.
- `scripts/` houses build tooling such as `rollup.config.js` and automation helpers.

## Build, Test, and Development Commands

- `pnpm install` installs dependencies (Node 24, pnpm 10).
- `pnpm dev` runs Eleventy, Rollup, and PostCSS watchers for local development at http://localhost:8080.
- `pnpm run build` produces production-ready JS/CSS bundles and renders the static site into `_site/`.
- `pnpm run lint` executes Markdownlint and ESLint; `pnpm run prettier:verify` checks formatting without writing changes.

## Coding Style & Naming Conventions

- JavaScript follows ESLint (`eslint.config.js`) with Prettier integration; use 4-space indentation, `const`/`let`, and explicit exports.
- CSS lives in `assets/css/site.css` as plain, token-based CSS (no Tailwind). Reuse the existing classes and tokens described in `DESIGN.md`; keep selectors kebab-cased.
- Content files under `content/` should use lowercase, hyphenated slugs (e.g., `work/public-speaking.md`).

## Testing Guidelines

- No automated Jest-style suite; validate changes by running `pnpm run build` and checking the generated `_site/` for regressions.
- Run `pnpm dev` to interactively confirm navigation, the theme toggle, and both palettes.
- Flag accessibility regressions by using browser devtools audits before merging.

## Commit & Pull Request Guidelines

- Write short, present-tense commit subjects (`add new category`, `fix toc scroll`). Group related asset rebuilds with the code change.
- Ensure commits pass `pnpm run lint` and `pnpm run build` locally; include the relevant commands in the PR description.
- Pull requests should outline the motivation, link related issues or posts, and include before/after screenshots for visual updates.

## Deployment Notes

- Production builds expect optimized CSS/JS artifacts; avoid committing `*-build.css` diffs unless intentionally regenerated.
- `URL` loads via `.env` for absolute URLs; keep credentials out of commits.
