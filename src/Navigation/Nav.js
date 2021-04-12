import React from "react";
import "./Styles/Nav.css";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import { Avatar, IconButton } from "@material-ui/core";
import MusicNoteRoundedIcon from "@material-ui/icons/MusicNoteRounded";
import ShowChartRoundedIcon from "@material-ui/icons/ShowChartRounded";
import AssistantRoundedIcon from "@material-ui/icons/AssistantRounded";

function Nav() {
  return (
    <div className="nav">
      <IconButton>
        <Avatar />
      </IconButton>
    </div>
  );
}

export default Nav;
