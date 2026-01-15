
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Design' | 'Others';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  verifyUrl?: string;
}

export interface Interest {
  title: string;
  description: string;
  icon: string;
  imageUrls?: string[];
  youtubeId?: string;
}
