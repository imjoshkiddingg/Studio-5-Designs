import { pillars } from "@/lib/site";
import { Reveal } from "./Reveal";
import { PillarCard } from "./PillarCard";

export function Pillars() {
  return (
    <section className="border-t border-line bg-ink-deep py-16 text-canvas md:py-24">
      <div className="container-editorial">
        <Reveal>
          <p className="eyebrow text-white/50">Strategic Pillars</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-5 max-w-2xl font-serif text-display-md">
            Five things we refuse to compromise on.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-5">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.title} pillar={pillar} index={i} variant="dark" />
          ))}
        </div>
      </div>
    </section>
  );
}
