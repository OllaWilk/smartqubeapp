import React from "react";
import videoBg from "../../../images/photos/videoBg.mp4";

export const Test = () => {
  return (
    <div className="main">
      <div className="overlay"></div>
      <video
        width="250"
        height="200"
        src={videoBg}
        autoPlay
        loop
        muted
        type="video/mp4"
      />
      <div className="content">
        <h1>Welcome</h1>
        <p>To my site.</p>
      </div>
    </div>
  );
};
