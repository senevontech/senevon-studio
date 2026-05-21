"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "ghost";
};

export function MagneticButton({ href, children, className, variant = "primary" }: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 20 });
  const springY = useSpring(y, { stiffness: 220, damping: 20 });
  const glowX = useTransform(springX, [-20, 20], [20, 80]);

  return (
    <motion.div
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.16);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.16);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: springX, y: springY }}
      className="inline-flex"
    >
      <Link
        href={href}
        className={cn(
          "group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm uppercase tracking-[0.2em] transition",
          variant === "primary"
            ? "bg-gradient-to-r from-[#00A8FF] to-[#6A00FF] text-white shadow-[0_0_40px_rgba(71,136,255,0.35)]"
            : "border border-white/25 bg-white/5 text-white/85 hover:bg-white/10",
          className,
        )}
      >
        <motion.span
          className="pointer-events-none absolute inset-0 opacity-0 blur-2xl transition-opacity group-hover:opacity-80"
          style={{
            left: glowX,
            background: "radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%)",
          }}
        />
        <span className="relative">{children}</span>
      </Link>
    </motion.div>
  );
}
