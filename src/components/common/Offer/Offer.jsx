import React from "react";
import PropTypes from "prop-types";
import { CartWithImg, SectionTitle } from "../index";

import styles from "./Offer.module.scss";

export const Offer = ({ offers, title, subtitle }) => {
  return (
    <div className={`${styles.offer} container`}>
      <SectionTitle h2={title} h3={subtitle} />

      <article className={styles.offerCart}>
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
      </article>
    </div>
  );
};

Offer.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
