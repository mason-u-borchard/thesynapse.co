// _Last updated: 2026-10-31_
//
// "Who you'll hear from" speaker section from Taylor's Figma (node 444:603).
// A dark plum banner with a serif heading and a mono eyebrow, then a grid
// of speakers -- each a circular black-and-white headshot over a centered
// name. Speakers without a photo yet fall back to the Synapse flower in a
// field color, which is how the Figma itself handles the missing ones.
//
// Shared by the program page and the homepage; the banner heading and
// eyebrow are props so each surface can word its own.

import { featuredSpeakers, type SpeakerAccent } from "@/content/featured-speakers";

const accentStyles: Record<SpeakerAccent, { circle: string; flower: string }> = {
  amethyst: { circle: "bg-amethyst-100", flower: "/figma/graphic-ai.svg" },
  oxide: { circle: "bg-oxide-100", flower: "/figma/graphic-robotics.svg" },
  orchid: { circle: "bg-orchid-100", flower: "/figma/graphic-cs.svg" },
  moss: { circle: "bg-moss-100", flower: "/figma/graphic-consciousness.svg" },
};

export function SpeakerGrid({
  heading = "Who you'll hear from",
  eyebrow,
}: {
  heading?: string;
  eyebrow?: string;
}) {
  return (
    <section className="bg-off-white py-section">
      <div className="container-gutter flex flex-col items-center gap-12 md:gap-20">
        {/* Banner (Figma Frame 100): dark plum, rounded, serif heading over
            a mono eyebrow, with Synapse flowers peeking from the corners. */}
        <div className="relative w-full max-w-[1488px] overflow-hidden rounded-3xl bg-amethyst-300 px-6 py-16 text-center md:px-16 md:py-24">
          <img
            src="/figma/graphic-cs.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -left-8 top-6 hidden h-28 w-28 rotate-[15deg] opacity-80 md:block lg:-left-4 lg:h-32 lg:w-32"
          />
          <img
            src="/figma/graphic-ai.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-6 bottom-4 hidden h-28 w-28 -rotate-[20deg] opacity-80 md:block lg:h-32 lg:w-32"
          />
          <div className="relative flex flex-col items-center gap-4">
            <h2 className="max-w-[903px] font-serif font-semibold text-[clamp(1.75rem,5vw+0.5rem,6.75rem)] leading-[1.15] text-true-white">
              {heading}
            </h2>
            {eyebrow ? (
              <p className="max-w-[591px] font-mono text-sm font-light uppercase leading-[1.4] tracking-[0.14em] text-true-white">
                {eyebrow}
              </p>
            ) : null}
          </div>
        </div>

        {/* Speaker grid (Figma Frame 103): wrapping cards, each a circular
            avatar over a centered name. */}
        <ul className="grid w-full max-w-[1328px] grid-cols-2 gap-x-6 gap-y-12 min-[560px]:grid-cols-3 md:gap-x-14 md:gap-y-20 lg:grid-cols-4">
          {featuredSpeakers.map((speaker) => (
            <li
              key={speaker.name}
              className="flex flex-col items-center gap-4 md:gap-5"
            >
              <SpeakerAvatar speaker={speaker} />
              <p className="font-sans text-[clamp(1rem,0.5vw+0.875rem,1.375rem)] font-semibold leading-[1.4] text-off-black text-center">
                {speaker.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SpeakerAvatar({ speaker }: { speaker: (typeof featuredSpeakers)[number] }) {
  const accent = accentStyles[speaker.accent];
  const size =
    "h-[138px] w-[138px] md:h-[180px] md:w-[180px] lg:h-[200px] lg:w-[200px]";

  if (speaker.headshot) {
    return (
      <div
        className={`relative shrink-0 overflow-hidden rounded-full bg-neutral-100 ${size}`}
      >
        <img
          src={speaker.headshot}
          alt={speaker.name}
          className="absolute inset-0 h-full w-full object-cover grayscale"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full ${accent.circle} ${size}`}
    >
      <img
        src={accent.flower}
        alt=""
        aria-hidden="true"
        className="h-[62%] w-[62%] object-contain"
      />
    </div>
  );
}
