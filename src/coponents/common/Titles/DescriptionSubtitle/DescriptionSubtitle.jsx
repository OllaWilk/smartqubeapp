import React from "react";
import PropTypes from "prop-types";

import styles from "./DescriptionSubtitle.module.scss";

export const DescriptionSubtitle = ({ text }) => {
  return <h3 className={styles.subtitle}>{text}</h3>;
};

DescriptionSubtitle.propTypes = {
  text: PropTypes.string,
};
