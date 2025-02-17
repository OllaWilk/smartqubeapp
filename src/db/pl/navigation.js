import { logos, iso, photos } from "../../images";

export const navigationNavbar = [
  "home",
  "o nas",
  { rozwiazania: ["integracja", "rozwiazania chłodnicze", "Usługi obiektowe"] },
  "kontakt",
];

export const integrationNav = {
  integration: {
    abstract:
      "Integracja obejmuje szeroki zakres działań projektowych, w tym inżyniering, dobór komponentów i zaopatrzenie, testowanie, pakowanie, wysyłkę i uruchomienie obiektowe, podczas gdy montaż jest tylko częścią tego obszernego procesu. Specjalizujemy się w inżynieringu - systemach mechanicznych i elektrycznych, systemach niskich napięć, systemach kontrolnych oraz uruchamianiu urządzeń OEM - przestrzegając międzynarodowych norm.",
    linkTo: ["DOWIEDZ SIĘ WIĘCEJ O INTEGRACJI", "integration"],
    subjects: [
      {
        name: "NAPĘDY",
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
      "KONTROLA KLIMATU OBEJMUJE TWORZENIE OPTYMALNYCH WARUNKÓW DLA WRAŻLIWEGO SPRZĘTU POPRZEZ REGULACJĘ TEMPERATURY I WILGOTNOŚCI. NASZE ROZWIĄZANIA OBEJMUJĄ NAJMNIEJSZĄ NA RYNKU JEDNOSTKĘ KLIMATYZACYJNĄ, NAJCIEŃSZĄ JEDNOSTKĘ KLIMATYZACYJNĄ, NAJWYŻSZĄ TEMPERATURĘ PRACY, NAJWIĘKSZY WYBÓR KLIMATYZATORÓW DO STREF ZAGROŻONYCH WYBUCHEM I WIELE INNYCH.",
    linkTo: ["PRZEJDŹ DO STRONY ROZWIĄZAŃ CHŁODNICZYCH", "climatecontrol"],
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
      "Oferujemy szeroki zakres usług, w tym serwisowanie sprzętu, kalibrację i rozwiązywanie problemów. Nasz zespół ekspertów zadba, aby  Twoje systemy działały z maksymalną wydajnością i zgodnie z normami branżowymi.",
    linkTo: ["poznaj nasze usługi", "services"],
  },
};

export const footer = {
  logo: {
    imgUrl: logos.logoTm,
    companyName: "SMARTqube Sp z o.o.",
    street: "ul. Rakietowa 29E",
    zip: "54-615 Wrocław, Poland",
  },
  logoUSA: {
    imgUrl: logos.logoTm,
    street: "141 Wilson Avenue ",
    zip: "Greensburg, PA 15601",
  },

  iso: {
    isoUSA: "ISO 9001:2015 Certyfikat nr: 023196",
    isoPL: "ISO 9001:2015 Certyfikat nr: 3780/03/2024/ZSZ/C",
    rights: ["© 2024 SMARTqube", "Wszelkie prawa zastrzeżone"],
  },

  certificates: {
    certUSA: iso.pri_cert,
    certPL: iso.cert_PAJ,
    other: [iso.ce, iso.crus, iso.culus, iso.ex, iso.iec, iso.iecx, iso.ukca],
  },

  documentsLink: "Dokumenty handlowe i prawne",
};

export const geolocation = {
  textLanguage:
    "Oglądasz domyślną wersję strony w języku angielskim dla regionu Ameryka (USA).",
  textRegion:
    " Wybierz swóju region i język aby dostosować treść strony do swoich preferencji.",
  close: "zamknij",
};

export const translations = {
  integration: "Integracja",
  "climate control": "Rozwiązania chłodnicze",
  ENCLOSURES: "Klimatyzatory",
  services: "Usługi obiektowe",
};
