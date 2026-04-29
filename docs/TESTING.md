# Testing

<!-- LLM GUIDANCE
Purpose: Define the test strategy, tools, patterns, and coverage goals.
Update triggers: When test tools, coverage thresholds, or test patterns change.
Expected detail: Enough to know what to test, how to test it, and what tools to use.
Related files: .claude/rules/testing.md, docs/features/*/tests.md
-->

> **SCAFFOLDED**: Fill in the tool-specific sections during project initialization when the tech stack is chosen.

## Test Strategy

- Write tests for all observable behavior.
- Prefer integration tests for API endpoints and data flows.
- Use unit tests for isolated logic and transformations.
- Use end-to-end tests sparingly, for critical user paths only.

## Test Tools

| Purpose           | Tool                    | Configuration |
| ----------------- | ----------------------- | ------------- |
| Unit tests        | [TBD at initialization] |               |
| Integration tests | [TBD at initialization] |               |
| End-to-end tests  | [TBD at initialization] |               |
| Coverage          | [TBD at initialization] |               |
| Linting           | [TBD at initialization] |               |

## Running Tests

```bash
# Run all tests
# [TBD at initialization]

# Run tests for a specific file
# [TBD at initialization]

# Run tests with coverage
# [TBD at initialization]
```

## Coverage Goals

- Target: Set during initialization.
- Track trends, not just absolute numbers.
- Do not write tests solely to increase coverage.

## Test File Location

Set during initialization. Options:

- Co-located with source files (e.g., `Component.test.tsx` next to `Component.tsx`).
- Parallel `tests/` directory mirroring `src/` structure.

## Test Naming

- Use descriptive names: `test_returns_empty_list_when_no_items_found`.
- Group related tests by behavior, not by method name.

## Cross-References

- Testing rules: [.claude/rules/testing.md](../.claude/rules/testing.md)
- Per-feature test plans: see `tests.md` in each feature directory.
