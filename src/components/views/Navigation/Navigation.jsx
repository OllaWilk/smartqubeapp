import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useToggle } from "../../../utils/useToggle";
import useScroll from "../../../utils/useScrool";
import { icons, logos } from "../../../images/index";
import { SideNavigation } from "../SideNavigation/SideNavigation";
import {
  ExpandedNavLink,
  LanguageOptions,
  LocationOptions,
} from "../../common/index.js";
import styles from "./Navigation.module.scss";

export const Navigation = ({ navigationNavbar, integrationNav }) => {
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
            <h1
              className={
                scrollPosition > 50
                  ? styles.navigationLogoActive
                  : styles.navigationLogo
              }
            >
              <img src={logos.logo} alt="Smartqube" />
            </h1>
          </Link>
          {/* NAVIGATION */}
          <div className={styles.navLangOptionsWrap}>
            <nav className={styles.navigationList}>
              {navigationNavbar.map((item, index) => (
                <ExpandedNavLink
                  key={item}
                  item={item}
                  index={index}
                  integrationNav={integrationNav}
                />
              ))}
            </nav>
            {/* LANGUAGE & LOCATION */}
            <div className={styles.lanRegWrap}>
              <LanguageOptions />
              <LocationOptions />
            </div>
          </div>

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

Navigation.propTypes = {
  navigationNavbar: PropTypes.array,
  integrationNav: PropTypes.array,
};
