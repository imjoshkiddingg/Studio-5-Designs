import Image from "next/image";

type ImageDividerProps = {
  src: string;
  alt?: string;
};

/**
 * Full-bleed image divider used to break between sections.
 * Parallax-free, restrained — a quiet editorial pause.
 */
export function ImageDivider({ src, alt = "" }: ImageDividerProps) {
  return (
    <div className="relative h-[45vh] min-h-[320px] w-full overflow-hidden bg-ink-deep md:h-[60vh]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      {/* Subtle overlay to keep the transition quiet and on-brand */}
      <div className="absolute inset-0 bg-ink-deep/10" />
    </div>
  );
}
