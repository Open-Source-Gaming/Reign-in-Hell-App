# AGENTS.md

<!-- LLM GUIDANCE
Purpose: Define how AI agents should interact with this repository.
Update triggers: When agent tools, permissions, or behavior expectations change.
Expected detail: Clear rules that any AI agent can follow regardless of provider.
Related files: CLAUDE.md, replit.md, .claude/rules/safety.md
-->

## Overview

This repository is designed for AI-assisted development. Multiple agents may interact with it: Claude Code, Replit Agent, and others. This file defines the shared behavioral contract.

## Agent-Specific Context Files

| Agent        | Context File | Purpose                                                   |
| ------------ | ------------ | --------------------------------------------------------- |
| Claude Code  | `CLAUDE.md`  | Claude Code-specific rules, commands, and MCP config      |
| Replit Agent | `replit.md`  | Replit-specific run commands, deployment, and preferences |
| All agents   | This file    | Shared behavioral contract                                |

## Shared Rules (All Agents)

### Safety

1. Do not commit or push changes automatically.
2. Do not delete files, branches, or data without explicit user approval.
3. Do not introduce security vulnerabilities.
4. Do not commit secrets, API keys, or credentials.

### Documentation

1. All code changes must have associated documentation updates.
2. Follow the documentation taxonomy in `docs/TAXONOMY.md`.
3. Do not create new doc categories without updating the taxonomy.
4. Keep cross-references consistent.

### Code Quality

1. Prefer tests when practical.
2. Follow the project's coding conventions (see `.claude/rules/code-style.md`).
3. Do not add features beyond what was requested.
4. Do not refactor code that was not part of the request.

### Writing

1. Do not use em dashes.
2. Use direct, imperative language.
3. Keep instructions specific and actionable.

### Planning

1. Check `docs/SYNC.md` before starting work on a planned feature.
2. Verify the feature exists in the planning source of truth.
3. Update planning state after work is completed.

## Initialization

Before doing any project work, check `docs/initialization/COMPLETION_CHECKLIST.md`. If the project is not initialized, prompt the user to run the initialization questionnaire.

## Conflict Between Agents

If multiple agents have contributed to the same file:

- The most recent change wins unless it contradicts a documented rule.
- Rules in `.claude/rules/` and this file take precedence over agent-specific context files.
- When in doubt, ask the user.
