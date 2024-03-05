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
  const [information, setInformation] = useState(false);
  const [GDPR, setGDPR] = useState(false);
  const { formData, errors, setFieldValue, validateForm } = useFormValidation(
    {
      name: "",
      companyName: "",
      job: "",
      email: "",
      message: "",
      isOver18: "",
      dataProcessingConsent: "",
      euLawConsent: "",
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
      message: [
        {
          required: true,
          minlength: 1,
          maxlength: 250,
          message: errorsMessages.message,
        },
      ],
      isOver18: [{ required: true, message: errorsMessages.isOver18 }],
      dataProcessingConsent: [
        { required: true, message: errorsMessages.dataProcessingConsent },
      ],
      euLawConsent: [{ required: true, message: errorsMessages.euLawConsent }],
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
            {/* NAME */}
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
            {/* PHONE */}
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
            {/* COMPANY NAME */}
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
            {/* JOB POSSITION */}
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
            {/* EMAIL */}
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
            {/* MESSAGE */}
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
            {/* IS 18 */}
            <div className={styles.checkboxProcessing}>
              <input
                type="checkbox"
                name="isOver18"
                checked={formData.isOver18 || false}
                onChange={() => setFieldValue("isOver18", !formData.isOver18)}
              />
              <div>{contactForm.isOver18}</div>
            </div>
            {errors.isOver18 && (
              <span className={styles.errorText}>{errors.isOver18}</span>
            )}

            {/* PROCESSING CONSENT */}
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
              <div className={styles.checkboxWrap}>
                <p>{contactForm.dataProcessingConsent[0]} *</p>
                <p
                  onClick={() => setInformation(!information)}
                  className={styles.info}
                >
                  {contactForm.dataProcessingConsent[1]}
                </p>
                {information && <p>{contactForm.dataProcessingConsent[2]}</p>}
              </div>
            </div>
            {errors.dataProcessingConsent && (
              <span className={styles.errorText}>
                {errors.dataProcessingConsent}
              </span>
            )}
            {/* GDPR */}
            <div className={styles.checkboxProcessing}>
              <input
                type="checkbox"
                name="euLawConsent"
                checked={formData.euLawConsent || false}
                onChange={() =>
                  setFieldValue("euLawConsent", !formData.euLawConsent)
                }
              />
              <div className={styles.checkboxWrap}>
                <p>{contactForm.GDPR[0]} *</p>
                <p onClick={() => setGDPR(!GDPR)} className={styles.info}>
                  {contactForm.GDPR[1]}
                </p>
                {GDPR && <p>{contactForm.GDPR[2]}</p>}
              </div>
            </div>

            {errors.euLawConsent && (
              <span className={styles.errorText}>{errors.euLawConsent}</span>
            )}
            <span>
              <Link to={`/privacy`}>{contactForm.gdrLink[0]}</Link>
            </span>
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
