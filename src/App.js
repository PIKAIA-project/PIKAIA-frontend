import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import Login from "./Login";
import "./App.css";
import Home from "./AppContainer";
import prevChat from "./prevChat/PrevChat";

function App() {
  return (
    <>
      <BrowserView>
        {/* <Login /> */}
        <Home />
        <prevChat/>
      </BrowserView>
      <MobileView>
        <h1> This is rendered displayed on mobile view </h1>
      </MobileView>
    </>
  );
}

export default App;
