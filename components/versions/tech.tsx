"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Terminal, Cpu, Wifi, ArrowRight } from "lucide-react";
import { MadejLogo } from "@/components/madej-logo";

const BOOT_LINES = [
  { p: "$", cmd: "whoami", out: "madej_marketing // growth engineering" },
  { p: "$", cmd: "./deploy --stack=ads,seo,automation", out: "✓ 3 kanały uruchomione" },
  { p: "$", cmd: "metrics --last=30d", out: "CTR +38% · CPL -27% · ROAS 4.2x" },
];

const CHIPS = ["#GoogleAds", "#MetaAds", "#SEO", "#Automation", "#Analytics", "#CRO"];
const METRICS = [
  { k: "uptime", v: "99.9%" },
  { k: "leads/mo", v: "1.2k+" },
  { k: "roas", v: "4.2x" },
];

/** minimal char-by-char typer */
function useTyped(full: string, speed = 32, startDelay = 0) {
  const [n, setN] = React.useState(0);
  React.useEffect(() => {
    let i = 0;
    let id: number;
    const start = window.setTimeout(function tick() {
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

export function TechVersion({ onContact }: { onContact: () => void }) {
  const typed = useTyped("marketing.deploy()", 55, 300);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-ink font-body text-cream">
      {/* animated grid */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(34,227,154,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(34,227,154,0.07)_1px,transparent_1px)] bg-[size:44px_44px]"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 30%, black, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 30%, black, transparent 80%)",
        }}
        animate={{ backgroundPosition: ["0px 0px", "44px 44px"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />
      {/* glow orbs */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-gold/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-gold-bright/10 blur-[130px]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 sm:px-10">
        <header className="flex items-center justify-between pt-20 pb-6">
          <MadejLogo />
          <div className="hidden items-center gap-4 text-xs text-cream-dim sm:flex">
            <span className="flex items-center gap-1.5">
              <Wifi className="h-3.5 w-3.5 text-gold" /> online
            </span>
            <span className="flex items-center gap-1.5">
              <Cpu className="h-3.5 w-3.5 text-gold" /> load: nominal
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-gold shadow-[0_0_10px_var(--color-gold)]" />
              live
            </span>
          </div>
        </header>

        <main className="flex flex-1 flex-col justify-center py-10">
          <p className="mb-4 flex items-center gap-2 font-body text-xs uppercase tracking-[0.3em] text-gold">
            <Terminal className="h-4 w-4" /> ~/madej-marketing
          </p>

          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-cream sm:text-6xl">
            <span className="text-cream-dim">{"> "}</span>
            <span className="text-gold-shimmer">{typed}</span>
            <span className="ml-0.5 inline-block h-[0.9em] w-[3px] translate-y-[2px] animate-pulse bg-gold align-middle shadow-[0_0_12px_var(--color-gold)]" />
          </h1>

          <p className="mt-5 max-w-xl font-body text-sm leading-relaxed text-cream-dim sm:text-base">
            Traktujemy marketing jak system: dane → hipoteza → wdrożenie →
            pomiar. Zero zgadywania, każda złotówka policzalna.
          </p>

          {/* terminal window */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 w-full max-w-2xl overflow-hidden rounded-2xl border border-line-strong bg-panel/80 shadow-[0_30px_80px_-30px_rgba(34,227,154,0.35)] backdrop-blur-sm"
          >
            <div className="flex items-center gap-2 border-b border-line px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
              <span className="ml-3 text-xs text-cream-faint">bash — madej@growth</span>
            </div>
            <div className="space-y-2.5 p-5 text-[0.82rem] leading-relaxed">
              {BOOT_LINES.map((l, i) => (
                <motion.div
                  key={l.cmd}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.5 }}
                >
                  <p className="text-cream">
                    <span className="text-gold">{l.p}</span> {l.cmd}
                  </p>
                  <p className="text-gold-bright/80">{l.out}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* chips */}
          <div className="mt-7 flex flex-wrap gap-2">
            {CHIPS.map((c) => (
              <span
                key={c}
                className="rounded-md border border-line bg-panel/60 px-3 py-1.5 text-xs text-cream-dim transition-colors hover:border-gold/50 hover:text-gold-bright"
              >
                {c}
              </span>
            ))}
          </div>

          {/* cta + metrics */}
          <div className="mt-9 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={onContact}
              className="group inline-flex items-center gap-2.5 rounded-xl border border-gold/60 bg-gold/10 px-7 py-4 font-body text-base font-medium text-gold-bright shadow-[0_0_30px_-8px_var(--color-gold)] transition-all hover:bg-gold/20 hover:shadow-[0_0_44px_-6px_var(--color-gold)]"
            >
              <span className="text-cream-dim">$</span> ./skontaktuj_sie
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <div className="flex gap-6">
              {METRICS.map((m) => (
                <div key={m.k}>
                  <p className="font-display text-2xl font-bold text-gold-bright">
                    {m.v}
                  </p>
                  <p className="text-[0.7rem] text-cream-faint">{m.k}</p>
                </div>
              ))}
            </div>
          </div>
        </main>

        <footer className="py-6 font-body text-xs text-cream-faint">
          <span className="text-gold">//</span> madej_marketing © 2026 — compiled
          with caffeine ☕
        </footer>
      </div>
    </div>
  );
}
