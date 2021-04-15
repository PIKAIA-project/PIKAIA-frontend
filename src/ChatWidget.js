
import React from "react";
import "./ChatWidget.css";
import Bot from "./Images/SignUp.png";

function ChatWidget() {
  return (
    <div className="chatWidget">
      <div className="chatWidget__avatar">
        <img src={Bot} alt="" />
      </div>
      <div className="chatWidget__bottom">
        <p>Talk with someone who understands how you feel...</p>
        <button> Start Chating </button>
      </div>
    </div>
  );
}

export default ChatWidget;
