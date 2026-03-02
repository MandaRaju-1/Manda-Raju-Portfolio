export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
  images: string[];
  videoUrl?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface Achievement {
  title: string;
  description: string;
  date: string;
  link?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  proficiency: number; // 0 to 100
}

export interface PortfolioData {
  name: string;
  role: string;
  about: string;
  email: string;
  location: string;
  resumeUrl: string;
  skills: {
    category: string;
    items: Skill[];
  }[];
  education: Education[];
  certifications: Certification[];
  achievements: Achievement[];
  projects: Project[];
  socials: SocialLink[];
}
