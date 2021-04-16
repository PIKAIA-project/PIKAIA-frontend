import { Link } from "react-router-dom";
import "./ChatWidget.css";
import Bot from "./Images/SignUp.png";
import React, { useEffect, useState } from "react";
import axios from "axios";
import EmotionSkeleton from "../src/prevChat/Componants/emotionSkeleton";

function ChatWidget() {
  const [emotion, setLastEmotion] = useState("");
  const emotionAPI = async () => {
    let arrayOfQuotes = [];
    var key = "1a55d8e0ffa94fc7988a1fc24deb69b0";
    var token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwdWJsaWNfaWQiOiJlNTRmNjE2Ny1hMmM2LTRkM2MtYmU5OC1jNmQ4NzU0YjNhNGIiLCJleHAiOjE2MTg2MDg3NTN9.XhEJvMce7vPqX4ADBs8aTfg9PTDEGPd9TKL1pk5Wxh0";
    try {
      let axiosConfig = {
        headers: {
          "x-access-token": token,
          "Ocp-Apim-Subscription-Key": key, //the token is a variable which holds the token
        },
      };

      const data = await axios.get(
        "https://pikaia-apim.azure-api.net/emotion_last",
        axiosConfig
      );

      arrayOfQuotes = data.data;
    } catch (error) {
      console.log(error);
    }
    try {
      setLastEmotion(arrayOfQuotes.last__emotion[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    emotionAPI();
  });
  return (
    <div className="chatWidget">
      <div className="chatWidget__avatar">
        <img src={Bot} alt="" />
      </div>
      <div className="chatWidget__bottom">
        <p>
          {!emotion && <EmotionSkeleton type="text" />}
          {emotion == "joy"
            ? " Seems Like you're having a good day, Tell me about it."
            : emotion == "anger"
            ? "Looks Like you had a tough day today, tell me what happend?"
            : emotion == "sadness"
            ? "Looks like you're quite upset today, let's talk about it."
            : emotion == "fear"
            ? "You seem to be afraid, i can help you.."
            : ""}
        </p>
        <Link
          className="chatWidget__link"
          to="/chat"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <button> Start Chating </button>
        </Link>
      </div>
    </div>
  );
}

export default ChatWidget;
