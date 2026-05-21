"use client";

import { motion, useMotionTemplate, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/components/providers/ThemeProvider";

export function HeroReferenceSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { theme } = useTheme();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 26,
    mass: 0.45,
  });

  const titleSize = useTransform(progress, [0, 0.48, 1], [7.2, 11.8, 16.8]);
  const titleSizeVw = useMotionTemplate`${titleSize}vw`;
  const titleY = useTransform(progress, [0, 0.48, 1], ["11vh", "0vh", "41vh"]);
  const subtitleSize = useTransform(progress, [0, 0.48, 1], [2.35, 2.95, 2.4]);
  const subtitleSizeVw = useMotionTemplate`${subtitleSize}vw`;
  const subtitleOpacity = useTransform(progress, [0, 0.55, 0.8, 1], [1, 1, 0.35, 0]);
  const subtitleY = useTransform(progress, [0, 0.48, 1], ["9vh", "0vh", "14vh"]);

  const bgY = useTransform(progress, [0, 0.48, 1], ["16vh", "8vh", "2vh"]);
  const orbSize = useTransform(progress, [0, 0.48, 1], [24, 34, 40]);
  const orbSizeVmin = useMotionTemplate`${orbSize}vmin`;
  const bgOpacity = useTransform(progress, [0, 0.45, 1], [0.72, 0.95, 1]);

  const titleColor = useTransform(
    progress,
    [0, 0.48, 1],
    theme === "light"
      ? ["rgb(244, 176, 134)", "rgb(14, 14, 14)", "rgb(14, 14, 14)"]
      : ["rgb(108, 48, 8)", "rgb(238, 238, 238)", "rgb(230, 230, 230)"],
  );

  const subtitleColor = useTransform(
    progress,
    [0, 0.48, 1],
    theme === "light"
      ? ["rgb(245, 144, 97)", "rgb(18, 18, 18)", "rgb(18, 18, 18)"]
      : ["rgb(248, 152, 109)", "rgb(243, 243, 243)", "rgb(243, 243, 243)"],
  );

  const glassOpacity = useTransform(progress, [0, 0.48, 1], [0.36, 0.28, 0.24]);
  const heroBgImage = theme === "light" ? "/bg/hero-bg-light.png" : "/bg/hero-bg-dark.png";

  return (
    <section
      ref={sectionRef}
      className="relative h-[250vh] overflow-x-clip"
      style={{
        backgroundColor: theme === "light" ? "#e5e5e5" : "#050505",
      }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ y: bgY }}>
          <motion.img
            src={heroBgImage}
            alt=""
            aria-hidden
            className="select-none object-contain"
            style={{
              width: orbSizeVmin,
              height: orbSizeVmin,
              opacity: bgOpacity,
              willChange: "width, height, opacity",
            }}
          />

          <motion.div
            className="absolute inset-0 rounded-full border"
            style={{
              opacity: glassOpacity,
              borderColor: theme === "light" ? "rgba(255,255,255,0.42)" : "rgba(255,255,255,0.22)",
              background:
                theme === "light"
                  ? "linear-gradient(180deg, rgba(255,255,255,0.26), rgba(255,255,255,0.08) 40%, rgba(255,255,255,0.2))"
                  : "linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04) 40%, rgba(255,255,255,0.1))",
              boxShadow: theme === "light" ? "inset 0 0 60px rgba(255,255,255,0.22)" : "inset 0 0 80px rgba(255,255,255,0.1)",
              willChange: "opacity",
            }}
          />
        </motion.div>

        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center px-6"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: titleY }}
        >
          <motion.h1
            className="font-display font-medium uppercase leading-[0.89] tracking-[0.008em]"
            style={{ fontSize: titleSizeVw, color: titleColor, willChange: "font-size, color" }}
          >
            SENEVON
          </motion.h1>

          <motion.p
            className="mt-5 text-center leading-[1.05]"
            style={{
              fontSize: subtitleSizeVw,
              opacity: subtitleOpacity,
              y: subtitleY,
              color: subtitleColor,
              willChange: "opacity, transform, color, font-size",
            }}
          >
            A studio that defines your presence
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
