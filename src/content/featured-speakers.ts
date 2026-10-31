// _Last updated: 2026-10-31_
//
// The curated "Who you'll hear from" lineup, shared by the program page
// and the homepage speakers section. This is not the full roster -- it is
// the set we highlight while the program fills in, so it is expected to
// grow and change.
//
// headshot: path under /public once we have the black-and-white version.
// Leave it off and the card falls back to the Synapse flower in `accent`'s
// color, so a speaker without a photo still looks intentional.
//
// accent picks the flower color for the photo-less fallback and cycles
// through the four field colors for visual variety:
//   amethyst (AI) · oxide (robotics) · orchid (cognitive science) · moss (consciousness)

export type SpeakerAccent = "amethyst" | "oxide" | "orchid" | "moss";

export interface FeaturedSpeaker {
  name: string;
  headshot?: string;
  accent: SpeakerAccent;
}

export const featuredSpeakers: FeaturedSpeaker[] = [
  { name: "Amber Williams", accent: "amethyst" },
  { name: "Annalisa Ventola", accent: "oxide" },
  { name: "Carole Griggs", accent: "orchid" },
  { name: "Dani Caputi", accent: "moss" },
  { name: "Divya Chander", accent: "amethyst" },
  { name: "Helané Wahbeh", accent: "oxide" },
  { name: "Nirosha Murugan", accent: "orchid" },
  { name: "Polly Washburn", accent: "moss" },
  { name: "Rachel Grunspan", accent: "amethyst" },
  { name: "Rebecca Armstrong", accent: "oxide" },
  { name: "Sarah Withee", accent: "orchid" },
  { name: "Shamini Jain", accent: "moss" },
];
