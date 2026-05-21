"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { portfolioItems } from "@/lib/site-data";
import { SectionIntro } from "@/components/sections/ui/SectionIntro";
import { Reveal } from "@/components/sections/ui/Reveal";
import { SectionShell } from "@/components/shared/SectionShell";
import { cn } from "@/lib/utils";

const categories = [
  "All",
  "Logos",
  "Posters",
  "Branding",
  "Interior",
  "Social Media",
  "Motion Graphics",
  "3D",
] as const;

export function DesignPortfolioSection() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === active)),
    [active],
  );

  return (
    <SectionShell id="portfolio" light>
      <Reveal>
        <SectionIntro
          eyebrow="Design Portfolio"
          title="A curated wall of visual identity, motion, and 3D craft"
          description="Filter by discipline, inspect details, and explore the spectrum of our design direction."
        />
      </Reveal>

      <div className="mt-10 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em]">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={cn("transition", active === category ? "text-main" : "text-dim hover:text-accent")}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-10 columns-1 gap-5 md:columns-2 xl:columns-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((item, index) => (
            <motion.button
              layout
              key={`${item.title}-${active}`}
              type="button"
              onClick={() => setOpenIndex(index)}
              className="group mb-5 block w-full break-inside-avoid text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
            >
              <div className="relative h-56 overflow-hidden rounded-3xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
              </div>
              <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-dim">{item.category}</p>
              <h3 className="mt-1 text-2xl text-main">{item.title}</h3>
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {openIndex !== null ? (
          <motion.div
            className="fixed inset-0 z-[140] flex items-center justify-center bg-black/70 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenIndex(null)}
          >
            <motion.div
              className="w-full max-w-5xl"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative h-[56vh] overflow-hidden rounded-3xl">
                <Image
                  src={filtered[openIndex].image}
                  alt={filtered[openIndex].title}
                  fill
                  className="object-cover"
                  sizes="90vw"
                />
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/70">{filtered[openIndex].category}</p>
              <h4 className="mt-1 text-3xl text-white">{filtered[openIndex].title}</h4>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </SectionShell>
  );
}
