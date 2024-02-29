/* eslint-disable indent */
import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { LocaleContext } from "../../../contexts/LocaleContext";
import { HamburgerSubMenu } from "../HamburgerSubMenu/HamburgerSubMenu";
import styles from "./DropdownHamburger.module.scss";

export const DropdownHamburger = ({
  index,
  buttonLabel,
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
        <span
          style={{ transform: expanded ? "rotate(270deg)" : "rotate(90deg)" }}
        >
          &gt;
        </span>
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
                {button === selectedButton && (
                  <HamburgerSubMenu
                    data={integrationNav}
                    onHide={toggleExpand}
                    buttons={allButtons}
                    activeButton={selectedButton}
                  />
                )}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

DropdownHamburger.propTypes = {
  index: PropTypes.number,
  buttonLabel: PropTypes.string,
  subItems: PropTypes.array,
  expanded: PropTypes.bool,
  toggleExpand: PropTypes.func,
  integrationNav: PropTypes.object,
};
