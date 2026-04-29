# Project Initialization Questionnaire

<!-- LLM GUIDANCE
Purpose: Define the required questions that must be answered before the project is considered initialized.
Update triggers: Rarely. Only when the initialization process itself changes.
Expected detail: Each question must specify completion state, destination files, and validation criteria.
Related files: docs/initialization/PROJECT_ANSWERS.md, docs/initialization/COMPLETION_CHECKLIST.md, .claude/commands/initialize-project.md
-->

## Instructions

This questionnaire must be completed before the project is considered initialized. The LLM CLI should walk through these questions using the `/initialize-project` command.

### Completion States

- `[ ]` Not answered.
- `[-]` Partially answered (some sub-questions remain or the answer needs refinement).
- `[x]` Fully answered and propagated to all destination files.

A question may be marked `[x]` only when:

1. The answer is fully and specifically provided (not vague or partial).
2. The answer has been written to all destination files listed for that question.

---

## Section 1: Project Identity

### Q1.1: Project name

- [ ] What is the project name?
- **Destination files**: `README.md`, `CLAUDE.md`, `replit.md`, `docs/ARCHITECTURE.md`, `package.json` (or equivalent)
- **Validation**: Must be a valid package/repository name (lowercase, hyphens allowed, no spaces).

### Q1.2: One-sentence description

- [ ] Describe the project in one sentence.
- **Destination files**: `README.md`, `CLAUDE.md`, `replit.md`
- **Validation**: One sentence, under 120 characters.

---

## Section 2: Project Type

### Q2.1: Project type

- [ ] What type of project is this? (e.g., web app, API, SaaS, monorepo, mobile backend, CLI tool, library, other)
- **Destination files**: `CLAUDE.md`, `replit.md`, `docs/ARCHITECTURE.md`
- **Validation**: Must match a recognized type or provide a clear custom description.

### Q2.2: Monorepo structure

- [ ] If this is a monorepo, what are the workspace names and their purposes?
- **Destination files**: `docs/ARCHITECTURE.md`, `CLAUDE.md`
- **Validation**: Skip if not a monorepo. Otherwise, list each workspace.
- **Condition**: Only required if Q2.1 answer is "monorepo".

---

## Section 3: Users and Business Goal

### Q3.1: Target users

- [ ] Who are the target users? (e.g., developers, end consumers, internal team, B2B customers)
- **Destination files**: `docs/REQUIREMENTS.md`, `README.md`
- **Validation**: At least one user type with a brief description.

### Q3.2: Business goal

- [ ] What is the primary business goal? What problem does this solve?
- **Destination files**: `docs/REQUIREMENTS.md`, `docs/ARCHITECTURE.md`
- **Validation**: A specific, measurable goal, not a vague aspiration.

---

## Section 4: Tech Stack and Runtime

### Q4.1: Primary language

- [ ] What is the primary programming language?
- **Destination files**: `CLAUDE.md`, `replit.md`, `.claude/rules/code-style.md`
- **Validation**: Must be a specific language (e.g., "TypeScript", not "JavaScript or TypeScript").

### Q4.2: Framework

- [ ] What framework(s) will be used? (e.g., Next.js, Express, FastAPI, Django, Rails)
- **Destination files**: `CLAUDE.md`, `replit.md`, `docs/ARCHITECTURE.md`
- **Validation**: Specific framework with version if known.

### Q4.3: Runtime

- [ ] What runtime environment? (e.g., Node.js 20, Python 3.12, Go 1.22)
- **Destination files**: `CLAUDE.md`, `replit.md`, `docs/ENVIRONMENT.md`
- **Validation**: Runtime with minimum version.

### Q4.4: Database

- [ ] What database(s) will be used? (e.g., PostgreSQL, MongoDB, SQLite, none)
- **Destination files**: `docs/ARCHITECTURE.md`, `docs/MIGRATIONS.md`, `docs/ENVIRONMENT.md`
- **Validation**: Specific database or "none".

