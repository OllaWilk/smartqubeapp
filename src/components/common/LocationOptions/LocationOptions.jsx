import React from "react";
import styles from "./LocationOptions.module.scss";

export const LocationOptions = () => {
  return (
    <select className={styles.languageLocationWrap}>
      <option value="ue">UE</option>
      {/* <option value="usa">USA</option> */}
    </select>
  );
};
