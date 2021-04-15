import React, { useEffect, useContext, useState } from "react";
import { SettingsContext } from "../context/SettingsContext";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import { IconButton } from "@material-ui/core";

import "../styles/minimized.css";

const Minimized = () => {
  const {
    executing,
    startAnimate,
    startTimer,
    pauseTimer,
    updateExecute,
  } = useContext(SettingsContext);

  useEffect(() => {
    updateExecute(executing);
  }, [executing, startAnimate, updateExecute]);

  const [clicked, setClicked] = useState();

  return (
    <div className="minimized">
      The Player Part
      {clicked ? (
        <PauseIcon
          className="dashboard__timer__button__pause"
          onClick={() => {
            pauseTimer();
            setClicked(false);
          }}
          activeClass={startAnimate ? "active" : undefined}
          style={{ fontSize: "35px" }}
        />
      ) : (
        <PlayArrowIcon
          className="dashboard__timer__button__play"
          onClick={() => {
            startTimer();
            setClicked(true);
          }}
          activeClass={!startAnimate ? "active" : undefined}
          style={{ fontSize: "35px" }}
        />
      )}
      <IconButton>
        <SkipNextIcon />
      </IconButton>
    </div>
  );
};

export default Minimized;
