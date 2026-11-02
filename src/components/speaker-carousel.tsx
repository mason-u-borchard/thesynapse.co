// _Last updated: 2026-10-31_
//
// Homepage "Who you'll hear from" carousel from Taylor's Figma (node 697:4550).
// A centered serif heading over a mono eyebrow, then a horizontally
// scrollable row of speaker avatars with left/right arrows. Lighter than the
// program page's banner-and-grid treatment -- this is a teaser that links
// into the program.
//
// Spacing follows the Figma Speakers frame: 200px avatars, 20px avatar-to-name
// gap, 22px names, 56px between cards, and an 80px gap from the header to the
// row. Arrows are 60px stone circles (neutral-100 at 80%). Sizes ramp down on
// smaller screens; the fixed section rhythm (py-section) is kept so the band
// sits on the same vertical grid as the rest of the live homepage.

"use client";

import { useRef } from "react";
import Link from "next/link";
import { featuredSpeakers } from "@/content/featured-speakers";
import { SpeakerAvatar } from "./speaker-avatar";

export function SpeakerCarousel({
  heading = "Who you'll hear from",
  eyebrow = "The speakers",
}: {
  heading?: string;
  eyebrow?: string;
}) {
  const trackRef = useRef<HTMLUListElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section className="bg-off-white py-section">
      <div className="container-gutter flex flex-col items-center gap-12 md:gap-20">
        <div className="flex flex-col items-center gap-[10px] text-center">
          <h2 className="font-serif text-[clamp(2.25rem,3vw+0.5rem,3rem)] leading-[1.2] text-off-black">
            {heading}
          </h2>
          <p className="font-mono text-sm font-light uppercase tracking-[0.14em] text-off-black/70">
            {eyebrow}
          </p>
        </div>

        <div className="relative w-full max-w-[1328px]">
          <CarouselArrow side="left" onClick={() => scroll(-1)} />
          <CarouselArrow side="right" onClick={() => scroll(1)} />

          <ul
            ref={trackRef}
            className="flex snap-x gap-10 overflow-x-auto scroll-smooth px-12 pb-2 md:gap-14 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {featuredSpeakers.map((speaker) => (
              <li
                key={speaker.name}
                className="flex w-[180px] shrink-0 snap-start flex-col items-center gap-5 md:w-[270px]"
              >
                <SpeakerAvatar
                  speaker={speaker}
                  className="h-[150px] w-[150px] md:h-[200px] md:w-[200px]"
                />
                <p className="text-center font-sans text-lg font-semibold leading-[1.4] text-off-black md:text-[1.375rem]">
                  {speaker.name}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <Link
          href="/program"
          className="inline-flex h-[50px] items-center btn-outline-glow rounded-full border border-off-black/80 px-6 font-noto text-lg font-semibold text-off-black/80 transition-colors hover:bg-off-black/5"
        >
          See the program
        </Link>
      </div>
    </section>
  );
}

// Stone circle arrow (Figma: 60px, neutral-100 at 80%, 2px chevron), vertically
// centered on the avatar row -- avatars sit at the top of each card and are
// 150px tall on small screens, 200px from md up, so the arrow centers at ~75px
// / ~100px down.
function CarouselArrow({
  side,
  onClick,
}: {
  side: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={side === "left" ? "Previous speakers" : "Next speakers"}
      className={`absolute top-[75px] z-10 hidden h-[60px] w-[60px] -translate-y-1/2 items-center justify-center rounded-full bg-neutral-100/80 text-off-black transition-colors hover:bg-neutral-100 min-[560px]:flex md:top-[100px] ${
        side === "left" ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"
      }`}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d={side === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
