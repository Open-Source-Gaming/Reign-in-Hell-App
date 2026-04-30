# Deployment

<!-- LLM GUIDANCE
Purpose: Document deployment targets, environments, CI/CD configuration, and runbooks.
Update triggers: When deployment targets, processes, or infrastructure changes.
Expected detail: Enough to deploy the project from scratch and troubleshoot deployment issues.
Related files: docs/ENVIRONMENT.md, docs/MIGRATIONS.md, docs/ARCHITECTURE.md
-->

## Deployment Targets

| Platform        | Purpose    | URL                           | Deployment Method    |
| --------------- | ---------- | ----------------------------- | -------------------- |
| Cloudflare Pages| Web app    | TBD (after first deployment) | GitHub Actions (auto)|
| App Store       | iOS app    | N/A                          | EAS + manual submit  |
| Play Store      | Android app| N/A                          | EAS + manual submit  |
| Expo Go         | Development| Expo development server      | Local (`make start`) |

## Deployment Process

### Web App (Cloudflare Pages)

**Automated via GitHub Actions:**
```bash
# Triggered automatically on push to main branch
# 1. Build web version: make build-web
# 2. Deploy to Cloudflare Pages via wrangler
# 3. Environment: production
```

**Manual deployment:**
```bash
make deploy-web
# Note: Manual deployment runs through GitHub Actions
```

### Mobile Apps (EAS)

**iOS Build:**
```bash
make eas-build-ios          # Build for iOS
make eas-submit-ios         # Submit to App Store (manual approval needed)
```

**Android Build:**
```bash
make eas-build-android      # Build for Android  
make eas-submit-android     # Submit to Play Store (manual approval needed)
```

**Over-the-Air Updates:**
```bash
make eas-update             # Push update to existing installs
```

### Local Development

```bash
make setup                  # One-time environment setup
make start                  # Start development server
make ios                    # iOS simulator
make android                # Android emulator  
make web                    # Web browser
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
