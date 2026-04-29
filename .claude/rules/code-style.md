# Code Style Rules

<!-- LLM GUIDANCE
Purpose: Define coding conventions enforced across the project.
Update triggers: When the team adopts new languages, frameworks, or formatting tools.
Expected detail: Specific, enforceable rules -- not aspirational guidelines.
Related files: docs/ARCHITECTURE.md, .claude/rules/documentation.md
-->

## General

- Use consistent indentation as defined by the project's formatter configuration.
- Prefer descriptive variable and function names over abbreviations.
- Keep functions short and single-purpose.
- Avoid deep nesting. Extract helper functions when nesting exceeds three levels.
- Remove dead code. Do not comment it out.
- Do not add speculative abstractions. Write code for current requirements.
- Do not use emojis in code comments, strings, or documentation.

## Naming Conventions

- Use `camelCase` for variables and functions in JavaScript/TypeScript.
- Use `snake_case` for variables and functions in Python.
- Use `PascalCase` for classes, types, and React components.
- Use `UPPER_SNAKE_CASE` for constants.
- Name boolean variables with `is`, `has`, or `should` prefixes.

## Formatting

- Follow the project's formatter configuration (Prettier, Black, or equivalent).
- If no formatter is configured, use the language community's standard style.
- Keep lines under 100 characters where practical.
- Use trailing commas in multiline structures.

## Imports and Dependencies

- Group imports: standard library, third-party, local -- separated by blank lines.
- Do not use wildcard imports.
- Remove unused imports.

## Language-Specific Rules

These sections are scaffolded. Fill them in during project initialization when the tech stack is chosen.

### JavaScript/TypeScript

- Prefer `const` over `let`. Never use `var`.
- Use async/await over raw promises.
- Use strict equality (`===`).

### Python

- Use type hints for function signatures.
- Use f-strings over `.format()` or `%`.
- Follow PEP 8.

### Other Languages

Add language-specific rules here as the project adopts new languages.
