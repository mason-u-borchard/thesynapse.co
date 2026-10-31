// _Last updated: 2026-10-31_
//
// A single speaker avatar: a circular black-and-white headshot, or -- when
// no photo is set yet -- the Synapse flower in the speaker's field color.
// Shared by the program speaker grid and the homepage carousel so both
// render people the same way. Size is passed in so each surface can scale.

import type { FeaturedSpeaker, SpeakerAccent } from "@/content/featured-speakers";

const accentStyles: Record<SpeakerAccent, { circle: string; flower: string }> = {
  amethyst: { circle: "bg-amethyst-100", flower: "/figma/graphic-ai.svg" },
  oxide: { circle: "bg-oxide-100", flower: "/figma/graphic-robotics.svg" },
  orchid: { circle: "bg-orchid-100", flower: "/figma/graphic-cs.svg" },
  moss: { circle: "bg-moss-100", flower: "/figma/graphic-consciousness.svg" },
};

export function SpeakerAvatar({
  speaker,
  className = "h-[138px] w-[138px] md:h-[180px] md:w-[180px] lg:h-[200px] lg:w-[200px]",
}: {
  speaker: FeaturedSpeaker;
  className?: string;
}) {
  if (speaker.headshot) {
    return (
      <div className={`relative shrink-0 overflow-hidden rounded-full bg-neutral-100 ${className}`}>
        <img
          src={speaker.headshot}
          alt={speaker.name}
          className="absolute inset-0 h-full w-full object-cover grayscale"
        />
      </div>
    );
  }

  const accent = accentStyles[speaker.accent];
  return (
    <div className={`flex shrink-0 items-center justify-center rounded-full ${accent.circle} ${className}`}>
      <img
        src={accent.flower}
        alt=""
        aria-hidden="true"
        className="h-[62%] w-[62%] object-contain"
      />
    </div>
  );
}
