import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Manrope } from "next/font/google";
import { MotionProvider } from "@/components/motion-provider";
import { THEME_INIT_SCRIPT } from "@/lib/theme";
import { ContactClickTracking } from "@/components/contact-click-tracking";
import {
  CONSENT_DEFAULT_SCRIPT,
  GTM_ID,
  GTM_SCRIPT,
} from "@/lib/analytics";
import "./globals.css";

const display = Manrope({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
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
    <html lang="pl" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${display.variable} ${body.variable}`}
      >
        {/* Sets data-theme before the page content paints (see lib/theme.ts).
            It sits at the top of <body>, not in <head>, because Cookiebot
            injects its own scripts into <head> and would break hydration.
            Marked so Cookiebot's auto-blocking leaves it alone — it stores
            nothing but the visitor's own theme choice. */}
        <script
          data-cookieconsent="ignore"
          dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }}
        />
        {/* GTM without JavaScript (official fallback). */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* Consent Mode v2 defaults — must run before Cookiebot and GTM. */}
        <Script
          id="consent-default"
          strategy="beforeInteractive"
          data-cookieconsent="ignore"
          dangerouslySetInnerHTML={{ __html: CONSENT_DEFAULT_SCRIPT }}
        />
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="6d52ef01-c354-42e0-b840-c17a57773018"
          data-blockingmode="auto"
          strategy="beforeInteractive"
        />
        {/* GTM loads regardless of the banner; its tags wait for consent. */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          data-cookieconsent="ignore"
          dangerouslySetInnerHTML={{ __html: GTM_SCRIPT }}
        />
        <ContactClickTracking />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
