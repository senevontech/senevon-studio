"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1300);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[130] grid place-items-center bg-[#07070a]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeOut" } }}
        >
          <div className="space-y-4 text-center">
            <motion.div
              className="mx-auto h-[2px] w-56 overflow-hidden rounded-full bg-white/15"
              initial={false}
            >
              <motion.span
                className="block h-full w-20 bg-gradient-to-r from-[#00A8FF] to-[#6A00FF]"
                animate={{ x: [0, 180, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Loading Experience</p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
