# Content Taxonomy

<!-- LLM GUIDANCE
Purpose: Define the domain-specific content taxonomy and business vocabulary.
Update triggers: When business domain changes or new content types are introduced.
Expected detail: Business terminology, content types, and domain relationships.
Related files: docs/TAXONOMY.md (documentation structure), docs/GLOSSARY.md
-->

> **SCAFFOLDED**: This file contains the template structure. Populate it during project initialization when domain-specific content taxonomy is needed.

## Overview

This file defines the **domain/business taxonomy** for content and business concepts in this project. This is distinct from `docs/TAXONOMY.md`, which governs documentation structure.

| Taxonomy Type  | Purpose                                      | File                              |
| -------------- | -------------------------------------------- | --------------------------------- |
| Documentation  | File organization, naming conventions        | `docs/TAXONOMY.md`                |
| Domain/Content | Business concepts, content types, vocabulary | `CONTENT_TAXONOMY.md` (this file) |

## Content Types

Define the types of content or business entities your project manages.

| Content Type   | Description               | Examples            |
| -------------- | ------------------------- | ------------------- |
| [Example Type] | What this type represents | [Example instances] |

## Domain Hierarchy

Define relationships between domain concepts:

```
Root Domain
├── Subdomain A
│   ├── Concept 1
│   └── Concept 2
└── Subdomain B
    ├── Concept 3
    └── Concept 4
```

## Business Vocabulary

Define project-specific terms and their meanings:

| Term   | Definition           | Context           |
| ------ | -------------------- | ----------------- |
| [Term] | [Precise definition] | [When/where used] |

## Content Lifecycle

Define how content moves through states in your domain:

```
State 1 → State 2 → State 3
```

## Relationships

Define how different content types relate to each other:

| Relationship Type | From     | To       | Description        |
| ----------------- | -------- | -------- | ------------------ |
| [Type]            | [Source] | [Target] | [How they connect] |

## Usage Guidelines

- Use this taxonomy when creating domain models, APIs, or database schemas
- Reference these terms in feature requirements and specifications
- Keep business vocabulary consistent across all documentation
- Update this file when domain understanding evolves

## Sync with Code

Ensure domain concepts in this file are reflected in:

- Database table names and column names
- API endpoint naming
- Code variable and class names
- User interface terminology
