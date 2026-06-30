export const featuredProjectSlugs = [
  "orca",
  "reply-ai-agent",
  "usaii-global",
  "oltek-hackathon",
] as const;

export type FeaturedProjectSlug = (typeof featuredProjectSlugs)[number];
