import { photos, icons } from "../../images/index";
export const integration = {
  header: "Kompleksowe Rozwiązania Integracji Przemysłowej",
  whatIsIntegration: {
    title: "ISTOTA INTEGRACJI",
    subtitle: "USPRAWNIANIE ZŁOŻONYCH SYSTEMÓW",
    paragraphOne:
      "Integracja to termin opisujący szereg działań podejmowanych podczas realizacji każdego projektu, który skutkuje powstaniem złożonego systemu przemysłowego, na przykład kontenera analityki procesowej lub obudowy napędu silnikowego.",
    paragraphTwo: "Czym integracja różni się od montażu?",
    paragraphTree:
      "Montaż to tylko jeden etap całego procesu realizacji projektu. Integracja zawiera montaż wraz z inżynieringiem, zaopatrzeniem, testowaniem, pakowaniem, załadunkiem, transportem i uruchomieniem obiektowym.",
    img: photos.integrator,
  },
  design: {
    title: "Projektowanie i inżyniering",
    subtitle: "NASZE KOMPETENCJE",
    designCart: [
      {
        title: "Mechanika",
        elements: [
          "obudowy",
          "koryta i drabinki kablowe",
          "konstrukcje wsporcze",
          "technologia mocowania",
          "analiza obciążenia cieplnego",
        ],
        designIcon: icons.mechanical,
      },
      {
        title: "Elektryka i automatyka",
        elements: [
          "Rozdział niskiego napięcia",
          "System Sterowania PLC",
          "Komunikacja Szeregowa",
          "komunikacja światłowodowa i etherner",
        ],
        designIcon: icons.electrical,
      },
      {
        title: "Projektowanie dla stref EX",
        elements: [
          "Obudowy ognioszczelne Ex-d",
          "Systemy  przedmuchowe",
          "Obwody iskrobezpieczne",
          "Klasyfikacja stref zagrożonych wybuchem",
        ],
        designIcon: icons.explose,
      },
    ],
  },
  callToaction: {
    titile: "Skontaktuj się z nami już teraz.",
    subtitle: "Masz jakieś pytania?",
    button: ["Skontaktuj się z nami", "contact"],
  },
  projectExecution: {
    title: "REALIZACJA PROJEKTÓW",
    subtitle: "NASZE KOMPETENCJE",
    description:
      "Realizacja projektów jest trzonem naszej działalności. Specjalizujemy się w starannym planowaniu, profesjonalnym zaopatrzeniu, efektywnym zarządzaniu magazynem i halą montażową oraz płynnym zarządzaniu logistyką i operacjami eksportowymi. Skupiając się na precyzji i dbałości o szczegóły, zapewniamy, że każdy projekt jest realizowany z doskonałością, dostarczając wyniki, które spełniają i przekraczają oczekiwania. Nasze zaangażowanie w realizację projektu stanowi fundament naszego sukcesu i klucz do dostarczania wysokiej jakości rozwiązań naszym klientom.",
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
      "Specjalizujemy się w uruchamianiu i serwisowaniu urządzeń OEM, zapewniając ich działanie na najwyższych obrotach. Z naszą wiedzą ekspercką i doświadczeniem przestrzegamy międzynarodowych standardów, aby zagwarantować jakość i niezawodność. Nasza wiedza obejmuje projektowanie specjalistycznych rozwiązań takich jak systemy analityki procesowej, gdzie wyróżniamy się w tworzeniu spersonalizowanych rozwiązań na konkretne potrzeby.",
    img: photos.designer,
    list: [
      "Uruchamianie i Serwis Urządzeń OEM",
      "Międzynarodowe Standardy",
      "Specjalistyczne Projektowanie (np. Projektowanie Systemów Analitycznych)",
    ],
  },
};
