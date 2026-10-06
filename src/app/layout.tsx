import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { RestaurantHeader } from "@/components/RestaurantHeader";
import { RestaurantFooter } from "@/components/RestaurantFooter";
import { MobileActionBar } from "@/components/MobileActionBar";
import { RESTAURANT_DATA } from "@/data/restaurant";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The 7A Restaurant & Bar | Rooftop Dining & Bar in Kharadi, Pune",
  description:
    "The 7A Restaurant & Bar is a rooftop dining and nightlife destination at Gera's Imperium Alpha in Kharadi, Pune, offering Indian, Asian, Continental and bar food with cocktails, live music and evening entertainment.",
  keywords: [
    "The 7A",
    "The 7A Restaurant & Bar",
    "Rooftop restaurant Kharadi",
    "Rooftop bar Pune",
    "Gera Imperium Alpha restaurants",
    "Kala Mutton Kharadi",
    "Lahori Murg Pune",
    "Cocktails Kharadi",
    "Nightlife Kharadi",
    "Live music restaurant Pune",
  ],
  authors: [{ name: "The 7A Restaurant & Bar" }],
  openGraph: {
    title: "The 7A Restaurant & Bar | 11th Floor Rooftop, Kharadi, Pune",
    description:
      "Rooftop dining, craft cocktails, live music and a menu built for long evenings above Kharadi.",
    url: "https://the7a.in",
    siteName: "The 7A Restaurant & Bar",
    images: [
      {
        url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=85&w=1200",
        width: 1200,
        height: 630,
        alt: "The 7A Restaurant & Bar Rooftop Kharadi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The 7A Restaurant & Bar | Rooftop Dining & Bar Kharadi Pune",
    description: "11th Floor Rooftop dining, cocktails & nightlife in Kharadi, Pune.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Structured Data (JSON-LD) for LocalBusiness / Restaurant / BarOrPub
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "BarOrPub", "FoodEstablishment", "LocalBusiness"],
    name: RESTAURANT_DATA.name,
    image: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=85&w=1200",
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=85&w=1200",
    ],
    telephone: RESTAURANT_DATA.phones.primary,
    email: RESTAURANT_DATA.email,
    priceRange: "₹₹",
    servesCuisine: RESTAURANT_DATA.cuisines,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${RESTAURANT_DATA.address.building}, ${RESTAURANT_DATA.address.floor}, ${RESTAURANT_DATA.address.survey}, ${RESTAURANT_DATA.address.road}`,
      addressLocality: RESTAURANT_DATA.address.locality,
      addressRegion: RESTAURANT_DATA.address.state,
      postalCode: RESTAURANT_DATA.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: RESTAURANT_DATA.map.latitude,
      longitude: RESTAURANT_DATA.map.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "12:00",
        closes: "01:30",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: RESTAURANT_DATA.ratings.diningRating.toString(),
      reviewCount: "2700",
      bestRating: "5",
      worstRating: "1",
    },
    menu: "https://the7a.in/menu",
    acceptsReservations: "True",
  };

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0A0A0A] text-[#F4F0E8] font-sans">
        <RestaurantHeader />
        <main className="flex-1">{children}</main>
        <RestaurantFooter />
        <MobileActionBar />
      </body>
    </html>
  );
}
