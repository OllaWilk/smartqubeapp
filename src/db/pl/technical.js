import { icons } from "../../images/index";

export const technical = {
  header: "Wytyczne prawne i Twoja prywatność",
  description:
    "Zapoznaj się z naszymi kluczowymi dokumentami, aby lepiej zrozumieć nasze polityki, co zapewni jasność w zakresie Twoich praw i obowiązków podczas korzystania z naszych produktów lub usług.",
  documents: [
    {
      img: icons.document,
      text: "Nasze zaangażowanie w ochronę danych i zgodność z Ogólnym Rozporządzeniem o Ochronie Danych (RODO)",
      buttonNameEn: "Download PDF (English)",
      downloadUrlEn: "./pdf/en/General_Data_Protection_Regulation_en.pdf",
      downloadLanguage: "Pobierz PDF (Polski)",
      downloadLangugageUrl:
        "./pdf/pl/POLITYKA_OCHRONY_DANYCH_OSOBOWYCH_SmartQube.pdf",
    },
    {
      img: icons.sale,
      text: "Wytyczne regulujące sprzedaż naszych produktów lub usług w języku angielskim i polskim",
      buttonNameEn: "Download PDF (English)",
      downloadUrlEn:
        "./pdf/en/Guidelines_for_the_Sale_of_Our_Products_or_Services_en.pdf",
      downloadLanguage: "Pobierz PDF (Polski)",
      downloadLangugageUrl: "./pdf/pl/Warunki_sprzedazy.pdf",
    },
    {
      img: icons.purchese,
      text: "Warunki dotyczące zakupu naszych produktów lub usług, dostępne zarówno w języku angielskim, jak i polskim",
      buttonNameEn: "Download PDF (English)",
      downloadUrlEn:
        "./pdf/en/Terms_and_Conditions_of_Purchase_for_Our_Products_or_Services_en.pdf",
      downloadLanguage: "Pobierz PDF (Polski)",
      downloadLangugageUrl: "./pdf/pl/Warunki_zakupow.pdf",
    },
    {
      img: icons.shield,
      text: "Szczegóły dotyczące pokrycia gwarancyjnego naszych produktów w języku angielskim i polskim.",
      buttonNameEn: "Download PDF (English)",
      downloadUrlEn: "./pdf/en/Warranty_coverage_for_our_products_en.pdf",

      downloadLanguage: "Pobierz PDF (Polski)",
      downloadLangugageUrl: "./pdf/pl/Karta_gwarancji.pdf",
    },
    {
      img: icons.document,
      text: "Polityka Prywatności - Poznaj nasze zaangażowanie w ochronę prywatności i dowiedz się, jak chronimy Twoje dane osobowe",
      buttonNameEn: "Download PDF (English)",
      downloadUrlEn: "./pdf/en/Privacy_policy_en.pdf",
      downloadLanguage: "Pobierz PDF (Polski)",
      downloadLangugageUrl: "./pdf/pl/Polityka_prywatności.pdf",
    },
    {
      img: icons.document,
      text: "Polityka Cookie - Poznaj nasze podejście do plików cookie i zarządzaj swoimi preferencjami.",
      buttonNameEn: "Zapoznaj się z naszą polityką cookie",
      goToPage: "/cookies",
    },
  ],
};
