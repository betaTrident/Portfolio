export const sectionNavItems = [
  { number: "01", label: "about", id: "about" },
  { number: "02", label: "projects", id: "projects" },
  { number: "03", label: "hackathons", id: "hackathons" },
  { number: "04", label: "experience", id: "experience" },
  { number: "05", label: "skills", id: "skills" },
  { number: "06", label: "contact", id: "contact" },
] as const;

export const pageNavItems = [
  { label: "projects", href: "/projects" },
  { label: "experience", href: "/experience" },
  { label: "stack", href: "/stack" },
  { label: "hackathons", href: "/hackathons" },
] as const;
