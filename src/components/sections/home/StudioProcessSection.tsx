import { processSteps } from "@/lib/site-data";
import { SectionIntro } from "@/components/sections/ui/SectionIntro";
import { Reveal } from "@/components/sections/ui/Reveal";
import { SectionShell } from "@/components/shared/SectionShell";

export function StudioProcessSection() {
  return (
    <SectionShell>
      <Reveal>
        <SectionIntro
          eyebrow="Studio Process"
          title="From discovery to launch in six disciplined phases"
          description="A clear pipeline that keeps story, design, and engineering aligned from day one."
        />
      </Reveal>

      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {processSteps.map((step, index) => (
          <Reveal key={step} delay={index * 0.05}>
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.22em] text-dim">0{index + 1}</span>
              <h3 className="text-3xl text-main">{step}</h3>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
