import React, { useState } from "react";
import { PhoneNumberUtil } from "google-libphonenumber";
import PropTypes from "prop-types";

import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

import styles from "./ContactForm.module.scss";

export const ContactForm = ({ contactForm }) => {
  const { name, companyName, email, position, phoneNumber, message } =
    contactForm;

  const [formData, setFormData] = useState({
    name: "",
    country: "",
    companyName: "",
    job: "",
    email: "",
    message: "",
  });

  const [phone, setPhone] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      phone: phone,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dodaj obsługę logiki wysyłki formularza, np. do serwera API lub innej funkcji
  };

  return (
    <>
      <div className={styles.formBox}>
        <div className={styles.contactForm}>
          <form onSubmit={handleSubmit}>
            <ul>
              <li>
                <input
                  className={styles.customImput}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={name}
                />
              </li>
              <li>
                <PhoneInput
                  defaultCountry="us"
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                />
              </li>
              <li>
                <input
                  className={styles.customImput}
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder={companyName}
                  required
                />
              </li>
              <li>
                <input
                  className={styles.customImput}
                  type="text"
                  name="job"
                  value={formData.job}
                  onChange={handleChange}
                  placeholder={position}
                />
              </li>
              <li>
                <input
                  className={styles.customImput}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={email}
                />
              </li>
              <li>
                <textarea
                  className={styles.customImput}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={message}
                  required
                />
              </li>
            </ul>
            <button className={styles.formBtn} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

ContactForm.propTypes = {
  contactForm: PropTypes.shape({
    name: PropTypes.string,
    companyName: PropTypes.string,
    email: PropTypes.string,
    position: PropTypes.string,
    phoneNumber: PropTypes.string,
    message: PropTypes.string,
  }).isRequired,
};
