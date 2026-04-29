# Glossary

<!-- LLM GUIDANCE
Purpose: Define project-specific terminology to ensure consistent usage across docs and code.
Update triggers: When new domain terms are introduced or existing definitions change.
Expected detail: Short, precise definitions. Not encyclopedic.
Related files: All docs reference this for consistent terminology.
-->

> **SCAFFOLDED**: Add terms as the project develops. Start with domain-specific terms during initialization.

## When to Fill This In

- When the project uses domain-specific terminology that new contributors would not know.
- When a term is used inconsistently across docs or code.
- When a technical term has a project-specific meaning that differs from its general meaning.

## Terms

| Term            | Definition                                                                                                                           | Context                        |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------ |
| ADR             | Architecture Decision Record. A document capturing a significant technical decision, its context, and consequences.                  | Used in `docs/adr/`.           |
| Feature doc     | A directory under `docs/features/` containing granular documentation for a single feature.                                           | See `docs/features/README.md`. |
| Scaffolded      | A file containing template structure but not yet filled with project-specific content. Marked with a SCAFFOLDED notice.              | Used across all `docs/` files. |
| Source of truth | The authoritative location for a given type of information. Planning lives in Notion; implementation details live in the repository. | See `docs/SYNC.md`.            |
| Taxonomy        | The controlled structure governing document categories, naming, and organization.                                                    | See `docs/TAXONOMY.md`.        |
