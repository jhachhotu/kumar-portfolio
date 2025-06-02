export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface Experience {
  id: string;
  position: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  url?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  grade: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
}

export interface Blog {
  id: string;
  title: string;
  url: string;
}

export interface Skill {
  category: string;
  items: string[];
}