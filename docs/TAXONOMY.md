# Documentation Taxonomy

<!-- LLM GUIDANCE
Purpose: Define the strict taxonomy for all documentation in this project.
Update triggers: When a new document category is proposed and approved.
Expected detail: Exhaustive rules for naming, categorization, and expansion.
Related files: docs/README.md, .claude/rules/documentation.md
-->

## Overview

This project uses a strict documentation taxonomy with controlled expansion. Every document has a defined category, purpose, and location. New categories require explicit approval and an update to this file.

## Document Categories

### Root Documents

Files at the repository root that provide project-wide context.

| File                  | Purpose                             | Audience          |
| --------------------- | ----------------------------------- | ----------------- |
| `CLAUDE.md`           | Claude Code context and rules       | LLM CLI           |
| `replit.md`           | Replit Agent context                | Replit Agent      |
| `AGENTS.md`           | Multi-agent behavior contract       | All AI agents     |
| `README.md`           | Project overview and setup          | Humans            |
| `CHANGELOG.md`        | Version history                     | Humans and agents |
| `SECURITY.md`         | Vulnerability reporting             | Humans            |
| `CONTRIBUTING.md`     | Contribution guidelines             | Humans            |
| `LICENSE`             | Legal terms                         | Humans            |
| `CONTENT_TAXONOMY.md` | Domain/business taxonomy (optional) | All agents        |

### Core Documentation (`docs/`)

Top-level files in `docs/` cover cross-cutting concerns.

| File              | Purpose                                    | Update Trigger                 |
| ----------------- | ------------------------------------------ | ------------------------------ |
| `README.md`       | Documentation guide and index              | When docs structure changes    |
| `ARCHITECTURE.md` | System design and component relationships  | When architecture changes      |
| `REQUIREMENTS.md` | Functional and non-functional requirements | When requirements change       |
| `ROADMAP.md`      | Prioritized feature list and milestones    | When planning changes          |
| `DECISIONS.md`    | Index of all ADRs                          | When an ADR is created         |
| `TESTING.md`      | Test strategy, tools, and patterns         | When test approach changes     |
| `DEBUGGING.md`    | Debugging guides and common issues         | When new debug patterns emerge |
| `MIGRATIONS.md`   | Database and schema migration guides       | When migrations are added      |
| `INTEGRATIONS.md` | External service integrations              | When integrations change       |
| `ENVIRONMENT.md`  | Environment variables and setup            | When env config changes        |
| `DEPLOYMENT.md`   | Deployment targets and runbooks            | When deployment changes        |
| `API.md`          | API surface documentation                  | When API endpoints change      |
| `GLOSSARY.md`     | Project-specific terminology               | When new terms are introduced  |
| `KNOWN-ISSUES.md` | Known bugs and workarounds                 | When issues are found or fixed |
| `EDGE-CASES.md`   | Documented edge cases                      | When edge cases are discovered |
| `SYNC.md`         | Notion sync workflow and conflicts         | When sync process changes      |
| `TAXONOMY.md`     | This file                                  | When taxonomy changes          |

### Initialization (`docs/initialization/`)

Files that drive the project initialization questionnaire.

| File                      | Purpose                                            |
| ------------------------- | -------------------------------------------------- |
| `INITIAL_QUESTIONS.md`    | The questionnaire with completion states           |
| `PROJECT_ANSWERS.md`      | Structured answer storage with propagation targets |
| `COMPLETION_CHECKLIST.md` | Tracks completion and propagation status           |

### ADRs (`docs/adr/`)

Architecture Decision Records.

| File                  | Purpose                                  |
| --------------------- | ---------------------------------------- |
| `README.md`           | ADR process and index                    |
| `ADR-000-template.md` | Template for new ADRs                    |
| `ADR-NNN-*.md`        | Individual decisions (created as needed) |

### Features (`docs/features/`)

Per-feature documentation with granular sub-files.

| File/Directory        | Purpose                             |
| --------------------- | ----------------------------------- |
| `README.md`           | Feature index and conventions       |
| `feature-template.md` | Canonical template for new features |
| `shared/`             | Cross-cutting feature concerns      |
| `<feature-name>/`     | Individual feature directories      |

### Feature Sub-Files

Each feature directory contains these files:

| File              | Purpose                                 |
| ----------------- | --------------------------------------- |
| `overview.md`     | What the feature does, why it exists    |
| `requirements.md` | Specific requirements for this feature  |
| `ui.md`           | UI components, layouts, interactions    |
| `api.md`          | API endpoints, request/response formats |
| `data.md`         | Data models, schemas, storage           |
| `tests.md`        | Test plan and test cases                |
| `edge-cases.md`   | Known edge cases and handling           |
| `changelog.md`    | Feature-level change history            |

## Naming Conventions

- Top-level docs: `UPPER-CASE.md` (e.g., `ARCHITECTURE.md`).
- Feature directories: `lowercase-kebab-case` (e.g., `user-auth`).
- Feature sub-files: `lowercase.md` (e.g., `overview.md`).
- ADRs: `ADR-NNN-short-description.md` (e.g., `ADR-001-use-postgres.md`).
- Shared features: `lowercase.md` matching the concern (e.g., `auth.md`).

## Controlled Expansion

To add a new document category:

1. Propose the category with its purpose, audience, and update triggers.
2. Get explicit approval from the project lead.
3. Add the category to this file.
4. Create the file with proper LLM guidance comments.
5. Update `docs/README.md` to include the new file.
6. Update cross-references in related files.

Do not create ad-hoc files outside this taxonomy.

## Multi-Service Repository Pattern

For repositories containing multiple services (microservices, monorepos with distinct applications), use a hierarchical `CLAUDE.md` pattern:

### Structure

```
root/
├── CLAUDE.md                    # Orchestrates all services
├── service-a/
│   ├── CLAUDE.md               # Service-specific rules
│   └── ...
├── service-b/
│   ├── CLAUDE.md               # Service-specific rules
│   └── ...
└── docs/
    └── TAXONOMY.md             # Documents this pattern
```

### Root `CLAUDE.md` Responsibilities

- Project-wide rules and conventions
- Service discovery and routing logic
- Cross-service integration patterns
- Global safety rules and constraints

### Service-Level `CLAUDE.md` Responsibilities

- Service-specific tooling and build processes
- Local development setup for that service
- Service-specific rules that override or extend root rules
- References to service-specific documentation

### Implementation Rules

1. Service-level `CLAUDE.md` files must include `# Service: <service-name>` as the first heading
2. Service files should reference the root `CLAUDE.md` for shared context
3. Conflicting rules: service-level takes precedence over root-level
4. Each service should maintain its own `docs/` directory following this taxonomy
