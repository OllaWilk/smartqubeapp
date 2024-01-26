import React from "react";
import PropTypes from "prop-types";

import {
  ContactCart,
  ContactForm,
  GreenHeader,
  RequestCall,
} from "../../common";
import styles from "./Contact.module.scss";

export const Contact = ({ contact }) => {
  const {
    contactTitle,
    cartTitle,
    cartDescription,
    cartSubtitle,
    contactCart,
    contactForm,
    errorsMessages,
  } = contact;
  return (
    <div className={styles.contact}>
      <div className={styles.header}>
        <GreenHeader mainTitle={contactTitle} />
      </div>
      <div className={`${styles.contactPage} container`}>
        <ContactCart
          cartDescription={cartDescription}
          cartSubtitle={cartSubtitle}
          contactCart={contactCart}
          cartTitle={cartTitle}
        />
        <ContactForm
          contactForm={contactForm}
          errorsMessages={errorsMessages}
        />
      </div>

      <div className={styles.requestToCall}>
        <RequestCall
          namePlaceholder={contactForm.name}
          phonePlaceholder={contactForm.phoneNumber}
          errorsMessages={errorsMessages}
        />
      </div>
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.node.isRequired,
};
