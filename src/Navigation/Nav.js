import "./Styles/Nav.css";
import { Avatar, IconButton } from "@material-ui/core";
import React, { useState } from "react";
import ReactTouchEvents from "react-touch-events";
import Portrait from "../Images/Avatar.jpg";
import SettingsIcon from "@material-ui/icons/Settings";
import CloseIcon from "@material-ui/icons/Close";

function Nav() {
  const [isActive, setActive] = useState("false");

  const handleToggle = (e) => {
    e.preventDefault();
    setActive(!isActive);
  };

  return (
    <div className="nav">
      <ReactTouchEvents onSwipe={handleToggle}>
        <div className={isActive ? "nav__user" : "nav__toggle"}>
          <h1>Settings</h1>
          <div className="nav__container">
            {/* <div className="nav__userImg">
              <img src={Portrait} alt="" />
            </div>
            <h3>Jhon Doe</h3> */}
          </div>
        </div>
      </ReactTouchEvents>
      <IconButton onClick={handleToggle}>
        {isActive ? <CloseIcon /> : <SettingsIcon />}
      </IconButton>
    </div>
  );
}

export default Nav;
