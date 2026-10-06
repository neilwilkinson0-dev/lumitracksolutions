import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/lib/site";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.owner} at ${site.name} for a free first conversation about your computer-based testing challenge.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Let's have a chat">
        <p>
          Tell me a little about your organisation and what you&apos;re working on. A first
          conversation is free and there&apos;s no obligation.
        </p>
      </PageHeader>

      <section className="pb-24 pt-4">
        <Container className="grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          <div className="relative">
            <ContactForm />
          </div>
          <aside className="space-y-6">
            <div className="rounded-2xl border border-line bg-white p-7">
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">
                What happens next
              </h2>
              <p className="mt-3 leading-relaxed text-ink-soft">
                Your message comes straight to me. I&apos;ll read it and reply personally to
                arrange a conversation.
              </p>
            </div>
            <div className="rounded-2xl bg-cream p-7">
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">
                Working worldwide
              </h2>
              <p className="mt-3 leading-relaxed text-ink-soft">
                I work with clients internationally, remotely and on site, and I&apos;m happy to
                arrange a call at a time that suits your time zone.
              </p>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
