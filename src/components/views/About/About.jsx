import React from "react";
import PropTypes from "prop-types";

import {
  Header,
  CallToAction,
  ImageHeaderColumns,
  ImgOnTheLeftAndTextOnRight,
  SectionTitle,
  ScrollBtn,
  ImageTextPanelGreenGreyBackground,
} from "../../common/index";

import styles from "./About.module.scss";

export const About = ({ about, region }) => {
  const {
    imgBg,
    header,
    companyDescription,
    team,
    offers,

    callToaction,
    location,
    locationUSA,
  } = about;

  return (
    <div className={styles.aboutPage}>
      <ScrollBtn />
      {/* HEADER */}
      <section className={styles.splashBackgroundImg}>
        <div className={styles.videoWrap}>
          <img src={imgBg} alt="splash" />
        </div>
        <Header
          description={header.description}
          mainTitle={header.slogan}
          subtitle={header.companyName}
          greenBtn={header.greenBtn}
          transparentBtn={header.transparentBtn}
          greenBtnLinkTo={header.greenBtnLinkTo}
          transparentBtnLinkTo={header.transparentBtnLinkTo}
        />
      </section>
      {/* OUR PEOPLE */}
      <section className={`${styles.ourPeople} container`}>
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
      </section>
      {/* TEAM */}
      <section className={`${styles.team} `}>
        <div className="container">
          <ImgOnTheLeftAndTextOnRight
            alt={"team"}
            src={team.galery}
            title={team.title}
            subtitle={team.slogan}
            description={team.text}
          />
        </div>
      </section>
      {/* OFFERS */}
      <section className={` ${styles.offers} container`}>
        <div className={styles.headerTextWrap}>
          <SectionTitle h2={offers.title} h3={team.slogan} />
          <p>{team.text}</p>
        </div>
        <div className={styles.offersCart}>
          {region === "usa" ? (
            <ImageTextPanelGreenGreyBackground offers={offers.cartsUSA} />
          ) : (
            <ImageTextPanelGreenGreyBackground offers={offers.carts} />
          )}
        </div>
      </section>
      {/* call to action */}
      <section className={`${styles.callToActionBackground} `}>
        <CallToAction
          h4={callToaction.subtitle}
          h2={callToaction.titile}
          btnTitle={callToaction.button[0]}
          url={callToaction.button[1]}
        />
      </section>
      {/* location */}
      <section className={`${styles.location} container`}>
        {region === "usa" ? (
          <ImgOnTheLeftAndTextOnRight
            title={locationUSA.title}
            subtitle={locationUSA.subtitle}
            description={locationUSA.description}
            src={locationUSA.src}
            alt={locationUSA.title}
          />
        ) : (
          <ImgOnTheLeftAndTextOnRight
            title={location.title}
            subtitle={location.subtitle}
            description={location.description}
            src={location.src}
            alt={location.title}
          />
        )}
      </section>
      <section></section>
    </div>
  );
};

About.propTypes = {
  about: PropTypes.object,
  region: PropTypes.string,
};
