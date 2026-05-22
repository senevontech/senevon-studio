"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/lib/site-data";
import { useTheme } from "@/components/providers/ThemeProvider";

export function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";
  const logoSrc = theme === "dark" ? "/logo/logo-white.png" : "/logo/logo-black.png";
  const ink = isHome ? (theme === "light" ? "text-black" : "text-white") : "text-black";
  const panelBg = theme === "light" ? "bg-white/85" : "bg-black/80";
  const panelText = theme === "light" ? "text-black" : "text-white";

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-[140] px-6 pt-5 md:px-12">
      <div className="pointer-events-auto flex items-start justify-between gap-4">
        <Link href="/" className={`inline-flex items-center ${ink}`} data-cursor data-cursor-label="Home">
          <Image src={logoSrc} alt="Senevon Studio" width={340} height={98} className="h-8 w-auto sm:h-9 md:h-10" priority />
        </Link>

        <div className="flex items-start gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className={`mt-1 h-5 w-9 rounded-full border transition-colors ${theme === "light" ? "border-black/25 bg-black/10" : "border-white/35 bg-white/12"}`}
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            <span
              className={`block h-3 w-3 rounded-full transition-transform ${theme === "light" ? "translate-x-1 bg-black" : "translate-x-4 bg-white"}`}
            />
          </button>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="grid h-9 w-9 place-items-center bg-[#ff6a00] text-[28px] leading-none text-white"
            data-cursor
            data-cursor-label="Menu"
            aria-label="Menu"
          >
            M
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`pointer-events-auto ml-auto mt-3 flex w-[min(320px,100%)] flex-col gap-2 border p-4 backdrop-blur-xl ${panelBg} ${panelText} ${theme === "light" ? "border-black/20" : "border-white/25"}`}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`text-sm font-semibold uppercase tracking-[0.14em] transition-colors ${theme === "light" ? "text-black/80 hover:text-black" : "text-white/80 hover:text-white"}`}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
