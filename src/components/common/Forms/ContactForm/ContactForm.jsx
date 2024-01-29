import React from "react";
import PropTypes from "prop-types";
import PhoneInput from "react-phone-number-input";
import useFormValidation from "../../../../utils/useFormValidation";
import "react-phone-number-input/style.css";
import styles from "./ContactForm.module.scss";

export const ContactForm = ({ contactForm, errorsMessages }) => {
  const {
    name,
    companyName,
    email,
    position,
    phoneNumber,
    message,
    requiredFields,
  } = contactForm;

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
                  onChange={onChange}
                  placeholder={name}
                />
                {errors.name && (
                  <span className={styles.errorText}>{errors.name}</span>
                )}
              </li>
              <li>
                <PhoneInput
                  className={styles.phoneSelect}
                  defaultCountry="PL"
                  placeholder={phoneNumber}
                  value={formData.phone}
                  onChange={(phone) => setFieldValue("phone", phone)}
                />
                {errors.phone && (
                  <span className={styles.errorText}>{errors.phone}</span>
                )}
              </li>
              <li>
                <input
                  className={styles.customImput}
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={onChange}
                  placeholder={companyName}
                />
                {errors.companyName && (
                  <span className={styles.errorText}>{errors.companyName}</span>
                )}
              </li>
              <li>
                <input
                  className={styles.customImput}
                  type="text"
                  name="job"
                  value={formData.job}
                  onChange={onChange}
                  placeholder={position}
                />
                {errors.job && (
                  <span className={styles.errorText}>{errors.job}</span>
                )}
              </li>
              <li>
                <input
                  className={styles.customImput}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={onChange}
                  placeholder={email}
                />
                {errors.email && (
                  <span className={styles.errorText}>{errors.email}</span>
                )}
              </li>
              <li>
                <textarea
                  className={styles.customImput}
                  name="message"
                  value={formData.message}
                  onChange={onChange}
                  placeholder={message}
                />
                {errors.message && (
                  <span className={styles.errorText}>{errors.message}</span>
                )}
              </li>
            </ul>

            <button className={styles.formBtn} type="submit">
              Submit
            </button>
          </form>
          <p className={styles.note}>{requiredFields}</p>
        </div>
      </div>
    </>
  );
};

ContactForm.propTypes = {
  errorsMessages: PropTypes.string,
  contactForm: PropTypes.shape({
    name: PropTypes.string,
    companyName: PropTypes.string,
    email: PropTypes.string,
    position: PropTypes.string,
    phoneNumber: PropTypes.string,
    message: PropTypes.string,
    requiredFields: PropTypes.string,
  }).isRequired,
};
