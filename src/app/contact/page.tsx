import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Share your organization's story with Studio 5 Designs. Start a conversation about your next publication, identity, or heritage volume.",
};

export default function ContactPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-editorial grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow">Contact</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-6 font-serif text-display-md text-ink">
              Everyone has a story to tell.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              Share your organization&apos;s story with us. Whether it&apos;s a
              milestone, a report, or a legacy in the making — let&apos;s give it
              form.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <dl className="mt-12 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-0.5 h-5 w-5 text-accent" strokeWidth={1.6} />
                <div>
                  <dt className="sr-only">Address</dt>
                  <dd className="text-sm not-italic leading-relaxed text-ink/80">
                    {siteConfig.address.line1}
                    <br />
                    {siteConfig.address.line2}, {siteConfig.address.country}
                  </dd>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-accent" strokeWidth={1.6} />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="link-underline text-sm text-ink"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-accent" strokeWidth={1.6} />
                <a
                  href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
                  className="link-underline text-sm text-ink"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </dl>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
