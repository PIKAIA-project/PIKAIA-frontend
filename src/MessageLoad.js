import React, { useState } from "react";
import "./MessageLoad.css";

function MessageLoad() {
  const [isTyping, setIsTyping] = useState(true);
  return <div> {isTyping ? <Typing /> : null} </div>;
}
const Typing = () => (
  <div className="typing">
    <div className="typing__dot"></div>
    <div className="typing__dot"></div>
    <div className="typing__dot"></div>
  </div>
);
export default MessageLoad;
