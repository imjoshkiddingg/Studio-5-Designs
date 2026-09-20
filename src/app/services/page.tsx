import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Annual & sustainability reports, commemorative books, brand identity, and end-to-end editorial and production management.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Core Practice Areas"
        title="Four disciplines, one uncompromising standard."
        intro="We work at the intersection of narrative and craft — turning purpose into publications, identities, and volumes built to last."
      />

      <div className="divide-y divide-line">
        {services.map((service, i) => {
          const flip = i % 2 === 1;
          return (
            <section key={service.id} className="py-20 md:py-28">
              <div className="container-editorial grid items-center gap-12 md:grid-cols-2 md:gap-16">
                <Reveal className={flip ? "md:order-2" : ""}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-line">
                    <Image
                      src={service.visual}
                      alt={service.visualCaption}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-3 text-xs uppercase tracking-[0.15em] text-muted">
                    {service.visualCaption}
                  </p>
                </Reveal>

                <Reveal delay={0.08} className={flip ? "md:order-1" : ""}>
                  <span className="font-serif text-5xl text-line">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-4 font-serif text-display-md text-ink">
                    {service.title}
                  </h2>
                  <p className="mt-5 font-serif text-xl italic text-accent">
                    {service.tagline}
                  </p>
                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/80">
                    {service.copy}
                  </p>
                </Reveal>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
