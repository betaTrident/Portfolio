// Common types used across the application

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  level?: number;
  category?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon?: string;
}
