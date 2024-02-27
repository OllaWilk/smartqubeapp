import React, { useState } from "react";
import PropTypes from "prop-types";
import Cookies from "js-cookie";
import { GreenHeader } from "../../common";
import styles from "./CookiePage.module.scss";

export const CookiePage = ({ cookiePage }) => {
  const [isAccepted, setIsAccepted] = useState(false);

  const removeAllCookies = () => {
    const allCookies = Cookies.get();
    Object.keys(allCookies).forEach((cookie) => Cookies.remove(cookie));
  };

  const handleRemove = () => {
    removeAllCookies();
    setIsAccepted(true);
    window.location.reload();
  };

  const handleAccept = () => {
    Cookies.set("cookiesAccepted", "true", { expires: 365 });
    setIsAccepted(true);
    window.location.reload();
  };

  return (
    <div className={styles.cookiePage}>
      <div className={styles.header}>
        <GreenHeader mainTitle={cookiePage.title} />
      </div>
      <div className={`${styles.articles} container`}>
        <p>{cookiePage.article1}</p>
        <br />
        <p>{cookiePage.article2}</p>
        <br />
        <p>{cookiePage.article3}</p>
        <br />
        <p>{cookiePage.article4}</p>
        <p>{cookiePage.article5}</p>
        <p>{cookiePage.article6}</p>
        <br />
        <p>{cookiePage.article7}</p>
        <p>{cookiePage.article8}</p>
        {/* <p>{cookiePage.article9}</p> */}
        {/* <p>{cookiePage.article10}</p> */}
        <p>{cookiePage.article11}</p>
        {/* <p>{cookiePage.article12}</p> */}
        <br />
        <p>{cookiePage.article13}</p>
        <br />
        <p>{cookiePage.article14}</p>
        <br />
        <p>{cookiePage.article15}</p>
        <div className={styles.butonsWrap}>
          {isAccepted ? (
            <button
              className={styles.greenTransparentBckg}
              onClick={handleAccept}
            >
              {cookiePage.accept}
            </button>
          ) : (
            <button
              className={styles.greenTransparentBckg}
              onClick={handleRemove}
            >
              {cookiePage.unaccept}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

CookiePage.propTypes = {
  cookiePage: PropTypes.object,
};
