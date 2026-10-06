import React from "react";
import Link from "next/link";
import { VENUE_PROGRAMMING } from "@/data/events";
import { EventCard } from "@/components/EventCard";
import { Disc3, ArrowRight } from "lucide-react";

export function NightlifeSection() {
  return (
    <section className="bg-[#0E241F] text-[#F4F0E8] py-20 lg:py-28 relative overflow-hidden border-t border-[#17382F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#17382F] border border-[#C6A15B]/30 mb-3">
            <Disc3 className="w-3.5 h-3.5 text-[#E1BB70]" />
            <span className="text-[10px] font-sans tracking-[0.25em] text-[#E1BB70] uppercase font-medium">
              NIGHTLIFE &bull; ENTERTAINMENT
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F4F0E8] tracking-tight">
            After Dinner, <br />
            <span className="italic text-[#E1BB70]">The Night Begins.</span>
          </h2>

          <div className="w-12 h-px bg-[#C6A15B]/50 my-4" />

          <p className="text-sm sm:text-base text-[#D8D1C4]/80 font-sans font-light">
            Live music acoustics, weekend DJ sessions, and marquee sports screenings under Kharadi&apos;s evening sky.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VENUE_PROGRAMMING.slice(0, 3).map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-12 text-center">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-xs font-sans font-bold tracking-[0.2em] text-[#E1BB70] hover:text-[#F4F0E8] uppercase transition-colors group"
          >
            <span>VIEW ALL RESIDENCY NIGHTS &amp; SPORTS FIXTURES</span>
            <ArrowRight className="w-4 h-4 text-[#E1BB70] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
