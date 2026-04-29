# User Dashboard - API

<!-- LLM GUIDANCE
Purpose: Worked example of a feature API file.
Update triggers: N/A (this is an example).
Expected detail: Demonstrates how to document endpoints with request/response formats.
Related files: docs/features/_example-feature/overview.md, docs/API.md
-->

> **EXAMPLE**: This is a worked example. Use it as a reference for documenting API endpoints.

## Endpoints

### `GET /api/dashboard`

- **Description**: Fetch the dashboard data for the authenticated user.
- **Auth**: Required (Bearer token).
- **Parameters**:
  | Param | Type | Required | Description |
  |-------|------|----------|-------------|
  | `limit` | query, integer | No | Number of activity items (default: 10, max: 50) |
- **Response**: `200 OK`
  ```json
  {
    "user": {
      "name": "Jane Doe",
      "role": "admin"
    },
    "metrics": [
      {
        "id": "active-users",
        "label": "Active Users",
        "value": 1234,
        "change": 5.2,
        "period": "7d"
      }
    ],
    "activity": [
      {
        "id": "evt-001",
        "action": "Created project",
        "resource": "/projects/123",
        "timestamp": "2025-01-15T10:30:00Z"
      }
    ],
    "quickActions": [
      {
        "id": "create-project",
        "label": "New Project",
        "href": "/projects/new"
      }
    ]
  }
  ```
- **Errors**:
  | Code | Description |
  |------|-------------|
  | 401 | Not authenticated |
  | 500 | Internal server error |

### `POST /api/dashboard/refresh`

- **Description**: Force-refresh cached dashboard data.
- **Auth**: Required (Bearer token).
- **Response**: `200 OK` (same shape as GET /api/dashboard).
- **Rate limit**: 1 request per 10 seconds per user.

## Data Contracts

- Metrics are role-dependent: the server filters by user role before responding.
- Activity items are sorted by timestamp descending.
- Quick actions are configured per role in the server config.
