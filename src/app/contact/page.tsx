import type { Metadata } from "next";
import Image from "next/image";
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
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <form className="space-y-8">
            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-dim" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                className="w-full border-b border-[var(--line)] bg-transparent px-0 py-3 text-base text-main outline-none placeholder:text-soft focus:border-[var(--accent-1)]"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-dim" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full border-b border-[var(--line)] bg-transparent px-0 py-3 text-base text-main outline-none placeholder:text-soft focus:border-[var(--accent-1)]"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-dim" htmlFor="scope">
                Project Type
              </label>
              <input
                id="scope"
                name="scope"
                className="w-full border-b border-[var(--line)] bg-transparent px-0 py-3 text-base text-main outline-none placeholder:text-soft focus:border-[var(--accent-1)]"
                placeholder="Game Development / Branding / UI/UX / Motion"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-dim" htmlFor="message">
                Brief
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full border-b border-[var(--line)] bg-transparent px-0 py-3 text-base text-main outline-none placeholder:text-soft focus:border-[var(--accent-1)]"
                placeholder="Tell us about goals, timelines, and desired outcomes"
              />
            </div>
            <MagneticButton href="#">Send Inquiry</MagneticButton>
          </form>

          <aside className="space-y-5">
            <h2 className="text-3xl text-main md:text-4xl">Studio Contact</h2>
            <p className="text-base text-soft">hello@snvstudio.com</p>
            <p className="text-base text-soft">+1 (415) 555-0139</p>
            <p className="text-base text-soft">San Francisco, California</p>
            <div className="relative h-64 overflow-hidden rounded-3xl">
              <Image
                src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1400"
                alt="Creative studio workspace"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </aside>
        </div>
      </SectionShell>
    </PageTransition>
  );
}
