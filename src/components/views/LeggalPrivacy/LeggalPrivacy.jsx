import React from "react";
import { leggacyAndPrivacy } from "../../../db/en/leggacyAndPrivacy";
import {
  CallToAction,
  GreenHeader,
  ImgWithTitleAndDescriptionBellowCart,
} from "../../common";

import styles from "./LeggalPrivacy.module.scss";

export const LeggalPrivacy = () => {
  const { header, documents, callToaction } = leggacyAndPrivacy;
  return (
    <div className={styles.leggalPrivacy}>
      <GreenHeader mainTitle={header} />
      <div className={`${styles.sectionWrap} container`}>
        <div className={styles.documentsWrap}>
          {documents.map((document, index) => (
            <>
              <div key={`document-${index}`} className={styles.card}>
                <ImgWithTitleAndDescriptionBellowCart
                  image={document.img}
                  alt={"document icon"}
                  title={document.english}
                  text={document.text}
                />
                <div className={styles.btnDownloadWrap}>
                  <a
                    href="link_do_pobrania_pdf_angielski.pdf"
                    className={styles.downloadLink}
                    download
                  >
                    Download PDF (English)
                  </a>
                  <a
                    href="link_do_pobrania_pdf_polski.pdf"
                    className={styles.downloadLink}
                    download
                  >
                    Pobierz PDF (Polski)
                  </a>
                </div>
              </div>
            </>
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
