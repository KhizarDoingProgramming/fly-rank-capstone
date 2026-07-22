
# Claude Developer Guide - FlyRank Capstone

This guide outlines the commands, conventions, and style preferences for the FlyRank Frontend AI Engineering Capstone project.

## Build & Test Commands

As the project scales, utilize these standard commands:

- **Development Server**: `npm run dev`
- **Build Production**: `npm run build`
- **Preview Production**: `npm run preview`
- **Lint Code**: `npm run lint` or `npx eslint .`
- **Format Code**: `npx prettier --write .`
- **Run Tests**: `npm test` or `npm run test`

## Stack & Technologies

- **Frontend Core**: HTML5, CSS3, ES6+ JavaScript / TypeScript
- **Framework**: React / Next.js or Vite (as requested)
- **Styling**: Vanilla CSS, HSL colors, responsive flex/grid layouts. Avoid TailwindCSS unless explicitly requested.
- **AI Tooling**: Antigravity, Claude Code, Cursor

## Code Style & Conventions

- **Component Design**:
  - Prefer functional components with React Hooks.
  - Keep components modular, focused, and reusable.
  - Group related components under `components/` subdirectories.
- **State Management**:
  - Keep state localized where possible.
  - Use React Context or Zustand for global/shared state.
- **Naming Conventions**:
  - Files: `PascalCase` for React components (e.g., `Button.jsx`), `kebab-case` for utility files or assets.
  - Variables/Functions: `camelCase`.
  - Constants: `UPPER_SNAKE_CASE`.
- **Styling Guidelines**:
  - Implement curated, harmonious color palettes (avoid default colors).
  - Use modern typography (e.g., Inter, Roboto, Outfit via Google Fonts).
  - Apply smooth transitions and micro-animations for hover and active states.
  - Implement full responsiveness with custom media queries.

## Project Rules & Guidelines (Learned from Task 5)

- **Forms and Accessibility**:
  - Always link form labels to their inputs using matching `htmlFor` and `id`.
  - Set `aria-invalid` to `true` on inputs containing validation errors, and bind input elements to their error message spans using `aria-describedby`.
- **Domain Validation**:
  - Any critical integrations (such as Calendly links for booking scheduler redirects) must be strictly validated against domain-specific regular expressions (e.g., `^https?:\/\/(www\.)?calendly\.com\/`) rather than allowing generic URLs.
- **Testing with Fake Timers**:
  - When using Vitest fake timers (`vi.useFakeTimers()`), wrap any clock advancement (`vi.advanceTimersByTime`) in React's `act()` function.
  - Do not use asynchronous `waitFor` helper utilities in tests with active fake timers; instead, perform assertions synchronously right after advancing the timer.
