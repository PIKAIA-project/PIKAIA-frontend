import React, { useState } from 'react'
import './About.css'

const About = () => {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index)
  }

  const buttonClasses = {}

  return (
    <div>
      <div className='tab-container'>
        <div className='tab-bloc-tabs'>
          <button
            className={
              toggleState === 1
                ? 'tab-tabs tab-active-tabs tab-tab-controller-btn'
                : 'tab-tabs tab-tab-controller-btn'
            }
            onClick={() => toggleTab(1)}
          >
            About Project PIKAIA
          </button>
          <button
            className={
              toggleState === 2
                ? 'tab-tabs tab-active-tabs tab-tab-controller-btn'
                : 'tab-tabs tab-tab-controller-btn'
            }
            onClick={() => toggleTab(2)}
          >
            Meet the team
          </button>
          <button
            className={
              toggleState === 3
                ? 'tab-tabs tab-active-tabs tab-tab-controller-btn'
                : 'tab-tabs tab-tab-controller-btn'
            }
            onClick={() => toggleTab(3)}
          >
            Mental Health Awareness
          </button>
        </div>

        <div className='tab-content-tabs'>
          <div
            className={
              toggleState === 1
                ? 'tab-content  tab-active-content'
                : 'tab-content'
            }
          >
            <Tab1 />
          </div>

          <div
            className={
              toggleState === 2
                ? 'tab-content  tab-active-content'
                : 'tab-content'
            }
          >
            <Tab2 />
          </div>

          <div
            className={
              toggleState === 3
                ? 'tab-content  tab-active-content'
                : 'tab-content'
            }
          >
            <Tab3 />
          </div>
        </div>
      </div>
    </div>
  )
}

// TODO: add tab 1 content here
const Tab1 = () => {
  return <h2>About our project code comes here</h2>
}

