import React from "react";
import Image from "next/image";
import { MenuItem } from "@/data/menu";
import { Flame } from "lucide-react";

interface MenuCardProps {
  item: MenuItem;
}

export function MenuCard({ item }: MenuCardProps) {
  const isVeg = item.dietary === "veg";

  return (
    <article className="flex flex-col justify-between bg-[#111111] border border-[#17382F] hover:border-[#C6A15B]/40 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl group">
      {/* Optional Top Image */}
      {item.image && (
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0A0A0A]">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
        </div>
      )}

      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          {/* Header Row: Veg/Non-Veg Badge & Popularity Badge */}
          <div className="flex items-center justify-between gap-2 mb-2.5">
            {/* Explicit Veg / Non-Veg Indicator (Icon + Text, not color alone) */}
            <div
              className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-sans font-bold tracking-wider uppercase border ${
                isVeg
                  ? "bg-emerald-950/60 border-emerald-500/40 text-emerald-400"
                  : "bg-rose-950/60 border-rose-500/40 text-rose-300"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  isVeg ? "bg-emerald-400" : "bg-rose-400"
                }`}
                aria-hidden="true"
              />
              <span>{isVeg ? "VEG" : "NON-VEG"}</span>
            </div>

            {/* Popularity or Signature Badge */}
            {item.badge && (
              <span className="px-2 py-0.5 rounded text-[9px] font-sans font-bold tracking-widest text-[#0A0A0A] bg-gradient-to-r from-[#E1BB70] to-[#C6A15B] uppercase shadow-sm">
                {item.badge}
              </span>
            )}
          </div>

          {/* Dish Title & Price */}
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-serif text-lg sm:text-xl font-medium text-[#F4F0E8] group-hover:text-[#E1BB70] transition-colors leading-snug">
              {item.name}
            </h3>
            <span className="font-mono text-base font-bold text-[#E1BB70] shrink-0">
              ₹{item.price}
            </span>
          </div>

          {/* Description */}
          <p className="mt-2 text-xs sm:text-sm text-[#D8D1C4]/75 font-sans font-light leading-relaxed line-clamp-3">
            {item.description}
          </p>
        </div>

        {/* Card Footer: Spice level & Portion info if any */}
        <div className="mt-4 pt-3 border-t border-[#17382F]/60 flex items-center justify-between text-[11px] text-[#D8D1C4]/60 font-sans">
          {item.spicyLevel ? (
            <div className="flex items-center gap-1">
              <span className="text-[10px] text-[#D8D1C4]/50">Spice:</span>
              <div className="flex items-center text-[#E1BB70]">
                {Array.from({ length: item.spicyLevel }).map((_, i) => (
                  <Flame key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
            </div>
          ) : (
            <span className="text-[10px] text-[#D8D1C4]/40">Freshly Made to Order</span>
          )}

          <span className="text-[10px] text-[#C6A15B]/70 tracking-widest uppercase">
            THE 7A KITCHEN
          </span>
        </div>
      </div>
    </article>
  );
}
