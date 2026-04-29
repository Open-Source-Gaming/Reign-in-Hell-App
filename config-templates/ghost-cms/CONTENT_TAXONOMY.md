# Content Taxonomy

<!-- LLM GUIDANCE
Purpose: Define the tagging contract between Ghost CMS and the SSG frontend.
Update triggers: When new content types, mediums, or tag prefixes are added.
Expected detail: Tag prefix conventions, content types, TypeScript types, normalizer behavior.
Related files: docs/TAXONOMY.md (documentation structure), docs/GLOSSARY.md, normalizers/ghost.ts
-->

## Overview

This file defines the domain/business taxonomy for content authored in Ghost. This is distinct from `docs/TAXONOMY.md`, which governs documentation structure.

| Taxonomy Type  | Purpose                                      | File                              |
| -------------- | -------------------------------------------- | --------------------------------- |
| Documentation  | File organization, naming conventions        | `docs/TAXONOMY.md`                |
| Domain/Content | Business concepts, content types, vocabulary | `CONTENT_TAXONOMY.md` (this file) |

## Tag Prefix Convention

Ghost internal tags (tags starting with `#`, hidden from Ghost's public theme pages) encode metadata via prefixes. All prefixed tags are available via the Ghost Content API.

| Prefix      | Purpose                                 | Example Ghost Tag          | Parsed Value      |
| ----------- | --------------------------------------- | -------------------------- | ----------------- |
| `#org-`     | Organization / Business                 | `#org-my-company`          | `my-company`      |
| `#cat-`     | Category                                | `#cat-devops`              | `devops`          |
| `#medium-`  | Content medium / type                   | `#medium-article`          | `article`         |
| `#project-` | Project umbrella (implies series)       | `#project-fleet-analytics` | `fleet-analytics` |
| `#status-`  | Project status                          | `#status-in-progress`      | `in-progress`     |
| `#seq-`     | Explicit sequence number in a series    | `#seq-03`                  | `3`               |
| `#work-`    | Parent book/work for reflections        | `#work-accs-mark`          | `accs-mark`       |
| `#chapter-` | Chapter/passage reference within a work | `#chapter-mark-1-1-8`      | `mark-1-1-8`      |
| _(none)_    | Technology / topic tag                  | `Kubernetes`               | `kubernetes`      |

## Normalization Layer

The SSG build fetches posts from the Ghost Content API, then the normalization layer:

1. Reads all tags from the JSON response.
2. Separates them by prefix into their respective taxonomy fields.
3. Strips the prefix to produce the clean value.
4. Regular tags (no prefix, `visibility: "public"`) become technology/topic tags.

## Content Types (Mediums)

| Ghost Tag         | Display Name | Slug      | Description                   |
| ----------------- | ------------ | --------- | ----------------------------- |
| `#medium-article` | Article      | `article` | Written blog posts, tutorials |
| `#medium-podcast` | Podcast      | `podcast` | Audio content, episodes       |
| `#medium-reading` | Reading      | `reading` | Book reviews, reading notes   |
| `#medium-project` | Project      | `project` | Project updates with timeline |

## Tagging Checklist (for content authors)

When creating a new Ghost post, apply:

- [ ] One `#medium-*` tag: what type of content is this?
- [ ] One or more `#cat-*` tags: what broad categories does it fall under?
- [ ] Zero or more `#org-*` tags: which organization? (primarily for projects)
- [ ] Zero or more regular tags: what technologies or topics does it cover?
- [ ] If `#medium-project`:
  - [ ] One `#project-*` umbrella tag.
  - [ ] One `#status-*` tag.
  - [ ] Optional `#seq-*` for explicit ordering.
- [ ] If `#medium-reading` and part of a book/work:
  - [ ] One `#work-*` tag for the parent work.
  - [ ] Optional `#chapter-*` tag for the specific chapter.

## Sync with Code

The TypeScript types and tag parser live alongside the SSG source:

- Types: `astro/src/lib/content/types.ts`.
- Tag parser: `astro/src/lib/content/normalizers/ghost.ts`.
- Fetcher: `astro/src/lib/content/fetchers/ghost.ts`.

When this taxonomy changes, update those files and re-run the build.
