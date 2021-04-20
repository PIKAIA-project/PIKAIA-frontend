import "./Styles/Nav.css";
import { Avatar, IconButton, Button } from "@material-ui/core";
import React, { useState } from "react";
import ReactTouchEvents from "react-touch-events";
import Portrait from "../Images/Avatar.jpg";
import SettingsIcon from "@material-ui/icons/Settings";
import CloseIcon from "@material-ui/icons/Close";
import Binaural from "../Binaural/Binaural";
import { Style } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";
import MoodIcon from "@material-ui/icons/Mood";
import MusicIcon from "../Images/Music.svg";

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

      //   body.classList.add('secondTheme');
      //   localStorage.setItem('issecondTheme', true);
      // }
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
      //   body.classList.add('thirdTheme');
      //   localStorage.setItem('isthirdTheme', true);
      //  }
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
          <div className="nav__container">
            {/* <div className="nav__userImg">
              <img src={Portrait} alt="" />
            </div>
            <h3>Jhon Doe</h3> */}
            <div class="buttons">
              <button onClick={themeOne} class="btn-hover color-1">
                {" "}
                Woodland - theme{" "}
              </button>
              <button onClick={themeScecond} class="btn-hover color-2">
                {" "}
                Lakeside - theme{" "}
              </button>
              <button onClick={themeThree} class="btn-hover color-3">
                {" "}
                Cornfield - theme{" "}
              </button>
              {/* Logout */}
              <button class="btn-hover color-4"> Log Out </button>
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
