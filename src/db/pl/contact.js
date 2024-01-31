import { icons } from "../../images/index";

export const contact = {
  contactTitle: "Masz jakiś projekt?",
  cartSubtitle: "Proszę, zostaw wiadomość",
  cartDescription:
    "Skontaktuj się z nami i daj nam znać, jak możemy pomóc. Wypełnij formularz, a my odezwiemy się tak szybko, jak to możliwe.",
  contactCart: [
    {
      imgUrl: icons.location,
      companyName: "Smartqube Sp z o.o.",
      street: "ul. Rakietowa 29E",
      zip: "51-311 Wrocław, Poland",
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
      VAT: "VAT ID: PL 897 190 96 51",
      USDIBAN: "USD IBAN: 00 0000 0000 0000 0000 ",
      EURIBAN: "USD IBAN: 00 0000 0000 0000 0000 ",
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
    {
      VAT: "VAT ID: PL 897 190 96 51",
      USDIBAN: "USD IBAN: 00 0000 0000 0000 0000 ",
      EURIBAN: "USD IBAN: 00 0000 0000 0000 0000 ",
    },
  ],
  contactForm: {
    name: "Wpisz swoje imię",
    companyName: "Wpisz nazwę swojej firmy",
    email: "Wpisz swój ważny adres e-mail",
    position: "Wpisz swoją pozycję zawodową",
    phoneNumber: "Wpisz swój numer telefonu",
    message: "Wpisz swoją wiadomość",
    requiredFields:
      "Proszę zwrócić uwagę: Wszystkie pola oznaczone gwiazdką (*) są wymagane.",
  },
  errorsMessages: {
    name: "Proszę wpisać swoje imię",
    phone: "Proszę wpisać swój numer telefonu",
    companyName: "Proszę wpisać nazwę swojej firmy",
    email: "Proszę wpisać ważny adres e-mail",
    message: "Proszę wpisać swoją wiadomość",
  },
};
