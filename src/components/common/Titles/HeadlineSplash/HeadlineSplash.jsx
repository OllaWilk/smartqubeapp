import React from "react";
import PropTypes from "prop-types";

import styles from "./HeadlineSplash.module.scss";

export const HeadlineSplash = ({ text }) => {
  return <h2 className={styles.headline}>{text}</h2>;
};

HeadlineSplash.propTypes = {
  text: PropTypes.string,
};
