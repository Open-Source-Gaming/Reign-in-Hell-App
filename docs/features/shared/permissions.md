# Permissions (Shared Concern)

<!-- LLM GUIDANCE
Purpose: Document the shared permissions and authorization system.
Update triggers: When roles, permissions, or access control logic changes.
Expected detail: Role definitions, permission matrix, and which features depend on it.
Related files: docs/features/shared/auth.md, docs/ARCHITECTURE.md
-->

> **SCAFFOLDED**: Fill in when authorization/permissions are implemented.

## When to Fill This In

- When the project defines user roles.
- When access control is added to routes, endpoints, or UI elements.
- When the permissions model is chosen (RBAC, ABAC, ACL, etc.).

## Permissions Model

Describe the model: Role-Based Access Control (RBAC), Attribute-Based Access Control (ABAC), Access Control Lists (ACL), or custom.

## Roles

| Role  | Description     | Default Permissions |
| ----- | --------------- | ------------------- |
| Admin | Full access     | All                 |
| User  | Standard access | Read, create own    |
| Guest | Limited access  | Read only           |

## Permission Matrix

| Resource     | Admin | User | Guest |
| ------------ | ----- | ---- | ----- |
| [Resource A] | CRUD  | CR   | R     |
| [Resource B] | CRUD  | R    | --    |

## Enforcement Points

- **API**: Middleware or decorator on endpoints.
- **UI**: Component-level visibility based on role.
- **Database**: Row-level security (if applicable).

## Features That Depend on This

| Feature  | How It Uses Permissions           |
| -------- | --------------------------------- |
| Navbar   | Hides/shows links by role         |
| Auth     | Provides identity for role lookup |
| [Others] | [Description]                     |

## Related ADRs

Link to any ADR about permissions model choice.
