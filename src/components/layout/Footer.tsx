import Link from "next/link";
import { navItems, socialLinks, studioName } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0b10]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-14 md:grid-cols-3 md:px-10">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">{studioName}</p>
          <p className="max-w-sm text-sm text-white/55">
            Crafting immersive games and unforgettable visual experiences across design, motion, and digital storytelling.
          </p>
          <a href="mailto:hello@snvstudio.com" className="text-sm text-white/85 hover:text-white">
            hello@snvstudio.com
          </a>
        </div>

        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.24em] text-white/50">Navigation</p>
          <div className="grid grid-cols-2 gap-2 text-sm text-white/70">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.24em] text-white/50">Social</p>
          <div className="space-y-2 text-sm text-white/70">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} className="block hover:text-white">
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs uppercase tracking-[0.18em] text-white/45">
        {new Date().getFullYear()} {studioName}. All rights reserved.
      </div>
    </footer>
  );
}
