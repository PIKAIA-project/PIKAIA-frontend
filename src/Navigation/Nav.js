import "./Styles/Nav.css";
import { Avatar, IconButton } from "@material-ui/core";
import React, { useState } from "react";
import ReactTouchEvents from "react-touch-events";

function Nav() {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className="nav">
      <ReactTouchEvents onSwipe={handleToggle}>
        <div className={isActive ? "nav__user" : "nav__toggle"}></div>
      </ReactTouchEvents>
      <IconButton>
        <Avatar onClick={handleToggle} />
      </IconButton>
    </div>
  );
}

export default Nav;
