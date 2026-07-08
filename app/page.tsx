"use client";

import * as React from "react";
import { AnimatePresence, motion } from "motion/react";
import { ContactLead } from "@/components/contact-lead";
import { VersionSwitcher } from "@/components/version-switcher";
import { THEME_VARS, type VersionKey } from "@/lib/theme";
import { LuxeVersion } from "@/components/versions/luxe";
import { TechVersion } from "@/components/versions/tech";
import { YouthVersion } from "@/components/versions/youth";

const VERSION_COMPONENTS = {
  luxe: LuxeVersion,
  tech: TechVersion,
  youth: YouthVersion,
} as const;

const STORAGE_KEY = "mm-version";

export default function HomePage() {
  // Default to "luxe" on both server and first client render (avoids hydration
  // mismatch); the persisted choice is applied after mount.
  const [version, setVersion] = React.useState<VersionKey>("luxe");
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as VersionKey | null;
    if (saved && saved in VERSION_COMPONENTS) setVersion(saved);
  }, []);

  const pick = (v: VersionKey) => {
    setVersion(v);
    localStorage.setItem(STORAGE_KEY, v);
  };

  // lock scroll + ESC to close while the lead panel is open
  React.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const Version = VERSION_COMPONENTS[version];

  return (
    <div style={THEME_VARS[version]} className="relative">
      <VersionSwitcher value={version} onChange={pick} />

      <AnimatePresence mode="wait">
        <motion.div
          key={version}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <Version onContact={() => setOpen(true)} />
        </motion.div>
      </AnimatePresence>

      {/* shared, theme-aware contact lead panel */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-ink/70 backdrop-blur-sm"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="fixed inset-y-0 right-0 z-50 flex w-full max-w-xl flex-col border-l border-line bg-ink-soft shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-label="Formularz kontaktowy"
            >
              <ContactLead onClose={() => setOpen(false)} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
