"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[90] h-[2px] w-full origin-left bg-gradient-to-r from-[#00A8FF] via-[#6A00FF] to-white"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
