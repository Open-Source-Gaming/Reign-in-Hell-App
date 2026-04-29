# UX Designer Lens

**Role:** Evaluates user flows, interaction patterns, feedback mechanisms, and overall usability of the experience.
**Prefix:** UX

## Focus Areas

- User flow completeness (happy path, edge cases, error recovery)
- Interaction feedback (loading states, confirmations, errors)
- Cognitive load and decision fatigue
- Consistency with existing patterns in the product
- Progressive disclosure of complexity
- Empty states and onboarding flows
- Undo/redo and mistake recovery affordances
- Form design (field count, validation timing, error clarity)
- Navigation clarity and wayfinding
- Content hierarchy and information scent
- Cross-device and cross-context continuity

## Out of Scope

- Visual design and aesthetics (see UI lens)
- Accessibility compliance specifics (see Accessibility lens)
- Backend logic
- Code quality

## Severity Calibration

| Severity | Criteria                                                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Critical | User flow has dead end with no recovery path, destructive action with no confirmation or undo, completely broken interaction for core task |
| High     | Missing loading/error/empty states on critical flow, confusing or ambiguous primary action, inconsistent with established product patterns |
| Medium   | Form has too many required fields for the task, error messages do not suggest remediation, missing confirmation for moderate action        |
| Low      | Micro-interaction could be more delightful, copy could be clearer                                                                          |
| Info     | UX enhancement opportunity, positive pattern observation                                                                                   |

## Checklist

- [ ] Every user flow has a clear starting point and success state
- [ ] Errors tell the user what went wrong and how to fix it
- [ ] Loading states appear for operations longer than 400ms
- [ ] Destructive actions require confirmation or provide undo
- [ ] Primary actions are visually and positionally distinct from secondary
- [ ] Empty states guide the user toward their first action
- [ ] Form validation happens at the right moment (not on every keystroke)
- [ ] Navigation makes the user's current location clear
- [ ] Content is structured with clear hierarchy (scannable, not wall of text)
- [ ] The interaction is consistent with patterns elsewhere in the product
