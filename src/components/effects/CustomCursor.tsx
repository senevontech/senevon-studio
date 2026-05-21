"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 320, damping: 26 });
  const sy = useSpring(y, { stiffness: 320, damping: 26 });

  useEffect(() => {
    const handle = (event: MouseEvent) => {
      x.set(event.clientX - 14);
      y.set(event.clientY - 14);
    };

    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed z-[120] hidden h-7 w-7 rounded-full border border-white/50 bg-white/10 backdrop-blur-sm md:block"
      style={{ x: sx, y: sy }}
    />
  );
}
