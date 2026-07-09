import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-display-src",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body-src",
});

// Kreacje / LP page — monospace
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-tech",
});

export const metadata: Metadata = {
  title: "Madej Marketing - Marketing, który sprzedaje",
  description:
    "Madej Marketing — kampanie, strony i strategie, które zamieniają uwagę w klientów. Skontaktuj się i opowiedz nam o swoim projekcie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="dark">
      <body
        suppressHydrationWarning
        className={`${display.variable} ${body.variable} ${mono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
