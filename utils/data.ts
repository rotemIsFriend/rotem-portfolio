import { projects, skills, experiences, education, personalInfo } from '@/data';
import { Project, Skill, Experience, Education, ProjectCategory, SkillCategory, SkillLevel } from '@/types';

export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured);
}

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter(project => project.category === category);
}

export function getProjectsByStatus(status: string): Project[] {
  return projects.filter(project => project.status === status);
}

export function getSkillsByCategory(category: SkillCategory): Skill[] {
  return skills.filter(skill => skill.category === category);
}

export function getSkillsByLevel(level: SkillLevel): Skill[] {
  return skills.filter(skill => skill.level === level);
}

export function getAllSkills(): Skill[] {
  return skills;
}

export function getSkillCategories(): SkillCategory[] {
  const categories = skills.map(skill => skill.category);
  return Array.from(new Set(categories));
}

export function getCurrentExperience(): Experience | undefined {
  return experiences.find(exp => exp.current);
}

export function getAllExperiences(): Experience[] {
  return experiences;
}

export function getAllEducation(): Education[] {
  return education;
}

export function getPersonalInfo() {
  return personalInfo;
}

export function getRecentProjects(limit: number = 3): Project[] {
  return projects
    .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())
    .slice(0, limit);
}

export function getProjectTechnologies(): string[] {
  const allTechs = projects.flatMap(project => project.technologies);
  return Array.from(new Set(allTechs));
}

export function getExperienceTechnologies(): string[] {
  const allTechs = experiences.flatMap(exp => exp.technologies);
  return Array.from(new Set(allTechs));
}