"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { MadejLogo } from "@/components/madej-logo";
import { useContact } from "@/components/contact-provider";
import { cn } from "@/lib/utils";
import { THEME_VARS } from "@/lib/theme";

const navLinkClass =
  "hidden min-w-[6.5rem] text-sm sm:inline";

export function SiteHeaderSpacer() {
  return <div className="h-[92px] shrink-0" aria-hidden="true" />;
}

export function SiteHeader() {
  const { open } = useContact();
  const pathname = usePathname();
  const onKreacje = pathname === "/kreacje";

  return (
    <header
      style={THEME_VARS.premium}
      className="fixed inset-x-0 top-0 z-50 bg-ink/80 backdrop-blur-md"
    >
      <div className="mx-auto flex h-[92px] max-w-6xl items-center justify-between px-6 sm:px-10">
        <Link href="/" aria-label="Strona główna" className="shrink-0">
          <MadejLogo />
        </Link>

        <nav className="flex items-center gap-2 sm:gap-4">
          {onKreacje ? (
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-cream-dim transition-colors hover:text-cream"
            >
              <ArrowLeft className="h-4 w-4" /> Strona główna
            </Link>
          ) : (
            <Link
              href="/kreacje"
              className={cn(
                navLinkClass,
                "text-cream-dim transition-colors hover:text-cream"
              )}
            >
              Kreacje / LP
            </Link>
          )}

          <button
            type="button"
            onClick={open}
            className="inline-flex shrink-0 items-center rounded-full border border-line px-5 py-2.5 text-sm text-cream-dim transition-colors hover:border-gold/50 hover:text-cream"
          >
            Skontaktuj się
          </button>
        </nav>
      </div>
    </header>
  );
}
