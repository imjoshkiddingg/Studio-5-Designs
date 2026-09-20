import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-editorial flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-6 font-serif text-display-md text-ink">
        This page found no form.
      </h1>
      <p className="mt-4 max-w-md text-muted">
        The page you&apos;re looking for may have moved or never existed.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-ink px-6 py-3 text-sm text-canvas transition-colors hover:bg-ink-deep"
      >
        Return home
      </Link>
    </section>
  );
}
