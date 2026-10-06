import React from "react";
import {
  CloudMoon,
  Wine,
  Music,
  Disc3,
  Sparkles,
  Tv,
  Car,
  Wifi,
  Armchair,
  Layers,
  Cigarette,
  HeartHandshake,
} from "lucide-react";

export function AmenitiesSection() {
  const amenities = [
    { title: "11th Floor Rooftop", icon: CloudMoon, desc: "Open-air sky terrace with glass canopy" },
    { title: "Full Craft Bar", icon: Wine, desc: "Single malts, cocktails & draught beer" },
    { title: "Live Music Sessions", icon: Music, desc: "Weekly acoustic singers & bands" },
    { title: "Weekend DJ Sets", icon: Disc3, desc: "Late night lounge beats" },
    { title: "Private Dining", icon: Sparkles, desc: "Group dinners & birthday bookings" },
    { title: "Sports Screening", icon: Tv, desc: "HD big screen match fixtures" },
    { title: "Complimentary Valet", icon: Car, desc: "Direct arrival at Imperium Alpha" },
    { title: "High-Speed Wi-Fi", icon: Wifi, desc: "Full venue connectivity" },
    { title: "Indoor Luxury Lounge", icon: Armchair, desc: "Plush emerald booths & marble decor" },
    { title: "Outdoor Seating", icon: Layers, desc: "Breezy terrace cabanas & tables" },
    { title: "Dedicated Smoking Area", icon: Cigarette, desc: "Ventilated outdoor space" },
    { title: "Full Accessibility", icon: HeartHandshake, desc: "Elevator access & wheelchair friendly" },
  ];

  return (
    <section className="bg-[#0A0A0A] text-[#F4F0E8] py-20 lg:py-28 relative overflow-hidden border-t border-[#17382F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <span className="text-[10px] font-sans tracking-[0.25em] text-[#C6A15B] uppercase font-bold">
            HOSPITALITY STANDARDS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F4F0E8] tracking-tight mt-2">
            THE 7A EXPERIENCE
          </h2>
          <div className="w-12 h-px bg-[#C6A15B]/50 my-4" />
          <p className="text-sm sm:text-base text-[#D8D1C4]/80 font-sans font-light">
            Engineered for seamless comfort, vibrant evenings, and unhurried hospitality.
          </p>
        </div>

        {/* Minimal Line Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {amenities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#111111] border border-[#17382F] hover:border-[#C6A15B]/40 transition-colors flex flex-col items-start"
              >
                <div className="w-10 h-10 rounded-lg bg-[#17382F]/70 border border-[#C6A15B]/20 flex items-center justify-center mb-3 text-[#E1BB70]">
                  <Icon className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-base sm:text-lg font-medium text-[#F4F0E8] leading-tight">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-[#D8D1C4]/70 font-sans">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
