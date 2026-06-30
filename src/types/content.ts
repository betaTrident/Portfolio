export type ProjectCategory = "AI System" | "SaaS Product" | "Client Build";

export type ProjectFrontmatter = {
  title: string;
  category: ProjectCategory;
  description: string;
  date: string;
  tags: string[];
  featured?: boolean;
  github?: string | null;
  demo?: string | null;
  href?: string;
};

export type Project = ProjectFrontmatter & {
  slug: string;
  content: string;
};
