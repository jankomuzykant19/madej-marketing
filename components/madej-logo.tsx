import { cn } from "@/lib/utils";

/**
 * Glyph outlines of "m." set in Manrope ExtraBold (800) on a 64×64 tile,
 * nudged slightly right so the pair sits optically centred. Kept as paths so
 * the mark renders identically everywhere (favicon, OG images, no web font).
 * Shared with app/icon.svg and app/apple-icon.tsx — keep them in sync.
 */
export const MARK_M_PATH =
  "M44.59 44L39.19 44L39.19 31.34Q39.19 29.22 38.19 28.04Q37.19 26.86 35.42 26.86Q34.29 26.86 33.46 27.38Q32.62 27.91 32.16 28.85Q31.69 29.79 31.69 31.02L31.69 44L26.29 44L26.29 31.34Q26.29 29.22 25.29 28.04Q24.29 26.86 22.52 26.86Q20.84 26.86 19.82 28.02Q18.79 29.18 18.79 31.02L18.79 44L13.36 44L13.36 22.57L18.12 22.57L18.12 24.91Q19.05 23.76 20.42 23.03Q22.19 22.05 24.39 22.05Q26.91 22.05 28.54 23.13Q29.86 24.02 30.62 25.39Q31.63 23.88 33.28 22.99Q35.02 22.05 37.17 22.05Q40.84 22.05 42.71 24.23Q44.59 26.4 44.59 29.91L44.59 44Z";
export const MARK_DOT_PATH = "M53.83 44L48.44 44L48.44 38.6L53.83 38.6Z";

export const MARK_GRADIENT = [
  { offset: "0%", color: "#0b8f66" },
  { offset: "50%", color: "#10b981" },
  { offset: "100%", color: "#84cc16" },
] as const;

export const MARK_INK = "#0a0a0f";

/** The "m." tile on its own — use for avatars, favicons, compact spots. */
export function MadejMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("h-11 w-11 shrink-0", className)}
      aria-hidden="true"
    >
      <defs>
        {/* identical definition in every instance, so a shared id is safe */}
        <linearGradient id="mm-mark-gradient" x1="0" y1="64" x2="64" y2="0" gradientUnits="userSpaceOnUse">
          {MARK_GRADIENT.map((s) => (
            <stop key={s.offset} offset={s.offset} stopColor={s.color} />
          ))}
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="18" fill="url(#mm-mark-gradient)" />
      <path d={MARK_M_PATH} fill={MARK_INK} />
      <path d={MARK_DOT_PATH} fill={MARK_INK} />
    </svg>
  );
}

interface MadejLogoProps {
  className?: string;
  /** show the wordmark next to the mark */
  withWordmark?: boolean;
}

/**
 * Madej Marketing brand lockup — the gradient "m." tile followed by a
 * two-line wordmark: "madej" (heavy) over "marketing" (light, muted).
 */
export function MadejLogo({ className, withWordmark = true }: MadejLogoProps) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <MadejMark />
      {withWordmark && (
        <span className="flex flex-col font-display leading-none">
          <span className="text-[1.35rem] font-extrabold tracking-[-0.03em] text-cream">
            madej
          </span>
          <span className="mt-1 text-[0.85rem] font-medium text-cream-faint">
            marketing
          </span>
        </span>
      )}
      <span className="sr-only">Madej Marketing</span>
    </span>
  );
}
