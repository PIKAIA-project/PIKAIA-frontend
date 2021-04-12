import React from "react";
import "./Chat.css";

function ChatVeiw() {
  return (
    <div className="chat">
      <div className="chat__container">
        <div className="chat__header">header</div>
        <div className="chat__body">body</div>
        <div className="chat__footer">
          <input className="chat" type="text" placeholder="Say something..." />
          <button className="send">send message</button>
        </div>
      </div>
    </div>
  );
}

export default ChatVeiw;
