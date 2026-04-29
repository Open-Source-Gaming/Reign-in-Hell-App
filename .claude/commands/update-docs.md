# Update Documentation

Scan recent code changes and ensure all documentation is up to date.

## Instructions

1. Read `.claude/rules/documentation.md` to load the documentation update rules.
2. Read `docs/TAXONOMY.md` to understand the doc structure.

3. **Identify recent changes**:
   a. Run `git diff --name-only HEAD~5` (or a user-specified range) to find recently changed files.
   b. Categorize each changed file by its documentation impact.

4. **Check documentation currency**:
   For each changed file, verify:
   - [ ] If an API endpoint changed, is `docs/API.md` updated?
   - [ ] If a feature changed, is the feature's directory updated?
   - [ ] If architecture changed, is `docs/ARCHITECTURE.md` updated?
   - [ ] If environment config changed, is `docs/ENVIRONMENT.md` updated?
   - [ ] If a new dependency was added, is `docs/INTEGRATIONS.md` updated?
   - [ ] If a migration was added, is `docs/MIGRATIONS.md` updated?
   - [ ] If a bug was fixed, is `docs/KNOWN-ISSUES.md` updated?

5. **Check cross-references**:
   a. Scan for broken internal markdown links across all docs.
   b. Verify that feature docs reference the correct roadmap and requirement entries.

6. **Report findings**:
   a. List all documentation gaps found.
   b. For each gap, specify the file that needs updating and what should change.
   c. Ask the user if you should make the updates.

7. **Apply updates** (with user approval):
   a. Update each identified file.
   b. Maintain cross-references.
   c. Do not add SCAFFOLDED markers to files that already have content.

## Rules

- Do not commit or push changes automatically.
- Do not create new doc categories without updating `docs/TAXONOMY.md`.
- Present all proposed changes before making them.

## Arguments

$ARGUMENTS

Accepted arguments:

- A git range (e.g., `HEAD~10`, `abc123..def456`) to specify which changes to check.
- (no argument) -- checks the last 5 commits.
