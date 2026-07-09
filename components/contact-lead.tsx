"use client";

import * as React from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Sparkles,
  LineChart,
  Globe,
  Rocket,
  Clapperboard,
  Zap,
  CalendarClock,
  Eye,
  Loader2,
  PartyPopper,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { FieldWrap, TextInput, TextArea } from "@/components/ui/field";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

type Service = {
  id: string;
  label: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
};

const SERVICES: Service[] = [
  { id: "paid", label: "Kampanie płatne", desc: "Google, Meta, TikTok, LinkedIn — dobrane do strategii", icon: LineChart },
  { id: "strategy", label: "Kompleksowa strategia", desc: "Logiczny plan działania od A do Z", icon: Rocket },
  { id: "web", label: "Strona / Landing Page", desc: "Szybkie strony sprzedażowe", icon: Globe },
  { id: "creative", label: "Materiały i kreacje", desc: "Grafiki, wideo, boost reklam", icon: Clapperboard },
];

const BUDGETS = [
  { id: "s", label: "do 2 000 zł", desc: "start / mikro-budżet" },
  { id: "m", label: "2 000 – 5 000 zł", desc: "miesięcznie" },
  { id: "l", label: "5 000 – 15 000 zł", desc: "miesięcznie" },
  { id: "xl", label: "powyżej 15 000 zł", desc: "skalowanie" },
  { id: "talk", label: "Chcę ustalić na rozmowie", desc: "doradzę Ci najlepszy zakres" },
];

const TIMELINES = [
  { id: "asap", label: "Jak najszybciej", desc: "start w tym tygodniu", icon: Zap },
  { id: "month", label: "W ciągu miesiąca", desc: "planujemy spokojnie", icon: CalendarClock },
  { id: "quarter", label: "1–3 miesiące", desc: "większy projekt", icon: CalendarClock },
  { id: "browse", label: "Tylko się rozglądam", desc: "chcę poznać ofertę", icon: Eye },
];

type LeadState = {
  services: string[];
  budget: string | null;
  timeline: string | null;
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

const EMPTY: LeadState = {
  services: [],
  budget: null,
  timeline: null,
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
};

const STEPS = ["Zakres", "Budżet", "Termin", "Dane"] as const;

/* Adaptive recommendation — the "smart" bit */
function recommendation(state: LeadState): string {
  const n = state.services.length;
  if (n === 0) return "Zaznacz obszary, które Cię interesują — resztę dobiorę razem z Tobą.";
  const names = state.services
    .map((id) => SERVICES.find((s) => s.id === id)?.label.toLowerCase())
    .filter(Boolean);
  if (state.services.includes("strategy"))
    return "Świetnie — zaczniemy od strategii i audytu, a potem wdrożę pierwsze działania. Bez zobowiązań.";
  if (n >= 3)
    return `Zgrany zestaw ${n} obszarów — poprowadzę je jako jeden, spójny lejek sprzedaży.`;
  return `Skupię się na: ${names.join(" + ")}. Dobre połączenie na szybkie, mierzalne efekty.`;
}

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function Tile({
  active,
  onClick,
  icon: Icon,
  label,
  desc,
  multi,
}: {
  active: boolean;
  onClick: () => void;
  icon?: React.ComponentType<{ className?: string }>;
  label: string;
  desc: string;
  multi?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group relative flex w-full flex-col gap-2 rounded-2xl border p-4 text-left transition-all duration-200",
        active
          ? "border-gold/70 bg-gold/[0.08] shadow-[0_0_0_1px_color-mix(in_srgb,var(--color-gold)_40%,transparent),0_16px_40px_-24px_color-mix(in_srgb,var(--color-gold)_60%,transparent)]"
          : "border-line bg-panel/50 hover:border-line-strong hover:bg-panel"
      )}
    >
      <span className="flex items-center justify-between">
        {Icon && (
          <span
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-xl border transition-colors",
              active
                ? "border-gold/50 bg-gold/15 text-gold-bright"
                : "border-line bg-ink/40 text-cream-dim group-hover:text-cream"
            )}
          >
            <Icon className="h-4 w-4" />
          </span>
        )}
        <span
          className={cn(
            "flex h-5 w-5 items-center justify-center rounded-full border transition-all",
            multi ? "rounded-md" : "",
            active
              ? "border-gold bg-gold text-ink"
              : "border-line-strong text-transparent"
          )}
        >
          <Check className="h-3 w-3" strokeWidth={3} />
        </span>
      </span>
      <span className="mt-1">
        <span className="block text-sm font-medium text-cream">{label}</span>
        <span className="block text-xs text-cream-faint">{desc}</span>
      </span>
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  Main                                                               */
/* ------------------------------------------------------------------ */

