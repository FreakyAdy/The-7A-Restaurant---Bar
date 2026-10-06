"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { GALLERY_ITEMS, GALLERY_CATEGORIES, GalleryItem } from "@/data/gallery";
import { Sparkles, X, MapPin } from "lucide-react";

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="w-full">
      {/* Category Pills */}
      <div className="flex overflow-x-auto no-scrollbar gap-2 pb-6 pt-2 justify-start sm:justify-center">
        {GALLERY_CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-sans tracking-[0.15em] uppercase transition-all duration-200 cursor-pointer shrink-0 ${
                isActive
                  ? "bg-[#C6A15B] text-[#0A0A0A] font-bold shadow-md shadow-[#C6A15B]/20"
                  : "bg-[#111111] text-[#D8D1C4]/80 hover:text-[#F4F0E8] border border-[#17382F]"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Asymmetric Editorial Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {filteredItems.map((item, idx) => {
          // Asymmetric spans for editorial feel
          const isLarge = idx % 5 === 0;

          return (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className={`group relative overflow-hidden rounded-xl bg-[#111111] border border-[#17382F] hover:border-[#C6A15B]/50 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl ${
                isLarge ? "sm:col-span-2 lg:col-span-2 aspect-[16/10]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Bottom Card Overlay Content */}
              <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end translate-y-1 group-hover:translate-y-0 transition-transform">
                <div className="flex items-center gap-1.5 text-[10px] font-sans font-bold tracking-widest text-[#E1BB70] uppercase mb-1">
                  <MapPin className="w-3 h-3" />
                  <span>{item.locationTag}</span>
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-medium text-[#F4F0E8] leading-tight group-hover:text-[#E1BB70] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#D8D1C4]/70 font-sans mt-1 line-clamp-2">
                  {item.caption}
                </p>
              </div>

              {/* Hover Badge */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity px-2.5 py-1 rounded bg-[#0A0A0A]/90 border border-[#C6A15B]/40 text-[9px] font-mono text-[#E1BB70] uppercase">
                VIEW DETAIL
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-[#111111] rounded-2xl border border-[#C6A15B]/40 overflow-hidden shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#0A0A0A]/80 border border-[#C6A15B]/40 text-[#E1BB70] flex items-center justify-center hover:bg-[#C6A15B] hover:text-[#0A0A0A] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/10] w-full bg-black">
              <Image
                src={selectedItem.imageUrl}
                alt={selectedItem.title}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>

            <div className="p-6 bg-[#0E241F]/90 border-t border-[#17382F] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-sans font-bold tracking-widest text-[#E1BB70] uppercase">
                  {selectedItem.locationTag}
                </span>
                <h4 className="font-serif text-2xl text-[#F4F0E8] mt-0.5">
                  {selectedItem.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#D8D1C4]/80 mt-1 max-w-xl font-sans">
                  {selectedItem.caption}
                </p>
              </div>

              <div className="shrink-0 text-right">
                <span className="text-[10px] font-mono text-[#C6A15B] block uppercase tracking-widest">
                  THE 7A KHARADI
                </span>
                <span className="text-xs text-[#D8D1C4]/70">11th Floor Rooftop</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
