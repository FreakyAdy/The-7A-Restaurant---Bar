"use client";

import React, { useState } from "react";
import { RESTAURANT_DATA } from "@/data/restaurant";
import { Calendar, Clock, Users, CheckCircle2, Phone, MessageSquare, Sparkles } from "lucide-react";

interface ReservationSectionProps {
  embedded?: boolean;
}

export function ReservationSection({ embedded = false }: ReservationSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "20:00",
    guests: "2",
    seatingPreference: "Rooftop Open-Air",
    specialRequest: "",
  });

  const [bookingRef, setBookingRef] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = "7A-" + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
  };

  const times = [
    "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM",
    "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM",
    "09:00 PM", "09:30 PM", "10:00 PM", "10:30 PM", "11:00 PM",
  ];

  return (
    <section
      id="reserve"
      className={`${
        embedded ? "py-10" : "py-20 lg:py-28"
      } bg-[#0A0A0A] text-[#F4F0E8] relative overflow-hidden border-t border-[#17382F]`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#17382F] border border-[#C6A15B]/30 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E1BB70]" />
            <span className="text-[10px] font-sans tracking-[0.25em] text-[#E1BB70] uppercase font-medium">
              TABLE RESERVATION
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F4F0E8] tracking-tight">
            Reserve Your Evening
          </h2>

          <div className="w-12 h-px bg-[#C6A15B]/50 my-4" />

          <p className="text-sm sm:text-base text-[#D8D1C4]/80 font-sans font-light">
            Secure your preferred table on the 11th-floor rooftop terrace or inside the intimate emerald lounge.
          </p>
        </div>

        {/* Booking Card Container */}
        <div className="bg-[#111111] border border-[#17382F] rounded-2xl p-6 sm:p-10 shadow-2xl relative">
          {bookingRef ? (
            <div className="py-10 text-center flex flex-col items-center max-w-lg mx-auto">
              <div className="w-16 h-16 rounded-full bg-[#17382F] flex items-center justify-center text-[#E1BB70] border border-[#C6A15B]/40 mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <span className="text-xs font-mono text-[#C6A15B] tracking-widest uppercase">
                RESERVATION REQUEST RECORDED
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F0E8] mt-2">
                Table Held for {formData.name}
              </h3>

              <div className="mt-4 p-4 rounded-xl bg-[#0A0A0A] border border-[#17382F] w-full text-left space-y-2 text-xs font-sans">
                <div className="flex justify-between border-b border-[#17382F] pb-2">
                  <span className="text-[#D8D1C4]/70">Reference Code:</span>
                  <span className="font-mono font-bold text-[#E1BB70]">{bookingRef}</span>
                </div>
                <div className="flex justify-between border-b border-[#17382F] pb-2">
                  <span className="text-[#D8D1C4]/70">Date &amp; Time:</span>
                  <span className="text-[#F4F0E8] font-medium">{formData.date || "Today"} &bull; {formData.time}</span>
                </div>
                <div className="flex justify-between border-b border-[#17382F] pb-2">
                  <span className="text-[#D8D1C4]/70">Party Size:</span>
                  <span className="text-[#F4F0E8] font-medium">{formData.guests} Guests</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#D8D1C4]/70">Seating Choice:</span>
                  <span className="text-[#C6A15B] font-medium">{formData.seatingPreference}</span>
                </div>
              </div>

              <p className="mt-4 text-xs text-[#D8D1C4]/80 leading-relaxed">
                Our host at The 7A will ring you at <strong className="text-[#F4F0E8]">{formData.phone}</strong> to confirm your arrival. For urgent changes, call us directly.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={`tel:${RESTAURANT_DATA.phones.primary}`}
                  className="px-5 py-2.5 rounded-lg bg-[#17382F] hover:bg-[#0E241F] text-[#F4F0E8] text-xs font-sans font-bold tracking-wider uppercase border border-[#C6A15B]/40 flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E1BB70]" />
                  <span>Call Restaurant</span>
                </a>

                <button
                  onClick={() => setBookingRef(null)}
                  className="px-5 py-2.5 rounded-lg text-xs font-sans text-[#D8D1C4] hover:text-[#E1BB70] tracking-wider uppercase underline cursor-pointer"
                >
                  Modify Reservation
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {/* Date */}
                <div>
                  <label className="block text-xs font-sans tracking-wider uppercase text-[#D8D1C4]/80 mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span>Date *</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-[#17382F] text-xs sm:text-sm text-[#F4F0E8] focus:border-[#C6A15B] focus:outline-none"
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="block text-xs font-sans tracking-wider uppercase text-[#D8D1C4]/80 mb-2 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span>Time Slot *</span>
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-[#17382F] text-xs sm:text-sm text-[#F4F0E8] focus:border-[#C6A15B] focus:outline-none"
                  >
                    {times.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-xs font-sans tracking-wider uppercase text-[#D8D1C4]/80 mb-2 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span>Number of Guests *</span>
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-[#17382F] text-xs sm:text-sm text-[#F4F0E8] focus:border-[#C6A15B] focus:outline-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20].map((num) => (
                      <option key={num} value={num.toString()}>
                        {num} {num === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Seating Preference */}
              <div>
                <label className="block text-xs font-sans tracking-wider uppercase text-[#D8D1C4]/80 mb-2">
                  Seating Zone Preference
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    "Rooftop Open-Air",
                    "Indoor Emerald Lounge",
                    "Bar High Table",
                    "Private Booth",
                  ].map((zone) => (
                    <button
                      type="button"
                      key={zone}
                      onClick={() => setFormData({ ...formData, seatingPreference: zone })}
                      className={`py-2.5 px-3 rounded-lg text-xs font-sans font-medium transition-all cursor-pointer text-center ${
                        formData.seatingPreference === zone
                          ? "bg-[#17382F] border-2 border-[#C6A15B] text-[#E1BB70]"
                          : "bg-[#0A0A0A] border border-[#17382F] text-[#D8D1C4]/70 hover:text-[#F4F0E8]"
                      }`}
                    >
                      {zone}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-sans tracking-wider uppercase text-[#D8D1C4]/80 mb-2">
                    Primary Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-[#17382F] text-xs sm:text-sm text-[#F4F0E8] focus:border-[#C6A15B] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans tracking-wider uppercase text-[#D8D1C4]/80 mb-2">
                    Phone Number (for confirmation) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 90490 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-[#17382F] text-xs sm:text-sm text-[#F4F0E8] focus:border-[#C6A15B] focus:outline-none font-mono"
                  />
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-sans tracking-wider uppercase text-[#D8D1C4]/80 mb-2">
                  Special Notes / Dietary Requirements (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Birthday anniversary, high chair needed, anniversary cake..."
                  value={formData.specialRequest}
                  onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#0A0A0A] border border-[#17382F] text-xs sm:text-sm text-[#F4F0E8] focus:border-[#C6A15B] focus:outline-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#D8D1C4]/70 font-sans text-center sm:text-left">
                  <span>Direct phone booking: </span>
                  <a
                    href={`tel:${RESTAURANT_DATA.phones.primary}`}
                    className="text-[#E1BB70] font-bold font-mono hover:underline"
                  >
                    {RESTAURANT_DATA.phones.primaryDisplay}
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-3.5 rounded-lg bg-gradient-to-r from-[#E1BB70] to-[#C6A15B] text-[#0A0A0A] font-sans font-bold text-xs tracking-[0.2em] uppercase hover:brightness-110 shadow-xl shadow-[#C6A15B]/20 transition-all cursor-pointer"
                >
                  CONFIRM RESERVATION REQUEST
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
