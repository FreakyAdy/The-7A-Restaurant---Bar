import React from "react";
import { ReservationSection } from "@/components/ReservationSection";
import { RESTAURANT_DATA } from "@/data/restaurant";
import { Phone, Calendar, Clock, MapPin, Sparkles, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Reserve a Table | The 7A Restaurant & Bar Kharadi Pune",
  description:
    "Book your table for rooftop dining, sundowners, or private celebrations at The 7A on the 11th Floor of Gera's Imperium Alpha in Kharadi, Pune.",
};

export default function ReservePage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-[#F4F0E8] pt-28 pb-20">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17382F] border border-[#C6A15B]/30 mb-3">
            <Calendar className="w-3.5 h-3.5 text-[#E1BB70]" />
            <span className="text-[10px] font-sans tracking-[0.25em] text-[#E1BB70] uppercase font-bold">
              PRIORITY TABLE BOOKING
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#F4F0E8] tracking-tight">
            Reserve Your Evening
          </h1>

          <div className="w-16 h-px bg-[#C6A15B]/50 mx-auto my-4" />

          <p className="text-base sm:text-lg text-[#D8D1C4]/85 font-sans font-light leading-relaxed">
            Choose your preferred zone: 11th-floor open-air sky terrace, cozy emerald booths, high cocktail tables, or private celebration sections.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#D8D1C4]/80">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>Instant Confirmation Reference</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>Complimentary Valet Parking</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>No Advance Deposit Required</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Reservation Component */}
      <ReservationSection embedded={true} />

      {/* Direct Call Callout */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 mt-12 text-center">
        <div className="p-6 rounded-xl bg-[#111111] border border-[#17382F] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-serif text-lg text-[#F4F0E8]">Prefer Booking by Phone?</h4>
            <p className="text-xs text-[#D8D1C4]/70 mt-0.5">
              Our reservation desk is available daily from 11:30 AM to midnight.
            </p>
          </div>
          <a
            href={`tel:${RESTAURANT_DATA.phones.primary}`}
            className="px-6 py-3 rounded-lg bg-[#17382F] hover:bg-[#1f4a3e] border border-[#C6A15B]/40 text-[#E1BB70] text-xs font-sans font-bold tracking-wider uppercase flex items-center gap-2 shrink-0"
          >
            <Phone className="w-4 h-4" />
            <span>Call {RESTAURANT_DATA.phones.primaryDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
