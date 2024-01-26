import React from "react";
import PropTypes from "prop-types";

import { CallToAction, GreenHeader, ScrollBtn } from "../../common";

import styles from "./Technical.module.scss";

export const Technical = ({ technical }) => {
  const { header, documents, callToaction } = technical;
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
                  href="link_do_pobrania_pdf_angielski.pdf"
                  className={styles.downloadLink}
                  download
                >
                  Download PDF (English)
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.callToActionBackground}>
        <CallToAction
          h4={callToaction.subtitle}
          h2={callToaction.titile}
          btnTitle={callToaction.button[0]}
          url={callToaction.button[1]}
        />
      </section>
    </div>
  );
};

Technical.propTypes = {
  technical: PropTypes.node.isRequired,
};
