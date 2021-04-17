import React from "react";
import "./loading.css";

const LoadSpinner = () => {
  return (
    <div id="loading__container">
      <div id="loading-bubble">
        <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadSpinner;
