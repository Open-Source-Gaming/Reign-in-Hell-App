# Architecture

<!-- LLM GUIDANCE
Purpose: Describe the system's high-level design, component relationships, and data flow.
Update triggers: When system components, their relationships, or infrastructure changes.
Expected detail: Enough to understand the system without reading every source file.
Related files: docs/REQUIREMENTS.md, docs/DECISIONS.md, docs/features/
-->

> **SCAFFOLDED**: This file contains the template structure. Fill it in during or after project initialization when the architecture is defined.

## System Overview

**Reign in Hell Companion** is a cross-platform mobile and web app for managing cabals (demon groups), campaigns, and battles in the Reign in Hell tabletop miniature game. 

**Business Goal**: Reduce paper/spreadsheet overhead by providing digital tools for cabal rosters, soul currency management, demon advancement, and per-battle state tracking so gameplay stays fast and persistent.

**Target Users**: Reign in Hell tabletop players running games solo or at the table.

## Component Diagram

Cross-platform mobile app architecture using Expo (React Native + React Native Web):

```
[Mobile App (iOS/Android)] ━━━━━━━━━┓
                                   ┃
[Web App (Browser)]        ━━━━━━━━━┫━━━ [Shared React Native Codebase]
                                   ┃          ┃
[Desktop (Future)]         ━━━━━━━━━┛          ┃
                                              ┃
                                              v
                                    [Local SQLite Database]
                                    [Expo SQLite + Drizzle ORM]
```

## Components

### Component A

- **Purpose**: What this component does.
- **Technology**: Language, framework, or service.
- **Location**: Where the source code lives.
- **Dependencies**: What it depends on.
- **Owned by**: Team or individual.

### Component B

- **Purpose**:
- **Technology**:
- **Location**:
- **Dependencies**:
- **Owned by**:

## Data Flow

Describe how data moves through the system from input to output.

1. User sends request to...
2. Request is processed by...
3. Data is stored in...
4. Response is returned to...

## Infrastructure

Describe the deployment infrastructure: hosting, databases, caches, queues, CDN, etc.

<!-- Static Site + CMS Architecture stub.
     Fill in when Q12.1 = yes during initialization. Replace placeholders with the values
     captured in docs/initialization/PROJECT_ANSWERS.md.

     Network topology:

         {{DOMAIN}}            -> Cloudflare Pages (static SSG output)
         ghost.{{DOMAIN}}      -> Cloudflare Tunnel -> {{PROJECT_PREFIX}}-ghost (:2368)

     Build pipeline:

         GitHub Actions runner (self-hosted on VPS)
           -> SSG build (with GHOST_URL + GHOST_CONTENT_API_KEY)
           -> static output uploaded as artifact
           -> wrangler pages deploy -> Cloudflare Pages CDN

     Component owners and dependencies are filled in during /initialize-project.
-->


## Key Design Decisions

Link to relevant ADRs (add as needed):

- No ADRs have been created yet. See [ADR template](adr/ADR-000-template.md) to get started.

## Cross-References

- Requirements: [REQUIREMENTS.md](REQUIREMENTS.md)
- Feature details: [features/](features/)
- Deployment: [DEPLOYMENT.md](DEPLOYMENT.md)
