import Image from "next/image";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Testimonials() {
  if (!testimonials.length) return null;

  return (
    <section className="border-t border-line py-16 md:py-24">
      <div className="container-editorial">
        <Reveal>
          <p className="eyebrow">In Their Words</p>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-14">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.08}>
              <figure className="flex h-full flex-col">
                <Quote className="h-7 w-7 text-accent" strokeWidth={1.4} />
                <blockquote className="mt-6 font-serif text-2xl italic leading-snug text-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 text-sm text-muted">
                  {t.image && (
                    <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-line">
                      <Image
                        src={t.image}
                        alt={t.author}
                        fill
                        sizes="44px"
                        className="object-cover"
                      />
                    </span>
                  )}
                  <span className="text-ink">{t.author}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
