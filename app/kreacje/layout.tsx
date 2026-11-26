import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kreacje reklamowe i landing page’e — Madej Marketing",
  description:
    "Grafiki i wideo reklamowe (Reels, TikTok, Shorts) oraz szybkie landing page’e projektowane od zera pod Twój produkt i jeden cel: konwersję.",
};

export default function KreacjeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
