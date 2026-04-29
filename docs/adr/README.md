# Architecture Decision Records

<!-- LLM GUIDANCE
Purpose: Explain the ADR process and serve as a reference for creating new ADRs.
Update triggers: When the ADR process itself changes.
Expected detail: The full process from proposal to acceptance.
Related files: docs/adr/ADR-000-template.md, docs/DECISIONS.md, .claude/commands/create-adr.md
-->

## What is an ADR?

An Architecture Decision Record (ADR) captures a significant technical decision along with its context and consequences. ADRs are numbered sequentially and are immutable once accepted. If a decision is reversed, a new ADR supersedes the old one.

## When to Write an ADR

Write an ADR when:

- Choosing a technology, framework, or library for a significant role.
- Changing the system architecture or data model.
- Establishing a pattern that the team must follow.
- Making a decision that is difficult or expensive to reverse.
- Resolving a technical disagreement.

Do not write an ADR for:

- Trivial implementation choices.
- Decisions that are easily reversible.
- Choices dictated by external constraints with no alternative.

## How to Create an ADR

Use the `/create-adr` command, which will:

1. Determine the next ADR number.
2. Copy `ADR-000-template.md` to `ADR-NNN-short-title.md`.
3. Fill in the title and date.
4. Add the ADR to the index in `docs/DECISIONS.md`.

Or create one manually by copying the template.

## ADR Lifecycle

1. **Proposed**: The ADR is drafted and open for discussion.
2. **Accepted**: The team agrees on the decision.
3. **Deprecated**: The decision is no longer relevant (but was once correct).
4. **Superseded**: A new ADR replaces this one. Link to the replacement.

## Naming Convention

`ADR-NNN-short-description.md`

- `NNN`: Three-digit zero-padded number (001, 002, ...).
- `short-description`: Lowercase, hyphenated summary (e.g., `use-postgres`, `adopt-nextjs`).

## Index

See [docs/DECISIONS.md](../DECISIONS.md) for the full ADR index.
