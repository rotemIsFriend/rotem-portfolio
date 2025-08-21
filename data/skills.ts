import { Skill } from '@/types';

export const skills: Skill[] = [
  // Frontend
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    level: 'advanced',
    icon: 'react',
    description: 'Building complex user interfaces with hooks, context, and performance optimization',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    level: 'advanced',
    icon: 'typescript',
    description: 'Type-safe development with advanced TypeScript features',
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'frontend',
    level: 'advanced',
    icon: 'nextjs',
    description: 'Full-stack React framework with SSR, SSG, and API routes',
  },
  {
    id: 'tailwindcss',
    name: 'Tailwind CSS',
    category: 'frontend',
    level: 'advanced',
    icon: 'tailwindcss',
    description: 'Utility-first CSS framework for rapid UI development',
  },
  {
    id: 'framer-motion',
    name: 'Framer Motion',
    category: 'frontend',
    level: 'intermediate',
    icon: 'framer',
    description: 'Advanced animations and micro-interactions',
  },
  
  // Backend
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    level: 'advanced',
    icon: 'nodejs',
    description: 'Server-side JavaScript development with Express and Fastify',
  },
  {
    id: 'python',
    name: 'Python',
    category: 'backend',
    level: 'intermediate',
    icon: 'python',
    description: 'Backend development with Django and FastAPI',
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    category: 'backend',
    level: 'intermediate',
    icon: 'graphql',
    description: 'API development with Apollo Server and type-safe queries',
  },
  
  // Database
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'database',
    level: 'intermediate',
    icon: 'postgresql',
    description: 'Relational database design and optimization',
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'database',
    level: 'intermediate',
    icon: 'mongodb',
    description: 'NoSQL database development with Mongoose',
  },
  {
    id: 'redis',
    name: 'Redis',
    category: 'database',
    level: 'beginner',
    icon: 'redis',
    description: 'Caching and session management',
  },
  
  // Mobile
  {
    id: 'react-native',
    name: 'React Native',
    category: 'mobile',
    level: 'intermediate',
    icon: 'react',
    description: 'Cross-platform mobile app development',
  },
  {
    id: 'expo',
    name: 'Expo',
    category: 'mobile',
    level: 'intermediate',
    icon: 'expo',
    description: 'Rapid React Native development and deployment',
  },
  
  // DevOps
  {
    id: 'docker',
    name: 'Docker',
    category: 'devops',
    level: 'intermediate',
    icon: 'docker',
    description: 'Containerization and deployment',
  },
  {
    id: 'aws',
    name: 'AWS',
    category: 'devops',
    level: 'beginner',
    icon: 'aws',
    description: 'Cloud services and serverless architecture',
  },
  {
    id: 'vercel',
    name: 'Vercel',
    category: 'devops',
    level: 'advanced',
    icon: 'vercel',
    description: 'Frontend deployment and edge functions',
  },
  
  // Testing
  {
    id: 'jest',
    name: 'Jest',
    category: 'testing',
    level: 'intermediate',
    icon: 'jest',
    description: 'Unit and integration testing',
  },
  {
    id: 'testing-library',
    name: 'Testing Library',
    category: 'testing',
    level: 'intermediate',
    icon: 'testing-library',
    description: 'Component testing with user-centric approach',
  },
  
  // Design
  {
    id: 'figma',
    name: 'Figma',
    category: 'design',
    level: 'intermediate',
    icon: 'figma',
    description: 'UI/UX design and prototyping',
  },
];