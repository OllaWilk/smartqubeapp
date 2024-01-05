import React from "react";
import { home } from "../../../db/en/home";
import {
  Header,
  AboutUs,
  Offer,
  CallToAction,
  OurMission,
  ScrollBtn,
} from "../../common/index";

import styles from "./Home.module.scss";

export const Home = () => {
  const { header, about, offers, callToaction, mission } = home;
  return (
    <>
      <ScrollBtn />
      <section className={styles.splashBackgroundImg} id="header">
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
      <section id="about">
        <AboutUs
          subtitle={about.subtitle}
          title={about.title}
          abstract={about.abstract}
          section1={about.section1}
          section2={about.section2}
          linkTo={about.button[0]}
          btnName={about.button[1]}
        />
      </section>
      <section id="offer" className={styles.offerBackground}>
        <Offer
          offers={offers.carts}
          title={offers.title}
          subtitle={offers.subtitle}
        />
      </section>
      <section id="callToActionHome" className={styles.callToActionBackground}>
        <CallToAction
          h4={callToaction.subtitle}
          h2={callToaction.titile}
          btnTitle={callToaction.button[0]}
          url={callToaction.button[1]}
        />
      </section>
      <section id="ourMission">
        <OurMission
          src={mission.src}
          alt={mission.title}
          title={mission.title}
          subtitle={mission.subtitle}
          description={mission.description}
        />
      </section>
      <section></section>
    </>
  );
};
