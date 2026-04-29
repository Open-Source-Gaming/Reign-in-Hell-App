# Contributing

<!-- LLM GUIDANCE
Purpose: Guide human contributors on how to contribute to this project.
Update triggers: When the contribution process, tooling, or team structure changes.
Expected detail: Step-by-step instructions a new contributor can follow.
Related files: .claude/rules/workflow.md, .github/PULL_REQUEST_TEMPLATE.md, SECURITY.md
-->

## Getting Started

1. Fork the repository.
2. Clone your fork locally.
3. Create a feature branch from `main`: `git checkout -b feature/your-feature`.
4. Make your changes.
5. Run tests: see `docs/TESTING.md` for instructions.
6. Commit using the project's commit message format (see below).
7. Push to your fork and open a pull request.

## Commit Message Format

- Start the subject line with a capitalized verb.
- Keep the subject line to 70 characters.
- Use imperative mood: "Add feature" not "Added feature".
- Separate subject from body with a blank line.

Example:

```
Add user authentication middleware

Implement JWT-based auth middleware for protected API routes.
Token validation uses the shared auth module defined in docs/features/shared/auth.md.
```

## Pull Request Process

1. Fill out the pull request template completely.
2. Ensure all CI checks pass.
3. Update documentation for any behavior changes.
4. Request review from a code owner.

## Documentation Requirements

All code changes must have associated documentation updates. See `.claude/rules/documentation.md` for the full rules.

## Code Style

Follow the conventions in `.claude/rules/code-style.md` and the project's formatter configuration.

## Reporting Issues

- Use the bug report template for bugs.
- Use the feature request template for new features.
- See `SECURITY.md` for security vulnerabilities.
