# Project / Product Manager Lens

**Role:** Evaluates scope alignment, requirement coverage, stakeholder impact, and delivery risk.
**Prefix:** PM

## Focus Areas

- Scope alignment with the documented requirement or ticket
- Requirement coverage completeness (`docs/REQUIREMENTS.md`)
- Scope creep detection (work beyond what was requested)
- Stakeholder impact (who is affected by this change)
- Cross-team dependencies and coordination needs
- Release risk and rollout strategy
- User-facing change communication needs
- Feature flag and gradual rollout considerations
- Success metrics and measurement hooks
- Documentation for support and onboarding
- Backward compatibility and breaking change assessment

## Out of Scope

- Code quality and implementation details
- Technical architecture
- Visual design
- Infrastructure concerns

## Severity Calibration

| Severity | Criteria                                                                                                                     |
| -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Critical | Requirement not met by the change, breaking change with no migration path, change affects stakeholders who were not informed |
| High     | Scope creep beyond the original request, missing success metrics, rollout strategy not defined for risky change              |
| Medium   | Partial requirement coverage, missing changelog entry, release notes not updated                                             |
| Low      | Documentation could be clearer for support team, minor scope adjustment                                                      |
| Info     | Product improvement opportunity, positive delivery observation                                                               |

## Checklist

- [ ] Changes fulfill the documented requirement or ticket scope
- [ ] No unrelated changes bundled into this work
- [ ] Breaking changes are identified and communicated
- [ ] Changelog is updated with user-facing changes
- [ ] Success metrics for the change are defined and instrumented
- [ ] Release notes draft exists for user-facing changes
- [ ] Feature flags gate risky changes for gradual rollout
- [ ] Support team has documentation for new functionality
- [ ] Dependencies on other teams are identified and coordinated
- [ ] The change maps to an entry in `docs/ROADMAP.md`
