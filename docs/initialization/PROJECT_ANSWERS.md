# Project Answers

<!-- LLM GUIDANCE
Purpose: Store the answers to the initialization questionnaire with propagation tracking.
Update triggers: When a question is answered or an answer is refined during initialization.
Expected detail: The exact answer given, plus a record of which destination files have been updated.
Related files: docs/initialization/INITIAL_QUESTIONS.md, docs/initialization/COMPLETION_CHECKLIST.md
-->

## Instructions

This file stores the answers to each question in `INITIAL_QUESTIONS.md`. For each answer, track:

- The answer text.
- The list of destination files.
- Which destination files have been updated (checked off).

Do not mark a question as complete in `INITIAL_QUESTIONS.md` until all destination files listed here are checked off.

---

## Section 1: Project Identity

### A1.1: Project name

- **Answer**: reign-in-hell-companion
- **Display name**: Reign in Hell Companion
- **Propagated to**:
  - [x] `README.md`
  - [x] `CLAUDE.md`
  - [ ] `replit.md` (removed - not using Replit)
  - [x] `docs/ARCHITECTURE.md`
  - [ ] `package.json` (will be created later when setting up Expo)

### A1.2: One-sentence description

- **Answer**: Cross-platform companion app for managing cabals, campaigns, and battles in the Reign in Hell tabletop game.
- **Propagated to**:
  - [x] `README.md` 
  - [x] `CLAUDE.md`
  - [ ] `replit.md` (removed - not using Replit)

---

## Section 2: Project Type

### A2.1: Project type

- **Answer**: Mobile app (with web build), single repo for v1, monorepo on the roadmap
- **Propagated to**:
  - [x] `CLAUDE.md`
  - [ ] `replit.md` (removed - not using Replit)
  - [x] `docs/ARCHITECTURE.md`

### A2.2: Monorepo structure

- **Answer**: [Skipped - not a monorepo in v1]
- **Propagated to**:
  - [x] `docs/ARCHITECTURE.md` (not applicable)
  - [x] `CLAUDE.md` (not applicable)

---

## Section 3: Users and Business Goal

### A3.1: Target users

- **Answer**: Reign in Hell tabletop players running games solo or at the table
- **Propagated to**:
  - [x] `docs/REQUIREMENTS.md`
  - [x] `README.md`

### A3.2: Business goal

- **Answer**: Reduce paper/spreadsheet overhead. Track cabal rosters, soul currency, demon advancement, and per-battle state so play stays fast and persistent.
- **Propagated to**:
  - [x] `docs/REQUIREMENTS.md`
  - [x] `docs/ARCHITECTURE.md`

---

## Section 4: Tech Stack and Runtime

### A4.1: Primary language

- **Answer**: TypeScript
- **Propagated to**:
  - [x] `CLAUDE.md`
  - [ ] `replit.md` (removed)
  - [ ] `.claude/rules/code-style.md` (will update during formatting setup)

### A4.2: Framework

- **Answer**: React Native + Expo (Expo Router for navigation, React Native Web for browser build)
- **Propagated to**:
  - [x] `CLAUDE.md`
  - [ ] `replit.md` (removed)
  - [x] `docs/ARCHITECTURE.md`

### A4.3: Runtime

- **Answer**: Node.js 20 LTS
- **Propagated to**:
  - [x] `CLAUDE.md` (implicitly in tech stack)
  - [ ] `replit.md` (removed)
  - [x] `docs/ENVIRONMENT.md`

### A4.4: Database

- **Answer**: SQLite (local, via `expo-sqlite` + Drizzle ORM) with sync-ready schema (UUID PKs, `created_at`/`updated_at`/`deleted_at`/`version`). No remote DB in v1
- **Propagated to**:
  - [x] `docs/ARCHITECTURE.md` (implicitly in component diagram)
  - [ ] `docs/MIGRATIONS.md` (will mark as not applicable)
  - [x] `docs/ENVIRONMENT.md` (implicitly mentioned SQLite)

---

## Section 5: Package Manager and Testing

### A5.1: Package manager

- **Answer**: pnpm
- **Propagated to**:
  - [x] `CLAUDE.md` (implicitly in tech stack)
  - [ ] `replit.md` (removed)
  - [x] `docs/ENVIRONMENT.md`

### A5.2: Test framework

- **Answer**: Vitest (domain/unit tests) + React Native Testing Library (component tests)
- **Propagated to**:
  - [ ] `docs/TESTING.md`
  - [ ] `.claude/rules/testing.md`

### A5.3: Test file location

- **Answer**: Co-located (`*.test.ts` next to source)
- **Propagated to**:
  - [ ] `docs/TESTING.md`
  - [ ] `.claude/rules/testing.md`

### A5.4: Coverage target

- **Answer**: 70% on `src/domain/` (the portable core); no hard target elsewhere
- **Propagated to**:
  - [ ] `docs/TESTING.md`

---

## Section 6: Deployment Target

### A6.1: Deployment platform

- **Answer**: Cloudflare Pages (web build) + Expo EAS (native builds)
- **Propagated to**:
  - [ ] `docs/DEPLOYMENT.md`
  - [ ] `docs/ENVIRONMENT.md`
  - [ ] `replit.md` (removed)

### A6.2: CI/CD

