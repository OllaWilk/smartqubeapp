import React from "react";
import PropTypes from "prop-types";

import styles from "./GaleryCart.module.scss";

export const GaleryCart = ({ name, img }) => {
  return (
    <div className={styles.person}>
      <div className={styles.imgWrap}>
        <img src={img} alt="" />
      </div>
      <p>{name}</p>
    </div>
  );
};

GaleryCart.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
};
