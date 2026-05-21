import Image from "next/image";
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

      <div className="mt-14 space-y-9">
        {games.map((game, index) => (
          <Reveal key={game.name} delay={index * 0.06}>
            <article className="space-y-4">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <h3 className="text-4xl text-main md:text-5xl">{game.name}</h3>
                <span className="text-xs uppercase tracking-[0.18em] text-dim">{game.status}</span>
              </div>
              <div className="grid gap-x-6 gap-y-2 text-sm text-soft sm:grid-cols-2 md:grid-cols-4">
                <p>Genre: {game.genre}</p>
                <p>Platform: {game.platform}</p>
                <p>Engine: {game.engine}</p>
                <p>Preview: {game.trailer}</p>
              </div>
              <div className="relative h-40 w-full overflow-hidden rounded-3xl md:h-52">
                <Image
                  src={game.image}
                  alt={game.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
              </div>
              {index < games.length - 1 ? <div className="ambient-divider" /> : null}
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
