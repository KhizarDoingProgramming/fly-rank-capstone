
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
