import React from "react";
import PropTypes from "prop-types";

import styles from "./SubtitleSplash.module.scss";

export const SubtitleSplash = ({ subtitle }) => {
  return <h2 className={styles.subtitle}>{subtitle}</h2>;
};

SubtitleSplash.propTypes = {
  subtitle: PropTypes.string,
};
