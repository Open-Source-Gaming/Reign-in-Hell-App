# Feature Template

<!-- LLM GUIDANCE
Purpose: Canonical template for creating a new feature directory. Copy these sections into individual files.
Update triggers: When the feature documentation structure changes.
Expected detail: Instructional placeholder text for each sub-file.
Related files: docs/features/README.md, docs/features/_example-feature/, docs/TAXONOMY.md
-->

## Instructions

When creating a new feature directory, create these files and fill them in using the guidance below. See `_example-feature/` for a fully worked example.

Adjust the number of files based on the documentation granularity level set during initialization.

---

## overview.md

```markdown
# [Feature Name]

## Purpose

What this feature does and why it exists.

## User Story

As a [user type], I want to [action] so that [benefit].

## Status

Planned / In progress / Complete / Deprecated.

## Cross-References

- Roadmap: [docs/ROADMAP.md](../../ROADMAP.md)
- Requirements: [requirements.md](requirements.md)
- Architecture: [docs/ARCHITECTURE.md](../../ARCHITECTURE.md)
- Related features: [list related feature directories]

### Multi-Service Linkage (if applicable)

- **Cross-service features**: [link to features that span multiple services]
- **Implementing services**: [list services that implement this feature]
- **Per-service features**: [link to service-specific implementations]
- **Shared dependencies**: [link to shared components this feature uses]
```

---

## requirements.md

```markdown
# [Feature Name] - Requirements

## Functional Requirements

- FR-1: [Requirement description]. Priority: Must/Should/Nice.
- FR-2: ...

## Non-Functional Requirements

- NFR-1: [Performance, security, accessibility, etc.]

## Acceptance Criteria

- [ ] Criterion 1
- [ ] Criterion 2

## Source

Link to Notion page or planning document.
```

---

## ui.md

```markdown
# [Feature Name] - UI

## Components

List the UI components this feature introduces or modifies.

## Layout

Describe or diagram the layout.

## Interactions

Describe user interactions: clicks, form submissions, navigation, etc.

## Responsive Behavior

How the UI adapts to different screen sizes.

## Accessibility

ARIA labels, keyboard navigation, screen reader considerations.
```

---

## api.md

```markdown
# [Feature Name] - API

## Endpoints

### `METHOD /path`

- **Description**: What this endpoint does.
- **Auth**: Required / Public.
- **Request body**: (if applicable)
- **Response**: Status code and body.
- **Errors**: Error codes and descriptions.

## Data Contracts

Request and response schemas.
```

---

## data.md

```markdown
# [Feature Name] - Data

## Models

Describe the data models this feature uses or introduces.

## Schema

Table or document structure.

## Relationships

How this feature's data relates to other features' data.

## Storage

Where and how data is persisted.

## Migrations

Link to relevant migrations in docs/MIGRATIONS.md.
```

---

## tests.md

```markdown
# [Feature Name] - Tests

## Test Plan

What should be tested and at what level (unit, integration, e2e).

## Test Cases

- [ ] Test case 1: [description]
- [ ] Test case 2: [description]

## Edge Cases

Link to edge-cases.md for this feature.

## Coverage Notes

Any coverage considerations specific to this feature.
```

---

## edge-cases.md

```markdown
# [Feature Name] - Edge Cases

## Known Edge Cases

- EC-1: [Scenario]. Handling: [how it is handled].
- EC-2: ...

## Boundary Conditions

List boundary conditions and expected behavior.

## Error States

List error states and recovery behavior.
```

---

## changelog.md

```markdown
# [Feature Name] - Changelog

## [Unreleased]

### Added

- Initial feature implementation.

### Changed

### Fixed

### Removed
```
