import React from "react";
import PropTypes from "prop-types";
import styles from "./SectionTitle.module.scss";

export const SectionTitle = ({ h2, h3 }) => {
  return (
    <div className={styles.title}>
      <h3 className={styles.sectionTitle}>{h3}</h3>
      <h2 className={styles.quoteTitle}>{h2}</h2>
    </div>
  );
};

SectionTitle.propTypes = {
  h2: PropTypes.string.isRequired,
  h3: PropTypes.string.isRequired,
};
