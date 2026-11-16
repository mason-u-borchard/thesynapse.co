// _Last updated: 2026-11-16_
//
// "Who you'll hear from" speaker section from Taylor's Figma (node 444:603).
// A dark plum banner with a serif heading and a mono eyebrow, then a grid
// of speakers -- each a circular black-and-white headshot over a centered
// name. Speakers without a photo yet fall back to the Synapse flower in a
// field color, which is how the Figma itself handles the missing ones.
//
// Shared by the program page and the homepage; the banner heading and
// eyebrow are props so each surface can word its own.

import { featuredSpeakers } from "@/content/featured-speakers";
import { SpeakerAvatar } from "./speaker-avatar";
import { SectionBanner } from "./section-banner";

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
        {/* Banner (Figma Frame 100): dark plum, serif heading over a mono
            eyebrow. Flowers per Taylor's 2026-11-05 Loom: a pink and lilac
            pair overlapping just left of the heading, a lilac one low in
            the left corner and a pink one up on the right. */}
        <SectionBanner
          heading={heading}
          eyebrow={eyebrow}
          bg="bg-amethyst-300"
          ornaments={[
            { tone: "orchid", className: "left-[11%] top-[12%] w-[9%] min-w-[44px] rotate-[12deg]" },
            { tone: "amethyst", className: "left-[12%] top-[36%] w-[9%] min-w-[44px] -rotate-[8deg]" },
            { tone: "amethyst", className: "left-[4%] bottom-[8%] w-[8%] min-w-[38px] rotate-[20deg]" },
            { tone: "orchid", className: "right-[13%] top-[18%] w-[8%] min-w-[38px] -rotate-[15deg]" },
          ]}
        />

        {/* Speaker grid (Figma Frame 103): wrapping cards, each a circular
            avatar over a centered name. Flex-wrap rather than CSS grid so
            a short last row centers (17 people in rows of 4 left one alone
            on the left). Item widths reproduce 2 / 3 / 4 columns. */}
        <ul className="flex w-full max-w-[1328px] flex-wrap justify-center gap-x-6 gap-y-12 md:gap-x-14 md:gap-y-20">
          {featuredSpeakers.map((speaker) => (
            <li
              key={speaker.name}
              className="flex w-[calc((100%-1.5rem)/2)] flex-col items-center gap-4 min-[560px]:w-[calc((100%-3rem)/3)] md:w-[calc((100%-7rem)/3)] md:gap-5 lg:w-[calc((100%-10.5rem)/4)]"
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
