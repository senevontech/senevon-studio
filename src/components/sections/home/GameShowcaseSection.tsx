import { games } from "@/lib/site-data";
import { SectionIntro } from "@/components/sections/ui/SectionIntro";
import { Reveal } from "@/components/sections/ui/Reveal";
import { SectionShell } from "@/components/shared/SectionShell";

export function GameShowcaseSection() {
  return (
    <SectionShell id="games">
      <Reveal>
        <SectionIntro
          eyebrow="Game Showcase"
          title="Built like a premium launcher, designed for immersion"
          description="Each concept is framed as a shippable universe with platform, genre, and production metadata."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {games.map((game, index) => (
          <Reveal key={game.name} delay={index * 0.06}>
            <article className="group relative overflow-hidden rounded-3xl border border-white/15 bg-[#10121a] p-6 transition hover:scale-[1.01] hover:border-white/35">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00A8FF]/15 via-[#6A00FF]/10 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="relative space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-2xl font-semibold text-white">{game.name}</h3>
                  <span className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.14em] text-white/75">
                    {game.status}
                  </span>
                </div>
                <div className="grid gap-2 text-sm text-white/70 sm:grid-cols-2">
                  <p>Genre: {game.genre}</p>
                  <p>Platform: {game.platform}</p>
                  <p>Engine: {game.engine}</p>
                  <p>Preview: {game.trailer}</p>
                </div>
                <div className="h-32 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent" />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
