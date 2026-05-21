"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[110] h-[2px] w-full origin-left bg-[linear-gradient(90deg,#2BA84A,#0057FF,#D7263D)]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
