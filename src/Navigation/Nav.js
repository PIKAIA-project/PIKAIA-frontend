import "./Styles/Nav.css";
import { IconButton } from "@material-ui/core";
import React, { useState } from "react";
import ReactTouchEvents from "react-touch-events";
import SettingsIcon from "@material-ui/icons/Settings";
import CloseIcon from "@material-ui/icons/Close";
import MoodIcon from "@material-ui/icons/Mood";
import MusicIcon from "../Images/Music.svg";
import First_Theme from "../Images/First_Theme.svg";

function Nav() {
  const [open, setOpen] = useState(false);
  const [openBinaural, setOpenBinaural] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const togglebinaural = () => {
    setOpenBinaural(!openBinaural);
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
        {openBinaural ? <CloseIcon /> : <MoodIcon src={MusicIcon} alt="" />}
      </IconButton>
      <ReactTouchEvents onClick={togglebinaural} open={openBinaural}>
        <div
          className={openBinaural ? "nav__Binaural" : "nav__toggleBinaural"}
        ></div>
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
            <button>Log Out</button>
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
