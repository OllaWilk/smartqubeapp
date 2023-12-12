import React from "react";
import { contact } from "../../../db/en/contact";

import {
  ContactCart,
  ContactForm,
  GreenHeader,
  RequestCall,
} from "../../common";
import styles from "./Contact.module.scss";

export const Contact = () => {
  const {
    contactTitle,
    cartTitle,
    cartDescription,
    cartSubtitle,
    contactCart,
    contactForm,
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
        <ContactForm contactForm={contactForm} />
      </div>

      <div className={styles.requestToCall}>
        <RequestCall />
      </div>
    </div>
  );
};
