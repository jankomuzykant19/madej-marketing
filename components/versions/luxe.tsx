"use client";

import * as React from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import BeamsBackground from "@/components/kokonutui/beams-background";
import { MadejLogo } from "@/components/madej-logo";

const ROTATING = ["sprzedaje", "buduje markę", "przyciąga klientów", "skaluje firmę"];

const STATS = [
  { value: "8+", label: "lat na rynku" },
  { value: "120+", label: "zrealizowanych projektów" },
  { value: "x4", label: "średni wzrost leadów" },
];

export function LuxeVersion({ onContact }: { onContact: () => void }) {
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
        <header className="flex items-center justify-between pt-20 pb-6">
          <MadejLogo />
          <button
            type="button"
            onClick={onContact}
            className="hidden items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-cream-dim transition-colors hover:border-gold/50 hover:text-cream sm:inline-flex"
          >
            Skontaktuj się
          </button>
        </header>

        <main className="flex flex-1 flex-col items-center justify-center py-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/[0.06] px-4 py-1.5 text-xs uppercase tracking-[0.28em] text-gold/90"
          >
            <Sparkles className="h-3.5 w-3.5" /> Agencja marketingowa
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
            Kampanie, strony i strategie, które zamieniają uwagę w klientów.
            Powiedz nam, czego potrzebujesz — resztą zajmiemy się my.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <button
              type="button"
              onClick={onContact}
              className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-bright px-8 py-4 text-base font-semibold text-ink shadow-[0_16px_44px_-14px_rgba(201,162,39,0.8)] transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_56px_-12px_rgba(230,196,84,0.95)]"
            >
              Skontaktuj się ze mną
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="#oferta"
              className="text-sm text-cream-dim underline-offset-4 transition-colors hover:text-cream hover:underline"
            >
              Zobacz, jak pracujemy
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mt-16 grid w-full max-w-lg grid-cols-3 gap-4 border-t border-line pt-8"
          >
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="font-display text-3xl font-semibold text-gold-bright">
                  {s.value}
                </span>
                <span className="mt-1 text-xs text-cream-faint">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </main>

        <footer className="py-6 text-center text-xs text-cream-faint">
          © 2026 Madej Marketing · Zbudujmy coś, co sprzedaje.
        </footer>
      </div>
    </BeamsBackground>
  );
}
