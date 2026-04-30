# Reign in Hell Companion

Cross-platform companion app for managing cabals, campaigns, and battles in the Reign in Hell tabletop game.

**For**: Tabletop players running Reign in Hell games at the table or solo.

## Status

**Initialized** - Ready for development. See `docs/initialization/COMPLETION_CHECKLIST.md` for details.

## Important Notice

This is an **unofficial fan tool** for the Reign in Hell tabletop miniature game. It is not affiliated with or endorsed by Snarling Badger Studios. To use this companion app effectively, you must own the official Reign in Hell rulebook by Adam Loper and Vince Venturella.

**Attribution**: Reign in Hell is published by Snarling Badger Studios. This companion app is created by fans, for fans, and respects the intellectual property of the original creators.

## Quick Start

1. Clone this repository
2. Run `make setup` to install dependencies and tools
3. Run `make start` to start the development server
4. For mobile: Download Expo Go and scan the QR code
5. For web: Run `make web` or press `w` in the terminal

### Development Commands

```bash
make help              # Show all available commands
make start             # Start development server
make test              # Run tests
make format            # Format code  
make check-all         # Run all quality checks
make doctor            # Check development environment
```

## Repository Structure

```
package.json           # Project dependencies and scripts
CLAUDE.md              # Claude Code context and rules
AGENTS.md              # Multi-agent behavior contract
docs/
  README.md            # Documentation index
  TAXONOMY.md          # Documentation structure rules
  ARCHITECTURE.md      # System design
  REQUIREMENTS.md      # Requirements
  ROADMAP.md           # Feature roadmap
  SYNC.md              # Notion sync workflow
  DECISIONS.md         # ADR index
  initialization/      # Setup questionnaire and answers
  adr/                 # Architecture Decision Records
  features/            # Per-feature documentation
.claude/
  rules/               # Coding, documentation, and safety rules
  commands/            # Slash commands for common workflows
.github/
  workflows/           # CI/CD (lint, type-check, tests)
  ISSUE_TEMPLATE/      # Bug and feature request templates
```

## Documentation

See [docs/README.md](docs/README.md) for the full documentation guide.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

See [LICENSE](LICENSE).
