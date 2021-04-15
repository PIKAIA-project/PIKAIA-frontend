import React, { useState, useRef } from "react";
import PrevTimer from "../componants/PrevTimer";
import Library from "../../prevMusic/Componants/Library";
import data from "../../prevMusic/Utils/utils";

import "../styles/player.css";

function Player(props) {
    const audioRef = useRef(null);

    const [songs, setSongs] = useState(data());
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);
  
    const [songState, setSongState] = useState({
      currentTime: 0,
      duration: 0,
      seekbarPercentage: 0,
    });

  
  function handleClick() {
    props.toggle();
  }
  return (
    <div className="player">
      <span className="close" onClick={handleClick}>
        &times;
      </span>
      <PrevTimer />
      Playlist
      <Library
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        setIsPlaying={setIsPlaying}
        songState={songState}
      />
    </div>
  );
}

export default Player;
