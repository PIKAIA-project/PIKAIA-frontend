import "./Styles/Nav.css";
import { IconButton } from "@material-ui/core";
import React, { useState } from "react";
import ReactTouchEvents from "react-touch-events";
import SettingsIcon from "@material-ui/icons/Settings";
import CloseIcon from "@material-ui/icons/Close";
import MoodIcon from "@material-ui/icons/Mood";
import MusicIcon from "../Images/Music.svg";
import Fire from "../Images/fire.svg";
import Love from "../Images/love.svg";
import Meditation from "../Images/meditation.svg";
import First_Theme from "../Images/First_Theme.svg";
import Sleep from "../Images/sleep.svg";
import Health from "../Images/healthcare.svg";
import Tooltip from "@material-ui/core/Tooltip";
import ReactMusicPlayer from "../ReactMusicPlayer";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";
import { logOutUser } from "./../utils";

function Nav() {
  const [open, setOpen] = useState(false);
  const [openBinaural, setOpenBinaural] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const togglebinaural = () => {
    setOpenBinaural(!openBinaural);
  };

  const onLogout = () => {
    logOutUser();
    window.location.href = "/login";
  };

  // const lightButton = document.getElementById('light');

  const body = document.body;

  const theme = localStorage.getItem("theme");

  const isfirstTheme = localStorage.getItem("isfirstTheme");

  const issecondTheme = localStorage.getItem("issecondTheme");

  const isthirdTheme = localStorage.getItem("isthirdTheme");

  if (theme) {
    body.classList.add(theme);
    isfirstTheme && body.classList.add("firstTheme");
  }
  if (theme) {
    body.classList.add(theme);
    issecondTheme && body.classList.add("secondTheme");
  }
  if (theme) {
    body.classList.add(theme);
    isthirdTheme && body.classList.add("thirdTheme");
  }

  const themeOne = () => {
    if (
      body.classList.contains("firstTheme") ||
      body.classList.contains("secondTheme") ||
      body.classList.contains("thirdTheme")
    ) {
      body.classList.remove("firstTheme");
      body.classList.remove("secondTheme");
      body.classList.remove("thirdTheme");
      localStorage.removeItem("isfirstTheme");
      // }
    } else {
      body.classList.add("firstTheme");
      localStorage.setItem("isfirstTheme", true);
    }
  };

  const themeScecond = () => {
    if (
      body.classList.contains("firstTheme") ||
      body.classList.contains("secondTheme") ||
      body.classList.contains("thirdTheme")
    ) {
      body.classList.remove("secondTheme");
      body.classList.remove("thirdTheme");
      body.classList.remove("firstTheme");
      localStorage.removeItem("issecondTheme");
    } else {
      body.classList.add("secondTheme");
      localStorage.setItem("issecondTheme", true);
    }
  };

  const themeThree = () => {
    if (
      body.classList.contains("firstTheme") ||
      body.classList.contains("secondTheme") ||
      body.classList.contains("thirdTheme")
    ) {
      body.classList.remove("thirdTheme");
      body.classList.remove("secondTheme");
      body.classList.remove("firstTheme");

      localStorage.removeItem("isthirdTheme");
    } else {
      body.classList.add("thirdTheme");
      localStorage.setItem("isthirdTheme", true);
    }
  };

  return (
    <div className="nav">
      <IconButton onClick={togglebinaural} open={openBinaural}>
        {openBinaural ? <CloseIcon /> : <QueueMusicIcon />}
      </IconButton>
      <ReactTouchEvents onClick={togglebinaural} open={openBinaural}>
        <div className={openBinaural ? "nav__Binaural" : "nav__toggleBinaural"}>
          <ReactMusicPlayer />
        </div>
      </ReactTouchEvents>
      <ReactTouchEvents onClick={toggleMenu} open={open}>
        <div className={open ? "nav__user" : "nav__toggle"}>
          <h1>Settings</h1>
          <div className="nav__settings">
            <h3>Change Theme</h3>
            <div className="nav__themeControl">
              <div className="nav__themeOne" onClick={themeOne}></div>
              <div className="nav__themeTwo" onClick={themeScecond}></div>
              <div className="nav__themeThree" onClick={themeThree}></div>
              <div className="nav__themeFour" onClick={themeOne}></div>
            </div>
            <div className="nav__themeControl">
              <div className="nav__themePic">
                <img src={First_Theme} alt="" />
              </div>
              <div className="nav__themePic">
                <img src={First_Theme} alt="" />
              </div>
              <div className="nav__themePic">
                <img src={First_Theme} alt="" />
              </div>
              <div className="nav__themePic">
                <img src={First_Theme} alt="" />
              </div>
            </div>
            <div className="nav__goal">
              <h3>Set Daily Goal</h3>
              <div className="nav__goalContainer">
                <Tooltip title="Energitic Day">
                  <div className="nav__goalPic goalOne">
                    <img src={Fire} alt="" />
                  </div>
                </Tooltip>
                <Tooltip title="Health Care">
                  <div className="nav__goalPic goalOne">
                    <img src={Health} alt="" />
                  </div>
                </Tooltip>
                <Tooltip title="Calmness">
                  <div className="nav__goalPic goalOne">
                    <img src={Love} alt="" />
                  </div>
                </Tooltip>

                <Tooltip title="Improve Sleep">
                  <div className="nav__goalPic goalOne">
                    <img src={Sleep} alt="" />
                  </div>
                </Tooltip>
                <Tooltip title="Meditation">
                  <div className="nav__goalPic goalOne">
                    <img src={Meditation} alt="" />
                  </div>
                </Tooltip>
              </div>
            </div>
            <div className="btn__div">
              <button onClick={onLogout}>Log Out</button>
              <Tooltip title="Speak to us in confidence and share your burden. We assure 100% Confidentiality, Anonymity and Acceptance with respect and care.">
                <a href="tel:+94 11 2682535" className="buttonOne">
                  SOS
                </a>
              </Tooltip>
            </div>
          </div>
        </div>
      </ReactTouchEvents>
      <IconButton onClick={toggleMenu} open={open}>
        {open ? <CloseIcon /> : <SettingsIcon />}
      </IconButton>
    </div>
  );
}

export default Nav;
