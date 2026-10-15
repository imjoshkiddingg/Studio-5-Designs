"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { services } from "@/lib/site";

export function Services() {
  const [active, setActive] = useState(0);
  // `active` can be -1 when the mobile accordion is fully collapsed.
  // The desktop panel always needs a valid service, so clamp the lookup.
  const current = services[active] ?? services[0];

  return (
    <section id="services" className="border-t border-line py-24 md:py-32">
      <div className="container-editorial">
        <p className="eyebrow">Core Practice Areas</p>
        <h2 className="mt-5 max-w-2xl font-serif text-display-md text-ink">
          What we do.
        </h2>

        {/* ── Desktop: tabs + panel (lg and up) ──────────────────────────── */}
        <div className="mt-16 hidden gap-12 lg:grid lg:grid-cols-12 lg:gap-16">
          {/* Tabs */}
          <div className="lg:col-span-5">
            <div role="tablist" aria-label="Service areas" className="flex flex-col">
              {services.map((service, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={service.id}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`panel-${service.id}`}
                    id={`tab-${service.id}`}
                    onClick={() => setActive(i)}
                    className={`group border-t border-line py-6 text-left transition-colors last:border-b ${
                      isActive ? "" : "hover:bg-ink/[0.02]"
                    }`}
                  >
                    <div className="flex items-baseline gap-4">
                      <span
                        className={`font-serif text-lg transition-colors ${
                          isActive ? "text-accent" : "text-muted"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1">
                        <span
                          className={`block font-serif text-2xl transition-colors ${
                            isActive ? "text-ink" : "text-ink/60 group-hover:text-ink"
                          }`}
                        >
                          {service.title}
                        </span>
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                id={`panel-${current.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${current.id}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-line">
                  <Image
                    src={current.visual}
                    alt={current.visualCaption}
                    fill
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 text-xs uppercase tracking-[0.15em] text-muted">
                  {current.visualCaption}
                </p>
                <p className="mt-6 font-serif text-2xl italic text-ink">
                  {current.tagline}
                </p>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/80">
                  {current.copy}
                </p>
                {current.offerings && current.offerings.length > 0 && (
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {current.offerings.map((offering) => (
                      <li
                        key={offering}
                        className="rounded-full border border-line px-3 py-1.5 text-xs text-ink/70"
                      >
                        {offering}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── Mobile/tablet: accordion (below lg) ────────────────────────── */}
        <div className="mt-12 lg:hidden">
          {services.map((service, i) => {
            const isOpen = i === active;
            return (
              <div key={service.id} className="border-t border-line last:border-b">
                <button
                  onClick={() => setActive(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`m-panel-${service.id}`}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="flex items-baseline gap-3">
                    <span
                      className={`font-serif text-base ${
                        isOpen ? "text-accent" : "text-muted"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif text-xl text-ink">
                      {service.title}
                    </span>
                  </span>
                  <Plus
                    className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ease-editorial ${
                      isOpen ? "rotate-45 text-accent" : ""
                    }`}
                    strokeWidth={1.6}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`m-panel-${service.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8">
                        <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-line">
                          <Image
                            src={service.visual}
                            alt={service.visualCaption}
                            fill
                            sizes="100vw"
                            className="object-cover"
                          />
                        </div>
                        <p className="mt-3 text-xs uppercase tracking-[0.15em] text-muted">
                          {service.visualCaption}
                        </p>
                        <p className="mt-5 font-serif text-xl italic text-ink">
                          {service.tagline}
                        </p>
                        <p className="mt-4 leading-relaxed text-ink/80">
                          {service.copy}
                        </p>
                        {service.offerings && service.offerings.length > 0 && (
                          <ul className="mt-5 flex flex-wrap gap-2">
                            {service.offerings.map((offering) => (
                              <li
                                key={offering}
                                className="rounded-full border border-line px-3 py-1.5 text-xs text-ink/70"
                              >
                                {offering}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
