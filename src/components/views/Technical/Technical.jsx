import React from "react";
import PropTypes from "prop-types";

import { GreenHeader, ScrollBtn } from "../../common";

import styles from "./Technical.module.scss";

export const Technical = ({ technical }) => {
  const { header, documents } = technical;
  return (
    <div className={styles.technical}>
      <ScrollBtn />
      <section className={styles.greenbackground}>
        <GreenHeader mainTitle={header} />
      </section>
      <section className={`${styles.sectionWrap} container`}>
        <div className={styles.documentsWrap}>
          {documents.map((document, index) => (
            <div key={`document-${index}`} className={styles.card}>
              <div className={styles.cartWrap}>
                <div className={styles.logos}>
                  <img src={document.img} alt={"document icon"} />
                  <h6 className={styles.header}>{document.english}</h6>
                </div>
                <p className={styles.text}>{document.text}</p>
              </div>
              <div className={styles.btnDownloadWrap}>
                <a
                  href={document.downloadUrl}
                  className={styles.downloadLink}
                  download
                >
                  {document.download}
                </a>
                <a
                  href={document.downloadLangugageUrl}
                  className={styles.downloadLink}
                  download
                >
                  {document.downloadLanguage}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

Technical.propTypes = {
  technical: PropTypes.object.isRequired,
};
