"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
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
          "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm uppercase tracking-[0.2em] transition",
          variant === "primary" ? "bg-[var(--accent-1)] text-[var(--bg)]" : "text-main ring-1 ring-[var(--line)] hover:text-accent",
          className,
        )}
      >
        <span>{children}</span>
      </Link>
    </motion.div>
  );
}
