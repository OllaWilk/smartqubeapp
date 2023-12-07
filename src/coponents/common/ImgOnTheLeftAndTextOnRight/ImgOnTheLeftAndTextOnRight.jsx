import React from "react";
import { SectionTitle, ImageBox } from "../index";
import PropTypes from "prop-types";

import styles from "./ImgOnTheLeftAndTextOnRight.module.scss";

export const ImgOnTheLeftAndTextOnRight = ({
  alt,
  src,
  title,
  subtitle,
  description,
}) => {
  return (
    <div className={styles.contentWrap}>
      <div className={styles.imgWrap}>
        <ImageBox src={src} alt={alt} />
      </div>
      <div className={styles.textWrap}>
        <SectionTitle h2={title} h3={subtitle} />
        <p>{description}</p>
      </div>
    </div>
  );
};

ImgOnTheLeftAndTextOnRight.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};
