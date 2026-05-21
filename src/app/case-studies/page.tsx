import type { Metadata } from "next";
import { CaseStudiesSection } from "@/components/sections/home/CaseStudiesSection";
import { FinalCtaSection } from "@/components/sections/home/FinalCtaSection";
import { PageTransition } from "@/components/layout/PageTransition";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Case Studies | SNV Studio",
  description: "Review detailed challenge-to-results case studies from SNV Studio across game and design projects.",
};

export default function CaseStudiesPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Case Studies"
        title="Challenge, process, iteration, and outcomes in full detail"
        description="A process-first archive of strategic thinking, visual development, production execution, and measurable business results."
      />
      <CaseStudiesSection />
      <FinalCtaSection />
    </PageTransition>
  );
}
