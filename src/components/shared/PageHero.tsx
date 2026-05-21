import { SectionIntro } from "@/components/sections/ui/SectionIntro";
import { SectionShell } from "@/components/shared/SectionShell";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <SectionShell className="pt-36 md:pt-44">
      <SectionIntro eyebrow={eyebrow} title={title} description={description} />
    </SectionShell>
  );
}
