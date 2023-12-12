import React from "react";
import PropTypes from "prop-types";

import styles from "./SubtitleSplash.module.scss";

export const SubtitleSplash = ({ subtitle }) => {
  return <h3 className={styles.subtitle}>{subtitle}</h3>;
};

SubtitleSplash.propTypes = {
  subtitle: PropTypes.string,
};
