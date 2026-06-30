import { siteConfig } from "@/lib/site";

export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kent Bryan Colina",
    jobTitle: "Full-Stack Developer & AI Engineer",
    email: siteConfig.email,
    url: siteConfig.url,
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
  };
}
