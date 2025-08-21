export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: ProjectCategory;
  status: ProjectStatus;
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
  images: {
    thumbnail: string;
    gallery?: string[];
  };
  featured: boolean;
  startDate: string;
  endDate?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: SkillLevel;
  icon?: string;
  description?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  type: ExperienceType;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements?: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  gpa?: string;
  honors?: string[];
  relevantCourses?: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  phone?: string;
  avatar: string;
  resume: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

export type ProjectCategory = 
  | 'web-app'
  | 'mobile-app'
  | 'desktop-app'
  | 'library'
  | 'api'
  | 'game'
  | 'other';

export type ProjectStatus = 
  | 'completed'
  | 'in-progress'
  | 'on-hold'
  | 'planning';

export type SkillCategory = 
  | 'frontend'
  | 'backend'
  | 'mobile'
  | 'database'
  | 'devops'
  | 'design'
  | 'testing'
  | 'other';

export type SkillLevel = 
  | 'beginner'
  | 'intermediate'
  | 'advanced'
  | 'expert';

export type ExperienceType = 
  | 'full-time'
  | 'part-time'
  | 'contract'
  | 'freelance'
  | 'internship'
  | 'volunteer';