"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, Search, X } from "lucide-react";
import { navLinks, siteConfig, searchSite } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const results = useMemo(() => searchSite(query), [query]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer/search on route change
  useEffect(() => {
    setDrawerOpen(false);
    setSearchOpen(false);
    setQuery("");
  }, [pathname]);

  // Lock body scroll while drawer open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        scrolled
          ? "border-line bg-canvas/85 backdrop-blur-md"
          : "border-transparent bg-canvas/60 backdrop-blur-sm"
      }`}
    >
      <nav
        aria-label="Primary"
        className="container-editorial flex h-20 items-center justify-between gap-6"
      >
        <Link
          href="/"
          className="flex items-center"
          aria-label={`${siteConfig.name} home`}
        >
          <Image
            src="/studio-5-logo2.png"
            alt={siteConfig.name}
            width={220}
            height={56}
            priority
            className="h-12 w-auto md:h-14"
          />
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`link-underline text-sm ${
                    active ? "text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setSearchOpen((v) => !v)}
            aria-label="Toggle search"
            aria-expanded={searchOpen}
            className="grid h-10 w-10 place-items-center rounded-full text-muted transition-colors hover:bg-ink/5 hover:text-ink"
          >
            <Search className="h-[18px] w-[18px]" strokeWidth={1.6} />
          </button>

          <Link
            href="/contact"
            className="hidden rounded-full bg-ink px-5 py-2.5 text-sm text-canvas transition-colors hover:bg-ink-deep sm:inline-flex"
          >
            Start a Conversation
          </Link>

          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
            className="grid h-10 w-10 place-items-center rounded-full text-ink transition-colors hover:bg-ink/5 md:hidden"
          >
            <Menu className="h-5 w-5" strokeWidth={1.6} />
          </button>
        </div>
      </nav>

      {/* Search overlay dropdown */}
      <AnimatePresence>
        {searchOpen && (
          <>
            {/* Backdrop — closes on outside click */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => {
                setSearchOpen(false);
                setQuery("");
              }}
              className="fixed inset-0 top-20 -z-10 bg-ink-deep/20 backdrop-blur-[2px]"
              aria-hidden="true"
            />
            {/* Panel — floats over content, does not push the page */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-full border-t border-line bg-canvas shadow-lg"
            >
            <div className="container-editorial py-5">
              <label htmlFor="site-search" className="sr-only">
                Search the site
              </label>
              <div className="flex items-center gap-3 border-b border-line pb-3">
                <Search className="h-5 w-5 text-muted" strokeWidth={1.6} />
                <input
                  id="site-search"
                  type="search"
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") {
                      setSearchOpen(false);
                      setQuery("");
                    }
                    if (e.key === "Enter" && results[0]) {
                      router.push(results[0].href);
                    }
                  }}
                  placeholder="Search work, services, and case studies…"
                  className="w-full bg-transparent text-base text-ink outline-none placeholder:text-muted"
                  role="combobox"
                  aria-expanded={results.length > 0}
                  aria-controls="search-results"
                />
              </div>

              {/* Results */}
              {query.trim() && (
                <ul id="search-results" className="mt-4 flex flex-col">
                  {results.length === 0 ? (
                    <li className="py-3 text-sm text-muted">
                      No results for &ldquo;{query}&rdquo;.
                    </li>
                  ) : (
                    results.map((item) => (
                      <li key={`${item.group}-${item.href}-${item.title}`}>
                        <Link
                          href={item.href}
                          className="group flex items-center justify-between gap-4 border-b border-line py-3 last:border-0"
                        >
                          <span className="flex flex-col">
                            <span className="text-sm text-ink">{item.title}</span>
                            <span className="text-xs text-muted">
                              {item.subtitle}
                            </span>
                          </span>
                          <span className="flex items-center gap-3">
                            <span className="hidden text-[10px] uppercase tracking-[0.15em] text-muted sm:block">
                              {item.group}
                            </span>
                            <ArrowUpRight
                              className="h-4 w-4 text-line transition-colors group-hover:text-accent"
                              strokeWidth={1.6}
                            />
                          </span>
                        </Link>
                      </li>
                    ))
                  )}
                </ul>
              )}
            </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-ink-deep/40 backdrop-blur-sm"
              onClick={() => setDrawerOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-canvas p-6"
            >
              <div className="flex items-center justify-between">
                <Image
                  src="/studio-5-logo2.png"
                  alt={siteConfig.name}
                  width={160}
                  height={40}
                  className="h-9 w-auto"
                />
                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  aria-label="Close menu"
                  className="grid h-10 w-10 place-items-center rounded-full text-ink hover:bg-ink/5"
                >
                  <X className="h-5 w-5" strokeWidth={1.6} />
                </button>
              </div>

              <ul className="mt-12 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      className="block border-b border-line py-4 font-serif text-3xl text-ink"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="mt-auto inline-flex items-center justify-center rounded-full bg-ink px-6 py-3.5 text-sm text-canvas"
              >
                Start a Conversation
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
