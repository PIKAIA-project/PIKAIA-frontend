import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import "../../prevReport/Styles/TodayLastWeekComp.css";
import { getToken } from "../../utils";

const BarChart = () => {
  const [chartData, setChartData] = useState({});
  
  const chart = () => {
    let count_dailyEmotion = [0, 0, 0, 0, 0];
    let count_lastweekTodayEmotion = [0, 0, 0, 0, 0];
    let token =getToken();
    var key = "1a55d8e0ffa94fc7988a1fc24deb69b0";
    var dayHolder = "";
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
            dayHolder =  dataObj.date_time;
            dayHolder = dayHolder.substring(0,3);
            console.log(dayHolder);
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
      })
      .catch(err => {
          console.log(err);
        });
    axios
        .get("https://pikaia-apim.azure-api.net/chart_days/7", axiosConfig)
        .then(res => {
          console.log(res)
          var interCount = 0;
          for(const dataObj of res.data.chart_daily){
            if(dataObj.date_time.includes(dayHolder) && interCount == 1){

              if(dataObj.user_emotion.includes("joy")){
                count_lastweekTodayEmotion[0]++;
              }
              if(dataObj.user_emotion.includes("fear")){
                count_lastweekTodayEmotion[1]++;
              }
              if(dataObj.user_emotion.includes("anger")){
                count_lastweekTodayEmotion[2]++;
              }
              if(dataObj.user_emotion.includes("sadness")){
                count_lastweekTodayEmotion[3]++;
              }
              if(dataObj.user_emotion.includes("neutral")){
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
                  "rgba(75, 192, 192, 0.6)",
                  "rgba(255, 159, 64, 0.2)",
                  "rgba(255, 205, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(54, 162, 235, 0.2)"
              ],
                  borderWidth: 4
                },{
                  label: "Last week today",
                  data: count_lastweekTodayEmotion,
                  backgroundColor: [
                  "rgba(75, 192, 192, 0.6)",
                  "rgba(255, 159, 64, 0.2)",
                  "rgba(255, 205, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(54, 162, 235, 0.2)"
              ],
                  borderWidth: 4
                }
              ]
            });  
            
        }
        console.log(count_lastweekTodayEmotion)
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
        <h3>Today vs. last week today Emotion Analytics</h3>
        <p>
          Compare your emotional changes to last week.
        </p>
      </div>
      <div className="dashboard__chartLine">
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

export default BarChart;
