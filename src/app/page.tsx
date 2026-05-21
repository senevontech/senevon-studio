import type { Metadata } from "next";
import { PageTransition } from "@/components/layout/PageTransition";
import { AboutStudioSection } from "@/components/sections/home/AboutStudioSection";
import { CapabilitiesSection } from "@/components/sections/home/CapabilitiesSection";
import { CaseStudiesSection } from "@/components/sections/home/CaseStudiesSection";
import { DesignPortfolioSection } from "@/components/sections/home/DesignPortfolioSection";
import { FeaturedProjectsSection } from "@/components/sections/home/FeaturedProjectsSection";
import { FinalCtaSection } from "@/components/sections/home/FinalCtaSection";
import { GameShowcaseSection } from "@/components/sections/home/GameShowcaseSection";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { StudioProcessSection } from "@/components/sections/home/StudioProcessSection";
import { TestimonialsSection } from "@/components/sections/home/TestimonialsSection";

export const metadata: Metadata = {
  title: "SNV Studio | Cinematic Game & Design Studio",
  description:
    "A premium creative studio for game development, branding, logo design, poster design, motion graphics, interior concepts, UI/UX, and 3D art.",
};

export default function HomePage() {
  return (
    <PageTransition>
      <HeroSection />
      <FeaturedProjectsSection />
      <CapabilitiesSection />
      <AboutStudioSection />
      <GameShowcaseSection />
      <DesignPortfolioSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <StudioProcessSection />
      <FinalCtaSection />
    </PageTransition>
  );
}
