"use client";

import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { year: "2024", name: "GOBELINS", color: "#4f4ca9", text: "#ffffff" },
  { year: "2024", name: "HUGO PINNA", color: "#d70000", text: "#ffffff" },
  { year: "2026", name: "SNV STUDIO", color: "#17005a", text: "#ffffff" },
];

export function CinematicExperience() {
  const rootRef = useRef<HTMLElement | null>(null);
  const maskX = useMotionValue(50);
  const maskY = useMotionValue(50);
  const sx = useSpring(maskX, { stiffness: 220, damping: 22 });
  const sy = useSpring(maskY, { stiffness: 220, damping: 22 });
  const mask = useMotionTemplate`radial-gradient(circle at ${sx}% ${sy}%, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.88) 18%, rgba(255,255,255,0) 41%)`;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".js-hero-line",
        { yPercent: 115, opacity: 0.1 },
        { yPercent: 0, opacity: 1, duration: 1.15, stagger: 0.08, ease: "power4.out" },
      );

      gsap.utils.toArray<HTMLElement>(".js-project").forEach((node) => {
        gsap.fromTo(
          node,
          { clipPath: "inset(0 0 100% 0)", scale: 0.98 },
          {
            clipPath: "inset(0 0 0 0)",
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: node,
              start: "top 95%",
              end: "top 38%",
              scrub: 1,
            },
          },
        );
      });

      gsap.fromTo(
        ".js-grid-word",
        { yPercent: 24, opacity: 0.3 },
        {
          yPercent: -16,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".js-grid",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        },
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={rootRef} className="relative overflow-x-clip bg-[#f6ecee] text-black">
      <div className="pointer-events-none fixed inset-0 z-[50] hidden opacity-75 md:block">
        <div className="absolute bottom-0 left-1/4 top-0 w-px bg-[#25cf9f]" />
        <div className="absolute bottom-0 left-2/4 top-0 w-px bg-[#25cf9f]" />
        <div className="absolute bottom-0 left-3/4 top-0 w-px bg-[#25cf9f]" />
      </div>

      <section className="relative flex min-h-screen items-center justify-center px-5 pb-24 pt-36 md:px-10">
        <div className="w-full max-w-[1500px]">
          <div className="overflow-hidden text-center">
            <motion.p className="js-hero-line font-display text-[clamp(72px,12vw,240px)] font-black uppercase leading-[0.85] tracking-[-0.05em]">
              WEB
            </motion.p>
          </div>
          <div className="overflow-hidden text-center">
            <motion.p className="js-hero-line font-display text-[clamp(72px,12vw,240px)] font-black uppercase leading-[0.85] tracking-[-0.05em]">
              &gt; DEVELOPER &lt;
            </motion.p>
          </div>
          <div className="overflow-hidden text-center">
            <motion.p className="js-hero-line font-display text-[clamp(72px,12vw,240px)] font-black uppercase leading-[0.85] tracking-[-0.05em]">
              CREATIVE
            </motion.p>
          </div>

          <motion.p
            className="mt-2 text-center font-display text-[clamp(36px,8vw,140px)] font-black uppercase leading-none tracking-[-0.04em] text-black/22 blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.42, duration: 1 }}
          >
            &gt; DESIGNER &lt;
          </motion.p>
        </div>
      </section>

      {projects.map((project) => (
        <section key={project.name} className="js-project relative min-h-[100svh] border-t border-black/10" style={{ backgroundColor: project.color }}>
          <div className="flex min-h-[100svh] items-end justify-center px-6 pb-20">
            <div className="w-full text-center">
              <p className="mb-4 text-[clamp(20px,2vw,38px)] font-semibold" style={{ color: project.text }}>
                {project.year} - {project.name}
              </p>
              <h2 className="font-display text-[clamp(74px,13vw,230px)] font-black uppercase leading-[0.86] tracking-[-0.05em]" style={{ color: project.text }}>
                {project.name}
              </h2>
            </div>
          </div>
        </section>
      ))}

      <section
        className="js-grid relative flex min-h-screen items-center justify-center bg-[#f6ecee] px-6 pb-24 pt-20"
        onPointerMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          const x = ((event.clientX - rect.left) / rect.width) * 100;
          const y = ((event.clientY - rect.top) / rect.height) * 100;
          maskX.set(Math.min(100, Math.max(0, x)));
          maskY.set(Math.min(100, Math.max(0, y)));
        }}
      >
        <motion.div className="pointer-events-none absolute inset-0" style={{ backgroundImage: mask }} />
        <div className="pointer-events-none absolute inset-0 opacity-80">
          <div className="absolute left-0 top-1/3 h-px w-full bg-[#25cf9f]" />
          <div className="absolute left-0 top-2/3 h-px w-full bg-[#25cf9f]" />
          <div className="absolute bottom-0 left-1/4 top-0 w-px bg-[#25cf9f]" />
          <div className="absolute bottom-0 left-2/4 top-0 w-px bg-[#25cf9f]" />
          <div className="absolute bottom-0 left-3/4 top-0 w-px bg-[#25cf9f]" />
        </div>

        <div className="relative z-10 w-full max-w-[1500px]">
          <h3 className="js-grid-word text-center font-display text-[clamp(72px,11vw,210px)] font-black uppercase leading-[0.88] tracking-[-0.05em] text-black">
            VIEW MORE
            <br />
            PROJECTS
          </h3>

          <div className="mt-8 flex justify-center">
            <Link
              href="/portfolio"
              className="group flex h-40 w-40 items-center justify-center rounded-full border-2 border-black text-center"
              data-cursor
              data-cursor-label="Open"
              data-cursor-color="#2BA84A"
            >
              <motion.span
                className="block text-[12px] font-semibold uppercase tracking-[0.08em]"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
              >
                + MORE PROJECTS + MORE PROJECTS +
              </motion.span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
