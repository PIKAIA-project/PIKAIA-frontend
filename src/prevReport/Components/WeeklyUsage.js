import React, { useState, useEffect } from "react";
import { Radar } from "react-chartjs-2";

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
            "rgba(2555, 173, 173)",
            "rgb(255, 255, 90)",
            "rgb(255, 25, 71)",
            "rgb(71, 0, 190)",
            "rgb(93, 255, 90)",
          ],
          borderWidth: 1,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <Radar
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
                color: "#FFFFFF",
                drawOnChartArea: false,
              },
              ticks: {
                display: false,
                beginAtZero: true,
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: true,
                color: "rgb(2555, 173, 173)",
              },
              ticks: {
                display: true,
              },
            },
          ],
        },
      }}
      data={chartData}
      options={{
        elements: {
          line: {
            borderWidth: 5,
          },
        },
      }}
    />
  );
};

export default DoughnutChart;
