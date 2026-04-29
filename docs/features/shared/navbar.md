# Navbar (Shared Component)

<!-- LLM GUIDANCE
Purpose: Document the shared navigation bar component used across multiple features.
Update triggers: When the navbar structure, links, or behavior changes.
Expected detail: Component structure, configuration, and which features depend on it.
Related files: docs/features/shared/auth.md, docs/features/shared/permissions.md
-->

> **SCAFFOLDED**: Fill in when the project has a navigation component.

## When to Fill This In

- When the project has a UI with a navigation bar.
- When navigation links are defined.
- When the navbar integrates with auth or permissions.

## Purpose

Describe what the navbar contains and how it behaves.

## Structure

- Logo / brand.
- Primary navigation links.
- User menu (if authenticated).
- Mobile responsive behavior.

## Dependencies

| Feature     | How It Uses the Navbar          |
| ----------- | ------------------------------- |
| Auth        | Shows login/logout state        |
| Permissions | Shows/hides links based on role |

## Configuration

How are navbar links configured? Hardcoded, config file, CMS, etc.

## Features That Depend on This

List feature directories that reference or modify the navbar.