- **Answer**: GitHub Actions
- **Propagated to**:
  - [ ] `.github/workflows/`
  - [ ] `docs/DEPLOYMENT.md`

---

## Section 7: Documentation Granularity

### A7.1: Feature documentation level

- **Answer**: Standard (overview + requirements + tests per feature)
- **Propagated to**:
  - [ ] `docs/features/README.md`
  - [ ] `docs/TAXONOMY.md`

### A7.2: Scaffolded files to prune

- **Answer**: Mark `docs/MIGRATIONS.md` as not applicable (local SQLite only), `docs/API.md` as not applicable (no backend API yet). Keep scaffolded
- **Propagated to**:
  - [ ] Affected files (marked as "not applicable")

---

## Section 8: Required vs. Scaffolded Files

### A8.1: Active files

- **Answer**: [Not yet answered]
- **Propagated to**:
  - [ ] Affected files (scaffolded markers removed, content filled)

---

## Section 9: Planning Source of Truth

### A9.1: Planning tool

- **Answer**: GitHub Issues primary; Notion for higher-level planning (you have the MCP wired)
- **Propagated to**:
  - [ ] `docs/SYNC.md`
  - [ ] `CLAUDE.md`
  - [ ] `.mcp.json`

### A9.2: Notion workspace

- **Answer**: [Will be configured later when needed]
- **Propagated to**:
  - [ ] `.mcp.json` (placeholder is acceptable for now)
  - [ ] `docs/SYNC.md`

### A9.3: Sync frequency

- **Answer**: On-demand (`/sync-notion`)
- **Propagated to**:
  - [ ] `docs/SYNC.md`

---

## Section 10: Agent Behavior and Tool Preferences

### A10.1: Primary AI tool

- **Answer**: Claude Code only
- **Propagated to**:
  - [ ] `CLAUDE.md`
  - [ ] `replit.md` (removed)
  - [ ] `AGENTS.md`

### A10.2: Approval requirements

- **Answer**: Defaults (commits, pushes, destructive changes require approval)
- **Propagated to**:
  - [ ] `.claude/rules/safety.md`
  - [ ] `CLAUDE.md`

### A10.3: Allowed autonomous actions

- **Answer**: Read files, run tests, lint, format, file and code analysis
- **Propagated to**:
  - [ ] `.claude/settings.json`
  - [ ] `CLAUDE.md`

---

## Section 11: Non-Negotiable Rules

### A11.1: Writing rules

- **Answer**: Defaults from existing `.claude/rules/` (no extra writing/coding bans)
- **Propagated to**:
  - [x] `.claude/rules/safety.md` (no changes needed)
  - [x] `.claude/rules/code-style.md` (no changes needed)

### A11.2: Coding rules

- **Answer**: Defaults from existing `.claude/rules/` (no extra writing/coding bans)  
- **Propagated to**:
  - [x] `.claude/rules/code-style.md` (no changes needed)
  - [x] `CLAUDE.md` (no changes needed)

### A11.3: Banned patterns

- **Answer**: Defaults from existing `.claude/rules/` (no extra writing/coding bans)
- **Propagated to**:
  - [x] `.claude/rules/code-style.md` (no changes needed)
  - [x] `.claude/rules/safety.md` (no changes needed)

---

## Section 12: Web App, Static Site Generator, and CMS (Optional)

### A12.1: Web app for content display

- **Answer**: Yes (web build of the companion is part of v1)
- **Propagated to**:
  - [x] `CLAUDE.md` (implicitly in project description)
  - [x] `docs/ARCHITECTURE.md` (web build mentioned)

### A12.2: Static site generation

- **Answer**: No. Companion web is a dynamic SPA via React Native Web, not a static site. The future Astro landing page is a separate Section-12 pass post-monorepo migration.
- **Propagated to**:
  - [x] `docs/ARCHITECTURE.md` (SPA architecture explained)
  - [x] `CLAUDE.md` (not relevant for v1)

### A12.3: SSG choice

- **Answer**: [Skipped (no SSG in v1)]
- **Propagated to**:
  - [x] `docs/ARCHITECTURE.md` (not applicable)
  - [x] `CLAUDE.md` (not applicable)
  - [x] `package.json` (not applicable - Expo setup)

### A12.4: Headless CMS

- **Answer**: None in v1
- **Propagated to**:
  - [x] `docs/INTEGRATIONS.md` (not applicable)
  - [x] `docs/ARCHITECTURE.md` (not applicable)
  - [x] `CONTENT_TAXONOMY.md` (not applicable)

### A12.5: Production domain

- **Answer**: [Skipped (no CMS in v1)]
- **Propagated to**:
  - [x] `wrangler.toml` (not applicable)
  - [x] `ghost/.env` (not applicable)
  - [x] `docs/DEPLOYMENT.md` (not applicable)

### A12.6: Docker container prefix

- **Answer**: [Skipped (no CMS in v1)]
- **Propagated to**:
  - [x] `docker-compose.yml` (not applicable)
  - [x] `Makefile` (not applicable)

### A12.7: Cloudflare Tunnel and Cloudflare Access for Ghost

- **Answer**: [Skipped (no CMS in v1)]
- **Propagated to**:
  - [x] `worker.ts` (not applicable)
  - [x] `config-templates/ghost-cms/secrets.md` (not applicable)
