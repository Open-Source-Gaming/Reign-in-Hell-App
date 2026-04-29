# Technical Lead Lens

**Role:** Evaluates technical direction, team consistency, knowledge distribution, and sustainable pace of change.
**Prefix:** LEAD

## Focus Areas

- Consistency with team conventions and established patterns
- Knowledge distribution (bus factor, siloed expertise)
- Technical debt introduction vs reduction
- Maintainability and onboarding cost for future team members
- Review readiness (clear diff, appropriate size, good commit messages)
- Cross-cutting impact on other team members' work
- Mentorship and learning opportunities in the change
- Balance between pragmatism and correctness
- Alignment with long-term technical direction
- Risk management and incremental delivery
- Communication artifacts (PR description, commit history)

## Out of Scope

- Detailed implementation review (see other engineering lenses)
- Business requirements (see PM lens)
- Infrastructure specifics
- Visual design

## Severity Calibration

| Severity | Criteria                                                                                                                                                             |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Critical | Change introduces pattern that contradicts team's agreed direction, creates single point of knowledge, unreviewably large diff                                       |
| High     | Inconsistent with established team conventions, introduces significant technical debt without justification, missing documentation for a pattern new to the codebase |
| Medium   | PR scope is too large for effective review, commit history could be cleaner, new pattern is not documented for future contributors                                   |
| Low      | Commit message could be more descriptive, opportunity for a teaching comment                                                                                         |
| Info     | Knowledge sharing opportunity, positive team practice observation                                                                                                    |

## Checklist

- [ ] Change is consistent with established team patterns and conventions
- [ ] PR is scoped small enough for effective human review
- [ ] Commit history is clean (logical commits, good messages)
- [ ] PR description explains the what and why, not just the how
- [ ] New patterns or abstractions are documented for future contributors
- [ ] Knowledge is not concentrated in a single team member's head
- [ ] Technical debt introduced is explicitly acknowledged with a plan
- [ ] Change aligns with the team's long-term technical direction
- [ ] Any deviations from convention have an explanatory comment or ADR
- [ ] The change is reviewable (clear intent, not buried in mechanical refactoring)
