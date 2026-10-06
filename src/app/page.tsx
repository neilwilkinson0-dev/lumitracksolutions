import Link from "next/link";
import { CheckIcon } from "@/components/CheckIcon";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { LogoMark } from "@/components/LogoMark";
import { audiences, credential, sectors, services } from "@/lib/content";
import { site } from "@/lib/site";

const reasons = [
  {
    title: "I've seen it from the inside",
    body: "Most of my career has been at assessment vendors, working closely with providers large and small. I know how both sides think.",
  },
  {
    title: "Every part of the process",
    body: "Test centres, client support, content, assessment design, product and AI. I've worked across all of it.",
  },
  {
    title: "You work with me",
    body: "No account managers or junior hand-offs. The person you first speak to is the person who does the work.",
  },
  {
    title: "Wherever you are",
    body: "I work with clients internationally, remotely and on site, and fit around your time zone.",
  },
];

const steps = [
  { title: "We talk", body: "A free, no-obligation call about where you are and what you need." },
  { title: "I propose", body: "A clear scope, timeline and fee, agreed before any work begins." },
  { title: "We get it done", body: "Short advisory pieces or defined projects, with practical outputs your team can use." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream to-paper">
        <Container className="grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-amber-soft px-4 py-1.5 text-sm font-medium text-amber-deep">
              Computer-based testing consultancy
            </p>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
              Clear, practical help with{" "}
              <span className="box-decoration-clone bg-[linear-gradient(transparent_64%,var(--color-amber-mark)_64%,var(--color-amber-mark)_90%,transparent_90%)]">
                on-screen testing
              </span>
              .
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Hi, I&apos;m {site.owner}. I&apos;ve spent {site.yearsInIndustry} years in
              computer-based testing, from setting up test centres to leading AI product teams.
              Now I help awarding bodies, certification providers and platform vendors around the
              world design, deliver and improve their assessments.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-amber px-6 py-3 text-center font-semibold text-ink shadow-sm transition-colors hover:bg-amber/85"
              >
                Let&apos;s have a chat
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-ink/15 bg-white px-6 py-3 text-center font-semibold text-ink transition-colors hover:border-ink/40"
              >
                How I can help
              </Link>
            </div>
          </div>
          <div className="relative mx-auto hidden w-full max-w-md lg:block" aria-hidden="true">
            <div className="absolute inset-[18%] rounded-full bg-amber/25 blur-3xl" />
            <LogoMark className="relative w-full text-ink" raysClassName="text-amber" />
          </div>
        </Container>
      </section>

      {/* Credibility strip */}
      <section className="border-y border-line bg-white">
        <Container className="flex flex-col gap-4 py-6 text-sm md:flex-row md:items-center md:justify-between">
          <p className="font-semibold text-ink">{credential}</p>
          <p className="text-ink-soft">
            <span className="text-muted">High-stakes experience in </span>
            {sectors.join(" · ")}
          </p>
        </Container>
      </section>

      {/* Who I work with */}
      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
            Who I work with
          </h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {audiences.map((a) => (
              <li key={a.title} className="rounded-2xl border border-line bg-white p-7">
                <h3 className="font-display text-xl font-semibold">{a.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{a.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Services overview */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              How I can help
            </h2>
            <p className="mt-4 text-lg text-ink-soft">
              From a few days of expert input to a defined project over several months.
            </p>
          </div>
          <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li key={s.slug} className="flex gap-4">
                <CheckIcon className="mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">
                    <Link href={`/services#${s.slug}`} className="hover:text-amber-deep">
                      {s.title}
                    </Link>
                  </h3>
                  <p className="mt-1.5 leading-relaxed text-ink-soft">{s.summary}</p>
                </div>
              </li>
            ))}
          </ul>
          <Link
            href="/services"
            className="mt-12 inline-flex items-center gap-1 font-semibold text-amber-deep hover:text-ink"
          >
            More about my services <span aria-hidden="true">→</span>
          </Link>
        </Container>
      </section>

      {/* Why work with me */}
      <section className="bg-cream py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Why work with me
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              Computer-based testing has changed enormously in the last two and a half decades.
              I&apos;ve worked through those changes, in almost every role the industry has, and
              I bring that experience to every conversation.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-1 font-semibold text-amber-deep hover:text-ink"
            >
              More about me <span aria-hidden="true">→</span>
            </Link>
          </div>
          <dl className="grid gap-5 sm:grid-cols-2">
            {reasons.map((r) => (
              <div key={r.title} className="rounded-2xl bg-white p-6 shadow-[0_1px_2px_rgba(28,37,51,0.06)]">
                <dt className="font-display text-lg font-semibold">{r.title}</dt>
                <dd className="mt-2 leading-relaxed text-ink-soft">{r.body}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* How it works */}
      <section className="py-20 sm:py-28">
        <Container>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            How we&apos;d work together
          </h2>
          <ol className="mt-12 grid gap-10 md:grid-cols-3">
            {steps.map((step, i) => (
              <li key={step.title} className="border-t-2 border-amber pt-6">
                <span className="font-display text-sm font-semibold text-amber-deep">
                  Step {i + 1}
                </span>
                <h3 className="mt-1 font-display text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
