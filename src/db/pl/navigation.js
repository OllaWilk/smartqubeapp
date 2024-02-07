import { logos, iso } from "../../images";

export const navigationNavbar = [
  "home",
  "o nas",
  { rozwiazania: ["integracja", "rozwiazania chłodnicze", "usługi"] },
  "kontakt",
];

export const integrationNav = [
  {
    name: "Integracja",
    abstract:
      "Integracja obejmuje szeroki zakres działań projektowych, w tym inżynierię, zaopatrzenie, testowanie, pakowanie, wysyłkę i uruchomienie na miejscu, podczas gdy montaż jest tylko częścią tego obszernego procesu. Specjalizujemy się w projektowaniu inżynierskim, systemach mechanicznych i elektrycznych, dystrybucji energii niskiego napięcia, systemach sterowania oraz uruchamianiu urządzeń OEM, zgodnie z normami międzynarodowymi.",
    linkTo: ["eksploruj integrację", "integracja"],
    subjects: [
      {
        name: "Sterowanie Silnikami",
        btnsList: [
          "Rozwiązania z regulowaną prędkością",
          "Rozwiązania Soft Start",
        ],
      },
      {
        name: "Pomiary i Analizy",
        btnsList: [
          "Rozwiązania CEMS",
          "Rozwiązania Chroma",
          "Rozwiązania Spectro",
        ],
      },
      {
        name: "Energia",
        btnsList: ["Rozwiązania UPS"],
      },
      {
        name: "Sieć",
        btnsList: ["Rozwiązania RF", "Rozwiązania światłowodowe"],
      },
      {
        name: "Na zamówienie",
        btnsList: [
          "Rozwiązania inżynierskie",
          "Rozwiązania zbudowane na specyfikację",
        ],
      },
    ],
  },
  {
    name: "Kontrola klimatu",
    abstract:
      "Kontrola klimatu polega na tworzeniu optymalnych warunków dla wrażliwego sprzętu poprzez regulację temperatury i wilgotności. Nasze rozwiązania obejmują projektowanie i instalację systemów HVAC, pomieszczeń czystych i systemów monitorowania środowiska.",
    linkTo: ["eksploruj kontrolę klimatu", "kontrolaklimatu"],
  },
  {
    name: "Usługi",
    abstract:
      "Oferujemy szeroki zakres usług, w tym konserwację sprzętu, kalibrację i rozwiązywanie problemów. Nasz zespół ekspertów zapewnia, że twoje systemy działają z maksymalną wydajnością i zgodnie z normami branżowymi.",
    linkTo: ["eksploruj usługi", "usługi"],
  },
];

export const footer = {
  logo: {
    imgUrl: logos.logo,
    companyName: "SMARTqube Sp z o.o.",
    street: "ul. Rakietowa 29E",
    zip: "51-311 Wrocław, Poland",
  },
  logoUSA: {
    imgUrl: logos.logo,
    street: "141 Wilson Avenue ",
    zip: "Greensburg, PA 15601",
  },

  iso: [
    "ISO 9001:2015 Certificate Number: 017884",
    "© 2024 SMARTqube",
    "All Rights Reserved",
  ],

  certificates: [
    iso.sri,
    iso.ce,
    iso.crus,
    iso.culus,
    iso.ex,
    iso.iec,
    iso.iecx,
    iso.ukca,
  ],
};
