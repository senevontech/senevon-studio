"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const LOADING_COMPLETE_EVENT = "snv:loading-complete";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.documentElement.dataset.loadingComplete = "false";

    const hideTimer = window.setTimeout(() => setVisible(false), 1200);
    const completeTimer = window.setTimeout(() => {
      document.documentElement.dataset.loadingComplete = "true";
      window.dispatchEvent(new Event(LOADING_COMPLETE_EVENT));
    }, 1800);

    return () => {
      window.clearTimeout(hideTimer);
      window.clearTimeout(completeTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[140] grid place-items-center bg-[#f6f1e9]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.55, ease: "easeOut" } }}
        >
          <div className="space-y-4 text-center">
            <motion.div className="mx-auto h-[2px] w-56 overflow-hidden bg-black/15" initial={false}>
              <motion.span
                className="block h-full w-20 bg-[linear-gradient(90deg,#2BA84A,#0057FF,#D7263D)]"
                animate={{ x: [0, 176, 0] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-black/66">Loading Motion System</p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
