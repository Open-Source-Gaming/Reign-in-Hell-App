# Features

<!-- LLM GUIDANCE
Purpose: Index all feature directories and define conventions for feature documentation.
Update triggers: When a feature is added, removed, or renamed.
Expected detail: One line per feature with status and link.
Related files: docs/TAXONOMY.md, docs/features/feature-template.md, docs/ROADMAP.md
-->

## Overview

Each feature gets its own directory under `docs/features/`. Cross-cutting concerns that span multiple features live in `docs/features/shared/`.

### Multi-Service Repository Pattern

For multi-service repositories, features can exist at three tiers:

1. **Cross-service features** (`docs/features/`) - Features that span multiple services
2. **Per-service features** (`<service>/docs/features/`) - Features specific to one service
3. **Shared components** (`docs/features/shared/`) - Reusable components across features/services

#### Linkage Rules

- Cross-service features MUST reference all implementing services
- Per-service features MUST link to related cross-service features (if any)
- Shared components MUST list all features/services that depend on them
- All linkage must be bidirectional (if A links to B, B must link back to A)

## Feature Index

| Feature           | Status  | Directory                               |
| ----------------- | ------- | --------------------------------------- |
| \_example-feature | Example | [\_example-feature/](_example-feature/) |

## Shared Concerns

| Concern        | File                                           | Used By                       |
| -------------- | ---------------------------------------------- | ----------------------------- |
| Navigation bar | [shared/navbar.md](shared/navbar.md)           | [List features that use this] |
| Footer         | [shared/footer.md](shared/footer.md)           | [List features that use this] |
| Authentication | [shared/auth.md](shared/auth.md)               | [List features that use this] |
| Permissions    | [shared/permissions.md](shared/permissions.md) | [List features that use this] |

**Bidirectional Linkage Rule**: Each shared component must maintain an up-to-date list of features that depend on it. Each feature that uses a shared component must link to it in its documentation.

## Creating a New Feature

1. Create a directory: `docs/features/<feature-name>/`.
2. Copy the sub-files from `feature-template.md` (or from `_example-feature/` for a worked example).
3. Fill in each sub-file following the guidance comments.
4. Add the feature to this index.
5. Add the feature to `docs/ROADMAP.md`.
6. Cross-reference related requirements in `docs/REQUIREMENTS.md`.

## Documentation Granularity

The granularity level is set during initialization (see Q7.1 in the initialization questionnaire).

- **Full**: All 8 sub-files per feature (overview, requirements, ui, api, data, tests, edge-cases, changelog).
- **Standard**: overview + requirements + tests.
- **Minimal**: overview only.

Current level: [Set during initialization].

## Naming Conventions

- Directory names: `lowercase-kebab-case`.
- Sub-file names: `lowercase.md`.
- Prefix example/template directories with `_`.
