/* eslint-disable indent */
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useToggle } from "../../../utils/useToggle";
import { SideOpenSubMenu } from "../index";
import styles from "./Dropdown.module.scss";
import { LocaleContext } from "../../../contexts/LocaleContext";

export const Dropdown = ({
  index,
  buttonLabel,
  subItems,
  expanded,
  toggleExpand,
  integrationNav,
}) => {
  const { region } = useContext(LocaleContext);

  const [value, toggle] = useToggle(true);
  const [selectedSubItem, setSelectedSubItem] = useState(subItems[0]);
  const [selectedData, setSelectedData] = useState(integrationNav[0]);

  useEffect(() => {
    if (selectedSubItem) {
      const data = integrationNav.find((item) => item.name === selectedSubItem);
      if (data) {
        setSelectedData(data);
      }
    }
  }, [selectedSubItem, integrationNav]);

  const handleToggle = (linkName) => {
    toggle(!value);
    setSelectedSubItem(linkName);
  };

  return (
    <div key={`stringBtn-${index}`} className={styles.navigationList}>
      <p onClick={toggleExpand} className={styles.topNavlink}>
        {buttonLabel}
      </p>
      {expanded && (
        <>
          <div></div>
          <ul className={`${styles.dropList} `}>
            {region === "usa"
              ? integrationNav.map((integrationLink) => (
                  <li
                    key={`dropdownBtnNav-${integrationLink.name}`}
                    className={`${styles.expandedLink} ${
                      integrationLink.name === selectedSubItem
                        ? styles.selectedItem
                        : ""
                    }`}
                    onClick={() => handleToggle(integrationLink.name)}
                  >
                    {integrationLink.name}
                    <SideOpenSubMenu
                      data={selectedData}
                      onHide={toggleExpand}
                    />
                  </li>
                ))
              : integrationNav
                  .filter((integrationLink) => integrationLink.id !== "usa")
                  .map((integrationLink) => (
                    <li
                      key={`dropdownBtnNav-${integrationLink.name}`}
                      className={`${styles.expandedLink} ${
                        integrationLink.name === selectedSubItem
                          ? styles.selectedItem
                          : ""
                      }`}
                      onClick={() => handleToggle(integrationLink.name)}
                    >
                      {integrationLink.name}
                      <SideOpenSubMenu
                        data={selectedData}
                        onHide={toggleExpand}
                      />
                    </li>
                  ))}
          </ul>
        </>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  index: PropTypes.number,
  buttonLabel: PropTypes.string,
  subItems: PropTypes.array,
  expanded: PropTypes.bool,
  toggleExpand: PropTypes.func,
  integrationNav: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  region: PropTypes.string,
};
