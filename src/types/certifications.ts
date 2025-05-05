export interface Certification {
    id: string;
    name: string;
    logo: string;
    logoBw: string;
    link?: string;
  }

export interface Certifications {
    certifications: Certification[];
  }