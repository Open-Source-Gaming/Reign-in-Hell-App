# Environment

<!-- LLM GUIDANCE
Purpose: Document all environment variables, secrets management, and local setup.
Update triggers: When environment variables are added, removed, or their purpose changes.
Expected detail: Every env var with its purpose, format, and whether it is required.
Related files: docs/DEPLOYMENT.md, docs/INTEGRATIONS.md
-->

## Runtime Requirements

- **Node.js**: 20 LTS or later
- **Package Manager**: pnpm 
- **Database**: SQLite (via expo-sqlite, runs locally)
- **Mobile Development**: Expo CLI and Expo Go app (for live preview)

## Local Setup

1. Clone the repository.
2. Run the setup command: `make setup`
   - This installs pnpm, dependencies, and Expo CLI
3. Start development: `make start`
4. For mobile: Download Expo Go app and scan the QR code
5. For web: Run `make web` or press `w` in the terminal

### Available Make Commands

Run `make help` to see all available commands. Key workflows:

**Development:**
- `make start` - Start Expo development server
- `make ios` / `make android` / `make web` - Platform-specific development
- `make doctor` - Check development environment health

**Code Quality:**
- `make format` - Format code with Prettier
- `make lint` - Check code with ESLint  
- `make type-check` - Run TypeScript checks
- `make check-all` - Run all quality checks

**Testing:**
- `make test` - Run all tests
- `make test-coverage` - Run tests with coverage
- `make test-domain` - Test portable domain logic only

**Building & Deployment:**
- `make build-web` - Build web version
- `make eas-build-ios` / `make eas-build-android` - Native builds
- `make deploy-web` - Deploy to Cloudflare Pages

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
