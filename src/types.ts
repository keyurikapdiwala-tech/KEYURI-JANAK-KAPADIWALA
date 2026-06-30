export interface MembershipPlan {
  id: string;
  name: string;
  price: string; // Keep as string so it's editable and can handle "₹1,500/month" or custom placeholders
  period: string;
  popular: boolean;
  features: string[];
}

export interface FacilityItem {
  id: string;
  name: string;
  category: 'Equipment' | 'Amenity';
  iconName: string;
  description: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface WorkoutProgramItem {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  imagePlaceholder: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GymStats {
  happyMembers: number;
  googleRating: number;
  trainingSessions: number;
  satisfactionRate: number;
}

export interface GalleryImage {
  id: string;
  url: string;
  caption: string;
  category: 'Equipment' | 'Training' | 'Interior' | 'Group';
}
