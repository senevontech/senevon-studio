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

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {processSteps.map((step, index) => (
          <Reveal key={step} delay={index * 0.05}>
            <div className="relative rounded-2xl border border-white/15 bg-[#10111a] p-6">
              <span className="text-xs uppercase tracking-[0.2em] text-white/45">0{index + 1}</span>
              <h3 className="mt-4 text-2xl font-semibold text-white">{step}</h3>
              {index < processSteps.length - 1 ? (
                <span className="pointer-events-none absolute -right-2 top-1/2 hidden h-px w-4 bg-white/25 lg:block" />
              ) : null}
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
