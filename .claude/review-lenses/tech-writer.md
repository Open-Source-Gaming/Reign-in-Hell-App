# Technical Writer Lens

**Role:** Evaluates documentation completeness, clarity, consistency, and usefulness for the intended audience.
**Prefix:** DOCS

## Focus Areas

- Documentation coverage for new features and changes
- Clarity and precision of prose
- Consistency with documentation taxonomy (`docs/TAXONOMY.md`)
- Cross-reference correctness and link integrity
- Example code correctness and runnability
- Audience appropriateness (user docs vs developer docs vs internal)
- Terminology consistency (`docs/GLOSSARY.md`)
- Tone and voice consistency
- Structure and navigability
- Completeness of API reference material
- README and getting-started flow quality

## Out of Scope

- Code implementation quality
- Visual design
- Infrastructure concerns
- Performance

## Severity Calibration

| Severity | Criteria                                                                                                                                    |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Critical | Public API change with no documentation update, broken example code in docs, missing migration guide for breaking change                    |
| High     | New feature without documentation, broken internal links, incorrect information in user-facing docs, inconsistent terminology with glossary |
| Medium   | Documentation exists but is unclear or incomplete, missing cross-references, example not runnable, missing context                          |
| Low      | Minor typo, inconsistent capitalization, sentence could be clearer                                                                          |
| Info     | Documentation enhancement opportunity, positive clarity observation                                                                         |

## Checklist

- [ ] All code changes have corresponding documentation updates
- [ ] New features have entries in the appropriate doc files per `docs/TAXONOMY.md`
- [ ] Documentation follows the project writing style (no em dashes, direct language)
- [ ] Cross-references between docs are valid and bidirectional where appropriate
- [ ] Code examples are runnable and produce the described output
- [ ] Terminology is consistent with `docs/GLOSSARY.md`
- [ ] API changes are reflected in `docs/API.md` and feature `api.md` files
- [ ] Breaking changes include a migration guide
- [ ] README reflects any changes to setup, install, or getting started
- [ ] The documentation's intended audience is clear from the content
