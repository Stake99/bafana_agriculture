// Application constants and static content for Fealess Next.js Web Application

// Navigation items
export const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'stats', label: 'Stats' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'values', label: 'Values' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'contact', label: 'Contact' },
] as const;

// Hero content
export const HERO_CONTENT = {
  headline: 'Elevate and Growth Sustainable Animal Agriculture Development',
  rating: {
    score: '4.97/5',
    reviews: '30K+ reviews',
  },
  subheading: 'Fealess leads groundbreaking research in sustainable livestock farming and animal welfare',
} as const;

// Statistics
export const STATS = [
  { value: '10+', label: 'Years of Experience' },
  { value: '5000+', label: 'Animals Raised Sustainably' },
  { value: '96%', label: 'Satisfaction Rate' },
] as const;

// About content
export const ABOUT_CONTENT = {
  heading: 'Starting Professional on the Industry since 2015',
  content: 'Fealess has been at the forefront of sustainable animal agriculture, helping livestock farmers and ranchers implement humane and environmentally responsible practices. Our team of experts combines cutting-edge research with practical field experience to deliver solutions that work for both animals and agricultural businesses.',
} as const;

// Services
export const SERVICES = [
  {
    id: 'consultation',
    title: 'Sustainable Livestock Consultation',
    description: 'Expert guidance on sustainable animal husbandry practices, helping farmers transition to more ethical and environmentally friendly livestock management systems.',
  },
  {
    id: 'training',
    title: 'Animal Welfare Training & Capacity Building',
    description: 'Comprehensive training programs for humane livestock management, empowering farm workers and managers with the knowledge and skills for better animal care.',
  },
  {
    id: 'analytics',
    title: 'Livestock Data Analytics & Herd Management',
    description: 'Data-driven insights for better herd health and productivity, using advanced analytics to optimize animal welfare and farm efficiency.',
  },
  {
    id: 'technology',
    title: 'Animal Agriculture Technology Development',
    description: 'Cutting-edge technology solutions for modern livestock farming, developing innovative tools that improve animal welfare and operational efficiency.',
  },
] as const;

// Values
export const VALUES = [
  {
    id: 'science',
    title: 'Science-Based Animal Husbandry',
    description: 'Evidence-based research in livestock management drives our approach, ensuring that every recommendation is grounded in scientific rigor and proven results.',
  },
  {
    id: 'innovation',
    title: 'Innovation in Animal Welfare',
    description: 'Practical tools for humane farming that make a real difference, combining technological innovation with compassionate care for sustainable agriculture.',
  },
  {
    id: 'partnership',
    title: 'Partnership with Livestock Farmers',
    description: 'Walking alongside ranchers and farmers globally, we build lasting partnerships that support sustainable practices and economic viability.',
  },
  {
    id: 'future',
    title: 'Sustainable Animal Agriculture for All',
    description: 'Food security and ethical livestock practices go hand in hand. We work to make sustainable animal agriculture accessible and beneficial for all stakeholders.',
  },
] as const;

// Leadership
export const LEADERS = [
  {
    id: 'beatrice',
    name: 'Beatrice Williams',
    title: 'AgriTech Entrepreneur',
  },
  {
    id: 'bill',
    name: 'Bill Clinton',
    title: 'CEO of Fealess Company',
    quote: 'Our mission is to transform animal agriculture for a sustainable and humane future.',
  },
] as const;
