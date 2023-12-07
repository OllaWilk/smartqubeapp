import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { removeSpaces } from "../../../../utils/removeSpaces";

import styles from "./TransparentBtn.module.scss";

export const TransparentBtn = ({ text, linkTo }) => {
  return (
    <Link className={styles.transparent} to={removeSpaces(`/${linkTo}`)}>
      <p>{text}</p>
    </Link>
  );
};

TransparentBtn.propTypes = {
  text: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
};
