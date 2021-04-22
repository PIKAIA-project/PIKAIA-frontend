import React, { useState } from "react";
import Hi from "./Images/SignUp.png";
import Sign from "./Images/SignIn.png";
import { getCookie } from "./utils";
import { useHistory } from "react-router-dom";

import "./Login.css";
import { Redirect } from "react-router";

const Login = () => {
  const [isActive, setActive] = useState("false");
  const [loggedIn, setLoggedIn] = useState("false");
  const [loginDetails, setLoginDetails] = useState({
    loginUse: "",
    loginPass: "",
  });
  const [signupDetails, setSignupDetails] = useState({
    signUpUse: "",
    signUpPass: "",
  });
  const onSignupDetailsChange = (e) => {
    setSignupDetails((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };
  const onLoginDetailsChange = (e) => {
    setLoginDetails((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = () => {
    loginUser();
  };
  const handleSignup = () => {
    alert("signup " + signupDetails.signUpPass + " " + signupDetails.signUpUse);
  };

  const handleToggle = () => {
    setActive(!isActive);
  };

  // login ======================== from here
  const loginUser = () => {
    // prevent submit behaviour of page

    let authorization = "";

    // base 64 encoding and creating authorization header
    authorization =
      "Basic " + btoa(loginDetails.loginUse + ":" + loginDetails.loginPass);

    var myHeaders = new Headers();
    myHeaders.append(
      "Ocp-Apim-Subscription-Key",
      "1a55d8e0ffa94fc7988a1fc24deb69b0"
    );
    myHeaders.append("Authorization", authorization);
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch("https://pikaia.azurewebsites.net/login", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        let token = data.token;
        // remove previously created cookie
        document.cookie =
          "token" + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";

        // saving token in cookie
        let date = new Date();
        date.setTime(date.getTime() + 3 * 60 * 60 * 1000); // 3 hours
        let expires = "; expires=" + date.toUTCString();
        document.cookie = "token=" + token + expires + "; path=/";

        // change login state - this is what causes infine loop... destroy this state after redirect
        setLoggedIn("true");
        alert("login success");

        // ?: success to - here
      })
      .catch((error) => {
        // ?: login error from - here
        alert("login success");
        // ?: login error to - here
      });
  };

  // login ======================== to here

  // login logic
  // 1. send login request
  // 2. store cookie
  // 3. redirect to home page

  // sign in logic
  // 1. create new user - if username is unique
  // 2. redirect to login page

  // route guards
  // 1. check for token in local storage
  // if token not there, meaning login is expired
  // 2. use token for request...

  return (
    <>
      <div
        class="login__container"
        className={
          isActive ? "login__container" : "login__container sign-up-mode"
        }
      >
        {
          // loggedIn ? <Redirect to="/home" /> : ""
          //return <Redirect to='/login'  />
        }
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" class="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  id="login-username"
                  required
                  type="text"
                  placeholder="Username"
                  onChange={onLoginDetailsChange}
                  name="loginUse"
                  value={loginDetails.loginUse}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  id="login-password"
                  required
                  type="password"
                  placeholder="Password"
                  onChange={onLoginDetailsChange}
                  name="loginPass"
                  value={loginDetails.loginPass}
                />
              </div>
              <input
                id="login-submit"
                onClick={handleLogin}
                type="text"
                value="Login"
                className="btn solid"
              />
            </form>
            <form action="#" className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  onChange={onSignupDetailsChange}
                  name="signUpUse"
                  value={signupDetails.username}
                  type="text"
                  placeholder="Username"
                />
              </div>

              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  onChange={onSignupDetailsChange}
                  name="signUpPass"
                  value={signupDetails.password}
                  type="password"
                  placeholder="Password"
                />
              </div>
              <input
                onClick={handleSignup}
                type="text"
                className="btn"
                value="Sign up"
              />
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <button
                id="sign-up-btn"
                className="btn transparent"
                onClick={handleToggle}
              >
                Sign up
              </button>
            </div>
            <img src={Hi} className="image hello" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button
                className="btn transparent"
                id="sign-in-btn"
                onClick={handleToggle}
              >
                Sign in
              </button>
            </div>
            <img src={Sign} class="image hi" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
// { id: "11", sender: "user", message: "user - message 11" },
