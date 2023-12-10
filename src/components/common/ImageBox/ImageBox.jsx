import React from "react";
import PropTypes from "prop-types";
import styles from "./ImageBox.module.scss";

export const ImageBox = ({ src, alt }) => {
  return (
    <div className={styles.imgWrap}>
      <img alt={alt} src={src} />
    </div>
  );
};

ImageBox.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
