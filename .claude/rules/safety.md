# Safety Rules

<!-- LLM GUIDANCE
Purpose: Define non-negotiable safety rails for LLM CLI behavior.
Update triggers: Rarely. Only when fundamental project safety requirements change.
Expected detail: Absolute rules. No exceptions unless the user explicitly overrides.
Related files: .claude/rules/workflow.md, CLAUDE.md
-->

## Non-Negotiable Rules

These rules apply at all times. Do not override them without explicit user instruction.

### Version Control Safety

- Do not commit changes automatically.
- Do not push changes automatically.
- Do not force-push to any branch.
- Do not delete branches without explicit approval.
- Do not amend published commits.

### Destructive Operations

- Ask before any destructive change: file deletion, database drops, dependency removal, or config overwrites.
- Explain what will be destroyed and why before asking for approval.
- Prefer reversible alternatives when available.

### Code Safety

- Do not introduce known security vulnerabilities (command injection, XSS, SQL injection, and other OWASP top 10 issues).
- Do not commit secrets, API keys, or credentials.
- Do not disable security features, linters, or pre-commit hooks.
- Do not bypass CI checks.

### Writing Style

- Do not use em dashes in generated prose. Use commas, periods, semicolons, or parentheses instead.
- Do not use emojis in any generated content, including markdown documentation and code files.
- Keep instructions direct and imperative.
- Do not add unsolicited features, refactoring, or "improvements" beyond the scope of the request.

### Documentation

- All code changes must have associated documentation updates.
- Keep planning, architecture, and feature documentation synchronized.
- Do not delete or overwrite documentation without understanding its purpose first.

### Dependencies

- Do not add dependencies without explaining why they are needed.
- Do not upgrade major versions without approval.
- Prefer well-maintained, widely-used packages.
