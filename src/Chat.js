import { Avatar, IconButton } from "@material-ui/core";
import User from "../src/Images/Avatar.jpg";
import Bot from "../src/Images/Bot.png";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Chat.css";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
import MicIcon from "@material-ui/icons/Mic";

const useStyles = makeStyles((theme) => ({
  sizeAvatar: {
    height: theme.spacing(3),
    width: theme.spacing(3),
  },
}));

function ChatVeiw() {
  const classes = useStyles();
  let messages = [];
  let token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwdWJsaWNfaWQiOiJlNTRmNjE2Ny1hMmM2LTRkM2MtYmU5OC1jNmQ4NzU0YjNhNGIiLCJleHAiOjE2MTg0MzQ4ODl9.lNinuiecnz3e6GPNrLyswg4txZaPL8aMtNyf1grDRgc";

  const listItems = messages.map((message) => (
    <li
      className={`${
        message.sender === "user" ? "chat__message--user" : "chat__message--bot"
      }`}
      key={message.id}
    >
      <div className="chat__avatar">
        <>
          {message.sender === "user" ? (
            <div className="chat__avatar--user">
              {" "}
              <img src={User} />
            </div>
          ) : (
            <div className="chat__avatar--bot">
              {" "}
              <img src={Bot} />
            </div>
          )}
        </>
      </div>
      <p>{message.message}</p>
    </li>
  ));

  //
  const chatGetAPI = async () => {
    let arrayOfQuotes = [];
    var key = "1a55d8e0ffa94fc7988a1fc24deb69b0";
    try {
      // const data = await axios.get("https://api.quotable.io/random");
      // arrayOfQuotes = data.data;
      // console.log(arrayOfQuotes);

      let axiosConfig = {
        headers: {
          "x-access-token": token,
          "Ocp-Apim-Subscription-Key": key, //the token is a variable which holds the token
        },
      };

      const data = await axios.get(
        "https://pikaia-apim.azure-api.net/chat",
        axiosConfig
      );

      arrayOfQuotes = data.data;
      let chats = arrayOfQuotes.conversations;
      chats.map((chat) => {
        console.log(chat["user_sentence"]);
      });
      // console.log(chats);

      // var chatbot_sentence = arrayOfQuotes
      //   .map((x) => x.chatbot_sentence)
      //   .filter((x) => x);
      // // console.log(arrayOfQuotes);
      // console.log(chatbot_sentence);
      // console.log(arrayOfQuotes.conversations[0]);
    } catch (error) {
      console.log(error);
    }
    try {
      // setQuote(arrayOfQuotes.user_emotion);
      // setAuthor(arrayOfQuotes.author);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    chatGetAPI();
  }, []);
  //

  const sendNewMessage = () => {
    const userMessage = document.getElementById("chat-input").value;

    var myHeaders = new Headers();
    myHeaders.append("x-access-token", token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      userInput: userMessage,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://pikaia.azurewebsites.net/chat", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        chatGetAPI();
        userMessage = "";
      })
      .catch((error) => console.log("error", error));
  };

  const handleScroll = (e) => {
    const top = e.target.scrollTop === 0;
    // const bottom =
    //   e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;

    const bottom =
      Math.floor(e.target.scrollTop) ===
      Math.floor(e.target.scrollHeight - e.target.clientHeight);

    if (bottom) {
      console.log("bottom reached");
    }

    if (top) {
      console.log("top reached - load old 10");
      // if top load old 10
      // add the 10 to old messages and reset
    }
  };

  // useEffect(() => {
  //   let myHeaders = new Headers();
  //   myHeaders.append(
  //     "x-access-token",
  //     "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwdWJsaWNfaWQiOiI0ODNmZTAwMy1mZWE0LTQ3YTAtYjg0MC04ZDc1Nzc0YjY3ZGIiLCJleHAiOjE2MTU5Nzc1MTN9.vx5LWRXup52BZmGggLgIpcbBsC2USOFicPyMtbAU854"
  //   );
  //   var requestOptions = {
  //     method: "GET",
  //     headers: myHeaders,
  //     redirect: "follow",
  //   };
  //   fetch("http://127.0.0.1:5000/chat/sequential/0", requestOptions)
  //     .then((response) => response.text())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.log("error", error));
  // }, []);

  return (
    <div className="align__chat">
      <div className="chat">
        <div className="chat__container">
          <div className="chat__header">
            <h1>Chat</h1>
          </div>
          <div className="chat__body" onScroll={handleScroll}>
            {listItems}
          </div>
        </div>
        <div className="chat__footer">
          <input
            className="chat__value"
            id="chat-input"
            type="text"
            placeholder="Say something..."
          />
          <div
            onClick={() => {
              sendNewMessage();
            }}
            className="chat__sendIcon"
          >
            <IconButton>
              <SendIcon />
            </IconButton>
          </div>
          <div className="chat__voiceIcon">
            <IconButton>
              <MicIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatVeiw;
