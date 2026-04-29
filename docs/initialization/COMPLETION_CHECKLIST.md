# Initialization Completion Checklist

<!-- LLM GUIDANCE
Purpose: Track overall initialization progress and gate the "initialized" status.
Update triggers: When questions are answered and answers are propagated.
Expected detail: A checklist with clear completion criteria.
Related files: docs/initialization/INITIAL_QUESTIONS.md, docs/initialization/PROJECT_ANSWERS.md
-->

## Instructions

This checklist tracks whether the project initialization is complete. The project is considered initialized only when all required sections are marked complete.

Update this file as you work through `INITIAL_QUESTIONS.md`. A section is complete when all questions in that section are marked `[x]` in `INITIAL_QUESTIONS.md` and all propagations are checked off in `PROJECT_ANSWERS.md`.

## Initialization Status: **Not Started**

Update this to "In Progress" when the first question is answered, and "Complete" when all required sections are done.

---

## Section Completion

| #   | Section                             | Status          | Required |
| --- | ----------------------------------- | --------------- | -------- |
| 1   | Project Identity                    | [ ] Not started | Yes      |
| 2   | Project Type                        | [ ] Not started | Yes      |
| 3   | Users and Business Goal             | [ ] Not started | Yes      |
| 4   | Tech Stack and Runtime              | [ ] Not started | Yes      |
| 5   | Package Manager and Testing         | [ ] Not started | Yes      |
| 6   | Deployment Target                   | [ ] Not started | Yes      |
| 7   | Documentation Granularity           | [ ] Not started | Yes      |
| 8   | Required vs. Scaffolded Files       | [ ] Not started | No       |
| 9   | Planning Source of Truth            | [ ] Not started | Yes      |
| 10  | Agent Behavior and Tool Preferences | [ ] Not started | Yes      |
| 11  | Non-Negotiable Rules                | [ ] Not started | Yes      |
| 12  | Web App / SSG / CMS                 | [ ] Not started | No       |

## Propagation Verification

After all questions are answered, verify these propagation targets are consistent:

- [ ] `CLAUDE.md` reflects all relevant answers.
- [ ] `replit.md` reflects all relevant answers.
- [ ] `AGENTS.md` reflects agent behavior preferences.
- [ ] `docs/ARCHITECTURE.md` has project type, tech stack, and database info.
- [ ] `docs/REQUIREMENTS.md` has business goal and user information.
- [ ] `docs/TESTING.md` has test framework, location, and coverage target.
- [ ] `docs/DEPLOYMENT.md` has deployment platform.
- [ ] `docs/ENVIRONMENT.md` has runtime and database info.
- [ ] `docs/SYNC.md` has planning tool and sync frequency.
- [ ] `.claude/settings.json` has allowed autonomous actions.
- [ ] `.claude/rules/code-style.md` has language-specific rules.
- [ ] `.claude/rules/safety.md` has approval requirements and banned patterns.
- [ ] `.mcp.json` has planning tool configuration (if applicable).

## Formatting and Linting Verification

After automated setup, verify these configurations are created and functional:

- [ ] `.editorconfig` exists and contains language-specific indentation rules.
- [ ] `.gitattributes` exists for consistent line endings.
- [ ] Language-specific formatter config exists (`.prettierrc.json` for JS/TS, `pyproject.toml` for Python).
- [ ] Language-specific linter config exists (`.eslintrc.json` for JS/TS, Ruff config in `pyproject.toml` for Python).
- [ ] `.vscode/settings.json` exists with format-on-save and language-specific formatter settings.
- [ ] `.vscode/extensions.json` exists with recommended extensions for the chosen language.
- [ ] `.vscode/tasks.json` exists with project-wide formatting tasks.
- [ ] Package scripts or Makefile exists with `format`, `lint`, and `lint:fix` commands.
- [ ] Formatter runs without errors (test with `npm run format` or `make format`).
- [ ] Linter runs without errors (test with `npm run lint` or `make lint`).
- [ ] VS Code workspace picks up formatting settings correctly.
- [ ] `.claude/rules/code-style.md` updated with specific tool names and configurations.

## CMS / Cloudflare Verification

Run these checks only when Section 12 was completed (Q12.1 = yes).

### Cloudflare Pages (Q6.1 = Cloudflare Pages)

- [ ] `wrangler.toml` exists at the project root with `name` set to the project name.
- [ ] `worker.ts` exists at the project root.
- [ ] `.dev.vars.example` exists (and `.dev.vars` is in `.gitignore`).
- [ ] `.github/workflows/deploy.yml` and `.github/workflows/build.yml` exist.
- [ ] `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` set in GitHub Secrets.
- [ ] `npx wrangler pages project create <project-name>` was run once.

### Ghost CMS (Q12.4 = Ghost)

- [ ] `docker-compose.yml` exists at the project root with the correct container names.
- [ ] `ghost/.env.example` exists; `ghost/.env` is in `.gitignore`.
- [ ] `personal` Docker network created on the VPS: `docker network create personal`.
- [ ] `.github/workflows/deploy-ghost.yml` and `.github/workflows/content-sync.yml` exist.
- [ ] Self-hosted GitHub Actions runner installed on the VPS.
- [ ] Ghost Content API key added to GitHub Secrets as `GHOST_CONTENT_API_KEY`.
- [ ] Cloudflare Tunnel configured to route `ghost.<domain>` to the Ghost container (Q12.7 = yes).
- [ ] `CONTENT_TAXONOMY.md` reflects the Ghost tag-prefix taxonomy (replaces the scaffolded version).
- [ ] Normalizer files copied into the SSG project directory.

### SSG (Q12.3)

- [ ] SSG scaffolder run by the user (e.g., `yarn create astro`).
- [ ] Cloudflare/Ghost integration snippets merged where applicable.

## Post-Initialization Tasks

After initialization is complete:

- [ ] Remove SCAFFOLDED markers from files that were filled in.
- [ ] Mark unused scaffolded files as "not applicable" per Q7.2 and Q8.1.
- [ ] Create the first real ADR if any architectural decisions were made during initialization.
- [ ] Run `/review-feature` on any features defined during initialization.
- [ ] Run `/sync-notion` if Notion is the planning source of truth.
