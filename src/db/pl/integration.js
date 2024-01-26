import { photos, icons } from "../../images/index";
export const integration = {
  header: "Kompleksowe Rozwiązania Integracji Przemysłowej",
  whatIsIntegration: {
    title: "ISTOTA INTEGRACJI",
    subtitle: "USPRAWNIANIE SKOMPLIKOWANYCH SYSTEMÓW",
    paragraphOne:
      "Integracja to termin opisujący szereg działań podejmowanych podczas realizacji każdego projektu, który skutkuje powstaniem skomplikowanego systemu przemysłowego, na przykład analizatora schronienia lub obudowy VFD.",
    paragraphTwo: "Czym Integracja różni się od Montażu?",
    paragraphTree:
      "Montaż to tylko jeden etap całego procesu realizacji projektu. Integracja zawiera Montaż wraz z Inżynierią, Zaopatrzeniem, Testowaniem, Pakowaniem, Ładowaniem, Transportem i Uruchomieniem na Miejscu.",
    img: photos.integrator,
  },
  design: {
    title: "PROJEKTOWANIE INŻYNIERSKIE",
    subtitle: "NASZE KOMPETENCJE",
    designCart: [
      {
        title: "Mechaniczny",
        elements: [
          "obudowy",
          "tace kablowe",
          "konstrukcje wsporcze",
          "technologia mocowania",
          "analiza obciążenia cieplnego",
        ],
        designIcon: icons.mechanical,
      },
      {
        title: "Elektryczny",
        elements: [
          "Rozdział Mocy Niskiego Napięcia",
          "System Sterowania PLC",
          "Komunikacja Szeregowa",
          "Światłowód i Ethernet",
        ],
        designIcon: icons.electrical,
      },
      {
        title: "Projekt Ex",
        elements: [
          "obudowy dźwiękoszczelne",
          "systemy przeczyszczane",
          "pętle wewnętrznie bezpieczne",
          "klasyfikacja obszaru",
        ],
        designIcon: icons.explose,
      },
    ],
  },
  callToaction: {
    titile: "Nie wahaj się skontaktować z nami w dowolnym momencie.",
    subtitle: "Masz jakieś pytania?",
    button: ["Skontaktuj się z nami", "kontakt"],
  },
  projectExecution: {
    title: "REALIZACJA PROJEKTU",
    subtitle: "NASZE KOMPETENCJE",
    description:
      "W naszej dziedzinie specjalizacji, realizacja projektu leży w samym sercu tego, co robimy. Specjalizujemy się w starannym planowaniu, profesjonalnym zaopatrzeniu, efektywnym zarządzaniu magazynem i halą montażową oraz płynnym zarządzaniu logistyką i operacjami eksportowymi. Skupiając się na precyzji i dbałości o szczegóły, zapewniamy, że każdy projekt jest realizowany z doskonałością, dostarczając wyniki, które spełniają i przekraczają oczekiwania. Nasze zaangażowanie w realizację projektu stanowi fundament naszego sukcesu i klucz do dostarczania wysokiej jakości rozwiązań naszym klientom.",
    img: photos.logistic,
    list: [
      "Planowanie",
      "Zaopatrzenie",
      "Zarządzanie Magazynem i Halą Montażową",
      "Logistyka i Eksport",
    ],
  },
  knowledge: {
    title: "SPECJALISTYCZNA WIEDZA",
    subtitle: "NASZE KOMPETENCJE",
    description:
      "Specjalizujemy się w uruchamianiu i serwisowaniu urządzeń OEM, zapewniając ich działanie na najwyższych obrotach. Z naszą wiedzą ekspercką i doświadczeniem przestrzegamy międzynarodowych standardów, aby zagwarantować jakość i niezawodność. Nasza wiedza rozciąga się na specjalistyczne projektowanie, takie jak Projektowanie Systemów Analitycznych, gdzie wyróżniamy się w tworzeniu spersonalizowanych rozwiązań na konkretne potrzeby.",
    img: photos.designer,
    list: [
      "Uruchamianie i Serwis Urządzeń OEM",
      "Międzynarodowe Standardy",
      "Specjalistyczne Projektowanie (np. Projektowanie Systemów Analitycznych)",
    ],
  },
};
