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
Deferred to a follow-up issue. A `// TODO: add ESLint + @typescript-eslint` comment will be left in `vite.config.ts` as a reminder. `tsc --noEmit` is the only static analysis gate during the migration.

### PropTypes
Removed when each file is converted. Replaced with a TypeScript `interface Props { ... }`. No runtime validation needed — this is a standalone portfolio site with no external consumers.

### TypeScript Migration Strategy
Incremental migration from JavaScript to TypeScript using `allowJs: true`. Files are converted one at a time — leaf components (no dependents) first, working inward toward `App.js` and `index.js` last. The project must remain buildable after every converted file. Verification gate after each file: `npm run build && tsc --noEmit && npm test`. Vitest is added as the first step before any file conversions begin. TypeScript strictness: `"strict": true` from the start. Temporary `any` annotations are allowed as escape hatches only when marked with `// TODO: remove any`. `allowJs: true` is removed in PR E once the last JS file is converted. File extension convention: `.tsx` for files containing JSX, `.ts` for pure TypeScript (utilities, styles, config).
