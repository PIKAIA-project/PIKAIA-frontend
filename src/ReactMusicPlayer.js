import React from "react";
import "./ReactMusic.css";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import ReplayIcon from "@material-ui/icons/Replay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import DeleteIcon from "@material-ui/icons/Delete";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import Forward10Icon from "@material-ui/icons/Forward10";
import Replay10Icon from "@material-ui/icons/Replay10";
import VolumeMuteIcon from "@material-ui/icons/VolumeMute";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const Button = ({ content, icon, size, ...props }) => (
  <button {...props}>
    {icon && (
      <i className={"material-icons" + (size ? " " + size : "")}>{icon}</i>
    )}
    {content}
  </button>
);

class ReactMusicPlayer extends React.Component {
  state = {
    currentTrack: {
      title: "Beethoven - Moonlight Sonata",
      src:
        "https://www.mfiles.co.uk/mp3-downloads/moonlight-sonata1-clarinet-and-piano.mp3",
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
        src:
          "https://www.mfiles.co.uk/mp3-downloads/moonlight-sonata1-clarinet-and-piano.mp3",
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
    this.player.volume = this.state.volume;
    this.player.muted = this.state.muted;

    /**
     * EVENT LISTENERS
     */

    document.addEventListener("keydown", (e) => {
      switch (e.keyCode) {
        case 39: // arrow right
          this.player.currentTime += 1;
          break;
        case 37: // arrow left
          this.player.currentTime -= 1;
          break;
        case 38: // arrow up
          this.volumeUp();
          break;
        case 40: // arrow down
          this.volumeDown();
          break;
        case 32: {
          //spacebar
          if (e.target.tagName !== "INPUT") {
            e.preventDefault();
            if (this.player.paused) {
              this.play();
            } else {
              this.pause();
            }
          }
          break;
        }
        case 77: // M key
          this.toggleMuted();
          break;
        default:
          break;
      }
    });

    this.player.addEventListener("loadedmetadata", () => {
      this.setState({
        currentTime: this.player.currentTime,
        currentDuration: this.player.duration,
      });
    });

    this.player.addEventListener("play", () => this.play());

    this.player.addEventListener("pause", () => this.pause());

    this.player.addEventListener("volumechange", (e) => {
      this.setState({ volume: e.target.volume });
    });

    this.player.addEventListener("ended", () => this.nextTrack());
  }

  componentWillUnmount() {
    this.player.removeEventListener("play");
    this.player.removeEventListener("pause");
    this.player.removeEventListener("volumechange");
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

  submitHandler = (e) => {
    e.preventDefault();
    const newTrack = {
      src: this.srcInput.value,
      title: this.titleInput.value,
    };
    if (newTrack.src.length > 0 && newTrack.title.length > 0) {
      e.currentTarget.reset();
      this.setCurrentTrack(newTrack);
      this.setState((state) => ({
        playlist: [
          newTrack,
          ...state.playlist.filter((track) => track.src !== newTrack.src),
        ],
      }));
    }
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

  toggleMuted = () => {
    this.setState(
      (state) => ({
        muted: !state.muted,
      }),
      () => {
        this.player.muted = this.state.muted;
      }
    );
  };

  volumeUp = () => {
    const volume = this.state.volume;
    const volumeInterval = this.state.volumeInterval;
    if (volume < 1) {
      let nextVolume = 1;
      if (volume + volumeInterval <= 1) {
        nextVolume = volume + volumeInterval;
      }
      this.setState(
        {
          volume: nextVolume,
        },
        () => {
          this.player.volume = this.state.volume;
        }
      );
    }
  };

  volumeDown = () => {
    const volume = this.state.volume;
    const volumeInterval = this.state.volumeInterval;
    if (volume > 0) {
      let nextVolume = 0;
      if (volume - volumeInterval >= 0) {
        nextVolume = volume - volumeInterval;
      }
      this.setState(
        {
          volume: nextVolume,
        },
        () => {
          this.player.volume = this.state.volume;
        }
      );
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

  render() {
    return (
      <div className="m_container">
        <div className="player">
          <div className="title" title="Track title">
            {this.state.currentTrack.title}
          </div>
          <div className="time">
            <span className="currentTime" title="Current time">
              {this.formateTime(this.state.currentTime)}
            </span>
            {" / "}
            <span className="currentDuration" title="Track duration">
              {this.formateTime(this.state.currentDuration)}
            </span>
          </div>
          <div className="controls">
            <div className="controls-left">
              <Button
                onClick={this.prevTrack}
                icon={<SkipPreviousIcon />}
                title="Previous track"
              />
              <Button
                onClick={() => (this.player.currentTime -= 10)}
                icon={<Replay10Icon />}
                title="Go 10 seconds back"
              />
              <Button
                icon={
                  this.state.paused ? (
                    <PlayCircleFilledIcon />
                  ) : (
                    <PauseCircleFilledIcon />
                  )
                }
                onClick={this.togglePlayPause}
              />
              <Button
                onClick={() => (this.player.currentTime += 10)}
                icon={<Forward10Icon />}
                title="Skip 10 seconds"
              />
              <Button
                onClick={this.nextTrack}
                icon={<SkipNextIcon />}
                title="Next track"
              />
            </div>
            <div className="controls-right">
              <Button
                onClick={this.volumeDown}
                icon={<RemoveIcon />}
                title="Volume down"
              />
              <Button
                onClick={this.toggleMuted}
                icon={
                  this.state.muted ? (
                    <VolumeOffIcon />
                  ) : this.state.volume === 0 ? (
                    <VolumeMuteIcon />
                  ) : this.state.volume <= 0.8 ? (
                    <VolumeDownIcon />
                  ) : (
                    <VolumeUpIcon />
                  )
                }
                title={this.state.muted ? "Mute off" : "Mute"}
              />
              <Button
                onClick={this.volumeUp}
                icon={<AddIcon />}
                title="Volume up"
              />
            </div>
          </div>
        </div>
        <ul className="playlist">
          {this.state.playlist.map((track, i) => (
            <li
              key={i}
              onClick={() => this.setCurrentTrack(track)}
              className={
                this.state.currentTrack.src === track.src ? "current" : ""
              }
              title={
                this.state.currentTrack.src === track.src && !this.state.paused
                  ? "Pause this track"
                  : "Play this track"
              }
            >
              <Button
                className={"play-pause-button"}
                icon={
                  this.state.currentTrack.src === track.src &&
                  !this.state.paused ? (
                    <PauseCircleFilledIcon />
                  ) : (
                    <PlayCircleFilledIcon />
                  )
                }
                onClick={this.togglePlayPause}
                title={
                  this.state.currentTrack.src === track.src &&
                  !this.state.paused
                    ? "Pause this track"
                    : "Play this track"
                }
              />
              {track.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ReactMusicPlayer;
