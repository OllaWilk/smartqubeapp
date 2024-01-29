import React, { useContext, useState } from "react";
import Select from "react-select";

import { LocaleContext } from "../../../contexts/LocaleContext";
import styles from "./LanguageOptions.module.scss";

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "transparent",
    boxShadow: state.isFocused ? "none" : "none",
  }),
  menu: (provided) => ({
    ...provided,

    width: 80,
  }),
  menuList: (provided) => ({
    ...provided,
    backgroundColor: "black",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#5dbb4e" : "black",
    ":active": {
      backgroundColor: "gray",
    },
  }),
};

const DropdownIndicator = () => null;

export const LanguageOptions = () => {
  const { switchLanguage } = useContext(LocaleContext);

  const options = [
    { value: "en", label: "EN" },
    { value: "pl", label: "PL" },
    { value: "de", label: "DE" },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = (option) => {
    setSelectedOption(option);
    switchLanguage(option.value);
  };

  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={options}
      className={styles.languageLocationWrap}
      styles={customStyles}
      components={{ DropdownIndicator }}
    />
  );
};
