import React from "react";
import MusicIcon from "./Images/Music.svg";
import "./ChartWidget.css";

function MusicWidget() {
  return (
    <div className="chartWidget">
      <div className="chartInfo">
        <h3>Binaural Beats</h3>
      </div>
      <div className="musicIcon">
        <p>Track your daily emotion changes, and improve your mental health.</p>
        <img src={MusicIcon} alt="" />
      </div>
    </div>
  );
}

export default MusicWidget;
