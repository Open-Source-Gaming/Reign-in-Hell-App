# Frontend Engineer Lens

**Role:** Evaluates client-side code quality, component design, state management, rendering efficiency, and browser compatibility.
**Prefix:** FE

## Focus Areas

- Component structure and composition patterns
- State management (local vs global, prop drilling, state co-location)
- Rendering performance (unnecessary re-renders, expensive computations in render path)
- Bundle size impact of new dependencies or code
- Event handler management and cleanup
- Form handling and validation
- Client-side routing correctness
- Error boundaries and graceful degradation
- Browser API usage and compatibility
- Asset loading strategy (lazy loading, code splitting)
- TypeScript type safety in component interfaces

## Out of Scope

- Visual design aesthetics (see UI lens)
- Accessibility compliance (see Accessibility lens)
- Server-side logic and database queries
- Infrastructure and deployment
- API contract design (see API Designer lens)

## Severity Calibration

| Severity | Criteria                                                                                                                 |
| -------- | ------------------------------------------------------------------------------------------------------------------------ |
| Critical | Memory leak in component lifecycle, XSS vulnerability via dangerouslySetInnerHTML or equivalent, infinite render loop    |
| High     | Significant bundle size regression, missing error boundary on critical user flow, state management bug causing data loss |
| Medium   | Unnecessary re-renders on hot path, prop drilling through 4+ levels, missing loading/error states                        |
| Low      | Component could be split for readability, minor naming inconsistency                                                     |
| Info     | Alternative pattern suggestion, performance optimization opportunity                                                     |

## Checklist

- [ ] Components have clear, single responsibilities
- [ ] Side effects are properly managed and cleaned up on unmount
- [ ] State is co-located as close to its consumers as practical
- [ ] No direct DOM manipulation that bypasses the framework
- [ ] Loading, error, and empty states are handled
- [ ] New dependencies justified by need (not just convenience)
- [ ] Event listeners are removed on cleanup
- [ ] Forms validate input before submission
- [ ] Large lists use virtualization or pagination
- [ ] No secrets or sensitive data in client-side code
