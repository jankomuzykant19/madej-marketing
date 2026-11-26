import type { CSSProperties } from "react";

export type ThemeKey = "premium";

/**
 * Themes only override CSS custom properties. Every component styles itself with
 * the `gold` / `cream` / `ink` design tokens (which compile to `var(--color-…)`),
 * so swapping these variables re-skins the whole subtree with zero component
 * changes.
 *
 * `premium` = the site palette (emerald → lime) used on every page.
 */
export const THEME_VARS: Record<ThemeKey, CSSProperties> = {
  premium: {
    ["--color-gold" as string]: "#10B981",
    ["--color-gold-bright" as string]: "#84CC16",
    ["--color-gold-deep" as string]: "#0b8f66",
    ["--font-display-theme" as string]: "var(--font-display-src)",
    ["--font-body-theme" as string]: "var(--font-body-src)",
  },
};
