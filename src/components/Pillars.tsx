import { pillars } from "@/lib/site";
import { Reveal } from "./Reveal";

// Per-pillar hover background colors, keyed by pillar title.
const hoverColors: Record<string, string> = {
  Purpose: "#EFE8DE",
  Excellence: "#E8EBEB",
  Innovation: "#EAE8F2",
  Culture: "#E6EBE4",
  Trust: "#E5EBF0",
};

export function Pillars() {
  return (
    <section className="border-t border-line bg-ink-deep py-24 text-canvas md:py-32">
      <div className="container-editorial">
        <Reveal>
          <p className="eyebrow text-white/50">Strategic Pillars</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-5 max-w-2xl font-serif text-display-md">
            Five convictions that shape every project.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.08} className="h-full">
              <div
                className="group flex h-full flex-col bg-ink-deep p-8 transition-colors duration-500 ease-editorial hover:bg-[var(--pillar-hover)] lg:p-10"
                style={
                  {
                    "--pillar-hover": hoverColors[pillar.title] ?? "#FBFBFA",
                  } as React.CSSProperties
                }
              >
                <span className="font-serif text-5xl text-white/20 transition-colors duration-500 ease-editorial group-hover:text-ink/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-8 font-serif text-2xl text-white transition-colors duration-500 ease-editorial group-hover:text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/60 transition-colors duration-500 ease-editorial group-hover:text-ink/80">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
