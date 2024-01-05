import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import styles from "./Carousel.module.scss";

export const Carousel = ({ carousel }) => {
  const { header, span, text, button, linkTo, images } = carousel;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      <div className={styles.carouselContainer}>
        <div className={styles.text}>
          <h2>
            {header}
            <span>{span}</span>
          </h2>
          <p>{text}</p>
          <a
            href={linkTo}
            className={styles.caltulatorBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            {button}
          </a>
        </div>
        <div className={styles.slider}>
          {images.map((image, index) => (
            <div
              key={`carousel-img-${index}-${image}`}
              className={`${styles.slide} ${
                index === currentIndex ? `${styles.active}` : ""
              }`}
            >
              <img src={image} alt={`Slide ${index}`} />
            </div>
          ))}
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
          <span className={styles.prev} onClick={goToPrevious}>
            &lt;
          </span>
          <span className={styles.next} onClick={goToNext}>
            &gt;
          </span>
        </div>
      </div>
    </>
  );
};

Carousel.propTypes = {
  carousel: PropTypes.shape({
    header: PropTypes.string,
    span: PropTypes.string,
    text: PropTypes.string,
    button: PropTypes.string,
    linkTo: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
  }),
};
