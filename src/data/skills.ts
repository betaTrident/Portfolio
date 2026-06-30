export type SkillCategory = {
  name: string;
  description: string;
  tags: string[];
};

export const skills: SkillCategory[] = [
  {
    name: "AI & Agentic Engineering",
    description:
      "Building multi-agent systems, RAG pipelines, and human-in-the-loop AI workflows.",
    tags: [
      "LangChain",
      "OpenRouter",
      "Langfuse",
      "Ollama",
      "Claude",
      "Codex",
      "RAG",
    ],
  },
  {
    name: "Full-Stack Development",
    description:
      "End-to-end web and API development across frontend, backend, and database layers.",
    tags: ["React", "Next.js", "Astro", "NestJS", "Django", "FastAPI", "Flask"],
  },
  {
    name: "Languages",
    description:
      "Primary languages used across AI, backend, and frontend projects.",
    tags: ["TypeScript", "Python", "JavaScript", "SQL", "Java"],
  },
  {
    name: "Data & Databases",
    description:
      "Designing and operating relational, document, and in-memory data stores.",
    tags: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "Firebase", "Redis"],
  },
  {
    name: "Cloud & DevOps",
    description:
      "Deploying and operating containerized applications on cloud infrastructure.",
    tags: ["Docker", "Vercel", "Google Cloud Run", "CI/CD", "GitHub Actions"],
  },
  {
    name: "Document Intelligence",
    description:
      "Transforming unstructured documents into structured data using OCR and LLMs.",
    tags: ["PaddleOCR", "watsonx.ai", "FastAPI", "Pandas", "Polars"],
  },
];
