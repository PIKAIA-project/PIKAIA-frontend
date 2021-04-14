import React from "react";
import "./AppContainer.css";
import { IconButton } from "@material-ui/core";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import MusicNoteRoundedIcon from "@material-ui/icons/MusicNoteRounded";
import ShowChartRoundedIcon from "@material-ui/icons/ShowChartRounded";
import Nav from "./Navigation/Nav";
import { Chat } from "@material-ui/icons";
import SwipeableRoutes from "react-swipeable-routes";
import ChatVeiw from "./Chat";
import Home from "./Home";
import Music from "./Music";
import Chart from "./Chart";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function AppContainer() {
  // const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log("new value", newValue);
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className="appContainer">
      <Nav className="appContainer__topNav" />
      <Router>
        {" "}
        <SwipeableRoutes
          replace
          className="appContainer__swipableContainer"
          enableMouseEvents
        >
          <Route path="/home" component={Home} />
          <Route path="/chat" component={ChatVeiw} />
          <Route path="/binaural-beats" component={Music} />
          <Route path="/charts" component={Chart} />
          
        </SwipeableRoutes>
        <div className="appContainer__nav">
          <Link to="/home">
            <IconButton>
              <HomeRoundedIcon />
            </IconButton>
          </Link>{" "}
          <Link to="/chat">
            <IconButton>
              <Chat />
            </IconButton>
          </Link>{" "}
          <Link to="/binaural-beats">
            <IconButton>
              <MusicNoteRoundedIcon />
            </IconButton>
          </Link>{" "}
          <Link to="/charts">
            <IconButton>
              <ShowChartRoundedIcon />
            </IconButton>
          </Link>{" "}
        </div>
      </Router>
    </div>
  );
}

export default AppContainer;
