// TypeScript type definitions for Fealess Next.js Web Application

export type NavItem = {
  id: string;
  label: string;
};

export type Rating = {
  score: string;
  reviews: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
};

export type Value = {
  id: string;
  title: string;
  description: string;
};

export type Leader = {
  id: string;
  name: string;
  title: string;
  quote?: string;
  image?: string;
};
