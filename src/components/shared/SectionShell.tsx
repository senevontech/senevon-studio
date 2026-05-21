import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  light?: boolean;
};

export function SectionShell({ id, className, children, light = false }: SectionShellProps) {
  return (
    <section id={id} className={cn("relative py-20 md:py-28", light ? "theme-section-light" : "bg-transparent", className)}>
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">{children}</div>
    </section>
  );
}
