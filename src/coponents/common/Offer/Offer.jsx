import React from "react";
import PropTypes from "prop-types";
import { CartWithImg, SectionTitle } from "../../common/index";

import styles from "./Offer.module.scss";

export const Offer = ({ offers, title, subtitle }) => {
  console.log(offers.map((offer) => console.log(offer.button[0])));
  return (
    <div className={`${styles.offer} container`}>
      <SectionTitle h2={title} h3={subtitle} />

      <div className={styles.offerCart}>
        {offers.map((offer, index) => (
          <CartWithImg
            key={`${index}-home-cart `}
            title={offer.title}
            description={offer.description}
            src={offer.image}
            alt={offer.title}
            buttonName={offer.button[0]}
            buttonUrl={offer.button[1]}
          />
        ))}
      </div>
    </div>
  );
};

Offer.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
