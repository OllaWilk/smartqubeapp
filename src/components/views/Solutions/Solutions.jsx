import React, { useState } from "react";
import { solutions } from "../../../db/en/solutions";
import {
  Carousel,
  ImgWithTitleAndDescriptionBellowCart,
  PdfListDisplay,
  SectionTitle,
} from "../../common";
import styles from "./Solutions.module.scss";
import { icons } from "../../../images";
import { removeUnderlines } from "../../../utils/removeSpaces";

export const Solutions = () => {
  const { carousel, manualsSection, certificatesSection } = solutions;
  const allSeriesKeys = Object.keys(manualsSection.downloads);
  const allCertificationsKeys = Object.keys(certificatesSection.downloads);
  console.log(allCertificationsKeys);

  const [activeList, setActiveList] = useState("EV");

  const renderDownloads = (downloads) => {
    return Object.keys(downloads).map((series) => (
      <div key={series} className={styles.card}>
        <ul>
          {downloads[series].map((item, index) => (
            <>
              {item.series && (
                <div className={styles.titleWrap}>
                  <ImgWithTitleAndDescriptionBellowCart
                    title={item.series}
                    image={item.imgLogo}
                    alt={"series logo"}
                  />
                </div>
              )}

              {item.series && <div className={styles.text}>{item.text}</div>}
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
            </>
          ))}
        </ul>
      </div>
    ));
  };

  return (
    <>
      <div className={styles.bannerContainer}>
        <div className={`container`}>
          <Carousel carousel={carousel} />
        </div>
      </div>
      <div className={`${styles.manuals} container`}>
        <div className={styles.textWrap}>
          <SectionTitle
            h2={manualsSection.title}
            h3={manualsSection.subtitle}
          />
        </div>
      </div>
      {/* Manuals */}
      <div className={`${styles.cartContainer} container`}>
        {renderDownloads(solutions.manualsSection.downloads)}
      </div>
      {/* Certification  */}
      <div className={`${styles.certificates} container`}>
        <div className={styles.textWrap}>
          <SectionTitle
            h2={certificatesSection.title}
            h3={certificatesSection.subtitle}
          />
          <p>{certificatesSection.description}</p>
          <div className={styles.toggleBtns}></div>
        </div>
        <div className={styles.manualCartWrap}>
          {allCertificationsKeys.map((serieKey) => (
            <button
              key={`${serieKey}-`}
              className={styles.toggleBtn}
              onClick={() => setActiveList(`${serieKey}`)}
            >
              {removeUnderlines(serieKey)}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.background}>
        <PdfListDisplay
          activeList={activeList}
          data={certificatesSection.downloads}
          allSeriesKeys={allCertificationsKeys}
        />
      </div>
    </>
  );
};
