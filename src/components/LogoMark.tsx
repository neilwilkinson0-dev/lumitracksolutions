/**
 * The Lumitrack sun-and-clipboard icon, redrawn as SVG from brand/icon-original.png.
 * Rays and the clipboard take their colour from the `raysClassName` and
 * `className` (via currentColor) so the mark can be recoloured per context.
 */
const rays = [
  [171.5, 38.5, 171.5, 17.5],
  [239, 56.6, 249.5, 38.4],
  [288.4, 106, 306.6, 95.5],
  [306.5, 173.5, 327.5, 173.5],
  [288.4, 241, 306.6, 251.5],
  [239, 290.4, 249.5, 308.6],
  [171.5, 308.5, 171.5, 329.5],
  [104, 290.4, 93.5, 308.6],
  [54.6, 241, 36.4, 251.5],
  [36.5, 173.5, 15.5, 173.5],
  [54.6, 106, 36.4, 95.5],
  [104, 56.6, 93.5, 38.4],
];

const checkRows = [159, 190, 222];

export function LogoMark({
  className = "",
  raysClassName = "",
}: {
  className?: string;
  raysClassName?: string;
}) {
  return (
    <svg
      viewBox="10 12 323 323"
      fill="none"
      stroke="currentColor"
      strokeWidth="11"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <g className={raysClassName}>
        {rays.map(([x1, y1, x2, y2]) => (
          <line key={`${x1}-${y1}`} x1={x1} y1={y1} x2={x2} y2={y2} />
        ))}
      </g>
      <circle cx="171.5" cy="173.5" r="108" />
      <rect x="115.5" y="115.5" width="112" height="133.5" rx="10" />
      <rect x="141" y="113" width="60" height="14" rx="4" fill="currentColor" strokeWidth="8" />
      <circle cx="171" cy="104" r="9" strokeWidth="8" />
      <g strokeWidth="10">
        {checkRows.map((y) => (
          <g key={y}>
            <path d={`M136 ${y} l9 9 l15 -15`} />
            <line x1="178" y1={y + 1} x2="203" y2={y + 1} />
          </g>
        ))}
      </g>
    </svg>
  );
}
