import type { Metadata } from "next";
import { CapabilitiesSection } from "@/components/sections/home/CapabilitiesSection";
import { FinalCtaSection } from "@/components/sections/home/FinalCtaSection";
import { StudioProcessSection } from "@/components/sections/home/StudioProcessSection";
import { PageTransition } from "@/components/layout/PageTransition";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Services | SNV Studio",
  description: "Discover SNV Studio services across game development, branding, motion, UI/UX, interior design, and 3D art.",
};

export default function ServicesPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Services"
        title="End-to-end creative production across games, design, and motion"
        description="Flexible studio squads for game mechanics, identity systems, interface design, cinematic trailers, and 3D asset development."
      />
      <CapabilitiesSection />
      <StudioProcessSection />
      <FinalCtaSection />
    </PageTransition>
  );
}
