import Link from "next/link";
import { nav, site } from "@/lib/site";
import { Container } from "./Container";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/70">
      <Container className="flex flex-col gap-10 py-14 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Logo inverted />
          <p className="mt-4 text-sm leading-relaxed">{site.description}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-col gap-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
      <div className="border-t border-white/10">
        <Container className="py-6 text-xs text-white/50">
          © {new Date().getFullYear()} {site.legalName}.
        </Container>
      </div>
    </footer>
  );
}
