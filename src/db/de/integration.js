import { photos, icons } from "../../images/index";
export const integration = {
  header: "Umfassende industrielle Integrationslösungen",
  whatIsIntegration: {
    title: "DAS WESEN DER INTEGRATION",
    subtitle: "VEREINFACHUNG KOMPLEXER SYSTEME",
    paragraphOne:
      "Integration ist ein Begriff, der eine Reihe von Aktivitäten beschreibt, die während der Ausführung jedes Projekts, das in einem komplexen Industriesystem resultiert, zum Beispiel einem Analysator-Schutzgehäuse oder VFD-Gehäuse, durchgeführt werden müssen.",
    paragraphTwo: "Wie unterscheidet sich die Integration von der Montage?",
    paragraphTree:
      "Die Montage ist nur eine Phase des gesamten Projektdurchführungsprozesses. Die Integration umfasst Montage zusammen mit Engineering, Beschaffung, Testen, Verpacken, Laden, Versand und Inbetriebnahme vor Ort.",
    img: photos.integrator,
  },
  design: {
    title: "DESIGN & ENGINEERING ",
    subtitle: "UNSERE KOMPETENZEN",
    designCart: [
      {
        title: "Mechanik",
        elements: [
          "Gehäuse",
          "Kabeltrassen",
          "Stützstrukturen",
          "Befestigungstechnik",
          "Wärmebelastungsanalyse",
        ],
        designIcon: icons.mechanical,
      },
      {
        title: "Elektrik",
        elements: [
          "Niederspannungs-Stromverteilung",
          "PLC-basiertes Steuerungssystem",
          "Serielle Kommunikation",
          "Glasfaser & Ethernet",
        ],
        designIcon: icons.electrical,
      },
      {
        title: "Ex-Design",
        elements: [
          "explosionsgeschützte Gehäuse",
          "gespülte Systeme",
          "eigensichere Schleifen",
          "Bereichsklassifizierung",
        ],
        designIcon: icons.explose,
      },
    ],
  },
  callToaction: {
    titile: "Zögern Sie nicht, uns jederzeit zu kontaktieren.",
    subtitle: "Haben Sie Fragen?",
    button: ["Kontaktieren Sie uns", "contact"],
  },
  projectExecution: {
    title: "PROJEKTDURCHFÜHRUNG",
    subtitle: "UNSERE KOMPETENZEN",
    description:
      "In unserem Fachgebiet ist die Projektdurchführung der Kern dessen, was wir tun. Wir sind spezialisiert auf sorgfältige Planung, kompetente Beschaffung, effizientes Management von Lager und Montageflächen und nahtlose Handhabung von Logistik und Exportoperationen. Mit einem Fokus auf Präzision und Detailgenauigkeit stellen wir sicher, dass jedes Projekt mit Exzellenz ausgeführt wird und Ergebnisse liefert, die die Erwartungen erfüllen und übertreffen. Unser Engagement für die Projektdurchführung ist die Grundlage unseres Erfolgs und der Schlüssel zur Bereitstellung hochwertiger Lösungen für unsere Kunden.",
    img: photos.logistic,
    list: [
      "Planung",
      "Beschaffung",
      "Lager- & Montageflächenmanagement",
      "Logistik und Export",
    ],
  },
  knowledge: {
    title: "SPEZIALISIERTES WISSEN",
    subtitle: "UNSERE KOMPETENZEN",
    description:
      "Wir sind spezialisiert auf die Inbetriebnahme und Wartung von OEM-Geräten und stellen sicher, dass sie auf Höchstleistung laufen. Mit unserem Fachwissen und unserer Erfahrung halten wir uns an internationale Standards, um Qualität und Zuverlässigkeit zu garantieren. Unsere Expertise erstreckt sich auf spezialisiertes Design, wie z.B. das Design von Analysesystemen, wo wir darin ausgezeichnet sind, maßgeschneiderte Lösungen für spezifische Bedürfnisse zu schaffen.",
    img: photos.designer,
    list: [
      "Inbetriebnahme und Service von OEM-Geräten",
      "Internationale Standards",
      "Spezialisiertes Design (z.B.: Analytische Systemgestaltung)",
    ],
  },
};
