export interface ReviewHighlight {
  id: string;
  theme: string;
  excerpt: string;
  aspect: "Ambience & Views" | "Food & Signatures" | "Nightlife & Music" | "Service & Gatherings";
  visitType: string;
  sentimentScore: string;
}

export const REVIEW_THEMES: ReviewHighlight[] = [
  {
    id: "rev-1",
    theme: "Spectacular 11th Floor Rooftop Ambiance",
    excerpt: "The rooftop setting in Kharadi stands out immediately. Deep emerald accents, glass roof, warm lighting, and a panoramic city view make it ideal for evening drinks and dinner.",
    aspect: "Ambience & Views",
    visitType: "Rooftop Evening Dine-in",
    sentimentScore: "5.0 ★",
  },
  {
    id: "rev-2",
    theme: "Distinctive Food & North Indian Signatures",
    excerpt: "The Kala Mutton and Lahori Murg live up to the recommendations. Rich, flavorful, and paired perfectly with butter garlic naan and cocktails.",
    aspect: "Food & Signatures",
    visitType: "Dinner with Friends",
    sentimentScore: "5.0 ★",
  },
  {
    id: "rev-3",
    theme: "Music & Nightlife Transition",
    excerpt: "Love how the atmosphere shifts from calm sunset dining into an upbeat lounge later in the night. The DJ tracks keep the energy alive without overwhelming conversation.",
    aspect: "Nightlife & Music",
    visitType: "Weekend Lounge",
    sentimentScore: "4.8 ★",
  },
  {
    id: "rev-4",
    theme: "Group Celebrations & Valet Convenience",
    excerpt: "Hosted a 15-person birthday gathering. The staff managed reservations smoothly, seating was comfortable with ample space, and the valet parking made arrival effortless.",
    aspect: "Service & Gatherings",
    visitType: "Private Table Booking",
    sentimentScore: "5.0 ★",
  },
];
