import React from "react";
import { CloudMoon, Wine, Music, Disc3, Sparkles } from "lucide-react";

export function ExperienceStrip() {
  const experiences = [
    {
      title: "11TH FLOOR ROOFTOP",
      subtitle: "Open-air city terrace",
      icon: CloudMoon,
    },
    {
      title: "FULL CRAFT BAR",
      subtitle: "Mixology & single malts",
      icon: Wine,
    },
    {
      title: "LIVE MUSIC",
      subtitle: "Acoustic & band sets",
      icon: Music,
    },
    {
      title: "DJ NIGHTS",
      subtitle: "Weekend high-altitude beats",
      icon: Disc3,
    },
    {
      title: "PRIVATE DINING",
      subtitle: "Group celebrations",
      icon: Sparkles,
    },
  ];

  return (
    <section className="bg-[#111111] border-y border-[#C6A15B]/20 py-4 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container: Grid on desktop, horizontal scroll on mobile */}
        <div className="flex overflow-x-auto no-scrollbar lg:grid lg:grid-cols-5 gap-3 sm:gap-4 snap-x snap-mandatory">
          {experiences.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3.5 min-w-[220px] lg:min-w-0 px-4 py-2.5 rounded-lg bg-[#0E241F]/40 border border-[#17382F] hover:border-[#C6A15B]/40 transition-colors snap-center shrink-0 lg:shrink"
              >
                <div className="w-9 h-9 rounded-full bg-[#17382F] flex items-center justify-center shrink-0 border border-[#C6A15B]/30">
                  <Icon className="w-4 h-4 text-[#E1BB70]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-sans font-bold tracking-[0.14em] text-[#F4F0E8] uppercase">
                    {item.title}
                  </span>
                  <span className="text-[10px] font-sans text-[#D8D1C4]/70">
                    {item.subtitle}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
