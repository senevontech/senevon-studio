"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/lib/site-data";
import { SectionIntro } from "@/components/sections/ui/SectionIntro";
import { SectionShell } from "@/components/shared/SectionShell";

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3800);

    return () => window.clearInterval(timer);
  }, []);

  const item = testimonials[index];

  return (
    <SectionShell>
      <SectionIntro
        eyebrow="Testimonials"
        title="Trusted by teams that demand standout visual quality"
        description="A rotating set of client signals from game teams, product leaders, and brand directors."
      />

      <div className="mt-10 max-w-4xl">
        <AnimatePresence mode="wait">
          <motion.article
            key={item.author}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="rounded-3xl border border-white/15 bg-white/[0.04] p-8 backdrop-blur-xl"
          >
            <p className="text-2xl leading-relaxed text-white md:text-3xl">“{item.quote}”</p>
            <div className="mt-7">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white">{item.author}</p>
              <p className="text-sm text-white/65">{item.role}</p>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </SectionShell>
  );
}
