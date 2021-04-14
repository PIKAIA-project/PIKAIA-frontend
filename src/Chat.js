import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import User from "../src/Images/Avatar.jpg";
import Bot from "../src/Images/Bot.png";
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

  let oldMessages = [
    { id: "11", sender: "user", message: "user - message 11" },
    { id: "12", sender: "bot", message: "bot - message 12" },
    { id: "13", sender: "bot", message: "bot - message 13" },
    { id: "14", sender: "user", message: "user - message 14" },
    { id: "15", sender: "bot", message: "bot - message 15" },
    { id: "16", sender: "user", message: "user - message 16" },
    { id: "17", sender: "bot", message: "user - message 17" },
    { id: "18", sender: "user", message: "user - message 18" },
    { id: "19", sender: "bot", message: "user - message 19" },
    { id: "20", sender: "user", message: "user - message 20" },

    { id: "21", sender: "bot", message: "user - message 21" },
    { id: "22", sender: "user", message: "bot - message 22" },
    { id: "23", sender: "bot", message: "bot - message 23" },
    { id: "24", sender: "user", message: "user - message 24" },
    { id: "25", sender: "bot", message: "bot - message 25" },
    { id: "26", sender: "user", message: "user - message 26" },
    { id: "27", sender: "bot", message: "user - message 27" },
    { id: "28", sender: "user", message: "user - message 28" },
    { id: "29", sender: "bot", message: "user - message 29" },
    { id: "30", sender: "user", message: "user - message 30" },
    { id: "31", sender: "user", message: "user - message 30" },
  ];

  let newMessages = [
    { id: "1", sender: "user", message: "hello" },
    { id: "2", sender: "bot", message: "hi there, what's your name?" },
    { id: "3", sender: "user", message: "My name is Andrew" },
    {
      id: "4",
      sender: "bot",
      message: "hi Andrew, Would you like to hear a joke?",
    },
    { id: "5", sender: "user", message: "Yes please" },
    {
      id: "6",
      sender: "bot",
      message: "A skeleton walked into a bar and asked for a drink and a mop",
    },
    { id: "7", sender: "user", message: "user - message 7" },
    { id: "8", sender: "bot", message: "bot - message 8" },
    { id: "9", sender: "user", message: "user - message 9" },
    { id: "10", sender: "bot", message: "bot - message 10" },
    { id: "1", sender: "user", message: "hello" },
    { id: "2", sender: "bot", message: "hi there, what's your name?" },
    { id: "3", sender: "user", message: "My name is Andrew" },
    {
      id: "4",
      sender: "bot",
      message: "hi Andrew, Would you like to hear a joke?",
    },
    { id: "5", sender: "user", message: "Yes please" },
    {
      id: "6",
      sender: "bot",
      message: "A skeleton walked into a bar and asked for a drink and a mop",
    },
    { id: "7", sender: "user", message: "user - message 7" },
    { id: "8", sender: "bot", message: "bot - message 8" },
    { id: "9", sender: "user", message: "user - message 9" },
    { id: "10", sender: "bot", message: "bot - message 10" },
  ];

  /*
listOne = [1,2,3]
listTwo = [4,5,6]
listTwo.push(...listOne)
*/

  messages.push(...newMessages); // pushing new messages

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
          <div className="chat__sendIcon">
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
