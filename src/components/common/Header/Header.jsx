import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  SubtitleSplash,
  HeadlineSplash,
  MainColorBtn,
  TransparentBtn,
} from "../index";

import styles from "./Header.module.scss";

export const Header = ({
  description,
  mainTitle,
  subtitle,
  greenBtn,
  transparentBtn,
  transparentBtnLinkTo,
  greenBtnLinkTo,
}) => {
  useEffect(() => {}, [description, greenBtn, transparentBtn, subtitle]);

  return (
    <div className={styles.header}>
      <div className={`${styles.contentWrapper} container`}>
        {subtitle && <SubtitleSplash subtitle={subtitle} />}
        <HeadlineSplash text={mainTitle} />
        {description && <p className={styles.text}>{description}</p>}

        <div className={styles.btnsWrap}>
          {greenBtn && <MainColorBtn text={greenBtn} linkTo={greenBtnLinkTo} />}
          {transparentBtn && (
            <TransparentBtn
              text={transparentBtn}
              linkTo={transparentBtnLinkTo}
            />
          )}
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  description: PropTypes.string,
  mainTitle: PropTypes.string,
  subtitle: PropTypes.string,
  greenBtn: PropTypes.string,
  transparentBtn: PropTypes.string,
  greenBtnLinkTo: PropTypes.string,
  transparentBtnLinkTo: PropTypes.string,
};
