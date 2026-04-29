# Bidirectional Planning Sync

<!-- LLM GUIDANCE
Purpose: Define the full lifecycle for syncing planning state between Notion and repository docs.
Update triggers: When the sync process, conflict rules, or planning source of truth changes.
Expected detail: Step-by-step procedures, conflict resolution matrix, and state definitions.
Related files: docs/ROADMAP.md, docs/REQUIREMENTS.md, .claude/commands/sync-notion.md, .mcp.json
-->

## Overview

Planning starts in Notion. The repository mirrors approved planning state into markdown docs. During implementation, the repository docs are the working copy. After work is completed, changes are synced back to Notion.

This creates a bidirectional flow with clear ownership rules to prevent conflicts.

## Sync Lifecycle

```
1. PLAN     -->  Notion: Features and requirements are outlined.
2. VALIDATE -->  Claude Code: Verify planned work does not duplicate existing code or docs.
3. MIRROR   -->  Claude Code: Copy approved work into repo docs (ROADMAP, REQUIREMENTS, features/).
4. BUILD    -->  Claude Code: Update docs alongside code changes during implementation.
5. SYNC     -->  Claude Code: Push completed state back to Notion.
6. REPEAT   -->  Return to step 1.
```

## Ownership Rules

Different types of information have different owners. The owner is the source of truth when conflicts arise.

| Information Type         | Owner      | Examples                                                      |
| ------------------------ | ---------- | ------------------------------------------------------------- |
| Planning and priorities  | Notion     | Feature ordering, phase assignments, milestone dates          |
| Requirements (business)  | Notion     | User stories, acceptance criteria, business rules             |
| Requirements (technical) | Repository | Implementation constraints, API contracts, schema definitions |
| Architecture decisions   | Shared     | Requires manual resolution (see conflict matrix)              |
| Implementation details   | Repository | Code structure, test plans, API response formats              |
| Feature status           | Repository | What is actually built vs. what was planned                   |
| Roadmap status           | Notion     | What is prioritized vs. what is deprioritized                 |

## Conflict Resolution Matrix

When Notion and repository docs disagree, use this matrix:

| Conflict Type                                        | Resolution                                                     | Rationale                               |
| ---------------------------------------------------- | -------------------------------------------------------------- | --------------------------------------- |
| Notion added a feature not in repo                   | Add to repo docs as "Planned"                                  | Notion owns planning                    |
| Repo has a feature not in Notion                     | Flag for review, do not delete from repo                       | May be in-progress work                 |
| Priority differs                                     | Notion wins                                                    | Notion owns prioritization              |
| Status differs (Notion says planned, repo says done) | Repo wins for "done" status                                    | Repo is the ground truth for completion |
| Requirements wording differs                         | Notion wins for business requirements, repo wins for technical | Split ownership per type                |
| Architecture description differs                     | Manual resolution required                                     | Both sides may have valid updates       |
| Milestone dates differ                               | Notion wins                                                    | Notion owns scheduling                  |
| Feature was removed from Notion                      | Mark as "Deprecated" in repo, do not delete                    | Preserve implementation history         |

## Conflict Resolution Procedure

When a conflict is detected:

1. Identify the conflict type using the matrix above.
2. If the matrix provides a clear winner, apply the resolution automatically.
3. If manual resolution is required:
   a. Document both versions in the affected file.
   b. Add an entry to `KNOWN-ISSUES.md` with the label "sync-conflict".
   c. Notify the user and request a decision.
4. After resolution, update both Notion and the repo to match.
5. Record the resolution in the sync log (below).

## Sync Log

Track sync operations for auditability.

| Date | Direction | Scope | Conflicts | Resolution |
| ---- | --------- | ----- | --------- | ---------- |
|      |           |       |           |            |

## Pre-Sync Validation

Before mirroring Notion content to the repo, validate:

- [ ] The planned feature does not already exist in `docs/features/`.
- [ ] The planned feature does not duplicate an existing feature under a different name.
- [ ] The requirements do not contradict existing architecture decisions (check `docs/DECISIONS.md`).
- [ ] The planned work aligns with the current phase in `docs/ROADMAP.md`.

## Post-Implementation Sync

After completing work, update Notion:

- [ ] Mark the feature status as complete in Notion.
- [ ] Update any requirement details that changed during implementation.
- [ ] Note any scope changes or deferred items.
- [ ] Link the relevant PR or commit.

## MCP Configuration

The Notion sync uses the MCP server configured in `.mcp.json`. See that file for setup instructions.

If the Notion MCP server is unavailable:

- Local docs remain the working source of truth.
- Document sync intent in the sync log with direction "pending".
- Resume sync when the MCP server becomes available.

## Cross-References

- Roadmap: [ROADMAP.md](ROADMAP.md)
- Requirements: [REQUIREMENTS.md](REQUIREMENTS.md)
- Sync command: [.claude/commands/sync-notion.md](../.claude/commands/sync-notion.md)
- MCP config: [../.mcp.json](../.mcp.json)
- Integrations: [INTEGRATIONS.md](INTEGRATIONS.md)
