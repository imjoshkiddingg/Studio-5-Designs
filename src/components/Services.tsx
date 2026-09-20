"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { services } from "@/lib/site";

export function Services() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section id="services" className="border-t border-line py-24 md:py-32">
      <div className="container-editorial">
        <p className="eyebrow">Core Practice Areas</p>
        <h2 className="mt-5 max-w-2xl font-serif text-display-md text-ink">
          Four disciplines, one uncompromising standard.
        </h2>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
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
                        <AnimatePresence initial={false}>
                          {isActive && (
                            <motion.span
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                              className="mt-3 block overflow-hidden text-sm italic leading-relaxed text-muted"
                            >
                              {service.tagline}
                            </motion.span>
                          )}
                        </AnimatePresence>
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
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
