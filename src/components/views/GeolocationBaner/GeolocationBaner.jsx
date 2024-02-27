import React, { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import PropTypes from "prop-types";

import { LocaleContext } from "../../../contexts/LocaleContext";
import { LanguageOptions, LocationOptions } from "../../common";

import styles from "./GeolocationBaner.module.scss";

const GeolocationBaner = ({ banerTeksLanguage, bamerTextRegion, btnText }) => {
  const { switchLanguage } = useContext(LocaleContext);
  const { switchRegion } = useContext(LocaleContext);

  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [selectedRegion, setSelectedRegion] = useState("usa");
  const [close, setClose] = useState(false);
  const savedLanguage = Cookies.get("language");
  const savedRegion = Cookies.get("region");
  const cookiesAccepted = Cookies.get("cookiesAccepted");

  useEffect(() => {
    if (savedLanguage && cookiesAccepted) {
      setSelectedLanguage(savedLanguage);
      switchLanguage(savedLanguage);
    }

    if (savedRegion && cookiesAccepted) {
      setSelectedRegion(savedRegion);
      switchRegion(savedRegion);
    }
  }, [
    switchLanguage,
    switchRegion,
    savedLanguage,
    savedRegion,
    cookiesAccepted,
  ]);

  const handleLanguageChange = (newLanguage) => {
    if (cookiesAccepted) {
      setSelectedLanguage(newLanguage);
      switchLanguage(newLanguage);
      Cookies.set("language", newLanguage, { expires: 365 });
    } else {
      setSelectedLanguage(newLanguage);
      switchLanguage(newLanguage);
    }
  };

  const handleRegionChange = (newRegion) => {
    if (cookiesAccepted) {
      setSelectedRegion(newRegion);
      switchRegion(newRegion);
      Cookies.set("region", newRegion, { expires: 365 });
    } else {
      setSelectedRegion(newRegion);
      switchRegion(newRegion);
    }
  };

  const handleClose = () => {
    setClose(!close);
    console.log(close);
  };

  const shouldDisplayBanner =
    cookiesAccepted && !(savedLanguage && savedRegion) && !close;

  return (
    <>
      <LanguageOptions
        selectedLanguage={selectedLanguage}
        onLanguageChange={handleLanguageChange}
      />
      <LocationOptions
        selectedRegion={selectedRegion}
        onRegionChange={handleRegionChange}
      />
      {shouldDisplayBanner && (
        <div className={styles.banerWrap}>
          <p>{banerTeksLanguage}</p>
          <p>{bamerTextRegion}</p>

          <button className={styles.closeBaner} onClick={handleClose}>
            {btnText}
          </button>
        </div>
      )}
    </>
  );
};

export { GeolocationBaner };

GeolocationBaner.propTypes = {
  banerTeksLanguage: PropTypes.string,
  bamerTextRegion: PropTypes.string,
  btnText: PropTypes.string,
};
