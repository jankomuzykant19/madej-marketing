"use client";

import * as React from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkle } from "lucide-react";
import { MadejLogo } from "@/components/madej-logo";

const VIBES = ["✦ social media", "✦ reels które lecą", "✦ real ludzie", "✦ real wyniki"];

const CARDS = [
  { emoji: "🚀", value: "2×", label: "więcej zasięgów w 90 dni" },
  { emoji: "💬", value: "24h", label: "tyle czekasz na odpowiedź" },
  { emoji: "🔥", value: "50+", label: "marek, które ogarnąłem" },
];

export function YouthVersion({ onContact }: { onContact: () => void }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-ink font-body text-cream">
      {/* floating gradient blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-gold-deep/40 blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[-6rem] top-1/3 h-[26rem] w-[26rem] rounded-full bg-gold-bright/30 blur-[120px]"
        animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-[-8rem] left-1/3 h-[24rem] w-[24rem] rounded-full bg-gold/30 blur-[130px]"
        animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 sm:px-10">
        <header className="flex items-center justify-between pt-20 pb-6">
          <MadejLogo />
          <button
            type="button"
            onClick={onContact}
            className="hidden rounded-full border-2 border-gold/60 px-5 py-2.5 text-sm font-semibold text-cream transition-all hover:bg-gold hover:text-ink sm:inline-flex"
          >
            napisz do mnie 👋
          </button>
        </header>

        <main className="flex flex-1 flex-col justify-center py-12">
          <motion.span
            initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: -3 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-2xl bg-gold px-4 py-2 text-sm font-bold text-ink shadow-[0_10px_30px_-10px_var(--color-gold)]"
          >
            <Sparkle className="h-4 w-4" /> cześć, tu Madej ✌️
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl font-display text-5xl font-bold leading-[0.98] tracking-tight text-cream sm:text-7xl md:text-[5.5rem]"
          >
            Robię marketing,
            <br />
            który ludzie{" "}
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10 text-ink">zapamiętują</span>
              <motion.span
                aria-hidden
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                className="absolute inset-x-[-0.15em] bottom-[0.05em] top-[0.12em] -z-0 origin-left -rotate-1 rounded-lg bg-gradient-to-r from-gold-deep via-gold to-gold-bright"
              />
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-cream-dim"
          >
            Bez korpo-ściemy i buzzwordów na siłę. Ogarniam Ci social, kampanie i
            treści, które faktycznie sprzedają — a Ty robisz swoje. 🤝
          </motion.p>

          {/* vibe tags */}
          <div className="mt-7 flex flex-wrap gap-2.5">
            {VIBES.map((v) => (
              <span
                key={v}
                className="rounded-full border-2 border-line-strong px-4 py-2 text-sm font-medium text-cream-dim"
              >
                {v}
              </span>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <button
              type="button"
              onClick={onContact}
              className="group inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-gold-deep via-gold to-gold-bright px-8 py-4 text-lg font-bold text-ink shadow-[0_16px_40px_-12px_var(--color-gold)] transition-all hover:-translate-y-1 hover:shadow-[0_24px_54px_-10px_var(--color-gold-bright)]"
            >
              Pogadajmy 🎯
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <span className="text-sm text-cream-faint">
              zero zobowiązań · odpiszę tego samego dnia
            </span>
          </motion.div>

          {/* fun cards */}
          <div className="mt-14 grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
            {CARDS.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="rounded-3xl border-2 border-line bg-panel/60 p-5 transition-transform hover:-translate-y-1 hover:border-gold/50"
              >
                <span className="text-3xl">{c.emoji}</span>
                <p className="mt-3 font-display text-3xl font-bold text-gold-bright">
                  {c.value}
                </p>
                <p className="mt-1 text-sm text-cream-dim">{c.label}</p>
              </motion.div>
            ))}
          </div>
        </main>

        <footer className="py-6 text-sm text-cream-faint">
          © 2026 Madej Marketing — zrobione z ☕ i dobrą energią.
        </footer>
      </div>
    </div>
  );
}
