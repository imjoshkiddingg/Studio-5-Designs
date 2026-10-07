import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Quote } from "lucide-react";
import { caseStudies, type CaseStudy } from "@/lib/site";
import { Reveal } from "./Reveal";

export function CaseStudyPreviews() {
  const [featured, ...supporting] = caseStudies;
  if (!featured) return null;

  return (
    <section className="border-t border-line py-24 md:py-32">
      <div className="container-editorial">
        {/* Section header */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <p className="eyebrow">Case Studies</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-5 max-w-xl font-serif text-display-md text-ink">
                Three projects, examined closely.
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

        {/* Featured case study — large editorial row */}
        <Reveal delay={0.08} className="mt-14">
          <FeaturedCaseStudyCard study={featured} />
        </Reveal>

        {/* Supporting case studies — 2-col grid */}
        {supporting.length > 0 && (
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {supporting.slice(0, 2).map((study, i) => (
              <Reveal key={study.slug} delay={0.1 + i * 0.06}>
                <SupportingCaseStudyCard study={study} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// ─── Featured card ────────────────────────────────────────────────────────────

function FeaturedCaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="group grid overflow-hidden rounded-2xl border border-line transition-shadow hover:shadow-lg md:grid-cols-2"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-line md:aspect-auto md:min-h-[480px]">
        <Image
          src={study.cardImage ?? study.hero}
          alt={`${study.client} — ${study.project}`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
        />
        {/* Sector + industry pills */}
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-ink/80 px-3 py-1 text-xs font-medium text-canvas backdrop-blur-sm">
            Case Study
          </span>
          <span className="rounded-full bg-canvas/90 px-3 py-1 text-xs font-medium text-ink backdrop-blur-sm">
            {study.sector}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between p-8 md:p-10">
        <div>
          {/* Client + industry */}
          <p className="text-sm text-muted">{study.client}</p>
          <h3 className="mt-2 font-serif text-3xl leading-tight text-ink md:text-4xl">
            {study.project}
          </h3>
          <p className="mt-4 text-sm text-muted">{study.industry}</p>

          {/* Services */}
          <div className="mt-6 flex flex-wrap gap-2">
            {study.services.slice(0, 3).map((s) => (
              <span
                key={s}
                className="rounded-full border border-line px-3 py-1 text-xs text-muted"
              >
                {s}
              </span>
            ))}
            {study.services.length > 3 && (
              <span className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                +{study.services.length - 3} more
              </span>
            )}
          </div>

          {/* Context paragraph */}
          <p className="mt-6 leading-relaxed text-ink/75">{study.context}</p>

          {/* Pull quote if available */}
          {study.quote && (
            <blockquote className="mt-8 border-l-2 border-accent pl-5">
              <p className="font-serif text-lg italic leading-snug text-ink">
                &ldquo;{study.quote.text}&rdquo;
              </p>
              <footer className="mt-3 text-xs text-muted">
                {study.quote.author}
                {" — "}
                {study.quote.role}
              </footer>
            </blockquote>
          )}
        </div>

        {/* CTA */}
        <div className="mt-10">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors group-hover:text-accent">
            Read case study
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={1.6}
            />
          </span>
        </div>
      </div>
    </Link>
  );
}

// ─── Supporting card ──────────────────────────────────────────────────────────

function SupportingCaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line transition-shadow hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-line">
        <Image
          src={study.cardImage ?? study.hero}
          alt={`${study.client} — ${study.project}`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
        />
        <div className="absolute left-4 top-4 flex gap-2">
          <span className="rounded-full bg-ink/80 px-3 py-1 text-xs font-medium text-canvas backdrop-blur-sm">
            Case Study
          </span>
          <span className="rounded-full bg-canvas/90 px-3 py-1 text-xs font-medium text-ink backdrop-blur-sm">
            {study.sector}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-7">
        <p className="text-sm text-muted">{study.client}</p>
        <h3 className="mt-2 font-serif text-2xl leading-tight text-ink">
          {study.project}
        </h3>
        <p className="mt-1 text-sm text-muted">{study.industry}</p>

        {/* Services — compact */}
        <div className="mt-4 flex flex-wrap gap-2">
          {study.services.slice(0, 2).map((s) => (
            <span
              key={s}
              className="rounded-full border border-line px-3 py-1 text-xs text-muted"
            >
              {s}
            </span>
          ))}
          {study.services.length > 2 && (
            <span className="rounded-full border border-line px-3 py-1 text-xs text-muted">
              +{study.services.length - 2}
            </span>
          )}
        </div>

        <p className="mt-5 text-sm leading-relaxed text-ink/70">
          {study.context}
        </p>

        {/* Awards badge */}
        {study.awards.length > 0 && (
          <p className="mt-4 text-xs text-accent">
            {study.awards[0]}
          </p>
        )}

        {/* CTA */}
        <div className="mt-auto pt-6">
          <span className="inline-flex items-center gap-2 text-sm text-ink transition-colors group-hover:text-accent">
            Read case study
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={1.6}
            />
          </span>
        </div>
      </div>
    </Link>
  );
}
