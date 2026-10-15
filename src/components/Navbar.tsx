"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
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
  const [mounted, setMounted] = useState(false);
  // Tracks a drawer link awaiting navigation, so its color transition can play
  // briefly before the route changes.
  const [pendingHref, setPendingHref] = useState<string | null>(null);

  useEffect(() => setMounted(true), []);

  function navigateFromDrawer(href: string) {
    if (href === pathname) {
      setDrawerOpen(false);
      return;
    }
    setPendingHref(href);
    window.setTimeout(() => {
      router.push(href);
      setDrawerOpen(false);
      setPendingHref(null);
    }, 280);
  }

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

        <ul className="hidden items-center gap-10 md:flex lg:gap-14">
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

      {/* Mobile drawer — portaled to <body> so it escapes the header's
          backdrop-blur stacking context and can truly cover the viewport. */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {drawerOpen && (
              <motion.div
                className="fixed inset-0 z-[60] md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div
                  className="absolute inset-0 bg-ink-deep/80"
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
              className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col overflow-y-auto p-6"
              style={{ backgroundColor: "#FFFFFF" }}
            >
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  aria-label="Close menu"
                  className="grid h-10 w-10 place-items-center rounded-full text-ink hover:bg-ink/5"
                >
                  <X className="h-5 w-5" strokeWidth={1.6} />
                </button>
              </div>

              <nav aria-label="Mobile" className="mt-10 flex flex-col">
                {navLinks.map((link, i) => {
                  const active =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);
                  const highlighted = active || pendingHref === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.06 }}
                    >
                      <Link
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          navigateFromDrawer(link.href);
                        }}
                        className="flex items-center justify-between border-b border-line py-4"
                      >
                        <span
                          className={`font-sans text-2xl font-medium tracking-tight transition-colors duration-300 ease-editorial ${
                            highlighted ? "text-accent" : "text-ink"
                          }`}
                        >
                          {link.label}
                        </span>
                        <ArrowUpRight
                          className={`h-5 w-5 transition-colors duration-300 ease-editorial ${
                            highlighted ? "text-accent" : "text-line"
                          }`}
                          strokeWidth={1.6}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Contact details */}
              <div className="mt-8 flex flex-col gap-2 text-sm text-muted">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-ink"
                >
                  {siteConfig.email}
                </a>
                <a
                  href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
                  className="transition-colors hover:text-ink"
                >
                  {siteConfig.phone}
                </a>
              </div>

                <Link
                  href="/contact"
                  className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-sm text-canvas"
                >
                  Start a Conversation
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
                </Link>
              </motion.div>
            </motion.div>
          )}
          </AnimatePresence>,
          document.body
        )}
    </header>
  );
}
