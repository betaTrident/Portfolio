export type ProjectFrontmatter = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  featured?: boolean;
  href?: string;
};

export type Project = ProjectFrontmatter & {
  slug: string;
  content: string;
};
