import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Madej Marketing",
  description: "Madej Marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
