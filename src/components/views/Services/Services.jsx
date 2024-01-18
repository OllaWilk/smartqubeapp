import React from "react";
import { isMobile } from "react-device-detect";

import { services } from "../../../db/en/services";
import {
  CallToAction,
  GreenHeader,
  ImgOnTheLeftAndTextOnRight,
  ScrollBtn,
  SectionTitle,
  Video,
} from "../../common";
import styles from "./Services.module.scss";

import videoBg from "../../../images/WideoServices.mp4";

export const Services = () => {
  const { header, fieldServices, callToaction, onSite, resourses } = services;
  return (
    <>
      <ScrollBtn />
      <section className={styles.greenbackground}>
        <GreenHeader mainTitle={header} />
      </section>
      {/*FIELD SERVICES */}
      <section
        id="field-services"
        className={`${styles.integration} container`}
      >
        <ImgOnTheLeftAndTextOnRight
          alt={fieldServices.title}
          src={fieldServices.img}
          title={fieldServices.title}
          subtitle={fieldServices.subtitle}
          description={fieldServices.paragraphOne}
          paragraphOne={fieldServices.paragraphTwo}
          paragraphTwo={fieldServices.paragraphTree}
        />
      </section>
      {/* Project Execution */}
      <section id="on-site" className={`${styles.execution} `}>
        <div className="container">
          <ImgOnTheLeftAndTextOnRight
            alt={onSite.title}
            src={onSite.img}
            title={onSite.title}
            subtitle={onSite.subtitle}
            description={onSite.description}
            list={onSite.list}
          />
        </div>
      </section>
      {/* CALL TO ACTION */}
      <section id="callToActionHome" className={styles.callToActionBackground}>
        <CallToAction
          h4={callToaction.subtitle}
          h2={callToaction.titile}
          btnTitle={callToaction.button[0]}
          url={callToaction.button[1]}
        />
      </section>
      {/* KNOWLEDGE */}
      <section id="resourses" className={`${styles.resourses} container`}>
        <SectionTitle h2={resourses.title} h3={resourses.subtitle} />
        <div className={styles.contentWrap}>
          <div className={styles.imgWrap}>
            {isMobile ? (
              <img src={resourses.img} alt={resourses.title} />
            ) : (
              <Video src={videoBg} />
            )}
          </div>
          <div className={styles.acapitWrap}>
            {resourses.description.map((acapit) => (
              <div key={acapit.title} className={styles.acapit}>
                <h3>{acapit.title}</h3>
                <p>{acapit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section></section>
    </>
  );
};
