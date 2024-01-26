import * as plContent from "./../db/pl";
import * as enContent from "./../db/en";

export const loadLanguage = (language) => {
  switch (language) {
    case "pl":
      return {
        home: plContent.home,
        about: plContent.about,
        contact: plContent.contact,
        notFound: plContent.notFound,
        footer: plContent.footer,
        navigationNavbar: plContent.navigationNavbar,
        coolingSolutions: plContent.coolingSolutions,
        integration: plContent.integration,
        services: plContent.services,
        technical: plContent.technical,
      };
    case "de":
      return {
        // home: homeDe,
      };
    case "en":
    default:
      return {
        home: enContent.home,
        about: enContent.about,
        contact: enContent.contact,
        notFound: enContent.notFound,
        footer: enContent.footer,
        navigationNavbar: enContent.navigationNavbar,
        coolingSolutions: enContent.coolingSolutions,
        integration: enContent.integration,
        services: enContent.services,
        technical: enContent.technical,
      };
  }
};
