# aylith-com — Claude Code guidance

<!-- aylith-handbook:start -->
> **📖 Aylith handbook (authoritative).** This repo is part of the `aylith-labs` lab. Before any
> cross-repo, catalog, design-system, CI/runner, or data-flow work you **must** consult the org
> handbook — the single source of truth for these conventions:
> https://github.com/aylith-labs/aylith-handbook (locally `../aylith-handbook/`, skill `aylith-labs`).
<!-- aylith-handbook:end -->

## Project Overview

Public umbrella marketing site + product catalog for the `aylith-labs` lab, served at aylith.com. Fully prerendered static SvelteKit app (SvelteKit 2 / Svelte 5 runes, Tailwind v4, Vite 8) living in the `landing/` subdirectory. It does not author catalog content — it collects each org repo's `.aylith/project.md` at build time and renders the merged set. Meta-repo (carries the `aylith-meta` topic, excluded from its own catalog).

## Commands

Run from `landing/` (Node 22+):

```bash
cd landing
npm install
npm run dev        # Vite dev server, http://localhost:5847
npm run collect    # fetch org .aylith/project.md → .generated/projects/ (needs CATALOG_GITHUB_TOKEN; optional locally)
npm run build      # prerendered static output → landing/build
npm run preview    # serve the build, http://localhost:5848
npm run check      # svelte-kit sync && svelte-check (TS + Svelte diagnostics)
```

No runtime env vars — fully static, no backend.

## Architecture

- **Static-first.** `adapter-static`, `prerender = true` in the root layout; build emits a plain HTML/asset folder, no server.
- **Catalog is collected, not authored here.** `landing/scripts/collect.mjs` enumerates the `aylith-labs` org via `@octokit/rest`, skips archived repos and any with the `aylith-meta` topic, fetches each `.aylith/project.md`, and writes the merged set into gitignored `landing/.generated/projects/`. A repo with no manifest still appears as a "Planning" placeholder.
- **Snapshot fallback.** `src/lib/server/markdown.ts` reads `.generated/projects` when present, else the committed snapshot in `src/content/projects/` — so dev and tokenless builds work.
- **Self-refreshing.** Deploy fires on push to `main`, a `catalog-refresh` `repository_dispatch` from any product repo, an hourly cron, or manual dispatch; builds and deploys to GitHub Pages.
- Key dirs: `landing/src/routes/` (pages incl. `/projects`, `/projects/[slug]`, `/design`, `sitemap.xml`), `landing/src/lib/` (`actions/`, `brand/`, `components/`, `server/`, `stores/`), `landing/static/` (CNAME, favicons, brand avatars), `.aylith/project.schema.json` (manifest contract).

## Conventions

- Catalog data is **collected at build, not edited in this repo** — to add/change a tool, edit that tool's own repo `.aylith/project.md`, not files here.
- Public repo → CI runs on GitHub-hosted runners (`vars.CI_RUNNER || 'ubuntu-latest'`).
- Design tokens (Tailwind v4 `@theme`, keyframes, motion gating) live in `landing/src/app.css`.
- Motion is gated on `prefers-reduced-motion` + `html[data-motion]`; theme/motion resolve pre-paint via inline script in `app.html`.
- For logo/mark, favicon, avatar, or name-origin changes use the `aylith-brand-mark` skill — it owns the locked geometry, asset-sync graph, and regen recipe.
- Deploy = merge to `main`. Bump `landing/package.json` version on changes (patch fixes / minor features).
