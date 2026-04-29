# Workflow Rules

<!-- LLM GUIDANCE
Purpose: Define the git workflow, commit conventions, and PR process.
Update triggers: When branching strategy or CI/CD pipeline changes.
Expected detail: Step-by-step procedures the LLM CLI must follow.
Related files: .claude/rules/safety.md, .github/PULL_REQUEST_TEMPLATE.md, docs/SYNC.md
-->

## Branching Strategy

- `main` is the default branch. It must always be deployable.
- Create feature branches from `main` using the pattern: `feature/<short-description>`.
- Create bugfix branches using the pattern: `fix/<short-description>`.
- Create documentation branches using the pattern: `docs/<short-description>`.

## Commit Messages

- Start the subject line with a capitalized verb (e.g., "Add", "Fix", "Remove", "Update").
- Keep the subject line to 70 characters.
- Use the imperative mood ("Add feature" not "Added feature").
- Separate subject from body with a blank line.
- Use the body to explain what and why, not how.

## Pull Requests

- Every PR must reference the related issue or feature doc.
- Use the PR template in `.github/PULL_REQUEST_TEMPLATE.md`.
- PRs must include documentation updates if code behavior changes.
- Keep PRs focused on a single concern.

## Code Review

- All PRs require at least one review before merge.
- Reviewers should check for documentation completeness.
- Reviewers should verify that tests exist for new behavior.

## CI/CD

- The `docs-check` workflow validates markdown links and structure on every PR.
- Additional CI workflows should be added as the project matures.

## Planning Sync

- Before starting work on a feature, verify it exists in the planning source of truth.
- After completing work, update the planning source of truth.
- See `docs/SYNC.md` for the full bidirectional sync workflow.
