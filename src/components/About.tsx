import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="border-t border-line py-24 md:py-32">
      <div className="container-editorial grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <Reveal>
            <p className="eyebrow">About Us</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-5 font-serif text-display-md text-ink">
              Giving human stories a voice.
            </h2>
          </Reveal>
        </div>

        <div className="md:col-span-8 md:pl-8">
          <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-ink/80">
            <Reveal>
              <p>
                Studio 5 Designs has been making institutional work visible for
                over 50 years. We design annual reports, sustainability
                publications, commemorative books, and brand identity systems for
                the organizations that shape Philippine corporate and cultural life.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p>
                Our clients come to us when the work matters — a centennial that
                deserves more than a brochure, a report that needs to earn its
                readers, an identity that has to hold up across decades. We take
                the brief seriously, work closely with the people who know the
                institution best, and deliver something they are proud to put
                their name on.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                <span className="font-semibold text-ink">Purpose</span> keeps
                us honest.{" "}
                <span className="font-semibold text-ink">Excellence</span>{" "}
                keeps us rigorous.{" "}
                <span className="font-semibold text-ink">Innovation</span>{" "}
                keeps the work from looking like everything else.{" "}
                <span className="font-semibold text-ink">Culture</span> keeps
                us rooted.{" "}
                <span className="font-semibold text-ink">Trust</span> builds
                relationships that last.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
