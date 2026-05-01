# Context: portfolio-pages

A React single-page portfolio site deployed to GitHub Pages.

## Migration Order

**PR A** (tooling): Vitest + `npm test`, `tsconfig.json`, `vite.config.ts`, `setupTests.ts`
**PR B** (shared): `SharedStyles.ts` + `serviceWorker.ts`
**PR C** (experience feature): `ExperienceCard.tsx` + `ProjectCard.tsx` + `CardRow.tsx` + `Experience.tsx`
**PR D** (other pages + nav): `Landing.tsx` + `AboutMe.tsx` + `MenuButton.tsx` + `PrimaryAppBar.tsx`
**PR E** (entry points): `App.tsx` + `index.tsx`

## Glossary

### ESLint
Configured via flat config (`eslint.config.mjs`). Uses typescript-eslint's `recommendedTypeChecked` + `strictTypeChecked` presets (not `stylistic` — Prettier owns formatting; `stylistic` adds cosmetic noise without substantive value). Type-aware linting is enabled via a `tsconfig.eslint.json` that extends the main `tsconfig.json` and adds root config files. `eslint-config-prettier` is applied last to disable rules that conflict with Prettier. Prettier runs as a standalone script (`format:check`) — not as an ESLint rule — keeping lint and formatting concerns independent. All lint and formatting violations are fixed upfront in the same PR that introduces the tooling — no baseline suppression files. Verification gate updated to: `npm run build && tsc --noEmit && npm test -- --run && npm run lint && npm run format:check`. ESLint config also includes `eslint-plugin-react` and `eslint-plugin-react-hooks` (for `rules-of-hooks` and `exhaustive-deps`).

### PropTypes
Removed when each file is converted. Replaced with a TypeScript `interface Props { ... }`. No runtime validation needed — this is a standalone portfolio site with no external consumers.

### TypeScript Migration Strategy
Incremental migration from JavaScript to TypeScript using `allowJs: true`. Files are converted one at a time — leaf components (no dependents) first, working inward toward `App.js` and `index.js` last. The project must remain buildable after every converted file. Verification gate after each file: `npm run build && tsc --noEmit && npm test`. Vitest is added as the first step before any file conversions begin. TypeScript strictness: `"strict": true` from the start. Temporary `any` annotations are allowed as escape hatches only when marked with `// TODO: remove any`. `allowJs: true` is removed in PR E once the last JS file is converted. File extension convention: `.tsx` for files containing JSX, `.ts` for pure TypeScript (utilities, styles, config).
