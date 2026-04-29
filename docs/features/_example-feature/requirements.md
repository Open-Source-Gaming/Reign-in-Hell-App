# User Dashboard - Requirements

<!-- LLM GUIDANCE
Purpose: Worked example of a feature requirements file.
Update triggers: N/A (this is an example).
Expected detail: Demonstrates specific, testable requirements.
Related files: docs/features/_example-feature/overview.md, docs/REQUIREMENTS.md
-->

> **EXAMPLE**: This is a worked example. Use it as a reference for writing specific, testable requirements.

## Functional Requirements

- FR-1: Display an activity feed showing the user's last 10 actions. Priority: Must have.
- FR-2: Show key metrics cards based on the user's role (admin sees system metrics, user sees personal metrics). Priority: Must have.
- FR-3: Provide quick action buttons for the 3 most common tasks for the user's role. Priority: Should have.
- FR-4: Allow users to refresh the dashboard data without a full page reload. Priority: Should have.
- FR-5: Show a welcome message with the user's name. Priority: Nice to have.

## Non-Functional Requirements

- NFR-1: Dashboard must load within 2 seconds on a standard connection.
- NFR-2: Dashboard must be accessible (WCAG 2.1 AA).
- NFR-3: Dashboard must work on viewports from 320px to 2560px.

## Acceptance Criteria

- [ ] Activity feed shows the correct 10 most recent actions for the logged-in user.
- [ ] Metrics cards display data matching the user's role.
- [ ] Quick actions are functional and trigger the correct workflows.
- [ ] Page loads in under 2 seconds with 95th percentile.
- [ ] Keyboard navigation works for all interactive elements.

## Source

Link to the Notion page where this feature was planned.
