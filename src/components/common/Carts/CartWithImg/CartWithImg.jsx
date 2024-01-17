import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { GreenBtnWithoutBackground } from "../../index";

import styles from "./CartWithImg.module.scss";

export const CartWithImg = ({
  title,
  description,
  src,
  alt,
  buttonUrl,
  buttonName,
}) => {
  useEffect(() => {}, [src, buttonUrl, buttonName]);

  const handleNavLinkClick = () => {
    window.scrollTo(0, 0);
    console.log("kliknij");
    // setExpandedItem(null);
  };

  return (
    <div className={styles.porftolioCart}>
      {buttonName ? (
        <a href={`${buttonUrl}`}>
          <div className={styles.imgWrap}>
            <img alt={alt} src={src} />
          </div>
        </a>
      ) : (
        <div className={styles.imgWrap}>
          <img src={src} alt={alt} />
        </div>
      )}
      <div className={styles.abstract}>
        <h3>{title}</h3>
        <p>{description}</p>
        {buttonName && (
          <div onClick={handleNavLinkClick}>
            <GreenBtnWithoutBackground text={buttonName} linkTo={buttonUrl} />
          </div>
        )}
      </div>
    </div>
  );
};

CartWithImg.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  buttonUrl: PropTypes.string,
  buttonName: PropTypes.string,
  subtitle: PropTypes.string,
};
