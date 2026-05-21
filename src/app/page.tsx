import type { Metadata } from "next";
import { PageTransition } from "@/components/layout/PageTransition";
import { HeroReferenceSection } from "@/components/sections/home/HeroReferenceSection";

export const metadata: Metadata = {
  title: "SNV Studio | Hero",
  description: "Senevon hero section with light and dark animated scroll states.",
};

export default function HomePage() {
  return (
    <PageTransition>
      <HeroReferenceSection />
    </PageTransition>
  );
}
