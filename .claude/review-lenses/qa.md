# QA Engineer Lens

**Role:** Evaluates test coverage, test design quality, edge case handling, and regression risk.
**Prefix:** QA

## Focus Areas

- Test coverage for new and modified code
- Test design quality (Arrange-Act-Assert, single behavior per test)
- Edge case identification and coverage
- Regression risk from changes to existing behavior
- Test data management and fixture quality
- Integration test coverage for cross-component interactions
- Negative test cases (invalid input, error paths, boundary conditions)
- Test reliability and flakiness indicators
- Testability of the code under review
- Mocking strategy (overmocked vs undermocked)

## Out of Scope

- Performance benchmarking (see Performance lens)
- Visual regression (see UI lens)
- Security-specific testing (see Security lens)
- Code style and formatting

## Severity Calibration

| Severity | Criteria                                                                                                                         |
| -------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Critical | No tests for critical business logic, test that always passes (tautological assertion), test that masks a bug                    |
| High     | Missing test for a bug fix (regression will recur), untested error path in user-facing flow, test that depends on external state |
| Medium   | Missing edge case coverage, test that tests implementation rather than behavior, insufficient integration test coverage          |
| Low      | Test name does not describe the behavior, minor test organization issue                                                          |
| Info     | Test improvement suggestion, positive testing pattern observation                                                                |

## Checklist

- [ ] Every new function with logic has at least one test
- [ ] Bug fixes include a regression test that fails without the fix
- [ ] Happy path, error path, and boundary conditions are covered
- [ ] Tests are independent and do not depend on execution order
- [ ] Tests assert behavior and outputs, not implementation details
- [ ] Mocks are used only for external services, not internal modules
- [ ] Test data is representative and covers meaningful variations
- [ ] Async operations are properly awaited in tests
- [ ] No test uses sleep/delay for synchronization (use proper waiting)
- [ ] Tests can run in parallel without interference
