"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Reveal } from "./Reveal";

// Per-pillar accent background colors, keyed by pillar title.
export const pillarColors: Record<string, string> = {
  Purpose: "#EFE8DE",
  Excellence: "#E8EBEB",
  Innovation: "#EAE8F2",
  Culture: "#E6EBE4",
  Trust: "#E5EBF0",
};

type PillarCardProps = {
  pillar: { title: string; description: string };
  index: number;
  /** "dark" = resting on ink-deep (homepage); "light" = resting on canvas (About) */
  variant?: "dark" | "light";
};

/**
 * A single Strategic Pillar card.
 * - Desktop: color appears on hover.
 * - Mobile/touch (below lg): color appears when the card scrolls into view,
 *   driven by data-in-view + CSS in globals.css (.pillar-card rules).
 */
export function PillarCard({ pillar, index, variant = "dark" }: PillarCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.7, margin: "-20% 0px -20% 0px" });

  const color = pillarColors[pillar.title] ?? "#FBFBFA";
  const isDark = variant === "dark";

  return (
    <Reveal delay={index * 0.08} className="h-full">
      <motion.div
        ref={ref}
        data-in-view={inView ? "true" : "false"}
        className={`pillar-card group flex h-full flex-col p-8 transition-colors duration-500 ease-editorial hover:bg-[var(--pillar-color)] lg:p-10 ${
          isDark ? "bg-ink-deep" : "bg-canvas"
        }`}
        style={{ "--pillar-color": color } as React.CSSProperties}
      >
        <span
          className={`pillar-num font-serif text-5xl transition-colors duration-500 ease-editorial group-hover:text-ink/30 ${
            isDark ? "text-white/20" : "text-line"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3
          className={`pillar-title mt-8 font-serif text-2xl transition-colors duration-500 ease-editorial group-hover:text-ink ${
            isDark ? "text-white" : "text-ink"
          }`}
        >
          {pillar.title}
        </h3>
        <p
          className={`pillar-desc mt-4 text-sm leading-relaxed transition-colors duration-500 ease-editorial group-hover:text-ink/80 ${
            isDark ? "text-white/60" : "text-muted"
          }`}
        >
          {pillar.description}
        </p>
      </motion.div>
    </Reveal>
  );
}
