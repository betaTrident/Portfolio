import { siteConfig } from "@/lib/site";

export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kent Bryan Colina",
    jobTitle: "Full-Stack Developer & AI Engineer",
    description: siteConfig.description,
    email: siteConfig.email,
    url: siteConfig.url,
    knowsAbout: [
      "TypeScript",
      "Next.js",
      "React",
      "Python",
      "Agentic AI",
      "Full-Stack Development",
      "Multi-Agent Systems",
    ],
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
  };
}
