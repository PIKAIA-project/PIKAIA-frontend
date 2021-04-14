import React from "react";

import PrevReport from "./PrevReport";
import TodayLastWeekComp from "../prevReport/TodayLastWeekComp";
import BarChart from "../prevReport/BarChart";


import "./ReportPage.css";

const reportPage = () => {
  return (
    <main className="dashboard-home1">
      <div className="dashboard-home__left1">
        <TodayLastWeekComp />
        <PrevReport />
      </div>
      <div className="dashboard-home__center1">
       <BarChart />
      </div>
      <div className="dashboard-home__right1">
      </div>
    </main>
  );
};

export default reportPage;
