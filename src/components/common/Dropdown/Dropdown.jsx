/* eslint-disable indent */
import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
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
  const allButtons = Object.keys(integrationNav).filter((button) => {
    if (region === "usa") return true;
    if (region !== "usa" && integrationNav[button].id === "usa") return false;
    return true;
  });

  const [selectedButton, setselectedButton] = useState(allButtons[0]);

  const handleButtonClick = (buttonName) => {
    setselectedButton(buttonName);
  };

  return (
    <div key={`stringBtn-${index}`} className={styles.navigationList}>
      <p onClick={toggleExpand} className={styles.topNavlink}>
        {buttonLabel}
      </p>
      {expanded && (
        <>
          <ul className={`${styles.dropList} `}>
            {allButtons.map((button, idx) => (
              <li
                key={`dropdownBtnNav-${idx}`}
                className={`${styles.expandedLink} ${
                  button === selectedButton ? styles.selectedItem : ""
                }`}
                onClick={() => handleButtonClick(button)}
              >
                {button}
              </li>
            ))}

            <SideOpenSubMenu
              data={integrationNav}
              onHide={toggleExpand}
              buttons={allButtons}
              activeButton={selectedButton}
            />
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
  integrationNav: PropTypes.object,
};
