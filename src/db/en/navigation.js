import { logos, iso } from "../../images";

export const navigationNavbar = [
  "home",
  "about",
  { solutions: ["cooling solutions", "integration", "services"] },
  "technical",
  "contact",
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
    "© 2024 SMARTqube sp.z.o.o",
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
