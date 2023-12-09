import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./ImgHeader.module.scss";

export const ImgHeader = ({ src, alt, header }) => {
  useEffect(() => {}, [src, alt, header]);
  return (
    <div className={styles.titlewrap}>
      {src && (
        <div className={styles.imgWrapTitle}>
          <img src={src} alt={alt} />
        </div>
      )}
      {header && <h6 className={styles.header}>{header}</h6>}
    </div>
  );
};

ImgHeader.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  header: PropTypes.string,
};
