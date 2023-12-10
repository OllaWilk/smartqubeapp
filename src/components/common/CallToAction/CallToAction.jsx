import React from "react";
import { BlackBtn } from "../index";
import PropTypes from "prop-types";

import styles from "./CallToAction.module.scss";

export const CallToAction = ({ h4, h2, btnTitle, url }) => {
  return (
    <div className={`${styles.callToAction} container`}>
      <div className={styles.headlingsWrap}>
        <h4 className={styles.titleCall}>{h4}</h4>
        <h2 className={styles.subtitleCall}>{h2}</h2>
      </div>
      <BlackBtn text={btnTitle} linkTo={url} />
    </div>
  );
};

CallToAction.propTypes = {
  h4: PropTypes.string,
  h2: PropTypes.string,
  btnTitle: PropTypes.string,
  url: PropTypes.string,
};
