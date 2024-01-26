import { home as homeEn } from "./../db/en/home";
import { home as homePl } from "./../db/pl/home";
import { home as homeDe } from "./../db/de/home";
import { about as aboutPl } from "./../db/pl/about";
import { about as aboutEn } from "./../db/en/about";
import { contact as contactEn } from "../db/en/contact";
import { contact as contactPl } from "../db/pl/contact";
import { notFound as notFoundEn } from "../db/en/notFound";
import { notFound as notFoundPl } from "../db/pl/notFound";
import { footer as footerEn } from "../db/en/navigation";
import { footer as footerPl } from "../db/pl/navigation";
import { navigationNavbar as navigationNavbarPl } from "../db/pl/navigation";
import { navigationNavbar as navigationNavbarEn } from "../db/en/navigation";
import { coolingSolutions as coolingSolutionsPl } from "../db/pl/coolingSolutions";
import { coolingSolutions as coolingSolutionsEn } from "../db/en/coolingSolutions";
import { integration as integrationPl } from "../db/pl/integration";
import { integration as integrationEn } from "../db/en/integration";
import { services as servicesPl } from "../db/pl/services";
import { services as servicesEn } from "../db/en/services";
import { technical as technicalPl } from "../db/pl/technical";
import { technical as technicalEn } from "../db/en/technical";

export const loadLanguageData = (language) => {
  console.log(language);
  switch (language) {
    case "pl":
      return {
        home: homePl,
        about: aboutPl,
        contact: contactPl,
        notFound: notFoundPl,
        footer: footerPl,
        navigationNavbar: navigationNavbarPl,
        coolingSolutions: coolingSolutionsPl,
        integration: integrationPl,
        services: servicesPl,
        technical: technicalPl,
      };
    case "de":
      return {
        home: homeDe,
      };
    case "en":
    default:
      return {
        home: homeEn,
        about: aboutEn,
        contact: contactEn,
        notFound: notFoundEn,
        footer: footerEn,
        navigationNavbar: navigationNavbarEn,
        coolingSolutions: coolingSolutionsEn,
        integration: integrationEn,
        services: servicesEn,
        technical: technicalEn,
      };
  }
};
