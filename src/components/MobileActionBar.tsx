"use client";

import React from "react";
import Link from "next/link";
import { Phone, UtensilsCrossed, Calendar, Navigation } from "lucide-react";
import { RESTAURANT_DATA } from "@/data/restaurant";

export function MobileActionBar() {
  return (
    <nav
      aria-label="Quick mobile actions"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#0A0A0A]/95 backdrop-blur-md border-t border-[#C6A15B]/30 px-2 py-2"
    >
      <div className="grid grid-cols-4 gap-1 max-w-md mx-auto">
        {/* CALL */}
        <a
          href={`tel:${RESTAURANT_DATA.phones.primary}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-md text-[#D8D1C4] hover:text-[#E1BB70] active:bg-[#17382F]/50 transition-colors"
        >
          <Phone className="w-4 h-4 mb-1 text-[#C6A15B]" />
          <span className="text-[10px] font-sans font-medium tracking-[0.1em] uppercase">
            Call
          </span>
        </a>

        {/* MENU */}
        <Link
          href="/menu"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-md text-[#D8D1C4] hover:text-[#E1BB70] active:bg-[#17382F]/50 transition-colors"
        >
          <UtensilsCrossed className="w-4 h-4 mb-1 text-[#C6A15B]" />
          <span className="text-[10px] font-sans font-medium tracking-[0.1em] uppercase">
            Menu
          </span>
        </Link>

        {/* RESERVE */}
        <Link
          href="/reserve"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-md bg-[#17382F] border border-[#C6A15B]/40 text-[#E1BB70] font-semibold active:bg-[#0E241F] transition-colors"
        >
          <Calendar className="w-4 h-4 mb-1 text-[#E1BB70]" />
          <span className="text-[10px] font-sans font-bold tracking-[0.1em] uppercase text-[#F4F0E8]">
            Reserve
          </span>
        </Link>

        {/* DIRECTIONS */}
        <a
          href={RESTAURANT_DATA.map.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-md text-[#D8D1C4] hover:text-[#E1BB70] active:bg-[#17382F]/50 transition-colors"
        >
          <Navigation className="w-4 h-4 mb-1 text-[#C6A15B]" />
          <span className="text-[10px] font-sans font-medium tracking-[0.1em] uppercase">
            Directions
          </span>
        </a>
      </div>
    </nav>
  );
}
