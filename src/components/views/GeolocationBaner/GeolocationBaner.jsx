import React from "react";
import PropTypes from "prop-types";
import styles from "./GeolocationBaner.module.scss";
import { LanguageOptions, LocationOptions } from "../../common";

const GeolocationBaner = (props) => {
  return (
    <div className={styles.banerWrap}>
      <p>
        Oglądasz domyślną wersję strony w języku <strong>angielskim</strong> i
        dla regionu <strong>Ameryka (USA)</strong>. <br />
        Wybierz{" "}
        <a href="#language-and-region-settings" className={styles.link}>
          region i język
        </a>{" "}
        dla siebie, aby dostosować treść strony do swoich preferencji.
      </p>
      <LanguageOptions />
      {/* <LocationOptions /> */}
    </div>
  );
};

export { GeolocationBaner };

GeolocationBaner.propTypes = {
  children: PropTypes.node,
};
