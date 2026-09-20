import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Quote } from "lucide-react";
import { getAllWorkSlugs, getWorkEntry } from "@/lib/work";
import { projects, type CaseStudy, type Project } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

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

  const related = projects
    .filter((p) => p.slug !== params.slug)
    .slice(0, 3);

  return (
    <article>
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

      {/* Related */}
      <section className="border-t border-line py-24 md:py-32">
        <div className="container-editorial">
          <p className="eyebrow">More work</p>
          <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.06}>
                <Link href={`/work/${project.slug}`} className="group flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-line">
                    <Image
                      src={project.image}
                      alt={`${project.client} — ${project.title}`}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.04]"
                    />
                  </div>
                  <p className="mt-5 text-sm text-muted">{project.client}</p>
                  <h3 className="mt-1 font-serif text-xl text-ink">
                    {project.title}
                  </h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}

function CaseStudyView({ data }: { data: CaseStudy }) {
  return (
    <>
      <header className="container-editorial pb-12 pt-8 md:pb-16">
        <div className="flex items-center gap-3 text-sm text-muted">
          <span>{data.client}</span>
          <span className="h-1 w-1 rounded-full bg-line" />
          <span>{data.sector}</span>
        </div>
        <h1 className="mt-6 max-w-4xl font-serif text-display-lg text-ink">
          {data.project}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
          {data.context}
        </p>
      </header>

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

      <div className="container-editorial py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">The Work</p>
          </div>
          <div className="md:col-span-8 md:pl-8">
            <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-ink/80">
              {data.narrative.map((para, i) => (
                <Reveal key={i} delay={i * 0.04}>
                  <p>{para}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {data.quote && (
          <Reveal>
            <blockquote className="mx-auto mt-20 max-w-3xl text-center">
              <Quote className="mx-auto h-8 w-8 text-accent" strokeWidth={1.4} />
              <p className="mt-6 font-serif text-2xl italic leading-snug text-ink md:text-3xl">
                &ldquo;{data.quote.text}&rdquo;
              </p>
              <footer className="mt-6 text-sm text-muted">
                <span className="text-ink">{data.quote.author}</span> —{" "}
                {data.quote.role}
              </footer>
            </blockquote>
          </Reveal>
        )}

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {data.gallery.map((src, i) => (
            <Reveal key={src} delay={i * 0.06}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-line">
                <Image
                  src={src}
                  alt={`${data.project} detail ${i + 1}`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}

function ProjectView({ data }: { data: Project }) {
  return (
    <>
      <header className="container-editorial pb-12 pt-8 md:pb-16">
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

      <div className="container-editorial py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Overview</p>
          </div>
          <div className="md:col-span-8 md:pl-8">
            <p className="max-w-2xl text-2xl font-serif leading-snug text-ink">
              {data.summary}
            </p>
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
          </div>
        </div>
      </div>
    </>
  );
}
