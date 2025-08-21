import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL',
    longDescription: 'A comprehensive e-commerce platform featuring user authentication, product management, shopping cart, payment processing, and order tracking. Built with modern technologies and best practices.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Stripe', 'AWS'],
    category: 'web-app',
    status: 'completed',
    links: {
      github: 'https://github.com/yourusername/ecommerce-platform',
      live: 'https://ecommerce-platform-demo.com',
      demo: 'https://youtube.com/watch?v=demo',
    },
    images: {
      thumbnail: '/images/projects/ecommerce-thumb.jpg',
      gallery: [
        '/images/projects/ecommerce-1.jpg',
        '/images/projects/ecommerce-2.jpg',
        '/images/projects/ecommerce-3.jpg',
      ],
    },
    featured: true,
    startDate: '2023-06-01',
    endDate: '2023-09-15',
  },
  {
    id: 'task-management-app',
    title: 'Task Management App',
    description: 'React Native mobile app for task and project management',
    longDescription: 'A cross-platform mobile application for managing tasks and projects with real-time collaboration features, offline support, and intuitive user interface.',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux Toolkit', 'Expo'],
    category: 'mobile-app',
    status: 'completed',
    links: {
      github: 'https://github.com/yourusername/task-manager',
      demo: 'https://expo.dev/@yourusername/task-manager',
    },
    images: {
      thumbnail: '/images/projects/task-manager-thumb.jpg',
      gallery: [
        '/images/projects/task-manager-1.jpg',
        '/images/projects/task-manager-2.jpg',
      ],
    },
    featured: true,
    startDate: '2023-03-01',
    endDate: '2023-05-20',
  },
  {
    id: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard with interactive charts and data visualization',
    technologies: ['Next.js', 'TypeScript', 'D3.js', 'Tailwind CSS', 'Socket.io'],
    category: 'web-app',
    status: 'in-progress',
    links: {
      github: 'https://github.com/yourusername/analytics-dashboard',
    },
    images: {
      thumbnail: '/images/projects/analytics-thumb.jpg',
    },
    featured: false,
    startDate: '2023-10-01',
  },
  {
    id: 'ui-component-library',
    title: 'UI Component Library',
    description: 'Reusable React component library with TypeScript and Storybook',
    technologies: ['React', 'TypeScript', 'Storybook', 'Rollup', 'CSS-in-JS'],
    category: 'library',
    status: 'completed',
    links: {
      github: 'https://github.com/yourusername/ui-components',
      demo: 'https://ui-components-storybook.netlify.app',
    },
    images: {
      thumbnail: '/images/projects/ui-library-thumb.jpg',
    },
    featured: false,
    startDate: '2023-01-15',
    endDate: '2023-02-28',
  },
];