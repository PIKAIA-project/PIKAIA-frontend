import React from "react";
import "./AppContainer.css";
import { Tabs, Tab } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import MusicNoteRoundedIcon from "@material-ui/icons/MusicNoteRounded";
import ShowChartRoundedIcon from "@material-ui/icons/ShowChartRounded";
import SwipeableViews from "react-swipeable-views";
import Quotes from "./prevChat/Componants/Quotes";
import Nav from "./Navigation/Nav";
import { Chat } from "@material-ui/icons";
import SwipeableRoutes from "react-swipeable-routes";
import ChatVeiw from "./Chat";
import Home from "./Home";
import Music from "./Music";
import Chart from "./Chart";
import { BrowserRouter as Router, Route } from "react-router-dom";

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

  console.log("value", value);
  return (
    <div className="appContainer">
      <Nav className="appContainer__topNav" />
      <Router>
        {" "}
        <SwipeableRoutes
          index={value}
          onChangeIndex={handleChangeIndex}
          className="appContainer__swipableContainer"
          enableMouseEvents
        >
          <Route
            path={`home`}
            component={() => <Home value={value} index={0} />}
          />
          <Route
            path={`chat`}
            component={() => <ChatVeiw value={value} index={0} />}
          />
          <Route
            path={`binaural-beats`}
            component={() => <Music value={value} index={0} />}
          />
          <Route
            path={`charts`}
            component={() => <Chart value={value} index={0} />}
          />
        </SwipeableRoutes>
        <div className="appContainer__nav">
          <Tabs
            value={value}
            onChange={handleChange}
            className="appContainer__navTabs"
          >
            <Tab
              to={`home`}
              className={value === 0}
              disableRipple
              icon={
                <IconButton>
                  <HomeRoundedIcon />
                </IconButton>
              }
            />
            <Tab
              to={`chat`}
              className={value === 1}
              disableRipple
              icon={
                <IconButton>
                  <Chat />
                </IconButton>
              }
            />
            <Tab
              to={`binaural-beats`}
              disableRipple
              className={value === 2}
              icon={
                <IconButton>
                  <MusicNoteRoundedIcon />
                </IconButton>
              }
            />
            <Tab
              to={`charts`}
              className={value === 3}
              disableRipple
              icon={
                <IconButton>
                  <ShowChartRoundedIcon />
                </IconButton>
              }
            />
          </Tabs>
        </div>
      </Router>
    </div>
  );
}

export default AppContainer;
