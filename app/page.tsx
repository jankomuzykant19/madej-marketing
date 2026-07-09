"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Layers,
  LineChart,
  MessagesSquare,
  Map,
  Rocket,
  Search,
  Clapperboard,
} from "lucide-react";
import BeamsBackground from "@/components/kokonutui/beams-background";
import { ContactProvider, useContact } from "@/components/contact-provider";
import { SiteHeader } from "@/components/site/site-header";
import { NextSteps } from "@/components/site/next-steps";
import { THEME_VARS } from "@/lib/theme";

const ROTATING = ["sprzedaje", "buduje markę", "przyciąga klientów", "skaluje firmę"];

const WHY = [
  {
    icon: Layers,
    title: "Wszystko w jednych rękach",
    text: "Nie zostawiam Cię z gotową stroną, na którą nikt nie wchodzi. Tworzę miejsce w sieci, a potem sprowadzam tam Twoich klientów.",
  },
  {
    icon: LineChart,
    title: "Decyzje oparte na danych",
    text: "Nie przepalam budżetów na „ładne reklamy”. Skupiam się na mierzalnych wynikach — leadach i sprzedaży.",
  },
  {
    icon: MessagesSquare,
    title: "Bezpośredni kontakt",
    text: "Rozmawiasz bezpośrednio z osobą, która tworzy Twój projekt i „wyklikuje” reklamy. Szybki kontakt i pełna elastyczność.",
  },
];

const SERVICES = [
  {
    icon: Map,
    title: "Pełna strategia marketingowa",
    text: "Układam logiczny plan działania dopasowany do budżetu. Określamy cele, grupę docelową i kanały, którymi najszybciej dotrzemy do Twoich klientów.",
  },
  {
    icon: Rocket,
    title: "Wdrożenie pierwszych działań",
    text: "Przechodzę od słów do czynów. Konfiguruję analitykę, uruchamiam pierwsze kampanie (Meta Ads / Google Ads) i dbam, by od początku pracowały na Twój zysk.",
  },
  {
    icon: Search,
    title: "Audyt działań i kont reklamowych",
    text: "Sprawdzam profile, reklamy i statystyki. Znajduję błędy, eliminuję przepalanie budżetu i wskazuję miejsca do natychmiastowej poprawy.",
  },
  {
    icon: Clapperboard,
    title: "Kreacje i landing page’e",
    text: "Projektuję nowoczesne, szybkie strony sprzedażowe oraz materiały reklamowe — zoptymalizowane tak, by maksymalnie ułatwić kontakt lub zakup.",
    href: "/kreacje",
    hrefLabel: "Zobacz stronę o kreacjach",
  },
];

/* ------------------------------------------------------------------ */

function Hero() {
  const { open } = useContact();
  const [word, setWord] = React.useState(0);

  React.useEffect(() => {
    const t = window.setInterval(
      () => setWord((w) => (w + 1) % ROTATING.length),
      2400
    );
    return () => window.clearInterval(t);
  }, []);

  return (
    <BeamsBackground intensity="medium">
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,transparent,rgba(10,10,15,0.6)_70%,rgba(10,10,15,0.95))]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 sm:px-10">
        <main className="flex flex-1 flex-col items-center justify-center py-24 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/[0.06] px-4 py-1.5 text-xs uppercase tracking-[0.28em] text-gold/90"
          >
            <Sparkles className="h-3.5 w-3.5" /> Marketing &amp; performance
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-cream sm:text-6xl md:text-7xl"
          >
            Marketing, który
            <br />
            <span className="relative inline-block h-[1.15em] overflow-hidden align-bottom">
              <AnimatePresence mode="wait">
                <motion.span
                  key={word}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="text-gold-shimmer inline-block"
                >
                  {ROTATING[word]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-cream-dim sm:text-lg"
          >
            Tworzę miejsce w sieci i sprowadzam tam Twoich klientów. Kampanie,
            strony i strategie oparte na danych — nie na zgadywaniu.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <button
              type="button"
              onClick={open}
              className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-bright px-8 py-4 text-base font-semibold text-ink shadow-[0_16px_44px_-14px_color-mix(in_srgb,var(--color-gold)_80%,transparent)] transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_56px_-12px_color-mix(in_srgb,var(--color-gold-bright)_90%,transparent)]"
            >
              Umów się na darmową rozmowę
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="#uslugi"
              className="text-sm text-cream-dim underline-offset-4 transition-colors hover:text-cream hover:underline"
            >
              Zobacz, jak pracuję
            </a>
          </motion.div>
        </main>

        <div className="py-6 text-center text-xs text-cream-faint">
          Przewiń niżej — pokażę Ci, jak to działa
        </div>
      </div>
    </BeamsBackground>
  );
}

function SectionHeading({
  eyebrow,
  title,
  id,
}: {
  eyebrow: string;
  title: string;
  id?: string;
}) {
  return (
    <div id={id} className="mx-auto max-w-2xl text-center">
      <p className="mb-3 text-xs uppercase tracking-[0.28em] text-gold/90">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold leading-tight text-cream sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function Why() {
  return (
    <section className="relative px-6 py-24 sm:px-10">
      <SectionHeading eyebrow="Dlaczego ja" title="Dlaczego warto ze mną współpracować?" />
      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-3">
        {WHY.map((w, i) => (
          <motion.div
            key={w.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-3xl border border-line bg-panel/50 p-7 transition-colors hover:border-gold/40"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-gold-bright">
              <w.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold text-cream">
              {w.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-cream-dim">{w.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="relative border-t border-line px-6 py-24 sm:px-10">
      <SectionHeading id="uslugi" eyebrow="Usługi" title="W czym mogę Ci pomóc?" />
      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2">
        {SERVICES.map((s, i) => {
          const inner = (
            <>
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-gold-bright">
                <s.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 flex items-center gap-2 font-display text-xl font-semibold text-cream">
                {s.title}
                {s.href && (
                  <ArrowUpRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                )}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream-dim">
                {s.text}
              </p>
              {s.href && (
                <span className="mt-4 inline-block text-sm font-medium text-gold-bright">
                  {s.hrefLabel} →
                </span>
              )}
            </>
          );

          const cls =
            "group rounded-3xl border border-line bg-panel/50 p-7 transition-colors hover:border-gold/40";

          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
            >
              {s.href ? (
                <Link href={s.href} className={`block ${cls}`}>
                  {inner}
                </Link>
              ) : (
                <div className={cls}>{inner}</div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-line px-6 py-10 text-center text-xs text-cream-faint sm:px-10">
      © 2026 Madej Marketing · Marketing, który sprzedaje.
    </footer>
  );
}

export default function HomePage() {
  return (
    <div style={THEME_VARS.premium} className="relative bg-ink">
      <ContactProvider>
        <SiteHeader />
        <Hero />
        <main className="relative bg-ink">
          <Why />
          <Services />
          <NextSteps />
        </main>
        <SiteFooter />
      </ContactProvider>
    </div>
  );
}
