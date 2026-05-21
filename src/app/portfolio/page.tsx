import type { Metadata } from "next";
import { PageTransition } from "@/components/layout/PageTransition";
import { DesignPortfolioSection } from "@/components/sections/home/DesignPortfolioSection";
import { FinalCtaSection } from "@/components/sections/home/FinalCtaSection";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Portfolio | SNV Studio",
  description: "Browse SNV Studio's branding, logo design, posters, motion graphics, interior concepts, and 3D portfolio.",
};

export default function PortfolioPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Portfolio"
        title="Brand, motion, UI, and 3D work engineered for premium storytelling"
        description="A cross-disciplinary body of work across logos, posters, interior concepts, social campaigns, and cinematic motion systems."
      />
      <DesignPortfolioSection />
      <FinalCtaSection />
    </PageTransition>
  );
}
