import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { featuredProjectSlugs } from "@/data/projects-featured";
import type { Project, ProjectFrontmatter } from "@/types/content";

const projectsDirectory = path.join(process.cwd(), "content/projects");

function parseProjectFile(slug: string, fileContents: string): Project {
  const { data, content } = matter(fileContents);
  const frontmatter = data as ProjectFrontmatter;

  return {
    slug,
    title: frontmatter.title,
    category: frontmatter.category,
    description: frontmatter.description,
    date: frontmatter.date,
    tags: frontmatter.tags ?? [],
    featured: frontmatter.featured,
    github: frontmatter.github ?? null,
    demo: frontmatter.demo ?? null,
    href: frontmatter.href,
    content,
  };
}

export function getProjects(): Project[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(projectsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const filePath = path.join(projectsDirectory, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      return parseProjectFile(slug, fileContents);
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getProject(slug: string): Project | null {
  const filePath = path.join(projectsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  return parseProjectFile(slug, fileContents);
}

export function getFeaturedProjects(): Project[] {
  const projects = getProjects();

  return featuredProjectSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is Project => project !== undefined);
}
