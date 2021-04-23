import React, { useEffect, useState } from "react";
import axios from "axios";
import QuotesSkeleton from "./prevChat/Componants/QuotesSkeleton";
import { getToken } from "../src/utils";

function BinauralCheck() {
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

  return <div></div>;
}

export default BinauralCheck;
