import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./CookieInfo.module.scss";
import PropTypes from "prop-types";

import { DescriptionSubtitle } from "../Titles/DescriptionSubtitle/DescriptionSubtitle";

export const CookieInfo = ({ cookie }) => {
  const [isVisible, setIsVisible] = useState(false);
  console.log(cookie);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    console.log(cookiesAccepted);

    if (!cookiesAccepted) {
      console.log(cookiesAccepted);
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className={styles.cookieInfo}>
        <div className={styles.modal}></div>
        <div className={styles.info}>
          <div>
            <DescriptionSubtitle text={cookie.title} />
            <p className={styles.text}>{cookie.cookie}</p>
          </div>

          <div className={styles.buttonsWrap}>
            <button
              className={styles.greenTransparentBckg}
              onClick={handleAccept}
            >
              {cookie.accept}
            </button>
            <Link to={"/cookies"} className={styles.goToCookiePolicy}>
              * {cookie.info} <span>{cookie.urlLink}</span>
            </Link>
          </div>
        </div>
      </div>
    )
  );
};

CookieInfo.propTypes = {
  cookie: PropTypes.object,
};
