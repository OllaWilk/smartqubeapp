import React, { useState } from "react";
import { PhoneInput } from "react-international-phone";

import "react-international-phone/style.css";
import styles from "./RequestCall.module.scss";

export const RequestCall = () => {
  /* TODO WALIDATION */
  /* REMOVE Handle country change */
  /* TODO style inputs */
  /* TODO rwd */

  const [form, setForm] = useState({
    name: "",
    country: "",
    phoneNumber: "",
  });

  const [phone, setPhone] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setForm((prevState) => ({ ...prevState, country }));

    const countryPrefixes = {
      usa: "+1",
      uk: "+44",
      canada: "+1",
      // Dodaj więcej prefiksów dla innych krajów
    };

    setForm((prevState) => ({
      ...prevState,
      phoneNumber: "",
    }));

    if (country && countryPrefixes[country]) {
      setForm((prevState) => ({
        ...prevState,
        phoneNumber: countryPrefixes[country],
      }));
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    setForm({
      name: "",
      country: "",
      phoneNumber: "",
    });
  };

  return (
    <div className={`${styles.callToAction} container`}>
      <div className={styles.headlingsWrap}>
        <h2 className={styles.subtitleCall}>Request a call!</h2>
      </div>
      <form className={styles.formRequest} onSubmit={handleSubmitForm}>
        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="Enter your Name"
          onChange={handleInputChange}
          required
        />
        <select
          name="country"
          value={form.country}
          onChange={handleCountryChange}
          required
        >
          <option value="">Select your country</option>
          <option value="usa">USA</option>
          <option value="uk">UK</option>
          <option value="canada">Canada</option>
        </select>
        <PhoneInput
          defaultCountry="us"
          value={phone}
          onChange={(phone) => setPhone(phone)}
        />
        <button className={styles.submitBtn} type="submit">
          submit
        </button>
      </form>
    </div>
  );
};
