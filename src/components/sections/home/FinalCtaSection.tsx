import { MagneticButton } from "@/components/sections/ui/MagneticButton";
import { SectionShell } from "@/components/shared/SectionShell";

export function FinalCtaSection() {
  return (
    <SectionShell className="pb-28 pt-20">
      <div className="relative max-w-5xl space-y-8">
        <p className="relative text-xs uppercase tracking-[0.32em] text-dim">Start a collaboration</p>
        <h2 className="reveal-heading relative text-5xl leading-[0.88] tracking-tight text-main md:text-8xl">
          Let&apos;s build something unforgettable.
        </h2>
        <div className="relative flex flex-wrap gap-4">
          <MagneticButton href="/contact">Book a Call</MagneticButton>
          <MagneticButton href="/contact" variant="ghost">
            Contact Us
          </MagneticButton>
        </div>
      </div>
    </SectionShell>
  );
}
