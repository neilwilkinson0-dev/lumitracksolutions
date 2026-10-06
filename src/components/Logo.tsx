import Link from "next/link";
import { site } from "@/lib/site";
import { LogoMark } from "./LogoMark";

/** Icon plus wordmark, set in Outfit to match brand/logo-original.png. */
export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} home`}
      className={`flex items-center gap-2.5 ${inverted ? "text-white" : "text-ink"}`}
    >
      <LogoMark className="h-10 w-10" raysClassName="text-amber" />
      <span className="flex flex-col font-display leading-none">
        <span className="text-[1.35rem] font-semibold tracking-tight">LUMITRACK</span>
        <span className="mt-1 text-[0.62rem] font-medium tracking-[0.42em]">SOLUTIONS</span>
      </span>
    </Link>
  );
}
