import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { DescriptionSubtitle } from "../Titles/DescriptionSubtitle/DescriptionSubtitle";
import styles from "./CookieInfo.module.scss";

export const CookieInfo = ({ cookie }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookiesAccepted = Cookies.get("cookiesAccepted");

    if (!cookiesAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("cookiesAccepted", "true", { expires: 365 });
    setIsVisible(false);
    window.location.reload();
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
