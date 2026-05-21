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

      <div className="mt-14 space-y-12">
        {caseStudies.map((study, index) => (
          <Reveal key={study.title} delay={index * 0.08}>
            <article className="space-y-5">
              <h3 className="text-4xl text-main md:text-5xl">{study.title}</h3>
              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-dim">Challenge</p>
                  <p className="mt-2 text-sm text-soft">{study.challenge}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-dim">Process</p>
                  <p className="mt-2 text-sm text-soft">{study.process}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-dim">Final Output</p>
                  <p className="mt-2 text-sm text-soft">{study.outcome}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.16em] text-dim">
                {study.results.map((result) => (
                  <span key={result}>{result}</span>
                ))}
              </div>
              {index < caseStudies.length - 1 ? <div className="ambient-divider" /> : null}
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
