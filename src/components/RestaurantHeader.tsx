"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import { RESTAURANT_DATA } from "@/data/restaurant";
import { Phone, Calendar, Menu as MenuIcon, X, MapPin } from "lucide-react";

export function RestaurantHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/menu", label: "MENU" },
    { href: "/experience", label: "EXPERIENCE" },
    { href: "/gallery", label: "GALLERY" },
    { href: "/events", label: "EVENTS" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0E241F]/90 backdrop-blur-md border-b border-[#C6A15B]/20 py-2.5 shadow-2xl"
            : "bg-gradient-to-b from-[#0A0A0A]/90 via-[#0A0A0A]/40 to-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Brand Mark */}
            <div className="flex items-center">
              <Logo variant="compact" size="md" />
            </div>

            {/* Center: Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-[12px] font-sans tracking-[0.18em] transition-colors py-1 ${
                      isActive
                        ? "text-[#E1BB70] font-semibold"
                        : "text-[#F4F0E8]/80 hover:text-[#E1BB70]"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C6A15B] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Actions */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${RESTAURANT_DATA.phones.primary}`}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-sans tracking-[0.12em] text-[#D8D1C4] hover:text-[#E1BB70] border border-[#C6A15B]/25 hover:border-[#C6A15B]/60 rounded-md transition-all"
                aria-label="Call The 7A Kharadi"
              >
                <Phone className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>{RESTAURANT_DATA.phones.primaryDisplay}</span>
              </a>

              <Link
                href="/reserve"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-[11.5px] font-sans font-medium tracking-[0.15em] text-[#0A0A0A] bg-gradient-to-r from-[#E1BB70] to-[#C6A15B] hover:brightness-110 shadow-lg shadow-[#C6A15B]/15 rounded-md transition-all"
              >
                <Calendar className="w-3.5 h-3.5 text-[#0A0A0A]" />
                <span>RESERVE A TABLE</span>
              </Link>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#D8D1C4] hover:text-[#E1BB70] transition-colors"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#E1BB70]" />
                ) : (
                  <MenuIcon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-xl lg:hidden flex flex-col justify-between pt-24 pb-20 px-6 animate-fadeIn">
          <div className="flex flex-col items-center text-center">
            <Logo variant="full" size="md" />
            <div className="w-12 h-px bg-[#C6A15B]/40 my-6" />

            <div className="flex flex-col space-y-4 w-full">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-base font-sans tracking-[0.2em] py-2 transition-colors ${
                      isActive
                        ? "text-[#E1BB70] font-semibold border-b border-[#C6A15B]/30"
                        : "text-[#F4F0E8]/80 hover:text-[#E1BB70]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-[#C6A15B]/20 text-center">
            <div className="flex items-center justify-center gap-1.5 text-xs text-[#D8D1C4]/80">
              <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>11th Floor, Gera&apos;s Imperium Alpha, Kharadi</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 text-xs text-[#C6A15B]">
              <span>Hours: {RESTAURANT_DATA.hours.display}</span>
            </div>
            <a
              href={`tel:${RESTAURANT_DATA.phones.primary}`}
              className="w-full py-2.5 text-xs font-sans tracking-[0.15em] text-[#F4F0E8] border border-[#C6A15B]/40 rounded-md"
            >
              CALL {RESTAURANT_DATA.phones.primaryDisplay}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
