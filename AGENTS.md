# AGENTS.md — ApexBank

## What this is
A Brazilian-Portuguese banking simulator for a fictional bank (ApexBank). Static multi-page site, no build step. The roadmap lives in **PLAN.md** — continue from the next unchecked milestone there.

## Architecture
- `public/` is the publish directory (see `netlify.toml`). Each page is a self-contained HTML file with an inline `<script>` at the end.
- Shared scripts, loaded in this order at the end of `<body>`:
  1. `assets/fixtures.js` → `window.ApexData` — **the single source of all stub data**. Pages deep-copy it into a local `state` object; nothing persists across reloads.
  2. `assets/common.js` → `window.Apex` — helpers: `brl`, `pct`, `nowBR`, `authCode`, `esc`, `price`, `toast`, `modal`, `receipt`, `qrSvg`, `icons`, `toggleTheme`.
- `<head>` loads Tailwind CDN, then `assets/tailwind-config.js`, then `assets/styles.css` (glass/field/btn classes + light-mode overrides), Lucide and Chart.js from CDN.
- Pages: `index.html` (landing), `cliente.html` (customer), `agencia.html` (staff, role-gated by `ApexData.permissoes[perfil]`), `institucional.html` (content hub with anchors like `#bpc`, `#negativados`, `#legislacao`).

## Conventions
- All UI copy is pt-BR. Money via `Apex.brl`; confirmations via `Apex.modal`; receipts via `Apex.receipt`; feedback via `Apex.toast`.
- Escape any user-entered text with `Apex.esc` before inserting into `innerHTML`.
- Call `Apex.icons()` after rendering HTML that contains `data-lucide` icons.
- Chart.js: destroy before re-creating; create only when the canvas is visible.
- Visual language: dark slate-950, emerald-500 accent (amber accent for internal staff area), `glass` cards, rounded-2xl/3xl, compact `text-xs`.
- Legal references cite real Brazilian norms but values like the INSS teto, salário mínimo and CNPS rate are labeled as simulated.

## Non-obvious decisions
- The owner supplied the original single-file design; it was kept (CDN Tailwind, same palette and components) and split into portals rather than migrated to a framework.
- When adding persistence (Milestone 2+), use Netlify Database (Drizzle, `db/schema.ts`) and Netlify Functions; swap fixture reads for `fetch` calls while keeping the UI and `state` shape.
