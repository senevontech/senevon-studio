import { capabilities } from "@/lib/site-data";
import { SectionIntro } from "@/components/sections/ui/SectionIntro";
import { Reveal } from "@/components/sections/ui/Reveal";
import { SectionShell } from "@/components/shared/SectionShell";

export function CapabilitiesSection() {
  return (
    <SectionShell id="services">
      <Reveal>
        <SectionIntro
          eyebrow="Studio Capabilities"
          title="A multidisciplinary team built for ambitious visual products"
          description="Game development, identity design, motion, 3D, and interface engineering under one cinematic direction."
        />
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {capabilities.map((capability, index) => (
          <Reveal key={capability.title} delay={index * 0.05}>
            <article className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition hover:border-white/30 hover:bg-white/[0.06]">
              <p className="text-xs uppercase tracking-[0.18em] text-white/55">{capability.metric}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{capability.title}</h3>
              <p className="mt-3 text-sm text-white/70">{capability.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
