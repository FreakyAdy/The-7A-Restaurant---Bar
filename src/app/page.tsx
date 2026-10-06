import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { ExperienceStrip } from "@/components/ExperienceStrip";
import { IntroSection } from "@/components/IntroSection";
import { RooftopSection } from "@/components/RooftopSection";
import { MenuSection } from "@/components/MenuSection";
import { BarSection } from "@/components/BarSection";
import { NightlifeSection } from "@/components/NightlifeSection";
import { PrivateDiningSection } from "@/components/PrivateDiningSection";
import { ReviewSection } from "@/components/ReviewSection";
import { AmenitiesSection } from "@/components/AmenitiesSection";
import { LocationSection } from "@/components/LocationSection";
import { ReservationSection } from "@/components/ReservationSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ExperienceStrip />
      <IntroSection />
      <RooftopSection />
      <MenuSection />
      <BarSection />
      <NightlifeSection />
      <PrivateDiningSection />
      <ReviewSection />
      <AmenitiesSection />
      <LocationSection />
      <ReservationSection />
    </>
  );
}
