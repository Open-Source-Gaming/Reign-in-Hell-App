# Review Lenses

This directory contains role-based review lens definitions used by the `/review` command.

## How It Works

Each `.md` file defines a single review lens representing an enterprise engineering role. When a user passes a flag like `--security` to `/review`, the corresponding `security.md` file is loaded and applied to the review scope.

## Adding a Custom Lens

Create a new `.md` file in this directory following the structure of existing lenses:

1. **Role**: One-line description of the role.
2. **Prefix**: 2-5 character uppercase code for finding IDs (e.g., SEC, ARCH).
3. **Focus Areas**: Bulleted list of what this lens examines.
4. **Out of Scope**: What this lens explicitly ignores.
5. **Severity Calibration**: What counts as Critical vs Low for this specific role.
6. **Checklist**: Specific items to verify during review.

Then add the flag to `.claude/commands/review.md`.

## Lens Index

### Core Engineering

- [architect.md](architect.md) -- Software / Solutions Architect (ARCH)
- [backend.md](backend.md) -- Backend Engineer (BE)
- [frontend.md](frontend.md) -- Frontend Engineer (FE)
- [fullstack.md](fullstack.md) -- Full-Stack Engineer (FS)
- [mobile.md](mobile.md) -- Mobile Engineer (MOB)

### Quality and Testing

- [qa.md](qa.md) -- QA Engineer (QA)
- [performance.md](performance.md) -- Performance Engineer (PERF)
- [accessibility.md](accessibility.md) -- Accessibility Specialist (A11Y)

### Infrastructure and Operations

- [devops.md](devops.md) -- DevOps / Platform Engineer (OPS)
- [sre.md](sre.md) -- Site Reliability Engineer (SRE)
- [cloud.md](cloud.md) -- Cloud Architect (CLOUD)
- [dba.md](dba.md) -- Database Administrator (DBA)

### Security and Compliance

- [security.md](security.md) -- Security Engineer (SEC)
- [compliance.md](compliance.md) -- Compliance Specialist (COMP)

### Design and User Experience

- [ux.md](ux.md) -- UX Designer (UX)
- [ui.md](ui.md) -- UI Designer (UI)

### Management and Process

- [pm.md](pm.md) -- Project / Product Manager (PM)
- [tech-lead.md](tech-lead.md) -- Technical Lead (LEAD)
- [scrum-master.md](scrum-master.md) -- Scrum Master / Agile Coach (SCRUM)

### Documentation and API

- [tech-writer.md](tech-writer.md) -- Technical Writer (DOCS)
- [api-designer.md](api-designer.md) -- API Designer (API)

### Data and ML

- [data-engineer.md](data-engineer.md) -- Data Engineer (DATA)
- [ml-engineer.md](ml-engineer.md) -- ML Engineer (ML)
