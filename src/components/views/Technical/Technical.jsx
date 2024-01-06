import React from "react";
import { leggacyAndPrivacy } from "../../../db/en/technical";
import { CallToAction, GreenHeader } from "../../common";

import styles from "./Technical.module.scss";

export const Technical = () => {
  const { header, documents, callToaction } = leggacyAndPrivacy;
  return (
    <div className={styles.technical}>
      <div className={styles.greenbackground}>
        <GreenHeader mainTitle={header} />
      </div>
      <div className={`${styles.sectionWrap} container`}>
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
      </div>
      <div className={styles.callToActionBackground}>
        <CallToAction
          h4={callToaction.subtitle}
          h2={callToaction.titile}
          btnTitle={callToaction.button[0]}
          url={callToaction.button[1]}
        />
      </div>
    </div>
  );
};
