import React, { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { RenderTime } from "./RenderTime";

import "../styles/countdown.css";

// https://stackoverflow.com/questions/47686345/playing-sound-in-react-js
const CountdownAnimation = ({ key = 1, timer = 20, animate = true }) => {
  const [playing, setPlaying] = useState(false);

  const [audio] = useState(
    new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3")
  );
  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [audio, playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [audio]);

  if (key === 1) {
    audio.play();
  }

  if (!animate) {
    audio.pause();
  }

  return (
    <div className="countdown">
      <CountdownCircleTimer
        key={key}
        isPlaying={animate}
        duration={timer * 60}
        colors={[["#fff", 0.33], ["#fff", 0.33], ["#fff"]]}
        strokeWidth={9}
        size={175}
        rotation="counterclockwise"
        trailColor="rgba(105, 130, 194, 0.403)"
        onComplete={() => {
          audio.pause();
        }}
      >
        {RenderTime}
      </CountdownCircleTimer>
    </div>
  );
};

export default CountdownAnimation;
