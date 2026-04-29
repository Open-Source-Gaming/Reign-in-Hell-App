# Environment

<!-- LLM GUIDANCE
Purpose: Document all environment variables, secrets management, and local setup.
Update triggers: When environment variables are added, removed, or their purpose changes.
Expected detail: Every env var with its purpose, format, and whether it is required.
Related files: docs/DEPLOYMENT.md, docs/INTEGRATIONS.md
-->

> **SCAFFOLDED**: Fill in during project initialization when the tech stack and deployment target are chosen.

## Local Setup

1. Clone the repository.
2. Copy `.env.example` to `.env`.
3. Fill in the required values (see table below).
4. Install dependencies: [TBD at initialization].
5. Start the development server: [TBD at initialization].

## Development Tools

### Formatting and Linting

After project initialization, the following tools are automatically configured:

**JavaScript/TypeScript Projects:**

- **Formatter**: Prettier (configured via `.prettierrc.json`)
- **Linter**: ESLint (configured via `.eslintrc.json`)
- **Commands**:
  - `npm run format` - Format all files
  - `npm run lint` - Check for linting issues
  - `npm run lint:fix` - Automatically fix linting issues

**Python Projects:**

- **Formatter**: Black (configured via `pyproject.toml`)
- **Linter**: Ruff (configured via `pyproject.toml`)
- **Commands**:
  - `make format` - Format all Python files
  - `make lint` - Check for linting issues
  - `ruff check . --fix` - Automatically fix linting issues

### IDE Configuration

- **EditorConfig**: `.editorconfig` provides consistent formatting across all IDEs
- **VS Code**: Workspace settings in `.vscode/settings.json` with format-on-save enabled
- **JetBrains**: Code style settings automatically detected from EditorConfig
- **Recommended Extensions**: See `.vscode/extensions.json` for VS Code extension recommendations

### Project-Wide Formatting

- **VS Code Task**: Use `Ctrl+Shift+P` → "Tasks: Run Task" → "Format Entire Project"
- **Command Line**: Run `npm run format` or `make format` to format all files at once
- **Git Integration**: Consider setting up pre-commit hooks for automatic formatting

## Environment Variables

| Variable   | Purpose             | Required | Default       | Format                                 |
| ---------- | ------------------- | -------- | ------------- | -------------------------------------- |
| `NODE_ENV` | Runtime environment | Yes      | `development` | `development`, `staging`, `production` |
| [TBD]      | [TBD]               | [TBD]    | [TBD]         | [TBD]                                  |

## Secrets Management

- Never commit secrets to the repository.
- Use `.env` files for local development (`.env` is in `.gitignore`).
- Use your deployment platform's secrets manager for staging and production.
- Rotate secrets on a regular schedule.

## Environment Parity

- Keep development, staging, and production environments as similar as possible.
- Document any intentional differences between environments.

## Cross-References

- Deployment: [DEPLOYMENT.md](DEPLOYMENT.md)
- Integrations: [INTEGRATIONS.md](INTEGRATIONS.md)
