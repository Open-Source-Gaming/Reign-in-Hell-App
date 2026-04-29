# Migrations

<!-- LLM GUIDANCE
Purpose: Document database schemas, migration history, and migration procedures.
Update triggers: When a new migration is created or the migration process changes.
Expected detail: Enough to understand the current schema state and run migrations safely.
Related files: docs/ARCHITECTURE.md, docs/DEPLOYMENT.md
-->

> **SCAFFOLDED**: Fill in when the project has a database or persistent storage layer.

## When to Fill This In

- When the project adds a database.
- When the first schema migration is created.
- When data migration procedures are established.

## Migration Tool

| Setting             | Value                   |
| ------------------- | ----------------------- |
| Tool                | [TBD at initialization] |
| Config file         | [TBD]                   |
| Migration directory | [TBD]                   |

## Running Migrations

```bash
# Run pending migrations
# [TBD]

# Rollback last migration
# [TBD]

# Check migration status
# [TBD]
```

## Migration History

| Version | Description | Date | Reversible |
| ------- | ----------- | ---- | ---------- |
|         |             |      |            |

## Schema Overview

Describe or link to the current database schema.

## Guidelines

- Every migration must be reversible when possible.
- Test migrations against a copy of production data before deploying.
- Never modify a migration that has been applied to production.
- Document breaking changes in the migration body.

## Cross-References

- Architecture: [ARCHITECTURE.md](ARCHITECTURE.md)
- Deployment: [DEPLOYMENT.md](DEPLOYMENT.md)
