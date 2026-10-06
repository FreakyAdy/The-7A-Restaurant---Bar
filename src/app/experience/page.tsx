import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RESTAURANT_DATA } from "@/data/restaurant";
import { AmenitiesSection } from "@/components/AmenitiesSection";
import { CloudMoon, SunMedium, Armchair, Wine, Sparkles, ArrowRight, ShieldCheck, MapPin } from "lucide-react";

export const metadata = {
  title: "The Rooftop Experience | The 7A Restaurant & Bar Kharadi Pune",
  description:
    "Explore the 11th-floor rooftop ambience, open-air glass canopy, architectural emerald green interior, and panoramic skyline views at The 7A in Kharadi, Pune.",
};

export default function ExperiencePage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-[#F4F0E8] pt-28 pb-20">
      {/* Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17382F] border border-[#C6A15B]/30 mb-4">
            <CloudMoon className="w-3.5 h-3.5 text-[#E1BB70]" />
            <span className="text-[10px] font-sans tracking-[0.25em] text-[#E1BB70] uppercase font-bold">
              11TH FLOOR DESTINATION
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#F4F0E8] tracking-tight">
            The 7A Experience
          </h1>

          <div className="w-20 h-px bg-[#C6A15B]/50 mx-auto my-5" />

          <p className="text-base sm:text-lg text-[#D8D1C4]/85 font-sans font-light leading-relaxed">
            Elevated 11 floors above Kharadi, The 7A balances architectural intimacy with the thrill of open-air rooftop dining and curated nightlife.
          </p>
        </div>
      </section>

      {/* Feature 1: The Rooftop Sky Terrace */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-[#17382F]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#C6A15B]/30 shadow-2xl">
            <Image
              src="/images/rooftop_terrace.jpg"
              alt="The 7A Open Air Rooftop Terrace"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-xs font-mono text-[#E1BB70]">
              OUTDOOR DECK &bull; 11TH FLOOR
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-sans tracking-[0.25em] text-[#C6A15B] uppercase font-bold">
              OPEN-AIR ARCHITECTURE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F4F0E8] leading-tight">
              Breezes, Greenery &amp; Glass Canopy
            </h2>
            <p className="text-sm sm:text-base text-[#D8D1C4]/80 font-sans font-light leading-relaxed">
              Step onto the rooftop terrace where natural foliage and contemporary steel framing support a transparent glass canopy. Enjoy the outdoor Pune breeze while staying sheltered from seasonal rain or harsh sun, paired with clear panoramic vistas across the IT corridor.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-[#F4F0E8] pt-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
                <span>Panoramic views across Kharadi and Pune Nagar Road</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
                <span>All-weather dining under architectural glass canopies</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
                <span>Open cabanas and elevated high-top cocktail tables</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Feature 2: Architectural Interior & Sculptural Lighting */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-[#17382F]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-4 order-2 lg:order-1">
            <span className="text-xs font-sans tracking-[0.25em] text-[#C6A15B] uppercase font-bold">
              DARK URBAN LUXURY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F4F0E8] leading-tight">
              Emerald Panels, Marble &amp; Brass
            </h2>
            <p className="text-sm sm:text-base text-[#D8D1C4]/80 font-sans font-light leading-relaxed">
              Inside, The 7A unfolds into a rich mood of deep emerald wall panels (#17382F), dark charcoal stonework, polished marble, and warm amber chandeliers. Designed for those who appreciate sensory details, private banquettes provide acoustic comfort for personal celebrations.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-[#F4F0E8] pt-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
                <span>Sculptural warm amber chandeliers and ambient backlighting</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
                <span>Deep green velvet booths and comfortable banquette seating</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
                <span>Polished marble foyer with signature gold 7A mark</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#C6A15B]/30 shadow-2xl order-1 lg:order-2">
            <Image
              src="/images/interior_chandeliers.jpg"
              alt="The 7A Emerald Interior & Grand Chandeliers"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-xs font-mono text-[#E1BB70]">
              INTERIOR LOUNGE &bull; EMERALD ARCHITECTURE
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Day into Night Rhythm */}
      <section className="bg-[#111111] py-16 border-y border-[#17382F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] font-sans tracking-[0.25em] text-[#C6A15B] uppercase font-bold">
              THE RHYTHM OF THE VENUE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F4F0E8] mt-2">
              From Sunset to Midnight
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-[#0A0A0A] border border-[#17382F] hover:border-[#C6A15B]/40 transition-colors">
              <SunMedium className="w-6 h-6 text-[#E1BB70] mb-3" />
              <span className="text-[10px] font-mono text-[#C6A15B] uppercase tracking-wider block">
                12:00 PM – 4:30 PM
              </span>
              <h3 className="font-serif text-xl text-[#F4F0E8] mt-1">Unhurried Lunch</h3>
              <p className="text-xs text-[#D8D1C4]/75 mt-2 leading-relaxed">
                Natural light filters through the glass canopy. Ideal for business lunches, work-friendly meetings, and family gatherings over authentic Indian platters.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0A0A0A] border border-[#17382F] hover:border-[#C6A15B]/40 transition-colors">
              <Wine className="w-6 h-6 text-[#E1BB70] mb-3" />
              <span className="text-[10px] font-mono text-[#C6A15B] uppercase tracking-wider block">
                5:00 PM – 8:00 PM
              </span>
              <h3 className="font-serif text-xl text-[#F4F0E8] mt-1">Sundowners &amp; Aperitifs</h3>
              <p className="text-xs text-[#D8D1C4]/75 mt-2 leading-relaxed">
                The sky shifts to gold and violet. Guests gather for signature cocktails like the 7A Emerald Mist and freshly fired tandoori kebabs.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0A0A0A] border border-[#17382F] hover:border-[#C6A15B]/40 transition-colors">
              <Sparkles className="w-6 h-6 text-[#E1BB70] mb-3" />
              <span className="text-[10px] font-mono text-[#C6A15B] uppercase tracking-wider block">
                8:30 PM – 01:30 AM
              </span>
              <h3 className="font-serif text-xl text-[#F4F0E8] mt-1">Nightlife &amp; DJ Sessions</h3>
              <p className="text-xs text-[#D8D1C4]/75 mt-2 leading-relaxed">
                The music turns upbeat. Mood lighting, craft draughts, live sports screenings, and late-night social energy define the Kharadi nightlife scene.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <AmenitiesSection />

      {/* Reserve CTA */}
      <div className="max-w-4xl mx-auto px-4 text-center pt-16">
        <h3 className="font-serif text-3xl sm:text-4xl text-[#F4F0E8]">
          Experience The 7A in Person
        </h3>
        <p className="text-sm text-[#D8D1C4]/80 mt-2 max-w-lg mx-auto">
          Reserve your table on the 11th-floor rooftop terrace or step in for an evening cocktail.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/reserve"
            className="px-8 py-3.5 rounded-md bg-gradient-to-r from-[#E1BB70] to-[#C6A15B] text-[#0A0A0A] font-sans font-bold text-xs tracking-[0.2em] uppercase hover:brightness-110 shadow-lg"
          >
            RESERVE A TABLE
          </Link>
          <Link
            href="/gallery"
            className="px-8 py-3.5 rounded-md bg-[#17382F] hover:bg-[#1f4a3e] border border-[#C6A15B]/40 text-[#F4F0E8] font-sans font-medium text-xs tracking-[0.2em] uppercase"
          >
            VIEW GALLERY
          </Link>
        </div>
      </div>
    </div>
  );
}
