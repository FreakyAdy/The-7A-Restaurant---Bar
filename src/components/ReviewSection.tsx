import React from "react";
import { REVIEW_THEMES } from "@/data/reviews";
import { RESTAURANT_DATA } from "@/data/restaurant";
import { Star, MessageSquareQuote, CheckCircle } from "lucide-react";

export function ReviewSection() {
  const { diningRating, maxRating, ratingCount, platform } = RESTAURANT_DATA.ratings;

  return (
    <section className="bg-[#111111] text-[#F4F0E8] py-20 lg:py-28 relative overflow-hidden border-t border-[#17382F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with centralized rating proof */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#17382F] border border-[#C6A15B]/30 mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5 text-[#E1BB70]" />
            <span className="text-[10px] font-sans tracking-[0.25em] text-[#E1BB70] uppercase font-medium">
              VERIFIED GUEST SENTIMENT
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F4F0E8] tracking-tight">
            WHAT THE EVENING FEELS LIKE
          </h2>

          <div className="w-12 h-px bg-[#C6A15B]/50 my-4" />

          {/* Dynamic Centralized Rating Display */}
          <div className="flex flex-wrap items-center justify-center gap-3 px-5 py-2.5 rounded-full bg-[#0A0A0A] border border-[#C6A15B]/30 mt-2">
            <div className="flex items-center gap-1 text-[#E1BB70]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#E1BB70]" />
              ))}
            </div>
            <span className="font-serif text-lg font-bold text-[#F4F0E8]">
              {diningRating.toFixed(1)} / {maxRating.toFixed(1)}
            </span>
            <span className="text-xs text-[#D8D1C4]/70 font-sans">
              Across {ratingCount} Public Dining Reviews ({platform})
            </span>
          </div>
        </div>

        {/* Verified Themes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEW_THEMES.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-xl bg-[#0A0A0A] border border-[#17382F] hover:border-[#C6A15B]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-sans font-bold tracking-widest text-[#E1BB70] uppercase bg-[#17382F]/70 px-2 py-0.5 rounded">
                    {item.aspect}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#C6A15B]">
                    {item.sentimentScore}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-medium text-[#F4F0E8] leading-snug">
                  &ldquo;{item.theme}&rdquo;
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[#D8D1C4]/80 font-sans leading-relaxed">
                  {item.excerpt}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#17382F]/60 flex items-center justify-between text-xs text-[#D8D1C4]/60">
                <span className="font-sans italic">{item.visitType}</span>
                <span className="flex items-center gap-1 text-[11px] text-[#C6A15B]/90">
                  <CheckCircle className="w-3 h-3 text-[#C6A15B]" />
                  Verified Visit
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
