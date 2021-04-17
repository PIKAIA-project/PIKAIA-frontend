import React from "react";
import "./Chart.css";
import PrevReport from "./prevReport/Components/WeeklyReport";
import TodayLastWeekComp from "./prevReport/Components/TodayLastWeekComp";
import DoughnutChart from "./prevReport/Components/DoughnutChart";
import MonthlyChart from "./prevReport/Components/MonthlyChart";
import WeeklyUage from "./prevReport/Components/WeeklyUsage";

function Chart() {
  return (
    <>
      <div className="chart">
        <div className="chart__header">
          <h1>Emotion Analytics</h1>
        </div>
        <div className="chart__container">
          <div className="chart__one">
            <DoughnutChart />
          </div>
          <div className="chart__two">
            <TodayLastWeekComp />
          </div>
          <div className="chart__three">
            <PrevReport />
          </div>
          <div className="chart__four">
            <MonthlyChart />
          </div>
          <div className="chart__five">
            <WeeklyUage />
          </div>
          <div className="chart__six"></div>
        </div>
      </div>
    </>
  );
}

export default Chart;
