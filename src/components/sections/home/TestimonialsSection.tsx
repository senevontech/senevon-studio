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

      <div className="mt-10 max-w-5xl">
        <AnimatePresence mode="wait">
          <motion.article
            key={item.author}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            <p className="text-3xl leading-tight text-main md:text-5xl">“{item.quote}”</p>
            <div>
              <p className="text-sm uppercase tracking-[0.14em] text-main">{item.author}</p>
              <p className="text-sm text-soft">{item.role}</p>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </SectionShell>
  );
}
