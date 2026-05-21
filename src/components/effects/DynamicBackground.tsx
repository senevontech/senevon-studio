"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function DynamicBackground() {
  const x = useMotionValue(50);
  const y = useMotionValue(30);
  const sx = useSpring(x, { stiffness: 100, damping: 20 });
  const sy = useSpring(y, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      const nx = (event.clientX / window.innerWidth) * 100;
      const ny = (event.clientY / window.innerHeight) * 100;
      x.set(nx);
      y.set(ny);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  const background = useMotionTemplate`radial-gradient(circle at ${sx}% ${sy}%, rgba(0, 168, 255, 0.2), transparent 35%), radial-gradient(circle at 80% 20%, rgba(106, 0, 255, 0.16), transparent 40%), #07070a`;

  return <motion.div className="pointer-events-none fixed inset-0 -z-20" style={{ background }} />;
}
