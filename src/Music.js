import React from "react";
import "./Music.css";
import PrevMusic from "../src/prevMusic/PrevMusic";

function Music() {
  return (
    <div className="music">
      <div className="music__container">
        <div className="music__header">
          <h1>Music</h1>
        </div>
        <PrevMusic />
      </div>
    </div>
  );
}

export default Music;
