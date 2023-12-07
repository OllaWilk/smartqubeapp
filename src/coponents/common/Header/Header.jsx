import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  SubtitleSplash,
  HeadlineSplash,
  MainColorBtn,
  TransparentBtn,
} from "../../common/index";

import styles from "./Header.module.scss";

export const Header = ({
  description,
  mainTitle,
  subtitle,
  greenBtn,
  transparentBtn,
}) => {
  useEffect(() => {}, [description, greenBtn, transparentBtn, subtitle]);

  return (
    <div className={styles.header}>
      <div className={`${styles.contentWrapper} container`}>
        {subtitle && <SubtitleSplash subtitle={subtitle} />}
        <HeadlineSplash text={mainTitle} />
        {description && <p className={styles.text}>{description}</p>}

        <div className={styles.btnsWrap}>
          {greenBtn && <MainColorBtn text={greenBtn} linkTo={greenBtn} />}
          {transparentBtn && (
            <TransparentBtn text={transparentBtn} linkTo={transparentBtn} />
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
