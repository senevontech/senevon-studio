import type { Metadata } from "next";
import { AboutStudioSection } from "@/components/sections/home/AboutStudioSection";
import { FinalCtaSection } from "@/components/sections/home/FinalCtaSection";
import { StudioProcessSection } from "@/components/sections/home/StudioProcessSection";
import { TestimonialsSection } from "@/components/sections/home/TestimonialsSection";
import { PageTransition } from "@/components/layout/PageTransition";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "About | SNV Studio",
  description: "Learn SNV Studio's philosophy, mission, and cinematic creative process for games and digital design.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="About"
        title="A cinematic studio where strategy, design, and engineering move as one"
        description="We work at the intersection of game development and visual communication, building experiences that feel bold and memorable."
      />
      <AboutStudioSection />
      <StudioProcessSection />
      <TestimonialsSection />
      <FinalCtaSection />
    </PageTransition>
  );
}
