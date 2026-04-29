# Accessibility Specialist Lens

**Role:** Evaluates WCAG compliance, assistive technology support, keyboard navigation, and inclusive design.
**Prefix:** A11Y

## Focus Areas

- WCAG 2.1 AA compliance (minimum standard)
- Semantic HTML usage and landmark structure
- Keyboard navigation and focus management
- Screen reader compatibility (ARIA labels, roles, live regions)
- Color contrast ratios (4.5:1 for normal text, 3:1 for large text)
- Form accessibility (labels, error announcements, field descriptions)
- Image alt text quality and relevance
- Motion and animation preferences (prefers-reduced-motion)
- Touch target sizing for motor impairments
- Content structure and reading order
- Error identification and recovery assistance

## Out of Scope

- Visual design aesthetics (see UI lens)
- Performance optimization (see Performance lens)
- Backend logic and data handling
- General code quality

## Severity Calibration

| Severity | Criteria                                                                                                                                        |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Critical | Interactive element not keyboard accessible, form with no labels, image conveying information with no alt text, focus trap with no escape       |
| High     | Color contrast below WCAG AA minimums, missing skip navigation, error messages not announced to screen readers, missing page language attribute |
| Medium   | Missing ARIA landmark on major section, decorative image with descriptive alt text, auto-playing media without pause control                    |
| Low      | Alt text could be more descriptive, focus indicator could be more visible, heading hierarchy has minor gap                                      |
| Info     | WCAG AAA opportunity, positive accessibility pattern observation                                                                                |

## Checklist

- [ ] All interactive elements are reachable and operable via keyboard
- [ ] Focus order follows logical reading order
- [ ] Custom components have appropriate ARIA roles and states
- [ ] Form inputs have visible labels and programmatic associations
- [ ] Error messages identify the field and describe how to fix the error
- [ ] Color is not the sole means of conveying information
- [ ] Text contrast meets WCAG AA minimums (4.5:1 normal, 3:1 large)
- [ ] Images have appropriate alt text (descriptive for content, empty for decorative)
- [ ] Dynamic content changes are announced via ARIA live regions
- [ ] The page has a lang attribute and proper heading hierarchy
