import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/Quotes.css";
import QuotesSkeleton from "./QuotesSkeleton";

const OuoteApi = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const quoteAPI = async () => {
    let arrayOfQuotes = [];
    try {
      const data = await axios.get(
        "https://api.quotable.io/random?maxLength=50"
      );
      arrayOfQuotes = data.data;
    } catch (error) {
      console.log(error);
    }
    try {
      setQuote(arrayOfQuotes.content);
      setAuthor(arrayOfQuotes.author);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    quoteAPI();
  }, []);

  return (
    <div className="apiQuote">
      <div className="apiQuote__quote">
        <p>
          {" "}
          {` "` + quote + `" `}
          {!quote && <QuotesSkeleton />}
        </p>
      </div>
      <div className="apiQuote__author">
        <strong> &hearts;&ensp;{author}</strong>
      </div>
    </div>
  );
};

export default OuoteApi;
