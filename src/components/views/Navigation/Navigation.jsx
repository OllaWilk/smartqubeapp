import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navigationNavbar } from "../../../db/en/navigation";
import { useToggle } from "../../../utils/useToggle";
import { icons, logos } from "../../../images/index";
import { SideNavigation } from "../SideNavigation/SideNavigation";
import styles from "./Navigation.module.scss";

export const Navigation = () => {
  const [value, toggle] = useToggle(false);
  const [expandedItem, setExpandedItem] = useState(null);

  const animateSidebar = () => {
    toggle(!value);
  };

  const handleToggle = (index) => {
    window.scrollTo(0, 0);
    setExpandedItem((prev) => (prev === index ? null : index));
  };

  const handleNavLinkClick = () => {
    window.scrollTo(0, 0);
    setExpandedItem(null);
  };

  const renderNavItem = (item, index) => {
    if (typeof item === "string") {
      return (
        <NavLink
          key={index}
          to={`/${item.toLowerCase()}`}
          onClick={handleNavLinkClick}
          className={styles.link}
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#5dbb4e" : "white",
              padding: 20,
            };
          }}
        >
          {item}
        </NavLink>
      );
    } else if (typeof item === "object") {
      const buttonLabel = Object.keys(item)[0];
      const subItems = item[buttonLabel];
      return (
        <div key={`stringBtn-${index}`} className={styles.dropdownMenu}>
          <p onClick={() => handleToggle(index)}>{buttonLabel}</p>
          {expandedItem === index && (
            <ul className={styles.navigationList}>
              {subItems.map((subItem, subIndex) => (
                <li key={`dropdownBtnNav-${subIndex}`}>
                  <NavLink
                    to={`/${subItem.replace(/\s/g, "").toLowerCase()}`}
                    onClick={handleNavLinkClick}
                    style={({ isActive }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "#5dbb4e" : "white",
                        padding: 20,
                      };
                    }}
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

  return (
    <div className={styles.navigation}>
      <div className={`${styles.navWrap} container`}>
        <Link to="/home" className={styles.navigationLogo}>
          <img src={logos.logo100px} alt="Logo" />
        </Link>
        <nav className={styles.navigationList}>
          {navigationNavbar.map((item, index) => renderNavItem(item, index))}
        </nav>
        <div
          className={styles.sidebarIcon}
          onClick={animateSidebar}
          id="hamburger"
        >
          <img
            src={value ? icons.close : icons.hamburger}
            alt={value ? "hamburger" : "close"}
          />
        </div>
        <nav
          className={`${styles.sidebar} ${value ? "open" : "closed"}`}
          id="sidebarNav"
        >
          {navigationNavbar.map((item, index) => (
            <SideNavigation
              index={index}
              item={item}
              key={`${index}-sidebar`}
            />
          ))}
        </nav>
      </div>
    </div>
  );
};
