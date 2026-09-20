import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Pillars } from "@/components/Pillars";
import { Partners } from "@/components/Partners";
import { WorkTeaser } from "@/components/WorkTeaser";
import { Services } from "@/components/Services";
import { CaseStudyPreviews } from "@/components/CaseStudyPreviews";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Pillars />
      <Partners />
      <WorkTeaser />
      <Services />
      <CaseStudyPreviews />
    </>
  );
}