---

## Section 5: Package Manager and Testing

### Q5.1: Package manager

- [ ] What package manager? (e.g., npm, pnpm, yarn, pip, poetry, cargo)
- **Destination files**: `CLAUDE.md`, `replit.md`, `docs/ENVIRONMENT.md`
- **Validation**: Must be specific.

### Q5.2: Test framework

- [ ] What test framework? (e.g., Jest, Vitest, pytest, Go testing)
- **Destination files**: `docs/TESTING.md`, `.claude/rules/testing.md`
- **Validation**: Must be specific.

### Q5.3: Test file location

- [ ] Where should test files live? (co-located with source, or in a separate `tests/` directory)
- **Destination files**: `docs/TESTING.md`, `.claude/rules/testing.md`
- **Validation**: One of the two options.

### Q5.4: Coverage target

- [ ] What is the target code coverage percentage? (e.g., 80%, or "no hard target")
- **Destination files**: `docs/TESTING.md`
- **Validation**: A percentage or explicit opt-out.

---

## Section 6: Deployment Target

### Q6.1: Deployment platform

- [ ] Where will this be deployed? (e.g., Vercel, AWS, GCP, Fly.io, Heroku, self-hosted, Replit)
- **Destination files**: `docs/DEPLOYMENT.md`, `docs/ENVIRONMENT.md`, `replit.md`
- **Validation**: Specific platform.

### Q6.2: CI/CD

- [ ] What CI/CD system? (e.g., GitHub Actions, GitLab CI, none yet)
- **Destination files**: `.github/workflows/`, `docs/DEPLOYMENT.md`
- **Validation**: Specific system or "none yet".

---

## Section 7: Documentation Granularity

### Q7.1: Feature documentation level

- [ ] What level of feature documentation granularity? (full: all 8 sub-files per feature, standard: overview + requirements + tests, minimal: overview only)
- **Destination files**: `docs/features/README.md`, `docs/TAXONOMY.md`
- **Validation**: One of: full, standard, minimal.

### Q7.2: Scaffolded files to prune

- [ ] Are there any scaffolded doc files that are definitely not needed? (e.g., MIGRATIONS.md if no database, API.md if no API)
- **Destination files**: The files themselves (mark as "not applicable" rather than deleting)
- **Validation**: List of files or "keep all".

---

## Section 8: Required vs. Scaffolded Files

### Q8.1: Active files

- [ ] Which scaffolded files should be filled in immediately? (beyond those auto-populated from other answers)
- **Destination files**: The files themselves
- **Validation**: List of file names.

---

## Section 9: Planning Source of Truth

### Q9.1: Planning tool

- [ ] What is the planning source of truth? (e.g., Notion, Linear, GitHub Issues, this repo only)
- **Destination files**: `docs/SYNC.md`, `CLAUDE.md`, `.mcp.json`
- **Validation**: Specific tool.

### Q9.2: Notion workspace

- [ ] If Notion, what is the workspace name and relevant database IDs?
- **Destination files**: `.mcp.json`, `docs/SYNC.md`
- **Validation**: Skip if not Notion. Otherwise, provide workspace details.
- **Condition**: Only required if Q9.1 answer includes Notion.

### Q9.3: Sync frequency

- [ ] How often should planning sync occur? (e.g., before each feature, daily, on-demand)
- **Destination files**: `docs/SYNC.md`
- **Validation**: Specific frequency.

---

## Section 10: Agent Behavior and Tool Preferences

### Q10.1: Primary AI tool

- [ ] What is the primary LLM CLI? (e.g., Claude Code, Replit Agent, both)
- **Destination files**: `CLAUDE.md`, `replit.md`, `AGENTS.md`
- **Validation**: Must be specific.

### Q10.2: Approval requirements

