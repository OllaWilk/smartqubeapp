import React from "react";
import { notFound } from "../../../db/en/notFound";
import { Link } from "react-router-dom";

import styles from "./NotFound.module.scss";

export const NotFound = () => {
  const { info, image, error, button, linkTo } = notFound;
  return (
    <div className={styles.notfoundPage}>
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
