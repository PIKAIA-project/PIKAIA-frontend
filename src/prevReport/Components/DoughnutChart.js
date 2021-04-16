import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
import "../../prevReport/Styles/DoughnutChart.css";
import { getToken } from "../../utils";
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
    let token =getToken();
    var key = "1a55d8e0ffa94fc7988a1fc24deb69b0";
    let axiosConfig = {
      headers: {
        "x-access-token": token,
        "Ocp-Apim-Subscription-Key": key, //the token is a variable which holds the token
      },
    };
    
    
    axios
      .get("https://pikaia-apim.azure-api.net/chart_days/1", axiosConfig)
      .then(res => {
        console.log(res)
        for(const dataObj of res.data.chart_daily){
            if(dataObj.user_emotion.includes("joy")){
                count_dailyEmotion[0]++;
            }
            if(dataObj.user_emotion.includes("fear")){
                count_dailyEmotion[1]++;
            }
            if(dataObj.user_emotion.includes("anger")){
                count_dailyEmotion[2]++;
            }
            if(dataObj.user_emotion.includes("sadness")){
                count_dailyEmotion[3]++;
            }
            if(dataObj.user_emotion.includes("neutral")){
                count_dailyEmotion[4]++;
            }
      
      }
      console.log("Daily count: " + count_dailyEmotion)

      setChartData({
        labels: ["joy", "fear", "anger", "sadness", "neutral"],
        datasets: [
          {
            label: "Today's emotion",
            data: count_dailyEmotion,
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




      })
      .catch(err => {
          console.log(err);
        });
    
        
    
     
  };

  useEffect(() => {
    chart();
  }, []);
  

  return (
    <div className="dashboard__chart">
      <div className="dashboard__chartInfo">
        <h3>Todays Emotion Analytics</h3>
        <p>
          How are you feeling today?
        </p>
      </div>
      <div className="dashboard__chartLine">
      <Doughnut
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
