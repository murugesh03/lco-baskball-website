import React from "react";
import One from "../../assets/one.mp4";
import "./Background.scss";
const Background = () => {
  return (
    <div className="video-container">
      <video autoplay="autoplay" loop muted>
        <source type="video/mp4" src={One} />
      </video>
    </div>
  );
};

export default Background;
