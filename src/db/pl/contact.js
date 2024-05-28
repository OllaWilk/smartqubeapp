import { icons } from "../../images/index";

export const contact = {
  contactTitle: "Masz jakiś projekt?",
  cartSubtitle: "Zostaw nam wiadomość",
  cartDescription:
    "Skontaktuj się z nami i daj nam znać, jak możemy pomóc. Wypełnij formularz, a my odezwiemy się tak szybko, jak to możliwe.",
  contactCart: [
    {
      imgUrl: icons.location,
      companyName: "Smartqube Sp z o.o.",
      street: "ul. Rakietowa 29E",
      zip: "54-615 Wrocław, Poland",
    },
    {
      imgUrl: icons.envelop,
      mail: "info@smartqube.pl",
    },
    {
      imgUrl: icons.hours,
      hours: "Godziny pracy:",
      workWeek: "Pon-Pt: 8:00 - 16:00",
      weekend: "Sob, Niedz: Zamknięte",
    },
    {
      VAT: "NIP: PL 897 190 96 51",
      USDIBAN: "USD IBAN: 17 1050 1575 1000 0090 3282 4709",
      EURIBAN: "EUR IBAN: 40 1050 1575 1000 0090 3282 4683",
      PLNIBAN: "PLN IBAN: 62 1050 1575 1000 0090 3282 4675",
    },
  ],
  contactCartUSA: [
    {
      imgUrl: icons.location,
      companyName: "Smartqube ",
      street: "141 Wilson Avenue ",
      zip: "Greensburg, PA 15601",
    },
    {
      imgUrl: icons.envelop,
      mail: "sales@smartqube.com",
    },
    {
      imgUrl: icons.hours,
      hours: "Godziny pracy:",
      workWeek: "Mo-Fr: 8:00 - 18:00 ",
      weekend: "Sa, So: Zamknięte",
    },
  ],
  contactForm: {
    name: "Wpisz swoje imię *",
    companyName: "Wpisz nazwę swojej firmy *",
    email: "Wpisz swój aktualny adres e-mail *",
    position: "Wpisz swoje stanowisko",
    phoneNumber: "Wpisz swój numer telefonu *",
    message: "Wpisz swoją wiadomość *",
    requiredFields:
      "Proszę zwrócić uwagę: Wszystkie pola oznaczone gwiazdką (*) są wymagane.",
    submit: "wyślij",
    isOver18: "Oświadczam, że mam więcej niż 18 lat *",
    dataProcessingConsent: [
      "Zgadzam się na przetwarzanie moich danych osobowych przez SmartQube z siedzibą we Wrocławiu w celu świadczenia usług i otrzymywania informacji handlowych.",
      "Więcej informacji",
      "Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z obowiązującymi w miejscu mojego zamieszkania oraz miejscu prowadzenia przez SmartQube z siedzibą we Wrocławiu ul. Rakietowa 29E, 54-615 Wrocław KRS: 0000984616, NIP: 8971909651; REGON: 522685620 działalności przepisami dotyczącymi świadczenia usług drogą elektroniczną oraz przepisami dotyczącymi ochrony danych osobowych w celu przekazania i wysyłania w przyszłości informacji handlowej. Podanie danych osobowych jest świadome dobrowolne. Jest jednak niezbędne do prawidłowego świadczenia zamówionych usług. Zostałem poinformowany że przysługuje mi ich prawdo dostępu do swoich danych, możliwości ich poprawiania, żądania zaprzestania ich przetwarzania - z tym, że zaprzestanie przetwarzania danych osobowych wiązać się będzie z zaprzestaniem świadczenia usług. Administratorem danych jest SmartQube z siedzibą we Wrocławiu ul. Rakietowa 29E, 54-615 Wrocław KRS: 0000984616, NIP: 8971909651; REGON: 522685620",
    ],

    GDPR: [
      "Zgadzam się na przetwarzanie moich danych osobowych przez SmartQube zgodnie z RODO dla celów związanych z formularzem kontaktowym.",
      "Więcej informacji",

      "Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z obowiązującym przepisami dotyczącymi ochrony danych osobowych (w tym w szczególności rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE oraz ustawą z dnia 10 maja 2018 roku o ochronie danych osobowych) w związku z wysłaniem zapytania poprzez formularz kontaktowy. Podanie danych osobowych jest dobrowolne, ale niezbędne do przetworzenia zapytania. Zostałem poinformowany, że przysługuje mi ich prawdo dostępu do swoich danych, możliwości ich poprawiania, żądania zaprzestania ich przetwarzania. Administratorem danych jest SmartQube z siedzibą we Wrocławiu ul. Rakietowa 29E, 54-615 Wrocław KRS: 0000984616, NIP: 8971909651; REGON: 522685620",
    ],
    gdrLink: [
      "Pełna treść informacji dotyczących przetwarzania danych osobowych jest tutaj. ",
      "http://localhost:3000/privacy",
    ],
    requestCall: "Zostaw nam swój numer, oddzwonimy!",
    submitCall: "Prześlij",
  },

  errorsMessages: {
    name: "Proszę wpisać swoje imię",
    phone: "Proszę wpisać swój numer telefonu",
    companyName: "Proszę wpisać nazwę swojej firmy",
    email: "Proszę wpisać ważny adres e-mail",
    message: "Proszę wpisać swoją wiadomość",
    isOver18: "Musisz mieć skończone 18 lat",
    dataProcessingConsent: "Musisz wyrazić zgodę na przetwarzanie danych",
    euLawConsent: "Wymagana jest zgoda na przetwarzanie danych zgodnie z RODO",
  },
};
