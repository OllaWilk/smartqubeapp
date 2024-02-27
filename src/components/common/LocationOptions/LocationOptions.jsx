import React, { useMemo } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
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

export const LocationOptions = ({ selectedRegion, onRegionChange }) => {
  const options = useMemo(
    () => [
      { value: "usa", label: "USA" },
      { value: "eu", label: "EU" },
      { value: "uk", label: "UK" },
    ],
    []
  );

  const handleChange = (option) => {
    onRegionChange(option.value);
  };

  const selectedRegionOption = options.find(
    (option) => option.value === selectedRegion
  );

  return (
    <Select
      value={selectedRegionOption}
      onChange={handleChange}
      options={options}
      styles={customStyles}
      className={styles.languageLocationWrap}
      components={{ DropdownIndicator }}
    />
  );
};

LocationOptions.propTypes = {
  selectedRegion: PropTypes.node,
  onRegionChange: PropTypes.node,
};
