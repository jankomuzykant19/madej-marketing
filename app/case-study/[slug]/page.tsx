import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ContactProvider } from "@/components/contact-provider";
import { SiteHeader, SiteHeaderSpacer } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { NextSteps } from "@/components/site/next-steps";
import {
  CASE_STUDIES,
  getCaseStudy,
  noBreakHyphens,
  type Block,
} from "@/lib/case-studies";
import { THEME_VARS } from "@/lib/theme";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const cs = getCaseStudy((await params).slug);
  if (!cs) return {};
  return {
    title: `${cs.title} — Case study | Madej Marketing`,
    description: cs.summary,
  };
}

function Content({ block }: { block: Block }) {
  switch (block.type) {
    case "p":
      return <p className="leading-relaxed text-cream-dim">{block.text}</p>;
    case "h2":
      return (
        <h2 className="pt-6 font-display text-2xl font-semibold leading-tight text-cream sm:text-3xl">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="pt-2 text-lg font-medium text-cream">{block.text}</h3>
      );
    case "list":
      return (
        <ul className="space-y-2.5">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 leading-relaxed text-cream-dim">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <ul className="space-y-1.5 border-l-2 border-gold/50 pl-5">
          {block.items.map((item) => (
            <li key={item} className="italic text-cream">
              „{item}”
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <p className="rounded-2xl border border-gold/30 bg-gold/[0.06] p-5 text-lg leading-relaxed text-cream">
          {block.text}
        </p>
      );
    case "table":
      return (
        <div className="overflow-x-auto rounded-2xl border border-line">
          <table
            className={`w-full text-left text-sm ${block.head.length > 2 ? "min-w-[420px]" : ""}`}
          >
            <thead className="bg-panel">
              <tr>
                {block.head.map((h) => (
                  <th key={h} scope="col" className="px-4 py-3 font-medium text-cream">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row[0]} className="border-t border-line">
                  {row.map((cell, i) => (
                    <td
                      key={i}
                      className={
                        i === 0
                          ? "px-4 py-3 text-cream-dim"
                          : i === row.length - 1 && /^[+−-]/.test(cell)
                            ? "px-4 py-3 font-medium text-gold-bright"
                            : "px-4 py-3 text-cream"
                      }
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export default async function CaseStudyPage({ params }: Params) {
  const cs = getCaseStudy((await params).slug);
  if (!cs) notFound();

  return (
    <div style={THEME_VARS.premium} className="relative bg-ink">
      <ContactProvider>
        <SiteHeader />
        <SiteHeaderSpacer />
        <main>
          <article className="px-6 pt-12 pb-8 sm:px-10">
            <div className="mx-auto max-w-3xl">
              <Link
                href="/#wyniki"
                className="inline-flex items-center gap-2 text-sm text-cream-dim transition-colors hover:text-cream"
              >
                <ArrowLeft className="h-4 w-4" /> Wszystkie wyniki
              </Link>

              <p className="mt-8 text-xs uppercase tracking-[0.24em] text-gold">
                Case study · {cs.channel} · {cs.period}
              </p>
              <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-cream sm:text-5xl">
                {noBreakHyphens(cs.title)}
              </h1>
              <p className="mt-4 text-cream-dim">{cs.client}</p>

              <dl className="mt-10 grid grid-cols-2 gap-4">
                {cs.stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-line bg-panel/50 p-5"
                  >
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="font-display text-xl font-semibold text-gold-bright sm:text-3xl">
                      {s.value}
                    </dd>
                    <dd className="mt-1 text-sm text-cream-dim">{s.label}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-12 space-y-5">
                {cs.body.map((block, i) => (
                  <Content key={i} block={block} />
                ))}
              </div>
            </div>
          </article>
          <NextSteps />
        </main>
        <SiteFooter />
      </ContactProvider>
    </div>
  );
}
