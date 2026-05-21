import { cn } from "@/lib/utils";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionIntro({ eyebrow, title, description, className }: SectionIntroProps) {
  return (
    <div className={cn("max-w-4xl space-y-5", className)}>
      <p className="text-xs uppercase tracking-[0.35em] text-dim">{eyebrow}</p>
      <h2 className="reveal-heading text-5xl tracking-tight text-main md:text-7xl">{title}</h2>
      {description ? <p className="max-w-3xl text-base text-soft md:text-lg">{description}</p> : null}
    </div>
  );
}
