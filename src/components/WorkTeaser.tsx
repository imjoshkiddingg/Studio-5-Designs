import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies, type CaseStudy } from "@/lib/site";
import { Reveal } from "./Reveal";

export function WorkTeaser() {
  // Lead hero: first homeFeature case study. Support cards: next two.
  const homeItems = caseStudies.filter((c) => c.homeFeature);
  const hero = homeItems[0];
  const support = homeItems.slice(1, 3);

  if (!hero) return null;

  return (
    <section className="border-t border-line py-24 md:py-32">
      <div className="container-editorial">
        {/* Section header */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <p className="eyebrow">Selected Work</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-5 max-w-xl font-serif text-display-md text-ink">
                Publications and identities that outlast the brief.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-sm text-ink"
            >
              View all work
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={1.6}
              />
            </Link>
          </Reveal>
        </div>

        {/* Hero card — full width */}
        <Reveal delay={0.08} className="mt-12">
          <HeroCard study={hero} />
        </Reveal>

        {/* Support grid — 2-up below hero */}
        {support.length > 0 && (
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {support.map((study, i) => (
              <Reveal key={study.slug} delay={0.1 + i * 0.06}>
                <SupportCard study={study} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/** Full-width hero card with title overlaid on image. */
function HeroCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="group relative block overflow-hidden rounded-2xl bg-ink-deep"
    >
      <div className="relative aspect-[16/9] md:aspect-[21/9]">
        <Image
          src={study.cardImage ?? study.hero}
          alt={`${study.client} — ${study.project}`}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80 transition-all duration-700 ease-editorial group-hover:scale-[1.03] group-hover:opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/90 via-ink-deep/30 to-transparent" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-canvas/15 px-3 py-1 text-xs font-medium text-canvas/90 backdrop-blur-sm">
            {study.sector}
          </span>
          <span className="text-xs text-canvas/60">{study.client}</span>
        </div>
        <h3 className="mt-3 max-w-2xl font-serif text-display-md text-canvas">
          {study.project}
        </h3>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-canvas/70 md:text-base">
          {study.summary ?? study.context}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm text-canvas/80 transition-colors group-hover:text-canvas">
          Read case study
          <ArrowUpRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={1.6}
          />
        </span>
      </div>
    </Link>
  );
}

/** Standard editorial card for the 2-up support row. */
function SupportCard({ study }: { study: CaseStudy }) {
  return (
    <Link href={`/work/${study.slug}`} className="group flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-line">
        <Image
          src={study.cardImage ?? study.hero}
          alt={`${study.client} — ${study.project}`}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-canvas/90 px-3 py-1 text-xs font-medium text-ink backdrop-blur-sm">
          {study.sector}
        </span>
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-muted">{study.client}</p>
          <h3 className="mt-1 font-serif text-xl leading-snug text-ink">
            {study.project}
          </h3>
        </div>
        <ArrowUpRight
          className="mt-1 h-5 w-5 shrink-0 text-line transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
          strokeWidth={1.6}
        />
      </div>

      <p className="mt-3 text-sm leading-relaxed text-muted">
        {study.summary ?? study.context}
      </p>
    </Link>
  );
}
