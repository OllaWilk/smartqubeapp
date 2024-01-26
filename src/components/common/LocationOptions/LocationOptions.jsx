import React, { useContext } from "react";
import { LanguageContext } from "../../../contexts/LanguageContext";
import styles from "./LocationOptions.module.scss";

export const LocationOptions = () => {
  // const { setLanguage } = useContext(LanguageContext);

  // const handleLanguageChange = (event) => {
  //   setLanguage(event.target.value);
  // };

  return (
    <select
      // onChange={handleLanguageChange}
      className={styles.languageLocationWrap}
    >
      <option value="ue">UE</option>
      <option value="usa">USA</option>
    </select>
  );
};
