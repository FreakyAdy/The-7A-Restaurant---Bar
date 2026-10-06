"use client";

import React, { useState } from "react";
import { Sparkles, CheckCircle2, Send, Users, PartyPopper, Briefcase } from "lucide-react";
import { RESTAURANT_DATA } from "@/data/restaurant";

export function PrivateDiningSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    guests: "10-20",
    occasion: "Birthday / Anniversary",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-[#D8D1C4] text-[#111111] py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Narrative (Cols 1-5) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#17382F] text-[#F4F0E8] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#E1BB70]" />
              <span className="text-[10px] font-sans tracking-[0.25em] text-[#E1BB70] uppercase font-semibold">
                GROUP CELEBRATIONS
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0A0A0A] leading-[1.1] tracking-tight">
              For Nights Worth <br />
              <span className="italic text-[#17382F]">Gathering For.</span>
            </h2>

            <div className="w-16 h-[2px] bg-[#C6A15B] my-5" />

            <p className="text-sm sm:text-base text-[#333333] leading-relaxed font-sans font-normal">
              Whether you are planning a corporate milestone dinner, an intimate rooftop birthday celebration, or a reunion with family and colleagues, The 7A provides dedicated seating zones, custom beverage packages, and tailored menus.
            </p>

            <div className="mt-8 space-y-4 w-full">
              <div className="flex items-center gap-3 text-sm text-[#111111] font-medium">
                <Users className="w-4 h-4 text-[#17382F]" />
                <span>Reserved lounge booths &amp; outdoor rooftop cluster seating</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#111111] font-medium">
                <PartyPopper className="w-4 h-4 text-[#17382F]" />
                <span>Birthday and anniversary decor setup assistance</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#111111] font-medium">
                <Briefcase className="w-4 h-4 text-[#17382F]" />
                <span>Corporate team dinners with set starter and cocktail menus</span>
              </div>
            </div>

            <div className="mt-6 text-xs text-[#555555]">
              Direct assistance:{" "}
              <a
                href={`tel:${RESTAURANT_DATA.phones.primary}`}
                className="font-bold text-[#17382F] hover:underline"
              >
                {RESTAURANT_DATA.phones.primaryDisplay}
              </a>
            </div>
          </div>

          {/* Right: Form (Cols 6-12) */}
          <div className="lg:col-span-7">
            <div className="bg-[#111111] text-[#F4F0E8] p-6 sm:p-8 rounded-2xl border border-[#17382F] shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <CheckCircle2 className="w-12 h-12 text-[#C6A15B] mb-4" />
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F0E8]">
                    Enquiry Received
                  </h3>
                  <p className="mt-2 text-sm text-[#D8D1C4]/80 max-w-md">
                    Thank you, {formData.name}. Our events team at The 7A will contact you at {formData.phone} shortly to customize your reservation.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-xs font-sans tracking-widest text-[#E1BB70] uppercase underline cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-[#17382F] pb-3 mb-4">
                    <h3 className="text-lg font-serif text-[#F4F0E8]">
                      Enquire for Events &amp; Large Tables
                    </h3>
                    <p className="text-xs text-[#D8D1C4]/70 mt-0.5">
                      11th Floor Rooftop &bull; Gera&apos;s Imperium Alpha, Kharadi
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-sans tracking-wider uppercase text-[#D8D1C4]/80 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0A0A0A] border border-[#17382F] text-xs text-[#F4F0E8] focus:border-[#C6A15B] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-sans tracking-wider uppercase text-[#D8D1C4]/80 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0A0A0A] border border-[#17382F] text-xs text-[#F4F0E8] focus:border-[#C6A15B] focus:outline-none font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[11px] font-sans tracking-wider uppercase text-[#D8D1C4]/80 mb-1">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0A0A0A] border border-[#17382F] text-xs text-[#F4F0E8] focus:border-[#C6A15B] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-sans tracking-wider uppercase text-[#D8D1C4]/80 mb-1">
                        Expected Guests
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0A0A0A] border border-[#17382F] text-xs text-[#F4F0E8] focus:border-[#C6A15B] focus:outline-none"
                      >
                        <option value="6-10">6 – 10 Guests</option>
                        <option value="10-20">10 – 20 Guests</option>
                        <option value="20-40">20 – 40 Guests</option>
                        <option value="40+">40+ Guests (Full Section)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-sans tracking-wider uppercase text-[#D8D1C4]/80 mb-1">
                        Occasion
                      </label>
                      <select
                        value={formData.occasion}
                        onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0A0A0A] border border-[#17382F] text-xs text-[#F4F0E8] focus:border-[#C6A15B] focus:outline-none"
                      >
                        <option value="Birthday / Anniversary">Birthday / Anniversary</option>
                        <option value="Corporate / Team Party">Corporate / Team Party</option>
                        <option value="Cocktail Gathering">Cocktail Gathering</option>
                        <option value="Family Celebration">Family Celebration</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-sans tracking-wider uppercase text-[#D8D1C4]/80 mb-1">
                      Special Requests / Seating Preference
                    </label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Prefer open-air rooftop corner, cake arrangement needed..."
                      className="w-full px-3.5 py-2 rounded-lg bg-[#0A0A0A] border border-[#17382F] text-xs text-[#F4F0E8] focus:border-[#C6A15B] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-[#E1BB70] to-[#C6A15B] text-[#0A0A0A] font-sans font-bold text-xs tracking-[0.18em] uppercase hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>ENQUIRE FOR EVENTS</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
