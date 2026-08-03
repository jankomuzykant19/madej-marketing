import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt — Madej Marketing",
  description:
    "Skontaktuj się z Madej Marketing — dane firmy, NIP i formularz kontaktowy. Umów darmową, luźną rozmowę o swoim projekcie.",
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
