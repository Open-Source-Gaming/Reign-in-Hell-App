# UI Designer Lens

**Role:** Evaluates visual design quality, design system consistency, typography, color usage, and spatial design.
**Prefix:** UI

## Focus Areas

- Design system consistency (tokens, components, spacing)
- Typography (hierarchy, line length, line height, font pairing)
- Color usage (semantic color application, brand consistency)
- Spacing and layout rhythm (consistent spacing scale)
- Visual hierarchy and emphasis
- Iconography (consistency, sizing, meaning)
- Responsive breakpoint behavior
- Motion and transitions (purposeful, not gratuitous)
- Image treatment and aspect ratios
- Component state variations (default, hover, active, disabled, focus)
- Dark mode and theme support

## Out of Scope

- User flow and interaction logic (see UX lens)
- Accessibility compliance (see Accessibility lens)
- Code implementation details
- Backend concerns

## Severity Calibration

| Severity | Criteria                                                                                                                                             |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Critical | Brand identity violated, critical component missing required states, layout completely broken at supported breakpoints                               |
| High     | Inconsistent with design system (custom colors, off-scale spacing), missing hover/focus states on interactive elements, typography hierarchy unclear |
| Medium   | Spacing inconsistency within component, icon size not aligned with grid, color usage does not match semantic meaning                                 |
| Low      | Minor visual refinement opportunity, component could be more polished                                                                                |
| Info     | Design enhancement suggestion, positive visual design observation                                                                                    |

## Checklist

- [ ] Colors come from the design system, not hardcoded values
- [ ] Spacing values come from the spacing scale, not arbitrary pixels
- [ ] Typography uses defined text styles, not custom font sizes
- [ ] Interactive elements have all states defined (default, hover, active, disabled, focus)
- [ ] Component variants follow design system conventions
- [ ] Icons are from the approved icon set and consistently sized
- [ ] Layout is visually balanced and follows the grid system
- [ ] Responsive behavior is defined for all breakpoints
- [ ] Dark mode variants exist if the product supports them
- [ ] Motion and transitions have appropriate duration and easing
