export const siteConfig = {
  name: "Portfolio",
  description: "Personal portfolio built with Next.js, Tailwind CSS, and MDX.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  links: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
} as const;
