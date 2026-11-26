import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
import { MotionProvider } from "@/components/motion-provider";
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


export const metadata: Metadata = {
  
  title: "Madej Marketing — strona, reklamy i analityka od jednej osoby",
  description:
    "Strony, kampanie Meta i Google Ads oraz analityka od jednej osoby — dla firm, które chcą wyników, a nie lajków. Bezpłatny audyt i wycena w 5 dni.",
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
        className={`${display.variable} ${body.variable}`}
      >
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="6d52ef01-c354-42e0-b840-c17a57773018"
          data-blockingmode="auto"
          strategy="beforeInteractive"
        />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
