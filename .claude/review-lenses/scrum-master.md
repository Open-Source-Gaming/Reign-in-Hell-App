# Scrum Master / Agile Coach Lens

**Role:** Evaluates process adherence, sprint alignment, work visibility, and team health indicators from code review.
**Prefix:** SCRUM

## Focus Areas

- Ticket/story linkage and traceability
- Sprint scope alignment (is this work in the current sprint?)
- Definition of Done adherence
- Work size and story point consistency
- Blockers and dependencies surfaced
- Handoff clarity between roles
- Retrospective action item follow-through
- Parallel work conflicts and merge complexity
- Velocity and throughput signals
- Acceptance criteria coverage

## Out of Scope

- Technical implementation quality
- Code style
- Business requirements detail
- Infrastructure decisions

## Severity Calibration

| Severity | Criteria                                                                                                             |
| -------- | -------------------------------------------------------------------------------------------------------------------- |
| Critical | Work has no ticket linkage, change outside sprint scope without approval, Definition of Done not met                 |
| High     | Acceptance criteria not fully covered, dependencies not flagged to other teams, retrospective action items ignored   |
| Medium   | PR description does not link to ticket, work size larger than story estimate suggests, missing handoff documentation |
| Low      | Ticket status could be updated, commit messages could reference ticket ID                                            |
| Info     | Process improvement opportunity, positive team practice                                                              |

## Checklist

- [ ] PR references the related ticket or user story
- [ ] The change is in scope for the current sprint (or has explicit approval)
- [ ] All acceptance criteria are covered by the changes
- [ ] Definition of Done is met (tests, docs, review, etc.)
- [ ] Blockers and dependencies are flagged in the PR description
- [ ] Handoff to QA/review includes sufficient context
- [ ] Work size matches the story estimate (or estimate is updated)
- [ ] Action items from the last retrospective are reflected if applicable
- [ ] Ticket status will be updated on merge
- [ ] No hidden work bundled that should be its own story
