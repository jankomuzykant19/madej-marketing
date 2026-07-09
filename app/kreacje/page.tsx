"use client";

import * as React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Terminal,
  Wand2,
  Clapperboard,
  Globe,
  Smartphone,
  Gauge,
  Cpu,
} from "lucide-react";
import { ContactProvider, useContact } from "@/components/contact-provider";
import { SiteHeader } from "@/components/site/site-header";
import { NextSteps } from "@/components/site/next-steps";
import { THEME_VARS } from "@/lib/theme";

/* ------------------------------------------------------------------ */
/*  Persistent tech backdrop (grid + glow orbs)                        */
/* ------------------------------------------------------------------ */

function TechBackdrop() {
  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(rgba(34,227,154,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(34,227,154,0.06)_1px,transparent_1px)] bg-[size:46px_46px]"
        style={{
          maskImage:
            "radial-gradient(ellipse 90% 80% at 50% 20%, black, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 80% at 50% 20%, black, transparent 85%)",
        }}
        animate={{ backgroundPosition: ["0px 0px", "46px 46px"] }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
      />
      <div className="pointer-events-none fixed -left-24 top-24 z-0 h-72 w-72 rounded-full bg-gold/20 blur-[130px]" />
      <div className="pointer-events-none fixed -right-20 bottom-24 z-0 h-80 w-80 rounded-full bg-gold-bright/10 blur-[140px]" />
    </>
  );
}

/* small char-by-char typer */
function useTyped(full: string, speed = 45, startDelay = 300) {
  const [n, setN] = React.useState(0);
  React.useEffect(() => {
    let i = 0;
    let id: number;
    const start = window.setTimeout(() => {
      id = window.setInterval(() => {
        i += 1;
        setN(i);
        if (i >= full.length) window.clearInterval(id);
      }, speed);
    }, startDelay);
    return () => {
      window.clearTimeout(start);
      window.clearInterval(id);
    };
  }, [full, speed, startDelay]);
  return full.slice(0, n);
}

