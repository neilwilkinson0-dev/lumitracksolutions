import type { Metadata } from "next";
import { CheckIcon } from "@/components/CheckIcon";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";
import { careerHighlights, credential, sectors } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `${site.owner}, founder of ${site.name}: ${site.yearsInIndustry} years in computer-based testing, from test centres to AI product leadership.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About" title={`Hi, I'm ${site.owner}.`}>
        <p>
          I&apos;ve spent {site.yearsInIndustry} years in computer-based testing, and I&apos;ve
          worked in almost every part of it. In {site.founded} I set up {site.name} to put that
          experience to work for organisations across the industry.
        </p>
      </PageHeader>

      <section className="py-16 sm:py-24">
        <Container className="grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-ink-soft">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
              My background
            </h2>
            <p>
              My career has taken me through all aspects of the industry. I&apos;ve set up test
              centres and supported clients through delivery, led a content development team,
              designed large, high-stakes assessments, and led product teams working at the
              cutting edge of technology, AI and assessment.
            </p>
            <p>
              Most of that time was spent at assessment vendors, working closely with assessment
              providers large and small, on both projects and long-term partnerships. So I know
              how vendors think, and I know what assessment providers need from them.
            </p>
            <p>
              I&apos;ve worked on assessments at every stage, from initial design to revamping
              long-running exams, in IT certification, university entrance, legal, medical and
              financial testing.
            </p>
            <p>
              AI is changing assessment fast, and it&apos;s an area I know well. My teams have
              applied it across content generation and review, automated test assembly, enemy
              detection and marketing, along with the software and processes that hold it all
              together.
            </p>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl bg-amber-soft p-7">
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-amber-deep">
                Industry role
              </h2>
              <p className="mt-3 font-display text-xl font-semibold leading-snug">{credential}</p>
            </div>
            <div className="rounded-2xl border border-line bg-white p-7">
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">
                What I&apos;ve done
              </h2>
              <ul className="mt-4 grid gap-3">
                {careerHighlights.map((h) => (
                  <li key={h} className="flex gap-3 leading-relaxed">
                    <CheckIcon className="mt-0.5 h-6 w-6" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-line bg-white p-7">
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">
                High-stakes sectors
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {sectors.map((s) => (
                  <li key={s} className="rounded-full bg-cream px-3.5 py-1.5 text-sm font-medium">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </section>

      <section className="bg-cream py-20 sm:py-24">
        <Container className="max-w-3xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            How I work
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>
              When you work with {site.name}, you work with me directly. I take on short advisory
              pieces and defined projects, so every engagement has a clear purpose, scope and
              outcome.
            </p>
            <p>
              I work with clients around the world, remotely and on site, and I&apos;m always happy
              to start with an informal conversation to see whether I&apos;m the right fit.
            </p>
          </div>
        </Container>
      </section>

      <div className="pt-20">
        <CtaBand title="Let's talk" body="Whether you have a specific project in mind or just want a second opinion, I'd be glad to hear from you." />
      </div>
    </>
  );
}
