"use client";

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
          title="A curated masonry wall of visual identity, motion, and 3D craft"
          description="Filter by discipline, inspect details, and explore the spectrum of our design direction."
          className="[&_*]:!text-zinc-900 [&_p:last-child]:!text-zinc-600"
        />
      </Reveal>

      <div className="mt-10 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={cn(
              "rounded-full border px-4 py-2 text-xs uppercase tracking-[0.16em] transition",
              active === category
                ? "border-zinc-900 bg-zinc-900 text-white"
                : "border-zinc-300 text-zinc-600 hover:border-zinc-900 hover:text-zinc-900",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-8 columns-1 gap-4 md:columns-2 xl:columns-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((item, index) => (
            <motion.button
              layout
              key={`${item.title}-${active}`}
              type="button"
              onClick={() => setOpenIndex(index)}
              className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-zinc-200 bg-white p-4 text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
            >
              <div className={`h-52 rounded-xl bg-gradient-to-br ${item.image} transition group-hover:scale-[1.03]`} />
              <p className="mt-4 text-xs uppercase tracking-[0.18em] text-zinc-500">{item.category}</p>
              <h3 className="mt-1 text-xl font-semibold text-zinc-900">{item.title}</h3>
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {openIndex !== null ? (
          <motion.div
            className="fixed inset-0 z-[140] flex items-center justify-center bg-black/75 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenIndex(null)}
          >
            <motion.div
              className="w-full max-w-4xl rounded-3xl border border-white/20 bg-[#101217] p-6"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className={`h-[52vh] rounded-2xl bg-gradient-to-br ${filtered[openIndex].image}`} />
              <p className="mt-5 text-xs uppercase tracking-[0.2em] text-white/60">{filtered[openIndex].category}</p>
              <h4 className="mt-1 text-2xl font-semibold text-white">{filtered[openIndex].title}</h4>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </SectionShell>
  );
}
