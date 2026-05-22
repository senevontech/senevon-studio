"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TITLE_SELECTOR = "h1, h2, h3, .reveal-heading, [data-title-reveal]";

export function TitleReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const yDistance = isMobile ? 22 : 34;
    const duration = isMobile ? 0.72 : 0.9;
    const stagger = isMobile ? 0.05 : 0.08;
    const start = isMobile ? "top 94%" : "top 90%";

    const ctx = gsap.context(() => {
      const targets = gsap
        .utils.toArray<HTMLElement>(TITLE_SELECTOR)
        .filter((element) => !element.closest("[data-no-title-reveal]"));

      if (targets.length === 0) {
        return;
      }

      gsap.set(targets, { autoAlpha: 0, y: yDistance, willChange: "transform, opacity" });

      ScrollTrigger.batch(targets, {
        start,
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            duration,
            stagger,
            ease: "power3.out",
            clearProps: "willChange",
            overwrite: true,
          });
        },
      });
    });

    const refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 80);

    return () => {
      window.clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, [pathname]);

  return null;
}
