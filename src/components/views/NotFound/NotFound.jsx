import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import styles from "./NotFound.module.scss";

export const NotFound = ({ notFound }) => {
  const { info, image, error, button, linkTo } = notFound;

  return (
    <div className={styles.notfoundPage}>
      <div className={styles.navColors}></div>
      <Link to="/home" className={styles.logo}>
        <img src={image} alt="Logo" />
      </Link>
      <div className={styles.errorWrap}>
        <h2 className={styles.resInfo}>{error}</h2>
        <p>{info}</p>
      </div>
      <Link to={`/${linkTo}`}>{button}</Link>
    </div>
  );
};

NotFound.propTypes = {
  notFound: PropTypes.object.isRequired,
};
