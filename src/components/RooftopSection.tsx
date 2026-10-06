import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Wind, Eye, Shield } from "lucide-react";

export function RooftopSection() {
  return (
    <section className="bg-[#0E241F] text-[#F4F0E8] py-20 lg:py-28 relative overflow-hidden border-t border-[#17382F]">
      {/* Background radial glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#17382F]/70 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#C6A15B]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Visual Showcase (Cols 1-7) */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden border border-[#C6A15B]/30 shadow-2xl shadow-[#0A0A0A]">
              <Image
                src="/images/rooftop_terrace.jpg"
                alt="The 7A Rooftop Terrace in Kharadi Pune"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E241F] via-transparent to-black/30" />

              {/* Floating Architectural Badge */}
              <div className="absolute top-5 left-5 px-3 py-1.5 rounded bg-[#0A0A0A]/85 backdrop-blur-md border border-[#C6A15B]/40 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E1BB70] animate-ping" />
                <span className="text-[10px] font-sans tracking-[0.25em] text-[#E1BB70] uppercase font-bold">
                  11TH FLOOR &bull; KHARADI
                </span>
              </div>

              {/* Bottom Overlay Label */}
              <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end text-xs text-[#D8D1C4]/90">
                <span className="font-serif italic text-base sm:text-lg text-[#F4F0E8]">
                  Open-Air Glass Canopy &bull; Skyline Views
                </span>
                <span className="text-[10px] font-sans tracking-widest uppercase text-[#C6A15B]">
                  PUNE NAGAR ROAD
                </span>
              </div>
            </div>
          </div>

          {/* Narrative Content (Cols 8-12) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#17382F] border border-[#C6A15B]/25 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#E1BB70]" />
              <span className="text-[10px] font-sans tracking-[0.25em] text-[#E1BB70] uppercase font-medium">
                THE ROOFTOP
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F4F0E8] leading-[1.1] tracking-tight">
              Meet Us Above <br />
              <span className="italic text-[#E1BB70]">the City.</span>
            </h2>

            <p className="mt-5 text-sm sm:text-base text-[#D8D1C4]/85 leading-relaxed font-sans font-light">
              Perched high on the 11th floor of Gera&apos;s Imperium Alpha, The 7A delivers an open-air rooftop sanctuary framed by lush botanical greenery, contemporary architectural glass canopies, and sweeping panoramic views across Kharadi.
            </p>

            {/* Feature Bullets */}
            <div className="mt-6 space-y-3.5 w-full">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#F4F0E8]">
                <Wind className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <span>Open-air breezes &amp; all-weather glass canopy protection</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#F4F0E8]">
                <Eye className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <span>Elevated sunset viewpoints and illuminated Kharadi city lights</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#F4F0E8]">
                <Shield className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <span>Plush booth seating, high-top cocktail tables &amp; open cabanas</span>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/experience"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#17382F] hover:bg-[#1f4a3e] border border-[#C6A15B]/40 hover:border-[#C6A15B] text-xs font-sans font-semibold tracking-[0.18em] text-[#E1BB70] uppercase transition-all duration-300 group"
              >
                <span>EXPLORE THE SPACE</span>
                <ArrowRight className="w-4 h-4 text-[#E1BB70] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
