# Project Name

> One-sentence description. [Set during initialization.]

## Status

This project was created from a repository template optimized for Claude Code and Replit. It is **not yet initialized**. Run `/initialize-project` in Claude Code to configure it for your specific project.

## What This Template Provides

- **Markdown-driven development**: All project context lives in structured documentation.
- **Strict documentation taxonomy**: Controlled categories under `docs/` with rules for expansion.
- **Initialization questionnaire**: Guided setup that populates all configuration and context files.
- **ADR support**: Architecture Decision Records from day one.
- **Bidirectional Notion sync**: Planning in Notion, implementation in the repo, changes synced both ways.
- **Granular feature documentation**: Per-feature directories with overview, requirements, UI, API, data, tests, edge cases, and changelog.
- **Claude Code integration**: Rules, slash commands, and MCP configuration for Claude Code.
- **Replit integration**: Context file and deployment support for Replit Agent.
- **GitHub workflows**: PR templates, issue templates, and documentation validation CI.

## Quick Start

1. Use this template to create a new repository.
2. Open the repository in Claude Code or Replit.
3. Run `/initialize-project` to answer the setup questionnaire.
4. The questionnaire configures your tech stack, deployment, documentation granularity, and agent preferences.
5. Start building.

## Repository Structure

```
CLAUDE.md              # Claude Code context and rules
replit.md              # Replit Agent context
AGENTS.md              # Multi-agent behavior contract
docs/
  README.md            # Documentation index
  TAXONOMY.md          # Documentation structure rules
  ARCHITECTURE.md      # System design
  REQUIREMENTS.md      # Requirements
  ROADMAP.md           # Feature roadmap
  SYNC.md              # Notion sync workflow
  DECISIONS.md         # ADR index
  initialization/      # Setup questionnaire
  adr/                 # Architecture Decision Records
  features/            # Per-feature documentation
.claude/
  rules/               # Coding, documentation, and safety rules
  commands/            # Slash commands for common workflows
.github/
  workflows/           # CI/CD (documentation validation)
  ISSUE_TEMPLATE/      # Bug and feature request templates
```

## Documentation

See [docs/README.md](docs/README.md) for the full documentation guide.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

See [LICENSE](LICENSE).
