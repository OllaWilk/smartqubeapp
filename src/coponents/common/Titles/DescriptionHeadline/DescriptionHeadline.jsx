import React from "react";
import PropTypes from "prop-types";

import styles from "./DescriptionHeadline.module.scss";

export const DescriptionHeadline = ({ text }) => {
  return <h2 className={styles.headline}>{text}</h2>;
};

DescriptionHeadline.propTypes = {
  text: PropTypes.string,
};