- [ ] What actions require explicit approval? (defaults: commits, pushes, destructive changes, dependency additions)
- **Destination files**: `.claude/rules/safety.md`, `CLAUDE.md`
- **Validation**: List of actions or "use defaults".

### Q10.3: Allowed autonomous actions

- [ ] What actions can the LLM CLI take without asking? (e.g., read files, run tests, lint, format)
- **Destination files**: `.claude/settings.json`, `CLAUDE.md`
- **Validation**: List of actions.

---

## Section 11: Non-Negotiable Rules

### Q11.1: Writing rules

- [ ] Any project-specific writing rules beyond the defaults? (defaults: no em dashes, imperative voice, direct language)
- **Destination files**: `.claude/rules/safety.md`, `.claude/rules/code-style.md`
- **Validation**: List of rules or "use defaults".

### Q11.2: Coding rules

- [ ] Any project-specific coding rules beyond the defaults? (e.g., no classes, functional only, specific patterns)
- **Destination files**: `.claude/rules/code-style.md`, `CLAUDE.md`
- **Validation**: List of rules or "use defaults".

### Q11.3: Banned patterns

- [ ] Are there any patterns, libraries, or approaches that are explicitly banned?
- **Destination files**: `.claude/rules/code-style.md`, `.claude/rules/safety.md`
- **Validation**: List of banned items or "none".

---

## Section 12: Web App, Static Site Generator, and CMS (Optional)

This section is optional. Skip the entire section if Q12.1 = no. All sub-questions are gated by prior answers as noted.

### Q12.1: Web app for content display

- [ ] Does this project need a web app to display content (blog posts, articles, project pages)?
- **Destination files**: `CLAUDE.md`, `docs/ARCHITECTURE.md`
- **Validation**: yes or no.

### Q12.2: Static site generation

- [ ] Should the web app be a static site (built ahead of time, no server-side rendering at request time)?
- **Destination files**: `docs/ARCHITECTURE.md`, `CLAUDE.md`
- **Validation**: yes, no, or dynamic-only.
- **Condition**: Skip if Q12.1 = no.

### Q12.3: SSG choice

- [ ] Which static site generator? (Astro, Hugo, Eleventy, Next.js static export, other)
- **Destination files**: `docs/ARCHITECTURE.md`, `CLAUDE.md`, `package.json` (or equivalent)
- **Validation**: One of the listed options or a specific custom name.
- **Condition**: Skip if Q12.2 != yes.

### Q12.4: Headless CMS

- [ ] Does this project need a headless CMS for content authoring? (none, Ghost, Strapi, Contentful, WordPress, other)
- **Destination files**: `docs/INTEGRATIONS.md`, `docs/ARCHITECTURE.md`, `CONTENT_TAXONOMY.md`
- **Validation**: One of the listed options.
- **Condition**: Skip if Q12.1 = no.

### Q12.5: Production domain

- [ ] What is the production domain? Used to derive `ghost.<domain>` and Worker route.
- **Destination files**: `wrangler.toml`, `ghost/.env`, `docs/DEPLOYMENT.md`
- **Validation**: A valid hostname (e.g., `example.com`).
- **Condition**: Skip unless Q12.4 = Ghost.

### Q12.6: Docker container prefix

- [ ] What container prefix should Ghost services use? (e.g., `myproject` -> `myproject-ghost`, `myproject-db`)
- **Destination files**: `docker-compose.yml`, `Makefile`
- **Validation**: Lowercase, hyphens allowed, no spaces.
- **Condition**: Skip unless Q12.4 = Ghost.

### Q12.7: Cloudflare Tunnel and Cloudflare Access for Ghost

- [ ] Should Ghost be protected behind Cloudflare Tunnel and Cloudflare Access? (recommended for production)
- **Destination files**: `worker.ts` (CF Access header block in `worker-with-api.ts`), `secrets.md`
- **Validation**: yes or no.
- **Condition**: Skip unless Q12.4 = Ghost.
