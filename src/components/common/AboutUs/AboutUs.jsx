import React from "react";
import PropTypes from "prop-types";

import { ArticleWithSubstract } from "../index";
import styles from "./AboutUs.module.scss";

export const AboutUs = ({
  subtitle,
  title,
  abstract,
  section1,
  section2,
  btnName,
  linkTo,
}) => {
  return (
    <article className={`${styles.about} container`}>
      <ArticleWithSubstract
        subtitle={subtitle}
        title={title}
        abstract={abstract}
        section1={section1}
        section2={section2}
        linkTo={linkTo}
        btnName={btnName}
      />
    </article>
  );
};

AboutUs.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
  abstract: PropTypes.string,
  section1: PropTypes.string,
  section2: PropTypes.string,
  btnName: PropTypes.string,
  linkTo: PropTypes.string,
};
