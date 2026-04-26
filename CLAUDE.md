# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # dev server at localhost:4321
npm run build     # production build to ./dist/
npm run preview   # preview production build
npx astro check  # TypeScript + Astro type checking
```

## Architecture

This is a custom Astro blog (not using the Starlight docs framework, despite the README — Starlight was removed). The site is deployed at `https://blog.ishcc.net`.

**Content collection** — `src/content/blog/` holds `.md`/`.mdx` posts. The schema (defined in `src/content.config.ts`) requires `title`, `date`, `cover` (image), `excerpt`, and optional `tags`/`draft`. Posts with `draft: true` are excluded from all listings.

**Routing**
- `/` → `src/pages/index.astro` — hero + latest 6 posts
- `/blog` → `src/pages/blog/index.astro` — all posts with client-side tag filtering
- `/blog/[id]` → `src/pages/blog/[id].astro` — individual post via static paths

**Layout chain**: every page uses `BaseLayout.astro` (HTML shell, nav, footer, Google Fonts). Blog posts go through `PostLayout.astro` which wraps `BaseLayout` and adds cover image, tags, date, and the Giscus comment widget.

**Styling** — Tailwind CSS v4 with a custom `@theme` token set in `src/styles/global.css`. Use the semantic color tokens (`text-ink`, `text-muted`, `text-subtle`, `text-faint`, `border-line`, `bg-brand`, etc.) rather than raw Tailwind colors.

**Comments** — `src/components/Giscus.astro` requires `REPO_ID` and `CATEGORY_ID` to be filled in from https://giscus.app before comments work in production.

**Images** — blog post covers live in `src/assets/blog/` and are referenced from frontmatter with a relative path. Note diagrams/screenshots live under `src/assets/images/notes/` — these are legacy assets from the removed Starlight docs section.
