import React from "react";
import Link from "next/link";
import { VENUE_PROGRAMMING } from "@/data/events";
import { EventCard } from "@/components/EventCard";
import { Disc3, Calendar, Radio, Tv, Sparkles, Phone } from "lucide-react";
import { RESTAURANT_DATA } from "@/data/restaurant";

export const metadata = {
  title: "Events & Nightlife | The 7A Restaurant & Bar Kharadi Pune",
  description:
    "Discover weekly DJ nights, live acoustic music sets, sundowners, and live sports screenings on the 11th-floor rooftop at The 7A in Kharadi, Pune.",
};

export default function EventsPage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-[#F4F0E8] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17382F] border border-[#C6A15B]/30 mb-4">
            <Radio className="w-3.5 h-3.5 text-[#E1BB70]" />
            <span className="text-[10px] font-sans tracking-[0.25em] text-[#E1BB70] uppercase font-bold">
              WEEKLY PROGRAMMING
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#F4F0E8] tracking-tight">
            Events &amp; Nightlife
          </h1>

          <div className="w-16 h-px bg-[#C6A15B]/50 mx-auto my-4" />

          <p className="text-base sm:text-lg text-[#D8D1C4]/85 font-sans font-light leading-relaxed">
            From soulful acoustic Sunday sundowners to high-energy Friday DJ sessions and live match screenings on giant screens.
          </p>
        </div>

        {/* Quick Nightlife Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-xl bg-[#111111] border border-[#17382F] flex flex-col items-start">
            <Disc3 className="w-8 h-8 text-[#E1BB70] mb-3" />
            <h3 className="font-serif text-xl text-[#F4F0E8]">Weekend DJ Sessions</h3>
            <p className="text-xs text-[#D8D1C4]/70 mt-1 leading-relaxed">
              Every Friday and Saturday from 8:30 PM. Commercial hits, deep house, and Bollywood mixes elevated on the rooftop.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#111111] border border-[#17382F] flex flex-col items-start">
            <Radio className="w-8 h-8 text-[#E1BB70] mb-3" />
            <h3 className="font-serif text-xl text-[#F4F0E8]">Live Acoustic Music</h3>
            <p className="text-xs text-[#D8D1C4]/70 mt-1 leading-relaxed">
              Every Sunday evening from 6:30 PM. Unplugged indie, Sufi, and retro classics paired with sundowner cocktails.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#111111] border border-[#17382F] flex flex-col items-start">
            <Tv className="w-8 h-8 text-[#E1BB70] mb-3" />
            <h3 className="font-serif text-xl text-[#F4F0E8]">Big Screen Sports</h3>
            <p className="text-xs text-[#D8D1C4]/70 mt-1 leading-relaxed">
              Live stadium sound and crystal-clear HD projection for cricket world cups, IPL fixtures, and football leagues.
            </p>
          </div>
        </div>

        {/* All Programming Cards */}
        <div className="mb-14">
          <div className="flex items-center justify-between border-b border-[#17382F] pb-4 mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#F4F0E8]">
              Residency Nights &amp; Sessions
            </h2>
            <span className="text-xs font-mono text-[#C6A15B]">
              Open 7 Days &bull; 12 PM – 1:30 AM
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VENUE_PROGRAMMING.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>

        {/* Table Reservation Box */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#0E241F] to-[#111111] border border-[#C6A15B]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#E1BB70] uppercase">
              RESERVE YOUR SPOT
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F0E8] mt-1">
              Planning a Weekend Night Out?
            </h3>
            <p className="text-xs sm:text-sm text-[#D8D1C4]/80 mt-1">
              Rooftop tables for DJ nights and match screenings fill up fast. Reserve ahead to guarantee premium booth or cabana seating.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${RESTAURANT_DATA.phones.primary}`}
              className="px-5 py-3 rounded-md border border-[#C6A15B]/40 hover:bg-[#17382F] text-xs font-sans font-bold tracking-wider text-[#F4F0E8] uppercase flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>Call Host</span>
            </a>

            <Link
              href="/reserve"
              className="px-6 py-3 rounded-md bg-gradient-to-r from-[#E1BB70] to-[#C6A15B] text-[#0A0A0A] text-xs font-sans font-bold tracking-[0.15em] uppercase hover:brightness-110 shadow-lg flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve Table</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
