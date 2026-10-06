import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, UtensilsCrossed, ChevronDown, MapPin, Sparkles } from "lucide-react";
import { RESTAURANT_DATA } from "@/data/restaurant";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A] pt-20 pb-16">
      {/* Background Image with Dark Vignette & Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/rooftop_terrace.jpg"
          alt="The 7A Rooftop Restaurant & Bar evening ambience"
          fill
          priority
          className="object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite] opacity-55 transition-transform duration-1000"
          sizes="100vw"
        />
        {/* Cinematic emerald and charcoal grading overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0E241F]/60 to-[#0A0A0A]/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0A0A0A]/40 to-[#0A0A0A]/95" />
        <div className="absolute inset-0 grain-overlay pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Metadata Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17382F]/70 border border-[#C6A15B]/30 backdrop-blur-md mb-6 shadow-lg shadow-[#0E241F]/50 animate-fadeIn">
          <MapPin className="w-3.5 h-3.5 text-[#E1BB70]" />
          <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.25em] text-[#F4F0E8] uppercase font-medium">
            KHARADI &bull; PUNE &bull; 11TH FLOOR ROOFTOP
          </span>
        </div>

        {/* Brand Main Title */}
        <div className="mb-2">
          <span className="text-xs sm:text-sm font-sans tracking-[0.4em] text-[#C6A15B] uppercase block font-light">
            THE
          </span>
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tight text-[#F4F0E8] leading-[0.95] mt-1">
            <span className="gold-gradient-text drop-shadow-md">7A</span>
          </h1>
          <span className="text-xs sm:text-sm md:text-base font-sans tracking-[0.35em] text-[#D8D1C4]/90 uppercase block mt-2 font-medium">
            RESTAURANT &amp; BAR
          </span>
        </div>

        {/* Gold Architectural Divider Line */}
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent my-6" />

        {/* Hero Headline */}
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#F4F0E8] max-w-2xl leading-tight">
          Your Evening, <br className="hidden sm:inline" />
          <span className="italic text-[#E1BB70]">Above the Ordinary.</span>
        </h2>

        {/* Supporting Copy */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-[#D8D1C4]/85 max-w-xl font-sans font-light leading-relaxed">
          {RESTAURANT_DATA.heroSupporting}
        </p>

        {/* Primary CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="/reserve"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs sm:text-sm font-sans font-semibold tracking-[0.18em] text-[#0A0A0A] bg-gradient-to-r from-[#E1BB70] to-[#C6A15B] hover:brightness-110 shadow-xl shadow-[#C6A15B]/20 rounded-md transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4 text-[#0A0A0A]" />
            <span>RESERVE A TABLE</span>
          </Link>

          <Link
            href="/menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs sm:text-sm font-sans font-medium tracking-[0.18em] text-[#F4F0E8] bg-[#17382F]/60 hover:bg-[#17382F] border border-[#C6A15B]/40 hover:border-[#C6A15B] backdrop-blur-md rounded-md transition-all duration-300"
          >
            <UtensilsCrossed className="w-4 h-4 text-[#C6A15B]" />
            <span>EXPLORE MENU</span>
          </Link>
        </div>

        {/* Key Quick Indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-[#D8D1C4]/70 font-sans tracking-wider">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
            <span>Open Today: {RESTAURANT_DATA.hours.display}</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
            <span>Gera&apos;s Imperium Alpha</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
            <span>Rating {RESTAURANT_DATA.ratings.diningRating} &bull; {RESTAURANT_DATA.ratings.ratingCount} Reviews</span>
          </div>
        </div>
      </div>

      {/* Down Arrow Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center text-[#C6A15B]/60 animate-bounce">
        <span className="text-[9px] font-sans tracking-[0.2em] uppercase mb-1">DISCOVER</span>
        <ChevronDown className="w-4 h-4" />
      </div>
    </section>
  );
}
