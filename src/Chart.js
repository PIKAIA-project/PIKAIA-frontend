import React from "react";
import "./Chart.css";

function Chart() {
  return (
    <div className="chart">
      <div className="chart__header">
        <h1>Analytics</h1>
      </div>
      <div className="chart__container">
        <div className="chart__one"></div>
        <div className="chart__two"></div>
        <div className="chart__three"></div>
        <div className="chart__four"></div>
        <div className="chart__five"></div>
      </div>
    </div>
  );
}

export default Chart;
