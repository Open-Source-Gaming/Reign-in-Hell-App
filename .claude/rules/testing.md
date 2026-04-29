# Testing Rules

<!-- LLM GUIDANCE
Purpose: Define when and how tests must be written.
Update triggers: When testing tools, coverage thresholds, or test patterns change.
Expected detail: Clear rules about test requirements. Not aspirational goals.
Related files: docs/TESTING.md, .claude/rules/code-style.md
-->

## Core Rule

Prefer adding tests whenever practical. If you write or change code that has observable behavior, write a test for it.

## When Tests Are Required

- New functions or methods with logic (not simple getters/setters).
- Bug fixes -- write a test that reproduces the bug before fixing it.
- API endpoints.
- Data transformations or validation logic.
- Any code that previously caused a regression.

## When Tests May Be Skipped

- Pure configuration changes (environment variables, build config).
- Documentation-only changes.
- Trivial one-line changes with no behavioral impact.
- Scaffolding or boilerplate that will be tested once filled in.

## Test Structure

- Co-locate test files with source files, or use a parallel `tests/` directory -- follow the project convention established at initialization.
- Name test files with a `test_` prefix or `.test.` infix matching the language convention.
- Each test should test one behavior.
- Use descriptive test names that explain what is being tested and the expected outcome.

## Test Patterns

- Arrange, Act, Assert.
- Do not test implementation details. Test behavior and outputs.
- Prefer real dependencies over mocks when practical and fast.
- Use mocks only for external services, network calls, or slow resources.

## Coverage

- Coverage thresholds are set during project initialization.
- Track coverage trends, not just absolute numbers.
- Do not write tests solely to increase coverage numbers.
