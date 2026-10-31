// _Last updated: 2026-10-31_
//
// The curated "Who you'll hear from" lineup, shared by the program page
// and the homepage speakers carousel. This is not the full roster -- it is
// the set we highlight while the program fills in, so it is expected to
// grow and change.
//
// headshot: path under /public. Leave it off and the card falls back to
// the Synapse flower in `accent`'s color, so a speaker without a photo
// still looks intentional. Photos are rendered black-and-white in the UI.
//
// accent picks the flower color for the photo-less fallback and cycles
// through the four field colors for variety:
//   amethyst (AI) · oxide (robotics) · orchid (cognitive science) · moss (consciousness)

export type SpeakerAccent = "amethyst" | "oxide" | "orchid" | "moss";

export interface FeaturedSpeaker {
  name: string;
  headshot?: string;
  accent: SpeakerAccent;
}

export const featuredSpeakers: FeaturedSpeaker[] = [
  { name: "Amber Williams", headshot: "/figma/speakers/amber-williams.jpg", accent: "amethyst" },
  { name: "Annalisa Ventola", headshot: "/figma/speakers/annalisa-ventola.jpg", accent: "oxide" },
  { name: "Carole Griggs", headshot: "/figma/speakers/carole-griggs.jpg", accent: "orchid" },
  { name: "Dani Caputi", headshot: "/figma/speakers/dani-caputi.jpg", accent: "moss" },
  { name: "Danielle Boyer", accent: "oxide" },
  { name: "Divya Chander", headshot: "/figma/speakers/divya-chander.jpg", accent: "amethyst" },
  { name: "Helané Wahbeh", headshot: "/figma/speakers/helane-wahbeh.jpg", accent: "oxide" },
  { name: "Julia Mossbridge", headshot: "/figma/speakers/julia-mossbridge.jpg", accent: "orchid" },
  { name: "Mason Borchard", headshot: "/figma/speakers/mason-borchard.jpg", accent: "moss" },
  { name: "Monica Anderson", accent: "amethyst" },
  { name: "Nirosha Murugan", headshot: "/figma/speakers/nirosha-murugan.jpg", accent: "moss" },
  { name: "Polly Washburn", headshot: "/figma/speakers/polly-washburn.jpg", accent: "amethyst" },
  { name: "Rachel Grunspan", headshot: "/figma/speakers/rachel-grunspan.jpg", accent: "oxide" },
  { name: "Rebecca Armstrong", headshot: "/figma/speakers/rebecca-armstrong.jpg", accent: "orchid" },
  { name: "Sarah Withee", headshot: "/figma/speakers/sarah-withee.png", accent: "moss" },
  { name: "Shamini Jain", headshot: "/figma/speakers/shamini-jain.jpg", accent: "amethyst" },
];
