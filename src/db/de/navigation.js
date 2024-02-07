import { logos, iso, photos } from "../../images";

export const navigationNavbar = [
  "Startseite",
  "Über uns",
  { Lösungen: ["Integration", "Kühlungslösungen", "Dienstleistungen"] },
  "Kontakt",
];

export const integrationNav = [
  {
    name: "Integration",
    abstract:
      "Integration umfasst eine breite Palette von Projektaktivitäten, einschließlich Ingenieurwesen, Beschaffung, Tests, Verpackung, Versand und Inbetriebnahme vor Ort, während die Montage nur ein Teil dieses umfangreichen Prozesses ist. Wir sind spezialisiert auf Ingenieurdesign, mechanische und elektrische Systeme, Niederspannungs-Stromverteilung, Steuerungssysteme und Inbetriebnahme von OEM-Geräten, unter Einhaltung internationaler Standards.",
    linkTo: ["Integration erkunden", "Integration"],
    subjects: [
      {
        name: "Motorsteuerung",
        btnsList: [
          "Lösungen für variable Geschwindigkeiten",
          "Soft-Start-Lösungen",
        ],
      },
      {
        name: "Messung & Analytik",
        btnsList: ["CEMS-Lösungen", "Chroma-Lösungen", "Spektro-Lösungen"],
      },
      {
        name: "Energie",
        btnsList: ["USV-Lösungen"],
      },
      {
        name: "Netzwerk",
        btnsList: ["RF-Lösungen", "Faser-Lösungen"],
      },
      {
        name: "Angepasst",
        btnsList: ["Engineered Solutions", "Build To Spec-Lösungen"],
      },
    ],
  },
  {
    name: "Klimakontrolle",
    abstract:
      "KLIMAKONTROLLE BESTEHT DARIN, OPTIMALE BEDINGUNGEN FÜR EMPFINDLICHE GERÄTE DURCH REGELUNG VON TEMPERATUR UND FEUCHTIGKEIT ZU SCHAFFEN. UNSERE LÖSUNGEN UMFASSEN DIE KLEINSTE KLIMAANLAGE AUF DEM MARKT, DIE DÜNNSTE KLIMAANLAGE, DIE EINHEIT MIT DER HÖCHSTEN BETRIEBSTEMPERATUR, DIE GRÖSSTE AUSWAHL AN KLIMAKONTROLLEN FÜR GEFAHRENGEBIETE UND VIELES MEHR.",
    linkTo: ["Klimakontrolle erkunden", "Klimakontrolle"],
  },
  {
    id: "usa",
    name: "Gehäuse",
    img: photos.iceCube,
    abstract:
      "Ice Qube bietet eine breite Palette von hochwertigen Produkten zur Klimakontrolle. Smart Qube nutzt ihre Lösungen und fungiert auch als Distributor für Europa.",
    linkTo: ["besuche ICEqube", "https://www.iceqube.com"],
  },
  {
    name: "Dienstleistungen",
    abstract:
      "Wir bieten eine breite Palette von Dienstleistungen an, einschließlich Ausrüstungswartung, Kalibrierung und Fehlerbehebung. Unser Team von Experten stellt sicher, dass Ihre Systeme mit Spitzenleistung und in Übereinstimmung mit Industriestandards arbeiten.",
    linkTo: ["Dienstleistungen erkunden", "Dienstleistungen"],
  },
];

export const footer = {
  logo: {
    imgUrl: logos.logo,
    companyName: "SMARTqube",
    street: "ul. Rakietowa 29E",
    zip: "51-311 Breslau, Polen",
  },
  logoUSA: {
    imgUrl: logos.logo,
    street: "141 Wilson Avenue ",
    zip: "Greensburg, PA 15601",
  },

  iso: [
    "ISO 9001:2015 Zertifikatsnummer: 017884",
    "© 2024 SMARTqube",
    "Alle Rechte vorbehalten",
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
