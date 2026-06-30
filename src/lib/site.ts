export const siteConfig = {
  name: "Kent Colina",
  title: "Full-Stack Developer & AI Engineer",
  description:
    "Building practical AI-powered systems, agentic workflows, and full-stack applications that solve real problems.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "colinakb24@gmail.com",
  links: {
    github: "https://github.com/betaTrident",
    linkedin: "https://linkedin.com/in/kent-colina",
  },
} as const;
