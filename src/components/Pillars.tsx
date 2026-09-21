import { pillars } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Pillars() {
  return (
    <section className="border-t border-line bg-ink-deep py-24 text-canvas md:py-32">
      <div className="container-editorial">
        <Reveal>
          <p className="eyebrow text-white/50">Strategic Pillars</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-5 max-w-2xl font-serif text-display-md">
            Four convictions that shape every project.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((pillar, i) => (
            <Reveal
              key={pillar.title}
              delay={i * 0.08}
              className="flex flex-col bg-ink-deep p-8 lg:p-10"
            >
              <span className="font-serif text-5xl text-white/20">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-8 font-serif text-2xl text-white">
                {pillar.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                {pillar.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
