import React from "react";
import PropTypes from "prop-types";
import { photos } from "../../../images/index";
import {
  ContactCart,
  ContactForm,
  GreenHeader,
  RequestCall,
} from "../../common";
import styles from "./Contact.module.scss";

export const Contact = ({ contact, region }) => {
  const {
    contactTitle,
    cartTitle,
    cartDescription,
    cartSubtitle,
    contactCart,
    contactCartUSA,
    contactForm,
    errorsMessages,
  } = contact;
  return (
    <div className={styles.contact}>
      <div className={styles.header}>
        <GreenHeader mainTitle={contactTitle} />
      </div>
      <div className={styles.wraper}>
        <div className={styles.videoWrap}>
          <img src={photos.splash} alt="splash" />
        </div>
        <div className={`${styles.contactPage} container`}>
          {region === "usa" ? (
            <ContactCart
              cartDescription={cartDescription}
              cartSubtitle={cartSubtitle}
              contactCart={contactCartUSA}
              cartTitle={cartTitle}
            />
          ) : (
            <ContactCart
              cartDescription={cartDescription}
              cartSubtitle={cartSubtitle}
              contactCart={contactCart}
              cartTitle={cartTitle}
            />
          )}
          <ContactForm
            contactForm={contactForm}
            errorsMessages={errorsMessages}
          />
        </div>
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
  contact: PropTypes.object.isRequired,
  region: PropTypes.string,
};
