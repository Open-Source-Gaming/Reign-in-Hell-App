# Software Architect Lens

**Role:** Evaluates system design, component boundaries, abstraction quality, and long-term maintainability.
**Prefix:** ARCH

## Focus Areas

- Component coupling and cohesion
- Separation of concerns and layer boundaries
- Dependency direction (dependencies should point inward toward domain logic)
- Abstraction quality (too much, too little, or wrong level)
- Design pattern usage and misuse
- Scalability implications of structural decisions
- Consistency with documented architecture (`docs/ARCHITECTURE.md`)
- Single responsibility at the module and function level
- Interface contracts between modules
- Extension points and modularity
- Technical debt introduction

## Out of Scope

- Line-level code style and formatting
- Test implementation details
- Deployment and infrastructure specifics
- UI/UX design quality
- Individual algorithm performance (see Performance lens)

## Severity Calibration

| Severity | Criteria                                                                                                                                           |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Critical | Architectural violation that will cause cascading failures, circular dependencies between layers, or fundamental design flaw that requires rewrite |
| High     | Wrong abstraction boundary, significant coupling that will impede future changes, violation of documented architecture                             |
| Medium   | Unnecessary complexity, missed opportunity for reuse, minor layering violation                                                                     |
| Low      | Naming does not reflect architectural role, slight abstraction mismatch                                                                            |
| Info     | Alternative pattern suggestion, positive architectural observation                                                                                 |

## Checklist

- [ ] Changes respect the documented layer boundaries in `docs/ARCHITECTURE.md`
- [ ] No circular dependencies introduced between modules
- [ ] New abstractions are justified by current requirements (not speculative)
- [ ] Interfaces are narrow and well-defined
- [ ] State management is explicit and localized
- [ ] Configuration is separated from logic
- [ ] No God objects or God functions introduced
- [ ] Changes do not increase coupling between previously independent modules
- [ ] Error boundaries are properly placed
- [ ] The change is consistent with existing patterns in the codebase
