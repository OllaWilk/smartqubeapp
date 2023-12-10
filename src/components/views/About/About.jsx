import React from "react";
import { about } from "../../../db/en/about";
import {
  Header,
  CallToAction,
  ImageHeaderColumns,
  ImgOnTheLeftAndTextOnRight,
} from "../../common/index";

import styles from "./About.module.scss";

export const About = () => {
  const { header, companyDescription, carts, callToaction, location } = about;
  return (
    <div className={styles.aboutPage}>
      <div className={styles.splashBackgroundImg}>
        <Header
          description={header.description}
          mainTitle={header.slogan}
          subtitle={header.companyName}
          greenBtn={header.greenBtn}
          transparentBtn={header.transparentBtn}
          greenBtnLinkTo={header.greenBtnLinkTo}
          transparentBtnLinkTo={header.transparentBtnLinkTo}
        />
      </div>
      <div className="container">
        <div className={styles.companyWrap}>
          {companyDescription.map((el) => (
            <ImageHeaderColumns
              key={el.title}
              header={el.header}
              text1={el.section1}
              text2={el.section2}
              src={el.img}
              alt={el.title}
            />
          ))}
        </div>
        {/* offers */}
        <div className={styles.offers}>
          {carts.map((offer, index) => (
            <div
              key={`smartqubeoffer-${offer.title}`}
              className={index % 2 === 0 ? `${styles.even}` : `${styles.odd}`}
            >
              <div className={styles.text}>
                <span className={styles.cartNumb}>{offer.id}</span>
                <h6 className={styles.title}>{offer.title}</h6>
                <p>{offer.content}</p>
              </div>
              <div className={styles.imgWrap}>
                <img src={offer.img} alt={offer.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* call to action */}
      <div className={`${styles.background} `}>
        <CallToAction
          h4={callToaction.subtitle}
          h2={callToaction.titile}
          btnTitle={callToaction.button[0]}
          url={callToaction.button[1]}
        />
      </div>
      {/* location */}
      <div className={`${styles.location} container`}>
        <ImgOnTheLeftAndTextOnRight
          title={location.title}
          subtitle={location.subtitle}
          description={location.description}
          src={location.src}
          alt={location.title}
        />
      </div>
    </div>
  );
};
