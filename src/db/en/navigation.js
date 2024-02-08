import { logos, iso, photos } from "../../images";

export const navigationNavbar = [
  "home",
  "about",
  {
    solutions: ["integration", "climate control", "ENCLOSURES", "services"],
  },
  "contact",
];

export const integrationNav = {
  integration: {
    abstract:
      "Integration covers a broad range of project activities including engineering, procurement, testing, packaging, shipping, and commissioning at the site, while assembly is just a part of this extensive process. We specialize in engineering design, mechanical and electrical systems, low-voltage power distribution, control systems, and commissioning of OEM devices, adhering to international standards.",
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
        btnsList: ["RF Solutions", "Fiber Solutions"],
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
      "Ice Qube supplies a wide variety of high quality climate control products. Smart Qube utilizes their solutions and also acts as a distributor for Europe.",
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
    imgUrl: logos.logo,
    companyName: "SMARTqube",
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
