import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./BlackBtn.module.scss";

export const BlackBtn = ({ text, linkTo }) => {
  return (
    <Link to={`/${linkTo}`} className={styles.black}>
      {text}
    </Link>
  );
};

BlackBtn.propTypes = {
  text: PropTypes.string,
  linkTo: PropTypes.string,
};
