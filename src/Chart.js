import React from "react";
import "./Chart.css";
import PrevReport from "./prevReport/Components/WeeklyReport";
import TodayLastWeekComp from "./prevReport/Components/TodayLastWeekComp";
import DoughnutChart from "./prevReport/Components/DoughnutChart";
import MonthlyChart from "./prevReport/Components/MonthlyChart";
import WeeklyUage from "./prevReport/Components/WeeklyUsage";

function Chart() {
  return (
    <div className="align__chart">
      <div className="chart">
        <div className="chart__header">
          <h1>Emotion Analytics</h1>
        </div>
        <div className="chart__container">
          <div className="chart__one">
            <h3>Today's Emotion Analytics</h3>
            <p>How are you feeling today? View today's mood fluctuations.</p>
            <DoughnutChart className="chart__go" />
          </div>
          <div className="chart__two">
            <h3>Today vs. last week today </h3>
            <p>Compare your emotional changes to last week.</p>
            <TodayLastWeekComp />
          </div>
          <div className="chart__three">
            <h3>Emotion Analytics</h3>
            <p>
              Track your mood changes for this week and improve your mental health.
            </p>
            <PrevReport />
          </div>
          <div className="chart__four">
            <h3>Monthly Mood Analytics</h3>
            <p>Compare your emotional changes throughout the year.</p>
            <MonthlyChart />
          </div>
          <div className="chart__five">
            <h3>Your activity: Usage Time</h3>
            <p>
              The average time you've spent per day using PIKAIA app for the
              last week.
            </p>
            <WeeklyUage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;
