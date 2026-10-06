import React from "react";
import Link from "next/link";
import { ArrowRight, Compass, ShieldCheck } from "lucide-react";
import { RESTAURANT_DATA } from "@/data/restaurant";

export function IntroSection() {
  return (
    <section className="bg-[#F4F0E8] text-[#111111] py-20 lg:py-28 relative overflow-hidden">
      {/* Subtle oversized background typographic watermark */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 select-none pointer-events-none text-[#D8D1C4]/35 font-serif font-bold text-[22vw] leading-none">
        07
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN: Large Editorial Headline (Cols 1-5) */}
          <div className="lg:col-span-5">
            <span className="text-xs font-sans tracking-[0.25em] text-[#17382F] uppercase font-bold block mb-3">
              THE PHILOSOPHY
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#0A0A0A] leading-[1.08] tracking-tight">
              More Than <br />
              <span className="italic text-[#17382F]">Dinner.</span>
            </h2>

            {/* Small gold rule */}
            <div className="w-16 h-[2px] bg-[#C6A15B] my-6" />

            <p className="text-sm font-sans tracking-[0.15em] text-[#555555] uppercase font-medium">
              11TH FLOOR &bull; GERA&apos;S IMPERIUM ALPHA &bull; KHARADI
            </p>
          </div>

          {/* RIGHT COLUMN: Concise Verified Narrative & Badges (Cols 6-12) */}
          <div className="lg:col-span-7 space-y-6">
            <p className="font-serif text-2xl sm:text-3xl text-[#17382F] font-light leading-relaxed">
              The 7A combines rooftop dining, Indian and global-inspired food, cocktails, music and an elevated evening atmosphere in Kharadi.
            </p>

            <p className="text-base sm:text-lg text-[#333333] font-sans font-normal leading-relaxed">
              Conceived as a dynamic social dining destination, the venue transitions effortlessly from relaxed lunchtime spreads and sunset aperitifs into an atmospheric rooftop lounge with craft cocktails, live music, and resident DJs.
            </p>

            {/* Verified Attributes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#D8D1C4]">
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-[#17382F]">11th Floor</span>
                <span className="text-xs font-sans text-[#666666] mt-0.5">Rooftop &amp; Skyline</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-[#17382F]">12 PM – 1:30 AM</span>
                <span className="text-xs font-sans text-[#666666] mt-0.5">Open All 7 Days</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-[#17382F]">{RESTAURANT_DATA.pricing.averageForTwo}</span>
                <span className="text-xs font-sans text-[#666666] mt-0.5">Approx. Without Alcohol</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/experience"
                className="inline-flex items-center gap-2 text-xs font-sans font-bold tracking-[0.2em] text-[#17382F] hover:text-[#C6A15B] uppercase group transition-colors"
              >
                <span>EXPLORE THE ROOFTOP SPACE</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
