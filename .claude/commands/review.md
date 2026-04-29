# Review

Perform a structured, role-based code review using enterprise engineering lenses.

## Arguments

$ARGUMENTS

## Argument Parsing

Parse `$ARGUMENTS` to extract:

1. **Flags** (prefixed with `--`): Each flag selects a review lens. Multiple flags can be combined.
2. **Scope** (not prefixed with `--`): File paths, directories, or git refs to review. If no scope is provided, review all staged and unstaged changes (`git diff` and `git diff --cached`). If there are no changes, ask the user what to review.

## Available Flags

### Individual Lenses

| Flag              | Lens                       | Prefix |
| ----------------- | -------------------------- | ------ |
| `--architect`     | Software Architect         | ARCH   |
| `--backend`       | Backend Engineer           | BE     |
| `--frontend`      | Frontend Engineer          | FE     |
| `--fullstack`     | Full-Stack Engineer        | FS     |
| `--mobile`        | Mobile Engineer            | MOB    |
| `--qa`            | QA Engineer                | QA     |
| `--performance`   | Performance Engineer       | PERF   |
| `--accessibility` | Accessibility Specialist   | A11Y   |
| `--devops`        | DevOps / Platform Engineer | OPS    |
| `--sre`           | Site Reliability Engineer  | SRE    |
| `--cloud`         | Cloud Architect            | CLOUD  |
| `--dba`           | Database Administrator     | DBA    |
| `--security`      | Security Engineer          | SEC    |
| `--compliance`    | Compliance Specialist      | COMP   |
| `--ux`            | UX Designer                | UX     |
| `--ui`            | UI Designer                | UI     |
| `--pm`            | Project / Product Manager  | PM     |
| `--tech-lead`     | Technical Lead             | LEAD   |
| `--scrum-master`  | Scrum Master / Agile Coach | SCRUM  |
| `--tech-writer`   | Technical Writer           | DOCS   |
| `--api-designer`  | API Designer               | API    |
| `--data-engineer` | Data Engineer              | DATA   |
| `--ml-engineer`   | ML Engineer                | ML     |

### Presets

| Flag               | Lenses Included                                        |
| ------------------ | ------------------------------------------------------ |
| `--all`            | Every lens above                                       |
| `--core`           | architect, security, qa, devops                        |
| `--frontend-suite` | frontend, accessibility, ux, ui, performance           |
| `--backend-suite`  | backend, dba, api-designer, performance, sre           |
| `--release`        | security, compliance, devops, sre, qa, pm, tech-writer |
| `--design`         | ux, ui, accessibility, frontend                        |
| `--infrastructure` | devops, sre, cloud, dba, security                      |
| `--data-suite`     | data-engineer, ml-engineer, dba, performance           |

### Modifiers

| Flag              | Effect                                                     |
| ----------------- | ---------------------------------------------------------- |
| `--summary-only`  | Output only the summary table, skip detailed findings      |
| `--critical-only` | Only report Critical and High severity findings            |
| `--include-info`  | Include Informational-level findings (excluded by default) |

## Instructions

1. **Parse flags and scope** from `$ARGUMENTS` as described above.
2. **Determine review scope**: Identify the files and code to review based on the scope argument. If no scope is given, use current git changes.
3. **Load each selected lens** by reading the corresponding file from `.claude/review-lenses/`. For example, `--security` loads `.claude/review-lenses/security.md`.
4. **Apply each lens sequentially**. For each lens:
   a. Read the lens definition file.
   b. Review the scoped code through that lens only.
   c. Generate findings using that lens's prefix (e.g., SEC-001, SEC-002).
   d. Assign severity using that lens's calibration guidelines.
5. **Compile the report** in the formal output structure below.
6. **Identify cross-cutting concerns** that appear in multiple lenses.

## Output Structure

Produce the report in exactly this format:

```
# Code Review Report

**Date:** YYYY-MM-DD
**Reviewer:** Claude (AI-Assisted Review)
**Scope:** [files, directories, or git ref reviewed]
**Lenses Applied:** [list of lenses used]

---

## Executive Summary

| Severity | Count |
|----------|-------|
| Critical | N |
| High     | N |
| Medium   | N |
| Low      | N |
| Info     | N |
| **Total**| **N** |

**Overall Assessment:** [PASS | PASS WITH CONCERNS | FAIL]
- PASS: No Critical or High findings.
- PASS WITH CONCERNS: No Critical findings, but High findings exist.
- FAIL: One or more Critical findings.

---

## Findings

### [PREFIX-NNN] Finding Title

| Field | Value |
|-------|-------|
| **Severity** | Critical / High / Medium / Low / Info |
| **Lens** | [Role name] |
| **Category** | [Specific sub-area within the lens] |
| **Location** | `file/path:line` |
| **Impact** | [What happens if this is not addressed] |
| **Effort** | Low / Medium / High |

**Finding:**
[Description of the issue]

**Recommendation:**
[Specific, actionable fix]

**References:**
- [Relevant standards, docs, or links]

---

(Repeat for each finding, ordered by severity: Critical first, then High, Medium, Low, Info)

---

## Cross-Cutting Concerns

[Issues that were flagged by multiple lenses. Reference the related finding IDs.]

---

## Recommendations Summary

| Priority | Finding ID | Action | Effort |
|----------|-----------|--------|--------|
| 1 | [ID] | [Brief action] | [Effort] |
| 2 | [ID] | [Brief action] | [Effort] |
| ... | ... | ... | ... |

---

## Appendix: Lenses Applied

[One-line description of each lens that was applied, so the reader understands the review's coverage.]
```

## Severity Definitions

Use these definitions consistently across all lenses:

| Severity     | Definition                                                                                                                                               |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Critical** | Blocks deployment. Security vulnerability, data loss risk, correctness bug that affects users, or regulatory violation. Must fix before merge.           |
| **High**     | Significant issue that should be fixed before merge. Architectural flaw, major performance problem, missing critical test, or reliability risk.          |
| **Medium**   | Should be addressed soon. Code smell, moderate risk, missing non-critical test, or maintainability concern. Acceptable to merge with a follow-up ticket. |
| **Low**      | Minor improvement. Style inconsistency, naming suggestion, minor optimization opportunity. Fix when convenient.                                          |
| **Info**     | Observation or suggestion. No action required. Knowledge sharing, alternative approaches, or positive callouts.                                          |

## Effort Definitions

| Effort     | Definition                                                                                                 |
| ---------- | ---------------------------------------------------------------------------------------------------------- |
| **Low**    | Less than 30 minutes. Simple, localized change.                                                            |
| **Medium** | 30 minutes to half a day. Requires changes across a few files or moderate refactoring.                     |
| **High**   | Half a day or more. Requires architectural changes, significant refactoring, or cross-system coordination. |

## Rules

- Do not modify any code. This is a review only.
- If no flags are provided, default to `--core`.
- Apply each lens independently. Do not let one lens's findings influence another's.
- Be specific. Reference exact file paths and line numbers.
- Do not fabricate findings. If a lens has no findings, state "No findings" for that lens.
- Do not include Informational findings unless `--include-info` is passed.
- Follow the project's writing style: no em dashes, direct language, imperative mood.
