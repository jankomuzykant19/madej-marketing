/**
 * Google Tag Manager + Consent Mode v2.
 *
 * Load order (set up in app/layout.tsx):
 *   1. CONSENT_DEFAULT_SCRIPT — everything "denied" until the visitor chooses,
 *   2. Cookiebot — shows the banner and sends the consent update to Google,
 *   3. GTM — tags inside the container (GA4, Ads, Meta…) honour that consent.
 *
 * GA4, Google Ads and Meta Pixel are configured inside the GTM container,
 * not in this codebase.
 */

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-TZ2RG662";

export const CONSENT_DEFAULT_SCRIPT = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag("consent","default",{ad_personalization:"denied",ad_storage:"denied",ad_user_data:"denied",analytics_storage:"denied",functionality_storage:"denied",personalization_storage:"denied",security_storage:"granted",wait_for_update:500});gtag("set","ads_data_redaction",true);gtag("set","url_passthrough",false);`;

export const GTM_SCRIPT = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.setAttribute('data-cookieconsent','ignore');j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`;

type DataLayerWindow = Window & { dataLayer?: Record<string, unknown>[] };

/** Pushes an event for GTM triggers ("Custom Event" = the event name). */
export function trackEvent(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params });
}
