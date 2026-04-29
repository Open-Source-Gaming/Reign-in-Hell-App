# User Dashboard

<!-- LLM GUIDANCE
Purpose: Provide a worked example of a feature overview file. Use this as a reference when creating new features.
Update triggers: N/A (this is an example).
Expected detail: Demonstrates the expected level of specificity for a real feature.
Related files: docs/features/feature-template.md
-->

> **EXAMPLE**: This is a worked example, not a real feature. Use it as a reference for the expected level of detail when documenting your own features.

## Purpose

The user dashboard provides authenticated users with a personalized landing page showing their recent activity, key metrics, and quick actions. It serves as the primary entry point after login.

## User Story

As an authenticated user, I want to see a summary of my recent activity and key metrics so that I can quickly understand the current state and take action.

## Status

Example (not a real feature).

## Scope

- Activity feed showing the last 10 actions.
- Key metrics cards (configurable per user role).
- Quick action buttons for common tasks.
- Responsive layout that works on desktop and mobile.

## Out of Scope

- Real-time updates (deferred to Phase 2).
- Custom dashboard layouts (deferred to backlog).

## Cross-References

- Roadmap: [docs/ROADMAP.md](../../ROADMAP.md)
- Requirements: [requirements.md](requirements.md)
- Architecture: [docs/ARCHITECTURE.md](../../ARCHITECTURE.md)
- Related features: [shared/auth.md](../shared/auth.md), [shared/permissions.md](../shared/permissions.md)
