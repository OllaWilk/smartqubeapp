import React, { useEffect } from "react";
import PropTypes from "prop-types";

import styles from "./ImgWithTitleAndDescriptionBellowCart.module.scss";

export const ImgWithTitleAndDescriptionBellowCart = ({
  image,
  alt,
  title,
  text,
  span,
}) => {
  useEffect(() => {}, [image, alt, title, text, span]);

  return (
    <div className={styles.cartWrap}>
      <div className={styles.logos}>
        {image && <img src={image} alt={alt} />}
        {title && <h6 className={styles.header}>{title}</h6>}
        {text && <p className={styles.text}>{text}</p>}
      </div>
      {span && <p className={styles.text}>{span}</p>}
    </div>
  );
};

ImgWithTitleAndDescriptionBellowCart.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  span: PropTypes.string,
};
