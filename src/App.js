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
      </BrowserView>
      <MobileView>
        <Home />
      </MobileView>
    </>
  );
}

export default App;
