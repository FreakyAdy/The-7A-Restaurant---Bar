"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { MENU_ITEMS, MENU_CATEGORIES } from "@/data/menu";
import { MenuCard } from "@/components/MenuCard";
import { MenuCategoryNav } from "@/components/MenuCategoryNav";
import { Search, ArrowRight, Utensils } from "lucide-react";

export function MenuSection() {
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
    <section className="bg-[#0A0A0A] text-[#F4F0E8] py-20 lg:py-28 relative overflow-hidden border-t border-[#17382F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#17382F]/70 border border-[#C6A15B]/30 mb-3">
            <Utensils className="w-3.5 h-3.5 text-[#E1BB70]" />
            <span className="text-[10px] font-sans tracking-[0.25em] text-[#E1BB70] uppercase font-medium">
              CULINARY CRAFT
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F4F0E8] tracking-tight">
            THE MENU
          </h2>

          <div className="w-12 h-px bg-[#C6A15B]/50 my-4" />

          <p className="text-sm sm:text-base text-[#D8D1C4]/80 font-sans font-light">
            Indian favourites, Asian plates, Continental comfort and bar-friendly bites.
          </p>
        </div>

        {/* Filter Controls Row: Search + Dietary Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          {/* Live Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#C6A15B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search dishes or ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#111111] border border-[#17382F] focus:border-[#C6A15B] rounded-lg text-xs sm:text-sm text-[#F4F0E8] placeholder-[#D8D1C4]/40 focus:outline-none transition-colors"
            />
          </div>

          {/* Dietary Filter Buttons */}
          <div className="inline-flex p-1 rounded-lg bg-[#111111] border border-[#17382F] self-start md:self-auto">
            <button
              onClick={() => setDietaryFilter("all")}
              className={`px-3 py-1.5 rounded-md text-xs font-sans tracking-wider uppercase transition-colors ${
                dietaryFilter === "all"
                  ? "bg-[#17382F] text-[#E1BB70] font-bold"
                  : "text-[#D8D1C4]/70 hover:text-[#F4F0E8]"
              }`}
            >
              All Plates
            </button>
            <button
              onClick={() => setDietaryFilter("veg")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-sans tracking-wider uppercase transition-colors ${
                dietaryFilter === "veg"
                  ? "bg-emerald-950 text-emerald-400 font-bold border border-emerald-500/30"
                  : "text-[#D8D1C4]/70 hover:text-emerald-400"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Pure Veg</span>
            </button>
            <button
              onClick={() => setDietaryFilter("non-veg")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-sans tracking-wider uppercase transition-colors ${
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

        {/* Category Navigation Pills */}
        <div className="mb-8">
          <MenuCategoryNav
            categories={MENU_CATEGORIES}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </div>

        {/* Dishes Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.slice(0, 9).map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 bg-[#111111] rounded-xl border border-[#17382F]">
            <p className="text-base text-[#D8D1C4]">
              No dishes found matching your current filters.
            </p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setDietaryFilter("all");
                setSearchQuery("");
              }}
              className="mt-3 text-xs font-sans text-[#E1BB70] underline tracking-widest uppercase cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* View Full Menu CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-sans font-semibold tracking-[0.2em] text-[#0A0A0A] bg-gradient-to-r from-[#E1BB70] to-[#C6A15B] hover:brightness-110 shadow-xl shadow-[#C6A15B]/20 rounded-md transition-all group"
          >
            <span>VIEW COMPLETE MENU &amp; PRICES</span>
            <ArrowRight className="w-4 h-4 text-[#0A0A0A] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
