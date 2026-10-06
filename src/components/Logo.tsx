import Link from "next/link";
import { site } from "@/lib/site";

/** Placeholder wordmark until a logo file is supplied. */
export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight ${
        inverted ? "text-white" : "text-ink"
      }`}
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
        <rect width="32" height="32" rx="7" className="fill-navy" />
        <path
          d="M9 8v16h14"
          fill="none"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-white"
        />
        <circle cx="22" cy="10" r="3" className="fill-amber" />
      </svg>
      {site.name}
    </Link>
  );
}
