import React from "react";
import { Link } from "react-router-dom";
import "./ChatWidget.css";
import Bot from "./Images/SignUp.png";

function ChatWidget() {
  return (
    <div className="chatWidget">
      <div className="chatWidget__avatar">
        <img src={Bot} alt="" />
      </div>
      <div className="chatWidget__bottom">
        <p>Talk with someone who understands how you feel.</p>
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
