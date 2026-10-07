"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  projects,
  caseStudies,
  sectorNotes,
  type Project,
  type Sector,
} from "@/lib/site";
import { ProjectCard } from "./ProjectCard";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const sectors: (Sector | "All")[] = [
  "All",
  "Finance",
  "FMCG",
  "Education",
  "Power",
  "Government / Heritage",
];

// Unified entry for the grid — both projects and case studies
type GridEntry =
  | { kind: "project"; data: Project }
  | { kind: "case-study"; data: (typeof caseStudies)[number] };

// Explicit display order for the Work grid, by slug. Entries not listed here
// fall to the end, in their original array order.
const DISPLAY_ORDER = [
  "inlife-kairos",
  "jollibee-joy-for-tomorrow",
  "bsp-yaman-numismatic-heritage",
  "bcda-one-clark-annual-report",
  "smgp-brand-identity",
  "dlsu-centennial",
  "bpi-building-a-better-philippines",
  "mgen-energy-in-synergy",
];

function orderIndex(slug: string): number {
  const i = DISPLAY_ORDER.indexOf(slug);
  return i === -1 ? DISPLAY_ORDER.length : i;
}

const allEntries: GridEntry[] = [
  ...caseStudies.map((cs) => ({ kind: "case-study" as const, data: cs })),
  ...projects
    .filter((p) => !caseStudies.some((cs) => cs.slug === p.slug))
    .map((p) => ({ kind: "project" as const, data: p })),
].sort((a, b) => orderIndex(a.data.slug) - orderIndex(b.data.slug));

function getSector(entry: GridEntry): Sector {
  return entry.data.sector;
}

type WorkGridProps = {
  showFilters?: boolean;
};

export function WorkGrid({ showFilters = true }: WorkGridProps) {
  const [active, setActive] = useState<Sector | "All">("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? allEntries
        : allEntries.filter((e) => getSector(e) === active),
    [active]
  );

  // Writeup for the currently selected sector (none when "All")
  const activeNote =
    active === "All" ? null : sectorNotes.find((n) => n.sector === active) ?? null;

  return (
    <div>
      {showFilters && (
        <div
          className="flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter by sector"
        >
          {sectors.map((sector) => {
            const isActive = active === sector;
            return (
              <button
                key={sector}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(sector)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  isActive
                    ? "border-ink bg-ink text-canvas"
                    : "border-line text-muted hover:border-ink hover:text-ink"
                }`}
              >
                {sector}
              </button>
            );
          })}
        </div>
      )}

      {/* Selected sector writeup */}
      <AnimatePresence mode="wait" initial={false}>
        {activeNote && (
          <motion.div
            key={activeNote.sector}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="mt-8 max-w-3xl font-serif text-xl leading-relaxed text-ink md:text-2xl">
              {activeNote.why}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        layout
        className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((entry) => (
            <motion.div
              key={entry.data.slug}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {entry.kind === "case-study" ? (
                <CaseStudyCard study={entry.data} />
              ) : (
                <ProjectCard project={entry.data} />
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-12 text-muted">No projects in this sector yet.</p>
      )}
    </div>
  );
}

/**
 * Inline case study card — used only in WorkGrid.
 * Shows the hero image, client, title, and a "Case Study" badge.
 */
function CaseStudyCard({
  study,
}: {
  study: (typeof caseStudies)[number];
}) {
  return (
    <Link href={`/work/${study.slug}`} className="group flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-line">
        <Image
          src={study.hero}
          alt={`${study.client} — ${study.project}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
        />
        {/* Case study marker */}
        <span className="absolute left-4 top-4 rounded-full bg-ink/85 px-3 py-1 text-xs font-medium text-canvas backdrop-blur-sm">
          Case Study
        </span>
        {/* Sector */}
        <span className="absolute right-4 top-4 rounded-full bg-canvas/90 px-3 py-1 text-xs font-medium text-ink backdrop-blur-sm">
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
        {study.context}
      </p>
    </Link>
  );
}
