import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const Video = ({ src }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (
      /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
        userAgent
      )
    ) {
      setIsMobile(true);
    }
  }, []);
  return (
    <>
      <video src={src} autoPlay={!isMobile} loop muted type="video/mp4" />
    </>
  );
};

Video.propTypes = {
  src: PropTypes.string,
};
