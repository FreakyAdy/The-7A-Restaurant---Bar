import React from "react";
import { RESTAURANT_DATA } from "@/data/restaurant";
import { MapPin, Phone, Navigation, Clock, Building, Car } from "lucide-react";

export function LocationSection() {
  return (
    <section className="bg-[#F4F0E8] text-[#111111] py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Details Column (Cols 1-5) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-[10px] font-sans tracking-[0.25em] text-[#17382F] uppercase font-bold">
              VISIT US
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0A0A0A] tracking-tight mt-2">
              FIND THE 7A
            </h2>

            <div className="w-16 h-[2px] bg-[#C6A15B] my-5" />

            {/* Prominent Floor Badge */}
            <div className="p-4 rounded-xl bg-[#17382F] text-[#F4F0E8] border border-[#C6A15B]/40 mb-6 w-full shadow-lg">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#E1BB70] uppercase tracking-wider">
                <Building className="w-4 h-4" />
                <span>11TH FLOOR &bull; ROOFTOP DESTINATION</span>
              </div>
              <p className="mt-1 text-sm font-serif text-[#F4F0E8]">
                Take the high-speed passenger elevators at the main lobby of Gera&apos;s Imperium Alpha straight up to Level 11.
              </p>
            </div>

            {/* Address Details */}
            <div className="space-y-4 w-full text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#17382F] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#111111]">
                    {RESTAURANT_DATA.address.building}
                  </h4>
                  <p className="text-[#444444] leading-relaxed">
                    {RESTAURANT_DATA.address.floor}, {RESTAURANT_DATA.address.survey}, {RESTAURANT_DATA.address.road}, {RESTAURANT_DATA.address.locality}, {RESTAURANT_DATA.address.city}, {RESTAURANT_DATA.address.state} — {RESTAURANT_DATA.address.pincode}
                  </p>
                  <p className="text-xs text-[#666666] mt-1 font-mono">
                    Landmark: Near EON Free Zone &amp; World Trade Center corridor
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#17382F] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#111111]">Phone Numbers</h4>
                  <div className="flex flex-col gap-0.5 font-mono text-sm">
                    <a
                      href={`tel:${RESTAURANT_DATA.phones.primary}`}
                      className="text-[#17382F] font-bold hover:underline"
                    >
                      {RESTAURANT_DATA.phones.primaryDisplay}
                    </a>
                    <a
                      href={`tel:${RESTAURANT_DATA.phones.secondary}`}
                      className="text-[#555555] hover:underline text-xs"
                    >
                      {RESTAURANT_DATA.phones.secondaryDisplay}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#17382F] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#111111]">Opening Hours</h4>
                  <p className="text-[#444444] font-mono font-medium">
                    {RESTAURANT_DATA.hours.display}
                  </p>
                  <p className="text-xs text-[#666666]">
                    {RESTAURANT_DATA.hours.days}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Car className="w-5 h-5 text-[#17382F] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#111111]">Parking</h4>
                  <p className="text-xs text-[#555555]">
                    Complimentary Valet Parking available at the building main porch.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 w-full">
              <a
                href={RESTAURANT_DATA.map.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#17382F] hover:bg-[#0E241F] text-[#F4F0E8] text-xs font-sans font-bold tracking-[0.15em] uppercase transition-colors shadow-md"
              >
                <Navigation className="w-4 h-4 text-[#E1BB70]" />
                <span>GET DIRECTIONS</span>
              </a>

              <a
                href={`tel:${RESTAURANT_DATA.phones.primary}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border-2 border-[#17382F] text-[#17382F] hover:bg-[#17382F] hover:text-[#F4F0E8] text-xs font-sans font-bold tracking-[0.15em] uppercase transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>CALL NOW</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Column (Cols 6-12) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden border-2 border-[#17382F]/20 shadow-xl bg-[#E8E2D6]">
              {/* Google Maps Embed iframe for Gera's Imperium Alpha Kharadi Pune */}
              <iframe
                title="The 7A Restaurant & Bar Location Map"
                src="https://maps.google.com/maps?q=Gera's%20Imperium%20Alpha%20Kharadi%20Pune&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[25%] contrast-[1.05]"
              />

              {/* Map floating card */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs p-3.5 rounded-lg bg-[#0A0A0A]/95 text-[#F4F0E8] border border-[#C6A15B]/30 backdrop-blur-md shadow-2xl">
                <p className="font-serif text-sm font-semibold text-[#E1BB70]">
                  The 7A Restaurant &amp; Bar
                </p>
                <p className="text-[11px] text-[#D8D1C4]/80 mt-0.5">
                  11th Floor Rooftop, Gera&apos;s Imperium Alpha, Kharadi
                </p>
                <a
                  href={RESTAURANT_DATA.map.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-[10px] font-sans font-bold text-[#E1BB70] tracking-wider uppercase underline"
                >
                  Open in Google Maps &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
