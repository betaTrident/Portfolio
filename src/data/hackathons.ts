export type Hackathon = {
  name: string;
  year: number;
  result: string;
  resultLabel: string;
  description: string;
  tags: string[];
  highlight: boolean;
  href?: string;
};

export const hackathons: Hackathon[] = [
  {
    name: "Reply AI Agent Challenge 2026",
    year: 2026,
    result: "#64 / 1,920",
    resultLabel: "Teams",
    description:
      "Multi-agent AI risk-classification system using a hybrid ML + LLM pipeline to flag high-risk cases with traceable agent runs.",
    tags: ["Python", "LangChain", "OpenRouter", "Langfuse"],
    highlight: true,
  },
  {
    name: "USAII Global AI Hackathon 2026",
    year: 2026,
    result: "Finalist",
    resultLabel: "",
    description:
      "Human-in-the-loop AI planning workspace with multi-stage agents, context retrieval, and proposal validation.",
    tags: ["FastAPI", "Astro", "React", "Supabase", "Redis"],
    highlight: true,
  },
  {
    name: "OLTEK Paper to Data Hackathon",
    year: 2025,
    result: "Finalist",
    resultLabel: "",
    description:
      "Document intelligence platform — contracts and scanned logistics papers into structured datasets via OCR + LLM extraction.",
    tags: ["FastAPI", "PaddleOCR", "Ollama", "Next.js", "Docker"],
    highlight: true,
  },
  {
    name: "IBM Dev Day: Bob Edition 2026",
    year: 2026,
    result: "Participant",
    resultLabel: "",
    description:
      "Multi-agent ICU deterioration monitoring system — patient vitals analysis, risk scoring, and SBAR briefs for clinicians.",
    tags: ["FastAPI", "React", "TypeScript", "watsonx.ai"],
    highlight: false,
  },
  {
    name: "ASEAN AI Hackathon 2026",
    year: 2026,
    result: "Participant",
    resultLabel: "",
    description:
      "Multi-role AI public transport platform with live telemetry, demand signals, and confidence scoring.",
    tags: [],
    highlight: false,
  },
  {
    name: "SEA-CICSIC Innovation Competition",
    year: 2026,
    result: "Participant",
    resultLabel: "",
    description:
      "Wellness workspace planning platform using AI simulation, clutter detection, and localized inventory tracking.",
    tags: [],
    highlight: false,
  },
];
