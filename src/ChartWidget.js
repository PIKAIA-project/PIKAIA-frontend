import "./ChartWidget.css";
import Graph from "./Images/Graph.svg";

import React from "react";

function ChartWidget() {
  return (
    <div className="chartWidget">
      <div className="chartInfo">
        <h3>Emotion Analytics</h3>
      </div>
      <div className="chartIcon">
        <p>Track your daily emotion changes, and improve your mental health.</p>
        <img src={Graph} alt="" />
      </div>
    </div>
  );
}

export default ChartWidget;
