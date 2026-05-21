import { caseStudies } from "@/lib/site-data";
import { SectionIntro } from "@/components/sections/ui/SectionIntro";
import { Reveal } from "@/components/sections/ui/Reveal";
import { SectionShell } from "@/components/shared/SectionShell";

export function CaseStudiesSection() {
  return (
    <SectionShell id="case-studies">
      <Reveal>
        <SectionIntro
          eyebrow="Case Studies"
          title="Story-led delivery from challenge to measurable impact"
          description="A transparent view of our process, iterations, and the final outcomes shipped for clients and internal titles."
        />
      </Reveal>

      <div className="mt-12 space-y-6">
        {caseStudies.map((study, index) => (
          <Reveal key={study.title} delay={index * 0.08}>
            <article className="rounded-3xl border border-white/12 bg-white/[0.03] p-7 md:p-10">
              <h3 className="text-3xl font-semibold text-white">{study.title}</h3>
              <div className="mt-7 grid gap-6 md:grid-cols-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-white/50">Challenge</p>
                  <p className="mt-2 text-sm text-white/75">{study.challenge}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-white/50">Process</p>
                  <p className="mt-2 text-sm text-white/75">{study.process}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-white/50">Final Output</p>
                  <p className="mt-2 text-sm text-white/75">{study.outcome}</p>
                </div>
              </div>
              <div className="mt-7 flex flex-wrap gap-2">
                {study.results.map((result) => (
                  <span key={result} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/85">
                    {result}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
