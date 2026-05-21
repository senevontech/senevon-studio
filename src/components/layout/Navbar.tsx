"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, studioName } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-[100]">
      <div className="mx-auto mt-4 w-[min(1120px,calc(100%-2rem))] rounded-2xl border border-white/15 bg-[#0a0a0d]/75 px-4 py-3 backdrop-blur-xl md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-sm font-semibold uppercase tracking-[0.24em] text-white/90">
            {studioName}
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-3 py-2 text-xs uppercase tracking-[0.18em] transition",
                    active ? "bg-white text-black" : "text-white/65 hover:bg-white/10 hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-full border border-white/20 px-3 py-2 text-xs uppercase tracking-[0.16em] text-white md:hidden"
          >
            Menu
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-2 w-[min(1120px,calc(100%-2rem))] rounded-2xl border border-white/15 bg-[#0a0a0d]/95 p-3 backdrop-blur-xl md:hidden"
          >
            <div className="grid gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-xl px-3 py-2 text-sm text-white/80 transition",
                    pathname === item.href ? "bg-white text-black" : "hover:bg-white/10",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
