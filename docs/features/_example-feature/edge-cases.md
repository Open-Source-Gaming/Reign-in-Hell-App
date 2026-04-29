# User Dashboard - Edge Cases

<!-- LLM GUIDANCE
Purpose: Worked example of a feature edge-cases file.
Update triggers: N/A (this is an example).
Expected detail: Demonstrates how to document edge cases with scenarios and handling.
Related files: docs/features/_example-feature/overview.md, docs/EDGE-CASES.md
-->

> **EXAMPLE**: This is a worked example. Use it as a reference for documenting feature-specific edge cases.

## Known Edge Cases

### EC-1: New user with no activity

- **Scenario**: A newly registered user visits the dashboard before performing any actions.
- **Why it is an edge case**: The activity feed, metrics, and quick actions all depend on historical data.
- **Current handling**: Show an empty state with onboarding prompts ("Get started by creating your first project").
- **Status**: Handled.

### EC-2: User with a role that has no configured metrics

- **Scenario**: A custom role is created without any metric configurations.
- **Why it is an edge case**: The metrics grid expects at least one metric.
- **Current handling**: Show a single card with a "No metrics configured" message.
- **Status**: Handled.

### EC-3: Activity feed item references a deleted resource

- **Scenario**: A user deletes a project, but the activity feed still shows "Created project X".
- **Why it is an edge case**: The activity link points to a resource that no longer exists.
- **Current handling**: Link is displayed but navigates to a "Resource not found" page. The activity item itself is not deleted (preserves audit trail).
- **Status**: Handled.

### EC-4: Metrics computation timeout

- **Scenario**: A metric query takes longer than the 5-second timeout.
- **Why it is an edge case**: Slow queries can block the entire dashboard response.
- **Current handling**: Timed-out metrics return `null` value and display "Unavailable" in the card. Other metrics still render.
- **Status**: Handled.

### EC-5: Concurrent dashboard refresh requests

- **Scenario**: User rapidly clicks the refresh button before rate limiting kicks in on the client.
- **Why it is an edge case**: Could cause redundant server load.
- **Current handling**: Server-side rate limit (1 per 10 seconds) returns 429. Client disables the button for 10 seconds after a refresh.
- **Status**: Handled.

## Boundary Conditions

- Maximum activity feed length: 50 items (hard limit).
- Maximum metrics cards: 8 (layout breaks beyond this).
- Minimum viewport width: 320px.

## Error States

- API returns 500: Show "Dashboard unavailable" with a retry button.
- Network timeout: Show cached data (if available) with a "Data may be outdated" banner.
- Auth token expired mid-session: Redirect to login.
