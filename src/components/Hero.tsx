"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Backdrop image */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src="/peso2.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink-deep/85 via-ink-deep/65 to-ink-deep/40" />
      </div>

      <div className="container-editorial relative pb-20 pt-16 md:pb-32 md:pt-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="eyebrow text-white/60"
        >
          Multi-awarded, human-centered design
        </motion.p>

        <h1 className="mt-8 max-w-5xl font-serif text-display-xl text-canvas">
          {["Creating Impact", "with Purpose."].map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease, delay: 0.1 + i * 0.12 }}
              >
                {i === 1 ? (
                  <>
                    with <span className="italic text-accent">Purpose.</span>
                  </>
                ) : (
                  line
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.5 }}
          className="mt-10 max-w-xl text-lg leading-relaxed text-white/75"
        >
          As a multi-awarded design agency, Studio 5 helps business leaders turn
          purpose into permanence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.62 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 rounded-full bg-canvas px-6 py-3.5 text-sm text-ink transition-colors hover:bg-white"
          >
            View selected work
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={1.6}
            />
          </Link>
          <Link
            href="/contact"
            className="link-underline text-sm text-canvas"
          >
            Start a conversation
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-24 flex items-center gap-3 text-sm text-white/60"
        >
          <ArrowDown className="h-4 w-4 animate-bounce" strokeWidth={1.6} />
          Scroll to explore
        </motion.div>
      </div>
    </section>
  );
}
