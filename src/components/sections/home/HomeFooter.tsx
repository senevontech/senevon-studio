"use client";

import Link from "next/link";
import { navItems, socialLinks, studioName } from "@/lib/site-data";
import { useTheme } from "@/components/providers/ThemeProvider";

export function HomeFooter() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer 
      className={`relative transition-colors duration-500 pb-12 pt-20 overflow-hidden border-t ${
        isLight ? "border-black/8 text-black" : "border-white/8 text-white"
      }`}
      style={{ backgroundColor: isLight ? "#f6f1e9" : "#050505" }}
    >
      {/* Background Ambient Glow */}
      <div className={`pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 translate-y-1/2 rounded-full blur-[120px] transition-colors duration-500 ${
        isLight ? "bg-orange-500/5" : "bg-orange-600/10"
      }`} />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Brand Col */}
          <div className="space-y-6 lg:col-span-5">
            <Link href="/" className="inline-block group">
              <h3 className={`font-display text-3xl md:text-4xl tracking-wide uppercase transition-colors ${
                isLight ? "group-hover:text-orange-600" : "group-hover:text-orange-400"
              }`}>
                SENEVON<span className="text-orange-500">.</span>
              </h3>
            </Link>
            <p className={`max-w-md text-sm md:text-base leading-relaxed ${isLight ? "text-black/60" : "text-white/60"}`}>
              Kinetic creative systems engineering next-gen game worlds, immersive UI/UX systems, and title-grade motion graphics. We define presence.
            </p>
            <div className="pt-2">
              <span className={`block text-xs uppercase tracking-wider mb-2 ${isLight ? "text-black/40" : "text-white/40"}`}>Collaboration Request</span>
              <a 
                href="mailto:hello@snvstudio.com" 
                className={`relative inline-block text-lg md:text-xl font-medium transition-colors group ${
                  isLight ? "text-orange-600 hover:text-orange-700" : "text-orange-400 hover:text-orange-300"
                }`}
              >
                hello@snvstudio.com
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-orange-500 scale-x-100 group-hover:scale-x-0 transition-transform duration-300 origin-left" />
                <span className={`absolute bottom-0 left-0 w-full h-[1px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right ${
                  isLight ? "bg-orange-700" : "bg-orange-300"
                }`} />
              </a>
            </div>
          </div>

          {/* Nav Links Col */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-5">
            <div>
              <p className={`mb-4 text-xs uppercase tracking-[0.24em] font-semibold ${isLight ? "text-black/40" : "text-white/40"}`}>Navigation</p>
              <div className={`space-y-3 text-sm ${isLight ? "text-black/70" : "text-white/70"}`}>
                {navItems.map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href} 
                    className={`block transition-colors hover:translate-x-1 duration-200 transform ${
                      isLight ? "hover:text-orange-600" : "hover:text-orange-400"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className={`mb-4 text-xs uppercase tracking-[0.24em] font-semibold ${isLight ? "text-black/40" : "text-white/40"}`}>Socials</p>
              <div className={`space-y-3 text-sm ${isLight ? "text-black/70" : "text-white/70"}`}>
                {socialLinks.map((social) => (
                  <a 
                    key={social.label} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`block transition-colors hover:translate-x-1 duration-200 transform ${
                      isLight ? "hover:text-orange-600" : "hover:text-orange-400"
                    }`}
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions Col */}
          <div className="flex flex-col justify-between items-start lg:col-span-2">
            <div className="w-full">
              <p className={`mb-4 text-xs uppercase tracking-[0.24em] font-semibold ${isLight ? "text-black/40" : "text-white/40"}`}>HQ Location</p>
              <p className={`text-sm ${isLight ? "text-black/60" : "text-white/60"}`}>
                San Francisco, CA<br />
                Tokyo, Japan
              </p>
            </div>
            
            <button 
              onClick={scrollToTop} 
              className={`mt-8 lg:mt-0 flex items-center gap-2 group text-xs uppercase tracking-widest transition-colors ${
                isLight ? "text-black/50 hover:text-orange-600" : "text-white/50 hover:text-orange-400"
              }`}
            >
              <span>Back To Top</span>
              <svg 
                className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className={`my-10 h-px w-full transition-colors duration-500 ${isLight ? "bg-black/10" : "bg-white/10"}`} />

        {/* Bottom Bar */}
        <div className={`flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-wider uppercase ${
          isLight ? "text-black/40" : "text-white/40"
        }`}>
          <p>© {new Date().getFullYear()} {studioName}. All rights reserved.</p>
          <p className="font-display">Cinematic Digital Architectures</p>
        </div>
      </div>
    </footer>
  );
}
