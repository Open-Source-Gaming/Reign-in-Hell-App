# User Dashboard - Data

<!-- LLM GUIDANCE
Purpose: Worked example of a feature data file.
Update triggers: N/A (this is an example).
Expected detail: Demonstrates how to document data models, schemas, and storage.
Related files: docs/features/_example-feature/overview.md, docs/MIGRATIONS.md
-->

> **EXAMPLE**: This is a worked example. Use it as a reference for documenting data models.

## Models

### ActivityEvent

Represents a single user action recorded for the activity feed.

| Field       | Type          | Description                       | Required |
| ----------- | ------------- | --------------------------------- | -------- |
| `id`        | string (UUID) | Unique event identifier           | Yes      |
| `userId`    | string (UUID) | The user who performed the action | Yes      |
| `action`    | string        | Human-readable action description | Yes      |
| `resource`  | string        | URL path to the related resource  | No       |
| `metadata`  | JSON          | Additional action-specific data   | No       |
| `timestamp` | datetime      | When the action occurred          | Yes      |

### MetricConfig

Defines which metrics are shown for each role.

| Field    | Type     | Description                                    | Required |
| -------- | -------- | ---------------------------------------------- | -------- |
| `id`     | string   | Metric identifier                              | Yes      |
| `label`  | string   | Display label                                  | Yes      |
| `query`  | string   | SQL or query to compute the metric             | Yes      |
| `roles`  | string[] | Roles that can see this metric                 | Yes      |
| `period` | string   | Time period for the metric (e.g., "7d", "30d") | Yes      |

## Schema

```sql
CREATE TABLE activity_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id),
    action VARCHAR(255) NOT NULL,
    resource VARCHAR(512),
    metadata JSONB,
    timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_activity_user_time ON activity_events (user_id, timestamp DESC);
```

## Relationships

- `activity_events.user_id` references `users.id`.
- `MetricConfig` references roles defined in the permissions system (see [shared/permissions.md](../shared/permissions.md)).

## Storage

- Activity events are stored in the primary database.
- Computed metrics are cached in memory (or Redis) with a 5-minute TTL.
- Quick action configuration is stored in a YAML config file, not in the database.

## Migrations

Link to relevant migrations when they exist. See [docs/MIGRATIONS.md](../../MIGRATIONS.md).
