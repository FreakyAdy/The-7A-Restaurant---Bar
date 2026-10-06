export interface RestaurantConfig {
  name: string;
  tagline: string;
  heroHeadline: string;
  heroSupporting: string;
  address: {
    building: string;
    floor: string;
    survey: string;
    road: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
    fullFormatted: string;
  };
  phones: {
    primary: string;
    primaryDisplay: string;
    secondary: string;
    secondaryDisplay: string;
  };
  whatsapp: string;
  email: string;
  hours: {
    display: string;
    openTime: string;
    closeTime: string;
    days: string;
    notes: string;
  };
  pricing: {
    averageForTwo: string;
    disclaimer: string;
  };
  ratings: {
    diningRating: number;
    maxRating: number;
    ratingCount: string;
    platform: string;
  };
  cuisines: string[];
  features: Array<{
    id: string;
    title: string;
    shortDesc: string;
    icon: string;
  }>;
  socials: {
    instagram: string;
    facebook: string;
  };
  ordering: {
    swiggyUrl: string;
    eazyDinerUrl: string;
  };
  map: {
    latitude: number;
    longitude: number;
    embedQuery: string;
    googleMapsUrl: string;
    directionsUrl: string;
  };
}

export const RESTAURANT_DATA: RestaurantConfig = {
  name: "The 7A Restaurant & Bar",
  tagline: "Your Evening, Above the Ordinary.",
  heroHeadline: "Your Evening,\nAbove the Ordinary.",
  heroSupporting: "Rooftop dining, craft cocktails, live music and a menu built for long evenings above Kharadi.",
  address: {
    building: "Gera's Imperium Alpha",
    floor: "11th Floor / Rooftop",
    survey: "Survey 64/1 to 6",
    road: "Pune Nagar Road",
    locality: "Kharadi",
    city: "Pune",
    state: "Maharashtra",
    pincode: "411014",
    fullFormatted: "11th Floor, Gera's Imperium Alpha, Survey 64/1 to 6, Pune Nagar Road, Kharadi, Pune, Maharashtra 411014",
  },
  phones: {
    primary: "+919049005233",
    primaryDisplay: "+91 90490 05233",
    secondary: "+919049006133",
    secondaryDisplay: "+91 90490 06133",
  },
  whatsapp: "+919049005233",
  email: "reservations@the7a.in",
  hours: {
    display: "12:00 PM – 01:30 AM",
    openTime: "12:00",
    closeTime: "01:30",
    days: "Monday through Sunday (All 7 Days)",
    notes: "Lunch: 12:00 PM – 4:00 PM • Sundowners & Dinner: 5:00 PM – 1:30 AM",
  },
  pricing: {
    averageForTwo: "₹1,500 for two",
    disclaimer: "Approximate cost without alcohol. Taxes applicable.",
  },
  ratings: {
    diningRating: 4.4,
    maxRating: 5.0,
    ratingCount: "2,700+",
    platform: "Verified Dining Reviews",
  },
  cuisines: [
    "North Indian",
    "Asian",
    "Indo-Chinese",
    "Continental",
    "Italian",
    "Finger Food",
    "Bar Bites",
    "Pizza",
    "Cocktails & Spirits",
  ],
  features: [
    {
      id: "rooftop",
      title: "11th Floor Rooftop",
      shortDesc: "Open-air panoramic views of Kharadi's skyline beneath a glass canopy.",
      icon: "CloudMoon",
    },
    {
      id: "full-bar",
      title: "Full Craft Bar",
      shortDesc: "Artisanal signature cocktails, single malts, draft beers, and fine wines.",
      icon: "Wine",
    },
    {
      id: "live-music",
      title: "Live Music & DJ",
      shortDesc: "Curated acoustic sets, live bands, and energetic weekend DJ nightlife.",
      icon: "Music",
    },
    {
      id: "dining-style",
      title: "Indoor & Outdoor",
      shortDesc: "Deep emerald velvet indoor booths, high bar tables, and terrace cabanas.",
      icon: "Compass",
    },
    {
      id: "private-dining",
      title: "Private Celebrations",
      shortDesc: "Bespoke setups for birthdays, anniversaries, and corporate gatherings.",
      icon: "Sparkles",
    },
    {
      id: "sports-screening",
      title: "Live Sports Screening",
      shortDesc: "High-definition screens for marquee cricket, football, and championship nights.",
      icon: "Tv",
    },
    {
      id: "valet-parking",
      title: "Valet & Free Parking",
      shortDesc: "Complimentary valet parking at Gera's Imperium Alpha entrance.",
      icon: "Car",
    },
    {
      id: "accessibility",
      title: "Full Accessibility",
      shortDesc: "High-speed elevators directly to the 11th floor with wheelchair access.",
      icon: "ShieldCheck",
    },
  ],
  socials: {
    instagram: "https://www.instagram.com/the7a_restrobar",
    facebook: "https://www.facebook.com/the7apune",
  },
  ordering: {
    swiggyUrl: "https://www.swiggy.com/restaurants/the-7a-restaurant-and-bar-kharadi-pune-136951",
    eazyDinerUrl: "https://www.eazydiner.com/pune/the-7a-restaurant-and-bar-kharadi",
  },
  map: {
    latitude: 18.5516,
    longitude: 73.9515,
    embedQuery: "Gera's+Imperium+Alpha+Kharadi+Pune",
    googleMapsUrl: "https://maps.google.com/?q=Gera's+Imperium+Alpha+Kharadi+Pune",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Gera%27s+Imperium+Alpha+Kharadi+Pune",
  },
};
