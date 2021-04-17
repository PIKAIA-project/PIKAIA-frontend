import React, { useState, useEffect } from "react";
import "../../prevReport/Styles/WeeklyReport.css";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { getToken } from "../../utils";
const Dankmemes = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let count_arrayJoy = [0, 0, 0, 0, 0, 0, 0];
    let count_arrayFear = [0, 0, 0, 0, 0, 0, 0];
    let count_arrayAnger = [0, 0, 0, 0, 0, 0, 0];
    let count_arraySadness = [0, 0, 0, 0, 0, 0, 0];
    let count_arrayNeutrul = [0, 0, 0, 0, 0, 0, 0];
    let token = getToken();
    var key = "1a55d8e0ffa94fc7988a1fc24deb69b0";
    let axiosConfig = {
      headers: {
        "x-access-token": token,
        "Ocp-Apim-Subscription-Key": key, //the token is a variable which holds the token
      },
    };

    axios
      .get("https://pikaia-apim.azure-api.net/chart_days/7", axiosConfig)
      .then((res) => {
        console.log(res);
        for (const dataObj of res.data.chart_daily) {
          if (dataObj.date_time.includes("Sun")) {
            if (dataObj.user_emotion.includes("joy")) {
              count_arrayJoy[0]++;
            }
            if (dataObj.user_emotion.includes("fear")) {
              count_arrayFear[0]++;
            }
            if (dataObj.user_emotion.includes("anger")) {
              count_arrayAnger[0]++;
            }
            if (dataObj.user_emotion.includes("sadness")) {
              count_arraySadness[0]++;
            }
            if (dataObj.user_emotion.includes("neutral")) {
              count_arrayNeutrul[0]++;
            }
          }
          if (dataObj.date_time.includes("Mon")) {
            if (dataObj.user_emotion.includes("joy")) {
              count_arrayJoy[1]++;
            }
            if (dataObj.user_emotion.includes("fear")) {
              count_arrayFear[1]++;
            }
            if (dataObj.user_emotion.includes("anger")) {
              count_arrayAnger[1]++;
            }
            if (dataObj.user_emotion.includes("sadness")) {
              count_arraySadness[1]++;
            }
            if (dataObj.user_emotion.includes("neutral")) {
              count_arrayNeutrul[1]++;
            }
          }
          if (dataObj.date_time.includes("Tue")) {
            if (dataObj.user_emotion.includes("joy")) {
              count_arrayJoy[2]++;
            }
            if (dataObj.user_emotion.includes("fear")) {
              count_arrayFear[2]++;
            }
            if (dataObj.user_emotion.includes("anger")) {
              count_arrayAnger[2]++;
            }
            if (dataObj.user_emotion.includes("sadness")) {
              count_arraySadness[2]++;
            }
            if (dataObj.user_emotion.includes("neutral")) {
              count_arrayNeutrul[2]++;
            }
          }
          if (dataObj.date_time.includes("Wen")) {
            if (dataObj.user_emotion.includes("joy")) {
              count_arrayJoy[3]++;
            }
            if (dataObj.user_emotion.includes("fear")) {
              count_arrayFear[3]++;
            }
            if (dataObj.user_emotion.includes("anger")) {
              count_arrayAnger[3]++;
            }
            if (dataObj.user_emotion.includes("sadness")) {
              count_arraySadness[3]++;
            }
            if (dataObj.user_emotion.includes("neutral")) {
              count_arrayNeutrul[3]++;
            }
          }
          if (dataObj.date_time.includes("Thu")) {
            if (dataObj.user_emotion.includes("joy")) {
              count_arrayJoy[4]++;
            }
            if (dataObj.user_emotion.includes("fear")) {
              count_arrayFear[4]++;
            }
            if (dataObj.user_emotion.includes("anger")) {
              count_arrayAnger[4]++;
            }
            if (dataObj.user_emotion.includes("sadness")) {
              count_arraySadness[4]++;
            }
            if (dataObj.user_emotion.includes("neutral")) {
              count_arrayNeutrul[4]++;
            }
          }
          if (dataObj.date_time.includes("Fri")) {
            if (dataObj.user_emotion.includes("joy")) {
              count_arrayJoy[5]++;
            }
            if (dataObj.user_emotion.includes("fear")) {
              count_arrayFear[5]++;
            }
            if (dataObj.user_emotion.includes("anger")) {
              count_arrayAnger[5]++;
            }
            if (dataObj.user_emotion.includes("sadness")) {
              count_arraySadness[5]++;
            }
            if (dataObj.user_emotion.includes("neutral")) {
              count_arrayNeutrul[5]++;
            }
          }
          if (dataObj.date_time.includes("Sat")) {
            if (dataObj.user_emotion.includes("joy")) {
              count_arrayJoy[6]++;
            }
            if (dataObj.user_emotion.includes("fear")) {
              count_arrayFear[6]++;
            }
            if (dataObj.user_emotion.includes("anger")) {
              count_arrayAnger[6]++;
            }
            if (dataObj.user_emotion.includes("sadness")) {
              count_arraySadness[6]++;
            }
            if (dataObj.user_emotion.includes("neutral")) {
              count_arrayNeutrul[6]++;
            }
          }
        }

        setChartData({
          labels: ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"],
          datasets: [
            {
              label: "Joy",
              data: count_arrayJoy,
              backgroundColor: ["rgba(75, 192, 192, 0.6)"],
              borderWidth: 1,
            },
            {
              label: "Fear",
              data: count_arrayFear,
              backgroundColor: ["rgba(255,0,255,0.75)"],
              borderWidth: 1,
            },
            {
              label: "Anger",
              data: count_arrayAnger,
              backgroundColor: ["rgba(0,255,0,0.75)"],
              borderWidth: 1,
            },
            {
              label: "Sadness",
              data: count_arraySadness,
              backgroundColor: ["rgba(184, 71, 255, 0.34)"],
              borderWidth: 1,
            },
            {
              label: "Neutrul",
              data: count_arrayNeutrul,
              backgroundColor: ["rgba(184, 71, 255, 0.08)"],
              borderWidth: 1,
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
    <div className="dashboard__chart">
      <div className="dashboard__chartInfo">
        <h3>Emotion Analytics</h3>
        <p>Track your daily emotion changes, and improve your mental health.</p>
      </div>
      <div className="dashboard__chartLine">
        <Line
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
};

export default Dankmemes;
