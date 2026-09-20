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
            <p className="eyebrow text-white/50">{siteConfig.tagline}</p>
            <h2 className="mt-6 max-w-xl font-serif text-4xl leading-tight md:text-5xl">
              Everyone has a story to tell.
            </h2>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
            >
              Share your organization&apos;s story with us
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
