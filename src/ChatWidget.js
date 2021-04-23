import { Link } from "react-router-dom";
import "./ChatWidget.css";
import Bot from "./Images/SignUp.png";
import React, { useEffect, useState } from "react";
import axios from "axios";
import QuotesSkeleton from "./prevChat/Componants/QuotesSkeleton";
import { getToken } from "../src/utils";

function ChatWidget() {
  const [emotion, setLastEmotion] = useState("");
  const emotionAPI = async () => {
    let arrayOfQuotes = [];
    var key = "5d27293d79294a19a608781776244e97";
    var token = getToken();
    try {
      let axiosConfig = {
        headers: {
          "x-access-token": token,
          "Ocp-Apim-Subscription-Key": key, //the token is a variable which holds the token
        },
      };

      const data = await axios.get(
        "https://pikaia-rest-apim.developer.azure-api.net/emotion_last",
        axiosConfig
      );

      arrayOfQuotes = data.data;
    } catch (error) {
      console.log(error);
    }
    try {
      setLastEmotion(arrayOfQuotes.last__emotion[0]);
      console.log(emotion);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    emotionAPI();
  }, []);

  return (
    <div className="chatWidget">
      <div className="chatWidget__avatar">
        <img src={Bot} alt="" />
      </div>
      <div className="chatWidget__bottom">
        <p>
          {!emotion && <QuotesSkeleton />}
          {emotion == "joy" ? (
            "Seems Like you're having a good day, Tell me about it."
          ) : emotion == "anger" ? (
            "Looks like you had a tough day today, Tell me what happend?"
          ) : emotion == "sadness" ? (
            "Looks like you're quite upset today, Let's talk about it."
          ) : emotion == "fear" ? (
            "You seem to be afraid, I can help you.."
          ) : (
            <QuotesSkeleton />
          )}
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
