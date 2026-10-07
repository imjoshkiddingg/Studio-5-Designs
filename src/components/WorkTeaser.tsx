import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/site";
import { Reveal } from "./Reveal";
import { ProjectCard, ProjectCardHero } from "./ProjectCard";

export function WorkTeaser() {
  // Lead hero: first homeFeature item. Support cards: next two homeFeature items.
  const homeItems = projects.filter((p) => p.homeFeature);
  const heroProject = homeItems[0];
  const supportProjects = homeItems.slice(1, 3);

  if (!heroProject) return null;

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
          <ProjectCardHero project={heroProject} />
        </Reveal>

        {/* Support grid — 2-up below hero */}
        {supportProjects.length > 0 && (
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {supportProjects.map((project, i) => (
              <Reveal key={project.slug} delay={0.1 + i * 0.06}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
