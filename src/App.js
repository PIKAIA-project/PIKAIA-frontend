import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import Login from "./Login";
import "./App.css";
import Home from "./AppContainer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // useRouteMatch,
  // useParams,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserView>
        <Router>
          <div className="appContainer">
            <Switch>
              <Route path={["/login", "/signup"]}>
                <Login />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              {/* <Route path="/admin">
                <Admin />
              </Route> */}
            </Switch>
          </div>
        </Router>
      </BrowserView>
      <MobileView>
        <BrowserView>
          <Router>
            <div className="appContainer">
              <Switch>
                <Route path={["/login", "/signup"]}>
                  {/* <Login /> */}
                </Route>
                <Route path="/home">
                  <Home />
                </Route>
                {/* <Route path="/admin">
                <Admin />
              </Route> */}
              </Switch>
            </div>
          </Router>
        </BrowserView>
      </MobileView>
    </>
  );
}

export default App;
