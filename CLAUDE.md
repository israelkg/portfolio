# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

## Tech Stack

- **React 19** + **React Router DOM 7** (BrowserRouter)
- **Tailwind CSS 4** via Vite plugin (utility-first, dark mode via `.dark` class on root)
- **Framer Motion 12** — page transition animations
- **Swiper 12** — image carousel on project detail pages
- **Lucide React** + **React Icons** — icon libraries

## Architecture

**Entry point flow:**
`main.jsx` → wraps app in `ThemeProvider` + `BrowserRouter` → `App.jsx` renders `<NavBar>`, `<AnimatedRoutes>`, `<Footer>`

**Routes** (defined in `src/components/AnimatedRoutes.jsx`):
- `/` → `src/pages/Home.jsx` — stacks all sections: Hero → TechCarousel → About → Projects → Contact
- `/projetos/:projectId` → `src/pages/ProjectDetail.jsx` — looks up project by `id` from `projectList`

**Data layer** — `src/data/projects.jsx` is the single source of truth:
- `projectList`: array of project objects with fields `id`, `title`, `img` (string or array), `link`, `repoFrontend`, `repoBackend`, `desc1`, `desc2`, `tech[]`, `status` (`"Concluído"` | `"Em desenvolvimento"`)
- `techIcons`: maps technology name strings to React icon components used in `ProjectDetail`

**Theme** — `src/context/ThemeContext.jsx` exposes `useTheme()` (returns `{ theme, toggleTheme }`). Persists to `localStorage`, defaults to `'dark'`. Toggles `.dark` class on `document.documentElement`.

**Page transitions** — `AnimatedRoutes.jsx` wraps routes in `AnimatePresence` (mode `"wait"`) with slide + opacity motion (0.4s). When adding new routes, follow the existing `motion.div` pattern.

**Project detail carousel** — uses Swiper with Navigation, Pagination, and Autoplay (4s) modules. When `img` is a string (single image), wrap it in an array before passing to Swiper.

## Adding a New Project

1. Add an entry to `projectList` in `src/data/projects.jsx` with a unique `id`.
2. If the project uses a new technology, add it to `techIcons` in the same file.
3. Place carousel images in `src/assets/carrosel/<project-slug>/`.
