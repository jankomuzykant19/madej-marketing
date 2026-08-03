"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { MadejLogo } from "@/components/madej-logo";
import {
  CONTACT,
  CONTACT_FORM_HREF,
  COMPANY,
  NAV_LINKS,
} from "@/components/site/nav";
import { cn } from "@/lib/utils";

/**
 * Shared footer for every page. Inherits the surrounding theme variables, so it
 * renders in the premium palette on the home/contact pages and in the tech
 * palette on "Kreacje / LP" with no extra work.
 */
export function SiteFooter() {
  const pathname = usePathname();

  return (
    <footer className="relative z-10 border-t border-line bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-10">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          {/* brand + billing details */}
          <div>
            <Link href="/" aria-label="Strona główna" className="inline-block">
              <MadejLogo />
            </Link>
            <address className="mt-5 not-italic text-sm leading-relaxed text-cream-dim">
              {COMPANY.name}
              <br />
              {COMPANY.street}
              <br />
              {COMPANY.city}
              <br />
              <span className="text-cream-faint">NIP {COMPANY.nip}</span>
            </address>
          </div>

          {/* navigation */}
          <nav aria-label="Nawigacja w stopce">
            <h2 className="text-xs font-medium uppercase tracking-[0.24em] text-gold/90">
              Nawigacja
            </h2>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className={cn(
                      "text-sm transition-colors hover:text-cream",
                      pathname === link.href ? "text-cream" : "text-cream-dim"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* contact / form */}
          <div>
            <h2 className="text-xs font-medium uppercase tracking-[0.24em] text-gold/90">
              Kontakt
            </h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={CONTACT.phone.href}
                  className="inline-flex items-center gap-2 text-sm text-cream transition-colors hover:text-gold-bright"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0 text-gold" />
                  {CONTACT.phone.label}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.email.href}
                  className="inline-flex items-center gap-2 break-all text-sm text-cream transition-colors hover:text-gold-bright"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0 text-gold" />
                  {CONTACT.email.label}
                </a>
              </li>
              <li className="pt-1.5">
                <Link
                  href={CONTACT_FORM_HREF}
                  className="inline-flex items-center gap-1.5 text-sm text-cream-dim transition-colors hover:text-cream"
                >
                  Formularz kontaktowy
                  <ArrowUpRight className="h-3.5 w-3.5 text-gold" />
                </Link>
              </li>
            </ul>
            <Link
              href={CONTACT_FORM_HREF}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-cream-dim transition-colors hover:border-gold/50 hover:text-cream"
            >
              Umów darmową rozmowę
            </Link>
          </div>
        </div>

        {/* EU funding bar — the artwork is dark-on-transparent, so it needs a
            light backing panel to stay legible on the dark layout. One strip at
            every width, simply scaled down to fit. */}
        <div className="mt-12 border-t border-line pt-10">
          <div className="rounded-2xl bg-white px-4 py-4 sm:px-6 sm:py-5">
            <Image
              src="/eu.png"
              alt="Fundusze Europejskie — Rzeczpospolita Polska — Dofinansowane przez Unię Europejską"
              width={4495}
              height={710}
              sizes="(max-width: 640px) 92vw, 1100px"
              className="h-auto w-full"
            />
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-cream-faint">
          © 2026 Madej Marketing · Marketing, który sprzedaje.
        </p>
      </div>
    </footer>
  );
}
