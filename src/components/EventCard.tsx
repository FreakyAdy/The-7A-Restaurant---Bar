import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NightlifeEvent } from "@/data/events";
import { Calendar, Clock, Music2, ArrowUpRight } from "lucide-react";

interface EventCardProps {
  event: NightlifeEvent;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <article className="flex flex-col bg-[#111111] border border-[#17382F] hover:border-[#C6A15B]/50 rounded-xl overflow-hidden group transition-all duration-300 hover:-translate-y-1 shadow-lg">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0A0A0A]">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />

        {/* Floating Tag */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#0A0A0A]/85 backdrop-blur-sm border border-[#C6A15B]/40 text-[10px] font-sans font-bold tracking-wider text-[#E1BB70] uppercase">
          {event.tag}
        </div>

        {event.badge && (
          <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-[#17382F]/90 text-[9px] font-sans font-medium tracking-widest text-[#D8D1C4] uppercase">
            {event.badge}
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          {/* Day & Time info */}
          <div className="flex items-center gap-3 text-xs text-[#C6A15B] font-sans font-medium mb-2">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {event.daySchedule}
            </span>
            <span className="w-1 h-1 rounded-full bg-[#C6A15B]" />
            <span className="flex items-center gap-1 font-mono">
              <Clock className="w-3.5 h-3.5" />
              {event.time}
            </span>
          </div>

          <h3 className="font-serif text-xl font-medium text-[#F4F0E8] group-hover:text-[#E1BB70] transition-colors leading-snug">
            {event.title}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-[#D8D1C4]/75 font-sans leading-relaxed line-clamp-3">
            {event.description}
          </p>
        </div>

        <div className="mt-5 pt-3 border-t border-[#17382F] flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[11px] text-[#D8D1C4]/70">
            <Music2 className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span className="truncate max-w-[170px]">{event.musicGenre}</span>
          </div>

          <Link
            href="/reserve"
            className="inline-flex items-center gap-1 text-xs font-sans font-bold tracking-wider text-[#E1BB70] hover:text-[#F4F0E8] uppercase transition-colors"
          >
            <span>BOOK TABLE</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
