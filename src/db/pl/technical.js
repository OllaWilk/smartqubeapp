import { icons } from "../../images/index";

export const technical = {
  header: "Dokumenty Handlowe i prawne",
  description:
    "Zapoznaj się z naszymi kluczowymi dokumentami, aby lepiej zrozumieć nasze polityki, co zapewni jasność w zakresie Twoich praw i obowiązków podczas korzystania z naszych produktów lub usług.",
  documents: [
    {
      img: icons.document,
      text: "Pełna treść klauzul dotyczących Rozporządzenia o Ochronie Danych Osobowych (RODO)",
      buttonNameEn: "Download PDF (English)",
      downloadUrlEn: "./pdf/en/General_Data_Protection_Regulation_en.pdf",
      downloadLanguage: "Pobierz PDF (Polski)",
      downloadLangugageUrl:
        "./pdf/pl/POLITYKA_OCHRONY_DANYCH_OSOBOWYCH_SmartQube.pdf",
    },
    {
      img: icons.sale,
      text: "Ogólne Warunki Sprzedaży Towarów i Usług",
      buttonNameEn: "Download PDF (English)",
      downloadUrlEn:
        "./pdf/en/Guidelines_for_the_Sale_of_Our_Products_or_Services_en.pdf",
      downloadLanguage: "Pobierz PDF (Polski)",
      downloadLangugageUrl: "./pdf/pl/Warunki_sprzedazy.pdf",
    },
    {
      img: icons.purchese,
      text: "Ogólne Warunki Zakupu Towarów i Usług",
      buttonNameEn: "Download PDF (English)",
      downloadUrlEn:
        "./pdf/en/Terms_and_Conditions_of_Purchase_for_Our_Products_or_Services_en.pdf",
      downloadLanguage: "Pobierz PDF (Polski)",
      downloadLangugageUrl: "./pdf/pl/Warunki_zakupow.pdf",
    },
    {
      img: icons.shield,
      text: "Ogólne Warunki Gwarancji",
      buttonNameEn: "Download PDF (English)",
      downloadUrlEn: "./pdf/en/Warranty_coverage_for_our_products_en.pdf",

      downloadLanguage: "Pobierz PDF (Polski)",
      downloadLangugageUrl: "./pdf/pl/Karta_gwarancji.pdf",
    },
    {
      img: icons.document,
      text: "Polityka Prywatności",
      buttonNameEn: "Download PDF (English)",
      downloadUrlEn: "./pdf/en/Privacy_policy_en.pdf",
      downloadLanguage: "Pobierz PDF (Polski)",
      downloadLangugageUrl: "./pdf/pl/Polityka_prywatności.pdf",
    },
    {
      img: icons.document,
      text: "Polityka Cookies, zarządzanie preferencjami",
      buttonNameEn: "Zapoznaj się z naszą polityką cookie",
      goToPage: "/cookies",
    },
  ],
};
