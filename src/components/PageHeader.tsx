import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type PageHeaderProps = {
  label: string;
  title: ReactNode;
  intro?: ReactNode;
};

export function PageHeader({ label, title, intro }: PageHeaderProps) {
  return (
    <section className="border-b border-line">
      <div className="container-editorial py-20 md:py-28">
        <Reveal>
          <p className="eyebrow">{label}</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="mt-6 max-w-4xl font-serif text-display-lg text-ink">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.12}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
              {intro}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
