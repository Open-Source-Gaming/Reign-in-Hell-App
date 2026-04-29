# Review Feature

Review a feature directory for documentation completeness and consistency.

## Instructions

1. Read `docs/features/feature-template.md` to load the expected structure.
2. Read `docs/features/README.md` to check the current documentation granularity level.

3. **Identify the feature to review**:
   a. If the user provides a feature name as an argument, use it.
   b. Otherwise, list the feature directories in `docs/features/` and ask the user to pick one.

4. **Check file completeness**:
   Based on the documentation granularity level:
   - **Full**: All 8 sub-files must exist (overview, requirements, ui, api, data, tests, edge-cases, changelog).
   - **Standard**: overview, requirements, and tests must exist.
   - **Minimal**: overview must exist.

   Report missing files.

5. **Check content quality**:
   For each existing file, verify:
   - [ ] The file has content beyond the template placeholder.
   - [ ] The LLM guidance comment is present.
   - [ ] Cross-references to ROADMAP.md and REQUIREMENTS.md are present and valid.
   - [ ] Related features and shared concerns are referenced.
   - [ ] Requirements are specific and testable (not vague).
   - [ ] Test cases exist for each functional requirement.
   - [ ] Edge cases are documented with handling strategies.

6. **Check consistency**:
   - [ ] The feature is listed in `docs/features/README.md`.
   - [ ] The feature has an entry in `docs/ROADMAP.md`.
   - [ ] Requirements reference `docs/REQUIREMENTS.md` entries.
   - [ ] API endpoints are documented in both the feature's `api.md` and `docs/API.md`.

7. **Report findings**:
   a. Summarize completeness (e.g., "7/8 files present, 5/7 content checks pass").
   b. List specific gaps and suggestions.
   c. Offer to fix any issues found.

## Rules

- Do not modify files without user approval.
- Do not create missing files without user approval.
- Skip the `_example-feature` directory (it is a template, not a real feature).

## Arguments

$ARGUMENTS

Accepted arguments:

- A feature directory name (e.g., `user-dashboard`).
- `all` -- review all feature directories.
- (no argument) -- prompt the user to select a feature.