export function ContactLead({ onClose }: { onClose: () => void }) {
  const [step, setStep] = React.useState(0);
  const [state, setState] = React.useState<LeadState>(EMPTY);
  const [status, setStatus] = React.useState<"idle" | "sending" | "done" | "error">("idle");
  const [errorMessage, setErrorMessage] = React.useState("");

  const set = <K extends keyof LeadState>(k: K, v: LeadState[K]) =>
    setState((s) => ({ ...s, [k]: v }));

  const toggleService = (id: string) =>
    setState((s) => ({
      ...s,
      services: s.services.includes(id)
        ? s.services.filter((x) => x !== id)
        : [...s.services, id],
    }));

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email);
  const canProceed = [
    state.services.length > 0,
    !!state.budget,
    true, // termin jest opcjonalny — można pominąć
    state.name.trim().length > 1 && emailValid,
  ];

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const services = state.services
      .map((id) => SERVICES.find((s) => s.id === id)?.label)
      .filter(Boolean) as string[];
    const budget = BUDGETS.find((b) => b.id === state.budget)?.label;
    const timeline = TIMELINES.find((t) => t.id === state.timeline)?.label;

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: state.name.trim(),
          company: state.company.trim() || undefined,
          email: state.email.trim(),
          phone: state.phone.trim() || undefined,
          services,
          budget,
          timeline,
          message: state.message.trim() || undefined,
        }),
      });

      const result = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !result.ok) {
        setErrorMessage(result.error || "Nie udało się wysłać zgłoszenia.");
        setStatus("error");
        return;
      }

      setStatus("done");
    } catch {
      setErrorMessage("Nie udało się wysłać zgłoszenia. Sprawdź połączenie i spróbuj ponownie.");
      setStatus("error");
    }
  };

  return (
    <div className="flex h-full flex-col">
      {/* header */}
      <div className="flex items-center justify-between border-b border-line px-6 py-5 sm:px-8">
        <div>
          <p className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-gold/80">
            <Sparkles className="h-3.5 w-3.5" /> Darmowa rozmowa
          </p>
          <h2 className="mt-1 font-display text-2xl font-semibold text-cream">
            Opowiedz mi o projekcie
          </h2>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="rounded-full border border-line px-4 py-2 text-sm text-cream-dim transition-colors hover:border-line-strong hover:text-cream"
        >
          Zamknij
        </button>
      </div>

      {status === "done" ? (
        <SuccessScreen state={state} onClose={onClose} />
      ) : (
        <>
          {/* progress */}
          <div className="px-6 pt-5 sm:px-8">
            <div className="flex items-center gap-2">
              {STEPS.map((label, i) => (
                <div key={label} className="flex flex-1 flex-col gap-1.5">
                  <div className="h-1 overflow-hidden rounded-full bg-line">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-bright"
                      initial={false}
                      animate={{ width: i <= step ? "100%" : "0%" }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  </div>
                  <span
                    className={cn(
                      "text-[0.68rem] uppercase tracking-wider transition-colors",
                      i === step ? "text-gold" : "text-cream-faint"
                    )}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* body */}
          <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
              >
                {step === 0 && (
                  <StepShell
                    title="Zakres działań"
                    subtitle="W czym mogę Ci pomóc? Możesz wybrać kilka obszarów."
                  >
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {SERVICES.map((s) => (
                        <Tile
                          key={s.id}
                          multi
                          active={state.services.includes(s.id)}
                          onClick={() => toggleService(s.id)}
                          icon={s.icon}
                          label={s.label}
                          desc={s.desc}
                        />
                      ))}
                    </div>
                  </StepShell>
                )}

                {step === 1 && (
                  <StepShell
                    title="Jaki budżet miesięczny rozważasz?"
                    subtitle="Orientacyjnie — pomoże mi dobrać zakres."
                  >
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {BUDGETS.map((b) => (
                        <Tile
                          key={b.id}
                          active={state.budget === b.id}
                          onClick={() => set("budget", b.id)}
                          label={b.label}
                          desc={b.desc}
                        />
                      ))}
                    </div>
                  </StepShell>
                )}

                {step === 2 && (
                  <StepShell
                    title="Kiedy chcesz wystartować?"
                    subtitle="Opcjonalnie — możesz pominąć, dopasujemy tempo na rozmowie."
                  >
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {TIMELINES.map((t) => (
                        <Tile
                          key={t.id}
                          active={state.timeline === t.id}
                          onClick={() => set("timeline", t.id)}
                          icon={t.icon}
                          label={t.label}
                          desc={t.desc}
                        />
                      ))}
                    </div>
                  </StepShell>
                )}

                {step === 3 && (
                  <StepShell
                    title="Zostaw namiary"
                    subtitle="Odezwę się i umówimy darmową rozmowę — bez zobowiązań."
                  >
                    <form
                      id="lead-form"
                      onSubmit={submit}
                      className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                    >
                      <FieldWrap label="Imię i nazwisko" htmlFor="name">
                        <TextInput
                          id="name"
                          value={state.name}
                          onChange={(e) => set("name", e.target.value)}
                          placeholder="Jan Kowalski"
                          autoComplete="name"
                          required
                        />
                      </FieldWrap>
                      <FieldWrap label="Firma" hint="opcjonalnie" htmlFor="company">
                        <TextInput
                          id="company"
                          value={state.company}
                          onChange={(e) => set("company", e.target.value)}
                          placeholder="Nazwa firmy"
                          autoComplete="organization"
                        />
                      </FieldWrap>
                      <FieldWrap label="E-mail" htmlFor="email">
                        <TextInput
                          id="email"
                          type="email"
                          value={state.email}
                          onChange={(e) => set("email", e.target.value)}
                          placeholder="jan@firma.pl"
                          autoComplete="email"
                          required
                        />
                      </FieldWrap>
                      <FieldWrap label="Telefon" hint="opcjonalnie" htmlFor="phone">
                        <TextInput
                          id="phone"
                          type="tel"
                          value={state.phone}
                          onChange={(e) => set("phone", e.target.value)}
                          placeholder="+48 600 000 000"
                          autoComplete="tel"
                        />
                      </FieldWrap>
                      <div className="sm:col-span-2">
                        <FieldWrap
                          label="Wiadomość"
                          hint="opcjonalnie"
                          htmlFor="message"
                        >
                          <TextArea
                            id="message"
                            value={state.message}
                            onChange={(e) => set("message", e.target.value)}
                            placeholder="Kilka słów o celu, produkcie lub tym, co chcesz osiągnąć…"
                          />
                        </FieldWrap>
                      </div>
                    </form>
                  </StepShell>
                )}
              </motion.div>
            </AnimatePresence>

            {/* adaptive recommendation */}
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-gold/20 bg-gold/[0.04] p-4">
              <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <p className="text-sm text-cream-dim">{recommendation(state)}</p>
            </div>
          </div>

          {/* footer nav */}
          <div className="border-t border-line px-6 py-4 sm:px-8">
            {status === "error" && errorMessage && (
              <p className="mb-3 text-center text-sm text-red-300/90">{errorMessage}</p>
            )}
            <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={back}
              disabled={step === 0}
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm transition-colors",
                step === 0
                  ? "pointer-events-none opacity-0"
                  : "text-cream-dim hover:text-cream"
              )}
            >
              <ArrowLeft className="h-4 w-4" /> Wstecz
            </button>

            {step < STEPS.length - 1 ? (
              <button
                type="button"
                onClick={next}
                disabled={!canProceed[step]}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-bright px-6 py-3 text-sm font-semibold text-ink shadow-[0_10px_30px_-10px_color-mix(in_srgb,var(--color-gold)_70%,transparent)] transition-all hover:shadow-[0_14px_40px_-8px_color-mix(in_srgb,var(--color-gold)_85%,transparent)] disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
              >
                {step === 2 && !state.timeline ? "Pomiń" : "Dalej"}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            ) : (
              <button
                type="submit"
                form="lead-form"
                disabled={!canProceed[step] || status === "sending"}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-bright px-6 py-3 text-sm font-semibold text-ink shadow-[0_10px_30px_-10px_color-mix(in_srgb,var(--color-gold)_70%,transparent)] transition-all hover:shadow-[0_14px_40px_-8px_color-mix(in_srgb,var(--color-gold)_85%,transparent)] disabled:cursor-not-allowed disabled:opacity-40"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Wysyłanie…
                  </>
                ) : (
                  <>
                    Wyślij zgłoszenie <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function StepShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="font-display text-xl font-semibold text-cream">{title}</h3>
      <p className="mt-1 mb-5 text-sm text-cream-faint">{subtitle}</p>
      {children}
    </div>
  );
}

function SuccessScreen({
  state,
  onClose,
}: {
  state: LeadState;
  onClose: () => void;
}) {
  const services = state.services
    .map((id) => SERVICES.find((s) => s.id === id)?.label)
    .filter(Boolean) as string[];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="flex flex-1 flex-col items-center justify-center px-6 py-12 text-center"
    >
      <motion.span
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.1 }}
        className="flex h-20 w-20 items-center justify-center rounded-3xl border border-gold/40 bg-gold/10 text-gold-bright"
      >
        <PartyPopper className="h-9 w-9" />
      </motion.span>

      <h3 className="mt-6 font-display text-3xl font-semibold text-cream">
        Dziękuję{state.name ? `, ${state.name.split(" ")[0]}` : ""}!
      </h3>
      <p className="mt-3 max-w-md text-cream-dim">
        Zapisałem Twoje preferencje
        {services.length > 0 && (
          <>
            {" "}
            (<span className="text-gold">{services.join(", ")}</span>)
          </>
        )}
        . Odezwę się wkrótce, żeby umówić darmową rozmowę — bez zobowiązań.
      </p>

      <button
        type="button"
        onClick={onClose}
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 text-sm font-medium text-cream transition-colors hover:border-gold/50 hover:text-gold-bright"
      >
        Wróć na stronę
      </button>
    </motion.div>
  );
}
