import React, { useState } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useToggle } from "../../../utils/useToggle";
import useScroll from "../../../utils/useScrool";
import styles from "./ExpandedNavLink.module.scss";

export const ExpandedNavLink = ({ item, index }) => {
  const [value, toggle] = useToggle(true);
  const [expandedItem, setExpandedItem] = useState(null);
  const scrollPosition = useScroll();

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleToggle = (index) => {
    setExpandedItem((prev) => (prev === index ? null : index));
    toggle(!value);
  };

  if (typeof item == "string") {
    return (
      /* NORMAL BUTTON */
      <NavLink
        key={index}
        to={`/${item.toLowerCase()}`}
        onClick={handleScrollToTop}
        className={styles.link}
      >
        {item}
      </NavLink>
    );
  } else if (typeof item === "object") {
    const buttonLabel = Object.keys(item)[0];
    const subItems = item[buttonLabel];

    /* DROPDOWN BUTTON */
    return (
      <div key={`stringBtn-${index}`} className={styles.navigationList}>
        <p onClick={() => handleToggle(index)} className={styles.link}>
          {buttonLabel}
        </p>
        {expandedItem === index && (
          <ul
            className={
              scrollPosition > 50
                ? `${styles.dropList} ${styles.navigationActive}`
                : `${styles.dropList} ${styles.navigation}`
            }
          >
            {subItems.map((subItem, subIndex) => (
              <li
                key={`dropdownBtnNav-${subIndex}`}
                className={styles.dropdonwLi}
              >
                <NavLink
                  to={`/${subItem.replace(/\s/g, "").toLowerCase()}`}
                  onClick={handleScrollToTop}
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
