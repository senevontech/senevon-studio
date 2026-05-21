"use client";

import Image from "next/image";
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

    const items = container.querySelectorAll("[data-project-item]");
    const animation = gsap.fromTo(
      items,
      { y: 70, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 78%",
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

      <div ref={trackRef} className="mt-14 space-y-10">
        {featuredProjects.map((project, idx) => (
          <article key={project.title} data-project-item className="space-y-4">
            <p className="text-xs uppercase tracking-[0.24em] text-dim">{project.category}</p>
            <h3 className="text-4xl text-main md:text-6xl">{project.title}</h3>
            <p className="max-w-3xl text-base text-soft md:text-lg">{project.description}</p>
            <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.16em] text-dim">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="relative h-44 w-full overflow-hidden rounded-3xl md:h-56">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
            {idx < featuredProjects.length - 1 ? <div className="ambient-divider" /> : null}
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
