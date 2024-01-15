import React, { useState } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styles from "./ExpandedNavLink.module.scss";
import { useToggle } from "../../../utils/useToggle";

export const ExpandedNavLink = ({ item, index }) => {
  const [value, toggle] = useToggle(true);
  const [expandedItem, setExpandedItem] = useState(null);

  const handleNavLinkClick = () => {
    window.scrollTo(0, 0);
    setExpandedItem(null);
  };

  const handleToggle = (index) => {
    // window.scrollTo(0, 0);
    setExpandedItem((prev) => (prev === index ? null : index));
    toggle(!value);
  };

  if (typeof item == "string") {
    return (
      <NavLink
        key={index}
        to={`/${item.toLowerCase()}`}
        onClick={handleNavLinkClick}
        className={styles.link}
      >
        {item}
      </NavLink>
    );
  } else if (typeof item === "object") {
    const buttonLabel = Object.keys(item)[0];
    const subItems = item[buttonLabel];

    return (
      <div key={`stringBtn-${index}`} className={styles.navigationList}>
        <p onClick={() => handleToggle(index)} className={styles.link}>
          {buttonLabel}
        </p>
        {expandedItem === index && (
          <ul className={styles.dropList}>
            {subItems.map((subItem, subIndex) => (
              <li
                key={`dropdownBtnNav-${subIndex}`}
                className={styles.dropdonwLi}
              >
                <NavLink
                  to={`/${subItem.replace(/\s/g, "").toLowerCase()}`}
                  onClick={handleNavLinkClick}
                >
                  {subItem}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  return null;
};

ExpandedNavLink.propTypes = {
  item: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  index: PropTypes.number,
};
