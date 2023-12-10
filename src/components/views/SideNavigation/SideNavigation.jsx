import React, { useState } from "react";
import PropTypes from "prop-types";

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
          to={`/${item.toLowerCase()}`}
          className={styles.link}
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#5dbb4e" : "white",
            };
          }}
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
                  to={`/${subItem.replace(/\s/g, "").toLowerCase()}`}
                  className={styles.link}
                  style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "#5dbb4e" : "white",
                    };
                  }}
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
  item: PropTypes.string,
  index: PropTypes.number,
};
