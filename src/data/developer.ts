import type { DeveloperInfo } from '@/types';

export const developerInfo: DeveloperInfo = {
  name: 'Siddu S. Nyamagoud',
  tagline: 'DevOps Engineer & Cloud Architect',
  heroIntroduction: 'Building scalable cloud infrastructure and automating everything with AWS, Kubernetes, and modern DevOps practices.',
  biography: `I'm a passionate DevOps Engineer and Cloud Architect based in Bengaluru, India, with expertise in building and deploying scalable applications on AWS. I specialize in containerization with Docker and Kubernetes, CI/CD pipelines, serverless architectures, and infrastructure automation.

My journey in tech has been driven by a love for automation and solving complex infrastructure challenges. I enjoy working on projects that involve designing robust architectures, optimizing deployments, and implementing best practices for cloud-native applications.

Currently focused on AWS services, Kubernetes orchestration, and building event-driven serverless solutions. I'm always exploring new technologies and contributing to open-source projects through my organization @algorithm365.`,
  skills: [
    {
      category: 'Cloud & Infrastructure',
      items: ['AWS (EC2, S3, Lambda, EKS, RDS, SNS, SQS)', 'Kubernetes', 'Docker', 'Terraform', 'Linux Administration']
    },
    {
      category: 'DevOps & CI/CD',
      items: ['GitHub Actions', 'Jenkins', 'Docker Compose', 'Nginx', 'Apache']
    },
    {
      category: 'Programming',
      items: ['Python', 'Java', 'JavaScript', 'Shell Scripting', 'PHP']
    },
    {
      category: 'Databases',
      items: ['MySQL', 'MariaDB', 'PostgreSQL', 'Amazon Aurora']
    }
  ],
  experience: [
    'Designed and deployed 3-tier AWS architectures with VPC, subnets, and Aurora MySQL',
    'Built serverless pipelines using Lambda, API Gateway, S3, SNS, and SQS',
    'Containerized applications with Docker and deployed to AWS EKS',
    'Automated infrastructure provisioning and snapshot management',
    'Implemented CI/CD pipelines with GitHub Actions and Jenkins'
  ],
  workExperience: [
    {
      title: 'DevOps Engineer',
      company: 'Freelance / Personal Projects',
      location: 'Bengaluru, India',
      period: '2023 - Present',
      description: [
        'Designed and implemented scalable 3-tier AWS architectures with VPC, public/private subnets, and Aurora MySQL',
        'Built event-driven serverless applications using AWS Lambda, API Gateway, S3, SNS, and SQS',
        'Containerized applications with Docker and orchestrated deployments on AWS EKS (Kubernetes)',
        'Automated infrastructure provisioning and snapshot management using Terraform and AWS CLI',
        'Set up CI/CD pipelines with GitHub Actions for automated testing and deployment'
      ]
    },
    {
      title: 'Full Stack Developer Trainee',
      company: 'Algorithm365 Organization',
      location: 'Remote',
      period: '2022 - 2023',
      description: [
        'Contributed to open-source projects focused on web development and DevOps automation',
        'Developed Java and Python applications with MySQL/PostgreSQL databases',
        'Implemented RESTful APIs and integrated third-party services',
        'Practiced Agile methodologies and collaborative development workflows'
      ]
    }
  ],
  certifications: [
    {
      name: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2024',
      credentialUrl: 'https://aws.amazon.com/certification/'
    },
    {
      name: 'Docker Essentials',
      issuer: 'Docker Inc.',
      date: '2023'
    },
    {
      name: 'Kubernetes Fundamentals',
      issuer: 'Cloud Native Computing Foundation',
      date: '2023'
    },
    {
      name: 'GitHub Actions CI/CD',
      issuer: 'GitHub',
      date: '2023'
    }
  ],
  education: 'Software Development Engineering - Full Stack',
  location: 'Bengaluru, India',
  email: 'siddusnyamagoud27@gmail.com',
  availability: 'Open to DevOps and Cloud Engineering opportunities',
  socialLinks: {
    github: 'https://github.com/MrSiddu73',
    linkedin: 'https://www.linkedin.com/in/sid73/'
  },
  avatarImage: 'https://avatars.githubusercontent.com/u/193259665?v=4'
};
