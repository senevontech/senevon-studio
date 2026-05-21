"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, socialLinks, studioName } from "@/lib/site-data";

export function Footer() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <footer className="border-t border-black/12 bg-[#f6f1e9] pb-9 pt-16 text-black">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 md:grid-cols-3 md:px-10">
        <div className="space-y-4">
          <Link href="/" className="inline-block" data-cursor data-cursor-label="Home">
            <Image src="/logo/studio.png" alt="SNV Studio" width={140} height={35} className="h-8 w-auto" />
          </Link>
          <p className="max-w-sm text-sm text-black/72">
            Kinetic creative systems for brands and products that need editorial clarity, cinematic movement, and strong interaction craft.
          </p>
          <a href="mailto:hello@snvstudio.com" className="text-sm text-black/62 transition-colors hover:text-black" data-cursor data-cursor-label="Email">
            hello@snvstudio.com
          </a>
        </div>

        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.24em] text-black/58">Navigation</p>
          <div className="grid grid-cols-2 gap-2 text-sm text-black/72">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-black" data-cursor data-cursor-label={item.label}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.24em] text-black/58">Social</p>
          <div className="space-y-2 text-sm text-black/72">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} className="block transition-colors hover:text-black" data-cursor data-cursor-label={social.label}>
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 w-full max-w-7xl px-6 md:px-10">
        <div className="h-px w-full bg-black/12" />
      </div>

      <div className="mt-5 text-center text-xs uppercase tracking-[0.18em] text-black/55">
        {new Date().getFullYear()} {studioName}. All rights reserved.
      </div>
    </footer>
  );
}
