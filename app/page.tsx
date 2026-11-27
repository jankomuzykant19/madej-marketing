"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "motion/react";
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
  TrendingUp,
  Plus,
} from "lucide-react";
import {
  CASE_STUDIES,
  noBreakHyphens,
  type CaseStudy,
} from "@/lib/case-studies";
import BeamsBackground from "@/components/kokonutui/beams-background";
import { ContactProvider, useContact } from "@/components/contact-provider";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { NextSteps } from "@/components/site/next-steps";
import { THEME_VARS } from "@/lib/theme";

const FEATURED = CASE_STUDIES[0];

const PROCESS = [
  {
    title: "Darmowa rozmowa",
    text: "Poznaję Twój biznes, cele i to, co już zostało zrobione. Luźno i bez zobowiązań.",
  },
  {
    title: "Bezpłatny audyt i wycena w 5 dni",
    text: "Sprawdzam konta reklamowe, stronę i analitykę. W ciągu 5 dni dostajesz wycenę — audyt przy wycenie nic nie kosztuje.",
  },
  {
    title: "Strategia tworzona od zera",
    text: "Bez gotowych pakietów i szablonów. Kanały, przekaz i budżet dobieram do Twojego produktu, klientów i marży.",
  },
  {
    title: "Wdrożenie i optymalizacja",
    text: "Uruchamiam kampanie, mierzę wyniki i przesuwam budżet tam, gdzie realnie zarabia.",
  },
];

const FAQ = [
  {
    q: "Jaki jest minimalny budżet reklamowy?",
    a: "Nie ma minimalnego budżetu. Skalę działań dopasowuję do tego, ile chcesz zainwestować — strategia powstaje pod Twoje możliwości, a nie odwrotnie.",
  },
  {
    q: "Na jak długo podpisujemy umowę?",
    a: "Umowa jest zawierana na 1 miesiąc, z 1-miesięcznym okresem wypowiedzenia. Nie wiążę Cię wieloletnim kontraktem — współpracujemy, dopóki to się opłaca.",
  },
  {
    q: "Czyje jest konto reklamowe?",
    a: "Twoje. Konto reklamowe i zebrane w nim dane zostają u Ciebie, także po zakończeniu współpracy.",
  },
  {
    q: "Kto płaci za reklamy?",
    a: "Budżet reklamowy opłacasz bezpośrednio na platformie reklamowej (np. Meta, Google). Moje wynagrodzenie to osobna pozycja.",
  },
  {
    q: "Ile kosztuje współpraca?",
    a: "Każdą strategię tworzę od zera, więc nie mam sztywnego cennika. Po darmowej rozmowie robię bezpłatny audyt i w ciągu 5 dni przesyłam indywidualną wycenę.",
  },
];

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
    cta: "Porozmawiajmy o strategii",
  },
  {
    icon: Rocket,
    title: "Wdrożenie pierwszych działań",
    text: "Przechodzę od słów do czynów. Konfiguruję analitykę, uruchamiam pierwsze kampanie (Meta Ads / Google Ads) i dbam, by od początku pracowały na Twój zysk.",
    cta: "Zobacz przykładowe wyniki",
    href: "/#wyniki",
  },
  {
    icon: Search,
    title: "Audyt działań i kont reklamowych",
    text: "Sprawdzam profile, reklamy i statystyki. Znajduję błędy, eliminuję przepalanie budżetu i wskazuję miejsca do natychmiastowej poprawy. Przy wycenie — bezpłatnie.",
    cta: "Zamów bezpłatny audyt",
  },
  {
    icon: Clapperboard,
    title: "Kreacje i landing page’e",
    text: "Projektuję nowoczesne, szybkie strony sprzedażowe oraz materiały reklamowe — zoptymalizowane tak, by maksymalnie ułatwić kontakt lub zakup.",
    cta: "Zobacz, jak tworzę kreacje",
    href: "/kreacje",
  },
];

/* ------------------------------------------------------------------ */

