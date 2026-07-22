# FlyRank Capstone Project

This repository serves as the capstone project for the **Frontend AI Engineering** track on FlyRank.

## Deployed Previews

*   **Task 7 (Next.js Application)**: [https://fly-rank-capstone.vercel.app/](https://fly-rank-capstone.vercel.app/)

## Project Overview

The objective of this track is to build high-quality, AI-assisted frontend web applications. This repository contains the source code, configurations, and documentation developed throughout the program.

## Repository Structure

```text
fly rank/
├── .gitignore          # Git exclusion rules
├── LICENSE             # MIT License details
├── README.md           # Project overview and guidelines (this file)
└── CLAUDE.md           # Developer commands, style guides, and AI assistant instructions
```

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS version)
- [Git](https://git-scm.com/)

## Getting Started

1. Clone this repository:
   ```bash
   git clone <repository-url>
   ```
2. Install dependencies (once initialized):
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## Development Conventions

Refer to [CLAUDE.md](CLAUDE.md) for details on build commands, code style, testing guidelines, and other developer conventions.

## Commit Guidelines

All commits to this repository must follow the **Conventional Commits** specification. Commits should be structured as follows:

```text
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Common Types:
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes (e.g., updates to README or CLAUDE.md)
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc.)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools/libraries
