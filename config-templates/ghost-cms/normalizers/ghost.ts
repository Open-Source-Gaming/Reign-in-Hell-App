import type { ContentItem, GhostPost, Medium } from './types';

const VALID_MEDIUMS: Medium[] = ['article', 'podcast', 'reading', 'project'];
const VALID_STATUSES: NonNullable<ContentItem['status']>[] = ['complete', 'in-progress', 'archived'];

export function parseTags(tags: GhostPost['tags']) {
  let medium: Medium | undefined;
  let orgSlug: string | undefined;
  const categories: string[] = [];
  const contentTags: string[] = [];
  let project: string | undefined;
  let status: ContentItem['status'] | undefined;
  let sequenceNumber: number | undefined;
  let work: string | undefined;
  let chapter: string | undefined;

  for (const tag of tags ?? []) {
    const name = tag.name;

    if (name.startsWith('#medium-')) {
      const value = name.slice('#medium-'.length) as Medium;
      if (VALID_MEDIUMS.includes(value)) medium = value;
    } else if (name.startsWith('#org-')) {
      orgSlug = name.slice('#org-'.length);
    } else if (name.startsWith('#cat-')) {
      categories.push(name.slice('#cat-'.length));
    } else if (name.startsWith('#project-')) {
      project = name.slice('#project-'.length);
    } else if (name.startsWith('#status-')) {
      const value = name.slice('#status-'.length) as NonNullable<ContentItem['status']>;
      if (VALID_STATUSES.includes(value)) status = value;
    } else if (name.startsWith('#seq-')) {
      const parsed = parseInt(name.slice('#seq-'.length), 10);
      if (!isNaN(parsed)) sequenceNumber = parsed;
    } else if (name.startsWith('#work-')) {
      work = name.slice('#work-'.length);
    } else if (name.startsWith('#chapter-')) {
      chapter = name.slice('#chapter-'.length);
    } else if (tag.visibility === 'public') {
      contentTags.push(tag.name);
    }
  }

  return {
    medium,
    orgSlug,
    categories,
    tags: contentTags,
    project,
    status,
    sequenceNumber,
    work,
    chapter,
  };
}
