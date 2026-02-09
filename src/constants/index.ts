// Application-wide constants

export const SITE_CONFIG = {
  name: 'Dev Portfolio',
  description: 'Professional developer portfolio showcasing projects and skills',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
} as const;

export const SOCIAL_LINKS = {
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  email: 'your.email@example.com',
} as const;

export const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#tech-stack', label: 'Tech Stack' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
] as const;
