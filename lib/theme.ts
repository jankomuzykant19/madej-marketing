import type { CSSProperties } from "react";

export type ThemeKey = "premium" | "tech";

/**
 * Themes only override CSS custom properties. Every component styles itself with
 * the `gold` / `cream` / `ink` design tokens (which compile to `var(--color-…)`),
 * so swapping these variables re-skins the whole subtree — including the shared
 * contact-lead panel — with zero component changes.
 *
 * `premium` = the main site (emerald → lime).
 * `tech`    = the "Kreacje / Landing Page" page (near-black + neon green, mono).
 */
export const THEME_VARS: Record<ThemeKey, CSSProperties> = {
  premium: {
    ["--color-gold" as string]: "#10B981",
    ["--color-gold-bright" as string]: "#84CC16",
    ["--color-gold-deep" as string]: "#0b8f66",
    // reset fonts back to the base families (undoes any inherited theme font,
    // so the shared contact panel always reads as the premium/home style)
    ["--font-display-theme" as string]: "var(--font-display-src)",
    ["--font-body-theme" as string]: "var(--font-body-src)",
  },
  tech: {
    ["--color-gold" as string]: "#22e39a",
    ["--color-gold-bright" as string]: "#6bffbe",
    ["--color-gold-deep" as string]: "#0f9d63",
    ["--color-ink" as string]: "#04060a",
    ["--color-ink-soft" as string]: "#070b12",
    ["--color-panel" as string]: "#0a0f18",
    ["--color-panel-raised" as string]: "#0e1420",
    ["--color-line" as string]: "rgba(107, 255, 190, 0.12)",
    ["--color-line-strong" as string]: "rgba(107, 255, 190, 0.28)",
    ["--font-display-theme" as string]: "var(--font-tech)",
    ["--font-body-theme" as string]: "var(--font-tech)",
  },
};
