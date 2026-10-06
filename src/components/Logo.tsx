import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "full" | "compact" | "minimal" | "badge";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  linkToHome?: boolean;
}

export function Logo({
  variant = "full",
  size = "md",
  className = "",
  linkToHome = true,
}: LogoProps) {
  const sizeClasses = {
    sm: "scale-85",
    md: "scale-100",
    lg: "scale-115",
    xl: "scale-130",
  }[size];

  const content = (
    <div
      className={`inline-flex flex-col items-center select-none group transition-opacity hover:opacity-95 ${sizeClasses} ${className}`}
      aria-label="The 7A Restaurant & Bar Logo"
    >
      {variant === "minimal" ? (
        <div className="flex items-center gap-1.5">
          <span className="font-serif text-2xl font-bold tracking-tight text-[#C6A15B] group-hover:text-[#E1BB70] transition-colors">
            7A
          </span>
          <span className="h-3 w-px bg-[#C6A15B]/40" />
          <span className="text-[10px] tracking-[0.25em] text-[#D8D1C4] uppercase font-sans">
            Kharadi
          </span>
        </div>
      ) : variant === "compact" ? (
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-end text-right">
            <span className="text-[9px] font-sans tracking-[0.3em] text-[#D8D1C4] uppercase leading-none">
              The
            </span>
            <span className="text-[8px] font-sans tracking-[0.18em] text-[#C6A15B] uppercase leading-tight">
              Rooftop
            </span>
          </div>
          <div className="relative px-2 py-0.5 border border-[#C6A15B]/40 bg-[#17382F]/40 backdrop-blur-sm rounded">
            <span className="font-serif text-2xl font-bold text-[#E1BB70] tracking-tight">
              7A
            </span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center text-center">
          <span className="text-[9px] tracking-[0.35em] text-[#D8D1C4]/80 uppercase font-sans font-medium mb-0.5">
            THE
          </span>
          
          <div className="relative flex items-center justify-center my-0.5">
            {/* Subtle background brass glow */}
            <div className="absolute inset-0 bg-[#C6A15B]/10 blur-md rounded-full pointer-events-none" />
            
            <div className="flex items-baseline tracking-tight">
              <span className="font-serif text-3xl md:text-4xl font-semibold text-[#E1BB70] drop-shadow-sm">
                7
              </span>
              <span className="font-serif text-2xl md:text-3xl font-medium text-[#C6A15B] ml-0.5">
                A
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="w-2.5 h-px bg-[#C6A15B]/50" />
            <span className="text-[8px] md:text-[9px] tracking-[0.28em] text-[#F4F0E8]/90 uppercase font-sans font-medium">
              RESTAURANT & BAR
            </span>
            <span className="w-2.5 h-px bg-[#C6A15B]/50" />
          </div>
          
          <span className="text-[7.5px] tracking-[0.2em] text-[#C6A15B]/80 font-sans uppercase mt-0.5">
            11TH FLOOR • KHARADI
          </span>
        </div>
      )}
    </div>
  );

  if (linkToHome) {
    return (
      <Link href="/" className="inline-block focus:outline-none focus:ring-1 focus:ring-[#C6A15B]/50 rounded">
        {content}
      </Link>
    );
  }

  return content;
}
