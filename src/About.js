import React, { useState } from "react";
import "./About.css";

const About = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const buttonClasses = {};

  return (
    <div>
      <div className="tab-container">
        <div className="tab-bloc-tabs">
          <button
            className={
              toggleState === 1
                ? "tab-tabs tab-active-tabs tab-tab-controller-btn"
                : "tab-tabs tab-tab-controller-btn"
            }
            onClick={() => toggleTab(1)}
          >
            About Project PIKAIA
          </button>
          <button
            className={
              toggleState === 2
                ? "tab-tabs tab-active-tabs tab-tab-controller-btn"
                : "tab-tabs tab-tab-controller-btn"
            }
            onClick={() => toggleTab(2)}
          >
            Meet the team
          </button>
          <button
            className={
              toggleState === 3
                ? "tab-tabs tab-active-tabs tab-tab-controller-btn"
                : "tab-tabs tab-tab-controller-btn"
            }
            onClick={() => toggleTab(3)}
          >
            Mental Health Awareness
          </button>
        </div>

        <div className="tab-content-tabs">
          <div
            className={
              toggleState === 1
                ? "tab-content  tab-active-content"
                : "tab-content"
            }
          >
            <Tab1 />
          </div>

          <div
            className={
              toggleState === 2
                ? "tab-content  tab-active-content"
                : "tab-content"
            }
          >
            <Tab2 />
          </div>

          <div
            className={
              toggleState === 3
                ? "tab-content  tab-active-content"
                : "tab-content"
            }
          >
            <Tab3 />
          </div>
        </div>
      </div>
    </div>
  );
};

// TODO: add tab 1 content here
const Tab1 = () => {
  return <h2>About Our Project</h2>;
};

// TODO: add tab 2 content here
const Tab2 = () => {
  return <h2>Meet the Amazing people behind the project</h2>;
};

// TODO: add tab 3 content here
const Tab3 = () => {
  return <h2>Mental Health Awareness</h2>;
};

export default About;
