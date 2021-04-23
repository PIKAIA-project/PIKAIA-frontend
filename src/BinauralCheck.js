import React, { useEffect, useState } from "react";
import axios from "axios";
import { getToken, getApiURL, getSubscriptionKey } from "./utils";

function BinauralCheck() {
  const [emotion, setLastEmotion] = useState("");
  const emotionAPI = async () => {
    let arrayOfQuotes = [];
    var key = getSubscriptionKey();
    var token = getToken();
    try {
      let axiosConfig = {
        headers: {
          "x-access-token": token,
          "Ocp-Apim-Subscription-Key": key, //the token is a variable which holds the token
        },
      };

      const data = await axios.get(getApiURL() + "/emotion_last", axiosConfig);

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
