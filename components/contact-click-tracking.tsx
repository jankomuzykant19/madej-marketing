"use client";

import * as React from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * One listener for the whole site: any click on a tel: or mailto: link pushes
 * `contact_click` to the dataLayer, so phone/e-mail contacts can become
 * conversions in GTM without tagging every link by hand.
 */
export function ContactClickTracking() {
  React.useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a[href]");
      const href = link?.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) {
        trackEvent("contact_click", { contact_method: "phone" });
      } else if (href.startsWith("mailto:")) {
        trackEvent("contact_click", { contact_method: "email" });
      }
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
