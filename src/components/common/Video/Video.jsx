import React from "react";
import PropTypes from "prop-types";

export const Video = ({ video, videoRef }) => {
  return (
    <>
      {/* <div className={styles.overlay}></div> */}
      <video src={video} ref={videoRef} loop muted type="video/mp4" />
    </>
  );
};

Video.propTypes = {
  video: PropTypes.string,
  videoRef: PropTypes.string,
};
