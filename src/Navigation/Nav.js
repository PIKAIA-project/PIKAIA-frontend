import "./Styles/Nav.css";
import { Avatar, IconButton } from "@material-ui/core";
import React, { useState } from "react";
import ReactTouchEvents from "react-touch-events";
import Portrait from "../Images/Avatar.jpg";
import SettingsIcon from "@material-ui/icons/Settings";
import CloseIcon from "@material-ui/icons/Close";
import Binaural from "../Binaural/Binaural";

function Nav() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="nav">
      {/* <Binaural /> */}
      <ReactTouchEvents onClick={toggleMenu} open={open}>
        <div className={open ? "nav__user" : "nav__toggle"}>
          <h1>Settings</h1>
          <div className="nav__container">
            {/* <div className="nav__userImg">
              <img src={Portrait} alt="" />
            </div>
            <h3>Jhon Doe</h3> */}
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
