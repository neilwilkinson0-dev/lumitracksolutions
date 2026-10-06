import type { Metadata } from "next";
import { CheckIcon } from "@/components/CheckIcon";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI in assessment, assessment design, content development, delivery and migration, platform selection and product strategy for test vendors.",
};

const engagements = [
  {
    title: "Short advisory",
    body: "A few days of expert input: a review, a workshop, a second opinion before a big decision, or help shaping a plan.",
  },
  {
    title: "Defined projects",
    body: "A scoped piece of work over weeks or months, such as a platform selection, an assessment redesign or a migration, with clear outputs.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader eyebrow="Services" title="Help across the whole testing process">
        <p>
          I&apos;ve worked in almost every part of computer-based testing, so I can help wherever
          you are: designing an assessment, bringing in AI, choosing a platform or building the
          product itself.
        </p>
      </PageHeader>

      {/* Quick links */}
      <section className="border-y border-line bg-white">
        <Container className="py-5">
          <ul className="flex flex-wrap gap-2">
            {services.map((s) => (
              <li key={s.slug}>
                <a
                  href={`#${s.slug}`}
                  className="inline-block rounded-full border border-line px-4 py-1.5 text-sm font-medium text-ink-soft transition-colors hover:border-amber hover:text-ink"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid gap-6">
          {services.map((s, i) => (
            <article
              key={s.slug}
              id={s.slug}
              className="scroll-mt-28 grid gap-8 rounded-3xl border border-line bg-white p-8 sm:p-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14"
            >
              <div>
                <span className="font-display text-sm font-semibold text-amber-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-1 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  {s.title}
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-ink">{s.summary}</p>
                <p className="mt-4 leading-relaxed text-ink-soft">{s.detail}</p>
              </div>
              <div className="rounded-2xl bg-cream p-6 sm:p-7">
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">
                  Includes
                </h3>
                <ul className="mt-4 grid gap-3">
                  {s.includes.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed">
                      <CheckIcon className="mt-0.5 h-6 w-6" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </Container>
      </section>

      <section className="bg-cream py-20 sm:py-24">
        <Container>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Ways to work together
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {engagements.map((e) => (
              <div key={e.title} className="rounded-2xl bg-white p-7">
                <h3 className="font-display text-xl font-semibold">{e.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{e.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-ink-soft">
            I work with clients internationally, remotely and on site. Every engagement starts
            with a free conversation and a clear proposal, so you know the scope and cost before
            anything begins.
          </p>
        </Container>
      </section>

      <div className="pt-20">
        <CtaBand title="Not sure which of these you need?" body="That's fine. Tell me what's going on and we'll work out together where I can help." />
      </div>
    </>
  );
}
