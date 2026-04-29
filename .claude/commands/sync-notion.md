# Sync with Notion

Perform a bidirectional sync between the Notion planning workspace and this repository's documentation.

## Instructions

1. Read `docs/SYNC.md` to load the sync lifecycle, ownership rules, and conflict resolution matrix.
2. Check `.mcp.json` to verify the Notion MCP server is configured.

### If Notion MCP is not available:

- Inform the user that the Notion MCP server is not configured or not reachable.
- Suggest manual sync: the user can paste Notion content and you will update the repo docs.
- Log the sync attempt in the sync log in `docs/SYNC.md` with direction "pending".
- Stop here.

### If Notion MCP is available:

3. **Pull from Notion**:
   a. Fetch the current planning state from the configured Notion databases.
   b. Compare against `docs/ROADMAP.md`, `docs/REQUIREMENTS.md`, and `docs/features/`.

4. **Detect conflicts**:
   a. For each difference, classify it using the conflict resolution matrix in `docs/SYNC.md`.
   b. If the matrix provides a clear winner, apply the resolution.
   c. If manual resolution is required, present both versions to the user and ask for a decision.

5. **Apply changes**:
   a. Update repo docs with Notion-owned information (planning, priorities, business requirements).
   b. Do not overwrite repo-owned information (implementation details, technical requirements, feature status marked "complete").

6. **Push to Notion**:
   a. Update Notion with repo-owned information (completion status, technical details, scope changes).
   b. Add links to relevant PRs or commits if available.

7. **Log the sync**:
   a. Add an entry to the sync log in `docs/SYNC.md`.
   b. Record the date, direction, scope, conflicts found, and resolutions applied.

## Rules

- Follow the ownership rules and conflict matrix in `docs/SYNC.md`. Do not override them.
- Do not delete features from the repo that were removed from Notion. Mark them "Deprecated" instead.
- Do not commit or push changes automatically.
- Present a summary of all changes before making them and get user approval.

## Arguments

$ARGUMENTS

Accepted arguments:

- `pull` -- only pull from Notion, do not push back.
- `push` -- only push to Notion, do not pull.
- `status` -- show sync status without making changes.
- (no argument) -- full bidirectional sync.
