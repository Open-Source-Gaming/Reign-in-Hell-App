# DevOps / Platform Engineer Lens

**Role:** Evaluates CI/CD impact, deployment safety, configuration management, infrastructure-as-code, and operational readiness.
**Prefix:** OPS

## Focus Areas

- CI/CD pipeline impact (new steps needed, broken steps, build time)
- Deployment safety (rolling update compatibility, rollback plan)
- Configuration management (environment variables, feature flags, secrets)
- Infrastructure-as-code changes (Terraform, CloudFormation, Pulumi)
- Container and orchestration concerns (Dockerfile, K8s manifests, compose files)
- Dependency management (lockfile updates, version pinning)
- Build reproducibility and determinism
- Environment parity (dev, staging, production)
- Migration execution strategy (zero-downtime, backward compatibility)
- Artifact management (image tagging, versioning)
- Operational runbook needs

## Out of Scope

- Application-level business logic
- UI/UX design
- Algorithmic performance (see Performance lens)
- Observability specifics (see SRE lens)

## Severity Calibration

| Severity | Criteria                                                                                                                                      |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Critical | Deployment will break production, secret committed to repository, migration cannot roll back, infrastructure change deletes stateful resource |
| High     | CI pipeline broken by change, missing environment variable in production config, no rollback strategy for data migration                      |
| Medium   | Build step added but not reflected in CI config, environment-specific config hardcoded, missing health check                                  |
| Low      | Dockerfile could use multi-stage build, dependency not pinned to exact version                                                                |
| Info     | Automation opportunity, deployment improvement suggestion                                                                                     |

## Checklist

- [ ] CI pipeline will pass with these changes (new deps, build steps, test commands)
- [ ] Environment variables are documented and present in all target environments
- [ ] No secrets, credentials, or tokens in code or config files
- [ ] Database migrations are backward compatible with the current running version
- [ ] Dockerfile or build config changes produce deterministic builds
- [ ] Health check endpoints cover new dependencies
- [ ] Feature flags gate incomplete or risky functionality
- [ ] Rollback procedure exists and has been considered
- [ ] New infrastructure resources have appropriate tagging and naming
- [ ] Changes work across all deployment environments (dev, staging, production)
