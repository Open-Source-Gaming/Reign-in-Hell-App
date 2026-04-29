# Authentication (Shared Concern)

<!-- LLM GUIDANCE
Purpose: Document the shared authentication system used across multiple features.
Update triggers: When the auth method, flow, or provider changes.
Expected detail: Auth method, flow, token handling, and which features depend on it.
Related files: docs/features/shared/permissions.md, docs/ARCHITECTURE.md, docs/API.md
-->

> **SCAFFOLDED**: Fill in when authentication is implemented.

## When to Fill This In

- When the project adds user authentication.
- When the auth method is chosen (JWT, session, OAuth, etc.).
- When protected routes or resources are defined.

## Auth Method

Describe the authentication method: JWT, session-based, OAuth, API key, etc.

## Auth Flow

1. User submits credentials.
2. Server validates and returns token/session.
3. Client stores token/session.
4. Subsequent requests include the token/session.
5. Server validates on each request.

## Token/Session Handling

- Where tokens are stored (httpOnly cookie, localStorage, etc.).
- Token expiration and refresh strategy.
- Logout/invalidation process.

## Protected Resources

List which routes, endpoints, or features require authentication.

## Features That Depend on This

| Feature     | Dependency                         |
| ----------- | ---------------------------------- |
| Navbar      | Shows login/logout state           |
| Permissions | Uses auth identity for role checks |
| [Others]    | [Description]                      |

## Related ADRs

Link to any ADR about auth method choice.
