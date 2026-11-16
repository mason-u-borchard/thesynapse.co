// _Last updated: 2026-11-16_
//
// A single speaker avatar: a circular black-and-white headshot, or -- when
// no photo is set yet -- the round flower graphic in the speaker's field
// color (Taylor's Figma "Graphic" component, public/figma/rosette-*.svg).
// Shared by the program speaker grid and the homepage carousel so both
// render people the same way. Size is passed in so each surface can scale.

import type { FeaturedSpeaker, SpeakerAccent } from "@/content/featured-speakers";

const rosettes: Record<SpeakerAccent, string> = {
  amethyst: "/figma/rosette-amethyst.svg",
  oxide: "/figma/rosette-oxide.svg",
  orchid: "/figma/rosette-orchid.svg",
  moss: "/figma/rosette-moss.svg",
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

  return (
    <img
      src={rosettes[speaker.accent]}
      alt=""
      aria-hidden="true"
      className={`shrink-0 rounded-full ${className}`}
    />
  );
}
