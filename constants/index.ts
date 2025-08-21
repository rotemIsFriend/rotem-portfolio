export const SITE_CONFIG = {
  name: "Rotem Haver Portfolio",
  description: "Full Stack Developer specializing in modern web technologies",
  url: "https://rotem-portfolio.vercel.app",
  keywords: ["developer", "portfolio", "react", "next.js", "typescript"],
  author: "Rotem Haver",
} as const;

export const NAVIGATION_LINKS = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Contact",
    href: "#contact",
  },
] as const;

export const SOCIAL_LINKS = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  email: "mailto:contact@example.com",
} as const;

export const ANIMATION_SETTINGS = {
  stagger: {
    container: {
      animate: { transition: { staggerChildren: 0.1 } },
    },
    item: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 },
    },
  },
  fadeInUp: {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  },
  slideInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  },
} as const;

export const SKILL_CATEGORIES = {
  frontend: "Frontend",
  backend: "Backend",
  mobile: "Mobile",
  database: "Database",
  devops: "DevOps",
  design: "Design",
  testing: "Testing",
  other: "Other",
} as const;

export const PROJECT_CATEGORIES = {
  "web-app": "Web Application",
  "mobile-app": "Mobile Application",
  "desktop-app": "Desktop Application",
  library: "Library",
  api: "API",
  game: "Game",
  other: "Other",
} as const;

export const SKILL_LEVELS = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
  expert: "Expert",
} as const;

export const PROJECT_STATUS = {
  completed: "Completed",
  "in-progress": "In Progress",
  "on-hold": "On Hold",
  planning: "Planning",
} as const;

export const CONTACT_FORM_FIELDS = {
  name: "name",
  email: "email",
  subject: "subject",
  message: "message",
} as const;

export const SEO_DEFAULTS = {
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    creator: `@${SITE_CONFIG.author}`,
  },
} as const;