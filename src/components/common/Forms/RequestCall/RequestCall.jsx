import React from "react";
import PropTypes from "prop-types";
import PhoneInput from "react-phone-number-input";
import useFormValidation from "../../../../utils/useFormValidation";
import "react-phone-number-input/style.css";
import styles from "./RequestCall.module.scss";

export const RequestCall = ({
  namePlaceholder,
  phonePlaceholder,
  errorsMessages,
}) => {
  const { formData, errors, setFieldValue, validateForm } = useFormValidation(
    {
      name: "",
    },
    {
      name: [
        {
          required: false,
          minlength: 3,
          maxlength: 120,
          message: `${errorsMessages.name}. It should contain at least 3 characters. `,
        },
      ],
      phone: [
        {
          required: false,
          pattern: /^\+?[1-9]\d{1,14}$/,
          message: `${errorsMessages.phone}.`,
        },
      ],
    },
    {}
  );

  const onChange = (e) => setFieldValue(e.target.name, e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Formularz wysłany:", formData);
    } else {
      console.log("Formularz zawiera błędy", formData);
    }
  };

  return (
    <div className={`${styles.callToAction} container`}>
      <div className={styles.headlingsWrap}>
        <h2 className={styles.subtitleCall}>Request a call!</h2>
      </div>
      <form className={styles.formRequest} onSubmit={handleSubmit}>
        <ul>
          <li>
            <input
              className={styles.customImput}
              type="text"
              name="name"
              value={formData.name}
              onChange={onChange}
              placeholder={namePlaceholder}
            />
            {errors.name && (
              <span className={styles.errorText}>{errors.name}</span>
            )}
          </li>
          <li>
            <PhoneInput
              className={styles.phoneSelect}
              defaultCountry="PL"
              placeholder={phonePlaceholder}
              value={formData.phone}
              onChange={(phone) => setFieldValue("phone", phone)}
            />
            {errors.phone && (
              <span className={styles.errorText}>{errors.phone}</span>
            )}
          </li>
        </ul>

        <button className={styles.submitBtn} type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

RequestCall.propTypes = {
  errorsMessages: PropTypes.string,
  namePlaceholder: PropTypes.string,
  phonePlaceholder: PropTypes.string,
};
