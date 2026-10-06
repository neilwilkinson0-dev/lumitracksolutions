import { Container } from "./Container";

export function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-gradient-to-b from-cream to-paper">
      <Container className="py-16 sm:py-24">
        <p className="inline-flex rounded-full bg-amber-soft px-4 py-1.5 text-sm font-medium text-amber-deep">
          {eyebrow}
        </p>
        <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
          {title}
        </h1>
        {children && (
          <div className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{children}</div>
        )}
      </Container>
    </section>
  );
}
