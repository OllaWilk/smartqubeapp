import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { SectionTitle, ImageBox } from "../index";

import styles from "./ImgOnTheLeftAndTextOnRight.module.scss";

export const ImgOnTheLeftAndTextOnRight = ({
  alt,
  src,
  title,
  subtitle,
  description,
  paragraphOne,
  paragraphTwo,
  list,
}) => {
  useEffect(() => {}, [paragraphOne, paragraphTwo, list]);

  return (
    <div className={styles.contentWrap}>
      <div className={styles.imgWrap}>
        <ImageBox src={src} alt={alt} />
      </div>
      <div className={styles.textWrap}>
        <SectionTitle h2={title} h3={subtitle} />
        <p>{description}</p>
        {paragraphOne && <p>{paragraphOne}</p>}
        {paragraphTwo && <p>{paragraphTwo}</p>}
        <ul>{list && list.map((el) => <li key={el}>{el}</li>)}</ul>
      </div>
    </div>
  );
};

ImgOnTheLeftAndTextOnRight.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  paragraphOne: PropTypes.string,
  paragraphTwo: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  list: PropTypes.array,
};
