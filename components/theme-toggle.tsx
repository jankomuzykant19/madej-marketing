"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { THEME_STORAGE_KEY, type ColorMode } from "@/lib/theme";

const read = (): ColorMode =>
  document.documentElement.dataset.theme === "light" ? "light" : "dark";

/** Sun/moon switch between the light and dark site palettes. */
export function ThemeToggle({ className }: { className?: string }) {
  // null until mounted: the server can't know the visitor's theme.
  const [mode, setMode] = React.useState<ColorMode | null>(null);

  React.useEffect(() => setMode(read()), []);

  const toggle = () => {
    const next: ColorMode = read() === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* private mode — the switch still works for this visit */
    }
    setMode(next);
  };

  const label =
    mode === "light" ? "Włącz ciemny motyw" : "Włącz jasny motyw";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={cn(
        "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-cream-dim transition-colors hover:border-gold/50 hover:text-cream",
        className
      )}
    >
      {mode === "light" ? (
        <Moon className="h-[18px] w-[18px]" />
      ) : (
        <Sun className="h-[18px] w-[18px]" />
      )}
    </button>
  );
}
