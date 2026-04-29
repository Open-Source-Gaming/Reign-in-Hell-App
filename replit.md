# replit.md

This is a repository template optimized for Replit and Claude Code. It uses markdown-driven development with a strict documentation taxonomy, initialization questionnaires, and bidirectional planning sync.

## Project Status

- **Initialized**: No. Run `/initialize-project` in Claude Code to configure.
- **Project type**: [Set during initialization]
- **Tech stack**: [Set during initialization]
- **Deployment**: [Set during initialization]

## Getting Started on Replit

1. Import this template into a Repl.
2. Run the initialization questionnaire to configure the project.
3. Install dependencies (defined during initialization).
4. Start the development server (defined during initialization).

## Run Commands

```bash
# Install dependencies
# [Set during initialization]

# Start development server
# [Set during initialization]

# Run tests
# [Set during initialization]

# Build for production
# [Set during initialization]
```

## Project Structure

```
/
├── CLAUDE.md          # Claude Code context
├── replit.md          # This file (Replit context)
├── AGENTS.md          # Multi-agent behavior
├── docs/              # All project documentation
│   ├── ARCHITECTURE.md
│   ├── REQUIREMENTS.md
│   ├── ROADMAP.md
│   ├── features/      # Per-feature docs
│   └── ...
├── .claude/           # Claude Code rules and commands
└── .github/           # GitHub templates and CI
```

## Replit-Specific Notes

- The `.replit` file and `replit.nix` will be created during initialization based on the chosen tech stack.
- Use Replit's built-in environment variables for secrets (do not use `.env` files on Replit).
- Replit Deployments can be configured after initialization.

## Documentation

All documentation follows a strict taxonomy under `docs/`. Key files:

- `docs/README.md` -- Documentation index and guide.
- `docs/ARCHITECTURE.md` -- System design.
- `docs/TESTING.md` -- Test strategy and tools.
- `docs/DEPLOYMENT.md` -- Deployment configuration.

## Rules for Replit Agent

1. Do not use em dashes in generated prose.
2. Do not commit or push changes automatically.
3. Ask before destructive changes.
4. Prefer tests when practical.
5. Document all code changes alongside the code.
6. Follow the documentation taxonomy in `docs/TAXONOMY.md`.
7. Keep commit messages to 70 characters starting with a capitalized verb.
