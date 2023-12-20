export const removeSpaces = (text) => {
  return text.replace(/\s/g, "");
};

export const removeUnderlines = (text) => {
  return text.replace(/_/g, " ");
};
