import React, { useState } from "react";
import PropTypes from "prop-types";
import { navigationNavbar } from "../../../db/en/navigation";
import { useToggle } from "../../../utils/useToggle";
import { NavLink } from "react-router-dom";
import styles from "./SideNavigation.module.scss";

export const SideNavigation = ({ item, index }) => {
  const [value, toggle] = useToggle(true);
  const [expandedItem, setExpandedItem] = useState(null);

  const handleToggle = (index) => {
    window.scrollTo(0, 0);
    setExpandedItem((prev) => (prev === index ? null : index));
    toggle(!value);
  };

  const renderNavItem = (item, index) => {
    if (typeof item === "string") {
      return (
        <NavLink
          key={index}
          to={`/${navigationNavbar[index].toLowerCase()}`}
          className={styles.link}
        >
          {item}
        </NavLink>
      );
    } else if (typeof item === "object") {
      const buttonLabel = Object.keys(item)[0];
      const subItems = item[Object.keys(item)[0]];

      return (
        <div key={`stringBtn-${index}`} className={styles.dropdownMenu}>
          <p
            onClick={() => handleToggle(index)}
            className={value ? "" : "selectedBtn"}
          >
            {buttonLabel}
          </p>
          {expandedItem === index && (
            <ul className={styles.nestedNav}>
              {subItems.map((subItem, subIndex) => (
                <NavLink
                  key={`dropdownBtnNav-${subIndex}`}
                  to={`/${navigationNavbar[2].solutions[subIndex]
                    .replace(/\s/g, "")
                    .toLowerCase()}`}
                  className={styles.link}
                >
                  {subItem}
                </NavLink>
              ))}
            </ul>
          )}
        </div>
      );
    }
    return null;
  };

  return <> {renderNavItem(item, index)} </>;
};

SideNavigation.propTypes = {
  item: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  index: PropTypes.number,
};
