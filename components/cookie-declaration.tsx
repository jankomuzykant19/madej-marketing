"use client";

import * as React from "react";

const CBID = "6d52ef01-c354-42e0-b840-c17a57773018";

/**
 * Renders Cookiebot's live cookie list. The script writes the table into the
 * element it is placed in, so it is appended here on mount.
 */
export function CookieDeclaration() {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const host = ref.current;
    if (!host || host.querySelector("script")) return;
    const script = document.createElement("script");
    script.id = "CookieDeclaration";
    script.src = `https://consent.cookiebot.com/${CBID}/cd.js`;
    script.async = true;
    host.appendChild(script);
  }, []);

  return (
    <div
      ref={ref}
      className="cookie-declaration mt-4 text-sm leading-relaxed text-cream-dim [&_a]:text-gold-bright [&_a]:underline [&_table]:mt-3 [&_table]:w-full [&_td]:border-t [&_td]:border-line [&_td]:py-2 [&_td]:pr-3 [&_th]:py-2 [&_th]:pr-3 [&_th]:text-left [&_th]:text-cream"
    />
  );
}

type CookiebotWindow = Window & { Cookiebot?: { renew: () => void } };

/** Re-opens the Cookiebot consent banner so the visitor can change choices. */
export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => (window as CookiebotWindow).Cookiebot?.renew()}
      className={className}
    >
      Ustawienia cookies
    </button>
  );
}
