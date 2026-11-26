import type { CSSProperties } from "react";

export type ThemeKey = "premium";

/**
 * Colour tokens live in app/globals.css (dark by default, light under
 * `:root[data-theme="light"]`), so the light/dark switch can re-skin every
 * page. These wrapper vars only pin the font families.
 */
export const THEME_VARS: Record<ThemeKey, CSSProperties> = {
  premium: {
    ["--font-display-theme" as string]: "var(--font-display-src)",
    ["--font-body-theme" as string]: "var(--font-body-src)",
  },
};

export type ColorMode = "light" | "dark";
export const THEME_STORAGE_KEY = "mm-theme";

/**
 * Runs in <head> before first paint: picks the saved choice, else the OS
 * preference, else dark — so the page never flashes the wrong theme.
 */
export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme="dark"}})();`;
