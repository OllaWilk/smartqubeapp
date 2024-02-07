import React, { useContext, useState } from "react";
import Select from "react-select";
import { LocaleContext } from "../../../contexts/LocaleContext";
import styles from "./LocationOptions.module.scss";

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
  indicatorSeparator: () => ({
    display: "none",
  }),
};

const DropdownIndicator = () => null;

export const LocationOptions = () => {
  const { switchRegion } = useContext(LocaleContext);

  const options = [
    { value: "eu", label: "EU" },
    { value: "usa", label: "USA" },
    { value: "uk", label: "UK" },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = (option) => {
    setSelectedOption(option);
    switchRegion(option.value);
  };

  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={options}
      styles={customStyles}
      className={styles.languageLocationWrap}
      components={{ DropdownIndicator }}
    />
  );
};
