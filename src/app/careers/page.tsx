import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join a human-centered design studio where craft, clarity, and purpose meet. Explore open roles at Studio 5 Designs.",
};

const roles = [
  {
    title: "Senior Editorial Designer",
    type: "Full-time · Makati",
    blurb:
      "Lead the design of landmark publications and reports, from grid to finished print run.",
  },
  {
    title: "Brand Strategist",
    type: "Full-time · Makati",
    blurb:
      "Shape visual signatures rooted in authentic purpose across print and digital touchpoints.",
  },
  {
    title: "Production Manager",
    type: "Full-time · Makati",
    blurb:
      "Steward every binding, paper stock, and finish to an uncompromising standard.",
  },
  {
    title: "Copywriter / Manuscript Editor",
    type: "Contract · Hybrid",
    blurb:
      "Develop manuscripts and strategic copy where word and craft move in harmony.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHeader
        label="Careers"
        title="Craft has a home here."
        intro="We are a small studio with a long memory. If you believe design should leave a lasting legacy, we would like to hear from you."
      />

      <section className="py-16 md:py-24">
        <div className="container-editorial">
          <ul className="divide-y divide-line border-y border-line">
            {roles.map((role, i) => (
              <Reveal as="li" key={role.title} delay={i * 0.05}>
                <a
                  href={`mailto:${siteConfig.email}?subject=Application: ${encodeURIComponent(
                    role.title
                  )}`}
                  className="group grid items-center gap-4 py-8 md:grid-cols-12"
                >
                  <div className="md:col-span-5">
                    <h2 className="font-serif text-2xl text-ink">{role.title}</h2>
                    <p className="mt-1 text-sm text-muted">{role.type}</p>
                  </div>
                  <p className="text-muted md:col-span-6">{role.blurb}</p>
                  <span className="flex justify-start md:col-span-1 md:justify-end">
                    <ArrowUpRight
                      className="h-6 w-6 text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                      strokeWidth={1.5}
                    />
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>

          <Reveal>
            <p className="mt-12 text-muted">
              Don&apos;t see your role?{" "}
              <Link href="/contact" className="link-underline text-ink">
                Start a conversation
              </Link>{" "}
              — we are always glad to meet thoughtful people.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
