import React from "react";
import "./Home.css";
import Quotes from "./prevChat/Componants/Quotes";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__top">
          <Quotes />
        </div>
        <div className="home__bottom">
          <div className="home__bottomLeft">
            <div className="home__bottomLeftTop"></div>
            <div className="home__bottomLeftBottom"></div>
          </div>
          <div className="home__bottomRight"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
