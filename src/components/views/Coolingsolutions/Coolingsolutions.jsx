import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  Carousel,
  ImgWithTitleAndDescriptionBellowCart,
  PdfListDisplay,
  ScrollBtn,
  SectionTitle,
} from "../../common";
import { icons } from "../../../images";
import { removeUnderlines } from "../../../utils/removeSpaces";
import styles from "./Coolingsolutions.module.scss";

export const Coolingsolutions = ({ coolingSolutions }) => {
  const { carousel, manualsSection, certificatesSection } = coolingSolutions;
  const allCertificationsKeys = Object.keys(certificatesSection.downloads);

  const [selectedCertificate, setSelectedCertificate] = useState("ATEX");

  const renderDownloads = (downloads) => {
    return Object.keys(downloads).map((series) => (
      <div key={series} className={styles.card}>
        {downloads[series].map((item, index) => (
          // Title
          <div key={`${item}-${index}-title`}>
            <div>
              {item.series && (
                <div className={styles.titleWrap}>
                  <ImgWithTitleAndDescriptionBellowCart
                    title={item.series}
                    image={item.imgLogo}
                    alt={"series logo"}
                  />
                </div>
              )}
              {/* Tekst */}
              {item.series && <div className={styles.text}>{item.text} </div>}
            </div>
            {/* donload pdf */}
            <ul>
              <li key={index}>
                <img
                  src={icons.pdfFile}
                  alt={"pdfFile"}
                  className={styles.image}
                />
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.name}
                </a>
              </li>
            </ul>
          </div>
        ))}
      </div>
    ));
  };

  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate);
  };

  return (
    <>
      <ScrollBtn />
      <section className={styles.bannerContainer}>
        <div className={`container`}>
          <Carousel carousel={carousel} />
        </div>
      </section>
      {/* Manuals */}
      <section className={`${styles.manuals} container`}>
        <div className={styles.textWrap}>
          <SectionTitle
            h2={manualsSection.title}
            h3={manualsSection.subtitle}
          />
        </div>
      </section>
      <div className={`${styles.cartContainer} container`}>
        {renderDownloads(coolingSolutions.manualsSection.downloads)}
      </div>
      {/* Certification  */}
      <section className={styles.certifications}>
        <div className={`${styles.wrap} container`}>
          <div className={styles.textWrap}>
            <SectionTitle
              h2={certificatesSection.title}
              h3={certificatesSection.subtitle}
            />
            <p>{certificatesSection.description}</p>
          </div>
          <div className={styles.certificationsCartWrap}>
            {/* Buttons */}
            {allCertificationsKeys.map((serieKey) => (
              <button
                key={`${serieKey}-`}
                className={
                  selectedCertificate === serieKey
                    ? styles.active
                    : styles.toggleBtn
                }
                onClick={() => handleCertificateClick(`${serieKey}`)}
              >
                {removeUnderlines(serieKey)}
              </button>
            ))}
          </div>
          <PdfListDisplay
            data={certificatesSection.downloads}
            allSeriesKeys={allCertificationsKeys}
            certificate={selectedCertificate}
          />
        </div>
      </section>
      <section></section>
    </>
  );
};

Coolingsolutions.propTypes = {
  coolingSolutions: PropTypes.object.isRequired,
};
