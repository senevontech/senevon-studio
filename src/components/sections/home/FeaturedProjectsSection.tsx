"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { featuredProjects } from "@/lib/site-data";
import { SectionIntro } from "@/components/sections/ui/SectionIntro";
import { Reveal } from "@/components/sections/ui/Reveal";
import { SectionShell } from "@/components/shared/SectionShell";

gsap.registerPlugin(ScrollTrigger);

export function FeaturedProjectsSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = trackRef.current;
    if (!container) return;

    const cards = container.querySelectorAll("[data-project-card]");
    const animation = gsap.fromTo(
      cards,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.16,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 75%",
        },
      },
    );

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, []);

  return (
    <SectionShell id="featured">
      <Reveal>
        <SectionIntro
          eyebrow="Featured Projects"
          title="Game worlds and design systems with cinematic precision"
          description="A curated stream of interactive products, brand universes, and motion-heavy storytelling experiences."
        />
      </Reveal>

      <div ref={trackRef} className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
        {featuredProjects.map((project) => (
          <article
            key={project.title}
            data-project-card
            className="group relative min-w-[84vw] snap-center overflow-hidden rounded-3xl border border-white/15 bg-[#111218] p-7 md:min-w-[420px]"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${project.image}`} />
            <div className="relative space-y-5">
              <p className="text-xs uppercase tracking-[0.22em] text-white/60">{project.category}</p>
              <h3 className="text-3xl font-semibold leading-tight text-white">{project.title}</h3>
              <p className="text-sm text-white/70">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-xs text-white/70">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/20 px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="pt-8 text-xs uppercase tracking-[0.18em] text-white/85">Hover Preview</div>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