function Hero() {
  const { open } = useContact();

  return (
    <BeamsBackground intensity="medium">
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,transparent,color-mix(in_srgb,var(--color-ink)_60%,transparent)_70%,color-mix(in_srgb,var(--color-ink)_95%,transparent))]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 sm:px-10">
        <div className="flex flex-1 flex-col items-center justify-center pt-32 pb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/[0.06] px-4 py-1.5 text-xs uppercase tracking-[0.28em] text-gold"
          >
            <Sparkles className="h-3.5 w-3.5" /> Marketing &amp; performance
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="max-w-4xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-cream sm:text-6xl md:text-[4.25rem]"
          >
            Strona + reklamy + analityka od jednej osoby.
            <span className="text-gold-shimmer mt-3 block text-2xl leading-snug sm:text-4xl md:text-[2.75rem]">
              Dla firm, które chcą wyników, a&nbsp;nie lajków.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-cream-dim sm:text-lg"
          >
            Projektuję strony, prowadzę kampanie Meta i Google Ads i liczę, ile
            każda złotówka zarobiła. Jedna osoba odpowiada za cały wynik.
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
              href="#proces"
              className="text-sm text-cream-dim underline-offset-4 transition-colors hover:text-cream hover:underline"
            >
              Zobacz, jak pracuję
            </a>
          </motion.div>

          {FEATURED && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-12"
            >
              <Link
                href={`/case-study/${FEATURED.slug}`}
                className="group inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-2xl border border-line bg-panel/60 px-5 py-3 text-sm backdrop-blur-sm transition-colors hover:border-gold/40"
              >
                <TrendingUp className="h-4 w-4 text-gold-bright" />
                <span className="text-cream">
                  <strong className="font-semibold text-gold-bright">
                    {FEATURED.stats[0].value}
                  </strong>{" "}
                  przychodu z {FEATURED.channel} · ROAS {FEATURED.stats[1].value}
                </span>
                <span className="text-cream-dim transition-colors group-hover:text-cream">
                  Zobacz case study →
                </span>
              </Link>
            </motion.div>
          )}
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
      <p className="mb-3 text-xs uppercase tracking-[0.28em] text-gold">
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
    <section className="relative border-t border-line px-6 py-24 sm:px-10">
      <SectionHeading eyebrow="Dlaczego ja" title="Dlaczego warto ze mną współpracować?" />
      {/* One calm strip instead of three more boxed cards — breaks the
          rhythm of identical card grids on the page. */}
      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 divide-y divide-line md:grid-cols-3 md:divide-x md:divide-y-0">
        {WHY.map((w) => (
          <div key={w.title} className="py-7 md:px-8 md:py-2 md:first:pl-0 md:last:pr-0">
            <div className="flex items-center gap-3">
              <w.icon className="h-5 w-5 shrink-0 text-gold-bright" />
              <h3 className="text-lg font-medium text-cream">{w.title}</h3>
            </div>
            <p className="mt-3 leading-relaxed text-cream-dim">{w.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const { open } = useContact();
  const ctaCls =
    "group/cta mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-gold-bright transition-colors hover:text-cream";

  return (
    <section className="relative border-t border-line px-6 py-24 sm:px-10">
      <SectionHeading id="uslugi" eyebrow="Usługi" title="W czym mogę Ci pomóc?" />
      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2">
        {SERVICES.map((s) => (
          <div
            key={s.title}
            className="flex flex-col rounded-3xl border border-line bg-panel/60 p-7"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-gold-bright">
              <s.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold text-cream">
              {s.title}
            </h3>
            <p className="mt-2 leading-relaxed text-cream-dim">{s.text}</p>
            {s.href ? (
              <Link href={s.href} className={ctaCls}>
                {s.cta}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" />
              </Link>
            ) : (
              <button type="button" onClick={open} className={`${ctaCls} text-left`}>
                {s.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-1" />
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function CaseCard({ cs, featured }: { cs: CaseStudy; featured?: boolean }) {
  return (
    <Link
      href={`/case-study/${cs.slug}`}
      className="group block rounded-3xl border border-line bg-panel/50 p-7 transition-colors hover:border-gold/40 sm:p-9"
    >
      <p className="text-xs uppercase tracking-[0.2em] text-gold">
        {cs.channel} · {cs.period}
      </p>
      <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-cream sm:text-3xl">
        {noBreakHyphens(cs.title)}
      </h3>
      <p className="mt-2 text-sm text-cream-dim">{cs.client}</p>
      {featured && (
        <p className="mt-4 max-w-2xl leading-relaxed text-cream-dim">
          {cs.summary}
        </p>
      )}

      <dl
        className={`mt-8 grid grid-cols-2 gap-4 ${featured ? "lg:grid-cols-4" : ""}`}
      >
        {cs.stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-line bg-ink/40 p-4">
            <dt className="sr-only">{s.label}</dt>
            <dd className="font-display text-lg font-semibold text-gold-bright sm:text-2xl">
              {s.value}
            </dd>
            <dd className="mt-1 text-xs leading-snug text-cream-dim sm:text-sm">
              {s.label}
            </dd>
          </div>
        ))}
      </dl>

      <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-gold-bright">
        Przeczytaj całe case study
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

function Results() {
  if (CASE_STUDIES.length === 0) return null;
  const [first, ...rest] = CASE_STUDIES;

  return (
    <section className="relative scroll-mt-24 px-6 py-24 sm:px-10" id="wyniki">
      <SectionHeading eyebrow="Wyniki" title="Liczby, nie obietnice" />
      <div className="mx-auto mt-12 max-w-5xl space-y-5">
        <CaseCard cs={first} featured />
        {/* One extra study gets the full-width card too; a half-width card
            next to an empty column looks unfinished. */}
        {rest.length === 1 && <CaseCard cs={rest[0]} featured />}
        {rest.length > 1 && (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {rest.map((cs) => (
              <CaseCard key={cs.slug} cs={cs} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="relative scroll-mt-24 border-t border-line px-6 py-24 sm:px-10" id="proces">
      <SectionHeading eyebrow="Jak pracuję" title="Od rozmowy do wyników w 4 krokach" />
      <ol className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PROCESS.map((step, i) => (
          <li
            key={step.title}
            className="relative rounded-3xl border border-line bg-panel/60 p-6"
          >
            <span className="font-display text-4xl font-semibold text-gold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 text-lg font-medium leading-snug text-cream">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-cream-dim">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="relative scroll-mt-24 border-t border-line px-6 py-24 sm:px-10" id="faq">
      <SectionHeading eyebrow="FAQ" title="Najczęstsze pytania" />
      <div className="mx-auto mt-12 max-w-3xl divide-y divide-line rounded-3xl border border-line bg-panel/50">
        {FAQ.map((f) => (
          <details key={f.q} className="group px-6 sm:px-8">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left font-medium text-cream [&::-webkit-details-marker]:hidden">
              {f.q}
              <Plus className="h-5 w-5 shrink-0 text-gold transition-transform group-open:rotate-45" />
            </summary>
            <p className="pb-6 leading-relaxed text-cream-dim">{f.a}</p>
          </details>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}

export default function HomePage() {
  return (
    <div style={THEME_VARS.premium} className="relative bg-ink">
      <ContactProvider>
        <SiteHeader />
        <Hero />
        <main className="relative bg-ink">
          <Results />
          <Why />
          <Services />
          <Process />
          <Faq />
          <NextSteps />
        </main>
        <SiteFooter />
      </ContactProvider>
    </div>
  );
}
