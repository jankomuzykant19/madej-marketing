"use client";

import * as React from "react";
import { AnimatePresence, motion } from "motion/react";
import { ContactLead } from "@/components/contact-lead";
import { THEME_VARS } from "@/lib/theme";

type ContactCtx = { open: () => void };
const Ctx = React.createContext<ContactCtx>({ open: () => {} });

export const useContact = () => React.useContext(Ctx);

export function ContactProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!open) return;
    // Compensate for the scrollbar so hiding overflow doesn't shift the page.
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    const prevOverflow = document.body.style.overflow;
    const prevPadding = document.body.style.paddingRight;
    document.body.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPadding;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <Ctx.Provider value={{ open: () => setOpen(true) }}>
      {children}

      {/* The contact panel always uses the premium theme, so it looks identical
          on every page (incl. the tech "Kreacje / LP" page). */}
      <div style={THEME_VARS.premium}>
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
    </Ctx.Provider>
  );
}
