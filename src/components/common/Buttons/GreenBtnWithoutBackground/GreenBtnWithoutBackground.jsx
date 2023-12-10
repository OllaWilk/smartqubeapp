import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { removeSpaces } from "../../../../utils/removeSpaces";

import styles from "./GreenBtnWithoutBackground.module.scss";

export const GreenBtnWithoutBackground = ({ text, linkTo }) => {
  return (
    <Link
      to={`${linkTo.includes("http") ? linkTo : "/" + removeSpaces(linkTo)}`}
      className={styles.greenTransparentBckg}
      target={`${linkTo.includes("http") ? "_blank" : ""}`}
    >
      {text}
    </Link>
  );
};

GreenBtnWithoutBackground.propTypes = {
  text: PropTypes.string,
  linkTo: PropTypes.string,
};
