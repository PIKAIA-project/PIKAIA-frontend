import React, { useState, useEffect } from "react";
import { Radar } from "react-chartjs-2";
import axios from "axios";
import "../../prevReport/Styles/WeeklyUsage.css";
const DoughnutChart = () => {
  const [chartData, setChartData] = useState({});
  
  const chart = () => {
   
    
        setChartData({
            labels: ["Mon", "Tue", "Wen", "Thu", "Fri", "Sat", "Sun"],
            datasets: [
              {
                label: "Today's emotion",
                data: [2, 1.5, 1, 2, 1, 0.5, 0.25],
                backgroundColor: [
                "rgba(75, 192, 192, 0.6)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 205, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(54, 162, 235, 0.2)"
            ],
                borderWidth: 1
              }
            ]
          });
    
        
    
     
  };

  useEffect(() => {
    chart();
  }, []);
  

  return (
    <div className="dashboard__chart">
      <div className="dashboard__chartInfo">
        <h3>Your activity: Usage Time</h3>
        <p>
          The average time you've spent per day using PIKAIA app for the last week.
        </p>
      </div>
      <div className="dashboard__chartLine">
      <Radar
          data={chartData}
          options={{
            legend: {
              labels: {
                fontColor: "white",
              },
            },
            responsive: true,
            scales: {
              yAxes: [
                {
                  gridLines: {
                    display: true,
                    drawOnChartArea: true,
                  },
                  ticks: {
                    display: true,
                    beginAtZero: true,
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    display: true,
                  },
                  ticks: {
                    display: true,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
}

export default DoughnutChart;
