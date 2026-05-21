import type { Metadata } from "next";
import { PageTransition } from "@/components/layout/PageTransition";
import { FinalCtaSection } from "@/components/sections/home/FinalCtaSection";
import { GameShowcaseSection } from "@/components/sections/home/GameShowcaseSection";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Games | SNV Studio",
  description: "Explore SNV Studio game projects, engines, platforms, genres, and cinematic production pipelines.",
};

export default function GamesPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Games"
        title="Interactive universes built for depth, retention, and visual impact"
        description="From gameplay systems to cinematic trailers, we ship game-ready experiences with premium production quality."
      />
      <GameShowcaseSection />
      <FinalCtaSection />
    </PageTransition>
  );
}
