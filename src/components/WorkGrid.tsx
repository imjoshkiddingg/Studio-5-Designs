"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, type Project, type Sector } from "@/lib/site";
import { ProjectCard } from "./ProjectCard";

const sectors: (Sector | "All")[] = [
  "All",
  "Finance",
  "FMCG",
  "Education",
  "Power",
  "Government / Heritage",
];

type WorkGridProps = {
  items?: Project[];
  showFilters?: boolean;
};

export function WorkGrid({ items = projects, showFilters = true }: WorkGridProps) {
  const [active, setActive] = useState<Sector | "All">("All");

  const filtered = useMemo(
    () => (active === "All" ? items : items.filter((p) => p.sector === active)),
    [active, items]
  );

  return (
    <div>
      {showFilters && (
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter by sector">
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

      <motion.div
        layout
        className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={project} />
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
