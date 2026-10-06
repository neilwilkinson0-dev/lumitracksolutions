import Link from "next/link";
import { Container } from "./Container";
import { LogoMark } from "./LogoMark";

export function CtaBand({
  title = "Got a testing challenge on your mind?",
  body = "Tell me about it. A first conversation is free, and you'll come away with something useful either way.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="pb-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-amber-soft px-8 py-12 sm:px-12">
          <LogoMark
            className="pointer-events-none absolute -bottom-24 -right-16 hidden h-72 w-72 text-amber-deep/10 md:block"
            raysClassName="text-amber/60"
          />
          <div className="relative max-w-xl">
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
            <p className="mt-3 text-ink-soft">{body}</p>
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
  );
}
