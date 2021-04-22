import React, { useEffect, useState } from "react";
import axios from "axios";
import QuotesSkeleton from "./prevChat/Componants/QuotesSkeleton";
import { getToken } from "../src/utils";

function BinauralCheck() {
  const [emotion, setLastEmotion] = useState("");
  const emotionAPI = async () => {
    let arrayOfQuotes = [];
    var key = "1a55d8e0ffa94fc7988a1fc24deb69b0";
    var token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwdWJsaWNfaWQiOiI5YTg0NGJhNC1jOWYyLTRiOGMtYTM4Mi0yMjg0YjE1NDdmZjAiLCJleHAiOjE2MTkxNTA0MDJ9.hvlA4qbfOprpyNmzUrFt0DcKAHDG57GfUH2AeD0tcHU";
    try {
      let axiosConfig = {
        headers: {
          "x-access-token": token,
          "Ocp-Apim-Subscription-Key": key, //the token is a variable which holds the token
        },
      };

      const data = await axios.get(
        "http://pikaia-rest.azurewebsites.net/emotion_last",
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

  return <div></div>;
}

export default BinauralCheck;
