import React from "react";
import { home } from "../../../db/en/home";
import {
  Header,
  AboutUs,
  Offer,
  CallToAction,
  OurMission,
} from "../../common/index";

import styles from "./Home.module.scss";

export const Home = () => {
  const { header, about, offers, callToaction, mission } = home;
  return (
    <>
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
      <AboutUs
        subtitle={about.subtitle}
        title={about.title}
        abstract={about.abstract}
        section1={about.section1}
        section2={about.section2}
        linkTo={about.button[0]}
        btnName={about.button[1]}
      />
      <div className={styles.offerBackground}>
        <Offer
          offers={offers.carts}
          title={offers.title}
          subtitle={offers.subtitle}
        />
      </div>
      <div className={styles.callToActionBackground}>
        <CallToAction
          h4={callToaction.subtitle}
          h2={callToaction.titile}
          btnTitle={callToaction.button[0]}
          url={callToaction.button[1]}
        />
      </div>
      <OurMission
        src={mission.src}
        alt={mission.title}
        title={mission.title}
        subtitle={mission.subtitle}
        description={mission.description}
      />
    </>
  );
};
