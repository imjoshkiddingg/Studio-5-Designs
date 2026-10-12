import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Pillars } from "@/components/Pillars";
import { Partners } from "@/components/Partners";
import { Services } from "@/components/Services";
import { CaseStudyPreviews } from "@/components/CaseStudyPreviews";
import { ImageDivider } from "@/components/ImageDivider";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Partners />
      <CaseStudyPreviews />
      <Services />
      <ImageDivider src="/people.jpg" alt="The people behind Studio 5 Designs" />
      <About />
      <Pillars />
    </>
  );
}
