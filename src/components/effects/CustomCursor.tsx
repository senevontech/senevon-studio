"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

type CursorState = {
  active: boolean;
  label: string;
  color: string;
};

const INITIAL_STATE: CursorState = {
  active: false,
  label: "",
  color: "#000000",
};

export function CustomCursor() {
  const x = useMotionValue(-140);
  const y = useMotionValue(-140);
  const sx = useSpring(x, { stiffness: 430, damping: 35, mass: 0.45 });
  const sy = useSpring(y, { stiffness: 430, damping: 35, mass: 0.45 });
  const [state, setState] = useState<CursorState>(INITIAL_STATE);

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      x.set(event.clientX - 26);
      y.set(event.clientY - 26);
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const node = target?.closest<HTMLElement>("[data-cursor]");

      if (!node) {
        setState(INITIAL_STATE);
        return;
      }

      setState({
        active: true,
        label: node.dataset.cursorLabel ?? "",
        color: node.dataset.cursorColor ?? "#000000",
      });
    };

    const onOut = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const related = event.relatedTarget as HTMLElement | null;
      const leftInteractive = target?.closest("[data-cursor]");
      const enteredInteractive = related?.closest("[data-cursor]");

      if (leftInteractive && !enteredInteractive) {
        setState(INITIAL_STATE);
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
    };
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed z-[130] hidden items-center justify-center rounded-full border border-black/20 text-[9px] uppercase tracking-[0.2em] text-white mix-blend-difference md:flex"
      style={{
        x: sx,
        y: sy,
        width: state.active ? 84 : 52,
        height: state.active ? 84 : 52,
        backgroundColor: state.color,
        willChange: "transform, width, height, background-color",
      }}
      animate={{ scale: state.active ? 1.06 : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      <span>{state.label}</span>
    </motion.div>
  );
}
