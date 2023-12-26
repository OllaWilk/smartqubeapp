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
  const { header, companyDescription, team, carts, callToaction, location } =
    about;

  return (
    <div className={styles.aboutPage}>
      <ScrollBtn />
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
      <div className="container">
        {/* our people */}
        <section className={styles.ourPeople}>
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
      </div>
      {/* team */}
      <section className={styles.team}>
        <div className="container">
          <div className={styles.textWrap}>
            <SectionTitle h2={team.title} h3={team.slogan} />
            <p>{team.text}</p>
          </div>
          <div className={styles.peopleImagesWrap}>
            <div className={styles.person}>
              <img src="" alt="" />
              <p>Senior Design Specialist</p>
            </div>
            <div className={styles.person}>
              <img src="" alt="" />
              <p>I&C, Automation Design and Commissioning Engineer</p>
            </div>
            <div className={styles.person}>
              <img src="" alt="" />
              <p>CEO</p>
            </div>
            <div className={styles.person}>
              <img src="" alt="" />
              <p>Chief Operating Officer</p>
            </div>
            <div className={styles.person}>
              <img src="" alt="" />
              <p>Emotional Support Specialist</p>
            </div>
            <div className={styles.person}>
              <img src="" alt="" />
              <p>Montarz</p>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        {/* offers */}
        <div className={styles.offers}>
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
