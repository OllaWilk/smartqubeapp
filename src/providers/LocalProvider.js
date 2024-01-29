import React, { useState } from "react";
import PropTypes from "prop-types";
import { LocaleContext } from "./../contexts/LocaleContext";

export const LocaleProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [region, setRegion] = useState("eu");

  const switchLanguage = (lang) => setLanguage(lang);
  const switchRegion = (reg) => setRegion(reg);

  return (
    <LocaleContext.Provider
      value={{ language, switchLanguage, region, switchRegion }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

LocaleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
