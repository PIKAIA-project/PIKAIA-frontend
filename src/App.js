import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import Login from "./Login";
import { getIsLoggedIn } from "./utils";
import PageNotFound from "./PageNotFound";
import Loading from "./Loading";
import "./App.css";
import Home from "./AppContainer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  // Link,
  // useRouteMatch,
  // useParams,
} from "react-router-dom";
// react-route-guard import
import { GuardProvider, GuardedRoute } from "react-router-guards";
import { BrowserRouter } from "react-router-dom";
import About from "./About";

// const getIsLoggedIn = () => {
//   return false;
// };

const requireLogin = (to, from, next) => {
  if (to.meta.redirect) {
    next.redirect("/login");
  }

  if (to.meta.auth) {
    if (getIsLoggedIn()) {
      next();
      console.log("log in is true");
    } else {
      next.redirect("/login");
      console.log("log in is false");
    }
  } else {
    next();
  }
};

function App() {
  return (
    <>
      <BrowserView>
        <Router>
          <div className="appContainer">
            {/* BrowserRouter is for route if for route guards */}
            <BrowserRouter>
              <GuardProvider
                guards={[requireLogin]}
                loading={Loading}
                error={PageNotFound}
              >
                <Switch>
                  <GuardedRoute
                    path={["/login", "/signup"]}
                    exact
                    component={Login}
                  />
                  <GuardedRoute
                    path="/"
                    exact
                    component={Home}
                    meta={{ auth: true }}
                  >
                    <Redirect to="/home" />
                  </GuardedRoute>
                  <GuardedRoute
                    path="/home"
                    exact
                    component={Home}
                    meta={{ auth: true }}
                  />

                  <GuardedRoute
                    path="*"
                    meta={{ redirect: true }}
                    component={PageNotFound}
                  />
                  {/* <Route path="/admin"> <Admin /> </Route> */}
                </Switch>
              </GuardProvider>
            </BrowserRouter>
          </div>
        </Router>
      </BrowserView>
      <MobileView>
        <BrowserView>
          <Router>
            <div className="appContainer">
              <Switch>
                <Route path={["/login", "/signup"]}>{/* <Login /> */}</Route>
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
