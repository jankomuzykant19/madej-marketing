/**
 * Single source of truth for the site navigation — used by the header
 * (desktop nav + mobile burger) and by the footer, so the two can never
 * drift apart.
 */
export const NAV_LINKS = [
  { href: "/", label: "Strona główna" },
  { href: "/kreacje", label: "Kreacje / LP" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

/** Anchor of the contact form living on the /kontakt page. */
export const CONTACT_FORM_HREF = "/kontakt#formularz";

/** Billing details — shown in the footer and on the contact page. */
export const COMPANY = {
  name: "Bartłomiej Madej Marketing",
  street: "ul. Longinusa Podbipięty 4/38",
  city: "92-440 Łódź",
  nip: "7282910951",
} as const;

/**
 * Direct contact channels. `href` is the machine-readable form (tel:/mailto:),
 * `label` the human-readable one.
 */
export const CONTACT = {
  phone: { label: "+48 782 496 726", href: "tel:+48782496726" },
  email: {
    label: "madejbartlomiej1@gmail.com",
    href: "mailto:madejbartlomiej1@gmail.com",
  },
} as const;