// TODO: add tab 2 content here
const Tab2 = () => {
  return (
    <div className="container">
      <h1 className="heading">Meet The Team</h1>
      <div className="card-wrapper">
          <div className="card">
              <img
                      src="Images/pikaia_bot.png"
                      alt="card background"
                      className="card-img"
              />
              <img
                      src="Images/image_1.jpg"
                      alt="profile image"
                      className="profile-img"
              />
              <h1>Shohan Saverimuttu</h1>
              <p className="job-title">Team leader</p>
              <p className="about">
                  Gibberish, also called jibber-jabber or gobbledygook, is speech
                  that is (or appears to be) nonsense. It may include speech sounds
                  that are not actual words, or language games and specialized
                  jargon that seems nonsensical to outsiders.
              </p>
              <a href="#" className="btn">Contact</a>
              <ul className="social-media">
                  <li>
                      <a href="#"><i className="fab fa-facebook-square"></i></a>
                  </li>
                  <li>
                      <a href="#"><i className="fab fa-twitter-square"></i></a>
                  </li>
                  <li>
                      <a href="#"><i className="fab fa-instagram-square"></i></a>
                  </li>
                  <li>
                      <a href="#"><i className="fab fa-google-plus-square"></i></a>
                  </li>
              </ul>
          </div>

          <div className="card">
              <img
                      src="Images/pikaia_bot.png"
                      alt="card background"
                      className="card-img"
              />
              <img
                      src="Images/thalha.jpg"
                      alt="profile image"
                      className="profile-img"
              />
              <h1>Thalha Muksith</h1>
              <p className="job-title">Member</p>
              <p className="about">
                  Gibberish, also called jibber-jabber or gobbledygook, is speech
                  that is (or appears to be) nonsense. It may include speech sounds
                  that are not actual words, or language games and specialized
                  jargon that seems nonsensical to outsiders.
              </p>
              <a href="#" className="btn">Contact</a>
              <ul className="social-media">
                  <li>
                      <a href="#"><i className="fab fa-facebook-square"></i></a>
                  </li>
                  <li>
                      <a href="#"><i className="fab fa-twitter-square"></i></a>
                  </li>
                  <li>
                      <a href="#"><i className="fab fa-instagram-square"></i></a>
                  </li>
                  <li>
                      <a href="#"><i className="fab fa-google-plus-square"></i></a>
                  </li>
              </ul>
          </div>

          <div className="card">
              <img
                      src="Images/pikaia_bot.png"
                      alt="card background"
                      className="card-img"
              />
              <img
                      src="Images/thoshitha.jpg"
                      alt="profile image"
                      className="profile-img"
              />
              <h1>Thoshitha Kaduruwewa</h1>
              <p className="job-title">Member</p>
              <p className="about">
                  Gibberish, also called jibber-jabber or gobbledygook, is speech
                  that is (or appears to be) nonsense. It may include speech sounds
                  that are not actual words, or language games and specialized
                  jargon that seems nonsensical to outsiders.
              </p>
              <a href="#" className="btn">Contact</a>
              <ul className="social-media">
                  <li>
                      <a href="#"><i className="fab fa-facebook-square"></i></a>
                  </li>
                  <li>
                      <a href="#"><i className="fab fa-twitter-square"></i></a>
                  </li>
                  <li>
                      <a href="#"><i className="fab fa-instagram-square"></i></a>
                  </li>
                  <li>
                      <a href="#"><i className="fab fa-google-plus-square"></i></a>
                  </li>
              </ul>
          </div>

          <div className="card">
              <img
                      src="Images/pikaia_bot.png"
                      alt="card background"
                      className="card-img"
              />
              <img
                      src="Images/shehan.jpg"
                      alt="profile image"
                      className="profile-img"
              />
              <h1>Shehan Saverimuttu</h1>
              <p className="job-title">Member</p>
              <p className="about">
                  Gibberish, also called jibber-jabber or gobbledygook, is speech
                  that is (or appears to be) nonsense. It may include speech sounds
                  that are not actual words, or language games and specialized
                  jargon that seems nonsensical to outsiders.
              </p>
              <a href="#" className="btn">Contact</a>
              <ul className="social-media">
                  <li>
                      <a href="#"><i className="fab fa-facebook-square"></i></a>
                  </li>
                  <li>
                      <a href="#"><i className="fab fa-twitter-square"></i></a>
                  </li>
                  <li>
                      <a href="#"><i className="fab fa-instagram-square"></i></a>
                  </li>
                  <li>
                      <a href="#"><i className="fab fa-google-plus-square"></i></a>
                  </li>
              </ul>
          </div>

          <div className="card">
              <img
                      src="Images/pikaia_bot.png"
                      alt="card background"
                      className="card-img"
              />
              <img
                      src="Images/shuhaib.jpg"
                      alt="profile image"
                      className="profile-img"
              />
              <h1>Shuhaib Ahmed</h1>
              <p className="job-title">Member</p>
              <p className="about">
                  Gibberish, also called jibber-jabber or gobbledygook, is speech
                  that is (or appears to be) nonsense. It may include speech sounds
                  that are not actual words, or language games and specialized
                  jargon that seems nonsensical to outsiders.
              </p>
              <a href="#" className="btn">Contact</a>
              <ul className="social-media">
                  <li>
                      <a href="#"><i className="fab fa-facebook-square"></i></a>
                  </li>
                  <li>
                      <a href="#"><i className="fab fa-twitter-square"></i></a>
                  </li>
                  <li>
                      <a href="#"><i className="fab fa-instagram-square"></i></a>
                  </li>
                  <li>
                      <a href="#"><i className="fab fa-google-plus-square"></i></a>
                  </li>
              </ul>
          </div>

          <div className="card">
              <img
                      src="Images/pikaia_bot.png"
                      alt="card background"
                      className="card-img"
              />
              <img
                      src="Images/chanod.jpg"
                      alt="profile image"
                      className="profile-img"
              />
              <h1>Chanod Bulugammana</h1>
              <p className="job-title">Member</p>
              <p className="about">
                  Gibberish, also called jibber-jabber or gobbledygook, is speech
                  that is (or appears to be) nonsense. It may include speech sounds
                  that are not actual words, or language games and specialized
                  jargon that seems nonsensical to outsiders.
              </p>
              <a href="#" className="btn">Contact</a>
              <ul className="social-media">
                  <li>
                      <a href="#"><i className="fab fa-facebook-square"></i></a>
                  </li>
                  <li>
                      <a href="#"><i className="fab fa-twitter-square"></i></a>
                  </li>
                  <li>
                      <a href="#"><i className="fab fa-instagram-square"></i></a>
                  </li>
                  <li>
                      <a href="#"><i className="fab fa-google-plus-square"></i></a>
                  </li>
              </ul>
          </div>
      </div>
    </div>
)}

// TODO: add tab 3 content here
const Tab3 = () => {
  return <h2>Mental Awareness Code comes here</h2>
}

export default About
