import { cn } from "@/lib/utils";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionIntro({ eyebrow, title, description, className }: SectionIntroProps) {
  return (
    <div className={cn("max-w-3xl space-y-5", className)}>
      <p className="text-xs uppercase tracking-[0.32em] text-white/50">{eyebrow}</p>
      <h2 className="text-4xl font-semibold leading-[0.95] tracking-tight text-white md:text-6xl">{title}</h2>
      {description ? <p className="max-w-2xl text-base text-white/65 md:text-lg">{description}</p> : null}
    </div>
  );
}
