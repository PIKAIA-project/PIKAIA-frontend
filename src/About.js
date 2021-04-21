import React, { useState } from 'react'
import './About.css'
import Bot1 from '../src/Images/Bot.png';
import Comp from '../src/Images/HaxMas.jpg';
import CompHACK from '../src/Images/IIT HACK.jpeg';
import Complement from '../src/Images/Complements.jpg';

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
          <div class="tab"> About Project PIKAIA</div>
          </button>
          <button
            className={
              toggleState === 2
                ? 'tab-tabs tab-active-tabs tab-tab-controller-btn'
                : 'tab-tabs tab-tab-controller-btn'
            }
            onClick={() => toggleTab(2)}
          >
          
          <div class="tab">  Meet the team </div>
          </button>
          <button
            className={
              toggleState === 3
                ? 'tab-tabs tab-active-tabs tab-tab-controller-btn'
                : 'tab-tabs tab-tab-controller-btn'
            }
            onClick={() => toggleTab(3)}
          >
            <div class="tab"> Mental Health Awareness </div>
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
  return <div class="About_main">
  <div class="about_card">
    
      <img src={Bot1}  alt="Pikaia" class="about_image"/>
      <h1 class="H1_header">PROJECT PIKAIA </h1>
      <p class="P1_Para" >~ Our vision and our mission ~</p>

      <hr class="hr1"></hr>
      
      <p class="P2_Para">Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      
      <hr class="hr2"></hr>
      
      <h1 class="about_comp">Competitions Team PhyOps has joined</h1>
      <div class="container_1">
      <img src={Comp}  alt="HaxMas" class="about_img_haxmas"/>
      <p class="About_img_comp_para">Team PyOps, Project PIKAIA earning 4th place out of 40 impressive and outstanding ideas. HaxMas was also their very first team event</p>
      </div>

      <hr class="hr2"></hr>

      <div class="container_1">
      <p class="About_img_compHack_para">Currently participating in IIT HACK with the goal of trying to get to the top 3 and gaining experience for self and team growth</p>
      <img src={CompHACK}  alt="IIT HACK" class="about_img_IITHACK"/>
     
      </div>

      <hr class="hr2"></hr>

      <div class="container_1">
      <img src={Complement}  alt="Ayeee!" class="about_img_Complements"/>
      <p class="About_img_Complement_para"> Mrs Anna Kalm (Founder CEO of Ascentic) and Mrs Dhanisha Paul (Director Delivery at Sysco Labs) acknowledge team Pyop's project PIKAIA both in Linkedin and on the day of HaxMas 2021 </p>
      </div>
      </div>
      

  

</div>
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
  return <div class="About_main">
  <div class="about_card">
    
      <img src={Bot1}  alt="Pikaia" class="about_image"/>
      <h1 class="H1_header">PROJECT PIKAIA </h1>
      <p class="P1_Para" >~ Mental health? ~</p>

      <hr></hr>
      
      <p class="P2_Para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
  

  

</div>
}

export default About
