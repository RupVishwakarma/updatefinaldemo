
import React from "react";
import "./loading.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="video-overlay">
        <video
          width="100%"
          height="100%"
          autoPlay
          loop
          muted
          className="loader-video"
        >
          <source src="/assets/Loader.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="loader-text-container">
        <h1 className="loader-text">Spreads</h1>
      </div>
    </div>
  );
};

export default Loading;
