import React from "react";
import PropTypes from "prop-types";

export const BackgroundVideo = ({ src }) => {
  return (
    <video
      autoPlay
      muted
      loop
      style={{
        position: "fixed",
        width: "100%",
        left: 0,
        top: 0,
        zIndex: -1,
      }}
    >
      <source src={src} type="video/mp4" />
      Twoja przeglądarka nie wspiera tagu video.
    </video>
  );
};
BackgroundVideo.propTypes = {
  src: PropTypes.string,
};
