# Edge Cases

<!-- LLM GUIDANCE
Purpose: Document known edge cases across the system and how they are handled.
Update triggers: When a new edge case is discovered, whether through bugs, testing, or code review.
Expected detail: The scenario, why it is an edge case, and how the system handles it.
Related files: docs/KNOWN-ISSUES.md, docs/DEBUGGING.md, docs/features/*/edge-cases.md
-->

> **SCAFFOLDED**: Add edge cases as they are discovered. This file captures system-wide edge cases. Feature-specific edge cases go in the feature's `edge-cases.md`.

## When to Fill This In

- When a bug reveals an edge case that was not previously considered.
- When testing uncovers boundary conditions.
- When code review identifies scenarios that need explicit handling.
- When a user reports unexpected behavior in a valid-but-unusual scenario.

## System-Wide Edge Cases

### EC-001: [Edge Case Title]

- **Scenario**: Describe the specific conditions.
- **Why it is an edge case**: What makes this unusual.
- **Current handling**: How the system currently handles it.
- **Expected behavior**: What should happen.
- **Status**: Handled / Unhandled / Partially handled.
- **Related feature**: Link to feature doc if applicable.

## Categories

Group edge cases by category as they accumulate:

- **Input validation**: Unusual or boundary inputs.
- **Concurrency**: Race conditions, timing issues.
- **State**: Invalid or unexpected state transitions.
- **Integration**: External service behavior outside normal parameters.
- **Data**: Unusual data shapes, encoding, or volume.

## Cross-References

- Known issues: [KNOWN-ISSUES.md](KNOWN-ISSUES.md)
- Debugging: [DEBUGGING.md](DEBUGGING.md)
- Per-feature edge cases: see `edge-cases.md` in each feature directory.
