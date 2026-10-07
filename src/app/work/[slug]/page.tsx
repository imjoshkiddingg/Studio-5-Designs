import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Award, Quote } from "lucide-react";
import { getAllWorkSlugs, getWorkEntry } from "@/lib/work";
import {
  projects,
  caseStudies,
  type CaseStudy,
  type GalleryImage,
  type Project,
} from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return getAllWorkSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const entry = getWorkEntry(params.slug);
  if (!entry) return { title: "Work" };
  if (entry.kind === "case-study") {
    return {
      title: `${entry.data.project} — ${entry.data.client}`,
      description: entry.data.context,
    };
  }
  return {
    title: `${entry.data.title} — ${entry.data.client}`,
    description: entry.data.summary,
  };
}

export default function WorkDetailPage({ params }: Params) {
  const entry = getWorkEntry(params.slug);
  if (!entry) notFound();

  // Related: resolve slugs from the entry, fall back to first 3 other projects
  const relatedSlugs =
    entry.kind === "case-study" ? entry.data.relatedProjects : [];

  const related = relatedSlugs.length
    ? relatedSlugs
        .map((s) => {
          const cs = caseStudies.find((c) => c.slug === s);
          if (cs)
            return {
              slug: cs.slug,
              client: cs.client,
              title: cs.project,
              image: cs.hero,
              sector: cs.sector,
            };
          const p = projects.find((pr) => pr.slug === s);
          if (p)
            return {
              slug: p.slug,
              client: p.client,
              title: p.title,
              image: p.image,
              sector: p.sector,
            };
          return null;
        })
        .filter(Boolean)
    : projects
        .filter((p) => p.slug !== params.slug)
        .slice(0, 3)
        .map((p) => ({
          slug: p.slug,
          client: p.client,
          title: p.title,
          image: p.image,
          sector: p.sector,
        }));

  return (
    <article>
      {/* Back nav */}
      <div className="container-editorial pt-10">
        <Link
          href="/work"
          className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
        >
          <ArrowLeft
            className="h-4 w-4 transition-transform group-hover:-translate-x-0.5"
            strokeWidth={1.6}
          />
          All work
        </Link>
      </div>

      {entry.kind === "case-study" ? (
        <CaseStudyView data={entry.data} />
      ) : (
        <ProjectView data={entry.data} />
      )}

      {/* Related projects */}
      <section className="border-t border-line py-24 md:py-32">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow">More work</p>
          </Reveal>
          <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {related.map(
              (item, i) =>
                item && (
                  <Reveal key={item.slug} delay={i * 0.06}>
                    <Link
                      href={`/work/${item.slug}`}
                      className="group flex flex-col"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-line">
                        <Image
                          src={item.image}
                          alt={`${item.client} — ${item.title}`}
                          fill
                          sizes="(min-width: 1024px) 33vw, 100vw"
                          className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
                        />
                        <span className="absolute left-4 top-4 rounded-full bg-canvas/90 px-3 py-1 text-xs font-medium text-ink backdrop-blur-sm">
                          {item.sector}
                        </span>
                      </div>
                      <p className="mt-5 text-sm text-muted">{item.client}</p>
                      <h3 className="mt-1 font-serif text-xl text-ink">
                        {item.title}
                      </h3>
                    </Link>
                  </Reveal>
                )
            )}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-line bg-ink-deep py-20 text-canvas md:py-24">
        <div className="container-editorial flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <Reveal>
              <p className="eyebrow text-white/50">Start a conversation</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-4 font-serif text-display-md">
                Your organisation has a story.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 max-w-md text-white/70">
                Let&apos;s give it form — through a publication, an identity, or
                a volume built to last.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.14}>
            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm text-white transition-colors hover:border-white hover:bg-white hover:text-ink"
            >
              Get in touch
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={1.6}
              />
            </Link>
          </Reveal>
        </div>
      </section>
    </article>
  );
}

// ─── Case Study View ──────────────────────────────────────────────────────────

