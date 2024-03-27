import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useToggle } from "../../../utils/useToggle";
import useScroll from "../../../utils/useScrool";
import { icons, logos } from "../../../images/index";
import { GeolocationBaner, SideNavigation } from "../../views/index.js";
import { ExpandedNavLink } from "../../common/index.js";
import styles from "./Navigation.module.scss";

export const Navigation = ({
  navigationNavbar,
  integrationNav,
  geolocation,
}) => {
  const [isSidebarOpen, toggleSidebar] = useToggle(false);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const scrollPosition = useScroll();
  const animateSidebar = useCallback(() => {
    toggleSidebar(!isSidebarOpen);
  }, [isSidebarOpen, toggleSidebar]);

  const handleNavLinkClick = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navigationClass =
    scrollPosition > 50 ? styles.navigationActive : styles.navigation;
  const logoClass =
    scrollPosition > 50 ? styles.navigationLogoActive : styles.navigationLogo;

  return (
    <>
      <div className={navigationClass}>
        <div className={`${styles.navWrap} container`}>
          {/* LOGO */}
          <Link to="/home" onClick={handleNavLinkClick}>
            <h1 className={logoClass}>
              <img src={logos.logoTm} alt="Smartqube" />
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
            <GeolocationBaner
              banerTeksLanguage={geolocation.textLanguage}
              bamerTextRegion={geolocation.textRegion}
              btnText={geolocation.close}
            />
          </div>

          {/* HAMBUTGER */}
          <div
            className={styles.sidebarIcon}
            onClick={animateSidebar}
            id="hamburger"
          >
            <img
              src={isSidebarOpen ? icons.close : icons.hamburger}
              alt={isSidebarOpen ? "hamburger" : "close"}
            />
          </div>
          {/* SIDE NAVIGATION */}
          <div className={`${styles.sidebar} ${isSidebarOpen ? "" : "closed"}`}>
            {navigationNavbar.map((item, index) => (
              <SideNavigation
                index={index}
                item={item}
                key={`${index}-sidebar`}
                integrationNav={integrationNav}
                windowHeight={windowHeight}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

Navigation.propTypes = {
  navigationNavbar: PropTypes.array,
  integrationNav: PropTypes.object,
  geolocation: PropTypes.object,
};
