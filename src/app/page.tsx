import Link from "next/link";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

// DRAFT COPY: service areas and wording are placeholders for review.
const services = [
  {
    title: "Platform selection & procurement",
    body: "Requirements, RFPs and vendor evaluation so you choose a test delivery or authoring platform that fits your programme, not just the demo.",
  },
  {
    title: "Paper-to-screen migration",
    body: "Planning and running the move from paper exams to on-screen or remote delivery, with candidates, centres and regulators kept on side.",
  },
  {
    title: "Delivery operations",
    body: "Test centre networks, remote proctoring, scheduling and incident handling: the operational detail that decides whether exam day goes smoothly.",
  },
  {
    title: "Item banking & content workflows",
    body: "Authoring, review and publishing processes, item bank structure and interoperability standards such as QTI.",
  },
  {
    title: "Programme reviews",
    body: "An independent look at an existing CBT programme: what is working, what is at risk, and a practical plan for what to change.",
  },
  {
    title: "Interim & project leadership",
    body: "Hands-on support to lead a launch, a platform change or a critical project through to go-live.",
  },
];

const reasons = [
  {
    title: "Practitioner, not theorist",
    body: `${site.yearsInIndustry[0].toUpperCase()}${site.yearsInIndustry.slice(1)} years working inside computer-based testing, across the problems you are facing now.`,
  },
  {
    title: "Independent",
    body: "No platform to sell and no reseller fees, so recommendations are made on your interests alone.",
  },
  {
    title: "Direct",
    body: "You work with me throughout. No hand-off to junior staff after the first meeting.",
  },
];

const steps = [
  { title: "Conversation", body: "A free, no-obligation call to understand where you are and what you need." },
  { title: "Proposal", body: "A clear scope, timeline and fixed or day-rate fee, agreed before work begins." },
  { title: "Delivery", body: "Regular check-ins and practical outputs your team can act on." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-deep text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-amber/20 blur-3xl"
        />
        <Container className="relative py-24 sm:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
            Computer-based testing consultancy
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
            Expert guidance for organisations that deliver tests on screen.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            I help awarding bodies, certification providers and testing organisations
            choose, launch and improve their computer-based testing, drawing on{" "}
            {site.yearsInIndustry} years in the industry.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-amber px-6 py-3 text-center font-semibold text-navy-deep transition-colors hover:bg-white"
            >
              Book a free conversation
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-white/25 px-6 py-3 text-center font-semibold text-white transition-colors hover:border-white/60"
            >
              See how I can help
            </Link>
          </div>
        </Container>
      </section>

      {/* Services overview */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              How I can help
            </h2>
            <p className="mt-4 text-lg text-ink-soft">
              Support at every stage of a computer-based testing programme, from the
              first business case to steady-state delivery.
            </p>
          </div>
          <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li key={s.title} className="bg-white p-7">
                <span aria-hidden="true" className="block h-1 w-8 rounded-full bg-amber" />
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{s.body}</p>
              </li>
            ))}
          </ul>
          <Link
            href="/services"
            className="mt-8 inline-flex items-center gap-1 font-semibold text-navy hover:text-ink"
          >
            Explore services <span aria-hidden="true">→</span>
          </Link>
        </Container>
      </section>

      {/* Why work with me */}
      <section className="bg-mist py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Experience you can lean on
            </h2>
            <p className="mt-4 text-lg text-ink-soft">
              Computer-based testing has changed enormously over the last two and a half
              decades. I have worked through those changes, and I bring that perspective
              to every engagement.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-1 font-semibold text-navy hover:text-ink"
            >
              More about me <span aria-hidden="true">→</span>
            </Link>
          </div>
          <dl className="grid gap-8">
            {reasons.map((r) => (
              <div key={r.title} className="border-l-2 border-amber pl-6">
                <dt className="text-lg font-semibold">{r.title}</dt>
                <dd className="mt-1 leading-relaxed text-ink-soft">{r.body}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* How it works */}
      <section className="py-20 sm:py-28">
        <Container>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Working together
          </h2>
          <ol className="mt-12 grid gap-10 md:grid-cols-3">
            {steps.map((step, i) => (
              <li key={step.title}>
                <span className="font-display text-4xl font-semibold text-amber">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <Container>
          <div className="flex flex-col items-start gap-6 rounded-3xl bg-navy px-8 py-12 text-white sm:px-12 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Planning a change to how you deliver tests?
              </h2>
              <p className="mt-2 text-white/75">
                Let&apos;s talk it through. There&apos;s no charge for a first conversation.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 rounded-full bg-amber px-6 py-3 font-semibold text-navy-deep transition-colors hover:bg-white"
            >
              Get in touch
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
