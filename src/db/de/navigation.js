import { logos, iso, photos } from "../../images";

export const navigationNavbar = [
  "Startseite",
  "Über uns",
  { Lösungen: ["Integration", "Kühlungslösungen", "Dienstleistungen"] },
  "Kontakt",
];

export const integrationNav = {
  integration: {
    abstract:
      "Integration umfasst eine breite Palette von Projektaktivitäten, einschließlich Engineering, Beschaffung, Testen, Verpacken, Versenden und Inbetriebnahme vor Ort, während die Montage nur ein Teil dieses umfangreichen Prozesses ist. Wir spezialisieren uns auf Ingenieurdesign, mechanische und elektrische Systeme, Niederspannungs-Stromverteilung, Steuerungssysteme und die Inbetriebnahme von OEM-Geräten unter Einhaltung internationaler Standards.",
    linkTo: ["Integration erkunden", "integration"],
    subjects: [
      {
        name: "Motorsteuerung",
        btnsList: [
          "Lösungen für variable Geschwindigkeit",
          "Soft-Start-Lösungen",
        ],
      },
      {
        name: "Messung & Analytik",
        btnsList: ["CEMS-Lösungen", "Chroma-Lösungen", "Spektro-Lösungen"],
      },
      {
        name: "Energie",
        btnsList: ["UPS-Lösungen"],
      },
      {
        name: "Netzwerk",
        btnsList: ["RF-Lösungen", "Faser-Lösungen"],
      },
      {
        name: "Individuell",
        btnsList: ["Ingenieurlösungen", "Lösungen nach Spezifikation"],
      },
    ],
  },
  "climate control": {
    abstract:
      "KLIMAKONTROLLE BEINHALTET DIE SCHAFFUNG OPTIMALER BEDINGUNGEN FÜR EMPFINDLICHE AUSRÜSTUNG DURCH REGULIERUNG VON TEMPERATUR UND FEUCHTIGKEIT. UNSERE LÖSUNGEN UMFASSEN DIE KLEINSTE KLIMAANLAGE DER BRANCHE, DIE DÜNNSTE KLIMAANLAGE, DIE HÖCHSTE BETRIEBSTEMPERATUR, DIE GRÖSSTE AUSWAHL AN KLIMAKONTROLLEN FÜR GEFÄHRLICHE BEREICHE UND VIELES MEHR.",
    linkTo: ["Klimakontrolle erkunden", "climatecontrol"],
  },
  ENCLOSURES: {
    id: "usa",
    img: photos.iceCube,
    abstract:
      "Ice Qube liefert eine breite Palette von hochwertigen Produkten zur Klimakontrolle. Smart Qube nutzt ihre Lösungen und fungiert auch als Distributor für Europa.",
    linkTo: ["ICEqube besuchen", "https://www.iceqube.com"],
  },

  services: {
    abstract:
      "Wir bieten eine breite Palette von Dienstleistungen an, einschließlich Gerätewartung, Kalibrierung und Fehlerbehebung. Unser Team von Experten stellt sicher, dass Ihre Systeme mit maximaler Leistung und in Übereinstimmung mit Industriestandards arbeiten.",
    linkTo: ["Dienstleistungen erkunden", "services"],
  },
};

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
