import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GlassWater, ArrowRight, Sparkles, Flame, Check } from "lucide-react";

export function BarSection() {
  const barHighlights = [
    {
      name: "7A Emerald Mist",
      category: "Signature Gin Botanical",
      price: "₹575",
      notes: "Botanical gin, cucumber extract, elderflower liqueur, fresh basil, lime & sparkling tonic.",
    },
    {
      name: "Kharadi Sunset Spritz",
      category: "Aperitivo Creation",
      price: "₹595",
      notes: "Aperol, blood orange reduction, prosecco, club soda, and flamed citrus zest.",
    },
    {
      name: "Smoked Oak Old Fashioned",
      category: "Wood-Smoked Classic",
      price: "₹645",
      notes: "Bourbon whiskey infused with aromatic bitters and orange oleo, hickory smoke presentation.",
    },
    {
      name: "11th Floor Passionfruit Martini",
      category: "House Favourite",
      price: "₹545",
      notes: "Ketel One vodka, tropical passion fruit pulp, vanilla bean syrup, sparkling wine float.",
    },
  ];

  return (
    <section className="bg-[#0A0A0A] text-[#F4F0E8] py-20 lg:py-28 relative overflow-hidden border-t border-[#17382F]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#17382F]/40 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#C6A15B]/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Narrative & Curated Menu (Cols 1-6) */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#17382F] border border-[#C6A15B]/30 mb-4">
              <GlassWater className="w-3.5 h-3.5 text-[#E1BB70]" />
              <span className="text-[10px] font-sans tracking-[0.25em] text-[#E1BB70] uppercase font-medium">
                THE 7A MIXOLOGY
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F4F0E8] leading-[1.1] tracking-tight">
              Stay for <br />
              <span className="italic text-[#E1BB70]">One More.</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#D8D1C4]/85 leading-relaxed font-sans font-light">
              From botanical gin spritzes served under the evening sky to single malts, chilled draft beer towers, and crafted alcohol-free mocktails, our bar program is engineered for lingering rooftop conversations.
            </p>

            {/* Cocktail Cards Grid */}
            <div className="mt-8 space-y-3.5 w-full">
              {barHighlights.map((cocktail, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-[#111111] border border-[#17382F] hover:border-[#C6A15B]/50 transition-colors flex items-start justify-between gap-4 group"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif text-base sm:text-lg font-medium text-[#F4F0E8] group-hover:text-[#E1BB70] transition-colors">
                        {cocktail.name}
                      </h3>
                      <span className="text-[9px] font-sans tracking-widest text-[#C6A15B] uppercase bg-[#17382F]/70 px-2 py-0.5 rounded">
                        {cocktail.category}
                      </span>
                    </div>
                    <p className="text-xs text-[#D8D1C4]/70 font-sans mt-1">
                      {cocktail.notes}
                    </p>
                  </div>
                  <span className="font-mono text-sm sm:text-base font-bold text-[#E1BB70] shrink-0">
                    {cocktail.price}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#17382F] hover:bg-[#1f4a3e] border border-[#C6A15B]/40 hover:border-[#C6A15B] text-xs font-sans font-semibold tracking-[0.18em] text-[#E1BB70] uppercase transition-all duration-300 group"
              >
                <span>EXPLORE ALL SPIRITS &amp; DRINKS</span>
                <ArrowRight className="w-4 h-4 text-[#E1BB70] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Visual Bar Glass Photography (Cols 7-12) */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] sm:aspect-[1/1] rounded-2xl overflow-hidden border border-[#C6A15B]/30 shadow-2xl shadow-[#0A0A0A]">
              <Image
                src="/images/cocktail_bar.jpg"
                alt="Craft cocktails and bar at The 7A Kharadi"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />

              {/* Floating feature pill */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0E241F]/90 backdrop-blur-md border border-[#C6A15B]/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#17382F] flex items-center justify-center text-[#E1BB70] border border-[#C6A15B]/40">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-sans font-bold text-[#F4F0E8] uppercase tracking-wider">
                      FULL BAR PERMIT &amp; MIXOLOGY
                    </h4>
                    <span className="text-[11px] text-[#D8D1C4]/80">
                      Single Malts &bull; Draught Beer &bull; Craft Spirits
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-[#E1BB70] uppercase tracking-widest hidden sm:inline">
                  11TH FLOOR
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
