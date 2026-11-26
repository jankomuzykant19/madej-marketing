import type { Metadata } from "next";
import { ContactProvider } from "@/components/contact-provider";
import {
  CookieDeclaration,
  CookieSettingsButton,
} from "@/components/cookie-declaration";
import { SiteHeader, SiteHeaderSpacer } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { COMPANY, CONTACT } from "@/components/site/nav";
import { THEME_VARS } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Polityka prywatności — Madej Marketing",
  description:
    "Jak Madej Marketing przetwarza dane osobowe z formularza kontaktowego, e-maila i plików cookies oraz jakie prawa Ci przysługują.",
  robots: { index: false, follow: true },
};

const UPDATED = "26 listopada 2026";

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="pt-6 font-display text-2xl font-semibold text-cream">
      {children}
    </h2>
  );
}

function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <div style={THEME_VARS.premium} className="relative bg-ink">
      <ContactProvider>
        <SiteHeader />
        <SiteHeaderSpacer />
        <main className="px-6 pt-12 pb-20 sm:px-10">
          <article className="mx-auto max-w-3xl space-y-4 leading-relaxed text-cream-dim">
            <p className="text-xs uppercase tracking-[0.24em] text-gold">
              Ostatnia aktualizacja: {UPDATED}
            </p>
            <h1 className="font-display text-4xl font-semibold leading-tight text-cream sm:text-5xl">
              Polityka prywatności
            </h1>
            <p>
              Ta polityka wyjaśnia, jakie dane osobowe zbieram przez tę stronę,
              po co je przetwarzam i jakie prawa Ci przysługują. Stosuję
              przepisy RODO (rozporządzenie Parlamentu Europejskiego i Rady (UE)
              2016/679).
            </p>

            <H2>1. Administrator danych</H2>
            <p>
              Administratorem Twoich danych osobowych jest {COMPANY.name},{" "}
              {COMPANY.street}, {COMPANY.city}, NIP {COMPANY.nip}. We wszystkich
              sprawach dotyczących danych możesz pisać na{" "}
              <a href={CONTACT.email.href} className="text-gold-bright underline">
                {CONTACT.email.label}
              </a>{" "}
              lub dzwonić pod numer{" "}
              <a href={CONTACT.phone.href} className="text-gold-bright underline">
                {CONTACT.phone.label}
              </a>
              .
            </p>

            <H2>2. Jakie dane zbieram</H2>
            <List
              items={[
                "Z formularza kontaktowego: imię i nazwisko, adres e-mail, a jeśli je podasz — nazwę firmy, numer telefonu, treść wiadomości oraz wybrany zakres usług i budżet.",
                "Z korespondencji e-mail i rozmów telefonicznych: dane, które sam/sama mi przekażesz.",
                "Z plików cookies: informacje o Twojej przeglądarce i korzystaniu ze strony — wyłącznie w zakresie, na który się zgodzisz (patrz pkt 8).",
              ]}
            />

            <H2>3. Cele i podstawy prawne</H2>
            <List
              items={[
                "Odpowiedź na zapytanie, darmowa rozmowa, audyt i przygotowanie wyceny — działania przed zawarciem umowy na Twoje żądanie (art. 6 ust. 1 lit. b RODO) oraz mój prawnie uzasadniony interes, jakim jest kontakt z osobami, które się do mnie zwróciły (art. 6 ust. 1 lit. f RODO).",
                "Zawarcie i wykonanie umowy o współpracę (art. 6 ust. 1 lit. b RODO).",
                "Wystawianie faktur i prowadzenie księgowości — obowiązek prawny (art. 6 ust. 1 lit. c RODO).",
                "Ustalenie, dochodzenie lub obrona roszczeń — prawnie uzasadniony interes (art. 6 ust. 1 lit. f RODO).",
                "Cookies inne niż niezbędne — Twoja zgoda (art. 6 ust. 1 lit. a RODO), którą możesz w każdej chwili wycofać.",
              ]}
            />

            <H2>4. Komu przekazuję dane</H2>
            <p>
              Nie sprzedaję Twoich danych. Mogą mieć do nich dostęp wyłącznie
              podmioty, które pomagają mi prowadzić stronę i firmę, na podstawie
              umów powierzenia przetwarzania:
            </p>
            <List
              items={[
                "Vercel Inc. — hosting strony,",
                "Google (Google Workspace / Gmail, Arkusze Google) — zapisywanie zgłoszeń z formularza i korespondencja e-mail,",
                "Usercentrics A/S (Cookiebot) — zarządzanie zgodami na cookies,",
                "biuro rachunkowe — w zakresie dokumentów księgowych.",
              ]}
            />
            <p>
              Część z tych dostawców może przetwarzać dane poza Europejskim
              Obszarem Gospodarczym (np. w USA). W takim przypadku transfer
              odbywa się na podstawie decyzji Komisji Europejskiej (EU–US Data
              Privacy Framework) lub standardowych klauzul umownych.
            </p>

            <H2>5. Jak długo przechowuję dane</H2>
            <List
              items={[
                "Zapytania, które nie zakończyły się współpracą — do 12 miesięcy od ostatniego kontaktu.",
                "Dane związane z umową — przez czas współpracy, a następnie do upływu terminu przedawnienia roszczeń.",
                "Dokumenty księgowe — przez 5 lat od końca roku, w którym upłynął termin płatności podatku.",
                "Dane przetwarzane na podstawie zgody — do jej wycofania.",
              ]}
            />

            <H2>6. Twoje prawa</H2>
            <p>Masz prawo do:</p>
            <List
              items={[
                "dostępu do swoich danych i otrzymania ich kopii,",
                "sprostowania danych,",
                "usunięcia danych,",
                "ograniczenia przetwarzania,",
                "przenoszenia danych,",
                "sprzeciwu wobec przetwarzania opartego na prawnie uzasadnionym interesie,",
                "wycofania zgody w dowolnym momencie — bez wpływu na zgodność z prawem przetwarzania przed jej wycofaniem,",
                "wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa).",
              ]}
            />
            <p>
              Aby skorzystać z tych praw, napisz na{" "}
              <a href={CONTACT.email.href} className="text-gold-bright underline">
                {CONTACT.email.label}
              </a>
              .
            </p>

            <H2>7. Czy muszę podać dane?</H2>
            <p>
              Podanie danych jest dobrowolne, ale bez imienia i adresu e-mail
              nie mogę odpowiedzieć na Twoje zapytanie. Nie podejmuję wobec
              Ciebie decyzji w sposób zautomatyzowany i nie profiluję Cię.
            </p>

            <H2>8. Pliki cookies</H2>
            <p>
              Strona używa plików cookies. Niezbędne cookies są potrzebne do jej
              działania; pozostałe (np. statystyczne lub marketingowe) zapisuję
              tylko za Twoją zgodą, wyrażoną w banerze cookies. Swój wybór
              możesz zmienić w każdej chwili:{" "}
              <CookieSettingsButton className="text-gold-bright underline underline-offset-2 hover:text-cream" />
              . Aktualna lista cookies używanych na stronie:
            </p>
            <CookieDeclaration />

            <H2>9. Zmiany polityki</H2>
            <p>
              Jeśli zmienię sposób przetwarzania danych, zaktualizuję tę
              politykę i datę na górze strony.
            </p>
          </article>
        </main>
        <SiteFooter />
      </ContactProvider>
    </div>
  );
}
