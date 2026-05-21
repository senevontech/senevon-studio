import { stats } from "@/lib/site-data";
import { SectionIntro } from "@/components/sections/ui/SectionIntro";
import { SectionShell } from "@/components/shared/SectionShell";
import { Reveal } from "@/components/sections/ui/Reveal";

export function AboutStudioSection() {
  return (
    <SectionShell id="about">
      <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <Reveal>
          <SectionIntro
            eyebrow="About Studio"
            title="Designing worlds that people don't just see, they feel"
            description="We are a hybrid game and design studio focused on atmosphere-first storytelling. Every project is shaped by research, visual craft, and technical execution."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-8">
            <p className="text-lg text-soft">
              Our mission is to merge game thinking, brand strategy, and cinematic interaction to produce experiences that hold attention and grow businesses.
            </p>
            <div className="grid grid-cols-2 gap-x-10 gap-y-7">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-4xl text-main md:text-5xl">{stat.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.22em] text-dim">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
