# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start           # Start dev server at localhost:3000 (Vite)
npm run build       # Production build (runs typecheck + lint + format:check first)
npm run preview     # Preview production build locally
npm test            # Run tests (Vitest + React Testing Library)
npm run typecheck   # TypeScript type-check without emitting
npm run lint        # ESLint (src/)
npm run lint:fix    # ESLint with auto-fix
npm run format      # Prettier write
npm run format:check  # Prettier check (CI)
npm run deploy      # Build + deploy to GitHub Pages (GeoffA12.github.io/portfolio-pages)
```

To run a single test file:
```bash
npx vitest run src/path/to/File.test.tsx
```

## Architecture

This is a **React 18** single-page portfolio site built with **Vite**, fully written in **TypeScript**, deployed to GitHub Pages. Routing uses `react-router-dom` v7.

**Routes** (defined in `src/App.tsx`):
- `/` → `Landing`
- `/aboutMe` → `AboutMe`
- `/experience` → `Experience`

**Shared styling** lives in `src/common/styles/SharedStyles.ts` — exports named `SxProps<Theme>` constants (`headerTextContainerSx`, `paperTextContainerSx`, `headerTextSx`, `paperTextSx`). Always import these rather than duplicating `sx` props.

**Component hierarchy for the Experience page:**
- `Experience` — owns the data arrays and calls `normalizeProjectImageData()` to chunk them into rows of 3
- `CardRow` — renders a row, switches between `ProjectCard` (clickable image + label) and `ExperienceCard` (tech logo grid) based on `cardType` prop

**Styling approach:** **MUI v5** (`@mui/material` + `@emotion`) with the `sx` prop throughout. No CSS modules, styled-components, or `makeStyles`. Color palette centers on `#324a54` (dark teal card backgrounds). Font families are `Quicksand` (headings) and `Roboto` (body).

**Navigation:** `PrimaryAppBar` (`src/common/components/PrimaryAppBar.tsx`) renders a persistent top bar with a drawer (`MenuButton`) for page navigation and a home `IconButton` linking to `/`.

## Agent skills

### Issue tracker

Issues live in GitHub Issues (`GeoffA12/portfolio-pages`). See `docs/agents/issue-tracker.md`.

### Triage labels

Default canonical label strings (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). See `docs/agents/triage-labels.md`.

### Domain docs

Single-context repo — `CONTEXT.md` + `docs/adr/` at the repo root. See `docs/agents/domain.md`.
