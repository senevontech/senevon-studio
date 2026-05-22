import type { Metadata } from "next";
import { PageTransition } from "@/components/layout/PageTransition";
import { HeroReferenceSection } from "@/components/sections/home/HeroReferenceSection";
import { ScrollVideoSection } from "@/components/sections/home/ScrollVideoSection";

export const metadata: Metadata = {
  title: "SNV Studio | Hero",
  description: "Senevon hero section with light and dark animated scroll states.",
};

export default function HomePage() {
  return (
    <PageTransition>
      <HeroReferenceSection />
      <ScrollVideoSection />
    </PageTransition>
  );
}
