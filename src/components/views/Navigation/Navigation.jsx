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

  return (
    <>
      <div
        className={
          scrollPosition > 50 ? styles.navigationActive : styles.navigation
        }
      >
        <div className={`${styles.navWrap} container`}>
          <Link to="/home">
            <h1 className={styles.navigationLogo}>
              <img src={logos.logo} alt="Smartqube" />
            </h1>
          </Link>
          <nav className={styles.navigationList}>
            {navigationNavbar.map((item, index) => (
              <ExpandedNavLink key={item} item={item} index={index} />
            ))}
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
    </>
  );
};
