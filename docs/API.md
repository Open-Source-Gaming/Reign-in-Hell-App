# API

<!-- LLM GUIDANCE
Purpose: Document the project's API surface -- endpoints, request/response formats, and auth.
Update triggers: When API endpoints are added, changed, or removed.
Expected detail: Enough to call any endpoint without reading source code.
Related files: docs/ARCHITECTURE.md, docs/features/*/api.md
-->

> **SCAFFOLDED**: Fill in when the project has API endpoints.

## When to Fill This In

- When the first API endpoint is created.
- When the API versioning strategy is decided.
- When authentication/authorization is implemented.

## Base URL

| Environment | URL   |
| ----------- | ----- |
| Development | [TBD] |
| Staging     | [TBD] |
| Production  | [TBD] |

## Authentication

Describe the authentication method: API key, JWT, OAuth, session, etc.

## Endpoints

### [Group Name]

#### `GET /endpoint`

- **Description**: What this endpoint does.
- **Auth**: Required / Public.
- **Parameters**:
  | Param | Type | Required | Description |
  |-------|------|----------|-------------|
  | | | | |
- **Response**: `200 OK`
  ```json
  {}
  ```
- **Errors**:
  | Code | Description |
  |------|-------------|
  | 401 | Unauthorized |
  | 404 | Not found |
- **Feature doc**: Link to the feature's `api.md`.

## API Versioning

Describe the versioning strategy: URL path (`/v1/`), header, query param, etc.

## Rate Limiting

Describe rate limits, if any.

## Cross-References

- Architecture: [ARCHITECTURE.md](ARCHITECTURE.md)
- Per-feature API docs: see `api.md` in each feature directory.
- Integrations (consumed APIs): [INTEGRATIONS.md](INTEGRATIONS.md)
