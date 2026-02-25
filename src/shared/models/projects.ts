export interface HeroData {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  location: string;
  availability: string;
}

export interface AboutData {
  bio: string;
  highlights: { label: string; value: string }[];
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Technology {
  name: string;
  category: string;
  proficiency: number;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  github: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactData {
  email: string;
  phone: string;
  social: SocialLink[];
}

export interface MockData {
  hero: HeroData;
  about: AboutData;
  experiences: Experience[];
  technologies: Technology[];
  projects: Project[];
  contact: ContactData;
}
