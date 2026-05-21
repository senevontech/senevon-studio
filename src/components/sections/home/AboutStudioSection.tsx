import { stats } from "@/lib/site-data";
import { SectionIntro } from "@/components/sections/ui/SectionIntro";
import { SectionShell } from "@/components/shared/SectionShell";
import { Reveal } from "@/components/sections/ui/Reveal";

export function AboutStudioSection() {
  return (
    <SectionShell id="about" className="bg-[#0f1016]">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <Reveal>
          <SectionIntro
            eyebrow="About Studio"
            title="Designing worlds that people don't just see, they feel"
            description="We are a hybrid game and design studio focused on atmosphere-first storytelling. Every project is shaped by research, visual craft, and technical execution."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <p className="text-sm text-white/70">
              Our mission is to merge game thinking, brand strategy, and cinematic interaction to produce experiences that hold attention and grow businesses.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-5">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-semibold text-white md:text-4xl">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-white/50">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
