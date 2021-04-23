import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
import { getToken, getApiURL, getSubscriptionKey } from "../../utils";
const DoughnutChart = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let count_arrayJoy = [0, 0, 0, 0, 0];
    let count_arrayFear = [0, 0, 0, 0, 0];
    let count_arrayAnger = [0, 0, 0, 0, 0];
    let count_arraySadness = [0, 0, 0, 0, 0];
    let count_arrayNeutrul = [0, 0, 0, 0, 0];
    let count_dailyEmotion = [0, 0, 0, 0, 0];
    let empAge = [];
    let token = getToken();
    var key = getSubscriptionKey();
    let axiosConfig = {
      headers: {
        "x-access-token": token,
        "Ocp-Apim-Subscription-Key": key, //the token is a variable which holds the token
      },
    };

    axios
      .get(getApiURL()+"/chart_days/1", axiosConfig)
      .then((res) => {
        console.log(res);
        for (const dataObj of res.data.chart_daily) {
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

        setChartData({
          labels: ["Joy", "Fear", "Anger", "Sadness", "Neutral"],
          datasets: [
            {
              label: "Today's emotion",
              data: count_dailyEmotion,
              backgroundColor: [
                "rgb(2555, 173, 173)",
                "rgb(255, 255, 90)",
                "rgb(255, 25, 71)",
                "rgb(71, 0, 190)",
                "rgb(93, 255, 90)",
              ],
              borderWidth: 0,
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <>
      <Doughnut
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
                  display: false,
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
                  display: false,
                },
                ticks: {
                  display: false,
                },
              },
            ],
          },
        }}
        data={chartData}
      />
    </>
  );
};

export default DoughnutChart;
