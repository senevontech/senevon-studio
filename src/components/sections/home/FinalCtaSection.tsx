import { MagneticButton } from "@/components/sections/ui/MagneticButton";
import { SectionShell } from "@/components/shared/SectionShell";

export function FinalCtaSection() {
  return (
    <SectionShell className="pb-28 pt-20">
      <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-[#0e1a3f] via-[#130b2c] to-[#0a0b13] p-10 md:p-16">
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#00A8FF]/30 blur-3xl" />
        <div className="absolute -bottom-24 left-10 h-56 w-56 rounded-full bg-[#6A00FF]/35 blur-3xl" />

        <div className="relative max-w-4xl space-y-8">
          <p className="text-xs uppercase tracking-[0.32em] text-white/65">Start a collaboration</p>
          <h2 className="text-4xl font-semibold leading-[0.9] tracking-tight text-white md:text-7xl">
            Let&apos;s build something unforgettable.
          </h2>
          <div className="flex flex-wrap gap-4">
            <MagneticButton href="/contact">Book a Call</MagneticButton>
            <MagneticButton href="/contact" variant="ghost">
              Contact Us
            </MagneticButton>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
