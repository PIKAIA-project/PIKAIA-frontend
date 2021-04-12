import React from "react";
import "./AppContainer.css";
import { Tabs, Tab, makeStyles } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import MusicNoteRoundedIcon from "@material-ui/icons/MusicNoteRounded";
import ShowChartRoundedIcon from "@material-ui/icons/ShowChartRounded";
import AssistantRoundedIcon from "@material-ui/icons/AssistantRounded";
import SwipeableViews from "react-swipeable-views";
import Quotes from "./prevChat/Componants/Quotes";
import Nav from "./Navigation/Nav";
import { Chat } from "@material-ui/icons";
import ChatVeiw from "./Chat";
import Home from "./Home";
import Music from "./Music";
import Chart from "./Chart";

class AppContainer extends React.Component {
  state = {
    index: 0,
  };

  handleChange = (event, value) => {
    this.setState({
      index: value,
    });
  };

  handleChangeIndex = (index) => {
    this.setState({
      index,
    });
  };

  render() {
    const { index } = this.state;
    return (
      <div className="appContainer">
        <Nav className="appContainer__topNav" />
        <div className="appContainer__container">
          <SwipeableViews
            className="appContainer__swipableContainer"
            index={index}
            onChangeIndex={this.handleChangeIndex}
            enableMouseEvents
          >
            <div className="appContainer__home" style={Object.assign({})}>
              <Quotes />
              <Home />
            </div>
            <div style={Object.assign({})}>
              <ChatVeiw />
            </div>
            <div style={Object.assign({})}>
              <Music />
            </div>
            <div style={Object.assign({})}>
              <Chart />
            </div>
          </SwipeableViews>
        </div>
        <div className="appContainer__nav">
          <Tabs
            value={index}
            fullWidth
            onChange={this.handleChange}
            className="appContainer__navTabs"
          >
            <Tab
              disableRipple
              icon={
                <IconButton>
                  <HomeRoundedIcon />
                </IconButton>
              }
            />
            <Tab
              disableRipple
              icon={
                <IconButton>
                  <Chat />
                </IconButton>
              }
            />
            <Tab
              disableRipple
              icon={
                <IconButton>
                  <MusicNoteRoundedIcon />
                </IconButton>
              }
            />
            <Tab
              disableRipple
              icon={
                <IconButton>
                  <ShowChartRoundedIcon />
                </IconButton>
              }
            />
          </Tabs>
        </div>
      </div>
    );
  }
}

export default AppContainer;
