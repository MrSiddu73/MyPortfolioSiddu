/**
 * Core TypeScript interfaces for Developer Portfolio
 * Focused on software development, DevOps, and cloud projects
 */

export type ProjectCategory = 'devops' | 'cloud' | 'web' | 'backend' | 'automation';

export type AspectRatio = 'portrait' | 'landscape' | 'square';

export interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  aspectRatio: AspectRatio;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  coverImage: string;
  images: ProjectImage[];
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  slug: string;
}

export interface DeveloperInfo {
  name: string;
  tagline: string;
  heroIntroduction: string;
  biography: string;
  skills: {
    category: string;
    items: string[];
  }[];
  experience: string[];
  education: string;
  location: string;
  email: string;
  availability: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  avatarImage: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  projectType: 'freelance' | 'fulltime' | 'collaboration';
  message: string;
  timestamp: Date;
}
