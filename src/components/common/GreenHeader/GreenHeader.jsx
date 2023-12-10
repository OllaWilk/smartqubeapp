import React from "react";
import PropTypes from "prop-types";
import { Header } from "../Header/Header";
import styles from "./GreenHeader.module.scss";

export const GreenHeader = ({
  description,
  mainTitle,
  subtitle,
  greenBtn,
  transparentBtn,
}) => {
  return (
    <div className={styles.headerBackground}>
      <Header
        mainTitle={mainTitle}
        subtitle={subtitle}
        greenBtn={greenBtn}
        transparentBtn={transparentBtn}
        description={description}
      />
    </div>
  );
};

GreenHeader.propTypes = {
  description: PropTypes.string,
  mainTitle: PropTypes.string,
  subtitle: PropTypes.string,
  greenBtn: PropTypes.string,
  transparentBtn: PropTypes.string,
  greenBtnLinkTo: PropTypes.string,
  transparentBtnLinkTo: PropTypes.string,
};
