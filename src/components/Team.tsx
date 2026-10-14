import Image from "next/image";
import { team } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Team() {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="container-editorial">
        <Reveal>
          <p className="eyebrow">Our Team</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-5 max-w-2xl font-serif text-display-md text-ink">
            The people behind the work.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.08}>
              <article className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:gap-6 sm:text-left md:flex-col md:text-left">
                <div className="relative aspect-square w-32 shrink-0 overflow-hidden rounded-full bg-line sm:w-36 md:w-40">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="160px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="mt-5 sm:mt-0 md:mt-6">
                  <h3 className="font-serif text-2xl text-ink">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm uppercase tracking-[0.12em] text-muted">
                    {member.role}
                  </p>
                  <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink/80">
                    {member.bio.map((para, j) => (
                      <p key={j}>{para}</p>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
