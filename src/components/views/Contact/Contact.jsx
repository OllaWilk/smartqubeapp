import React from "react";
import { ContactCart, ContactForm, RequestCall } from "../../common";
import styles from "./Contact.module.scss";

export const Contact = () => {
  return (
    <>
      <div className={styles.contact}>
        <div className={`${styles.contactPage}`}>
          <ContactCart />
          <ContactForm />
        </div>
      </div>

      <div className={styles.requestToCall}>
        <RequestCall />
      </div>
    </>
  );
};
