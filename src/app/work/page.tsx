import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { WorkGrid } from "@/components/WorkGrid";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected publications, brand systems, and heritage volumes across finance, FMCG, education, power, and government sectors.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        label="Our Work"
        title="Purposeful case studies across sectors."
        intro="A selection of publications, brand systems, and commemorative volumes — each one a human story given permanent form. Filter by sector to explore."
      />
      <section className="py-16 md:py-24">
        <div className="container-editorial">
          <WorkGrid />
        </div>
      </section>
    </>
  );
}
