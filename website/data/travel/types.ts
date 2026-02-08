export interface Course {
  name: string;
  type: "public" | "resort" | "semi-private" | "private";
  greenFee: string; // e.g. "$60-90", "$250+"
  signatureFeature: string;
  rating?: number; // 1-5
}

export interface CourseTier {
  tier: "top_tier" | "ole_reliable" | "hidden_gem";
  label: string; // "Top Tier", "Ole Reliables", "Hidden Gems"
  description: string;
  courses: Course[];
}

export interface Neighborhood {
  name: string;
  vibe: string;
  priceRange: "$" | "$$" | "$$$" | "$$$$";
  bestFor: string;
}

export interface DiningSpot {
  name: string;
  cuisine: string;
  priceRange: "$" | "$$" | "$$$" | "$$$$";
  highlight: string;
}

export interface Brewery {
  name: string;
  style: string;
  highlight: string;
}

export interface NonGolfActivity {
  name: string;
  category: "outdoors" | "culture" | "nightlife" | "wellness" | "food_tour";
  description: string;
}

export interface GolfDestination {
  slug: string;
  city: string;
  state: string;
  coordinates: { lat: number; lng: number };
  tagline: string;
  flightCode: string; // airline theme: "GG-SCO", "GG-MYR"
  heroImage?: string;
  stats: {
    coursesCount: number;
    avgGreenFee: string;
    bestMonth: string;
    avgTemp: string;
  };
  courseTiers: CourseTier[];
  neighborhoods: Neighborhood[];
  dining: DiningSpot[];
  breweries: Brewery[];
  activities: NonGolfActivity[];
  bestTimeToVisit: string;
  nearestAirport: string;
  seoKeywords: string[];
}
