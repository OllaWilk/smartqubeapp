import React, { useContext, useState } from "react";
import Select from "react-select";

import { LanguageContext } from "../../../contexts/LanguageContext";
import styles from "./LanguageOptions.module.scss";

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "transparent",
    borderColor: "transparent",
    boxShadow: "none",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "black",
    color: "white",
    cursor: "pointer",
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "white" : "white",
    backgroundColor: state.isSelected ? "green" : "black", // Szary kolor tła dla wybranej opcji
    ":hover": {
      backgroundColor: "none", // Szary kolor tła podczas najechania myszką
    },
  }),
  // Możesz dodać więcej stylów dla innych części komponentu jeśli potrzebujesz
};

export const LanguageOptions = () => {
  const { switchLanguage } = useContext(LanguageContext);
  const [selectedOption, setSelectedOption] = useState("en");

  const options = [
    { value: "en", label: "EN" },
    { value: "pl", label: "PL" },
    { value: "de", label: "DE" },
  ];

  const handleChange = (option) => {
    setSelectedOption(option);
    if (selectedOption) {
      switchLanguage(option.value);
    }
  };

  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={options}
      className={styles.languageLocationWrap}
      styles={customStyles}
    />
  );
};
