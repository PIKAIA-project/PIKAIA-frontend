import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

import { getToken, getApiURL, getSubscriptionKey } from "../../utils";

const BarChart = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let count_dailyEmotion = [0, 0, 0, 0, 0];
    let count_lastweekTodayEmotion = [0, 0, 0, 0, 0];
    let token = getToken();
    var key = getSubscriptionKey();
    var dayHolder = "";
    let axiosConfig = {
      headers: {
        "x-access-token": token,
        "Ocp-Apim-Subscription-Key": key, //the token is a variable which holds the token
      },
    };

    axios
      .get(
        getApiURL()+"/chart_days/1",
        axiosConfig
      )
      .then((res) => {
        console.log(res);
        for (const dataObj of res.data.chart_daily) {
          dayHolder = dataObj.date_time;
          dayHolder = dayHolder.substring(0, 3);
          console.log(dayHolder);
          if (dataObj.user_emotion.includes("joy")) {
            count_dailyEmotion[0]++;
          }
          if (dataObj.user_emotion.includes("fear")) {
            count_dailyEmotion[1]++;
          }
          if (dataObj.user_emotion.includes("anger")) {
            count_dailyEmotion[2]++;
          }
          if (dataObj.user_emotion.includes("sadness")) {
            count_dailyEmotion[3]++;
          }
          if (dataObj.user_emotion.includes("neutral")) {
            count_dailyEmotion[4]++;
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(getApiURL()+"/chart_days/7", axiosConfig)
      .then((res) => {
        console.log(res);
        var interCount = 0;
        for (const dataObj of res.data.chart_daily) {
          if (dataObj.date_time.includes(dayHolder) && interCount == 1) {
            if (dataObj.user_emotion.includes("joy")) {
              count_lastweekTodayEmotion[0]++;
            }
            if (dataObj.user_emotion.includes("fear")) {
              count_lastweekTodayEmotion[1]++;
            }
            if (dataObj.user_emotion.includes("anger")) {
              count_lastweekTodayEmotion[2]++;
            }
            if (dataObj.user_emotion.includes("sadness")) {
              count_lastweekTodayEmotion[3]++;
            }
            if (dataObj.user_emotion.includes("neutral")) {
              count_lastweekTodayEmotion[4]++;
            }
          }
          interCount++;
          setChartData({
            labels: ["joy", "fear", "anger", "sadness", "neutral"],
            datasets: [
              {
                label: "Today's emotion",
                data: count_dailyEmotion,
                backgroundColor: [
                  "rgba(2555, 173, 173)",
                  "rgb(255, 255, 90)",
                  "rgb(255, 25, 71)",
                  "rgb(71, 0, 190)",
                  "rgb(93, 255, 90)",
                ],
                borderWidth: 0,
              },
              {
                label: "Last week today",
                data: count_lastweekTodayEmotion,
                backgroundColor: [
                  "rgba(2555, 173, 173)",
                  "rgb(255, 255, 90)",
                  "rgb(255, 25, 71)",
                  "rgb(71, 0, 190)",
                  "rgb(93, 255, 90)",
                ],
                borderWidth: 0,
              },
            ],
          });
        }
        console.log(count_lastweekTodayEmotion);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <Bar
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
                display: false,
              },
              ticks: {
                display: true,
              },
            },
          ],
        },
      }}
    />
  );
};

export default BarChart;
