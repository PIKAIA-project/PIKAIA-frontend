import React from "react";
import ChartWidget from "./ChartWidget";
import MusicWidget from "./MusicWidget";
import Quotes from "./prevChat/Componants/Quotes";
import Wave from "./Wave";

import "./Home.css";
import { Link } from "react-router-dom";
import { Menu, MenuItem } from "@material-ui/core";
import ChatWidget from "./ChatWidget";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__top">
          <Quotes />
          <ChatWidget />
        </div>
        <div className="home__bottom">
          <div className="home__bottomLeft">
            <div className="home__bottomLeftTop">
              <Link
                to="/charts"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <ChartWidget />
              </Link>
            </div>
            <div className="home__bottomLeftBottom">
              <Link
                to="/binaural-beats"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <MusicWidget />
              </Link>
            </div>
          </div>
          <div className="home__bottomRight">
            <Wave />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
