import React from "react";
import { IconButton } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import PauseIcon from "@material-ui/icons/Pause";

import "../styles/MusicPlayer.css";

class MusicPlayer extends React.Component {
  state = {
    currentTrack: {
      title: "Beethoven - Moonlight Sonata",
      src: "https://wynk.in/u/Sl4kwhYJY",
    },
    currentTime: 0,
    currentDuration: 0,
    paused: true,
    muted: false,
    volume: 1,
    volumeInterval: 0.2,
    playlist: [
      {
        title: "Beethoven - Moonlight Sonata",
        src: "https://wynk.in/u/Sl4kwhYJY",
      },
      {
        title: "Francisco - Tarrega Lagrima",
        src:
          "https://www.mfiles.co.uk/mp3-downloads/francisco-tarrega-lagrima.mp3",
      },
      {
        title: "Rachmaninoff - Prelude in G Minor",
        src:
          "https://www.mfiles.co.uk/mp3-downloads/rachmaninoff-prelude-in-g-minor.mp3",
      },
      {
        title: "Chopin - Nocturne No. 2",
        src:
          "https://www.mfiles.co.uk/mp3-downloads/chopin-nocturne-op9-no2.mp3",
      },
    ],
  };

  interval = null;

  componentDidMount() {
    /**
     * PLAYER SETUP
     */

    this.player = document.createElement("audio");
    this.player.src = this.state.currentTrack.src;
    this.player.load();
    if (this.state.paused) this.player.pause();
    else this.player.play();

    /**
     * EVENT LISTENERS
     */

    this.player.addEventListener("loadedmetadata", () => {
      this.setState({
        currentTime: this.player.currentTime,
        currentDuration: this.player.duration,
      });
    });

    this.player.addEventListener("play", () => this.play());

    this.player.addEventListener("pause", () => this.pause());

    this.player.addEventListener("ended", () => this.nextTrack());
  }

  componentWillUnmount() {
    this.player.removeEventListener("play");
    this.player.removeEventListener("pause");
    this.player.removeEventListener("ended");
    this.player.removeEventListener("loadedmetadata");
    document.removeEventListener("keydown");
  }

  refreshCurrentTime = () => {
    this.setState({
      currentTime: this.player.currentTime,
    });
  };

  formateTime = (time) => {
    var h = Math.floor(time / 3600);
    var m = Math.floor((time - h * 3600) / 60);
    var s = Math.floor(time - h * 3600 - m * 60);
    return (
      (h > 0 ? h + ":" : "") +
      (m < 10 ? "0" + m : m) +
      ":" +
      (s < 10 ? "0" + s : s)
    );
  };

  play = () => {
    this.setState(
      {
        paused: false,
      },
      () => {
        this.player.play();
        this.interval = setInterval(this.refreshCurrentTime, 100);
      }
    );
  };

  pause = () => {
    this.setState(
      {
        paused: true,
      },
      () => {
        this.player.pause();
        clearInterval(this.interval);
      }
    );
  };

  togglePlayPause = () => {
    if (this.state.paused) {
      this.play();
    } else {
      this.pause();
    }
  };

  setCurrentTrack = (track) => {
    if (track.src === this.state.currentTrack.src) {
      if (this.state.paused) {
        this.play();
      } else {
        this.pause();
      }
    } else {
      this.setState(
        {
          currentTrack: track,
        },
        () => {
          this.player.src = this.state.currentTrack.src;
          this.player.load();
          this.play();
        }
      );
    }
  };

  nextTrack = () => {
    const index = this.state.playlist
      .map((track) => track.src)
      .indexOf(this.state.currentTrack.src);
    if (index < this.state.playlist.length - 1) {
      this.setCurrentTrack(this.state.playlist[index + 1]);
    } else {
      this.setCurrentTrack(this.state.playlist[0]);
    }
  };

  prevTrack = () => {
    const index = this.state.playlist
      .map((track) => track.src)
      .indexOf(this.state.currentTrack.src);
    if (index > 0) {
      this.setCurrentTrack(this.state.playlist[index - 1]);
    } else {
      this.setCurrentTrack(this.state.playlist[this.state.playlist.length - 1]);
    }
  };

  getInitialState = () => {
    return { selectValue: "Calm" };
  };

  handleChange = (e) => {
    this.setState({ selectValue: e.target.value });
    console.log(e.target.value);
  };

  render() {
    return (
      <div className="musicPlayer__container">
        <div className="musicPlayer__player">
          <div className="musicPlayer__title" title="Track title">
            <h3>{this.state.currentTrack.title}</h3>
          </div>
          <div className="musicPlayer__controls">
            <IconButton
              onClick={this.prevTrack}
              icon="skip_previous"
              title="Previous track"
              className="musicPlayer__icon"
            >
              <SkipPreviousIcon />
            </IconButton>

            <IconButton
              onClick={this.togglePlayPause}
              size="md-36"
              title={this.state.paused ? "Play" : "Pause"}
              className="musicPlayer__icon"
            >
              {this.state.paused ? <PlayArrowIcon /> : <PauseIcon />}
            </IconButton>

            <IconButton
              onClick={this.nextTrack}
              icon="skip_next"
              title="Next track"
              className="musicPlayer__icon"
            >
              <SkipNextIcon />
            </IconButton>

            <select
              value={this.state.selectValue}
              onChange={this.handleChange}
              className="musicPlayer__dropdown"
            >
              <option value="Study">Study</option>
              <option value="Calm">Calm</option>
              <option value="Sleep">Sleep</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default MusicPlayer;
