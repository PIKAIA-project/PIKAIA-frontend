import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import Login from "./Login";
import "./App.css";
import Home from "./Home";

function App() {
  return (
    <>
      <BrowserView>
        {/* <Login /> */}
        <Home />
      </BrowserView>
      <MobileView>
        <h1> This is rendered displayed on mobile view </h1>
      </MobileView>
    </>
  );
}

export default App;
