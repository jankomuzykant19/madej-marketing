import type { CSSProperties } from "react";

export type VersionKey = "luxe" | "tech" | "youth";

export const VERSIONS: {
  key: VersionKey;
  label: string;
  hint: string;
}[] = [
  { key: "luxe", label: "Premium", hint: "elegancko i drogo" },
  { key: "tech", label: "Tech", hint: "geekowo, światełka" },
  { key: "youth", label: "Młodzieżowa", hint: "luźno i z energią" },
];

/**
 * Each version only overrides CSS custom properties. Because every component
 * styles itself with the `gold` / `cream` / `ink` design tokens (which compile
 * to `var(--color-…)`), swapping these variables re-skins the whole UI —
 * including the shared contact-lead panel — with zero component changes.
 */
export const THEME_VARS: Record<VersionKey, CSSProperties> = {
  luxe: {
    ["--color-gold" as string]: "#c9a227",
    ["--color-gold-bright" as string]: "#e6c454",
    ["--color-gold-deep" as string]: "#8a6d18",
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
    ["--font-display-src" as string]: "var(--font-tech)",
    ["--font-body-src" as string]: "var(--font-tech)",
  },
  youth: {
    ["--color-gold" as string]: "#b558f6",
    ["--color-gold-bright" as string]: "#f472b6",
    ["--color-gold-deep" as string]: "#7c3aed",
    ["--color-ink" as string]: "#0c0813",
    ["--color-ink-soft" as string]: "#120a1c",
    ["--color-panel" as string]: "#191024",
    ["--color-panel-raised" as string]: "#22152f",
    ["--color-line" as string]: "rgba(244, 114, 182, 0.16)",
    ["--color-line-strong" as string]: "rgba(244, 114, 182, 0.34)",
    ["--font-display-src" as string]: "var(--font-youth)",
  },
};
