import React, { useState } from "react";
import Hi from "./Images/SignUp.png";
import Sign from "./Images/SignIn.png";

import "./Login.css";

const Login = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  // sign in logic
  const createCookie = (tokenVal, expTimeInMins) => {
    let expires = expTimeInMins * 1000; // mils
    document.cookie = "token=" + tokenVal + expires + "; path=/";
  };
  // login ======================== from here
  const loginUser = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Ocp-Apim-Subscription-Key",
      "1a55d8e0ffa94fc7988a1fc24deb69b0"
    );
    myHeaders.append("Authorization", "Basic U2h1aGFpYjoxMjM0NQ==");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://pikaia.azurewebsites.net/login", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        alert(result);
      })
      .catch((error) => console.log("error", error));
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
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" class="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input
                onClick={() => {
                  loginUser();
                }}
                type="button"
                value="Login"
                class="btn solid"
              />
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="#" class="social-icon">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-google"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
            <form action="#" class="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" class="btn" value="Sign up" />
              <p className="social-text">Or Sign up with social platforms</p>
              <div class="social-media">
                <a href="#" class="social-icon">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-google"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
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
