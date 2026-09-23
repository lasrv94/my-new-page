export interface Destination {
  id: string;
  name: string;
  badge: string;
  image: string;
  description: string;
  travelTime: string;
  highlight: string;
  featured?: boolean;
}

export interface VallartaSpotlightTab {
  id: string;
  tabLabel: string;
  title: string;
  badge: string;
  image: string;
  description: string;
  mapsQuery: string;
}

export interface VallartaStat {
  icon: string;
  title: string;
  desc: string;
}

export interface Review {
  author: string;
  timeAgo: string;
  stars: number;
  text: string;
}

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  reviewsCount: string;
  summary: string;
  mapsQuery: string;
  reviews: Review[];
}
