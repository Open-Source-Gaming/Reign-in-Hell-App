export type Medium = 'article' | 'podcast' | 'reading' | 'project';

export type ContentItem = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  displayDate: string;
  image: string;
  medium: Medium;

  readingTime?: string;
  featured?: boolean;

  author?: string;

  organization?: string;
  technologies?: string[];
  status?: 'complete' | 'in-progress' | 'archived';

  duration?: string;

  categories?: string[];
  tags?: string[];

  series?: string;
  sequenceNumber?: number;

  work?: string;
  chapter?: string;

  htmlContent?: string;
  canonicalUrl?: string;
  project?: string;

  metaTitle?: string;
  metaDescription?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;

  isDraft?: boolean;

  sourceId?: string;
  sourcePlatform?: string;
};

export type PlatformType = 'ghost' | 'medium' | 'substack' | 'hashnode';

type BaseConnection = {
  id: string;
  label: string;
  platform: PlatformType;
  orgSlug: string;
  enabled: boolean;
  defaultMedium?: Medium;
  defaultCategories?: string[];
  maxItems?: number;
};

export type GhostConnection = BaseConnection & {
  platform: 'ghost';
  urlEnvVar: string;
  apiKeyEnvVar: string;
  adminApiKeyEnvVar?: string;
};

export type GhostPost = {
  id: string;
  slug: string;
  title: string;
  html: string;
  excerpt?: string;
  feature_image?: string;
  published_at: string;
  reading_time?: number;
  featured?: boolean;
  meta_title?: string;
  meta_description?: string;
  og_title?: string;
  og_description?: string;
  og_image?: string;
  canonical_url?: string;
  status?: string;
  tags?: { name: string; slug: string; visibility?: string }[];
  authors?: { name: string; slug: string }[];
};
