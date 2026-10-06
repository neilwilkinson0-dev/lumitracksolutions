import Link from "next/link";
import { nav } from "@/lib/site";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <Container className="flex h-18 items-center justify-between">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-ink-soft"
          >
            Get in touch
          </Link>
        </nav>
        <MobileNav />
      </Container>
    </header>
  );
}
