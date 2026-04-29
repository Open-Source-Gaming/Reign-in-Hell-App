# Documentation Rules

<!-- LLM GUIDANCE
Purpose: Define when and how documentation must be updated alongside code changes.
Update triggers: When the documentation taxonomy changes or new doc categories are added.
Expected detail: Concrete rules the LLM CLI must follow. Not suggestions.
Related files: docs/TAXONOMY.md, docs/README.md, .claude/rules/workflow.md
-->

## Core Rule

All code changes must have associated documentation updates. No exceptions.

## When to Update Documentation

- Adding a new feature: create a feature directory under `docs/features/` using the template.
- Changing an API: update `docs/API.md` and the relevant feature's `api.md`.
- Changing architecture: update `docs/ARCHITECTURE.md` and file an ADR if the change is significant.
- Fixing a bug: update `docs/KNOWN-ISSUES.md` to mark the issue resolved. Add to `docs/EDGE-CASES.md` if the bug revealed an edge case.
- Changing environment variables: update `docs/ENVIRONMENT.md`.
- Changing deployment: update `docs/DEPLOYMENT.md`.
- Adding a dependency: update `docs/INTEGRATIONS.md` if the dependency is an external service or major library.

## Cross-Reference Rules

- Every feature doc must reference its entry in `docs/ROADMAP.md` and `docs/REQUIREMENTS.md`.
- Every ADR must be indexed in `docs/DECISIONS.md`.
- Shared feature docs (`docs/features/shared/`) must list which features depend on them.

## Taxonomy Enforcement

- Follow the taxonomy defined in `docs/TAXONOMY.md`.
- Do not create new top-level doc categories without updating the taxonomy.
- Use the prescribed file naming conventions.

## Scaffolded Files

- Scaffolded files contain placeholder content and an explicit "SCAFFOLDED" marker.
- When filling in a scaffolded file, remove the scaffolded marker.
- Do not delete scaffolded files. Leave them as-is until they become relevant.

## Link Validation Rules

- All internal markdown links must resolve to existing files or directories.
- The GitHub Actions workflow automatically validates links on every PR that touches documentation.
- Broken links will cause CI failures and must be fixed before merging.
- Use relative paths for internal links (e.g., `[text](../ROADMAP.md)`).
- External links (http/https) and anchors are allowed but not validated by CI.
- When creating placeholder content, avoid linking to non-existent files.

## Writing Style

- Use direct, imperative language.
- Do not use em dashes.
- Keep sentences short and specific.
- Lead with the most important information.
- Use bullet points over paragraphs where practical.

## Completion Gate

Before telling the user that code work is done, verify documentation is current:

1. Identify which documentation scope was affected (cross-service, feature-specific, root infrastructure).
2. Walk through the "When to Update Documentation" checklist above for that scope.
3. If any documentation is missing or stale, update it before signaling completion.
4. If a new feature was added or an existing feature significantly changed, ensure a feature doc exists under the appropriate `docs/features/` directory.
5. If roadmap items were completed, mark them with `[x]` in the relevant planning documents.

This is not optional. The hook in `.claude/settings.json` will remind you after every source file edit, but the responsibility is yours to act on it.
