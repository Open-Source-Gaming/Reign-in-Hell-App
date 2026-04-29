# User Dashboard - UI

<!-- LLM GUIDANCE
Purpose: Worked example of a feature UI file.
Update triggers: N/A (this is an example).
Expected detail: Demonstrates how to document components, layout, and interactions.
Related files: docs/features/_example-feature/overview.md
-->

> **EXAMPLE**: This is a worked example. Use it as a reference for documenting UI features.

## Components

| Component       | Purpose                          | Location                          |
| --------------- | -------------------------------- | --------------------------------- |
| `DashboardPage` | Page container and data fetching | `src/pages/Dashboard.tsx`         |
| `ActivityFeed`  | Displays recent actions list     | `src/components/ActivityFeed.tsx` |
| `MetricsCard`   | Displays a single metric         | `src/components/MetricsCard.tsx`  |
| `MetricsGrid`   | Grid layout for metrics cards    | `src/components/MetricsGrid.tsx`  |
| `QuickActions`  | Button group for common actions  | `src/components/QuickActions.tsx` |

## Layout

```
+------------------------------------------+
| Navbar                                    |
+------------------------------------------+
| Welcome, [User Name]                     |
+------------------------------------------+
| Metrics Grid (2-4 cards, responsive)      |
| [Card 1] [Card 2] [Card 3] [Card 4]     |
+------------------------------------------+
| Activity Feed          | Quick Actions   |
| - Action 1             | [Button A]      |
| - Action 2             | [Button B]      |
| - Action 3             | [Button C]      |
| - ...                  |                 |
+------------------------------------------+
| Footer                                    |
+------------------------------------------+
```

## Interactions

- Clicking a metrics card navigates to the detailed view for that metric.
- Clicking an activity feed item navigates to the related resource.
- Quick action buttons trigger their respective workflows (may open modals or navigate).
- Pull-to-refresh on mobile reloads dashboard data.

## Responsive Behavior

- Desktop (1024px+): 4-column metrics grid, side-by-side feed and actions.
- Tablet (768px-1023px): 2-column metrics grid, stacked feed and actions.
- Mobile (below 768px): 1-column metrics grid, stacked feed and actions.

## Accessibility

- All interactive elements have descriptive ARIA labels.
- Metrics cards use `role="region"` with `aria-label`.
- Activity feed is a semantic list (`<ol>`).
- Color is not the sole indicator for any information.
