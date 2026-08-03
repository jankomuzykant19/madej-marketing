"use client";

import { motion } from "motion/react";
import { Building2, FileText, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { ContactLead } from "@/components/contact-lead";
import { ContactProvider } from "@/components/contact-provider";
import { SiteHeader, SiteHeaderSpacer } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { COMPANY, CONTACT } from "@/components/site/nav";
import { THEME_VARS } from "@/lib/theme";

const CHANNELS = [
  {
    icon: Phone,
    label: "Telefon",
    value: CONTACT.phone.label,
    href: CONTACT.phone.href,
    hint: "Zadzwoń — najszybsza droga",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: CONTACT.email.label,
    href: CONTACT.email.href,
    hint: "Napisz, odpowiadam na bieżąco",
  },
];

const DETAILS = [
  { icon: Building2, label: "Firma", value: COMPANY.name },
  {
    icon: MapPin,
    label: "Adres",
    value: `${COMPANY.street}\n${COMPANY.city}`,
  },
  { icon: FileText, label: "NIP", value: COMPANY.nip },
];

function Intro() {
  return (
    <section className="px-6 pt-16 pb-4 sm:px-10">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/[0.06] px-4 py-1.5 text-xs uppercase tracking-[0.24em] text-gold/90">
          <Sparkles className="h-3.5 w-3.5" /> Kontakt
        </p>
        <h1 className="font-display text-4xl font-semibold leading-tight text-cream sm:text-5xl">
          Porozmawiajmy o Twoim projekcie
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream-dim">
          Zadzwoń, napisz albo wypełnij formularz poniżej — odezwę się i umówimy
          darmową, luźną rozmowę. Bez zobowiązań.
        </p>
      </motion.div>
    </section>
  );
}

function Channels() {
  return (
    <section className="px-6 pt-12 sm:px-10" aria-label="Dane kontaktowe">
      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2">
        {CHANNELS.map((ch, i) => (
          <motion.a
            key={ch.label}
            href={ch.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group rounded-3xl border border-line bg-panel/50 p-7 transition-colors hover:border-gold/40"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-gold-bright">
              <ch.icon className="h-5 w-5" />
            </span>
            <p className="mt-5 text-xs font-medium uppercase tracking-[0.2em] text-cream-faint">
              {ch.label}
            </p>
            <p className="mt-1.5 break-all text-lg font-medium text-cream transition-colors group-hover:text-gold-bright">
              {ch.value}
            </p>
            <p className="mt-1 text-sm text-cream-dim">{ch.hint}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

function CompanyDetails() {
  return (
    <section className="px-6 py-12 sm:px-10">
      <h2 className="mx-auto mb-6 max-w-4xl text-xs font-medium uppercase tracking-[0.24em] text-gold/90">
        Dane do faktury
      </h2>
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-3">
        {DETAILS.map((d, i) => (
          <motion.div
            key={d.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-3xl border border-line bg-panel/50 p-6"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-gold-bright">
              <d.icon className="h-5 w-5" />
            </span>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-cream-faint">
              {d.label}
            </p>
            <p className="mt-1.5 whitespace-pre-line text-sm leading-relaxed text-cream">
              {d.value}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function EmbeddedForm() {
  return (
    <section
      id="formularz"
      className="scroll-mt-[112px] px-6 pb-20 sm:px-10"
      aria-label="Formularz kontaktowy"
    >
      <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-line bg-ink-soft">
        <ContactLead variant="page" />
      </div>
    </section>
  );
}

export default function KontaktPage() {
  return (
    <div style={THEME_VARS.premium} className="relative bg-ink">
      <ContactProvider>
        <SiteHeader />
        <SiteHeaderSpacer />
        <main className="relative bg-ink">
          <Intro />
          <Channels />
          <CompanyDetails />
          <EmbeddedForm />
        </main>
        <SiteFooter />
      </ContactProvider>
    </div>
  );
}
