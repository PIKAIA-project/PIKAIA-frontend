import React from "react";
import ReactDOM from "react-dom";
import SettingsContextProvider from "./Binaural/context/SettingsContext";

import App from "./App";

ReactDOM.render(
  <SettingsContextProvider>
    <App />
  </SettingsContextProvider>,
  document.getElementById("root")
);