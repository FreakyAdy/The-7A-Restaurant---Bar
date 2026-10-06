"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { MENU_ITEMS, MENU_CATEGORIES } from "@/data/menu";
import { RESTAURANT_DATA } from "@/data/restaurant";
import { MenuCard } from "@/components/MenuCard";
import { MenuCategoryNav } from "@/components/MenuCategoryNav";
import { Search, Calendar, Phone, ExternalLink, UtensilsCrossed, AlertCircle } from "lucide-react";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [dietaryFilter, setDietaryFilter] = useState<"all" | "veg" | "non-veg">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (activeCategory === "signatures") {
        if (!item.badge) return false;
      } else if (activeCategory !== "all" && item.category !== activeCategory) {
        return false;
      }

      // Dietary filter
      if (dietaryFilter === "veg" && item.dietary !== "veg") return false;
      if (dietaryFilter === "non-veg" && item.dietary !== "non-veg") return false;

      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        return (
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
        );
      }

      return true;
    });
  }, [activeCategory, dietaryFilter, searchQuery]);

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-[#F4F0E8] pt-28 pb-20">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[10px] font-sans tracking-[0.25em] text-[#C6A15B] uppercase font-bold">
            CULINARY &bull; BAR SELECTION
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#F4F0E8] mt-2">
            The 7A Menu
          </h1>
          <div className="w-16 h-px bg-[#C6A15B]/50 mx-auto my-4" />
          <p className="text-sm sm:text-base text-[#D8D1C4]/80 font-sans font-light leading-relaxed">
            North Indian handi &amp; tandoor favourites, Asian wok plates, Continental pizzas, craft cocktails, and bar bites. Freshly prepared to order on the 11th floor.
          </p>

          {/* Pricing Disclaimer & Order buttons */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-xs">
            <span className="px-3.5 py-1.5 rounded-full bg-[#17382F]/70 border border-[#C6A15B]/30 text-[#E1BB70] font-mono">
              Avg. Cost: {RESTAURANT_DATA.pricing.averageForTwo}
            </span>
            <a
              href={RESTAURANT_DATA.ordering.swiggyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#111111] hover:bg-[#1f4a3e] border border-[#C6A15B]/40 text-[#F4F0E8] transition-colors"
            >
              <span>View Swiggy Dineout</span>
              <ExternalLink className="w-3 h-3 text-[#C6A15B]" />
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Filtering Bar */}
      <div className="sticky top-16 z-30 bg-[#0E241F]/95 backdrop-blur-md border-y border-[#C6A15B]/20 py-3 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#C6A15B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search dishes or ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#0A0A0A] border border-[#17382F] focus:border-[#C6A15B] rounded-lg text-xs text-[#F4F0E8] placeholder-[#D8D1C4]/40 focus:outline-none"
            />
          </div>

          {/* Dietary Filters */}
          <div className="inline-flex p-1 rounded-lg bg-[#0A0A0A] border border-[#17382F] self-start md:self-auto">
            <button
              onClick={() => setDietaryFilter("all")}
              className={`px-3 py-1 rounded-md text-xs font-sans tracking-wider uppercase transition-colors ${
                dietaryFilter === "all"
                  ? "bg-[#17382F] text-[#E1BB70] font-bold"
                  : "text-[#D8D1C4]/70 hover:text-[#F4F0E8]"
              }`}
            >
              All Items ({MENU_ITEMS.length})
            </button>
            <button
              onClick={() => setDietaryFilter("veg")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-sans tracking-wider uppercase transition-colors ${
                dietaryFilter === "veg"
                  ? "bg-emerald-950 text-emerald-400 font-bold border border-emerald-500/30"
                  : "text-[#D8D1C4]/70 hover:text-emerald-400"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Veg Only</span>
            </button>
            <button
              onClick={() => setDietaryFilter("non-veg")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-sans tracking-wider uppercase transition-colors ${
                dietaryFilter === "non-veg"
                  ? "bg-rose-950 text-rose-300 font-bold border border-rose-500/30"
                  : "text-[#D8D1C4]/70 hover:text-rose-300"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-rose-400" />
              <span>Non-Veg</span>
            </button>
          </div>
        </div>

        {/* Categories scroll row */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
          <MenuCategoryNav
            categories={MENU_CATEGORIES}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </div>
      </div>

      {/* Menu Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 px-4 bg-[#111111] rounded-2xl border border-[#17382F] max-w-lg mx-auto">
            <AlertCircle className="w-10 h-10 text-[#C6A15B] mx-auto mb-3" />
            <h3 className="font-serif text-xl text-[#F4F0E8]">No dishes found</h3>
            <p className="text-xs text-[#D8D1C4]/70 mt-1">
              Try adjusting your search query or dietary filter.
            </p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setDietaryFilter("all");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 rounded bg-[#17382F] text-xs font-sans text-[#E1BB70] tracking-wider uppercase font-semibold cursor-pointer"
            >
              Show All Dishes
            </button>
          </div>
        )}

        {/* Bottom Booking Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#17382F] via-[#0E241F] to-[#111111] border border-[#C6A15B]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#E1BB70] uppercase">
              11TH FLOOR DINING &bull; KHARADI
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F0E8] mt-1">
              Join Us for Dinner Tonight
            </h3>
            <p className="text-xs sm:text-sm text-[#D8D1C4]/80 mt-1">
              Open from 12:00 PM through 1:30 AM. Walk-ins welcome, reservations recommended for peak rooftop hours.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${RESTAURANT_DATA.phones.primary}`}
              className="px-5 py-3 rounded-md border border-[#C6A15B]/40 hover:bg-[#17382F] text-xs font-sans font-bold tracking-wider text-[#F4F0E8] uppercase flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>Call Us</span>
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
