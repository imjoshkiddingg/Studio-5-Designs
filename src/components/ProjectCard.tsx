import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/site";

/**
 * Standard editorial project card — used in grids on /work and WorkTeaser support row.
 * Portrait-biased aspect ratio (4/3) keeps vertical rhythm consistent across the grid.
 */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} className="group flex flex-col">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-line">
        <Image
          src={project.image}
          alt={`${project.client} — ${project.title}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
        />
        {/* Sector badge */}
        <span className="absolute left-4 top-4 rounded-full bg-canvas/90 px-3 py-1 text-xs font-medium text-ink backdrop-blur-sm">
          {project.sector}
        </span>
      </div>

      {/* Meta */}
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-muted">{project.client}</p>
          <h3 className="mt-1 font-serif text-xl leading-snug text-ink">
            {project.title}
          </h3>
        </div>
        <ArrowUpRight
          className="mt-1 h-5 w-5 shrink-0 text-line transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
          strokeWidth={1.6}
        />
      </div>

      {/* Summary */}
      <p className="mt-3 text-sm leading-relaxed text-muted">
        {project.summary}
      </p>
    </Link>
  );
}

/**
 * Hero project card — full-width featured slot, title overlaid on image.
 * Used as the lead card in WorkTeaser on the homepage.
 */
export function ProjectCardHero({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative block overflow-hidden rounded-2xl bg-ink-deep"
    >
      {/* Image */}
      <div className="relative aspect-[16/9] md:aspect-[21/9]">
        <Image
          src={project.image}
          alt={`${project.client} — ${project.title}`}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80 transition-all duration-700 ease-editorial group-hover:scale-[1.03] group-hover:opacity-90"
        />
        {/* Bottom gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/90 via-ink-deep/30 to-transparent" />
      </div>

      {/* Overlaid content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-canvas/15 px-3 py-1 text-xs font-medium text-canvas/90 backdrop-blur-sm">
            {project.sector}
          </span>
          <span className="text-xs text-canvas/60">{project.client}</span>
        </div>
        <h3 className="mt-3 max-w-2xl font-serif text-display-md text-canvas">
          {project.title}
        </h3>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-canvas/70 md:text-base">
          {project.summary}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm text-canvas/80 transition-colors group-hover:text-canvas">
          View project
          <ArrowUpRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={1.6}
          />
        </span>
      </div>
    </Link>
  );
}
