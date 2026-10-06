"use client";

import React from "react";
import { MenuCategory } from "@/data/menu";

interface MenuCategoryNavProps {
  categories: MenuCategory[];
  activeCategory: string;
  onSelectCategory: (id: string) => void;
}

export function MenuCategoryNav({
  categories,
  activeCategory,
  onSelectCategory,
}: MenuCategoryNavProps) {
  return (
    <div className="w-full overflow-x-auto no-scrollbar py-2">
      <div className="flex items-center gap-2 sm:gap-2.5 min-w-max px-1">
        {categories.map((category) => {
          const isActive = activeCategory === category.id;
          return (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`px-4 py-2 rounded-full text-xs font-sans tracking-[0.14em] uppercase transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-[#C6A15B] text-[#0A0A0A] font-bold shadow-md shadow-[#C6A15B]/20 scale-102"
                  : "bg-[#111111] text-[#D8D1C4]/80 hover:text-[#F4F0E8] border border-[#17382F] hover:border-[#C6A15B]/40"
              }`}
            >
              {category.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
