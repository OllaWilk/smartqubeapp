import React from "react";
import { ImgOnTheLeftAndTextOnRight } from "../../common/index";
import PropTypes from "prop-types";

import styles from "./OurMission.module.scss";

export const OurMission = ({ title, subtitle, description, src }) => {
  return (
    <div className={`${styles.mission} container`}>
      <ImgOnTheLeftAndTextOnRight
        src={src}
        alt={title}
        title={title}
        subtitle={subtitle}
        description={description}
      />
    </div>
  );
};

OurMission.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  src: PropTypes.string,
};
