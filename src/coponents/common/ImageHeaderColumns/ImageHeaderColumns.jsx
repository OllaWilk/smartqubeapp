import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { ImgHeader } from "../Titles/ImgHeader/ImgHeader";
import styles from "./ImageHeaderColumns.module.scss";

export const ImageHeaderColumns = ({ src, alt, header, text1, text2 }) => {
  useEffect(() => {}, [src, alt, header, text1, text2]);
  return (
    <div className={styles.column}>
      <ImgHeader src={src} alt={alt} header={header} />
      <p>{text1}</p>
      <p>{text2}</p>
    </div>
  );
};

ImageHeaderColumns.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  header: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
};
