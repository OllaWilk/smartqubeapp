import React from "react";
import PropTypes from "prop-types";

import styles from "./GaleryCart.module.scss";

export const GaleryCart = ({ name, img }) => {
  return (
    <div className={styles.person}>
      <img src={img} alt="" />
      <p>{name}</p>
    </div>
  );
};

GaleryCart.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
};
