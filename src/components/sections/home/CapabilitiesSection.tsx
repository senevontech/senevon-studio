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

      <div className="mt-14 grid gap-x-8 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
        {capabilities.map((capability, index) => (
          <Reveal key={capability.title} delay={index * 0.05}>
            <article className="space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-dim">{capability.metric}</p>
              <h3 className="text-3xl text-main">{capability.title}</h3>
              <p className="text-sm leading-relaxed text-soft">{capability.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