function CaseStudyView({ data }: { data: CaseStudy }) {
  return (
    <>
      {/* ── Hero header ─────────────────────────────────────────── */}
      <header className="container-editorial pb-12 pt-10 md:pb-16 md:pt-14">
        {/* Breadcrumb metadata */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
          <span className="rounded-full border border-line px-3 py-1">
            {data.sector}
          </span>
          <span className="rounded-full border border-line px-3 py-1">
            {data.industry}
          </span>
        </div>

        <h1 className="mt-6 max-w-4xl font-serif text-display-lg text-ink">
          {data.project}
        </h1>

        <div className="mt-6 flex flex-wrap items-baseline gap-x-8 gap-y-2 text-base text-muted">
          <span>
            <span className="mr-2 text-xs uppercase tracking-widest text-muted/60">
              Client
            </span>
            <span className="text-ink">{data.client}</span>
          </span>
        </div>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          {data.context}
        </p>
      </header>

      {/* ── Full-bleed hero image ────────────────────────────────── */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-line">
        <Image
          src={data.hero}
          alt={`${data.client} — ${data.project}`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* ── Project metadata bar ─────────────────────────────────── */}
      <div className="border-b border-line">
        <div className="container-editorial py-10">
          <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <dt className="eyebrow">Client</dt>
              <dd className="mt-3 font-serif text-xl text-ink">{data.client}</dd>
            </div>
            <div>
              <dt className="eyebrow">Industry</dt>
              <dd className="mt-3 font-serif text-xl text-ink">{data.industry}</dd>
            </div>
            <div>
              <dt className="eyebrow">Services</dt>
              <dd className="mt-3 space-y-1">
                {data.services.map((s) => (
                  <p key={s} className="text-sm text-ink/80">
                    {s}
                  </p>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* ── Challenge / Approach / Solution ──────────────────────── */}
      <div className="border-b border-line py-20 md:py-28">
        <div className="container-editorial grid gap-16 md:grid-cols-12">
          {/* Left label column */}
          <div className="md:col-span-4">
            <Reveal>
              <p className="eyebrow">The Brief</p>
            </Reveal>
          </div>

          {/* Right content column */}
          <div className="space-y-14 md:col-span-8 md:pl-8">
            {/* Challenge */}
            <Reveal>
              <div>
                <h2 className="font-serif text-2xl text-ink">Challenge</h2>
                <p className="mt-4 text-lg leading-relaxed text-ink/80">
                  {data.challenge}
                </p>
              </div>
            </Reveal>

            {/* Approach */}
            <Reveal delay={0.06}>
              <div>
                <h2 className="font-serif text-2xl text-ink">Approach</h2>
                <p className="mt-4 text-lg leading-relaxed text-ink/80">
                  {data.approach}
                </p>
              </div>
            </Reveal>

            {/* Design Solution */}
            <Reveal delay={0.1}>
              <div>
                <h2 className="font-serif text-2xl text-ink">
                  Design Solution
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-ink/80">
                  {data.designSolution}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* ── Narrative paragraphs ─────────────────────────────────── */}
      {data.narrative.length > 0 && (
        <div className="border-b border-line py-20 md:py-28">
          <div className="container-editorial grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <Reveal>
                <p className="eyebrow">The Work</p>
              </Reveal>
            </div>
            <div className="space-y-6 md:col-span-8 md:pl-8">
              {data.narrative.map((para, i) => (
                <Reveal key={i} delay={i * 0.04}>
                  <p className="text-lg leading-relaxed text-ink/80">{para}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Gallery ──────────────────────────────────────────────── */}
      {data.gallery.length > 0 && (
        <div className="border-b border-line py-20 md:py-28">
          <div className="container-editorial">
            <Reveal>
              <p className="eyebrow">Gallery</p>
            </Reveal>
            <GalleryGrid images={data.gallery} projectTitle={data.project} />
          </div>
        </div>
      )}

      {/* ── Outcome ──────────────────────────────────────────────── */}
      <div className="border-b border-line py-20 md:py-28">
        <div className="container-editorial grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <p className="eyebrow">Outcome</p>
            </Reveal>
          </div>
          <div className="md:col-span-8 md:pl-8">
            <Reveal>
              <p className="font-serif text-2xl italic leading-snug text-ink md:text-3xl">
                {data.outcome}
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* ── Awards ───────────────────────────────────────────────── */}
      {data.awards.length > 0 && (
        <div className="border-b border-line py-16 md:py-20">
          <div className="container-editorial">
            <Reveal>
              <p className="eyebrow">Awards & Recognition</p>
            </Reveal>
            <ul className="mt-8 space-y-4">
              {data.awards.map((award, i) => (
                <Reveal as="li" key={award} delay={i * 0.05}>
                  <div className="flex items-start gap-4 border-b border-line pb-4 last:border-0">
                    <Award
                      className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                      strokeWidth={1.5}
                    />
                    <p className="text-ink">{award}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* ── Client quote ─────────────────────────────────────────── */}
      {data.quote && (
        <div className="border-b border-line bg-ink-deep py-20 text-canvas md:py-28">
          <div className="container-editorial">
            <Reveal>
              <blockquote className="mx-auto max-w-3xl text-center">
                <Quote
                  className="mx-auto h-8 w-8 text-accent"
                  strokeWidth={1.4}
                />
                <p className="mt-8 font-serif text-2xl italic leading-snug md:text-3xl">
                  &ldquo;{data.quote.text}&rdquo;
                </p>
                <footer className="mt-8 text-sm text-white/60">
                  <span className="text-white">{data.quote.author}</span>
                  {" — "}
                  {data.quote.role}
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </div>
      )}
    </>
  );
}

// ─── Gallery Grid ─────────────────────────────────────────────────────────────

function GalleryGrid({
  images,
  projectTitle,
}: {
  images: GalleryImage[];
  projectTitle: string;
}) {
  // Render images respecting their size hint.
  // full → full-width row; half → 2-col; third → 3-col (falls back to half if < 2 remaining)
  return (
    <div className="mt-10 space-y-4">
      {images.map((img, i) => {
        if (img.size === "full") {
          return (
            <Reveal key={i} delay={i * 0.04}>
              <figure>
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-line">
                  <Image
                    src={img.src}
                    alt={img.caption ?? `${projectTitle} — image ${i + 1}`}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
                {img.caption && (
                  <figcaption className="mt-3 text-xs uppercase tracking-[0.15em] text-muted">
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            </Reveal>
          );
        }
        return null; // half/third images are batched below
      })}

      {/* Batch non-full images into a 2-col grid */}
      {(() => {
        const partials = images.filter((img) => img.size !== "full");
        if (!partials.length) return null;
        return (
          <div className="grid gap-4 sm:grid-cols-2">
            {partials.map((img, i) => (
              <Reveal key={`p-${i}`} delay={i * 0.05}>
                <figure>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-line">
                    <Image
                      src={img.src}
                      alt={img.caption ?? `${projectTitle} — detail`}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  {img.caption && (
                    <figcaption className="mt-3 text-xs uppercase tracking-[0.15em] text-muted">
                      {img.caption}
                    </figcaption>
                  )}
                </figure>
              </Reveal>
            ))}
          </div>
        );
      })()}
    </div>
  );
}

// ─── Project View ─────────────────────────────────────────────────────────────

function ProjectView({ data }: { data: Project }) {
  return (
    <>
      <header className="container-editorial pb-12 pt-10 md:pb-16">
        <span className="rounded-full border border-line px-3 py-1 text-xs font-medium text-muted">
          {data.sector}
        </span>
        <h1 className="mt-6 max-w-4xl font-serif text-display-lg text-ink">
          {data.title}
        </h1>
        <p className="mt-4 text-lg text-muted">{data.client}</p>
      </header>

      <div className="relative aspect-[16/9] w-full overflow-hidden bg-line">
        <Image
          src={data.image}
          alt={`${data.client} — ${data.title}`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="border-b border-line py-20 md:py-28">
        <div className="container-editorial grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <p className="eyebrow">Overview</p>
            </Reveal>
          </div>
          <div className="md:col-span-8 md:pl-8">
            <Reveal>
              <p className="font-serif text-2xl leading-snug text-ink md:text-3xl">
                {data.summary}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <Link
                href="/contact"
                className="group mt-10 inline-flex items-center gap-2 text-sm text-ink"
              >
                Discuss a similar project
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.6}
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </>
  );
}