function Bullet({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex gap-3">
      <span className="mt-1 select-none text-gold">▹</span>
      <p className="text-sm leading-relaxed text-cream-dim">
        <span className="font-medium text-cream">{title}</span> {text}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */

function Hero() {
  const { open } = useContact();
  const typed = useTyped("kreacje --build", 60, 300);

  return (
    <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 sm:px-10">
      <div className="flex flex-1 flex-col justify-center py-24">
        <p className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold">
          <Terminal className="h-4 w-4" /> ~/kreacje-i-landing-page
        </p>

        <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-cream sm:text-5xl">
          <span className="text-cream-dim">{"> "}</span>
          <span className="text-gold-shimmer">{typed}</span>
          <span className="ml-0.5 inline-block h-[0.9em] w-[3px] translate-y-[2px] animate-pulse bg-gold align-middle" />
          <span className="mt-4 block text-cream">
            Projektuję nowoczesne strony i kreacje reklamowe, które po prostu
            działają.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl font-body text-sm leading-relaxed text-cream-dim sm:text-base">
          Koniec z ładnymi projektami, które nie przynoszą zysków. Tworzę strony
          sprzedażowe idealnie dopasowane do Twojego produktu oraz przyciągające
          wzrok materiały graficzne i wideo. Łączę technologię z psychologią
          sprzedaży, aby zamieniać zwykłych użytkowników w płacących klientów.
        </p>

        <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={open}
            className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-gold-deep via-gold to-gold-bright px-7 py-4 font-body text-base font-semibold text-ink shadow-[0_0_40px_-10px_var(--color-gold)] transition-all hover:-translate-y-0.5"
          >
            Porozmawiajmy o projekcie
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
          <a
            href="#kreacje"
            className="font-body text-sm text-cream-dim underline-offset-4 transition-colors hover:text-cream hover:underline"
          >
            Zobacz, jak pracuję ↓
          </a>
        </div>
      </div>
    </section>
  );
}

function TechCard({
  eyebrow,
  icon: Icon,
  title,
  children,
}: {
  eyebrow: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
      className="overflow-hidden rounded-2xl border border-line-strong bg-panel/70 backdrop-blur-sm"
    >
      <div className="flex items-center gap-2 border-b border-line px-5 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-2 font-body text-xs text-cream-faint">{eyebrow}</span>
      </div>
      <div className="p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/40 bg-gold/10 text-gold-bright">
            <Icon className="h-5 w-5" />
          </span>
          <h2 className="font-display text-xl font-bold text-cream sm:text-2xl">
            {title}
          </h2>
        </div>
        <div className="mt-5 space-y-4">{children}</div>
      </div>
    </motion.div>
  );
}

function Creatives() {
  return (
    <section
      id="kreacje"
      className="relative z-10 mx-auto w-full max-w-5xl px-6 py-16 sm:px-10"
    >
      <TechCard
        eyebrow="module: kreacje-reklamowe"
        icon={Wand2}
        title="Nowoczesne formaty: szybkość AI, precyzja człowieka"
      >
        <p className="font-body text-sm leading-relaxed text-cream-dim">
          Dobra reklama musi zatrzymać kursor użytkownika scrollującego social
          media. W tworzeniu grafik i wideo wykorzystuję nowoczesne podejście
          hybrydowe:
        </p>
        <Bullet
          title="Baza z potencjałem —"
          text="używam zaawansowanych narzędzi AI do generowania unikalnych materiałów wyjściowych, nieszablonowych grafik i dynamicznych scen wideo."
        />
        <Bullet
          title="Ręczny montaż i dopracowanie —"
          text="materiały z AI to dopiero początek. Samodzielnie składam je w gotowe formaty reklamowe: od statycznych banerów po angażujące wideo (Reels / TikTok / Shorts)."
        />
        <div className="mt-2 flex items-start gap-3 rounded-xl border border-gold/25 bg-gold/[0.05] p-4">
          <Clapperboard className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
          <p className="font-body text-sm text-cream-dim">
            <span className="text-gold-bright">Efekt:</span> unikalne,
            nowoczesne kreacje dopasowane do Twojej marki — w czasie i budżecie
            nieosiągalnym dla tradycyjnych agencji.
          </p>
        </div>
      </TechCard>
    </section>
  );
}

function Landing() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-16 sm:px-10">
      <TechCard
        eyebrow="module: landing-page"
        icon={Globe}
        title="Strony sprzedażowe szyte na miarę Twojego produktu"
      >
        <p className="font-body text-sm leading-relaxed text-cream-dim">
          Nie korzystam z masowych szablonów, w których zmienia się tylko kolory
          i logo. Twój Landing Page powstanie od zera, z pełnym skupieniem na
          specyfice Twojego biznesu.
        </p>
        <Bullet
          title="Dopasowane do produktu —"
          text="struktura strony, teksty i grafiki są precyzyjnie projektowane pod to, co sprzedajesz i do kogo mówisz."
        />
        <Bullet
          title="Przede wszystkim działające —"
          text="optymalizuję pod błyskawiczne ładowanie, perfekcyjne działanie na telefonach (Mobile-First) i intuicyjną ścieżkę klienta."
        />
        <div className="mt-2 flex flex-wrap gap-4 pt-1">
          {[
            { icon: Gauge, label: "błyskawiczne ładowanie" },
            { icon: Smartphone, label: "mobile-first" },
            { icon: Cpu, label: "1 cel: konwersja" },
          ].map((f) => (
            <span
              key={f.label}
              className="inline-flex items-center gap-2 rounded-lg border border-line px-3 py-2 font-body text-xs text-cream-dim"
            >
              <f.icon className="h-4 w-4 text-gold" /> {f.label}
            </span>
          ))}
        </div>
      </TechCard>
    </section>
  );
}

function TechFooter() {
  return (
    <footer className="relative z-10 px-6 py-10 text-center font-body text-xs text-cream-faint sm:px-10">
      <span className="text-gold">//</span> madej_marketing © 2026 — kreacje &amp;
      landing pages
    </footer>
  );
}

export default function KreacjePage() {
  return (
    <div
      style={THEME_VARS.tech}
      className="relative min-h-screen overflow-hidden bg-ink font-body text-cream"
    >
      <ContactProvider>
        <TechBackdrop />
        <SiteHeader />
        <Hero />
        <Creatives />
        <Landing />
        <NextSteps />
        <TechFooter />
      </ContactProvider>
    </div>
  );
}
