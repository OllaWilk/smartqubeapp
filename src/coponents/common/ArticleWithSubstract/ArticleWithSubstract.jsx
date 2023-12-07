import React, { useEffect } from "react";
import PropTypes from "prop-types";

import {
  DescriptionHeadline,
  DescriptionSubtitle,
  GreenBtnWithoutBackground,
} from "../index.js";

import styles from "./ArticleWithSubstract.module.scss";

export const ArticleWithSubstract = ({
  abstract,
  title,
  subtitle,
  section1,
  section2,
  linkTo,
  btnName,
}) => {
  useEffect(() => {}, [abstract, title, subtitle, section1, section2]);

  return (
    <div className={styles.infoBox}>
      <div className={styles.headingBlock}>
        {subtitle && <DescriptionSubtitle text={subtitle} />}
        {title && <DescriptionHeadline text={title} />}
        <p className={styles.abstract}>{abstract}</p>
      </div>
      <div className={styles.textBlock}>
        <p className={styles.text}>{section1}</p>
        <p className={styles.text}>{section2}</p>
        <GreenBtnWithoutBackground text={btnName} linkTo={linkTo} />
      </div>
    </div>
  );
};

ArticleWithSubstract.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
  abstract: PropTypes.string,
  section1: PropTypes.string,
  section2: PropTypes.string,
  btnName: PropTypes.string,
  linkTo: PropTypes.string,
};
