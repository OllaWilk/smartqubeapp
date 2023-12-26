import React from "react";
import { ImgOnTheLeftAndTextOnRight } from "../index";
import PropTypes from "prop-types";

import styles from "./OurMission.module.scss";

export const OurMission = ({ title, subtitle, description, src }) => {
  return (
    <article className={`${styles.mission} container`}>
      <ImgOnTheLeftAndTextOnRight
        src={src}
        alt={title}
        title={title}
        subtitle={subtitle}
        description={description}
      />
    </article>
  );
};

OurMission.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  src: PropTypes.string,
};
