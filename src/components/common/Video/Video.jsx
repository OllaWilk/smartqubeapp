import React from "react";
import { isMobile } from "react-device-detect";
import PropTypes from "prop-types";

export const Video = ({ src }) => {
  return (
    <>
      <video src={src} autoPlay={!isMobile} loop muted type="video/mp4" />
    </>
  );
};

Video.propTypes = {
  src: PropTypes.string,
};
