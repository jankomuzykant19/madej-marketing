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
    slug: "e-commerce-hobby-meta-ads-1-mln",
    client: "E-commerce z branży hobby / rękodzieła",
    channel: "Meta Ads",
    period: "13 miesięcy",
    title:
      "Jak niszowy e-commerce wygenerował ponad 1 000 000 PLN z Meta Ads",
    summary:
      "Strategia walki z sezonowością: zamiast pompować koszyk, uprościłem decyzję zakupową — i odblokowałem konwersję.",
    stats: [
      { value: "1\u00a0mln+\u00a0PLN", label: "przychodu z Meta Ads w 13 miesięcy" },
      { value: "8,28", label: "średni ROAS (cel: 6,0)" },
      { value: "+152,9%", label: "przychodu rok do roku (I półrocze)" },
      { value: "−39%", label: "kosztu pozyskania przychodu (CRR)" },
    ],
    body: [
      {
        type: "p",
        text: "Sezonowość w e-commerce potrafi wykończyć niejeden biznes. Spadki sprzedaży w okresie letnim, rosnące koszty reklam i topniejący współczynnik konwersji to codzienność wielu marek. Jak z tego wybrnąć?",
      },
      {
        type: "p",
        text: "Case study mojego klienta – sklepu internetowego z branży hobby / rękodzieła – to dowód na to, że odpowiednia strategia asortymentowa i ścisła kontrola finansów potrafią zamienić „martwy sezon” w maszynę do generowania transakcji.",
      },
      {
        type: "callout",
        text: "W ciągu 13 miesięcy wygenerowałem dla klienta ponad 1 milion złotych przychodu z samych kampanii Meta Ads.",
      },

      { type: "h2", text: "Kluczowe wyniki w liczbach (13 miesięcy)" },
      {
        type: "list",
        items: [
          "Ponad 1 mln PLN przychodu z samych kampanii Meta Ads w 13 miesięcy.",
          "Średni ROAS: 8,28 przy celu na poziomie 6,0.",
          "Wzrost przychodów rok do roku (I półrocze): +152,9%.",
          "Wzrost liczby zamówień rok do roku (I półrocze): +162,6%.",
          "Poprawa rentowności (CRR): spadek kosztów pozyskania przychodu o 39%.",
        ],
      },

      { type: "h2", text: "Wyzwanie: jak rozbić barierę sezonowości i odblokować konwersję?" },
      {
        type: "p",
        text: "Mój klient oferuje produkt premium o silnej fluktuacji sezonowej. Naturalne zainteresowanie tą kategorią spada wiosną i latem, co oznaczało konieczność znalezienia sposobu na utrzymanie sprzedaży również poza szczytem sezonu.",
      },
      {
        type: "p",
        text: "Dodatkowo dotychczasowa komunikacja skupiała się przede wszystkim na pojedynczych produktach. Dla klienta oznaczało to konieczność samodzielnego zaplanowania projektu i wyliczenia, ile materiałów będzie potrzebował. To tworzyło wysoką barierę wejścia i bezpośrednio hamowało współczynnik konwersji (CVR).",
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
          "Stary model: promowanie pojedynczych produktów, co wymagało od klienta samodzielnego zaplanowania całego projektu i odpowiedniego dobrania ilości materiałów.",
          "Nowy model: promowanie gotowych zestawów produktowych – wszystko, czego klient potrzebuje do konkretnego projektu, w jednym koszyku.",
        ],
      },
      {
        type: "p",
        text: "Zestawy rotowałem i dopasowywałem do pór roku. Latem promowałem projekty, które naturalnie odpowiadały sezonowym potrzebom klientów.",
      },
      { type: "h3", text: "Efekt?" },
      {
        type: "p",
        text: "Usunąłem część niepewności z procesu zakupowego i sprawiłem, że decyzja o zakupie stała się znacznie prostsza. Klient nie musiał już zastanawiać się:",
      },
      {
        type: "quote",
        items: [
          "Ile produktu potrzebuję?",
          "Czy dobrałem wszystko, co trzeba?",
          "Czy to wystarczy na mój projekt?",
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
      { type: "h3", text: "1. Podsumowanie 13 miesięcy" },
      {
        type: "p",
        text: "W ciągu 13 miesięcy kampanie pracowały ze stabilną, bardzo wysoką efektywnością, znacznie przebijając założone KPI.",
      },
      {
        type: "table",
        head: ["Metryka", "Wynik (13 miesięcy)"],
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
      { type: "h3", text: "2. Skalowanie rok do roku: pierwsze półrocze" },
      {
        type: "p",
        text: "Porównanie pierwszego półrocza z analogicznym okresem rok wcześniej najlepiej pokazuje, jak zmiana strategii na gotowe zestawy produktowe odblokowała wolumen zamówień.",
      },
      {
        type: "table",
        head: ["Metryka", "Zmiana rok do roku (I półrocze)"],
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
        text: "W dłuższej perspektywie – 24 miesięcy – mogłem sprawdzić, czy wysoki współczynnik konwersji (CVR) był jednorazowym wynikiem, czy rzeczywiście udało mi się zbudować powtarzalny model.",
      },
      {
        type: "table",
        head: ["Metryka", "24 miesiące"],
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
  {
    slug: "wypozyczalnia-aut-premium-los-angeles-google-meta-ads",
    client: "Wypożyczalnia samochodów premium, Los Angeles (USA)",
    channel: "Google Ads + Meta Ads",
    period: "rok do roku",
    title:
      "Od przepalania budżetu do ponad 170 000 USD przychodu miesięcznie",
    summary:
      "Zamiast licytować się o klienta na lotnisku, przechwyciłem go w miastach, z których dopiero planuje podróż — i odciąłem ruch, który nie miał szans skonwertować.",
    stats: [
      { value: "170 tys.+ USD", label: "przychodu z Google Ads w rekordowym miesiącu" },
      { value: "8,27", label: "ROAS Google Ads (wcześniej ok. 4,0)" },
      { value: "+74%", label: "przychodu z Google Ads rok do roku" },
      { value: "+89%", label: "rezerwacji z Meta Ads rok do roku" },
    ],
    body: [
      {
        type: "p",
        text: "Rynek wynajmu luksusowych samochodów w USA – a zwłaszcza w Los Angeles – to jedno z najbardziej konkurencyjnych środowisk reklamowych na świecie. Stawki za kliknięcie (CPC) potrafią przyprawić o zawrót głowy, a walka o klienta lądującego na lotnisku LAX przypomina cyfrową wojnę cenową. Jak w takich warunkach zwiększyłem miesięczny przychód z Google Ads o ponad 70% rok do roku, jednocześnie podwajając rentowność kampanii?",
      },
      {
        type: "p",
        text: "To case study mojego klienta – wypożyczalni samochodów premium z Los Angeles. Pokazuję w nim, jak dzięki bezwzględnej eliminacji „pustego ruchu” i precyzyjnemu geotargetowaniu poprawiłem jednocześnie skalę i rentowność działań reklamowych.",
      },
      {
        type: "callout",
        text: "Rekordowy miesiąc w Google Ads przyniósł ponad 170 000 USD przychodu przy ROAS 8,27.",
      },

      { type: "h2", text: "Kluczowe wyniki w liczbach" },
      {
        type: "list",
        items: [
          "Rekordowy miesiąc w Google Ads: ponad 170 tys. USD przychodu – o 74% więcej niż w tym samym miesiącu rok wcześniej.",
          "Skok rentowności: ROAS Google Ads wzrósł z ok. 4,0 do 8,27.",
          "Skalowanie Meta Ads: liczba rezerwacji wzrosła rok do roku o 89%.",
          "Nowy sufit przychodowy w Meta: miesięczny przychód z kampanii na Facebooku i Instagramie wzrósł rok do roku o 90%.",
        ],
      },

      { type: "h2", text: "Wyzwanie: wojna na lotnisku i „przepalane” dolary" },
      {
        type: "p",
        text: "W branży wynajmu aut premium większość marek popełnia ten sam błąd: kieruje reklamy do osób, które już są w docelowym mieście albo szukają samochodu bezpośrednio na lotnisku. Efekt? Ogromna konkurencja, licytacja stawek i drastyczny spadek marży.",
      },
      {
        type: "p",
        text: "Podczas audytu konta znalazłem dodatkowo dwa poważne problemy strukturalne. Budżet uciekał na grupy odbiorców, które generowały wysoki koszt, ale nie finalizowały transakcji z powodu ograniczeń po stronie biznesu. Jednocześnie ogólne targetowanie na całe Stany Zjednoczone rozmywało potencjał reklamowy i utrudniało sensowną alokację budżetu.",
      },
      {
        type: "p",
        text: "Musiałem więc nie tylko zwiększyć skalę, ale przede wszystkim znaleźć miejsca, w których budżet był marnowany.",
      },

      { type: "h2", text: "Kluczowe filary wdrożonej strategii" },
      { type: "h3", text: "Filar 1: Eliminacja „waste spend” – segment 18–24" },
      {
        type: "p",
        text: "Audyt pokazał, że najmłodsza grupa wiekowa pochłaniała znaczną część budżetu przy fatalnym ROAS na poziomie 1,53.",
      },
      {
        type: "p",
        text: "Problem nie leżał wyłącznie w samej reklamie. Użytkownicy z tego segmentu często rezygnowali na stronie z powodu tzw. Underage Fee – dodatkowej opłaty ubezpieczeniowej dla kierowców poniżej 25. roku życia, standardowej w USA. W praktyce płaciłem więc za ruch, który strukturalnie miał ograniczoną możliwość konwersji.",
      },
      {
        type: "p",
        text: "Całkowicie odciąłem ten segment i przeniosłem budżet na najbardziej zyskowną grupę 25–44. Oczyściłem w ten sposób konto z dużej części pustego ruchu i podniosłem ogólny ROAS konta z 4,21 do szczytowego 8,27.",
      },
      { type: "h3", text: "Filar 2: Strategia „City-to-LA” – geotargetowanie" },
      {
        type: "p",
        text: "Drugim kluczowym krokiem było odejście od ogólnego targetowania całych Stanów Zjednoczonych. Zamiast walczyć o klienta dopiero wtedy, gdy jest już w Los Angeles, skoncentrowałem budżety na tzw. wealth feeder markets – m.in. Nowym Jorku, Miami i Chicago. To miasta, z których zamożni klienci dopiero planują podróż do LA.",
      },
      {
        type: "p",
        text: "Celem było przechwycenie klienta przed podróżą i domknięcie rezerwacji, zanim wsiądzie do samolotu. Dzięki temu ominąłem najdroższą konkurencję bezpośrednio na lotnisku – zamiast walczyć o klienta w momencie, w którym walczą o niego wszyscy, pozyskiwałem go wcześniej, na etapie planowania podróży.",
      },

      { type: "h2", text: "Twarde dane z paneli Google Ads i Meta Ads" },
      {
        type: "p",
        text: "Porównania rok do roku najlepiej pokazują efekt nowej alokacji budżetów.",
      },
      { type: "h3", text: "Google Ads – przychód wyższy o ponad 70% rok do roku" },
      {
        type: "p",
        text: "Po odcięciu segmentu 18–24 i przejściu na strategię „City-to-LA” konto zanotowało najlepszy miesiąc w historii: przychód wzrósł o ponad 70%, a rentowność ponad dwukrotnie.",
      },
      {
        type: "table",
        head: ["Metryka", "Zmiana rok do roku (rekordowy miesiąc)"],
        rows: [
          ["Przychód z Google Ads", "+74%"],
          ["Średni ROAS", "+107% (z ok. 4,0 do 8,27)"],
        ],
      },
      { type: "h3", text: "Meta Ads – prawie dwa razy więcej rezerwacji rok do roku" },
      {
        type: "p",
        text: "Social media przestały pełnić wyłącznie funkcję wizerunkową – zamieniłem je w twardy kanał sprzedażowy. Postawiłem na kreacje wideo pokazujące luksusowy „lifestyle z Los Angeles”, emitowane w zamożnych stanach, z których klienci przylatują do LA.",
      },
      {
        type: "table",
        head: ["Metryka", "Zmiana rok do roku (ten sam miesiąc)"],
        rows: [
          ["Liczba rezerwacji", "+89%"],
          ["Miesięczny przychód z Meta Ads", "+90%"],
        ],
      },

      { type: "h2", text: "Trzy lekcje z tego projektu" },
      { type: "h3", text: "1. Optymalizacja zaczyna się od eliminacji" },
      {
        type: "p",
        text: "W segmencie premium kluczowe jest bezwzględne odcinanie grup, które generują wysokie CPC, a jednocześnie mają operacyjne bariery zakupowe – takie jak Underage Fee. Odcięcie segmentu z ROAS 1,53 automatycznie podniosło ROAS całego konta i uwolniło budżet na ruch, który naprawdę konwertował.",
      },
      {
        type: "p",
        text: "Ten projekt po raz kolejny pokazał mi, że optymalizacja nie zawsze polega na dodawaniu kampanii, grup reklam czy odbiorców. Czasem największy wzrost daje usunięcie tego, co nie działa.",
      },
      { type: "h3", text: "2. Trzeba rozumieć rzeczywistą ścieżkę klienta" },
      {
        type: "p",
        text: "W turystyce i wynajmie premium aukcji reklamowych nie trzeba wygrywać w miejscu docelowym. Przechwyciłem intencję zakupową w Nowym Jorku, Miami czy Chicago – jeszcze przed wylotem – i dotarłem do klienta na wcześniejszym etapie ścieżki, omijając najdroższą konkurencję w Kalifornii. Rekordowy miesiąc pokazał, że samo przesunięcie momentu dotarcia do klienta może mieć ogromny wpływ na wynik całego kanału.",
      },
      { type: "h3", text: "3. Skalowanie może iść w parze z rentownością" },
      {
        type: "p",
        text: "Wzrost miesięcznego przychodu z Google Ads o ponad 70% rok do roku przy jednoczesnym wzroście ROAS z ok. 4,0 do 8,27 to najlepszy dowód, że skalowanie nie musi oznaczać przepalania większego budżetu. W markach premium kluczowe jest nie samo zwiększanie wydatków, ale ich lepsza alokacja i głębokie zrozumienie danych biznesowych klienta.",
      },

      { type: "h2", text: "Twój biznes premium utknął w miejscu?" },
      {
        type: "p",
        text: "Przepalasz budżet na ruch, który daje kliknięcia, ale nie dowozi transakcji? Ścigasz się z konkurencją o najdroższe frazy, zamiast przechwytywać klienta wcześniej na jego ścieżce zakupowej?",
      },
      {
        type: "p",
        text: "W segmencie premium liczą się niuanse – od struktury kampanii, przez rentowność poszczególnych segmentów, po zrozumienie, kiedy i gdzie klient podejmuje decyzję zakupową.",
      },
      {
        type: "callout",
        text: "W tym projekcie nie potrzebowałem większego budżetu. Potrzebowałem lepiej zrozumieć, gdzie ten budżet powinien trafiać.",
      },
    ],
  },
  {
    slug: "e-commerce-fitness-landing-page-meta-ads-konwersja-6x",
    client: "Amerykański e-commerce z branży sprzętu treningowego",
    channel: "Meta Ads + landing page",
    period: "6 miesięcy",
    title:
      "Z 0,67% do 4,03%: jak nowy landing page i kreacje podniosły konwersję z Meta Ads 6×",
    summary:
      "Ruch był, sprzedaży nie. Zamiast kupować więcej kliknięć, przebudowałem to, co dzieje się po kliknięciu — w czterech iteracjach.",
    stats: [
      { value: "6×", label: "wyższy współczynnik konwersji (0,67% → 4,03%)" },
      { value: "−77%", label: "kosztu pozyskania zakupu (CPA)" },
      { value: "3,7×", label: "więcej zakupów z Meta Ads" },
      { value: "2,9×", label: "wyższy przychód przy budżecie niższym o 17%" },
    ],
    body: [
      {
        type: "p",
        text: "Gdy reklamy przestają dowozić sprzedaż, odruchem jest zmiana kreacji, targetowania albo budżetu. W przypadku mojego klienta – amerykańskiej marki sprzętu treningowego – kluczowa bariera leżała gdzie indziej: w tym, co działo się po kliknięciu.",
      },
      {
        type: "p",
        text: "Przez kilka miesięcy pracowałem na dwóch frontach jednocześnie: przebudowywałem landing page w czterech iteracjach i rozwijałem kampanie o nowe materiały reklamowe.",
      },
      {
        type: "callout",
        text: "Efekt: 6× wyższy współczynnik konwersji i koszt pozyskania zakupu niższy o 77%.",
      },

      { type: "h2", text: "Kluczowe wyniki w liczbach" },
      {
        type: "p",
        text: "Porównanie dwóch 28-dniowych okresów: przed zmianami i pół roku później, po wdrożeniu czwartej wersji landing page'a.",
      },
      {
        type: "list",
        items: [
          "Współczynnik konwersji (kliknięcie → zakup): wzrost z 0,67% do 4,03%, czyli 6×.",
          "Koszt pozyskania zakupu (CPA): spadek o 77%.",
          "Liczba zakupów: wzrost 3,7×.",
          "Przychód z Meta Ads: wzrost 2,9× – przy budżecie niższym o 17%.",
          "Przychód z jednego kliknięcia: wzrost 4,8×.",
        ],
      },

      { type: "h2", text: "Wyzwanie: ruch był, sprzedaży nie" },
      {
        type: "p",
        text: "Kampanie generowały dużo ruchu przy niskim koszcie kliknięcia. Ruch jednak się nie konwertował: ponad 99% osób z reklamy opuszczało stronę bez zakupu, a kupował tylko 1 na 150 klikających. Dalsze zwiększanie zasięgu oznaczałoby kupowanie kolejnego ruchu, który i tak nie kupi.",
      },

      { type: "h2", text: "Strategia: dwa równoległe tory" },
      { type: "h3", text: "Tor 1: landing page jako proces, nie jednorazowy projekt" },
      {
        type: "p",
        text: "Zamiast jednego redesignu przeprowadziłem cztery iteracje nowego landing page'a. Każda wersja testowała inne podejście w trzech obszarach:",
      },
      {
        type: "list",
        items: [
          "Ścieżka zakupowa: jak szybko i w ilu krokach klient przechodzi od zainteresowania do płatności. Wersja finalna pozwala pominąć koszyk i przejść od razu do checkoutu.",
          "Treść landingu: jak komunikuję produkt, jego korzyści i argumenty zakupowe.",
          "Sekcja produktowa: sposób prezentacji oferty i elementy ułatwiające decyzję.",
        ],
      },
      {
        type: "p",
        text: "Każda wersja dawała dane, które kształtowały kolejną. Wynik opisany w tym case study to efekt wersji v4: komunikacji korzyści dla sportowców, autorytetu twórcy produktu i jasnego wezwania do zakupu – zamiast klasycznego układu sklepu z galerią, opcjami produktu i dodatkami.",
      },
      { type: "h3", text: "Tor 2: nowe materiały reklamowe i optymalizacja kampanii" },
      {
        type: "p",
        text: "Równolegle rozwijałem kampanie Meta Ads: tworzyłem nowe kreacje i optymalizowałem wyniki reklam. Efekt był widoczny już na pierwszym etapie lejka – CTR wzrósł z 0,92% do 1,12% (+22%). Reklamy przyciągały bardziej zaangażowany ruch, który nowa strona potrafiła zamienić w sprzedaż.",
      },

      { type: "h2", text: "Gdzie powstała różnica" },
      {
        type: "p",
        text: "Oba tory się uzupełniały, ale skala zmian pokazuje, który był decydujący. Lepsze reklamy podniosły CTR o 22%. Współczynnik konwersji na stronie wzrósł 6×. Największa część wzrostu wydarzyła się po kliknięciu – na landing page'u. Dzięki temu każde kliknięcie z reklamy jest dziś warte prawie pięć razy więcej przychodu niż przed zmianami.",
      },

      { type: "h2", text: "Twarde dane z Meta Ads" },
      { type: "h3", text: "1. Efektywność lejka" },
      {
        type: "table",
        head: ["Metryka", "Przed (stara strona)", "Po (landing page v4)", "Zmiana"],
        rows: [
          ["CTR", "0,92%", "1,12%", "+22%"],
          ["CPC", "1,16 USD", "1,57 USD", "+35%"],
          ["Dodania do koszyka (z kliknięć)", "3,4%", "6,4%", "+88%"],
          ["Kliknięcie → zakup", "0,67%", "4,03%", "+501% (6×)"],
          ["CPA", "171,87 USD", "39,05 USD", "−77%"],
          ["Przychód na kliknięcie", "0,49 USD", "2,33 USD", "+376% (4,8×)"],
        ],
      },
      { type: "h3", text: "2. Skala" },
      {
        type: "table",
        head: ["Metryka", "Zmiana (28 dni po vs 28 dni przed)"],
        rows: [
          ["Wydatki reklamowe", "−17%"],
          ["Kliknięcia w link", "−39%"],
          ["Dodania do koszyka", "+14%"],
          ["Zakupy", "+266% (3,7×)"],
          ["Przychód", "+192% (2,9×)"],
        ],
      },
      {
        type: "p",
        text: "Uwaga do lejka: stara strona miała ekspresowy zakup, który omijał zdarzenie rozpoczęcia checkoutu, a nowa pozwala pominąć koszyk. Etap „checkout” nie jest więc porównywalny między okresami – efekt oceniam na zakupach i dodaniach do koszyka.",
      },

      { type: "h2", text: "Kluczowe wnioski dla e-commerce" },
      { type: "h3", text: "1. Reklama dowozi ruch, strona dowozi sprzedaż" },
      {
        type: "p",
        text: "Nawet najlepsze kreacje nie pomogą, jeśli 99% ruchu odbija się od strony. Prawdziwy skok przyszedł dopiero wtedy, gdy lepsze reklamy spotkały się z dopracowaną ścieżką zakupową.",
      },
      { type: "h3", text: "2. Landing page to proces" },
      {
        type: "p",
        text: "Przełomowy wynik dała dopiero czwarta wersja. Iteracyjne testowanie ścieżki, treści i sekcji produktowej wygrywa z jednorazowym redesignem.",
      },
      { type: "h3", text: "3. Wolumen ponad koszyk" },
      {
        type: "p",
        text: "Średnia wartość zamówienia spadła o ok. 20%, ale 3,7× więcej zamówień dało niemal 3× wyższy przychód. Krótsza ścieżka zakupowa przyciąga więcej decyzji.",
      },

      { type: "h2", text: "Twoje reklamy klikają, ale nie sprzedają?" },
      {
        type: "p",
        text: "Wysoki CTR i tani ruch nic nie znaczą, jeśli strona nie domyka sprzedaży. Nie tylko prowadzę kampanie – pracuję na całym lejku, od kreacji reklamowej po płatność, i iteracyjnie przebudowuję miejsca, w których uciekają klienci.",
      },
      {
        type: "callout",
        text: "Strona + reklamy + analityka od jednej osoby – dlatego widzę, gdzie naprawdę gubisz sprzedaż.",
      },
    ],
  },
];

export const getCaseStudy = (slug: string) =>
  CASE_STUDIES.find((c) => c.slug === slug);

/**
 * Keeps hyphenated words like "e-commerce" and grouped numbers like
 * "1 000 000 PLN" from breaking across lines.
 */
export const noBreakHyphens = (s: string) =>
  s
    .replace(/-/g, "‑")
    .replace(/(\d) (?=\d)/g, "$1 ")
    .replace(/(\d) (?=PLN|USD)/g, "$1 ");
