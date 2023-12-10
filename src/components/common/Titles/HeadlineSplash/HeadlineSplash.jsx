import React from "react";
import PropTypes from "prop-types";

import styles from "./HeadlineSplash.module.scss";

export const HeadlineSplash = ({ text }) => {
  return <h1 className={styles.headline}>{text}</h1>;
};

HeadlineSplash.propTypes = {
  text: PropTypes.string,
};
