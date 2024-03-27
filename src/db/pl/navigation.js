import { logos, iso, photos } from "../../images";

export const navigationNavbar = [
  "home",
  "o nas",
  { rozwiazania: ["integracja", "rozwiazania chłodnicze", "usługi"] },
  "kontakt",
];

export const integrationNav = {
  integration: {
    abstract:
      "Integracja obejmuje szeroki zakres działań projektowych, w tym projektowanie inżynierskie, pozyskiwanie, testowanie, pakowanie, wysyłkę i uruchomienie na miejscu, podczas gdy montaż jest tylko częścią tego obszernego procesu. Specjalizujemy się w projektowaniu inżynierskim, systemach mechanicznych i elektrycznych, dystrybucji energii niskonapięciowej, systemach kontrolnych oraz uruchamianiu urządzeń OEM, przestrzegając międzynarodowych norm.",
    linkTo: ["poznaj naszą integrację", "integration"],
    subjects: [
      {
        name: "Sterowanie silnikiem",
        btnsList: [
          "Rozwiązania z regulacją prędkości",
          "Rozwiązania Soft Start",
        ],
      },
      {
        name: "Pomiary i analityka",
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
        btnsList: ["Rozwiązania Pasywne", "Rozwiązania Aktywne"],
      },
      {
        name: "Niestandardowe",
        btnsList: [
          "Rozwiązania inżynieryjne",
          "Rozwiązania zbudowane na zamówienie",
        ],
      },
    ],
  },
  "climate control": {
    abstract:
      "KONTROLA KLIMATU OBEJMUJE TWORZENIE OPTYMALNYCH WARUNKÓW DLA WRAŻLIWEGO SPRZĘTU POPRZEZ REGULACJĘ TEMPERATURY I WILGOTNOŚCI. NASZE ROZWIĄZANIA OBEJMUJĄ NAJMNIEJSZĄ NA RYNKU JEDNOSTKĘ KLIMATYZACYJNĄ, NAJCIEŃSZĄ JEDNOSTKĘ KLIMATYZACYJNĄ, NAJWYŻSZĄ TEMPERATURĘ PRACY, NAJWIĘKSZY WYBÓR KLIMATYZACJI DO STREF ZAGROŻONYCH I WIELE INNYCH.",
    linkTo: ["przejdź do strony kontrolę klimatu", "climatecontrol"],
  },
  ENCLOSURES: {
    id: "usa",
    img: photos.iceCube,
    abstract:
      "Ice Qube dostarcza szeroką gamę wysokiej jakości produktów do kontroli klimatu. Smart Qube wykorzystuje ich rozwiązania i działa również jako dystrybutor w Europie.",
    linkTo: ["odwiedź ICEqube", "https://www.iceqube.com"],
  },

  services: {
    abstract:
      "Oferujemy szeroki zakres usług, w tym konserwację sprzętu, kalibrację i rozwiązywanie problemów. Nasz zespół ekspertów zapewnia, że twoje systemy działają z maksymalną wydajnością i zgodnie z normami branżowymi.",
    linkTo: ["poznaj nasze usługi", "services"],
  },
};

export const footer = {
  logo: {
    imgUrl: logos.logoTm,
    companyName: "SMARTqube Sp z o.o.",
    street: "ul. Rakietowa 29E",
    zip: "51-311 Wrocław, Poland",
  },
  logoUSA: {
    imgUrl: logos.logoTm,
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

export const geolocation = {
  textLanguage:
    "Oglądasz domyślną wersję strony w języku angielskim dla regionu Ameryka (USA).",
  textRegion:
    " Wybierz swóju region i język aby dostosować treść strony do swoich preferencji.",
  close: "zamknij",
};
