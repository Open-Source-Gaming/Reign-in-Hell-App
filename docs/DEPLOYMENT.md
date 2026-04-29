# Deployment

<!-- LLM GUIDANCE
Purpose: Document deployment targets, environments, CI/CD configuration, and runbooks.
Update triggers: When deployment targets, processes, or infrastructure changes.
Expected detail: Enough to deploy the project from scratch and troubleshoot deployment issues.
Related files: docs/ENVIRONMENT.md, docs/MIGRATIONS.md, docs/ARCHITECTURE.md
-->

> **SCAFFOLDED**: Fill in during project initialization when the deployment target is chosen.

## When to Fill This In

- When the deployment target is chosen during initialization.
- When CI/CD pipelines are configured.
- When deployment procedures are established.

## Deployment Target

| Setting                      | Value                   |
| ---------------------------- | ----------------------- |
| Platform                     | [TBD at initialization] |
| Region                       | [TBD]                   |
| Environment URL (dev)        | [TBD]                   |
| Environment URL (staging)    | [TBD]                   |
| Environment URL (production) | [TBD]                   |

## Deployment Process

### Automated (CI/CD)

```bash
# Describe the CI/CD pipeline trigger and steps
# [TBD]
```

### Manual

```bash
# Step-by-step manual deployment commands
# [TBD]
```

## Pre-Deployment Checklist

- [ ] All tests pass.
- [ ] Documentation is updated.
- [ ] Migrations are prepared (if applicable).
- [ ] Environment variables are configured.
- [ ] Rollback plan is documented.

## Rollback Procedure

Describe how to roll back a failed deployment.

## Monitoring

Describe what monitoring is in place and how to check deployment health.

## Cross-References

- Environment: [ENVIRONMENT.md](ENVIRONMENT.md)
- Migrations: [MIGRATIONS.md](MIGRATIONS.md)
- Architecture: [ARCHITECTURE.md](ARCHITECTURE.md)
