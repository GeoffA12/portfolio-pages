# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Start dev server at localhost:3000
npm run build      # Production build
npm test           # Run tests (Jest + React Testing Library)
npm run deploy     # Build + deploy to GitHub Pages (GeoffA12.github.io/portfolio-pages)
```

To run a single test file:
```bash
npm test -- --testPathPattern=<filename>
```

## Architecture

This is a React 16 single-page portfolio site deployed to GitHub Pages. Routing uses `react-router-dom` v5 with the base path `/portfolio-pages`.

**Routes** (defined in `src/App.js`):
- `/portfolio-pages` → `Landing`
- `/aboutMe` → `AboutMe`
- `/experience` → `Experience`

**Shared styling** lives in `src/common/styles/SharedStyles.js` — a `makeStyles` hook (`sharedStyles`) exporting reusable MUI class names (`headerText`, `headerTextContainer`, `paperTextContainer`, `paperText`). Always import this rather than duplicating styles.

**Component hierarchy for the Experience page:**
- `Experience` — owns the data arrays and calls `normalizeProjectImageData()` to chunk them into rows of 3
- `CardRow` — renders a row, switches between `ProjectCard` (clickable image + label) and `ExperienceCard` (tech logo grid) based on `cardType` prop

**Styling approach:** Material UI v4 (`@material-ui/core`) with `makeStyles`/`useStyles` throughout. No CSS modules or styled-components. Color palette centers on `#324a54` (dark teal card backgrounds). Font families are `Quicksand` (headings) and `Roboto` (body).

**Navigation:** `PrimaryAppBar` (`src/common/components/PrimaryAppBar.js`) renders a persistent top bar with a drawer (`MenuButton`) for page navigation and a home `IconButton` linking to `/portfolio-pages`.

## Agent skills

### Issue tracker

Issues live in GitHub Issues (`GeoffA12/portfolio-pages`). See `docs/agents/issue-tracker.md`.

### Triage labels

Default canonical label strings (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). See `docs/agents/triage-labels.md`.

### Domain docs

Single-context repo — `CONTEXT.md` + `docs/adr/` at the repo root. See `docs/agents/domain.md`.
