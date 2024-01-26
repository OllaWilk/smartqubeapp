import React, { useContext } from "react";
import { LanguageContext } from "../../../contexts/LanguageContext";
import styles from "./LanguageOptions.module.scss";

export const LanguageOptions = () => {
  const { switchLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (event) => {
    switchLanguage(event.target.value);
  };

  return (
    <select
      onChange={handleLanguageChange}
      className={styles.languageLocationWrap}
    >
      <option value="en">EN</option>
      <option value="pl">PL</option>
    </select>
  );
};
