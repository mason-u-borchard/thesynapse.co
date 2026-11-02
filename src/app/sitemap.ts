// _Last updated: 2026-11-02_
import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thesynapse.co";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

function url(path: string): string {
  const normalized = path === "/" ? "" : path;
  return `${siteUrl}${basePath}${normalized}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  // v2 IA: About / Ethos are primary text nav, Invest / Attend are
  // CTA buttons, FAQ is footer-only. /apply is now public and indexable
  // (live application route). /program is still noindex while the
  // committee finalizes the schedule. /constellation is unlisted.
  // The legacy /speakers, /donate, /register, /schedule paths are
  // excluded (they all redirect via next.config.js).
  const staticRoutes = ["/", "/about", "/ethos", "/attend", "/apply", "/invest", "/faq"];
  return staticRoutes.map((path) => ({
    url: url(path),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));
}
