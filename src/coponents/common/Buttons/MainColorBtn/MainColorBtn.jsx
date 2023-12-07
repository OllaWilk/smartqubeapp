import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { removeSpaces } from "../../../../utils/removeSpaces";

import styles from "./MainColorBtn.module.scss";

export const MainColorBtn = ({ text, linkTo }) => {
  return (
    <Link className={styles.btnMainColor} to={removeSpaces(`/${linkTo}`)}>
      <p>{text} </p>
    </Link>
  );
};

MainColorBtn.propTypes = {
  text: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
};
