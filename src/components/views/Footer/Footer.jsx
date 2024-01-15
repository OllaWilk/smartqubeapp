import React, { useState } from "react";
import { Link } from "react-router-dom";
import { footer, navigationNavbar } from "../../../db/en/navigation";
import { removeSpaces } from "../../../utils/removeSpaces";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const { logo, iso, certificates } = footer;
  const [expandedItem, setExpandedItem] = useState(null);

  const handleToggle = (index) => {
    // window.scrollTo(0, 0);
    setExpandedItem((prev) => (prev === index ? null : index));
  };

  const renderNavItem = (item, index) => {
    if (typeof item === "string") {
      return (
        <Link
          key={`${index}-${item}-footer`}
          to={`/${removeSpaces(item.toLowerCase())}`}
          onClick={() => window.scrollTo(0, 0)}
        >
          {item}
        </Link>
      );
    } else if (typeof item === "object") {
      const buttonLabel = Object.keys(item)[0];
      const subItems = item[buttonLabel];

      return (
        <footer
          className={styles.stringBtnFooter}
          key={`stringBtnFooter-${index}`}
        >
          <p onClick={() => handleToggle(index)}>{buttonLabel}</p>
          {expandedItem === index && (
            <ul className={styles.expandedItem}>
              {subItems.map((subItem, subIndex) => (
                <li key={`dropdownBtnNav-${subIndex}`}>
                  <Link
                    to={`/${subItem.replace(/\s/g, "").toLowerCase()}`}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    {subItem}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </footer>
      );
    }
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.navWrap}>
          <nav className={styles.linksWrap}>
            {navigationNavbar.map((item, index) => renderNavItem(item, index))}
          </nav>
          <div className={styles.logoWrap}>
            <Link to="/home">
              <img
                src={logo.imgUrl}
                alt={logo.companyName}
                className={styles.logo}
                onClick={handleToggle}
              />
            </Link>
            <p>{logo.companyName}</p>
            <p>{logo.street}</p>
            <p>{logo.zip}</p>
          </div>
        </div>
        <div className={styles.certificatesWrap}>
          {certificates.map((el, index) => (
            <div key={`footerCert-${index}-${el}`} className={styles.imgWrap}>
              <img alt={"iso"} src={el} />
            </div>
          ))}
        </div>
        <div className={styles.isoWrap}>
          {iso.map((el, index) => (
            <p key={`footer-${index}-last-${el}`}>{el}</p>
          ))}
        </div>
      </div>
    </footer>
  );
};
