import React, { useState } from "react";
import { PhoneInput } from "react-international-phone";
import { DescriptionSubtitle } from "../../../common/index";
import "react-international-phone/style.css";

import styles from "./ContactForm.module.scss";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    companyName: "",
    job: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [phone, setPhone] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setFormData((prevState) => ({ ...prevState, country }));

    const countryPrefixes = {
      usa: "+1",
      uk: "+44",
      canada: "+1",
      // Dodaj więcej prefiksów dla innych krajów
    };

    setFormData((prevState) => ({
      ...prevState,
      phoneNumber: "",
    }));

    if (country && countryPrefixes[country]) {
      setFormData((prevState) => ({
        ...prevState,
        phoneNumber: countryPrefixes[country],
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dodaj obsługę logiki wysyłki formularza, np. do serwera API lub innej funkcji
  };

  return (
    <>
      <div className={styles.formBox}>
        <DescriptionSubtitle text={"SAY SOMETHING"} />
        <div className={styles.contactForm}>
          <form onSubmit={handleSubmit}>
            <input
              className={styles.customImput}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter youre name "
            />
            <PhoneInput
              defaultCountry="us"
              value={phone}
              onChange={(phone) => setPhone(phone)}
            />
            <input
              className={styles.customImput}
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Enter youre company name"
              required
            />
            <input
              className={styles.customImput}
              type="text"
              name="job"
              value={formData.job}
              onChange={handleChange}
              placeholder="Enter youre  job position"
            />

            <input
              className={styles.customImput}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter youre valid email"
            />
            <input
              className={styles.customImput}
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter youre phone (e.g. +14155552675)"
            />
            <textarea
              className={styles.customImput}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter youre message"
              required
            />
            <button className={styles.formBtn} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
