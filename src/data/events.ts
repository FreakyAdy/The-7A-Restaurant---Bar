export interface NightlifeEvent {
  id: string;
  title: string;
  tag: string;
  daySchedule: string;
  time: string;
  description: string;
  vibe: string;
  musicGenre: string;
  image: string;
  badge?: string;
}

export const VENUE_PROGRAMMING: NightlifeEvent[] = [
  {
    id: "friday-dj-night",
    title: "High Altitude Fridays: DJ Sessions",
    tag: "DJ NIGHT",
    daySchedule: "Every Friday",
    time: "8:30 PM onwards",
    description: "Deep house, commercial hits, and upbeat melodic tracks curated by resident DJs under the 11th-floor open glass canopy.",
    vibe: "Energetic • Urban • Social Nightlife",
    musicGenre: "Commercial, Deep House & Bollywood Mixes",
    badge: "WEEKEND NIGHTS",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "saturday-skyline-grooves",
    title: "Saturday Rooftop Melodies",
    tag: "CLUB & LOUNGE",
    daySchedule: "Every Saturday",
    time: "8:00 PM onwards",
    description: "The marquee Saturday celebration. Crafted cocktails, high-energy beats, and late-night dining with panoramic skyline lights.",
    vibe: "Euphoric • Premium Nightlife • High Energy",
    musicGenre: "Electronic, Club Hits & Dance Anthems",
    badge: "SIGNATURE NIGHT",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "acoustic-sundays",
    title: "Sunset Unplugged: Live Acoustic Sets",
    tag: "LIVE MUSIC",
    daySchedule: "Every Sunday Evening",
    time: "6:30 PM – 10:00 PM",
    description: "Soulful live vocalists and guitar duos performing retro classics, indie pop, and contemporary favorites as dusk falls over Kharadi.",
    vibe: "Intimate • Soulful • Sunset Ambience",
    musicGenre: "Acoustic, Indie, Sufi & Retro English/Hindi",
    badge: "SUNDAY SUNDOWNER",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "sports-stadium-screening",
    title: "Championship Nights: Live Sports Screening",
    tag: "SPORTS SCREENING",
    daySchedule: "Match Days & Marquee Fixtures",
    time: "Live During Matches",
    description: "Catch cricket tournaments, Premier League clashes, and championship finals on giant HD screens with chilled beer pitchers and bar bites.",
    vibe: "Cheering • Stadium Energy • Community",
    musicGenre: "Stadium Audio & Halftime Beats",
    badge: "BIG SCREEN LIVE",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "wednesday-midweek-escape",
    title: "Midweek Unwind & Craft Cocktails",
    tag: "BAR SPECIAL",
    daySchedule: "Every Wednesday",
    time: "7:00 PM – Late",
    description: "Signature mixology showcase with special cocktail pairing platters and mellow ambient grooves to reset your workweek.",
    vibe: "Chic • Conversational • Relaxed",
    musicGenre: "Lo-Fi, Jazzhop & Downtempo Lounge",
    badge: "MIDWEEK",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000&auto=format&fit=crop",
  },
];
