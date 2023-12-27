import React from "react";
import { about } from "../../../db/en/about";

import {
  Header,
  CallToAction,
  ImageHeaderColumns,
  ImgOnTheLeftAndTextOnRight,
  SectionTitle,
  ScrollBtn,
  GaleryCart,
} from "../../common/index";

import styles from "./About.module.scss";

export const About = () => {
  const { header, companyDescription, team, carts, callToaction, location } =
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
      <section className={`${styles.team} container`}>
        <div className={styles.textWrap}>
          <SectionTitle h2={team.title} h3={team.slogan} />
          <p>{team.text}</p>
        </div>
        <div className={styles.peopleGalery}>
          {team.galery.map((person, index) => (
            <GaleryCart key={person.name} name={person.name} img={person.img} />
          ))}
        </div>
      </section>

      <section className={` ${styles.offers} container`}>
        {/* offers */}
        <div className={styles.textWrap}>
          <SectionTitle h2={"Explore Our  Services"} h3={team.slogan} />
          <p>{team.text}</p>
        </div>
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
      </section>
      {/* call to action */}
      <section className={`${styles.background} `}>
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
    </div>
  );
};
