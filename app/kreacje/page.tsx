"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  Clapperboard,
  Cpu,
  Gauge,
  Globe,
  Smartphone,
  TrendingUp,
  Wand2,
} from "lucide-react";
import { ContactProvider, useContact } from "@/components/contact-provider";
import { SiteHeader, SiteHeaderSpacer } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { NextSteps } from "@/components/site/next-steps";
import { CASE_STUDIES } from "@/lib/case-studies";
import { THEME_VARS } from "@/lib/theme";

function Bullet({ title, text }: { title: string; text: string }) {
  return (
    <li className="flex gap-3">
      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
      <p className="leading-relaxed text-cream-dim">
        <span className="font-medium text-cream">{title}</span> {text}
      </p>
    </li>
  );
}

function Hero() {
  const { open } = useContact();

  return (
    <section className="px-6 pt-16 pb-12 sm:px-10 sm:pt-24">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/[0.08] px-4 py-1.5 text-xs uppercase tracking-[0.24em] text-gold">
          <Clapperboard className="h-3.5 w-3.5" /> Kreacje i landing page’e
        </p>
        <h1 className="font-display text-4xl font-semibold leading-[1.1] text-cream sm:text-6xl">
          Strony i kreacje reklamowe, które po prostu działają
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream-dim sm:text-lg">
          Koniec z ładnymi projektami, które nie przynoszą zysków. Tworzę strony
          sprzedażowe dopasowane do Twojego produktu oraz przyciągające wzrok
          grafiki i wideo. Łączę technologię z psychologią sprzedaży, żeby
          zamieniać użytkowników w płacących klientów.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={open}
            className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-bright px-8 py-4 text-base font-semibold text-ink shadow-[0_16px_44px_-14px_color-mix(in_srgb,var(--color-gold)_80%,transparent)] transition-all hover:-translate-y-0.5"
          >
            Porozmawiajmy o projekcie
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
          <a
            href="#oferta"
            className="text-sm text-cream-dim underline-offset-4 transition-colors hover:text-cream hover:underline"
          >
            Zobacz, co dostajesz ↓
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function Offer() {
  return (
    <section
      id="oferta"
      className="scroll-mt-24 border-t border-line px-6 py-20 sm:px-10"
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 lg:grid-cols-2">
        <article className="flex flex-col rounded-3xl border border-line bg-panel/60 p-7 sm:p-9">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-gold-bright">
            <Wand2 className="h-5 w-5" />
          </span>
          <h2 className="mt-5 font-display text-2xl font-semibold leading-tight text-cream">
            Kreacje reklamowe: szybkość AI, precyzja człowieka
          </h2>
          <p className="mt-3 leading-relaxed text-cream-dim">
            Dobra reklama musi zatrzymać kciuk scrollującego social media. W
            grafikach i wideo łączę dwa podejścia:
          </p>
          <ul className="mt-5 space-y-3">
            <Bullet
              title="Baza z potencjałem —"
              text="narzędzia AI pomagają mi szybko wygenerować unikalne, nieszablonowe materiały wyjściowe i dynamiczne sceny wideo."
            />
            <Bullet
              title="Ręczny montaż i dopracowanie —"
              text="samodzielnie składam je w gotowe formaty reklamowe: od statycznych banerów po wideo na Reels, TikTok i Shorts."
            />
          </ul>
          <p className="mt-6 rounded-2xl border border-gold/30 bg-gold/[0.06] p-4 text-sm leading-relaxed text-cream">
            <span className="font-medium text-gold-bright">Efekt:</span>{" "}
            unikalne kreacje dopasowane do Twojej marki — szybciej i taniej niż
            przy klasycznej produkcji.
          </p>
        </article>

        <article className="flex flex-col rounded-3xl border border-line bg-panel/60 p-7 sm:p-9">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-gold-bright">
            <Globe className="h-5 w-5" />
          </span>
          <h2 className="mt-5 font-display text-2xl font-semibold leading-tight text-cream">
            Landing page szyty na miarę Twojego produktu
          </h2>
          <p className="mt-3 leading-relaxed text-cream-dim">
            Nie korzystam z masowych szablonów, w których zmienia się tylko
            kolory i logo. Twoja strona powstaje od zera, z pełnym skupieniem na
            specyfice Twojego biznesu.
          </p>
          <ul className="mt-5 space-y-3">
            <Bullet
              title="Dopasowana do produktu —"
              text="struktura, teksty i grafiki projektuję pod to, co sprzedajesz i do kogo mówisz."
            />
            <Bullet
              title="Przede wszystkim działająca —"
              text="szybkie ładowanie, dopracowana wersja na telefon i prosta ścieżka do kontaktu lub zakupu."
            />
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              { icon: Gauge, label: "szybkie ładowanie" },
              { icon: Smartphone, label: "mobile-first" },
              { icon: Cpu, label: "1 cel: konwersja" },
            ].map((f) => (
              <span
                key={f.label}
                className="inline-flex items-center gap-2 rounded-full border border-line px-3.5 py-2 text-sm text-cream-dim"
              >
                <f.icon className="h-4 w-4 text-gold" /> {f.label}
              </span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

/** Proof block — links the strongest result until a portfolio gallery exists. */
function Proof() {
  const cs = CASE_STUDIES[0];
  if (!cs) return null;

  return (
    <section className="px-6 pb-20 sm:px-10">
      <Link
        href={`/case-study/${cs.slug}`}
        className="group mx-auto flex max-w-5xl flex-col gap-5 rounded-3xl border border-gold/30 bg-gold/[0.05] p-7 transition-colors hover:border-gold/60 sm:flex-row sm:items-center sm:justify-between sm:p-9"
      >
        <div className="flex items-start gap-4">
          <TrendingUp className="mt-1 h-6 w-6 shrink-0 text-gold-bright" />
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold">
              Kreacje w praktyce · {cs.channel}
            </p>
            <p className="mt-2 font-display text-xl font-semibold leading-snug text-cream sm:text-2xl">
              {cs.stats[0].value} przychodu i ROAS {cs.stats[1].value}
            </p>
            <p className="mt-1 text-sm text-cream-dim">{cs.client}</p>
          </div>
        </div>
        <span className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-gold-bright">
          Przeczytaj case study
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    </section>
  );
}

export default function KreacjePage() {
  return (
    <div style={THEME_VARS.premium} className="relative bg-ink">
      <ContactProvider>
        <SiteHeader />
        <SiteHeaderSpacer />
        <main>
          <Hero />
          <Offer />
          <Proof />
          <NextSteps />
        </main>
        <SiteFooter />
      </ContactProvider>
    </div>
  );
}
