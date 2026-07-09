"use client";

import { motion } from "motion/react";
import { ArrowRight, PhoneCall } from "lucide-react";
import { useContact } from "@/components/contact-provider";

export function NextSteps() {
  const { open } = useContact();

  return (
    <section id="kontakt" className="relative px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/[0.06] px-4 py-1.5 text-xs uppercase tracking-[0.24em] text-gold/90">
            <PhoneCall className="h-3.5 w-3.5" /> Co dalej?
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight text-cream sm:text-4xl">
            Zaczynamy od rozpoznania i&nbsp;audytu
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream-dim">
            Pierwszy krok to darmowa, luźna rozmowa. Sprawdzam, w którym miejscu
            jest Twój biznes, co już zostało zrobione i jakich wyników
            oczekujesz — bez żadnych zobowiązań.
          </p>

          <button
            type="button"
            onClick={open}
            className="group mt-9 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-bright px-8 py-4 text-base font-semibold text-ink shadow-[0_16px_44px_-14px_color-mix(in_srgb,var(--color-gold)_80%,transparent)] transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_56px_-12px_color-mix(in_srgb,var(--color-gold-bright)_90%,transparent)]"
          >
            Umów się na darmową rozmowę
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
