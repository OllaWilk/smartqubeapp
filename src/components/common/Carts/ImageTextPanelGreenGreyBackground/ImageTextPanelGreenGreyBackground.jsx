import React from "react";
import PropTypes from "prop-types";

import styles from "./ImageTextPanelGreenGreyBackground.module.scss";

export const ImageTextPanelGreenGreyBackground = ({ offers }) => {
  return (
    <>
      {offers.map((offer, index) => (
        <div
          key={`smartqubeoffer-${offer.title}`}
          className={
            index % 2 === 0
              ? `${styles.cart} ${styles.even}`
              : `${styles.cart} ${styles.odd}`
          }
        >
          <div className={styles.text}>
            <span className={styles.cartNumb}>{offer.id}</span>
            <h6 className={styles.title}>{offer.title}</h6>
            <p>{offer.content}</p>
          </div>
          <div className={styles.imgWrap}>
            <img src={offer.img} alt={offer.title} />
          </div>
        </div>
      ))}
    </>
  );
};

ImageTextPanelGreenGreyBackground.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      img: PropTypes.any,
    })
  ).isRequired,
};
