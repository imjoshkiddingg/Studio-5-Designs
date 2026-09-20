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
                Behind every major institution, cultural milestone, and community
                initiative lies a human story waiting to be told with intention.
                At Studio 5 Designs, we give those stories a voice.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p>
                As a human-centered design agency, we collaborate with leading
                organizations that shape corporate and cultural landscapes. We
                bridge the gap between vision and values — crafting publications,
                brand identities, and visual records that cultivate authenticity
                and shared responsibility.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                Our philosophy is simple: unwavering clarity of{" "}
                <span className="text-ink">Purpose</span>, creating with{" "}
                <span className="text-ink">Excellence</span>, deep respect for{" "}
                <span className="text-ink">Culture</span>, and a fierce commitment
                to authentic <span className="text-ink">Trust</span>. We transform
                milestones into shared human experiences — crafted with care, built
                with precision, and created to leave a lasting legacy.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
