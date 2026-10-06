import React from "react";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Camera, Sparkles } from "lucide-react";

export const metadata = {
  title: "Editorial Gallery | The 7A Restaurant & Bar Kharadi Pune",
  description:
    "Visual portfolio of The 7A's 11th-floor rooftop, architectural emerald interior, craft cocktail bar, signature dishes, and vibrant nightlife in Kharadi, Pune.",
};

export default function GalleryPage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-[#F4F0E8] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17382F] border border-[#C6A15B]/30 mb-4">
            <Camera className="w-3.5 h-3.5 text-[#E1BB70]" />
            <span className="text-[10px] font-sans tracking-[0.25em] text-[#E1BB70] uppercase font-bold">
              VISUAL CHRONICLES
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#F4F0E8] tracking-tight">
            The 7A Gallery
          </h1>

          <div className="w-16 h-px bg-[#C6A15B]/50 mx-auto my-4" />

          <p className="text-sm sm:text-base text-[#D8D1C4]/80 font-sans font-light leading-relaxed">
            An editorial look across our rooftop terrace, emerald and marble interiors, clay-oven kitchen, cocktail mixology, and weekend nightlife energy.
          </p>
        </div>

        {/* Masonry / Asymmetric Filterable Gallery Grid */}
        <GalleryGrid />
      </div>
    </div>
  );
}
