# User Dashboard - Tests

<!-- LLM GUIDANCE
Purpose: Worked example of a feature tests file.
Update triggers: N/A (this is an example).
Expected detail: Demonstrates how to define a test plan with specific test cases.
Related files: docs/features/_example-feature/overview.md, docs/TESTING.md
-->

> **EXAMPLE**: This is a worked example. Use it as a reference for writing feature test plans.

## Test Plan

| Level       | Scope                                  | Tool               |
| ----------- | -------------------------------------- | ------------------ |
| Unit        | MetricsCard rendering, data formatting | Jest/Vitest        |
| Unit        | Activity feed sorting and filtering    | Jest/Vitest        |
| Integration | Dashboard API endpoint                 | Supertest          |
| Integration | Role-based metric filtering            | Supertest          |
| E2E         | Full dashboard load and interaction    | Playwright/Cypress |

## Unit Test Cases

- [ ] MetricsCard renders label and value correctly.
- [ ] MetricsCard shows positive change with up indicator.
- [ ] MetricsCard shows negative change with down indicator.
- [ ] ActivityFeed renders the correct number of items.
- [ ] ActivityFeed sorts items by timestamp descending.
- [ ] ActivityFeed handles empty activity list gracefully.
- [ ] QuickActions renders buttons matching the user's role.

## Integration Test Cases

- [ ] GET /api/dashboard returns 200 with valid auth token.
- [ ] GET /api/dashboard returns 401 without auth token.
- [ ] GET /api/dashboard returns role-appropriate metrics for admin.
- [ ] GET /api/dashboard returns role-appropriate metrics for standard user.
- [ ] GET /api/dashboard respects the `limit` parameter.
- [ ] POST /api/dashboard/refresh returns fresh data.
- [ ] POST /api/dashboard/refresh enforces rate limit.

## E2E Test Cases

- [ ] Dashboard loads and displays all sections within 2 seconds.
- [ ] Clicking a metrics card navigates to the detail view.
- [ ] Clicking an activity item navigates to the resource.
- [ ] Quick action buttons trigger the correct workflow.
- [ ] Dashboard is keyboard-navigable.

## Edge Cases

See [edge-cases.md](edge-cases.md) for this feature's edge cases.

## Coverage Notes

- Focus coverage on the API endpoint and role-based filtering logic.
- UI component tests should focus on behavior, not snapshot matching.
