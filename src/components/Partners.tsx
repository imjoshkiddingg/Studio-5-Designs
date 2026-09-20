import Image from "next/image";
import { partners } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Partners() {
  return (
    <section className="border-t border-line py-24 md:py-32">
      <div className="container-editorial">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Reveal>
              <p className="eyebrow">Our Partners</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-5 max-w-xl font-serif text-display-md text-ink">
                Trusted by the custodians of national progress and industry
                leaders.
              </h2>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.1}>
          <ul className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-5">
            {partners.map((partner) => (
              <li
                key={partner.name}
                className="group flex aspect-[3/2] items-center justify-center bg-canvas p-6"
                title={partner.name}
              >
                {partner.logo ? (
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={140}
                    height={72}
                    className="max-h-12 w-auto max-w-[80%] object-contain opacity-55 grayscale transition-all duration-500 ease-editorial group-hover:opacity-100 group-hover:grayscale-0"
                  />
                ) : (
                  <span className="text-center text-sm font-medium text-muted transition-colors group-hover:text-ink">
                    {partner.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
