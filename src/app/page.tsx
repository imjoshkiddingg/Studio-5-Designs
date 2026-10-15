import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Pillars } from "@/components/Pillars";
import { Partners } from "@/components/Partners";
import { Services } from "@/components/Services";
import { CaseStudyPreviews } from "@/components/CaseStudyPreviews";
import { Testimonials } from "@/components/Testimonials";
import { ImageDivider } from "@/components/ImageDivider";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Partners />
      <CaseStudyPreviews />
      <Testimonials />
      <Services />
      <ImageDivider src="/divider.jpg" alt="" />
      <About />
      <Pillars />
    </>
  );
}
