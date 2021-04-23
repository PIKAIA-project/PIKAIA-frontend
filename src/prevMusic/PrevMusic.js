import "./prevMusic.css";
import Library from "./Componants/Library";
import Player from "./Componants/Player";
import React, { useState, useRef } from "react";
import data from "./Utils/utils";
import { getToken } from "../utils";
import axios from "axios";
import { IconButton } from "@material-ui/core";

function PrevMusic() {
  const audioRef = useRef(null);

  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const [isPlaylistRepeat, setIsPlaylistRepeat] = useState(false);
  const [songState, setSongState] = useState({
    currentTime: 0,
    duration: 0,
    seekbarPercentage: 0,
  });
  const [buttonStatus, setButtonStatus] = useState({
    next: true,
    previous: false,
  });

  // helpers
  const handleSongTimer = (event) => {
    const currentTime = event.target.currentTime;
    const duration = event.target.duration;
    const percentage = Math.round((100 * currentTime) / duration);

    setSongState({
      ...songState,
      currentTime: currentTime,
      duration: duration,
      seekbarPercentage: percentage,
    });
  };

  const handleChangeSong = (direction) => {
    let index = songs.findIndex((song) => song.id === currentSong.id);

    switch (direction) {
      case "next":
        if (isPlaylistRepeat) {
          if (index === songs.length - 1) {
            setCurrentSong(songs[0]);
          } else {
            setCurrentSong(songs[index + 1]);
          }
          setButtonStatus({ next: true, previous: true });
        } else {
          if (index === songs.length - 1) {
            setButtonStatus({ next: false, previous: true });
          } else {
            setCurrentSong(songs[index + 1]);
            setButtonStatus({ next: true, previous: true });
          }
        }
        break;
      case "previous":
        if (isPlaylistRepeat) {
          if (index === 0) {
            setCurrentSong(songs[songs.length - 1]);
          } else {
            setCurrentSong(songs[index - 1]);
          }
          setButtonStatus({ next: true, previous: true });
        } else {
          if (index === 0) {
            setButtonStatus({ next: true, previous: false });
          } else {
            setCurrentSong(songs[index - 1]);
            setButtonStatus({ next: true, previous: true });
          }
        }
        break;
      default:
        break;
    }
  };

  const addRec = async () => {
    let token = getToken();
    var key = "1a55d8e0ffa94fc7988a1fc24deb69b0";
    let axiosConfig = {
      headers: {
        "x-access-token": token,
        "Ocp-Apim-Subscription-Key": key, //the token is a variable which holds the token
      },
    };
    const baka = await axios
      .put("https://pikaia-rest.azurewebsites.net/recommend-music", axiosConfig)
      .then((res) => {
        console.log("dfsdfsd" + res.data);
      })
      .catch((err) => {
        console.log("Error: " + err);
      });

    console.log(baka);
  };

  return (
    <div className="dashboard-home__music">
      <div className="container">
        <IconButton>
          <button onClick={addRec}>Recommend Me!</button>
        </IconButton>

        <Library
          songs={songs}
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
          setIsPlaying={setIsPlaying}
          songState={songState}
        />
        <Player
          audioRef={audioRef}
          songs={songs}
          currentSong={currentSong}
          songState={songState}
          setSongState={setSongState}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          nextSong={() => handleChangeSong("next")}
          prevSong={() => handleChangeSong("previous")}
          buttonStatus={buttonStatus}
          isPlaylistRepeat={isPlaylistRepeat}
          setIsPlaylistRepeat={setIsPlaylistRepeat}
        />
        <audio
          ref={audioRef}
          src={currentSong.audio}
          onTimeUpdate={handleSongTimer}
          onLoadedMetadata={handleSongTimer}
          onEnded={() => handleChangeSong("next")}
        ></audio>
      </div>
    </div>
  );
}

export default PrevMusic;
