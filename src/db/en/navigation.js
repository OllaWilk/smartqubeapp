import { logos, iso } from "../../images";

export const navigationNavbar = [
  "home",
  "about",
  {
    solutions: ["integration", "climate control", "services"],
  },
  "contact",
];

export const coolingSolutions = {};

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

export const solutionsNav = [
  {
    name: "integration",
    abstract:
      "Integration involves a comprehensive range of activities during project execution, including engineering, procurement, testing, packing, loading, shipment, and site commissioning, whereas assembly is just one part of this process. Specialized competencies include expertise in engineering design, mechanical and electrical systems, LV power distribution, control systems, and commissioning of OEM devices, all adhering to international standards",
    linkTo: ["explore integration", "integration"],
  },
  {
    name: "climate control",
    abstract:
      "Climate Control involves creating optimal conditions for sensitive equipment by regulating temperature and humidity. Our solutions encompass the design and installation of HVAC systems, clean rooms, and environmental monitoring systems.",
    linkTo: ["explore climate control", "climatecontrol"],
  },
  {
    name: "services",
    abstract:
      "We offer a wide range of services, including equipment maintenance, calibration, and troubleshooting. Our team of experts ensures that your systems operate at peak performance and compliance with industry standards.",
    linkTo: ["explore services", "services"],
  },
];
