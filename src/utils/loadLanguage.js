import * as plContent from "./../db/pl";
import * as enContent from "./../db/en";
import * as deContent from "./../db/de";

const languageContent = {
  pl: plContent,
  en: enContent,
  de: deContent,
};

export const loadLanguage = (language) => {
  return languageContent[language] || languageContent.en; //return selected language or default english language
};
