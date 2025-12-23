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
