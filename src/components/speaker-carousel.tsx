// _Last updated: 2026-10-31_
//
// Homepage "Who you'll hear from" carousel from Taylor's Figma (node 697:4550).
// A centered serif heading over a mono eyebrow, then a horizontally
// scrollable row of speaker avatars with left/right arrows. Lighter than the
// program page's banner-and-grid treatment -- this is a teaser that links
// into the program.

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
      <div className="container-gutter flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="font-serif text-[clamp(2.25rem,3vw+0.5rem,3rem)] leading-[1.2] text-off-black">
            {heading}
          </h2>
          <p className="font-mono text-sm font-light uppercase tracking-[0.3em] text-off-black/70">
            {eyebrow}
          </p>
        </div>

        <div className="relative w-full max-w-[1100px]">
          <CarouselArrow side="left" onClick={() => scroll(-1)} />
          <CarouselArrow side="right" onClick={() => scroll(1)} />

          <ul
            ref={trackRef}
            className="flex snap-x gap-8 overflow-x-auto scroll-smooth px-10 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {featuredSpeakers.map((speaker) => (
              <li
                key={speaker.name}
                className="flex shrink-0 basis-[calc(50%-1rem)] snap-start flex-col items-center gap-4 min-[560px]:basis-[calc(33.333%-1.334rem)] lg:basis-[calc(25%-1.5rem)]"
              >
                <SpeakerAvatar
                  speaker={speaker}
                  className="h-[130px] w-[130px] md:h-[150px] md:w-[150px]"
                />
                <p className="text-center font-sans text-lg font-semibold leading-[1.4] text-off-black">
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

// Circular outline arrow, vertically centered on the avatar row (avatars are
// ~150px tall and sit at the top of each card, so the arrow centers ~75px down).
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
      className={`absolute top-[65px] z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-off-black/30 bg-off-white text-off-black transition-colors hover:bg-off-black/5 min-[560px]:flex md:top-[75px] ${
        side === "left" ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"
      }`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
