export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  location: string;
  type: "work" | "education";
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Full Stack Software Developer Intern",
    company: "Symph",
    period: "Feb 2026 – Jun 2026",
    location: "Cebu City, Philippines",
    type: "work",
    bullets: [
      "Contributed to Peaksy (web + mobile) and CourtHub as part of a small team, alongside a co-intern and a senior developer.",
      "Built and improved full-stack features across auth, profiles, search, bookings, payments, and chat workflows.",
    ],
  },
  {
    role: "Freelance Full Stack Software Developer",
    company: "Self-Employed",
    period: "Aug 2024 – Jan 2026",
    location: "Philippines",
    type: "work",
    bullets: [
      "Delivered custom POS, inventory, and community management systems across 3 client software categories.",
      "Managed end-to-end development from planning through deployment and client support.",
    ],
  },
  {
    role: "BS Information Technology",
    company: "Cebu Technological University",
    period: "2022 – Expected Jul 2026",
    location: "Cebu City, Philippines",
    type: "education",
    bullets: [],
  },
];

export function getExperienceYear(period: string): string {
  const match = period.match(/\d{4}/);
  return match?.[0] ?? "";
}
