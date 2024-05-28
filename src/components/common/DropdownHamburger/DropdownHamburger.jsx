/* eslint-disable indent */
import React, { useContext, useEffect, useState } from "react";
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
  translations,
}) => {
  const { region } = useContext(LocaleContext);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const allButtons = Object.keys(integrationNav).filter((button) => {
    if (region === "usa") return true;
    if (region !== "usa" && integrationNav[button].id === "usa") return false;
    return true;
  });

  const [selectedButton, setselectedButton] = useState(allButtons[0]);
  const handleButtonClick = (buttonName) => {
    setselectedButton(buttonName);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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
          <ul
            className={`${styles.dropList} `}
            // style={{ height: `${windowHeight}px` }}
          >
            {allButtons.map((button, idx) => (
              <li
                key={`dropdownBtnNav-${idx}`}
                className={`${styles.expandedLink} ${
                  button === selectedButton ? styles.selectedItem : ""
                }`}
                onClick={() => handleButtonClick(button)}
              >
                <p>{translations[button]}</p>
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
  translations: PropTypes.object,
};
