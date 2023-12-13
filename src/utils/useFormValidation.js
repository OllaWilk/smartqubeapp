import { useState } from "react";

const useFormValidation = (
  initialState,
  validationRules,
  defaultErrorMessages
) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    Object.keys(validationRules).forEach((fieldName) => {
      const value = formData[fieldName];
      const rules = validationRules[fieldName];

      rules.forEach((rule) => {
        if (rule.required && !value) {
          newErrors[fieldName] =
            rule.message ||
            defaultErrorMessages[fieldName] ||
            "This field is required";
          valid = false;
        } else if (rule.pattern && !rule.pattern.test(value)) {
          newErrors[fieldName] =
            rule.message || defaultErrorMessages[fieldName] || "Invalid input";

          valid = false;
        } else if (rule.minlength && value.length < rule.minlength) {
          newErrors[fieldName] =
            rule.message ||
            defaultErrorMessages[fieldName] ||
            `Must be at least ${rule.minlength} characters long`;
          valid = false;
        } else if (rule.maxlength && value.length > rule.maxlength) {
          newErrors[fieldName] =
            rule.message ||
            defaultErrorMessages[fieldName] ||
            `Message be at most ${rule.maxlength} characters long`;
          valid = false;
        } else {
          newErrors[fieldName] = "";
        }
      });
    });

    setErrors(newErrors);
    return valid;
  };

  return {
    formData,
    errors,
    setFieldValue: (fieldName, value) => {
      setFormData((prevData) => ({
        ...prevData,
        [fieldName]: value,
      }));
    },
    validateForm,
  };
};

export default useFormValidation;
