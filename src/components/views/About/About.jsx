import React from "react";
import { about } from "../../../db/en/about";

import {
  Header,
  CallToAction,
  ImageHeaderColumns,
  ImgOnTheLeftAndTextOnRight,
  SectionTitle,
  ScrollBtn,
} from "../../common/index";

import styles from "./About.module.scss";

export const About = () => {
  const { header, companyDescription, team, offers, callToaction, location } =
    about;

  return (
    <div className={styles.aboutPage}>
      <ScrollBtn />
      {/* HEADER */}
      <section className={styles.splashBackgroundImg}>
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
            alt={"ss"}
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
          {offers.carts.map((offer, index) => (
            <div
              key={`smartqubeoffer-${offer.title}`}
              className={
                index % 2 === 0
                  ? `${styles.cart} ${styles.even}`
                  : `${styles.cart} ${styles.odd}`
              }
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
        <ImgOnTheLeftAndTextOnRight
          title={location.title}
          subtitle={location.subtitle}
          description={location.description}
          src={location.src}
          alt={location.title}
        />
      </section>
      <section></section>
    </div>
  );
};
