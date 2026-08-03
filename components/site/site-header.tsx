"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { MadejLogo } from "@/components/madej-logo";
import { useContact } from "@/components/contact-provider";
import { NAV_LINKS } from "@/components/site/nav";
import { cn } from "@/lib/utils";
import { THEME_VARS } from "@/lib/theme";

export function SiteHeaderSpacer() {
  return <div className="h-[92px] shrink-0" aria-hidden="true" />;
}

export function SiteHeader() {
  const { open } = useContact();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = React.useState(false);

  /* The contact page already renders the form inline, so there the CTA scrolls
     to it instead of opening a second copy in the slide-over panel. */
  const onContactPage = pathname === "/kontakt";

  // Close the burger on navigation and on Escape.
  React.useEffect(() => setMenuOpen(false), [pathname]);

  React.useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header
      style={THEME_VARS.premium}
      className="fixed inset-x-0 top-0 z-50 bg-ink/80 backdrop-blur-md"
    >
      <div className="mx-auto flex h-[92px] max-w-6xl items-center justify-between px-6 sm:px-10">
        <Link href="/" aria-label="Strona główna" className="shrink-0">
          <MadejLogo />
        </Link>

        {/* desktop nav */}
        {/* Desktop nav only from md — at 640px the four items wrap onto two lines. */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={cn(
                "text-sm transition-colors hover:text-cream",
                pathname === link.href ? "text-cream" : "text-cream-dim"
              )}
            >
              {link.label}
            </Link>
          ))}

          {onContactPage ? (
            <a
              href="#formularz"
              className="inline-flex shrink-0 items-center rounded-full border border-line px-5 py-2.5 text-sm text-cream-dim transition-colors hover:border-gold/50 hover:text-cream"
            >
              Skontaktuj się
            </a>
          ) : (
            <button
              type="button"
              onClick={open}
              className="inline-flex shrink-0 items-center rounded-full border border-line px-5 py-2.5 text-sm text-cream-dim transition-colors hover:border-gold/50 hover:text-cream"
            >
              Skontaktuj się
            </button>
          )}
        </nav>

        {/* mobile burger */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-cream-dim transition-colors hover:border-gold/50 hover:text-cream md:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-nav"
            key="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-line bg-ink/95 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col px-6 py-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className={cn(
                      "block border-b border-line py-4 text-base transition-colors hover:text-cream",
                      pathname === link.href ? "text-cream" : "text-cream-dim"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="px-6 pb-6">
              {onContactPage ? (
                <a
                  href="#formularz"
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-bright px-6 py-3.5 text-center text-sm font-semibold text-ink"
                >
                  Skontaktuj się
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    open();
                  }}
                  className="w-full rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-bright px-6 py-3.5 text-center text-sm font-semibold text-ink"
                >
                  Skontaktuj się
                </button>
              )}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
