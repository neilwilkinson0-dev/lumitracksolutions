export function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-soft text-amber-deep ${className}`}
    >
      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 8.5l3 3 7-7" />
      </svg>
    </span>
  );
}
