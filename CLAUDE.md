# CLAUDE.md

This is a repository template optimized for Claude Code. It uses markdown-driven development with a strict documentation taxonomy, initialization questionnaires, ADRs, and bidirectional Notion planning sync.

## Quick Start

This project is **not initialized**. Run `/initialize-project` to answer the setup questionnaire and configure the template for your project.

## Project Status

- **Initialized**: No. See `docs/initialization/COMPLETION_CHECKLIST.md`.
- **Project type**: [Set during initialization]
- **Tech stack**: [Set during initialization]
- **Planning source**: [Set during initialization]
- **Web app / SSG**: [Set during initialization, optional]
- **CMS**: [Set during initialization, optional]

## Non-Negotiable Rules

1. Do not use em dashes in generated prose.
2. Do not use emojis in any generated content, including markdown documentation and code files.
3. Do not commit or push changes automatically.
4. Ask before destructive changes (file deletion, dependency removal, config overwrite).
5. Prefer tests when practical.
6. Document all code changes.
7. Keep instructions direct and imperative.
8. Keep planning, architecture, and feature documentation synchronized.
9. When suggesting commit messages, use a 70-character subject line starting with a capitalized verb.

## Documentation Structure

All documentation lives in `docs/` under a strict taxonomy. Read these first:

- **Taxonomy rules**: `docs/TAXONOMY.md`
- **Documentation guide**: `docs/README.md`
- **Documentation update rules**: `.claude/rules/documentation.md`

### Key Documents

| Document               | Purpose                                      |
| ---------------------- | -------------------------------------------- |
| `docs/ARCHITECTURE.md` | System design and components                 |
| `docs/REQUIREMENTS.md` | Functional and non-functional requirements   |
| `docs/ROADMAP.md`      | Feature priorities and milestones            |
| `docs/SYNC.md`         | Notion sync workflow and conflict resolution |
| `docs/DECISIONS.md`    | ADR index                                    |
| `docs/features/`       | Per-feature granular documentation           |

## Rules

Detailed rules are in `.claude/rules/`:

| File               | Scope                                       |
| ------------------ | ------------------------------------------- |
| `code-style.md`    | Coding conventions and formatting           |
| `documentation.md` | When and how to update docs                 |
| `workflow.md`      | Git workflow and commit conventions         |
| `testing.md`       | When and how to write tests                 |
| `safety.md`        | Safety rails and non-negotiable constraints |

## Commands

| Command               | Purpose                                                                                                                                                                                                          |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/initialize-project` | Configure this template for a project                                                                                                                                                                            |
| `/sync-notion`        | Bidirectional planning sync with Notion                                                                                                                                                                          |
| `/update-docs`        | Check and update documentation after code changes                                                                                                                                                                |
| `/create-adr`         | Create a new Architecture Decision Record                                                                                                                                                                        |
| `/review-feature`     | Review a feature directory for completeness                                                                                                                                                                      |
| `/review`             | Multi-lens enterprise code review. Pass flags to select roles (e.g. `--security --architect --qa`) or presets (`--core`, `--release`, `--all`). See `.claude/review-lenses/README.md` for the full role catalog. |

## Formatting and Linting

This template includes automated formatting and linting setup configured during project initialization:

### Automatic Configuration

- **JavaScript/TypeScript**: Prettier (formatting) + ESLint (linting)
- **Python**: Black (formatting) + Ruff (linting)
- **IDE Support**: VS Code and JetBrains IDEs with consistent settings
- **Universal**: EditorConfig for cross-IDE compatibility

### Project Commands

After initialization, use these commands for project-wide formatting:

- `npm run format` / `make format` - Format all files
- `npm run lint` / `make lint` - Lint all files
- `npm run lint:fix` / `make lint:fix` - Fix linting issues
- VS Code: `Ctrl+Shift+P` → "Tasks: Run Task" → "Format Entire Project"

### Configuration Files

- `.editorconfig` - Universal IDE settings
- `.prettierrc.json` / `pyproject.toml` - Language-specific formatter config
- `.eslintrc.json` / Ruff config - Language-specific linting rules
- `.vscode/settings.json` - VS Code workspace settings
- `.gitattributes` - Consistent line endings

## Notion Integration

Planning sync uses Notion via MCP. Configuration is in `.mcp.json`. The sync workflow, ownership rules, and conflict resolution are in `docs/SYNC.md`.

If Notion is not configured, all planning docs work standalone.

## Agent Behavior

- Read `.claude/rules/safety.md` before any destructive operation.
- Read `docs/TAXONOMY.md` before creating new documentation files.
- Read the relevant feature docs before modifying a feature.
- Check `docs/initialization/COMPLETION_CHECKLIST.md` to verify initialization status.
