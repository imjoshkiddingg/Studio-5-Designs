import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-deep text-canvas">
      <div className="container-editorial py-20 md:py-28">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow text-white/50">Start a Conversation</p>
            <h2 className="mt-6 max-w-xl font-serif text-4xl leading-tight md:text-5xl">
              Your organization has a story.
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Let&apos;s give it form through a design built to last.
            </p>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm text-white transition-colors hover:border-white hover:bg-white hover:text-ink"
            >
              Get in touch
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={1.6}
              />
            </Link>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-white/50">Explore</p>
            <ul className="mt-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-white/50">Studio</p>
            <address className="mt-6 not-italic text-sm leading-relaxed text-white/70">
              {siteConfig.address.line1}
              <br />
              {siteConfig.address.line2}
              <br />
              {siteConfig.address.country}
            </address>
            <div className="mt-6 flex flex-col gap-2 text-sm">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-white/70 transition-colors hover:text-white"
              >
                {siteConfig.email}
              </a>
              <a
                href={`mailto:${siteConfig.emailSecondary}`}
                className="text-white/70 transition-colors hover:text-white"
              >
                {siteConfig.emailSecondary}
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
                className="text-white/70 transition-colors hover:text-white"
              >
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Crafted with care, built with precision.</p>
        </div>
      </div>
    </footer>
  );
}
