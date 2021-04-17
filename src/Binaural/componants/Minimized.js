import React, { useEffect, useContext, useState } from "react";
import { SettingsContext } from "../context/SettingsContext";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import { IconButton } from "@material-ui/core";
import MusicPlayer from "./MusicPlayer";

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
      YOOOOOOOO
    </div>
  );
};

export default Minimized;
