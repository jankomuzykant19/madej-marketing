/**
 * Case studies — single source for the home-page "Wyniki" section and the
 * /case-study/[slug] pages. To publish a new one, add an object to
 * CASE_STUDIES; the card, the page and its metadata are generated from it.
 */

export type Stat = { value: string; label: string };

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; items: string[] }
  | { type: "callout"; text: string }
  | { type: "table"; head: string[]; rows: string[][] };

export type CaseStudy = {
  slug: string;
  /** short label shown on the card, e.g. industry */
  client: string;
  channel: string;
  period: string;
  title: string;
  /** one-sentence teaser for the card and meta description */
  summary: string;
  /** big numbers — the first one is the headline figure */
  stats: Stat[];
  body: Block[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "e-commerce-wloczki-meta-ads-1-mln",
    client: "E-commerce · producent włóczek premium",
    channel: "Meta Ads",
    period: "06.2025 – 06.2026",
    title:
      "Jak niszowy e-commerce wygenerował ponad 1 000 000 PLN z Meta Ads",
    summary:
      "Strategia walki z sezonowością: zamiast pompować koszyk, uprościłem decyzję zakupową — i odblokowałem konwersję.",
    stats: [
      { value: "1\u00a0mln+\u00a0PLN", label: "przychodu z Meta Ads w 13 miesięcy" },
      { value: "8,28", label: "średni ROAS (cel: 6,0)" },
      { value: "+152,9%", label: "przychodu rok do roku (H1)" },
      { value: "−39%", label: "kosztu pozyskania przychodu (CRR)" },
    ],
    body: [
      {
        type: "p",
        text: "Sezonowość w e-commerce potrafi wykończyć niejeden biznes. Spadki sprzedaży w okresie letnim, rosnące koszty reklam i topniejący współczynnik konwersji to codzienność wielu marek. Jak z tego wybrnąć?",
      },
      {
        type: "p",
        text: "Case study mojego klienta – producenta włóczek premium – to dowód na to, że odpowiednia strategia asortymentowa i ścisła kontrola finansów potrafią zamienić „martwy sezon” w maszynę do generowania transakcji.",
      },
      {
        type: "callout",
        text: "W ciągu 13 miesięcy wygenerowałem dla klienta ponad 1 milion złotych przychodu z samych kampanii Meta Ads.",
      },

      { type: "h2", text: "Kluczowe wyniki w liczbach (czerwiec 2025 – czerwiec 2026)" },
      {
        type: "list",
        items: [
          "Ponad 1 mln PLN przychodu z samych kampanii Meta Ads w 13 miesięcy.",
          "Średni ROAS: 8,28 przy celu na poziomie 6,0.",
          "Wzrost przychodów rok do roku (H1 vs H1): +152,9%.",
          "Wzrost liczby zamówień (H1 vs H1): +162,6%.",
          "Poprawa rentowności (CRR): spadek kosztów pozyskania przychodu o 39%.",
        ],
      },

      { type: "h2", text: "Wyzwanie: jak rozbić barierę sezonowości i odblokować konwersję?" },
      {
        type: "p",
        text: "Mój klient oferuje produkt premium o silnej fluktuacji sezonowej. Naturalne zainteresowanie dziewiarstwem spada wiosną i latem, co oznaczało konieczność znalezienia sposobu na utrzymanie sprzedaży również poza szczytem sezonu.",
      },
      {
        type: "p",
        text: "Dodatkowo dotychczasowa komunikacja skupiała się przede wszystkim na pojedynczych produktach. Dla klienta oznaczało to konieczność samodzielnego zaplanowania projektu i wyliczenia, ile surowca będzie potrzebował. To tworzyło wysoką barierę wejścia i bezpośrednio hamowało współczynnik konwersji (CVR).",
      },
      {
        type: "p",
        text: "Uznałem więc, że problemu nie rozwiążę samym zwiększaniem budżetu reklamowego. Musiałem uprościć sam proces zakupowy.",
      },

      { type: "h2", text: "Moja rekomendacja strategiczna" },
      {
        type: "p",
        text: "Zamiast sztucznie walczyć o podnoszenie średniej wartości koszyka (AOV), postawiłem na maksymalizację liczby transakcji i radykalne skrócenie ścieżki decyzyjnej. Zaproponowałem klientowi zmianę podejścia do contentu i sposobu prezentowania oferty.",
      },
      {
        type: "list",
        items: [
          "Stary model: promowanie pojedynczych motków włóczki, co wymagało od klienta samodzielnego zaplanowania całego projektu i odpowiedniego dobrania ilości materiału.",
          "Nowy model: promowanie kompletnych zestawów projektowych – wzór + precyzyjnie dobrana ilość surowca pod konkretny rozmiar.",
        ],
      },
      {
        type: "p",
        text: "Zestawy rotowałem i dopasowywałem do pór roku. Latem promowałem lżejsze projekty, które naturalnie odpowiadały sezonowym potrzebom klientów.",
      },
      { type: "h3", text: "Efekt?" },
      {
        type: "p",
        text: "Usunąłem część niepewności z procesu zakupowego i sprawiłem, że decyzja o zakupie stała się znacznie prostsza. Klient nie musiał już zastanawiać się:",
      },
      {
        type: "quote",
        items: [
          "Ile włóczki potrzebuję?",
          "Czy wybrałem odpowiednią ilość?",
          "Czy ten materiał wystarczy na mój rozmiar?",
        ],
      },
      { type: "p", text: "Dostawał gotowe rozwiązanie." },

      { type: "h2", text: "Finanse pod lupą: przejście z ROAS na wskaźnik CRR" },
      {
        type: "p",
        text: "Większość agencji patrzy przede wszystkim na ROAS w panelu Meta. W tym projekcie, ze względu na silne wahania sezonowe, uznałem, że sam ROAS nie daje mi wystarczającego obrazu sytuacji. Dlatego kluczowym wskaźnikiem w zarządzaniu budżetem stał się dla mnie CRR (Cost Revenue Ratio).",
      },
      {
        type: "p",
        text: "CRR pokazuje stosunek kosztu reklamy do wygenerowanego przychodu. Innymi słowy – mówi mi wprost, jaki procent każdej zarobionej złotówki oddaję platformie reklamowej. Na tej podstawie dynamicznie alokowałem budżety.",
      },
      {
        type: "list",
        items: [
          "W szczycie sezonu agresywnie skalowałem wydatki, wykorzystując moment, w którym popyt był najwyższy.",
          "W trudniejszych miesiącach koncentrowałem się na ochronie marży klienta. Wspierałem sprzedaż kampaniami z darmowymi materiałami edukacyjnymi, które jednocześnie budowały bazę odbiorców pod kolejne miesiące.",
        ],
      },
      {
        type: "p",
        text: "Dzięki temu nie próbowałem na siłę utrzymywać takiego samego poziomu wydatków przez cały rok. Dostosowywałem inwestycję reklamową do realnego potencjału sprzedażowego.",
      },

      { type: "h2", text: "Twarde dane z panelu Meta Ads" },
      { type: "h3", text: "1. Podsumowanie okresu głównego (01.06.2025 – 30.06.2026)" },
      {
        type: "p",
        text: "W ciągu 13 miesięcy kampanie pracowały ze stabilną, bardzo wysoką efektywnością, znacznie przebijając założone KPI.",
      },
      {
        type: "table",
        head: ["Metryka", "Wynik (06.2025–06.2026)"],
        rows: [
          ["Średni ROAS", "8,28"],
          ["Wskaźnik CRR", "12,08%"],
          ["Średni koszt kliknięcia (CPC)", "0,71 PLN"],
        ],
      },
      {
        type: "p",
        text: "W ciągu zaledwie 13 miesięcy wygenerowałem więc ponad 1 milion PLN przychodu, a każda złotówka wydana na reklamę wracała średnio ponad 8-krotnie.",
      },
      { type: "h3", text: "2. Skalowanie rok do roku: H1 2025 vs H1 2026" },
      {
        type: "p",
        text: "Porównanie pierwszych półroczy – styczeń–czerwiec – najlepiej pokazuje, jak zmiana strategii na zestawy projektowe odblokowała wolumen zamówień.",
      },
      {
        type: "table",
        head: ["Metryka", "Zmiana H1 2026 vs H1 2025"],
        rows: [
          ["Wydatki reklamowe", "+54,2%"],
          ["Przychód", "+152,9%"],
          ["Liczba zamówień", "+162,6%"],
          ["ROAS", "+64,0%"],
          ["CRR", "−39,0%"],
        ],
      },
      {
        type: "p",
        text: "Najważniejszy był dla mnie fakt, że wzrost budżetu o 54,2% nie tylko nie pogorszył efektywności, ale pozwolił zwiększyć przychód aż o 152,9%. Jednocześnie liczba zamówień wzrosła o 162,6%, a CRR spadł o 39%.",
      },
      { type: "h3", text: "3. Perspektywa długoterminowa – 24 miesiące" },
      {
        type: "p",
        text: "W dłuższej perspektywie – od lipca 2024 do czerwca 2026 – mogłem sprawdzić, czy wysoki współczynnik konwersji (CVR) był jednorazowym wynikiem, czy rzeczywiście udało mi się zbudować powtarzalny model.",
      },
      {
        type: "table",
        head: ["Metryka", "07.2024 – 06.2026"],
        rows: [
          ["Średni wskaźnik CRR", "13,05%"],
          ["Średni współczynnik konwersji (CVR)", "2,59%"],
        ],
      },
      {
        type: "p",
        text: "To pokazało mi, że poprawa konwersji nie była chwilowym efektem pojedynczej kampanii. Model utrzymywał się w dłuższym okresie.",
      },

      { type: "h2", text: "Kluczowe wnioski: dlaczego ten model zadziałał?" },
      { type: "h3", text: "1. Postawiłem na konwersję zamiast pompowania koszyka" },
      {
        type: "p",
        text: "Dynamika wzrostu liczby zamówień (+162,6%) wyprzedziła dynamikę wzrostu przychodów (+152,9%). Wzrostu nie zbudowałem poprzez podnoszenie cen czy sztuczne zwiększanie wartości koszyka. Zbudowałem go przede wszystkim poprzez usunięcie tarcia zakupowego. Zamiast sprzedawać klientowi pojedynczy produkt i przerzucać na niego odpowiedzialność za zaplanowanie całego projektu, zacząłem sprzedawać gotowe rozwiązanie.",
      },
      { type: "h3", text: "2. Większy budżet może oznaczać wyższą efektywność" },
      {
        type: "p",
        text: "Często przy skalowaniu Meta Ads wyniki zaczynają spadać. W tym przypadku stało się odwrotnie. Dzięki precyzyjnej rotacji asortymentu zwiększenie budżetu o 54,2% przyniosło aż 152,9% wzrostu przychodu i obniżyło CRR z 18,28% do 11,15%. W praktyce mój klient płacił o blisko 40% mniej za pozyskanie każdej złotówki przychodu niż rok wcześniej.",
      },
      { type: "h3", text: "3. Sezonowość można ujarzmić odpowiednią ofertą" },
      {
        type: "p",
        text: "Nie próbowałem walczyć z sezonowością wyłącznie poprzez większe wydatki reklamowe. Zamiast tego dopasowywałem ofertę do aktualnego popytu. Rotacja zestawów dopasowanych do pogody i pór roku pozwoliła utrzymać stabilny CVR na poziomie 2,59% przez pełne 24 miesiące.",
      },

      { type: "h2", text: "Chcesz odblokować konwersję w swoim e-commerce?" },
      {
        type: "p",
        text: "Sezonowość, wysokie koszty reklam czy spadająca liczba zamówień to problemy, które potrafię rozwiązywać nie tylko na poziomie panelu reklamowego. Patrzę szerzej – na ofertę, sposób prezentowania produktów, bariery zakupowe, sezonowość i ekonomię całego procesu.",
      },
      {
        type: "callout",
        text: "Czasami problemem nie jest to, że reklamy nie działają. Problemem jest to, co klient widzi po kliknięciu w reklamę i jak wiele decyzji musi podjąć, zanim zdecyduje się na zakup.",
      },
    ],
  },
];

export const getCaseStudy = (slug: string) =>
  CASE_STUDIES.find((c) => c.slug === slug);

/** Keeps hyphenated words like "e-commerce" from breaking across lines. */
export const noBreakHyphens = (s: string) => s.replace(/-/g, "‑");
