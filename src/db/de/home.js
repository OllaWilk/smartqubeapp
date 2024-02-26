import { photos, icons } from "../../images/index";
import videoBg from "../../images/videoBg.mp4";

export const home = {
  imgBg: photos.splash,
  videoBg: videoBg,
  header: {
    companyName: "WIR SIND SMARTqube INGENIEURE",
    slogan: "WIR WERDEN DIE ZUKUNFT GESTALTEN",
    description:
      "SMARTqube ist ein Team von Ingenieuren, das die Zukunft leidenschaftlich mit den neuesten technologischen Lösungen gestaltet.",
    greenBtn: "kontakt",
    greenBtnLinkTo: "contact",
    transparentBtn: "über uns",
    transparentBtnLinkTo: "about",
  },
  about: {
    subtitle: "willkommen bei",
    title: "SMARTqube",
    abstract: `SMARTqube entstand aus dem Mutterunternehmen ICEqube in den USA. SMARTqube befindet sich in Breslau, Polen, im Herzen der EU und ermöglicht so einen schnellen Zugang zur EU und zum Nahen Osten. Als Distributor und Servicedienstleister für ICEqube-Produkte nutzen wir den Zugang zu ausgezeichneten Produkten und Erfahrungen in der Integration, um Komponenten, Engineering, Dienstleistungen und integrierte Lösungen anzubieten.`,
    section1: `Die offensichtlichste Herausforderung der modernen Welt besteht nicht nur darin, eine Möglichkeit zur Lösung eines einzelnen
      Problems zu bieten - es geht darum, eine umfassende globale Unterstützung, Zugänglichkeit und einen technischen Ansatz zu gewährleisten, der
      eine effektive Verbesserung der industriellen Produktionsprozesse ermöglicht. Dies kann nur durch eine detaillierte Analyse, Planung, Auswahl der richtigen Ausrüstung und Beseitigung der Auswirkungen von
      negativen Faktoren erreicht werden.`,
    section2: `Das ist die Rolle, die SMARTqube übernehmen will - ein Logistik- und Servicezentrum für das Klimakontroll- und Gehäuseportfolio von ICEqube in der EU und ein Mehrwertanbieter als Systemintegrationsanlage. Mit unserem eigenen Lager, moderner Werkstatt und einem hocherfahrenen Team führen unsere Aktivitäten zur Vereinfachung des Zugangs zu den in den USA entwickelten Lösungen und erweitern die Kundenbetreuung durch lokale technische Unterstützung, Service, Logistik und schlüsselfertiges Engineering.`,
    button: ["about", "mehr sehen"],
  },
  offers: {
    title: "WELT DER MÖGLICHKEITEN",
    subtitle: "UNSER ANGEBOT",
    carts: [
      {
        image: photos.iceCube,
        title: "Kühlungslösungen",
        description: `Ice Qube bietet eine breite Palette von hochwertigen Produkten für die Klimakontrolle. Smart
       Qube nutzt deren Lösungen und fungiert auch als Distributor für Europa.`,
        button: ["Mehr lesen", "https://www.iceqube.com"],
      },
      {
        image: photos.integration,
        title: "Integration",
        description: `Wir sind spezialisiert auf die Integration von industriellen Automatisierungssystemen & Prozessanalysen.
          Das schlüsselfertige Konzept ist unser Bereich. Beginnend
          mit dem Design, über die Montage, bis hin zum erfolgreichen FAT.`,
        button: ["Mehr lesen", "integration"],
      },
      {
        image: photos.fieldServices,
        title: "Feldservices",
        description: `Unser erfahrenes Team unterstützt
        unsere Partner auch vor Ort. SMARTqube
        bietet Feldmontage, mechanische &
        elektrische Arbeiten, SAT, Inbetriebnahme &
        Anlaufdienste.`,
        button: ["Mehr lesen", "services"],
      },
    ],
  },
  callToaction: {
    titile: "Zögern Sie nicht, uns jederzeit zu kontaktieren.",
    subtitle: "Haben Sie Fragen?",
    button: ["Kontaktieren Sie uns", "contact"],
  },

  mission: {
    src: icons.world,
    title: "QUALITÄT STEHT AN ERSTER STELLE",
    subtitle: "UNSERE MISSION",
    description: `Unser Team ist unser größtes Kapital, weshalb wir in ihre
        kontinuierliche Entwicklung investieren, um ihnen nicht nur das Wissen
        und die Werkzeuge für ihre Arbeit zu geben, sondern auch Arbeitszufriedenheit
        und ein Zugehörigkeitsgefühl zu unserem Unternehmen. Als Ergebnis erhalten unsere
        Kunden die fortschrittlichsten Lösungen im Bereich der
        Kühlung und Klimatisierung, die ihren Anforderungen entsprechen
        und auf ihre Bedürfnisse zugeschnitten sind. Unsere hochwertigen Dienstleistungen haben auch
        eine positive Auswirkung auf die Umwelt, dank der Verwendung von
        umweltfreundlichen Technologien und unserem Fokus auf Energieeffizienz.`,
  },
};
