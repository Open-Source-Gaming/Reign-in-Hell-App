# Documentation Guide

<!-- LLM GUIDANCE
Purpose: Serve as the entry point and index for all project documentation.
Update triggers: When any doc file is added, removed, or renamed.
Expected detail: Brief descriptions with links. Not a duplication of content.
Related files: docs/TAXONOMY.md, CLAUDE.md
-->

## Overview

This directory contains all project documentation organized by a strict taxonomy. See `TAXONOMY.md` for the full rules governing this structure.

## Quick Navigation

### Project Context

- [ARCHITECTURE.md](ARCHITECTURE.md) -- System design and component relationships.
- [REQUIREMENTS.md](REQUIREMENTS.md) -- Functional and non-functional requirements.
- [ROADMAP.md](ROADMAP.md) -- Prioritized features and milestones.
- [DECISIONS.md](DECISIONS.md) -- Architecture Decision Record index.

### Development

- [TESTING.md](TESTING.md) -- Test strategy, tools, and patterns.
- [DEBUGGING.md](DEBUGGING.md) -- Debugging guides and common issues.
- [API.md](API.md) -- API surface documentation.
- [ENVIRONMENT.md](ENVIRONMENT.md) -- Environment variables and local setup.
- [DEPLOYMENT.md](DEPLOYMENT.md) -- Deployment targets and runbooks.

### Operations

- [MIGRATIONS.md](MIGRATIONS.md) -- Database and schema migrations.
- [INTEGRATIONS.md](INTEGRATIONS.md) -- External service integrations.
- [KNOWN-ISSUES.md](KNOWN-ISSUES.md) -- Known bugs and workarounds.
- [EDGE-CASES.md](EDGE-CASES.md) -- Documented edge cases.

### Reference

- [GLOSSARY.md](GLOSSARY.md) -- Project-specific terminology.
- [TAXONOMY.md](TAXONOMY.md) -- Documentation structure rules.
- [SYNC.md](SYNC.md) -- Notion sync workflow and conflict resolution.

### Subsections

- [initialization/](initialization/) -- Project initialization questionnaire and tracking.
- [adr/](adr/) -- Architecture Decision Records.
- [features/](features/) -- Per-feature documentation.

## How to Use This Documentation

**If you are an LLM CLI (Claude Code, Replit Agent):**

1. Read `TAXONOMY.md` first to understand the structure.
2. Check the relevant doc before making changes to any area.
3. Update docs alongside every code change per `.claude/rules/documentation.md`.
4. Use cross-references to maintain consistency.

**If you are a human contributor:**

1. Start with `ARCHITECTURE.md` to understand the system.
2. Check `ROADMAP.md` to see planned work.
3. Read the relevant feature docs before contributing to a feature.
4. Follow `CONTRIBUTING.md` in the repository root.
