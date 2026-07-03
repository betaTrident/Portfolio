export const featuredProjectSlugs = [
  "orca",
  "reply-ai-agent",
  "peaksy",
  "courthub",
] as const;

export type FeaturedProjectSlug = (typeof featuredProjectSlugs)[number];
