import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import "../../prevReport/Styles/MonthlyChart.css";
import { getToken } from "../../utils";

const MonthlyChart = () => {
  const [chartData, setChartData] = useState({});
  
  const chart = () => {
    let count_dailyEmotion = [0, 0, 0, 0, 0];
    let count_lastweekTodayEmotion = [0, 0, 0, 0, 0];
    let monthly_JoyCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let monthly_FearCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let monthly_AngerCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let monthly_SadnessCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let monthly_netrualCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
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
        .get("https://pikaia-apim.azure-api.net/chart_days/365", axiosConfig)
        .then(res => {
          console.log(res)
          var interCount = 0;
          for(const dataObj of res.data.chart_daily){
          
            if(dataObj.date_time.includes("Jan")){
              if(dataObj.user_emotion.includes("joy")){
                monthly_JoyCount[0]++;
              }
              if(dataObj.user_emotion.includes("fear")){
                monthly_FearCount[0]++;
              }
              if(dataObj.user_emotion.includes("anger")){
                monthly_AngerCount[0]++;
              }
              if(dataObj.user_emotion.includes("sadness")){
                monthly_SadnessCount[0]++;
              }
              if(dataObj.user_emotion.includes("neutral")){
                monthly_netrualCount[0]++;
              }
  
            }
            if(dataObj.date_time.includes("Feb")){
                if(dataObj.user_emotion.includes("joy")){
                    monthly_JoyCount[1]++;
                  }
                  if(dataObj.user_emotion.includes("fear")){
                    monthly_FearCount[1]++;
                  }
                  if(dataObj.user_emotion.includes("anger")){
                    monthly_AngerCount[1]++;
                  }
                  if(dataObj.user_emotion.includes("sadness")){
                    monthly_SadnessCount[1]++;
                  }
                  if(dataObj.user_emotion.includes("neutral")){
                    monthly_netrualCount[1]++;
                  }
  
            }
            if(dataObj.date_time.includes("Mar")){
                if(dataObj.user_emotion.includes("joy")){
                    monthly_JoyCount[2]++;
                }
                if(dataObj.user_emotion.includes("fear")){
                    monthly_FearCount[2]++;
                }
                if(dataObj.user_emotion.includes("anger")){
                    monthly_AngerCount[2]++;
                }
                if(dataObj.user_emotion.includes("sadness")){
                    monthly_SadnessCount[2]++;
                }
                if(dataObj.user_emotion.includes("neutral")){
                    monthly_netrualCount[2]++;
                }
  
            }
            if(dataObj.date_time.includes("Apr")){
                if(dataObj.user_emotion.includes("joy")){
                    monthly_JoyCount[3]++;
                  }
                  if(dataObj.user_emotion.includes("fear")){
                    monthly_FearCount[3]++;
                  }
                  if(dataObj.user_emotion.includes("anger")){
                    monthly_AngerCount[3]++;
                  }
                  if(dataObj.user_emotion.includes("sadness")){
                    monthly_SadnessCount[3]++;
                  }
                  if(dataObj.user_emotion.includes("neutral")){
                    monthly_netrualCount[3]++;
                  }
  
            }
            if(dataObj.date_time.includes("May")){
                if(dataObj.user_emotion.includes("joy")){
                    monthly_JoyCount[4]++;
                  }
                  if(dataObj.user_emotion.includes("fear")){
                    monthly_FearCount[4]++;
                  }
                  if(dataObj.user_emotion.includes("anger")){
                    monthly_AngerCount[4]++;
                  }
                  if(dataObj.user_emotion.includes("sadness")){
                    monthly_SadnessCount[4]++;
                  }
                  if(dataObj.user_emotion.includes("neutral")){
                    monthly_netrualCount[4]++;
                  }
  
            }
            if(dataObj.date_time.includes("Jun")){
                if(dataObj.user_emotion.includes("joy")){
                    monthly_JoyCount[5]++;
                  }
                  if(dataObj.user_emotion.includes("fear")){
                    monthly_FearCount[5]++;
                  }
                  if(dataObj.user_emotion.includes("anger")){
                    monthly_AngerCount[5]++;
                  }
                  if(dataObj.user_emotion.includes("sadness")){
                    monthly_SadnessCount[5]++;
                  }
                  if(dataObj.user_emotion.includes("neutral")){
                    monthly_netrualCount[5]++;
                  }
  
            }
            if(dataObj.date_time.includes("Jul")){
                if(dataObj.user_emotion.includes("joy")){
                    monthly_JoyCount[6]++;
                  }
                  if(dataObj.user_emotion.includes("fear")){
                    monthly_FearCount[6]++;
                  }
                  if(dataObj.user_emotion.includes("anger")){
                    monthly_AngerCount[6]++;
                  }
                  if(dataObj.user_emotion.includes("sadness")){
                    monthly_SadnessCount[6]++;
                  }
                  if(dataObj.user_emotion.includes("neutral")){
                    monthly_netrualCount[6]++;
                  }
  
            }
            if(dataObj.date_time.includes("Aug")){
                if(dataObj.user_emotion.includes("joy")){
                    monthly_JoyCount[7]++;
                  }
                  if(dataObj.user_emotion.includes("fear")){
                    monthly_FearCount[7]++;
                  }
                  if(dataObj.user_emotion.includes("anger")){
                    monthly_AngerCount[7]++;
                  }
                  if(dataObj.user_emotion.includes("sadness")){
                    monthly_SadnessCount[7]++;
                  }
                  if(dataObj.user_emotion.includes("neutral")){
                    monthly_netrualCount[7]++;
                  }
  
            }
            if(dataObj.date_time.includes("Sep")){
                if(dataObj.user_emotion.includes("joy")){
                    monthly_JoyCount[8]++;
                  }
                  if(dataObj.user_emotion.includes("fear")){
                    monthly_FearCount[8]++;
                  }
                  if(dataObj.user_emotion.includes("anger")){
                    monthly_AngerCount[8]++;
                  }
                  if(dataObj.user_emotion.includes("sadness")){
                    monthly_SadnessCount[8]++;
                  }
                  if(dataObj.user_emotion.includes("neutral")){
                    monthly_netrualCount[8]++;
                  }
  
            }
            if(dataObj.date_time.includes("Oct")){
                if(dataObj.user_emotion.includes("joy")){
                    monthly_JoyCount[9]++;
                  }
                  if(dataObj.user_emotion.includes("fear")){
                    monthly_FearCount[9]++;
                  }
                  if(dataObj.user_emotion.includes("anger")){
                    monthly_AngerCount[9]++;
                  }
                  if(dataObj.user_emotion.includes("sadness")){
                    monthly_SadnessCount[9]++;
                  }
                  if(dataObj.user_emotion.includes("neutral")){
                    monthly_netrualCount[9]++;
                  }
  
            }
            if(dataObj.date_time.includes("Nov")){
                if(dataObj.user_emotion.includes("joy")){
                    monthly_JoyCount[10]++;
                  }
                  if(dataObj.user_emotion.includes("fear")){
                    monthly_FearCount[10]++;
                  }
                  if(dataObj.user_emotion.includes("anger")){
                    monthly_AngerCount[10]++;
                  }
                  if(dataObj.user_emotion.includes("sadness")){
                    monthly_SadnessCount[10]++;
                  }
                  if(dataObj.user_emotion.includes("neutral")){
                    monthly_netrualCount[10]++;
                  }
  
            }
            if(dataObj.date_time.includes("Dec")){
                if(dataObj.user_emotion.includes("joy")){
                    monthly_JoyCount[11]++;
                  }
                  if(dataObj.user_emotion.includes("fear")){
                    monthly_FearCount[11]++;
                  }
                  if(dataObj.user_emotion.includes("anger")){
                    monthly_AngerCount[11]++;
                  }
                  if(dataObj.user_emotion.includes("sadness")){
                    monthly_SadnessCount[11]++;
                  }
                  if(dataObj.user_emotion.includes("neutral")){
                    monthly_netrualCount[11]++;
                  }
  
            }
            
        }
        console.log(count_lastweekTodayEmotion)
        setChartData({
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [
              {
                label: "Joy Count",
                data: monthly_JoyCount,
                backgroundColor: [
                "rgba(75, 192, 192, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(75, 192, 192, 0.6)"
            ],
            borderColor: [
                'rgb(75, 192, 192)',
                'rgb(75, 192, 192)',
                'rgb(75, 192, 192)',
                'rgb(75, 192, 192)',
                'rgb(75, 192, 192)',
                'rgb(75, 192, 192)',
                'rgb(75, 192, 192)'
              ],
                borderWidth: 1
              },{
                label: "Fear Count",
                data: monthly_FearCount,
                backgroundColor: [
                    "rgba(255,0,255,0.75)",
                    "rgba(255,0,255,0.75)",
                    "rgba(255,0,255,0.75)",
                    "rgba(255,0,255,0.75)",
                    "rgba(255,0,255,0.75)",
                    "rgba(255,0,255,0.75)",
                    "rgba(255,0,255,0.75)",
                    "rgba(255,0,255,0.75)",
                    "rgba(255,0,255,0.75)",
                    "rgba(255,0,255,0.75)",
                    "rgba(255,0,255,0.75)",
                    "rgba(255,0,255,0.75)"
        
                ],
                borderColor: [
                    'rgb(255,0,255)',
                    'rgb(255,0,255)',
                    'rgb(255,0,255)',
                    'rgb(255,0,255)',
                    'rgb(255,0,255)',
                    'rgb(255,0,255)',
                    'rgb(255,0,255)'
                  ],
                borderWidth: 1
              },{
                label: "Anger Count",
                data: monthly_AngerCount,
                backgroundColor: [
                    "rgba(0,255,0,0.75)",
                    "rgba(0,255,0,0.75)",
                    "rgba(0,255,0,0.75)",
                    "rgba(0,255,0,0.75)",
                    "rgba(0,255,0,0.75)",
                    "rgba(0,255,0,0.75)",
                    "rgba(0,255,0,0.75)",
                    "rgba(0,255,0,0.75)",
                    "rgba(0,255,0,0.75)",
                    "rgba(0,255,0,0.75)",
                    "rgba(0,255,0,0.75)",
                    "rgba(0,255,0,0.75)"
                    
                ],
                borderColor: [
                    'rgb(0,255,0)',
                    'rgb(0,255,0)',
                    'rgb(0,255,0)',
                    'rgb(0,255,0)',
                    'rgb(0,255,0)',
                    'rgb(0,255,0)',
                    'rgb(0,255,0)'
                  ],
                borderWidth: 1
              },{
                label: "Sadness Count",
                data: monthly_SadnessCount,
                backgroundColor: [
                    "rgba(184, 71, 255, 0.34)",
                    "rgba(184, 71, 255, 0.34)",
                    "rgba(184, 71, 255, 0.34)",
                    "rgba(184, 71, 255, 0.34)",
                    "rgba(184, 71, 255, 0.34)",
                    "rgba(184, 71, 255, 0.34)",
                    "rgba(184, 71, 255, 0.34)",
                    "rgba(184, 71, 255, 0.34)",
                    "rgba(184, 71, 255, 0.34)",
                    "rgba(184, 71, 255, 0.34)",
                    "rgba(184, 71, 255, 0.34)",
                    "rgba(184, 71, 255, 0.34)"
                    
                ],
                borderColor: [
                    'rgb(184, 71, 255)',
                    'rgb(184, 71, 255)',
                    'rgb(184, 71, 255)',
                    'rgb(184, 71, 255)',
                    'rgb(184, 71, 255)',
                    'rgb(184, 71, 255)',
                    'rgb(184, 71, 255)'
                  ],
                borderWidth: 1
              },{
                label: "Netrual Count",
                data: monthly_netrualCount,
                backgroundColor: [
                    "rgba(184, 71, 255, 0.08)",
                    "rgba(184, 71, 255, 0.08)",
                    "rgba(184, 71, 255, 0.08)",
                    "rgba(184, 71, 255, 0.08)",
                    "rgba(184, 71, 255, 0.08)",
                    "rgba(184, 71, 255, 0.08)",
                    "rgba(184, 71, 255, 0.08)",
                    "rgba(184, 71, 255, 0.08)",
                    "rgba(184, 71, 255, 0.08)",
                    "rgba(184, 71, 255, 0.08)",
                    "rgba(184, 71, 255, 0.08)",
                    "rgba(184, 71, 255, 0.08)",
                    
                ],
                borderColor: [
                    'rgb(184, 71, 255)',
                    'rgb(184, 71, 255)',
                    'rgb(184, 71, 255)',
                    'rgb(184, 71, 255)',
                    'rgb(184, 71, 255)',
                    'rgb(184, 71, 255)',
                    'rgb(184, 71, 255)'
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
        <h3>Monthly Mood Analytics</h3>
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
                  stacked: true
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
                  stacked: true
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
}

export default MonthlyChart;
