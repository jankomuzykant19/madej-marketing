import { cn } from "@/lib/utils";

interface MadejLogoProps {
  className?: string;
  /** show the wordmark next to the monogram */
  withWordmark?: boolean;
}

/**
 * Madej Marketing brand mark — a gold monogram "M" inside a rounded seal,
 * optionally followed by the wordmark.
 */
export function MadejLogo({ className, withWordmark = true }: MadejLogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="relative inline-flex h-11 w-11 items-center justify-center">
        <svg
          viewBox="0 0 48 48"
          fill="none"
          className="h-full w-full"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="mm-gold" x1="0" y1="0" x2="48" y2="48">
              <stop offset="0%" stopColor="#e6c454" />
              <stop offset="55%" stopColor="#c9a227" />
              <stop offset="100%" stopColor="#8a6d18" />
            </linearGradient>
          </defs>
          <rect
            x="1.5"
            y="1.5"
            width="45"
            height="45"
            rx="13"
            stroke="url(#mm-gold)"
            strokeWidth="1.5"
            className="opacity-70"
          />
          <path
            d="M12 34V15.5c0-.6.7-.9 1.1-.4L24 27.5l10.9-12.4c.4-.5 1.1-.2 1.1.4V34"
            stroke="url(#mm-gold)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="pointer-events-none absolute inset-0 rounded-[13px] bg-gold/10 blur-md" />
      </span>

      {withWordmark && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-xl font-semibold tracking-tight text-cream">
            Madej
          </span>
          <span className="text-[0.62rem] font-light uppercase tracking-[0.42em] text-gold/80">
            Marketing
          </span>
        </span>
      )}
    </div>
  );
}
