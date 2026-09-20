import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeaderProps = {
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeader({
  label,
  title,
  intro,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <Reveal>
        <p className="eyebrow">{label}</p>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="mt-5 font-serif text-display-md text-ink">{title}</h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.12}>
          <p className="mt-6 text-lg leading-relaxed text-muted">{intro}</p>
        </Reveal>
      )}
    </div>
  );
}
