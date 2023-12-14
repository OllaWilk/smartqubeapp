import React from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

import styles from "./Solutions.module.scss";
import { icequbeProducts, icons } from "../../../images";

export const Solutions = () => {
  return (
    <div className={styles.bannerContainer}>
      <div className={`container`}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h2>
              Design Your Air Conditioner with <span>IceQube.</span>
            </h2>
            <p>
              ENCLOSURES FAN SYSTEMS, THERMOELECTRIC AIR CONDITIONERS , HEAT
              EXCHANGERS, HAZARDOUS LOCATION AIR CONDITIONERS, HAZARDOUS
              LOCATION HEAT EXCHANGERS, SERVER RACK/SHELTER CONTAINER COOLERS
            </p>
            <a
              href="https://www.iceqube.com/technical/calculator/"
              className={styles.caltulatorBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit the website and calculate your project today.
            </a>
          </div>
          <div className={styles.slider}>
            <div className={`${styles.slides} active`}>
              <img src={icequbeProducts.GroupPicture} alt="img" />
            </div>
          </div>
        </div>

        <div className={styles.slideNavigation}>
          <div></div>
          <div className={styles.prevNext}>
            <a
              href="https://www.iceqube.com"
              className={styles.iceQubeName}
              target="_blank"
              rel="noopener noreferrer"
            >
              ICEqube.com
            </a>
            <span className="prev">{/* <GrFormPrevious /> */}</span>
            <span className="next">{/* <GrFormNext /> */}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
