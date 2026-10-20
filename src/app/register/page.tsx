// _Last updated: 2026-10-18_
import type { Metadata } from "next";
import Link from "next/link";
import { KeepInLoopForm } from "@/components/keep-in-loop-form";

// #PLACEHOLDER: To preview the prototype application form on /register
// locally (e.g. for committee walkthroughs), uncomment the import below
// and follow the LIVE/PROTOTYPE swap inside RegisterPage. Revert with
// `git checkout -- src/app/register/page.tsx` before committing.
// import { ApplicationForm } from "@/components/application-form";

export const metadata: Metadata = {
  title: "Apply to Participate",
  description: "Applications for The Synapse closed on October 15, 2026. Every applicant hears back by December 1, 2026.",
};

export default function RegisterPage() {
  return (
    <div className="container-gutter py-section">
      {/* === LIVE === keep this block uncommented for production === */}
      {/* <header className="max-w-2xl">
        <p className="eyebrow mb-4">Apply</p>
        <h1 className="text-display-lg text-balance">Applications open soon.</h1>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-muted-foreground text-pretty">
          The Synapse is a curated gathering of 75 participants. Most
          places are invitation-based; a limited number will open through
          an application window that will be available soon. Leave your
          details below and we'll reach out to everyone who asked to be
          kept in the loop as soon as the window opens.
        </p>
        <p className="mt-4 max-w-prose text-sm text-muted-foreground">
          Questions in the meantime? Ask Ava -- the concierge in the
          bottom-right corner -- or use the links below.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/#apply" className="btn btn-ghost">How participation works</Link>
          <Link href="/schedule" className="btn btn-ghost">The program arc</Link>
          <Link href="/donate" className="btn btn-ghost">Support the convening</Link>
        </div>
      </header>

      <section aria-labelledby="keep-in-loop-heading" className="mt-16 max-w-2xl">
        <h2 id="keep-in-loop-heading" className="font-serif text-2xl text-ink">
          Keep me in the loop
        </h2>
        <p className="mt-3 max-w-prose text-sm text-muted-foreground">
          Tell us who you are and we'll notify you the moment the
          application opens.
        </p>
        <div className="mt-6">
          <KeepInLoopForm />
        </div>
      </section> */}
      {/* === END LIVE === */}

      {/* Form removed 2026-10-18 -- applications closed October 15. */}
      <header className="max-w-2xl">
        <p className="eyebrow mb-4">Apply</p>
        <h1 className="text-display-lg text-balance">Applications are closed.</h1>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-muted-foreground text-pretty">
          The application window closed on October 15, 2026. The team is
          reviewing the full pool together and will let every applicant
          know yes or no by December 1, 2026. If you&apos;ve already
          applied, there&apos;s nothing more you need to do.
        </p>
      </header>
    </div>
  );
}
