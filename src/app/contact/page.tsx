import React from "react";
import { LocationSection } from "@/components/LocationSection";
import { RESTAURANT_DATA } from "@/data/restaurant";
import { Phone, Mail, Clock, MapPin, Navigation, Car, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Contact & Location | The 7A Restaurant & Bar Kharadi Pune",
  description:
    "Locate The 7A on the 11th Floor Rooftop of Gera's Imperium Alpha in Kharadi, Pune. Phone numbers, operating hours, directions, and valet parking information.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-[#F4F0E8] pt-28 pb-20">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[10px] font-sans tracking-[0.25em] text-[#C6A15B] uppercase font-bold">
            GET IN TOUCH &bull; VISIT
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#F4F0E8] tracking-tight mt-2">
            Contact &amp; Location
          </h1>
          <div className="w-16 h-px bg-[#C6A15B]/50 mx-auto my-4" />
          <p className="text-base sm:text-lg text-[#D8D1C4]/85 font-sans font-light leading-relaxed">
            Located on the 11th floor rooftop of Gera&apos;s Imperium Alpha, on Pune Nagar Road in Kharadi.
          </p>
        </div>
      </div>

      {/* Quick Contact Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl bg-[#111111] border border-[#17382F] flex flex-col justify-between">
            <div>
              <Phone className="w-6 h-6 text-[#E1BB70] mb-3" />
              <h3 className="font-serif text-lg text-[#F4F0E8]">Direct Phone</h3>
              <p className="text-xs text-[#D8D1C4]/70 mt-1">
                For table reservations &amp; quick queries
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#17382F] font-mono text-sm">
              <a
                href={`tel:${RESTAURANT_DATA.phones.primary}`}
                className="text-[#E1BB70] font-bold block hover:underline"
              >
                {RESTAURANT_DATA.phones.primaryDisplay}
              </a>
              <a
                href={`tel:${RESTAURANT_DATA.phones.secondary}`}
                className="text-xs text-[#D8D1C4]/70 block hover:underline"
              >
                {RESTAURANT_DATA.phones.secondaryDisplay}
              </a>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-[#111111] border border-[#17382F] flex flex-col justify-between">
            <div>
              <Clock className="w-6 h-6 text-[#E1BB70] mb-3" />
              <h3 className="font-serif text-lg text-[#F4F0E8]">Opening Hours</h3>
              <p className="text-xs text-[#D8D1C4]/70 mt-1">
                Lunch, sundowners &amp; late night
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#17382F]">
              <span className="font-mono text-sm text-[#F4F0E8] font-bold block">
                {RESTAURANT_DATA.hours.display}
              </span>
              <span className="text-[11px] text-[#C6A15B] block">
                Monday – Sunday (7 Days)
              </span>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-[#111111] border border-[#17382F] flex flex-col justify-between">
            <div>
              <MapPin className="w-6 h-6 text-[#E1BB70] mb-3" />
              <h3 className="font-serif text-lg text-[#F4F0E8]">11th Floor Rooftop</h3>
              <p className="text-xs text-[#D8D1C4]/70 mt-1">
                Gera&apos;s Imperium Alpha
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#17382F]">
              <span className="text-xs text-[#D8D1C4]/90 block">
                Pune Nagar Road, Kharadi, Pune 411014
              </span>
              <a
                href={RESTAURANT_DATA.map.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-[#E1BB70] underline mt-1 inline-block"
              >
                Get Directions &rarr;
              </a>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-[#111111] border border-[#17382F] flex flex-col justify-between">
            <div>
              <Car className="w-6 h-6 text-[#E1BB70] mb-3" />
              <h3 className="font-serif text-lg text-[#F4F0E8]">Valet &amp; Access</h3>
              <p className="text-xs text-[#D8D1C4]/70 mt-1">
                Convenient arrival &amp; parking
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#17382F]">
              <span className="text-xs text-[#D8D1C4]/90 block">
                Complimentary Valet Parking
              </span>
              <span className="text-[11px] text-[#C6A15B] block">
                High-Speed Elevators to 11th Floor
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Location Section with Map */}
      <LocationSection />
    </div>
  );
}
