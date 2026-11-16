// _Last updated: 2026-11-16_
//
// Rounded color banner with a big serif heading, a short mono eyebrow and
// a few round flower graphics scattered around the edges. Taylor's program
// Figma uses it twice: the plum "Who you'll hear from" banner and the
// green "Event Schedule" banner above the timeline. In the Figma the
// flowers drift around; for now they sit still (Taylor's Loom, 2026-11-05).
//
// Ornaments are positioned with plain Tailwind classes so each banner can
// place its own. They hide below md, where Taylor's mobile frame shows a
// plain banner and they would sit on top of the heading. Each one is the
// round flower graphic from Taylor's Figma in a field color, the same
// files the photo-less speaker avatars use.

export type OrnamentTone = "orchid" | "amethyst" | "moss" | "azure" | "oxide";

export type BannerOrnament = {
  tone: OrnamentTone;
  className: string;
};

export function SectionBanner({
  heading,
  eyebrow,
  bg,
  ornaments = [],
  headingLevel = "h2",
}: {
  heading: string;
  eyebrow?: string;
  bg: string;
  ornaments?: BannerOrnament[];
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  return (
    <div className={`relative w-full max-w-[1488px] overflow-hidden rounded-3xl px-6 py-16 text-center md:px-16 md:py-24 ${bg}`}>
      {ornaments.map((o, i) => (
        <img
          key={i}
          src={`/figma/rosette-${o.tone}.svg`}
          alt=""
          aria-hidden="true"
          className={`pointer-events-none absolute hidden aspect-square rounded-full md:block ${o.className}`}
        />
      ))}
      <div className="relative flex flex-col items-center gap-4">
        <Heading className="max-w-[903px] font-serif font-semibold text-[clamp(1.75rem,5vw+0.5rem,6.75rem)] leading-[1.15] text-true-white">
          {heading}
        </Heading>
        {eyebrow ? (
          <p className="max-w-[591px] font-mono text-sm font-light uppercase leading-[1.4] tracking-[0.14em] text-true-white">
            {eyebrow}
          </p>
        ) : null}
      </div>
    </div>
  );
}
