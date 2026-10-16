import Image from "next/image";
import { partners } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Partners() {
  return (
    <section className="border-t border-line py-16 md:py-24">
      <div className="container-editorial">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Reveal>
              <p className="eyebrow">Our Partners</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-5 max-w-xl font-serif text-display-md text-ink">
                Fifty years of clients who continue to trust us.
              </h2>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.1}>
          <ul className="mt-16 grid grid-cols-3 gap-x-6 gap-y-10 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-5">
            {partners.map((partner) => (
              <li
                key={partner.name}
                className="group flex aspect-[3/2] items-center justify-center p-6"
                title={partner.name}
              >
                {partner.logo ? (
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={140}
                    height={72}
                    className="max-h-12 w-auto max-w-[80%] object-contain transition-transform duration-300 ease-editorial group-hover:scale-125"
                  />
                ) : (
                  <span className="text-center text-sm font-medium text-ink transition-transform duration-300 ease-editorial group-hover:scale-125">
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
