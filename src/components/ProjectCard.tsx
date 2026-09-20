import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex flex-col"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-line">
        <Image
          src={project.image}
          alt={`${project.client} — ${project.title}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.04]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-canvas/90 px-3 py-1 text-xs font-medium text-ink backdrop-blur">
          {project.sector}
        </span>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-muted">{project.client}</p>
          <h3 className="mt-1 font-serif text-xl text-ink">{project.title}</h3>
        </div>
        <ArrowUpRight
          className="mt-1 h-5 w-5 shrink-0 text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
          strokeWidth={1.6}
        />
      </div>
    </Link>
  );
}
