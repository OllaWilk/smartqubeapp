/* eslint-disable indent */
import React from "react";
import { Link } from "react-router-dom";
import { navigationNavbar } from "../../../db/en/navigation";
import { useToggle } from "../../../utils/useToggle";
import useScroll from "../../../utils/useScrool";
import { icons, logos } from "../../../images/index";
import { SideNavigation } from "../SideNavigation/SideNavigation";
import { ExpandedNavLink } from "../../common/index.js";
import styles from "./Navigation.module.scss";

export const Navigation = () => {
  const [value, toggle] = useToggle(false);
  const scrollPosition = useScroll();

  const animateSidebar = () => {
    toggle(!value);
  };

  /*SCROOL TO BEGINING OF THE VIEW */
  const handleNavLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div
        className={
          scrollPosition > 50 ? styles.navigationActive : styles.navigation
        }
      >
        <div className={`${styles.navWrap} container`}>
          {/* LOGO */}
          <Link to="/home" onClick={handleNavLinkClick}>
            <h1 className={styles.navigationLogo}>
              <img src={logos.logo} alt="Smartqube" />
            </h1>
          </Link>
          {/* NAVIGATION */}
          <nav className={styles.navigationList}>
            {navigationNavbar.map((item, index) => (
              <ExpandedNavLink key={item} item={item} index={index} />
            ))}
          </nav>
          {/* HAMBUTGER */}
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
          {/* SIDE NAVIGATION */}
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
    </>
  );
};
