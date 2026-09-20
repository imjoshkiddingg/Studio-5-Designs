import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/site";
import { Reveal } from "./Reveal";

export function CaseStudyPreviews() {
  return (
    <section className="border-t border-line py-24 md:py-32">
      <div className="container-editorial">
        <Reveal>
          <p className="eyebrow">Featured Case Studies</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-5 max-w-2xl font-serif text-display-md text-ink">
            Deep-dives into the work that endures.
          </h2>
        </Reveal>

        <div className="mt-16 space-y-6">
          {caseStudies.map((study, i) => (
            <Reveal key={study.slug} delay={i * 0.05}>
              <Link
                href={`/work/${study.slug}`}
                className="group grid items-center gap-6 rounded-2xl border border-line p-4 transition-colors hover:bg-ink/[0.02] md:grid-cols-12 md:gap-10 md:p-6"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-line md:col-span-5">
                  <Image
                    src={study.hero}
                    alt={`${study.client} — ${study.project}`}
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.04]"
                  />
                </div>
                <div className="md:col-span-7 md:pr-8">
                  <div className="flex items-center gap-3 text-sm text-muted">
                    <span>{study.client}</span>
                    <span className="h-1 w-1 rounded-full bg-line" />
                    <span>{study.sector}</span>
                  </div>
                  <h3 className="mt-3 font-serif text-3xl text-ink">
                    {study.project}
                  </h3>
                  <p className="mt-4 max-w-md leading-relaxed text-muted">
                    {study.context}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm text-ink">
                    Read case study
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={1.6}
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
