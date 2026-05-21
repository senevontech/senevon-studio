"use client";

import dynamic from "next/dynamic";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { MagneticButton } from "@/components/sections/ui/MagneticButton";

const HeroOrb = dynamic(() => import("@/components/three/HeroOrb").then((mod) => mod.HeroOrb), {
  ssr: false,
});

export function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useTransform(mouseX, [-0.5, 0.5], [-24, 24]);
  const y = useTransform(mouseY, [-0.5, 0.5], [-20, 20]);

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-36 md:px-10"
      onMouseMove={(event) => {
        mouseX.set(event.clientX / window.innerWidth - 0.5);
        mouseY.set(event.clientY / window.innerHeight - 0.5);
      }}
    >
      <HeroOrb />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-12">
        <motion.div className="max-w-5xl space-y-8" style={{ x, y }}>
          <p className="text-xs uppercase tracking-[0.42em] text-dim">Cinematic Creative Studio</p>
          <h1 className="reveal-heading text-6xl leading-[0.86] tracking-tight text-main md:text-8xl">
            We craft immersive games & unforgettable visual experiences.
          </h1>
          <p className="max-w-3xl text-base text-soft md:text-2xl">
            Premium game development and design for brands and products that need atmosphere, narrative, and impact.
          </p>
          <div className="flex flex-wrap gap-4">
            <MagneticButton href="#featured">View Projects</MagneticButton>
            <MagneticButton href="/contact" variant="ghost">
              Start a Project
            </MagneticButton>
          </div>
        </motion.div>

        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-dim">
          <span className="inline-block h-px w-12 theme-line" />
          Scroll to explore
        </div>
      </div>
    </section>
  );
}
