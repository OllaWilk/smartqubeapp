import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import PhoneInput from "react-phone-number-input";
import { LocaleContext } from "../../../../contexts/LocaleContext";
import useFormValidation from "../../../../utils/useFormValidation";
import "react-phone-number-input/style.css";
import styles from "./ContactForm.module.scss";
import { Link } from "react-router-dom";

export const ContactForm = ({ contactForm, errorsMessages }) => {
  const { region } = useContext(LocaleContext);
  const [myRegion, setMyRegion] = useState(region === "usa" ? "US" : "PL");
  const { formData, errors, setFieldValue, validateForm } = useFormValidation(
    {
      name: "",
      companyName: "",
      job: "",
      email: "",
      message: "",
    },
    {
      name: [
        {
          required: true,
          minlength: 3,
          maxlength: 120,
          message: `${errorsMessages.name}. It should contain at least 3 characters. `,
        },
      ],
      phone: [
        {
          required: true,
          pattern: /^\+?[1-9]\d{1,14}$/,
          message: `${errorsMessages.phone}.`,
        },
      ],
      companyName: [
        {
          required: true,
          minlength: 1,
          maxlength: 120,
          message: errorsMessages.companyName,
        },
      ],
      email: [
        {
          required: true,
          minlength: 4,
          maxlength: 255,
          message: errorsMessages.email,
          pattern: /^\S+@\S+$/i,
        },
      ],

      message: [{ required: true, minlength: 1, maxlength: 250 }],
    },
    {}
  );

  const onChange = (e) => setFieldValue(e.target.name, e.target.value);

  /* Submition */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Formularz wysłany:", formData);
    } else {
      console.log("Formularz zawiera błędy", formData);
    }
  };

  useEffect(() => {
    setMyRegion(region === "usa" ? "US" : "PL");
  }, [region]);

  return (
    <>
      <div className={styles.formBox}>
        <div className={styles.contactForm}>
          <form onSubmit={handleSubmit}>
            <input
              className={styles.customImput}
              type="text"
              name="name"
              value={formData.name}
              onChange={onChange}
              placeholder={contactForm.name}
            />
            {errors.name && (
              <span className={styles.errorText}>{errors.name}</span>
            )}
            <PhoneInput
              className={styles.phoneSelect}
              defaultCountry={myRegion}
              placeholder={contactForm.phoneNumber}
              value={formData.phone}
              onChange={(phone) => setFieldValue("phone", phone)}
            />
            {errors.phone && (
              <span className={styles.errorText}>{errors.phone}</span>
            )}
            <input
              className={styles.customImput}
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={onChange}
              placeholder={contactForm.companyName}
            />
            {errors.companyName && (
              <span className={styles.errorText}>{errors.companyName}</span>
            )}
            <input
              className={styles.customImput}
              type="text"
              name="job"
              value={formData.job}
              onChange={onChange}
              placeholder={contactForm.position}
            />
            {errors.job && (
              <span className={styles.errorText}>{errors.job}</span>
            )}
            <input
              className={styles.customImput}
              type="email"
              name="email"
              value={formData.email}
              onChange={onChange}
              placeholder={contactForm.email}
            />
            {errors.email && (
              <span className={styles.errorText}>{errors.email}</span>
            )}
            <textarea
              className={styles.customImput}
              name="message"
              value={formData.message}
              onChange={onChange}
              placeholder={contactForm.message}
            />
            {errors.message && (
              <span className={styles.errorText}>{errors.message}</span>
            )}
            <div className={styles.checkboxProcessing}>
              <label>
                <input
                  type="checkbox"
                  name="ageConfirmation"
                  checked={formData.ageConfirmation || false}
                  onChange={() =>
                    setFieldValue("ageConfirmation", !formData.ageConfirmation)
                  }
                />
                {contactForm.isOver18}
              </label>
            </div>

            <div className={styles.checkboxProcessing}>
              <input
                type="checkbox"
                name="dataProcessingConsent"
                checked={formData.dataProcessingConsent || false}
                onChange={() =>
                  setFieldValue(
                    "dataProcessingConsent",
                    !formData.dataProcessingConsent
                  )
                }
              />
              <p>{contactForm.dataProcessingConsent}</p>
            </div>
            <div className={styles.checkboxProcessing}>
              <input
                type="checkbox"
                name="euLawConsent"
                checked={formData.euLawConsent || false}
                onChange={() =>
                  setFieldValue("euLawConsent", !formData.euLawConsent)
                }
              />
              <p>
                {contactForm.GDPR} *
                <br />
                <span>
                  <Link to={`/privacy`}>{contactForm.gdrLink[0]}</Link>
                </span>
              </p>
            </div>

            <button className={styles.formBtn} type="submit">
              {contactForm.submit}
            </button>
          </form>
          <p className={styles.note}>{contactForm.requiredFields}</p>
        </div>
      </div>
    </>
  );
};

ContactForm.propTypes = {
  errorsMessages: PropTypes.object.isRequired,
  contactForm: PropTypes.object.isRequired,
};
