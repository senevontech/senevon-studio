"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/components/providers/ThemeProvider";

const LOADING_COMPLETE_EVENT = "snv:loading-complete";

const revealEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const textStack = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.82,
      ease: revealEase,
    },
  },
};

export function HeroReferenceSection() {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLElement | null>(null);
  const oLetterRef = useRef<HTMLSpanElement | null>(null);
  const [readyToReveal, setReadyToReveal] = useState(() => {
    if (typeof document === "undefined") {
      return false;
    }
    return document.documentElement.dataset.loadingComplete === "true";
  });
  const [rippleGeometry, setRippleGeometry] = useState<{ x: number; y: number; diameter: number } | null>(null);
  const heroBgImage = theme === "light" ? "/bg/hero-bg-light.png" : "/bg/hero-bg-dark.png";
  const isLight = theme === "light";

  useEffect(() => {
    if (readyToReveal) {
      return;
    }

    const onComplete = () => setReadyToReveal(true);
    window.addEventListener(LOADING_COMPLETE_EVENT, onComplete);

    const fallbackTimer = window.setTimeout(() => setReadyToReveal(true), 2200);

    return () => {
      window.removeEventListener(LOADING_COMPLETE_EVENT, onComplete);
      window.clearTimeout(fallbackTimer);
    };
  }, [readyToReveal]);

  useEffect(() => {
    const updateRippleGeometry = () => {
      if (!sectionRef.current || !oLetterRef.current) {
        return;
      }

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const letterRect = oLetterRef.current.getBoundingClientRect();
      const x = letterRect.left + letterRect.width / 2 - sectionRect.left;
      const y = letterRect.top + letterRect.height / 2 - sectionRect.top;
      const maxRadius = Math.max(
        Math.hypot(x, y),
        Math.hypot(sectionRect.width - x, y),
        Math.hypot(x, sectionRect.height - y),
        Math.hypot(sectionRect.width - x, sectionRect.height - y),
      );

      setRippleGeometry({
        x,
        y,
        diameter: maxRadius * 2,
      });
    };

    const rafId = window.requestAnimationFrame(updateRippleGeometry);
    const onResize = () => window.requestAnimationFrame(updateRippleGeometry);
    window.addEventListener("resize", onResize);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
    };
  }, [readyToReveal]);

  return (
    <section
      ref={sectionRef}
      data-no-title-reveal
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundColor: isLight ? "#fbfaf9" : "#000000",
      }}
    >
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 h-[150vmax] w-[150vmax] -translate-x-1/2 -translate-y-[55%] select-none object-contain blur-[88px] sm:h-[132vmax] sm:w-[132vmax] md:h-[116vmax] md:w-[116vmax]"
          style={{
            opacity: isLight ? 0.92 : 0.88,
            filter: isLight ? "blur(88px) saturate(1.1)" : "blur(92px) saturate(1.08)",
          }}
        >
          <Image src={heroBgImage} alt="" aria-hidden fill priority sizes="100vw" className="object-contain" />
        </div>

        <div
          className="absolute inset-0 z-10"
          style={{
            background: isLight
              ? "radial-gradient(ellipse at 50% 40%, rgba(246,132,66,0.72) 0%, rgba(255,191,151,0.56) 24%, rgba(255,245,239,0.9) 54%, #ffffff 84%)"
              : "radial-gradient(ellipse at 50% 38%, rgba(196,131,94,0.8) 0%, rgba(138,56,0,0.9) 31%, rgba(30,12,3,0.94) 61%, #000000 88%)",
            backdropFilter: "blur(34px) saturate(1.15)",
            WebkitBackdropFilter: "blur(34px) saturate(1.15)",
          }}
        />
      </div>

      {readyToReveal && rippleGeometry ? (
        <svg
          className="pointer-events-none absolute inset-0 z-[15]"
          width="100%"
          height="100%"
          aria-hidden
        >
          {([0, 3] as const).map((delay, i) => (
            <motion.circle
              key={`ripple-${i}-${theme}`}
              cx={rippleGeometry.x}
              cy={rippleGeometry.y}
              fill="none"
              stroke={isLight ? "rgba(170,58,0,0.9)" : "rgba(255,185,130,0.72)"}
              strokeWidth={2}
              initial={{ r: 2, opacity: 0.85 }}
              animate={{ r: rippleGeometry.diameter / 2, opacity: 0 }}
              transition={{
                duration: 5,
                ease: [0.22, 0.05, 0.36, 1],
                delay,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          ))}
        </svg>
      ) : null}

      <motion.div
        className="relative z-20 flex min-h-screen flex-col items-center justify-center px-5 text-center"
        variants={textStack}
        initial="hidden"
        animate={readyToReveal ? "visible" : "hidden"}
      >
        <motion.h1
          variants={textItem}
          className="font-display font-medium uppercase leading-[0.86]"
          style={{
            color: isLight ? "#000000" : "#ffffff",
            fontSize: "clamp(3.3rem, 13.2vw, 16.4rem)",
            letterSpacing: "0",
          }}
        >
          SENEV
          <span ref={oLetterRef} className="inline-block">
            O
          </span>
          N
        </motion.h1>

        <motion.p
          variants={textItem}
          className="mt-1 font-display uppercase leading-none md:mt-2"
          style={{
            color: isLight ? "#000000" : "#ffffff",
            fontSize: "clamp(2.25rem, 6vw, 6.1rem)",
            letterSpacing: "0",
          }}
        >
          STUDIO
        </motion.p>

        <motion.p
          variants={textItem}
          className="mt-4 max-w-[92vw] leading-[1.05] md:mt-6"
          style={{
            color: isLight ? "#000000" : "#ffffff",
            fontSize: "clamp(1.15rem, 2.2vw, 2.9rem)",
            letterSpacing: "0",
          }}
        >
          A studio that defines your presence
        </motion.p>
      </motion.div>
    </section>
  );
}
