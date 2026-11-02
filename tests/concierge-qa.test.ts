// _Last updated: 2026-11-01_
import { describe, expect, it } from "vitest";
import { assembleConciergePrompt } from "@/lib/concierge-prompt";

// We do not hit a live model here. Instead we verify that the
// assembled system prompt carries enough grounding that Ava COULD
// accurately answer each of the ten representative committee
// questions. If this drifts, the chatbot grounding has regressed.

const prompt = assembleConciergePrompt("anthropic");

const groundingChecks: { question: string; requires: string[] }[] = [
  { question: "When and where is the conference?", requires: ["May 3-6, 2027", "San Diego"] },
  { question: "How do I apply?", requires: ["Applications closed on October 15, 2026", "invitation"] },
  // Childcare is not decided yet, so Ava is told to defer rather than answer.
  { question: "Is childcare available?", requires: ["childcare, scholarships, press access"] },
  { question: "What accessibility accommodations are provided?", requires: ["Accessibility is a priority", "specific access needs"] },
  { question: "Who is the fiscal sponsor?", requires: ["Applied Love Labs"] },
  { question: "Can I apply for a travel grant?", requires: ["travel grant"] },
  { question: "Who are the speakers this year?", requires: ["Featured speakers", "Amber Williams", "Shamini Jain", "not the full roster", "Do NOT invent names"] },
  { question: "How many keynotes are there?", requires: ["Do NOT state a count of speakers", "speaker/attendee hierarchies"] },
  { question: "Who is organizing this?", requires: ["Julia Mossbridge", "Beth Glick", "organizing committee"] },
  { question: "How big is the conference?", requires: ["approximately 100 participants", "depth, not scale"] },
  { question: "Are you a real person?", requires: ["AI assistant", "AI concierge"] },
];

describe("concierge grounding across 10 committee-style questions", () => {
  for (const check of groundingChecks) {
    it(`grounds: "${check.question}"`, () => {
      for (const needle of check.requires) {
        expect(prompt, `missing grounding: ${needle}`).toContain(needle);
      }
    });
  }
});
