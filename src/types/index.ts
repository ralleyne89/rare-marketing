export interface Service {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  features: string[];
  pricing: {
    starter: PricingTier;
    professional: PricingTier;
    enterprise: PricingTier;
  };
}

export interface PricingTier {
  name: string;
  price: number;
  period: string;
  features: string[];
  popular?: boolean;
}

export interface NavigationItem {
  name: string;
  href: string;
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget: string;
  message: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: Date;
  updatedAt: Date;
  slug: string;
  tags: string[];
  featuredImage: string;
  readingTime: number;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  canonical?: string;
}
