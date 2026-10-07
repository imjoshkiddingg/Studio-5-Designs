import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Pillars } from "@/components/Pillars";
import { Partners } from "@/components/Partners";
import { Services } from "@/components/Services";
import { CaseStudyPreviews } from "@/components/CaseStudyPreviews";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Partners />
      <CaseStudyPreviews />
      <Services />
      <About />
      <Pillars />
    </>
  );
}
