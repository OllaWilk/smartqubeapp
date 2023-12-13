import React from "react";
import PropTypes from "prop-types";

import styles from "./ContactCart.module.scss";

export const ContactCart = ({ cartDescription, cartSubtitle, contactCart }) => {
  return (
    <div className={styles.contactBox}>
      <p className={styles.subtitle}>{cartSubtitle}</p>
      <p className={styles.cartDescription}>{cartDescription}</p>
      <div className={styles.contactList}>
        {contactCart.map((item, index) => (
          <div key={`contactCart-${index}`} className={styles.contactListLtem}>
            {item.imgUrl && (
              <div className={styles.contactItemIcon}>
                <img src={item.imgUrl} alt="icon" />
              </div>
            )}
            <div className={styles.textWrap}>
              {item.companyName && <p>{item.companyName}</p>}
              {item.street && <p>{item.street}</p>}
              {item.zip && <p>{item.zip}</p>}
              {item.mail && <p>{item.mail}</p>}
              {item.hours && <p>{item.hours}</p>}
              {item.workWeek && <p>{item.workWeek}</p>}
              {item.weekend && <p>{item.weekend}</p>}
              {item.VAT && <p>{item.VAT}</p>}
              {item.USDIBAN && <p>{item.USDIBAN}</p>}
              {item.EURIBAN && <p>{item.EURIBAN}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

ContactCart.propTypes = {
  cartDescription: PropTypes.string,
  cartSubtitle: PropTypes.string,
  contactCart: PropTypes.arrayOf(
    PropTypes.shape({
      imgUrl: PropTypes.string,
      companyName: PropTypes.string,
      street: PropTypes.string,
      zip: PropTypes.string,
      mail: PropTypes.string,
      hours: PropTypes.string,
      workWeek: PropTypes.string,
      weekend: PropTypes.string,
      VAT: PropTypes.string,
      USDIBAN: PropTypes.string,
      EURIBAN: PropTypes.string,
    })
  ).isRequired,
};
