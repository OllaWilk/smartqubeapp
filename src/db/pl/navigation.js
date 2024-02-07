import { logos, iso, photos } from "../../images";

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
      "KONTROLA KLIMATU POLEGA NA TWORZENIU OPTYMALNYCH WARUNKÓW DLA WRAŻLIWEGO SPRZĘTU PRZEZ REGULACJĘ TEMPERATURY I WILGOTNOŚCI. NASZE ROZWIĄZANIA OBEJMUJĄ NAJMNIEJSZĄ NA RYNKU JEDNOSTKĘ KLIMATYZACYJNĄ, NAJCIEŃSZĄ JEDNOSTKĘ KLIMATYZACYJNĄ, JEDNOSTKĘ Z NAJWYŻSZĄ DOPUSZCZALNĄ TEMPERATURĄ EKSPLOATACJI, NAJWIĘKSZY WYBÓR KLIMATYZACJI DO STREF ZAGROŻONYCH I WIELE INNYCH.",
    linkTo: ["eksploruj kontrolę klimatu", "kontrolaklimatu"],
  },
  {
    id: "usa",
    name: "Obudowy",
    img: photos.iceCube,
    abstract:
      "Ice Qube oferuje szeroką gamę wysokiej jakości produktów do kontroli klimatu. Smart Qube wykorzystuje ich rozwiązania oraz pełni funkcję dystrybutora na Europę.",
    linkTo: ["odwiedź ICEqube", "https://www.iceqube.com"],
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
