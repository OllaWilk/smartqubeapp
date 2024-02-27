import React, { useMemo } from "react";
import PropTypes from "prop-types";

import Select from "react-select";

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

export const LanguageOptions = ({ selectedLanguage, onLanguageChange }) => {
  const options = useMemo(
    () => [
      { value: "en", label: "EN" },
      { value: "pl", label: "PL" },
      { value: "de", label: "DE" },
    ],
    []
  );

  const handleChange = (option) => {
    onLanguageChange(option.value);
  };

  const selectedOption = options.find(
    (option) => option.value === selectedLanguage
  );

  return (
    <>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        className={styles.languageLocationWrap}
        styles={customStyles}
        components={{ DropdownIndicator }}
      />
    </>
  );
};

LanguageOptions.propTypes = {
  selectedLanguage: PropTypes.node,
  onLanguageChange: PropTypes.node,
};
