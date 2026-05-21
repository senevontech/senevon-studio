import type { Metadata } from "next";
import { PageTransition } from "@/components/layout/PageTransition";
import { MagneticButton } from "@/components/sections/ui/MagneticButton";
import { PageHero } from "@/components/shared/PageHero";
import { SectionShell } from "@/components/shared/SectionShell";

export const metadata: Metadata = {
  title: "Contact | SNV Studio",
  description: "Contact SNV Studio to start a game, branding, UI/UX, motion graphics, or 3D creative project.",
};

export default function ContactPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Contact"
        title="Bring us your next game, brand, or cinematic digital product"
        description="Tell us your timeline, goals, and creative ambition. We will shape a plan, team, and execution path around it."
      />

      <SectionShell className="pt-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <form className="space-y-4 rounded-3xl border border-white/15 bg-white/[0.03] p-6 md:p-8">
            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-white/60" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-sm text-white outline-none ring-[#00A8FF] transition focus:ring-2"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-white/60" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-sm text-white outline-none ring-[#00A8FF] transition focus:ring-2"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-white/60" htmlFor="scope">
                Project Type
              </label>
              <input
                id="scope"
                name="scope"
                className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-sm text-white outline-none ring-[#00A8FF] transition focus:ring-2"
                placeholder="Game Development / Branding / UI/UX / Motion"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-white/60" htmlFor="message">
                Brief
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-sm text-white outline-none ring-[#00A8FF] transition focus:ring-2"
                placeholder="Tell us about goals, timelines, and desired outcomes"
              />
            </div>
            <MagneticButton href="#">Send Inquiry</MagneticButton>
          </form>

          <aside className="space-y-4 rounded-3xl border border-white/15 bg-white/[0.03] p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-white">Studio Contact</h2>
            <p className="text-sm text-white/70">hello@snvstudio.com</p>
            <p className="text-sm text-white/70">+1 (415) 555-0139</p>
            <p className="text-sm text-white/70">San Francisco, California</p>
            <div className="mt-8 h-64 rounded-2xl border border-white/10 bg-gradient-to-br from-[#00A8FF]/20 via-[#6A00FF]/15 to-transparent" />
          </aside>
        </div>
      </SectionShell>
    </PageTransition>
  );
}
