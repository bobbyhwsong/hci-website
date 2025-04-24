export interface NavItem {
  id: string;
  title: string;
  href: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio?: string;
  image?: string;
}

export interface ProjectPhase {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  artifacts?: ProjectArtifact[];
  image?: string;
}

export interface ProjectArtifact {
  id: string;
  title: string;
  description?: string;
  type: 'report' | 'presentation' | 'prototype' | 'video' | 'poster' | 'other';
  url?: string;
  previewImage?: string;
}