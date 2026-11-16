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
// plain banner and they would sit on top of the heading. Each one is a
// field-colored disc with the dark Synapse flower on top, the same build
// as the photo-less speaker avatars.

export type OrnamentTone = "orchid" | "amethyst" | "moss" | "azure" | "oxide";

const toneStyles: Record<OrnamentTone, { disc: string; flower: string }> = {
  orchid: { disc: "bg-orchid-100", flower: "/figma/graphic-cs.svg" },
  amethyst: { disc: "bg-amethyst-100", flower: "/figma/graphic-ai.svg" },
  moss: { disc: "bg-moss-100", flower: "/figma/graphic-consciousness.svg" },
  azure: { disc: "bg-azure-100", flower: "/figma/graphic-consciousness.svg" },
  oxide: { disc: "bg-oxide-100", flower: "/figma/graphic-robotics.svg" },
};

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
        <span
          key={i}
          aria-hidden="true"
          className={`pointer-events-none absolute hidden aspect-square md:flex items-center justify-center rounded-full ${toneStyles[o.tone].disc} ${o.className}`}
        >
          <img src={toneStyles[o.tone].flower} alt="" className="h-[62%] w-[62%] object-contain" />
        </span>
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
