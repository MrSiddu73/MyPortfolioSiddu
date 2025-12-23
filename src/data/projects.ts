import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'AWS 3-Tier Web Application',
    category: 'cloud',
    year: '2025',
    slug: 'aws-3-tier-web-application',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop',
    description: 'Real-world AWS 3-Tier Application deployed using VPC, Public/Private Subnets, EC2 Web + App Tier, and Amazon Aurora MySQL. Follows secure networking architecture with routing tables, NAT Gateway, Internet Gateway, and security groups.',
    technologies: ['AWS VPC', 'EC2', 'Aurora MySQL', 'NAT Gateway', 'Security Groups'],
    githubUrl: 'https://github.com/MrSiddu73/aws-3-tier-web-application',
    images: [
      { id: '1-1', src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop', alt: 'AWS Architecture', aspectRatio: 'landscape' }
    ]
  },
  {
    id: '2',
    title: 'Serverless User Signup Pipeline',
    category: 'automation',
    year: '2025',
    slug: 'aws-serverless-user-signup',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop',
    description: 'Serverless user signup pipeline using AWS API Gateway, Lambda, SQS & SNS — fully asynchronous, scalable, and production-ready. Demonstrates event-driven architecture patterns.',
    technologies: ['AWS Lambda', 'API Gateway', 'SQS', 'SNS', 'Python'],
    githubUrl: 'https://github.com/MrSiddu73/aws-serverless-user-signup',
    images: [
      { id: '2-1', src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop', alt: 'Serverless Architecture', aspectRatio: 'landscape' }
    ]
  },
  {
    id: '3',
    title: 'Serverless Image Uploader',
    category: 'automation',
    year: '2025',
    slug: 'serverless-image-uploader',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop',
    description: 'AWS serverless image upload system using S3, Lambda, SNS, and API Gateway. Automatically processes and notifies on image uploads with event-driven triggers.',
    technologies: ['AWS S3', 'Lambda', 'SNS', 'API Gateway', 'Python'],
    githubUrl: 'https://github.com/MrSiddu73/serverless-image-uploader',
    images: [
      { id: '3-1', src: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop', alt: 'Image Upload System', aspectRatio: 'landscape' }
    ]
  },
  {
    id: '4',
    title: 'Flask MySQL Two-Tier Deployment',
    category: 'devops',
    year: '2025',
    slug: 'flask-mysql-two-tier-deployment',
    coverImage: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&auto=format&fit=crop',
    description: 'Two-tier Flask application (Flask + MySQL) built for DevOps deployment practice. Includes Docker, Docker Compose, CI/CD pipeline, multi-stage Dockerfile, and Kubernetes manifests for AWS EKS.',
    technologies: ['Docker', 'Docker Compose', 'Kubernetes', 'AWS EKS', 'Flask', 'MySQL'],
    githubUrl: 'https://github.com/MrSiddu73/flask-mysql-two-tier-deployment',
    images: [
      { id: '4-1', src: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&auto=format&fit=crop', alt: 'Docker Deployment', aspectRatio: 'landscape' }
    ]
  },
  {
    id: '5',
    title: 'Django Notes Deployment',
    category: 'devops',
    year: '2025',
    slug: 'django-notes-deployment',
    coverImage: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&auto=format&fit=crop',
    description: 'Containerized and deployed a Django Notes application using Docker, Docker Compose, and AWS EC2. Implemented a multi-container setup with Django, MySQL, and Nginx reverse proxy with persistent data.',
    technologies: ['Django', 'Docker', 'Nginx', 'MySQL', 'AWS EC2'],
    githubUrl: 'https://github.com/MrSiddu73/django-notes-deployment',
    images: [
      { id: '5-1', src: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&auto=format&fit=crop', alt: 'Django Docker Setup', aspectRatio: 'landscape' }
    ]
  },
  {
    id: '6',
    title: 'AWS Resume Parser Lambda',
    category: 'automation',
    year: '2025',
    slug: 'aws-resume-parser-lambda',
    coverImage: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&auto=format&fit=crop',
    description: 'Event-driven serverless resume parser built using AWS Lambda, S3, Amazon Comprehend, and SNS. Automatically extracts skills, keywords, and language information from PDF/DOCX resumes and stores structured data.',
    technologies: ['AWS Lambda', 'S3', 'Amazon Comprehend', 'SNS', 'Python'],
    githubUrl: 'https://github.com/MrSiddu73/aws-resume-parser-lambda',
    images: [
      { id: '6-1', src: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&auto=format&fit=crop', alt: 'Resume Parser', aspectRatio: 'landscape' }
    ]
  },
  {
    id: '7',
    title: 'Serverless Image Processor',
    category: 'automation',
    year: '2025',
    slug: 'aws-serverless-image-processor',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
    description: 'A serverless image processing pipeline using AWS Lambda, S3 triggers, Pillow, and SNS. Automatically resizes/compresses uploaded images and sends email notifications.',
    technologies: ['AWS Lambda', 'S3', 'Pillow', 'SNS', 'Python'],
    githubUrl: 'https://github.com/MrSiddu73/aws-serverless-image-processor',
    images: [
      { id: '7-1', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop', alt: 'Image Processing', aspectRatio: 'landscape' }
    ]
  },
  {
    id: '8',
    title: 'Linux LAMP Project',
    category: 'web',
    year: '2025',
    slug: 'linux-lamp-project',
    coverImage: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&auto=format&fit=crop',
    description: 'A Linux-based LAMP (Linux, Nginx, MariaDB, PHP) project demonstrating the deployment of a simple web application. Includes PHP forms for user input, database interactions using MariaDB, and server configuration.',
    technologies: ['Linux', 'Nginx', 'MariaDB', 'PHP', 'Shell'],
    githubUrl: 'https://github.com/MrSiddu73/Linux-LAMP-Project',
    images: [
      { id: '8-1', src: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&auto=format&fit=crop', alt: 'LAMP Stack', aspectRatio: 'landscape' }
    ]
  },
  {
    id: '9',
    title: 'Web App Deployment on AWS',
    category: 'cloud',
    year: '2025',
    slug: 'web-app-deployment',
    coverImage: 'https://images.unsplash.com/photo-1560732488-6b0df240254a?w=800&auto=format&fit=crop',
    description: 'Documentation and setup for deploying a web application on AWS EC2 using Apache, MariaDB, and WordPress. Complete guide for production-ready deployment.',
    technologies: ['AWS EC2', 'Apache', 'MariaDB', 'WordPress'],
    githubUrl: 'https://github.com/MrSiddu73/Web-App-Deployment',
    images: [
      { id: '9-1', src: 'https://images.unsplash.com/photo-1560732488-6b0df240254a?w=800&auto=format&fit=crop', alt: 'Web Deployment', aspectRatio: 'landscape' }
    ]
  },
  {
    id: '10',
    title: 'Java Coding Challenges',
    category: 'backend',
    year: '2024',
    slug: 'java-coding-challenges',
    coverImage: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&auto=format&fit=crop',
    description: 'Solutions for coding problems from beginner to intermediate level, solved using Java as part of workshop practice. Covers data structures, algorithms, and problem-solving patterns.',
    technologies: ['Java', 'Data Structures', 'Algorithms'],
    githubUrl: 'https://github.com/MrSiddu73/Java-Coding-Challenges',
    images: [
      { id: '10-1', src: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&auto=format&fit=crop', alt: 'Java Code', aspectRatio: 'landscape' }
    ]
  }
];

// Helper function to get project by slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

// Helper function to get projects by category
export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

// Helper function to get featured projects (first 4)
export const getFeaturedProjects = (): Project[] => {
  return projects.slice(0, 4);
};

// Helper function to get next/previous project
export const getAdjacentProjects = (currentSlug: string): { prev: Project | null; next: Project | null } => {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  
  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null
  };
};
