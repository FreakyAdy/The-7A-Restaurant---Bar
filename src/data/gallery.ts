export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "rooftop" | "space" | "food" | "bar" | "night";
  caption: string;
  aspect: "tall" | "wide" | "square";
  imageUrl: string;
  locationTag: string;
}

export const GALLERY_CATEGORIES = [
  { id: "all", label: "All Imagery" },
  { id: "rooftop", label: "Rooftop" },
  { id: "space", label: "Interior & Architecture" },
  { id: "food", label: "Culinary" },
  { id: "bar", label: "Cocktails & Bar" },
  { id: "night", label: "Nightlife & Music" },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "11th Floor Rooftop Terrace",
    category: "rooftop",
    caption: "Open-air dining overlooking Kharadi city lights under architectural glass canopies.",
    aspect: "wide",
    imageUrl: "/images/rooftop_terrace.jpg",
    locationTag: "11th Floor Outdoor Deck",
  },
  {
    id: "gal-2",
    title: "Sculptural Chandelier & Emerald Walls",
    category: "space",
    caption: "The signature deep green interior panels accented with warm amber statement chandeliers.",
    aspect: "tall",
    imageUrl: "/images/interior_chandeliers.jpg",
    locationTag: "Main Dining Hall",
  },
  {
    id: "gal-3",
    title: "Artisanal Cocktail Craft",
    category: "bar",
    caption: "Handcrafted smoked bourbon and botanical gin creations with crystal glassware.",
    aspect: "square",
    imageUrl: "/images/cocktail_bar.jpg",
    locationTag: "The 7A Bar Counter",
  },
  {
    id: "gal-4",
    title: "Signature Lahori Murg & Tandoor",
    category: "food",
    caption: "Charred clay-oven chicken spiced with whole aromatic roasted masalas.",
    aspect: "square",
    imageUrl: "/images/lahori_murg.jpg",
    locationTag: "Tandoor Kitchen",
  },
  {
    id: "gal-5",
    title: "Weekend Nightlife Atmosphere",
    category: "night",
    caption: "Vibrant Friday & Saturday DJ sessions with illuminated Kharadi skyline backdrop.",
    aspect: "wide",
    imageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
    locationTag: "Rooftop Lounge",
  },
  {
    id: "gal-6",
    title: "Slow Dum Biryani with Saffron",
    category: "food",
    caption: "Aged basmati rice sealed on slow charcoal embers with succulent cuts.",
    aspect: "tall",
    imageUrl: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1200&auto=format&fit=crop",
    locationTag: "Dining Room",
  },
  {
    id: "gal-7",
    title: "Marble Reception & Brass 7A Cues",
    category: "space",
    caption: "Polished dark stone floors meeting champagne brass details and warm ambient illumination.",
    aspect: "wide",
    imageUrl: "/images/interior_chandeliers.jpg",
    locationTag: "Arrival Foyer",
  },
  {
    id: "gal-8",
    title: "Wok Tossed Asian Specialties",
    category: "food",
    caption: "High flame wok noodles and dry chilli starters infused with fiery aromatics.",
    aspect: "square",
    imageUrl: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=1200&auto=format&fit=crop",
    locationTag: "Asian Wok Counter",
  },
  {
    id: "gal-9",
    title: "Sunset Golden Hour over Rooftop",
    category: "rooftop",
    caption: "The transition from golden sunset hour to moody neon and amber night lights.",
    aspect: "wide",
    imageUrl: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop",
    locationTag: "11th Floor Terrace",
  },
  {
    id: "gal-10",
    title: "Live Band Acoustic Night",
    category: "night",
    caption: "Intimate vocals and acoustic strings serenading guests over dinner.",
    aspect: "tall",
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
    locationTag: "Stage Area",
  },
  {
    id: "gal-11",
    title: "Private Booths & Plush Velvet Seating",
    category: "space",
    caption: "Deep emerald and charcoal banquettes designed for unhurried conversations.",
    aspect: "square",
    imageUrl: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1200&auto=format&fit=crop",
    locationTag: "Private Dining Zone",
  },
  {
    id: "gal-12",
    title: "Craft Draughts & Mixology Display",
    category: "bar",
    caption: "Backlit spirits gallery, fresh fruit reductions, and cold brews poured to order.",
    aspect: "wide",
    imageUrl: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1200&auto=format&fit=crop",
    locationTag: "Main Bar",
  },
];
