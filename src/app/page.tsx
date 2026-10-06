import Link from "next/link";
import { Container } from "@/components/Container";
import { LogoMark } from "@/components/LogoMark";
import { site } from "@/lib/site";

// DRAFT COPY: wording to be refined with the owner during the content interview.
const audiences = [
  {
    title: "Awarding bodies",
    body: "Exam boards and qualification bodies moving to, or getting more from, on-screen assessment.",
  },
  {
    title: "Certification providers",
    body: "Professional and IT certification programmes delivering exams at scale, in test centres or online.",
  },
  {
    title: "Test platform vendors",
    body: "Companies building delivery, authoring or proctoring products who want an insider's view of what buyers need.",
  },
];

const services = [
  {
    title: "Platform selection & procurement",
    body: "Requirements, RFPs and vendor evaluation, so you choose a platform that fits your programme, not just the demo.",
  },
  {
    title: "Paper-to-screen migration",
    body: "Planning the move to on-screen or remote delivery, with candidates, centres and regulators kept on side.",
  },
  {
    title: "Delivery operations",
    body: "Test centres, remote proctoring, scheduling and incident handling: the detail that decides how exam day goes.",
  },
  {
    title: "Item banking & content workflows",
    body: "Authoring, review and publishing processes, item bank structure and standards such as QTI.",
  },
  {
    title: "Programme reviews",
    body: "An independent look at an existing programme: what's working, what's at risk and what to change.",
  },
  {
    title: "Advice for vendors",
    body: "Product direction, market insight and bid readiness from someone who has sat on the buyer's side.",
  },
];

const reasons = [
  {
    title: "I've done the job",
    body: `${site.yearsInIndustry[0].toUpperCase()}${site.yearsInIndustry.slice(1)} years working in computer-based testing means I've usually seen your problem before, and what fixed it.`,
  },
  {
    title: "Independent advice",
    body: "I don't resell platforms or take referral fees, so my recommendations are made in your interests alone.",
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
  { title: "We get it done", body: "Short advisory pieces or longer projects, with practical outputs your team can use." },
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
              I&apos;ve spent {site.yearsInIndustry} years in computer-based testing. Now I help
              awarding bodies, certification providers and platform vendors around the world
              make better decisions, avoid costly mistakes and deliver exams that work.
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
              <li key={s.title} className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-soft text-amber-deep"
                >
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8.5l3 3 7-7" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-ink-soft">{s.body}</p>
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
              I&apos;ve worked through those changes, and I bring that experience to every
              conversation.
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

      {/* CTA */}
      <section className="pb-24">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-amber-soft px-8 py-12 sm:px-12">
            <LogoMark
              className="pointer-events-none absolute -bottom-24 -right-16 hidden h-72 w-72 text-amber-deep/10 md:block"
              raysClassName="text-amber/60"
            />
            <div className="relative max-w-xl">
              <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Got a testing challenge on your mind?
              </h2>
              <p className="mt-3 text-ink-soft">
                Tell me about it. A first conversation is free, and you&apos;ll come away with
                something useful either way.
              </p>
              <Link
                href="/contact"
                className="mt-7 inline-block rounded-full bg-ink px-6 py-3 font-semibold text-white transition-colors hover:bg-ink-soft"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
