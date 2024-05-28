import { logos, iso, photos } from "../../images";

export const navigationNavbar = [
  "home",
  "about",
  {
    solutions: ["integration", "climate control", "services"],
  },
  "contact",
];

export const integrationNav = {
  integration: {
    abstract:
      "INTEGRATION COVERS A BROAD RANGE OF PROJECT ACTIVITIES INCLUDING ENGINEERING, PROCUREMENT, TESTING, PACKAGING, SHIPPING, AND COMMISSIONING AT THE FINAL INSTALLATION SITE. WE SPECIALIZE IN DESIGN & ENGINEERING, MECHANICAL AND ELECTRICAL SYSTEMS, LOW-VOLTAGE POWER DISTRIBUTION, CONTROL SYSTEMS, AND COMMISSIONING OF OEM DEVICES, FOR VARIOUS INDUSTRIES WITH ACCORDANCE TO RANGE OF LOCAL AND INTERNATIONAL REGULATIONS.",
    linkTo: ["explore integration", "integration"],
    subjects: [
      {
        name: "Motor control",
        btnsList: ["Variable Speed Solutions", "Soft Start Solutions"],
      },
      {
        name: "Measurement & Analytics",
        btnsList: ["CEMS Solutions", "Chroma Solutions", "Spectro Solutions"],
      },
      {
        name: "Power",
        btnsList: ["UPS Solutions"],
      },
      {
        name: "Network",
        btnsList: ["Passive Solutions", "Active Solutions"],
      },
      {
        name: "Custom",
        btnsList: ["Engineered Solutions", "Build To Spec Solutions"],
      },
    ],
  },
  "climate control": {
    abstract:
      "CLIMATE CONTROL INVOLVES CREATING OPTIMAL CONDITIONS FOR SENSITIVE EQUIPMENT BY REGULATING TEMPERATURE AND HUMIDITY. OUR SOLUTIONS ENCOMPASS THE INDUSTRIES SMALLEST AC UNIT, THINNEST AC UNIT, HIGHEST OPERATING TEMPERATURE, THE LARGEST SELECTION OF HAZARDOUS DUTY CLIMATE CONTROL, AND MUCH MORE.",
    linkTo: ["explore climate control", "climatecontrol"],
  },
  ENCLOSURES: {
    id: "usa",
    img: photos.iceCube,
    abstract:
      "Ice Qube supplies a wide variety of high quality climate control products. ",
    linkTo: ["visit ICEqube ", "https://www.iceqube.com"],
  },

  services: {
    abstract:
      "We offer a wide range of services, including equipment maintenance, calibration, and troubleshooting. Our team of experts ensures that your systems operate at peak performance and compliance with industry standards.",
    linkTo: ["explore services", "services"],
  },
};

export const footerNavigation = [
  "home",
  "about",
  { solutions: ["integration", "cooling solutions", "services"] },
  "contact",
];

export const footer = {
  logo: {
    imgUrl: logos.logoTm,
    companyName: "SMARTqube",
    street: "ul. Rakietowa 29E",
    zip: "54-615 Wrocław, Poland",
  },

  logoUSA: {
    imgUrl: logos.logoTm,
    street: "141 Wilson Avenue ",
    zip: "Greensburg, PA 15601",
  },

  iso: [
    "ISO 9001:2015 Certificate Number: 3780/03/2024/ZSZ/C",
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
    iso.cert_PAJ,
  ],

  documentsLink: "Privacy & Legal",
};

export const geolocation = {
  textLanguage:
    "You are viewing the default version of the site in English for the region America (USA).",
  textRegion:
    " Choose your region and language to customize the site content to your preferences.",
  close: "close",
};

export const translations = {
  integration: "integration",
  "climate control": " climate control",
  ENCLOSURES: "ENCLOSURES",
  services: "services",
};
