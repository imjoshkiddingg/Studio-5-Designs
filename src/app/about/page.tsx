import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { pillars } from "@/lib/site";

const hoverColors: Record<string, string> = {
  Purpose: "#EFE8DE",
  Excellence: "#E8EBEB",
  Innovation: "#EAE8F2",
  Culture: "#E6EBE4",
  Trust: "#E5EBF0",
};

export const metadata: Metadata = {
  title: "About",
  description:
    "A human-centered design agency bridging the gap between vision and values — crafting publications, identities, and visual records that leave a lasting legacy.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About Us"
        title="Behind every institution lies a human story."
        intro="We give those stories a voice — bridging the gap between vision and values through publications, brand identities, and visual records."
      />

      <section className="py-20 md:py-28">
        <div className="container-editorial grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <p className="eyebrow">Our Philosophy</p>
            </Reveal>
          </div>
          <div className="md:col-span-8 md:pl-8">
            <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-ink/80">
              <Reveal>
                <p>
                  As a human-centered design agency, we collaborate with leading
                  organizations that shape corporate and cultural landscapes. We
                  bridge the gap between vision and values — crafting
                  publications, brand identities, and visual records that
                  cultivate authenticity and shared responsibility.
                </p>
              </Reveal>
              <Reveal delay={0.06}>
                <p>
                  Our philosophy is simple: unwavering clarity of{" "}
                  <span className="font-semibold text-ink">Purpose</span>,
                  creating with{" "}
                  <span className="font-semibold text-ink">Excellence</span>,
                  designing with{" "}
                  <span className="font-semibold text-ink">Innovation</span>,
                  deep respect for{" "}
                  <span className="font-semibold text-ink">Culture</span>, and a
                  fierce commitment to authentic{" "}
                  <span className="font-semibold text-ink">Trust</span>. We
                  transform milestones into shared human experiences — crafted
                  with care, built with precision, and created to leave a lasting
                  legacy.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line py-20 md:py-28">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow">Strategic Pillars</p>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {pillars.map((pillar, i) => (
              <Reveal
                key={pillar.title}
                delay={i * 0.08}
                className="h-full"
              >
                <div
                  className="group flex h-full flex-col bg-canvas p-8 transition-colors duration-500 ease-editorial hover:bg-[var(--pillar-hover)] lg:p-10"
                  style={
                    {
                      "--pillar-hover": hoverColors[pillar.title] ?? "#FBFBFA",
                    } as React.CSSProperties
                  }
                >
                  <span className="font-serif text-5xl text-line transition-colors duration-500 ease-editorial group-hover:text-ink/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-8 font-serif text-2xl text-ink transition-colors duration-500 ease-editorial group-hover:text-ink">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted transition-colors duration-500 ease-editorial group-hover:text-ink/70">
                    {pillar.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
