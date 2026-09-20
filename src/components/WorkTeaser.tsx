import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/site";
import { Reveal } from "./Reveal";
import { ProjectCard } from "./ProjectCard";

export function WorkTeaser() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="border-t border-line py-24 md:py-32">
      <div className="container-editorial">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <p className="eyebrow">Our Work</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-5 max-w-xl font-serif text-display-md text-ink">
                Selected work across sectors.
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

        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.06}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
