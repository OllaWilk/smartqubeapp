import React from "react";
import { DescriptionSubtitle } from "../../../common/index";
import { contact } from "../../../../db/en/contact";
import styles from "./ContactCart.module.scss";

export const ContactCart = () => {
  const { contactCartTitle, contactCart } = contact;
  return (
    <div className={styles.contactBox}>
      <DescriptionSubtitle text={contactCartTitle} />
      <div className={styles.cartWrap}>
        {contactCart.map((item, index) => (
          <div key={`contactCart-${index}`} className={styles.cart}>
            {item.imgUrl && <img src={item.imgUrl} alt="icon" />}
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
